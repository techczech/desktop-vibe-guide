#!/bin/bash
# Sync markdown docs from /docs/ to /website/public/docs/
# Run from the repository root: ./sync-docs.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$SCRIPT_DIR/docs"
DEST="$SCRIPT_DIR/website/public/docs"

if [ ! -d "$SRC" ]; then
  echo "Error: Source directory $SRC does not exist"
  exit 1
fi

mkdir -p "$DEST"

# Copy all markdown files
cp "$SRC"/*.md "$DEST"/

echo "Synced $(ls "$SRC"/*.md | wc -l | tr -d ' ') markdown files from docs/ to website/public/docs/"
