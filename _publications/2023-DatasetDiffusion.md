---
title: "Dataset Diffusion: Diffusion-based Synthetic Data Generation for Pixel-Level Semantic Segmentation"
collection: publications
excerpt: 'Training-free framework to synthesize dataset for semantic segmentation by utilizing self + cross attention from Stable Diffusion'
date: 2023-09-29
paper_url: 'https://arxiv.org/abs/2309.14303'
code_url: 'https://github.com/VinAIResearch/Dataset-Diffusion'
project_page_url: 'https://dataset-diffusion.github.io/'
authors: '**Quang Nguyen**, [Truong Vu](https://truongvu2000nd.github.io/), [Anh Tran](https://scholar.google.com/citations?hl=en&user=FYZ5ODQAAAAJ&view_op=list_works), [Khoi Nguyen](https://khoinguyen.org)'
venue: '*Neural Information Processing Systems* (NeurIPS), 2023'
citation:
cover_image: dd-cover.jpg
---
Preparing training data for deep vision models is a labor-intensive task. To address this, generative models have emerged as an effective solution for generating synthetic data. While current generative models produce image-level category labels, we propose a novel method for generating pixel-level semantic segmentation labels using the text-to-image generative model Stable Diffusion (SD). By utilizing the text prompts, cross-attention, and self-attention of SD, we introduce three new techniques: class-prompt appending, class-prompt cross-attention, and self-attention exponentiation. These techniques enable us to generate segmentation maps corresponding to synthetic images. These maps serve as pseudo-labels for training semantic segmenters, eliminating the need for labor-intensive pixel-wise annotation. To account for the imperfections in our pseudo-labels, we incorporate uncertainty regions into the segmentation, allowing us to disregard loss from those regions. We conduct evaluations on two datasets, PASCAL VOC and MSCOCO, and our approach significantly outperforms concurrent work.