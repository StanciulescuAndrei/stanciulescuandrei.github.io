---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many experience `items` below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Research Intern
          company: National Institute of Informatics
          company_url: ''
          company_logo: nii
          location: Tokyo, Japan
          date_start: '2024-02-06'
          date_end: '2024-08-03'
          summary: |2-
            - Worked under the supervision of Prof. Akihiro Sugimoto on my Master’s thesis project
            - Extended the rendering pipeline for 3D Gaussian Splatting to allow more efficient rendering
            - Implemented traditional computer graphics techniques for splat rendering
        - title: Research Intern
          company: Universitat Politecnica de Catalunya
          company_url: ''
          company_logo: upc
          location: Barcelona, Spain
          date_start: '2022-12-01'
          date_end: '2024-01-31'
          summary: |2-
            - Research project in collaboration with HP
            - Geometry processing for high-precision 3D printers
            - Implemented various functionalities, mostly focusing on the computation of mesh properties
        - title: C++ Developer - X-Ray Imaging
          company: Accent Pro 2000
          company_url: ''
          company_logo: ap2k-logo
          location: Magurele, Romania
          date_start: '2018-10-01'
          date_end: '2022-07-31'
          summary: |2-
            - Worked on solving inverse problems in 3D X-ray tomography using CUDA and VTK
            - Developed numerical simulations in C++ to validate detector geometry
            - Developed a complete material identification pipeline, from sensor data acquisition to determining material properties
    design:
      columns: '1'

# sections:
#   - block: experience
#     content:
#       username: admin
#     design:
#       # Hugo date format
#       date_format: 'January 2006'
#       # Education or Experience section first?
#       is_education_first: false
---
