---
title: NeRF CT Scan Reconstruction
date: 2025-02-08
summary: Exploring CT reconstruction using NeRF models for density estimation
---

Following my previous experience on 3D reconstruction, I was interested in trying neural methods for representing a density field, 
such that the scene could be encoded by the model. Now that NeRF models have become insanely popular, it seemed like a good time to 
work on a proof-of-concept for this idea.

[GitHub project repo](https://github.com/StanciulescuAndrei/NeRFCTRec)

I used `astra-toolbox` to generate the scanning setup positions and compute the forward projections for the sinogram. Then I implemented a basic NeRF model which first learns the scene from the given sinogram, then I perform a structured sampling to evaluate the learned density field. From this basic implementation, I then introduced neural hash grids for faster training and inference, which also improved the model performance, and TV regularization for noise removal. Evaluating against traditional methods for CT reconstruction, my implementation performs well but falls behind significantly in terms of processing time, and in terms of image quality when compared to the better algebraic iterative algorithms. More details on the GithHub page.

![rec gif](ct.gif)
<!--more-->
