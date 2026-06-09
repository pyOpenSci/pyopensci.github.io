#!/usr/bin/env ruby
# frozen_string_literal: true

require "date"
require "yaml"

ROOT = File.expand_path("..", __dir__)
JEKYLL_POSTS = File.join(ROOT, "jekyll", "_posts")
HUGO_BLOG = File.join(ROOT, "content", "blog")
PERMITTED = [Date, Time, Symbol].freeze

VALID_TOPICS = %w[community learn software updates].freeze

def normalize_topic(raw)
  slug = raw.to_s.strip.downcase
  slug = "learn" if slug == "education"
  VALID_TOPICS.include?(slug) ? slug : "community"
end

def hugo_file_for_jekyll(path)
  base = File.basename(path)
  date_prefix = base[0, 10]
  Dir.glob(File.join(HUGO_BLOG, "#{date_prefix}*.md")).first
end

def topic_from_jekyll(fm)
  return normalize_topic(fm["blog_topic"]) if fm["blog_topic"]

  cats = Array(fm["categories"]).map(&:to_s)
  cats.each do |cat|
    next if cat == "blog-post"

    slug = cat.downcase.tr("_", "-")
    return normalize_topic(slug) if VALID_TOPICS.include?(normalize_topic(slug))
  end

  "community"
end

def update_hugo_front_matter(path, topic)
  raw = File.read(path)
  parts = raw.split(/^---\s*$/)
  return false unless parts.length >= 3

  fm = YAML.safe_load(parts[1], permitted_classes: PERMITTED, aliases: true) || {}
  fm.delete("category")
  fm["blog_topic"] = topic

  body = parts[2]
  yaml = fm.to_yaml.sub(/\A---\n/, "").sub(/\n\.\.\.\n\z/, "")
  File.write(path, "---\n#{yaml}---#{body}")
  true
end

updated = 0
skipped = []

Dir.glob(File.join(JEKYLL_POSTS, "*.md")).sort.each do |jekyll_path|
  raw = File.read(jekyll_path)
  parts = raw.split(/^---\s*$/)
  next unless parts.length >= 3

  fm = YAML.safe_load(parts[1], permitted_classes: PERMITTED, aliases: true) || {}
  topic = topic_from_jekyll(fm)
  hugo_path = hugo_file_for_jekyll(jekyll_path)

  unless hugo_path
    skipped << File.basename(jekyll_path)
    next
  end

  if update_hugo_front_matter(hugo_path, topic)
    warn "#{File.basename(hugo_path)} → blog_topic: #{topic}"
    updated += 1
  end
end

# Hugo-only posts (no jekyll twin)
Dir.glob(File.join(HUGO_BLOG, "*.md")).each do |hugo_path|
  next if hugo_path.end_with?("_index.md")

  raw = File.read(hugo_path)
  parts = raw.split(/^---\s*$/)
  next unless parts.length >= 3

  fm = YAML.safe_load(parts[1], permitted_classes: PERMITTED, aliases: true) || {}
  next if fm["blog_topic"]

  topic = if fm["category"]
            case fm["category"].to_s
            when "Open Education" then "learn"
            when "Software" then "software"
            when "Updates" then "updates"
            else "community"
            end
          else
            "community"
          end

  update_hugo_front_matter(hugo_path, topic)
  warn "#{File.basename(hugo_path)} (hugo-only) → blog_topic: #{topic}"
  updated += 1
end

warn "\nUpdated #{updated} posts."
warn "No Hugo match: #{skipped.join(', ')}" unless skipped.empty?
