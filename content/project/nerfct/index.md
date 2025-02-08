---
title: NeRF CT Scan Reconstruction
date: 2025-02-08
summary: Exploring CT reconstruction using NeRF models for density estimation
---

Following my previous experience on 3D reconstruction, I was interested in trying neural methods for representing a density field, 
such that the scene could be encoded by the model. Now that NeRF models have become insanely popular, it seemed like a good time to 
work on a proof-of-concept for this idea.

[GitHub project repo](https://github.com/StanciulescuAndrei/NeRFCTRec)

The structure of the model is verly similar to NeRF, however I chose to go with fewer hidden layers as there is less information to be represented.
For CT scanning, we are only interested in the density at a given point. There is no color information and the density does not change based on the viewing direction.

Also, when working with data from X-Ray sensors, the value represents the integral of density along the ray through the volume (of course after some processing steps which are not necessary with the setup I am using for this). This is also less complex than the volumetric rendering typically used in NeRFs. For each ray, we can sample the model at a given set of points and integrate the values knowing the densities and the distance between samples. When the sinogram is complete, the error is computed as the L2 distance between the original sinogram and the sinogram from the current iteration. 

Finally, when the model is fitted, we want to extract the densities inside the model. This is different from NeRF, where you usually generate a rendering from a novel camera position. In this case, we want to perform a structured sampling of the model at the desired resolution to view the distribution of densities inside the sample. Because it is a continous model, we can theoretically obtain any resolution we want by sampling coarser or finer, but of course the quality of the information will depend a lot on the number of initial projections, their positioning and the quality of the fit.

<!--more-->
