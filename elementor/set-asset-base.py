#!/usr/bin/env python3
"""Stamp your WordPress uploads URL into every block.

    python3 set-asset-base.py https://yoursite.com/wp-content/uploads/rio

Reads the *.html blocks here and writes ready-to-paste copies into dist/.
Re-run it any time the URL changes; originals are never modified.
"""
import sys, pathlib, shutil

if len(sys.argv) != 2:
    sys.exit(__doc__)

base = sys.argv[1].rstrip('/')
here = pathlib.Path(__file__).parent
dist = here / 'dist'
dist.mkdir(exist_ok=True)

n = 0
for src in sorted(here.glob('[0-9][0-9]-*.html')):   # blocks only, not preview.html
    text = src.read_text(encoding='utf-8')
    (dist / src.name).write_text(text.replace('{{ASSETS}}', base), encoding='utf-8')
    n += 1
    print(f"  {src.name}  ->  dist/{src.name}")

print(f"\n{n} blocks written to {dist}/ with assets at {base}/")
print("Upload the files in assets/ to that location, then paste dist/*.html in order.")
