# Geometry of Integers — Interactive Research Portal

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23456718.svg)](https://doi.org/10.5281/zenodo.23456718)
![Lean 4](https://img.shields.io/badge/Formal_Proofs-Lean_4_Verified-059669)
![Languages](https://img.shields.io/badge/Languages-EN_%7C_FR_%7C_AR-0F172A)

Official interactive web portal for **[www.new-mathematical-concepts.org](https://www.new-mathematical-concepts.org)**, accompanying the foundational research article ***Geometry of Integers*** by **Dr. Hassan BALOUI**.

---

## Overview

For over two millennia, classical arithmetic has operated under an unstated one-dimensional axiom ($m = 1$): an integer's scalar magnitude is coupled identically to its structural step-distance from the origin. 

This portal provides a visual, equation-light exploration of **Integer Foliations ($\mathbb{N}_m$ and $\mathbb{Z}_m$ for $m \ge 2$)**—demonstrating how partitioning the integers into power shells aligned along a central median spine endows them natively with two degrees of freedom, three directional leaves (**Left** $\lambda=0$, **Vertical** $\lambda=1/2$, **Right** $\lambda=1$), non-commutative triadic arithmetic, leaf-local prime factorizations, and discrete Chebyshev curvature.

## Interactive Simulators Lab

Guided by **Alice ($A$)** as the geometric leaf-anchor and **Bob ($B$)** as the kinematic driver (localized as **آية (أ)** and **بدر (ب)** in Arabic), the portal is organized into six academic guide modules:

1. **Home & The Paradigm Shift:** From Euclid, Peano, and Whitehead & Russell's *Principia Mathematica* ($m=1$) to 2D power-shell unfolding and the 4-way leaf intersection ($S_k \cap L_{g_l} \cap V_{g_v} \cap R_{g_r}$).
2. **Foliated Addition ($\oplus_m$) & Multiplication ($\otimes_m$):** Interactive $3 \times 3$ directional pairing matrices, universal multiplicative disjointness, and the unique cross-direction additive intersection at **Prime $31$** ($3 \oplus_2 4 \cap 4 \oplus_2 3 = \{31\}$).
3. **The Case of Zero ($0$) & Subtraction ($\ominus_m$):** Asymmetric zero identities and cross-origin reflections across the double-cone $\mathbb{Z}_2 = \mathbb{Z}_2^- \cup \{0\} \cup \mathbb{Z}_2^+$ (e.g., $13 \ominus_2 2 = \{-29, 3, 1\}$).
4. **Foliated Euclidean Division ($\oslash_m$) & Triple Prime Factorization:** Two-dimensional geometric remainders $(\rho_k, \rho_\lambda)$ and the Leaf-Local Fundamental Theorem of Arithmetic (featuring the $X = 861$ factorization triad and the minimal Triple Leaf-Depth Prime $X = 30$).
5. **1-Zigzag Chebyshev Geodesics & 3D Conical Holonomy:** Shortest-path routing under $\delta_m(x,y) = \max(\Delta k, \vert{}\Delta g_v\vert{})$, the $m=1$ Peano collapse slider, and discrete curvature via non-commuting self-shift loops $[\widehat{T}_{\lambda_1}, \widehat{T}_{\lambda_2}] \neq 0$.
6. **Open Horizons & Foundational Article:** Four open mathematical questions, full paper access, and machine-checked **Lean 4** formal verification artifacts.

## Technical Architecture

* **Zero Build Dependencies:** Self-contained vanilla HTML5, CSS3, and JavaScript (`index.html`).
* **Interactive Graphics:** High-DPI HTML5 Canvas 2D TikZ-style foliation lattices and a live 3D rotating dual-cone header animation.
* **Mathematical Typesetting:** Authentic LaTeX rendering powered by **KaTeX**.
* **Trilingual & Responsive:** Instant switching between **English (EN)**, **French (FR)**, and **Modern Standard Arabic (AR)** with automatic `LTR` $\leftrightarrow$ `RTL` layout adaptation and mobile drawer navigation.

## Repository Structure

```text
├── index.html      # Complete trilingual portal and interactive simulators
├── photo_HB.jpg    # Author portrait (Dr. Hassan BALOUI)
└── README.md       # Project documentation
