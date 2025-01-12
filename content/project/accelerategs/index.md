---
title: 3D Gaussian Splatting Level-of-Detail
date: 2024-08-02
summary: Generating dynamic LoD structures to accelerate 3DGS model rendering
---

This project constitutes my master's thesis for the program Master's in Innovation and Research in Informatics, Computer Graphics, and Virtual Reality specialization at Universitat Politecnica de Catalunya. It was developed during a research stay at the National Institute of Informatics, Tokyo, under the supervision of prof. Akihiro Sugimoto.

[GitHub project repo](https://github.com/StanciulescuAndrei/AccelerateGS)

The main purpose of the project was to develop a method to accelerate the rendering of 3D Gaussian Splatting models on lower-powered hardware. The main point is that the user does not have access to the initial training data and camera poses, and neither has access to hardware powerful enough to fine-tune LoDs. This is why, this method only takes as input the pretrained model and generates the LoDs using only the information in the scene at load time. Obviously, the performance of this is significantly worse than training-based methods, but the scope was not to chase increasing image quality metrics, but to investigate potential improvements for consumer applications, where hardware might be limited.

A Complete description of the development process, methodology and results can be found in the [complete thesis](http://hdl.handle.net/2117/420313), which is published on the university library website.

Lastly, this project is mainly based on the reference implementation of the [3D Gaussian Splatting method](https://github.com/graphdeco-inria/gaussian-splatting) and the [Hierarchical 3D Gaussian Representation](https://github.com/graphdeco-inria/hierarchical-3d-gaussians) for figuring out the maths behind the gaussian merging. These sources and many others are of course properly cited in the published thesis.

<!--more-->
