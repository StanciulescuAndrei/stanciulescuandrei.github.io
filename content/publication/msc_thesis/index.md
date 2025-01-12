---
title: "Accelerating 3D Gaussian Splat Rendering"
authors:
- admin 
author_notes:

date: "2024-10-24T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["thesis"]

# Publication name and optional abbreviated publication name.
publication: "Universitat Politècnica de Catalunya"
publication_short: ""

abstract: The 3D Gaussian Splatting method for 3D environment reconstruction from images brought significant advancements to photorealistic novel-view synthesis. It combines the advantages of primitive-based rendering with a differentiable renderer, thus obtaining state-of-the-art image quality and surpassing neural methods for scene representation in optimization and rendering speed. This is a significant step towards bringing these methods to real-time consumer applications, however, 3DGS still requires significant computing power which is not available in consumer devices. In this project, I will present a method for accelerating 3DGS rendering through a hierarchical Level of Detail structure that combines a regular octree subdivision with feature-based primitive clustering to obtain lower-detail representations. Also, I will present a level selection solution to maintain the desired detail granularity across the scene by computing a dynamic cut through the scene tree representation. This method achieves a reduction in the frame time between 14% and 33% by reducing the number of primitives in the scene to around 50%, a reduction which maintains the image quality above 31 dB PSNR compared to the original reconstruction.

tags:
- Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: http://hdl.handle.net/2117/420313

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false
---