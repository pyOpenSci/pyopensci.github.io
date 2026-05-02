#!/usr/bin/env ruby
# frozen_string_literal: true

require "date"
require "yaml"
require "fileutils"

ROOT = File.expand_path("..", __dir__)
SRC = File.join(ROOT, "jekyll", "_posts", "events")
OUT = File.join(ROOT, "content", "events")

PERMITTED = [Date, Time, Symbol].freeze

def slugify(s)
  s.downcase.gsub(/[^a-z0-9]+/, "-").gsub(/^-|-$/, "")[0, 60]
end

def stringify_date(d)
  case d
  when Date then d.strftime("%Y-%m-%d")
  when Time then d.to_date.strftime("%Y-%m-%d")
  else d.to_s
  end
end

def normalize_lastmod(v)
  case v
  when Integer
    s = v.to_s.rjust(8, "0")
    return nil if s.length != 8

    Date.new(s[0, 4].to_i, s[4, 2].to_i, s[6, 2].to_i).strftime("%Y-%m-%d")
  when Date
    v.strftime("%Y-%m-%d")
  else
    stringify_date(v)
  end
end

def transform_body(body)
  b = body.dup
  b.gsub!(%r{\{%\s*include\s+[^%]+%\}\s*}m, "\n")
  b.gsub!(%r(\{:\s*\.btn[^}]*\}\s*)m, "")
  b.gsub!(%r{/events\.html\b}, "/events/")
  b.gsub!(/\{\{\s*site\.baseurl\s*\}\}/, "")
  b.gsub!(/\{\%\s*raw\s*\%\}.*?\{\%\s*endraw\s*\%\}/m, "")
  b.gsub!(/\*This post was last updated on\s+\{\{[^}]+\}\}\*/m, "")
  b
end

FileUtils.mkdir_p(OUT)

Dir.glob(File.join(SRC, "*.md")).sort.each do |path|
  raw = File.read(path)
  parts = raw.split(/^---\s*$/)
  next if parts.length < 3

  fm = YAML.safe_load(parts[1], permitted_classes: PERMITTED, aliases: true) || {}
  body = parts[2].sub(/\A\n+/, "")

  ev = fm["event"].is_a?(Hash) ? fm["event"] : {}
  start_d = ev["start_date"] || fm["start_date"]
  next unless start_d

  start_s = stringify_date(start_d)
  title = fm["title"] || "Event"
  slug = slugify(File.basename(path, ".md").sub(/^\d{4}-\d{2}-\d{2}-/, ""))
  out_name = "#{start_s}-#{slug}.md"
  out_path = File.join(OUT, out_name)

  end_s = ev["end_date"] ? stringify_date(ev["end_date"]) : nil
  loc = ev["location"] || ev["location_name"]
  overlay = fm.dig("header", "overlay_image")

  h = {
    "title" => title,
    "date" => start_s
  }

  lm = normalize_lastmod(fm["last_modified"])
  h["lastmod"] = lm if lm

  h["excerpt"] = fm["excerpt"] if fm["excerpt"]

  h["image"] = { "src" => overlay, "alt" => title } if overlay

  eh = { "start_date" => start_s }
  eh["end_date"] = end_s if end_s
  eh["location"] = loc if loc
  h["event"] = eh

  perm = fm["permalink"].to_s.strip
  h["aliases"] = [perm] unless perm.empty?

  h["instructors"] = fm["instructors"] if fm["instructors"].is_a?(Array)

  front = +"#{h.to_yaml}---\n"
  front << transform_body(body)

  File.write(out_path, front)
  warn "Wrote #{out_path}"
end
