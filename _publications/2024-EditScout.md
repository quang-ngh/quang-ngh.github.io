---
title: "EditScout: Locating Forged Regions from Diffusion-based Edited Images with Multimodal LLM"
collection: publications
excerpt: 'Utilizing multi-modal LLM for localizing diffusion-based edited regions.'
date: 2024-9-17
venue: 'Under review'
# paper_url: 'https://arxiv.org/abs/2312.17243'
# bibtex_url: 'https://arxiv.org/abs/2312.17243'
authors: '**Quang Nguyen**, [Truong Vu](https://truongvu2000nd.github.io/), Trong-Tung Nguyen, [Yuxin Wen](https://yuxinwenrick.github.io/), [Preston K Robinette](https://www.linkedin.com/in/prestonrobinette/), [Taylor T Johnson](http://www.taylortjohnson.com/), [Tom Goldstein](https://www.cs.umd.edu/~tomg/), [Anh Tuan Tran](https://scholar.google.com/citations?hl=en&user=FYZ5ODQAAAAJ&view_op=list_works), [Khoi Nguyen](https://khoinguyen.org)'
citation:
cover_image: editscout-cover.jpg
---
Image editing technologies are tools used to transform, adjust, remove, or otherwise alter images. Recent research has significantly improved the capabilities of image editing tools, enabling the creation of photorealistic and semantically informed forged regions that are nearly indistinguishable from authentic imagery, presenting new challenges in digital forensics and media credibility. While current image forensic techniques are adept at localizing forged regions produced by traditional image manipulation methods, current capabilities struggle to localize regions created by diffusion-based techniques. To bridge this gap, we present a novel framework that integrates a multimodal Large Language Model (LLM) for enhanced reasoning capabilities to localize tampered regions in images produced by diffusion model-based editing methods. By leveraging the contextual and semantic strengths of LLMs, our framework achieves promising results on MagicBrush, AutoSplice, and PerfBrush (novel diffusion-based dataset) datasets, outperforming previous approaches in mIoU and F1-score metrics.  Notably, our method excels on the PerfBrush dataset, a self-constructed test set featuring previously unseen types of edits. Here, where traditional methods typically falter, achieving markedly low scores, our approach demonstrates promising performance.
