# New Mathematical Concepts — The Geometry of Integers

**Live Interactive Research Portal:** [https://www.new-mathematical-concepts.org](https://www.new-mathematical-concepts.org)  
**Author:** Dr. Hassan Baloui (Ph.D. in Mathematics, École Normale Supérieure de Paris-Saclay)  
**Languages:** English (`EN`) | Français (`FR`) | العربية (`AR`)

---

## 1. Foundational Architecture

This repository hosts the trilingual (`EN` / `FR` / `AR`), zero-dependency interactive research portal **New Mathematical Concepts**. The research program originates from a single foundational framework—**The Geometry of Integers**—from which intrinsic coordinates, non-commutative foliated arithmetic, inter-shell divisor dynamics, and analytic connections to prime numbers and the Riemann zeta function $\zeta(s)$ are systematically derived.

### Root Framework: *The Geometry of Integers*
Classical arithmetic implicitly identifies an integer's scalar magnitude with its longitudinal step distance from zero ($m = 1$). Dropping that one-dimensional assumption unfolds $\mathbb{N}$ intrinsically into $r$-degree power shells:

$$\mathcal{S}_{k,r} = [k^r, (k+1)^r - 1]$$

Reflecting the positive lattice across $0$ yields the planar double-lattice $\mathbb{Z}_m = \mathbb{Z}_m^- \cup \{0\} \cup \mathbb{Z}_m^+$, providing a closed geometric arena without boundary truncation axioms.

### Derived Mathematical Lenses

1. **Lens I — Intrinsic Power-Shell Coordinates & Directional Leaves:**  
   Parameterizes integers by shell index $k$, intra-shell offset, directional leaf generators across $\lambda \in \{0, \frac{1}{2}, 1\}$, and local leaf depths $d_{\lambda,m}(n) = k_n - k_0(g, \lambda, m)$.
2. **Lens II — Non-Commutative Foliated Arithmetic, Leaf-Local FTA & Geodesics:**  
   Governs four-quadrant foliated addition ($a \oplus_m b$), subtraction ($a \ominus_m b$), and multiplication ($a \otimes_m b$) on $\mathbb{Z}_m$ via the extended discrete shift operator $\widehat{\nabla}_{\lambda,m}$, alongside simultaneous leaf-local triple prime factorizations and 1-zigzag Chebyshev geodesics $\delta_2(x, y)$.
3. **Lens III — Minimal Balancing Multiplier & The $\zeta(s)$ Hierarchy:**  
   Tracks central conjugate divisors $d_1(n) \le \sqrt{n} \le d_2(n)$ across quadratic shells $\mathcal{S}_k = [k^2, k^2 + 2k]$ via the **Minimal Balancing Multiplier** $\beta(n)$:
   $$\beta(n) = \min \left\{ m \ge 1 : \left\lfloor \sqrt{d_2(mn)} \right\rfloor = \left\lfloor \sqrt{d_1(mn)} \right\rfloor \right\}$$
   Within every quadratic shell, $\beta(n) \le \lfloor\sqrt{n}\rfloor^2$ with equality $\beta(p) = \lfloor\sqrt{p}\rfloor^2$ **if and only if $p$ is prime**, separated from all composite integers in that shell by a $4:1$ spectral gap. Globally, both $\sum_{n \le X} \beta(n) \sim \frac{\zeta(3)}{2}\frac{X^2}{\ln X}$ and the Square-Multiplier Set $\mathcal{Q}_2$ are governed by Apéry's constant $\zeta(3)$, while higher-degree power-balanced sets organize positive integer values of $\zeta(s)$ by foliation parity ($\mathbb{N}_{2s} \implies \zeta(2s+1)$ and $\mathbb{N}_{2s-1} \implies \zeta(2s) \in \mathbb{Q}\pi^{2s}$).

---

## 2. Canonical Publications & Permanent Identifiers

| Role | Work | Canonical Zenodo DOI | Verification & Metadata |
| :--- | :--- | :--- | :--- |
| **Foundational Monograph `[1]`** | *Geometry of Integers* | [`10.5281/zenodo.23456718`](https://doi.org/10.5281/zenodo.23456718) | Lean 4 Formal Proofs, Interactive Guide I, [Scholar Record](https://www.new-mathematical-concepts.org/papers/geometry-of-integers.html) |
| **Derived Preprint `[2]`** | *The Minimal Balancing Multiplier and the Riemann Zeta Function at Positive Integers* | [`10.5281/zenodo.24109170`](https://doi.org/10.5281/zenodo.24109170) | Python 3 Suite, Interactive Guide II, 5 OEIS Sequences, [Scholar Record](https://www.new-mathematical-concepts.org/papers/zeta-hierarchy.html) |

---

## 3. Connected OEIS Sequences

All five sequences are interactively computable and plottable live in [Pillar 3 (`oeis.html`)](https://www.new-mathematical-concepts.org/oeis.html):

* **[OEIS A382286](https://oeis.org/A382286):** Minimal balancing multiplier $\beta(n)$ pulling the central divisors of $m \cdot n$ into a single quadratic shell.
* **[OEIS A401528](https://oeis.org/A401528):** Square-Multiplier Set $\mathcal{Q}_2 = \{n \ge 1 : \beta(n) = m^2\}$, governed asymptotically by $\zeta(3) \cdot \pi(X)$.
* **[OEIS A381054](https://oeis.org/A381054):** Minimal multiplier yielding unit quadratic shell discrepancy $\lfloor\sqrt{d_2(mn)}\rfloor - \lfloor\sqrt{d_1(mn)}\rfloor = 1$.
* **[OEIS A382306](https://oeis.org/A382306):** Cardinality of the balanced set inside quadratic shell $\mathcal{S}_k = [k^2, k^2 + 2k]$.
* **[OEIS A383115](https://oeis.org/A383115):** Cardinality of the unit-discrepancy set inside quadratic shell $\mathcal{S}_k$, exhibiting an asymptotic $2:1$ cumulative ratio relative to `A382306`.

---

## 4. 5-Pillar Repository Structure

```text
.
|-- index.html                          # Pillar 1: Foundational Charter, 3 Derived Lenses & Unified Inspector
|-- guides/
|   |-- foliations.html                 # Pillar 2 (Guide I): 2D Foliated Arithmetic, Z_2 Double-Lattice & Geodesics
|   `-- zeta-hierarchy.html             # Pillar 2 (Guide II): 4:1 Spectral Gap, Square-Multiplier Set & Zeta Parity
|-- oeis.html                           # Pillar 3: Live 5-Sequence OEIS Atlas, Plotter & Cross-Evaluator
|-- publications.html                   # Pillar 4: Master Bibliography, Lineage Filters & BibTeX Export
|-- formalization.html                  # Pillar 5: Lean 4 Verified Theorem Checklist & Python 3 Suite
|-- papers/
|   |-- geometry-of-integers.html       # Highwire Press / Google Scholar Metadata Record for [1]
|   `-- zeta-hierarchy.html             # Highwire Press / Google Scholar Metadata Record for [2]
|-- data/
|   `-- registry.js                     # Single Source of Truth (Publications, OEIS Registry, Streams & ZetaMath)
|-- assets/
|   |-- portal.css                      # Shared Academic LibGuides Layout & Typography Styles
|   |-- shell.js                        # Shared 3D Dual-Cone Header, 5-Pillar Nav, Author Card & EN/FR/AR Engine
|   |-- overview-hub.js                 # Pillar 1 Interactive Controller
|   |-- zeta-guide.js                   # Guide II Interactive Canvas & Convergence Controller
|   |-- oeis-atlas.js                   # OEIS Live Calculator & Stem/Ratio Plotter Controller
|   `-- paper-view.js                   # Single-Paper Scholar Metadata Renderer
|-- pdfs/
|   |-- Geometry_of_Integers.pdf        # Full-Text Monograph PDF (Same-Domain Scholar Indexing)
|   `-- Minimal_Balancing_Multiplier_Zeta.pdf  # Full-Text Preprint PDF (Same-Domain Scholar Indexing)
|-- photo_HB.jpg                        # Author Portrait
|-- .nojekyll                           # Bypasses Jekyll Processing on GitHub Pages
`-- README.md                           # Repository Documentation
```

---

## 5. Local Execution & Indexing Standards

* **Zero Build Step:** Pure HTML5, CSS, ES6 JavaScript, HTML5 Canvas, and KaTeX. Clone or extract the repository and open `index.html` directly in any modern browser (`file://`) or serve locally via `python -m http.server 8000`.
* **Scholarly Indexing:** Dedicated article pages under `papers/` implement Highwire Press `<meta name="citation_...">` tags paired with same-domain full-text PDFs under `pdfs/` and Schema.org JSON-LD graphs.

---

## 6. Citation (BibTeX)

```bibtex
@misc{baloui2026geometry,
  author       = {Baloui, Hassan},
  title        = {Geometry of Integers},
  year         = {2026},
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.23456718},
  url          = {https://doi.org/10.5281/zenodo.23456718}
}

@misc{baloui2026zeta,
  author       = {Baloui, Hassan},
  title        = {The Minimal Balancing Multiplier and the Riemann Zeta Function at Positive Integers},
  year         = {2026},
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.24109170},
  url          = {https://doi.org/10.5281/zenodo.24109170}
}
```

---

© 2026 Dr. Hassan Baloui. All scholarly manuscripts and formal verification archives are distributed under their respective Zenodo open-access licenses.