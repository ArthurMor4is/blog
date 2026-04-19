---
title: "Grad-CAM App"
description: "Interactive ML application with Streamlit that visualizes Grad-CAM heatmaps to explain image classifications by neural networks."
date: "2023-01-01"
repoURL: "https://github.com/ArthurMor4is/gradcam-app"
---

A web application demonstrating Grad-CAM (Gradient-weighted Class Activation Mapping) — an Explainable AI technique that reveals which regions of an image influenced a neural network's decision.

## Stack

- **Frontend**: Streamlit
- **Backend**: Starlette
- **Deploy**: Docker Compose

## Quick start

```bash
docker compose up
# Access localhost:8501
```

Upload an image and receive a heatmap overlay showing the regions the model focused on when classifying it. Works with any convolutional neural network regardless of architecture.
