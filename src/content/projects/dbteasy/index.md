---
title: "dbteasy"
description: "Python CLI that simplifies dbt usage by creating shortcuts for the most common workflows."
date: "2022-01-01"
demoURL: "https://pypi.org/project/dbteasy/"
repoURL: "https://github.com/ArthurMor4is/dbteasy"
---

Python utility that simplifies working with dbt (data build tool) by reducing repetitive commands in daily workflows. Available on PyPI.

## Installation

```bash
pip install dbteasy
```

## Commands

| Command | Description |
|---------|-------------|
| `dbteasy run-changed` | Runs `dbt run` only on modified models |
| `dbteasy docs` | Compiles documentation and opens a server on port 8000 |
| `dbteasy refresh` | Chains `dbt clean`, `dbt deps`, and `dbt seed` |

## Requirements

- dbt core
- git
