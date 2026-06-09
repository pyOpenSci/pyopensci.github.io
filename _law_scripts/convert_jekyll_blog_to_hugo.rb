#!/usr/bin/env ruby
# frozen_string_literal: true

require "date"
require "yaml"
require "fileutils"

ROOT = File.expand_path("..", __dir__)
SRC = File.join(ROOT, "jekyll", "_posts")
OUT = File.join(ROOT, "content", "blog")

PERMITTED = [Date, Time, Symbol].freeze

TOPIC_ALIASES = {
  "education" => "learn"
}.freeze

VALID_TOPICS = %w[community learn software updates].freeze

def normalize_topic(raw)
  slug = raw.to_s.strip.downcase
  slug = TOPIC_ALIASES.fetch(slug, slug)
  VALID_TOPICS.include?(slug) ? slug : "community"
end

def stringify_date(value)
  return nil if value.nil? || value.to_s.strip.empty?

  case value
  when Date then value.strftime("%Y-%m-%d")
  when Time then value.to_date.strftime("%Y-%m-%d")
  when String
    return value if value.match?(/\A\d{4}-\d{2}-\d{2}\z/)

    Date.parse(value).strftime("%Y-%m-%d")
  else
    value.to_s
  end
rescue ArgumentError
  nil
end

def date_from_filename(path)
  base = File.basename(path, ".md")
  m = base.match(/\A(\d{4}-\d{2}-\d{2})/)
  m ? m[1] : nil
end

def normalize_image_path(src)
  src.to_s.sub(%r{\A/}, "").sub(%r{\Aimages/}, "images/")
end

def transform_body(body)
  b = body.dup

  b.gsub!(/\{\{\s*site\.baseurl\s*\}\}/, "")

  b.gsub!(/\{%\s*include pyos-blockquote\.html\s+([^%]+)\s*%\}/m) do
    attrs = Regexp.last_match(1)
    quote = attrs[/quote="([^"]*)"/, 1]
    author = attrs[/author="([^"]*)"/, 1]
    next "" unless quote

    lines = ["> #{quote}"]
    lines << ">" if author
    lines << "> — #{author}" if author
    "\n#{lines.join("\n")}\n"
  end

  b.gsub!(/\{%\s*include\s+[^%]+%\}\s*/m, "")
  b.gsub!(/\{:\s*\.notice--\w+\s*\}\s*/m, "")

  b.gsub!(%r{<figure>\s*<picture>.*?</picture>\s*(?:<figcaption>(.*?)</figcaption>)?\s*</figure>}m) do
    block = Regexp.last_match(0)
    figcaption = Regexp.last_match(1)
    src = block[%r{<img[^>]+src="([^"]+)"}, 1]
    alt = block[/alt="([^"]*)"/, 1] || ""
    next block unless src

    src = normalize_image_path(src)
    caption = figcaption.to_s.strip
    if caption.empty?
      "{{< figure src=\"#{src}\" alt=\"#{alt.gsub('"', '\\"')}\" >}}"
    else
      "{{< figure src=\"#{src}\" alt=\"#{alt.gsub('"', '\\"')}\" caption=\"#{caption.gsub('"', '\\"')}\" >}}"
    end
  end

  b.gsub!(/\*{3,}\s*\n/, "\n")
  b.gsub!(%r{/events\.html\b}, "/events/")
  b
end

def build_hugo_front_matter(fm, path)
  date = stringify_date(fm["date"]) || date_from_filename(path)
  topic = normalize_topic(fm["blog_topic"])

  img_src = fm["blog_image"] || fm.dig("header", "overlay_image")
  img_alt = fm["blog_image_alt"] || fm["title"]

  h = {
    "title" => fm["title"],
    "date" => date,
    "type" => "blog",
    "excerpt" => fm["excerpt"],
    "author" => fm["author"],
    "blog_topic" => topic,
    "toc" => fm["toc"],
    "comments" => fm["comments"]
  }.compact

  h["url"] = fm["permalink"] if fm["permalink"]
  h["lastmod"] = stringify_date(fm["last_modified"]) if fm["last_modified"]

  if img_src
    h["image"] = {
      "src" => normalize_image_path(img_src),
      "alt" => img_alt.to_s
    }
  end

  h
end

def convert_file(path)
  raw = File.read(path)
  parts = raw.split(/^---\s*$/)
  return unless parts.length >= 3

  fm = YAML.safe_load(parts[1], permitted_classes: PERMITTED, aliases: true) || {}
  body = transform_body(parts[2].sub(/\A\n+/, ""))
  out_name = File.basename(path)
  out_path = File.join(OUT, out_name)

  front = build_hugo_front_matter(fm, path)
  yaml = front.to_yaml.sub(/\A---\n/, "").sub(/\n\.\.\.\n\z/, "")
  File.write(out_path, "---\n#{yaml}---\n\n#{body}")
  warn "Wrote #{out_path}"
end

targets = ARGV.empty? ? Dir.glob(File.join(SRC, "*.md")).sort : ARGV.map { |f| File.expand_path(f) }

FileUtils.mkdir_p(OUT)
targets.each { |path| convert_file(path) }
