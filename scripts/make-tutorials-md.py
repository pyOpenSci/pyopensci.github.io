import os
import requests
import xml.etree.ElementTree as ET
from urllib.parse import urlparse
from pathlib import Path

# Configuration
RSS_FEED_URL = "https://www.pyopensci.org/python-package-guide/tutorials.rss"
OUTPUT_DIR = Path("_tutorials")
OUTPUT_DIR.mkdir(exist_ok=True)


def slug_from_url(url):
    """Extract filename from URL and remove `.html`"""
    return Path(urlparse(url).path).stem


def create_markdown_file(title, excerpt, link):
    slug = slug_from_url(link)
    filename = OUTPUT_DIR / f"{slug}.md"

    content = f"""---
title: "{title.strip()}"
excerpt: "{excerpt.strip()}"
link: {link}
btn_label: View Tutorial
btn_class: btn--success btn--large
---
"""
    filename.write_text(content, encoding="utf-8")
    print(f"✅ Created: {filename}")


def main():
    print("🔍 Fetching RSS feed...")
    resp = requests.get(RSS_FEED_URL)
    resp.raise_for_status()

    root = ET.fromstring(resp.content)
    items = root.findall(".//item")

    for item in items:
        title = item.findtext("title")
        link = item.findtext("link")
        excerpt = item.findtext("description")

        if title and link and excerpt:
            create_markdown_file(title, excerpt, link)

    print("🎉 All tutorials processed!")


if __name__ == "__main__":
    main()
