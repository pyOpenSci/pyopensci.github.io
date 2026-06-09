#!/usr/bin/env bash
# Sync Jekyll source from main into jekyll/ on hugo-1.
# Never writes to repo root (_posts, _pages, etc.).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! git rev-parse --verify main >/dev/null 2>&1; then
  echo "error: local branch 'main' not found; fetch or create it first" >&2
  exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

sync_tree() {
  local src="$1"
  local dest="$2"
  echo "Syncing main:${src}/ -> ${dest}/"
  rm -rf "$TMP/${src}"
  git archive main "${src}" | tar -x -C "$TMP"
  mkdir -p "$dest"
  rsync -a --delete "$TMP/${src}/" "${dest}/"
}

sync_tree "_posts" "$ROOT/jekyll/_posts"
sync_tree "_data" "$ROOT/jekyll/_data"
sync_tree "_pages" "$ROOT/jekyll/_pages"
sync_tree "images" "$ROOT/jekyll/images"

echo "Done. Review with: git status jekyll/"
