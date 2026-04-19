---
title: "Duplicate Logic Detector"
description: "GitHub Action that automatically detects duplicate logic in Python code changes using AST analysis and semantic similarity."
date: "2024-01-01"
repoURL: "https://github.com/ArthurMor4is/duplicate-logic-detector-action"
---

GitHub Action that analyzes pull request changes to identify functions with duplicated logic in Python code. Available on the GitHub Marketplace.

## Features

- **Multi-strategy detection**: AST analysis, semantic similarity, and function signature matching
- **3 similarity methods**: Jaccard tokens, sequence matcher, and Levenshtein distance
- **Configurable thresholds**: global and per-folder (0.0–1.0)
- **Automatic PR comments**: posts findings with refactoring suggestions
- **Reports**: generates JSON and Markdown reports

## How it works

The action compares new functions against existing ones using configurable similarity algorithms, filters trivial matches (functions under 5 lines), and provides specific recommendations to consolidate duplicated code.
