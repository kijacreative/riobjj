#!/usr/bin/env python3
"""Stitch the blocks into preview.html so you can eyeball the assembled page
in a browser before pasting anything into Elementor.

    python3 make-preview.py
"""
import pathlib
here = pathlib.Path(__file__).parent
blocks = sorted(p for p in here.glob('[0-9][0-9]-*.html'))
body = "\n\n".join(p.read_text(encoding='utf-8').replace('{{ASSETS}}', 'assets')
                   for p in blocks)
(here / 'preview.html').write_text(
"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Rio Jiu-Jitsu — Elementor block preview</title>
<link rel="icon" href="../favicon.ico" sizes="any">
<!-- PREVIEW ONLY. Elementor/your theme supplies these two rules. -->
<style>html{scroll-behavior:smooth}body{margin:0;background:#fff}</style>
</head>
<body>
""" + body + """
</body>
</html>
""", encoding='utf-8')
print(f"preview.html built from {len(blocks)} blocks")
for p in blocks: print("  ", p.name)
