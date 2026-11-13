// ============================================================================
// PORTAL DATA REGISTRY & EXACT ARITHMETIC ENGINE (data/registry.js)
// Scalable Single Source of Truth for Publications, OEIS Sequences & Guides.
// To add Paper #3 or Sequence #6 in the future, append one object below.
// ============================================================================

(function () {
  // --------------------------------------------------------------------------
  // 1. EXACT CLIENT-SIDE ARITHMETIC ENGINE FOR QUADRATIC SHELLS & OEIS
  // --------------------------------------------------------------------------
  const CACHE_MAX = 2500;
  let _tablesReady = false;
  const _d1 = new Int32Array(CACHE_MAX + 1);
  const _d2 = new Int32Array(CACHE_MAX + 1);
  const _disc = new Int32Array(CACHE_MAX + 1);
  const _beta = new Int32Array(CACHE_MAX + 1);
  const _a381054 = new Int32Array(CACHE_MAX + 1);
  const _isPrime = new Uint8Array(CACHE_MAX + 1);

  function isqrt(n) {
    return Math.floor(Math.sqrt(n));
  }

  function centralDivisors(n) {
    if (n <= 1) return { d1: 1, d2: 1 };
    let s = isqrt(n);
    while (n % s !== 0) s--;
    return { d1: s, d2: Math.floor(n / s) };
  }

  function shellDiscrepancy(n) {
    if (n <= 1) return 0;
    const { d1, d2 } = centralDivisors(n);
    return isqrt(d2) - isqrt(d1);
  }

  function computeBetaExact(n) {
    if (n <= 1) return 1;
    if (n <= CACHE_MAX && _tablesReady) return _beta[n];
    if (shellDiscrepancy(n) === 0) return 1;
    // Check primality first for instant k^2 shortcut
    let prime = n >= 2 && (n === 2 || n % 2 !== 0);
    if (prime && n > 2) {
      for (let d = 3; d * d <= n; d += 2) {
        if (n % d === 0) { prime = false; break; }
      }
    }
    if (prime) {
      const k = isqrt(n);
      return k * k;
    }
    let m = 2;
    while (shellDiscrepancy(m * n) !== 0) m++;
    return m;
  }

  function computeA381054Exact(n) {
    if (n < 1) return 1;
    if (n <= CACHE_MAX && _tablesReady && _a381054[n] > 0) return _a381054[n];
    let m = 1;
    while (shellDiscrepancy(m * n) !== 1) m++;
    return m;
  }

  function ensureTables() {
    if (_tablesReady) return;
    _isPrime.fill(1);
    _isPrime[0] = 0;
    _isPrime[1] = 0;
    for (let i = 2; i * i <= CACHE_MAX; i++) {
      if (_isPrime[i]) {
        for (let j = i * i; j <= CACHE_MAX; j += i) _isPrime[j] = 0;
      }
    }
    for (let n = 1; n <= CACHE_MAX; n++) {
      const cd = centralDivisors(n);
      _d1[n] = cd.d1;
      _d2[n] = cd.d2;
      _disc[n] = isqrt(cd.d2) - isqrt(cd.d1);
      if (_disc[n] === 0) {
        _beta[n] = 1;
      } else if (_isPrime[n]) {
        const k = isqrt(n);
        _beta[n] = k * k;
      } else {
        let m = 2;
        while (shellDiscrepancy(m * n) !== 0) m++;
        _beta[n] = m;
      }
      if (n <= 400) {
        let m1 = 1;
        while (shellDiscrepancy(m1 * n) !== 1) m1++;
        _a381054[n] = m1;
      }
    }
    _tablesReady = true;
  }

  function isSquare(v) {
    if (v < 0) return false;
    const r = isqrt(v);
    return r * r === v;
  }

  function generateSequenceTerms(seqId, count) {
    ensureTables();
    const out = [];
    if (seqId === 'A382286') {
      for (let n = 1; n <= count; n++) out.push({ index: n, value: computeBetaExact(n) });
    } else if (seqId === 'A381054') {
      for (let n = 1; n <= count; n++) out.push({ index: n, value: computeA381054Exact(n) });
    } else if (seqId === 'A401528') {
      let n = 1;
      while (out.length < count && n <= CACHE_MAX) {
        if (isSquare(_beta[n])) out.push({ index: out.length + 1, value: n });
        n++;
      }
    } else if (seqId === 'A382306') {
      const maxK = Math.min(count, 48);
      for (let k = 1; k <= maxK; k++) {
        let bal = 0;
        for (let m = k * k; m <= k * k + 2 * k; m++) {
          if (shellDiscrepancy(m) === 0) bal++;
        }
        out.push({ index: k, value: bal });
      }
    } else if (seqId === 'A383115') {
      const maxK = Math.min(count, 48);
      for (let k = 1; k <= maxK; k++) {
        let ecc1 = 0;
        for (let m = k * k; m <= k * k + 2 * k; m++) {
          if (shellDiscrepancy(m) === 1) ecc1++;
        }
        out.push({ index: k, value: ecc1 });
      }
    }
    return out;
  }

  // --------------------------------------------------------------------------
  // 2. THEMATIC GUIDES REGISTRY (PILLAR 2)
  // --------------------------------------------------------------------------
  const GUIDES = [
    {
      id: 'foliations',
      code: 'Guide I',
      href: 'guides/foliations.html',
      doi: '10.5281/zenodo.23456718',
      pagesCount: 5,
      badgeTex: '\\mathbb{Z}_2 = \\mathbb{Z}_2^- \\cup \\{0\\} \\cup \\mathbb{Z}_2^+',
      title: {
        EN: 'Intrinsic Discrete Foliations & Non-Commutative 2D Arithmetic',
        FR: 'Feuilletages Discrets Intrinsèques & Arithmétique 2D Non-Commutative',
        AR: 'التوريقات المتقطعة الجوهرية والحساب ثنائي الأبعاد غير التبادلي'
      },
      summary: {
        EN: '5-page interactive laboratory covering power-shell coordinates, multi-directional addition and multiplication (prime 31 intersection), asymmetric zero & double-cone subtraction, 2D Euclidean division, leaf-local triple prime factorization, and 1-zigzag Chebyshev geodesics.',
        FR: 'Laboratoire interactif en 5 pages couvrant les coordonnées en couches de puissances, l’addition et la multiplication multi-directionnelles (intersection au premier 31), le zéro asymétrique, la division 2D, la triple factorisation première et les géodésiques de Chebyshev.',
        AR: 'مختبر تفاعلي من 5 صفحات يغطي إحداثيات طبقات القوى، الجمع والضرب متعدد الاتجاهات (التقاطع عند الأولي 31)، الصفر غير المتماثل والطرح المخروطي، القسمة الإقليدية ثنائية الأبعاد، التفكيك الأولي الثلاثي والمسارات الجيوديسية.'
      }
    },
    {
      id: 'zeta',
      code: 'Guide II',
      href: 'guides/zeta-hierarchy.html',
      doi: '10.5281/zenodo.24109170',
      pagesCount: 3,
      badgeTex: '\\sum_{n \\le x} \\beta(n) \\sim \\frac{\\zeta(3)}{2}\\frac{x^2}{\\log x}',
      title: {
        EN: 'Minimal Balancing Multiplier, Power-Balanced Sets & The Zeta Hierarchy',
        FR: 'Multiplicateur d’Équilibre Minimal, Ensembles Équilibrés & Hiérarchie Zeta',
        AR: 'المضاعف الموازن الأصغر، المجموعات المتوازنة وهرم دالة زيتا'
      },
      summary: {
        EN: '3-page analytic number theory laboratory exploring central conjugate divisors, the 4:1 intra-shell spectral gap, exact prime detection, the square-multiplier set governed by Apéry’s constant ζ(3), and odd/even Riemann zeta unification across r-degree shells.',
        FR: 'Laboratoire de théorie analytique des nombres en 3 pages explorant les diviseurs centraux, le fossé spectral 4:1, la détection exacte des nombres premiers, l’ensemble à multiplicateur carré gouverné par ζ(3) et l’unification des valeurs de ζ(s).',
        AR: 'مختبر تفاعلي من 3 صفحات في نظرية الأعداد التحليلية يستكشف القواسم المركزية المترافقة، الفجوة الطيفية 4:1، الكشف التام عن الأعداد الأولية، مجموعة المضاعفات المربعة المحكومة بثابت أبيري ζ(3)، وتوحيد قيم زيتا.'
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 3. MASTER PUBLICATIONS REGISTRY (PILLAR 4)
  // --------------------------------------------------------------------------
  const PUBLICATIONS = [
    {
      id: 'baloui-2026-zeta',
      num: 2,
      hierarchyRole: 'derived',
      derivedFromAspect: {
        EN: 'Derived via Inter-Shell Central Divisors & Minimal Balancing',
        FR: 'Issu de la Géométrie des Entiers via Diviseurs Centraux & Multiplicateur d’Équilibre',
        AR: 'منبثق عن هندسة الأعداد عبر القواسم المركزية والمضاعف الموازن الأصغر'
      },
      year: 2026,
      dateISO: '2026-11-10',
      dateDisplay: { EN: 'November 10, 2026', FR: '10 novembre 2026', AR: '10 نوفمبر 2026' },
      type: 'preprint',
      branch: 'zeta',
      doi: '10.5281/zenodo.24109170',
      doiUrl: 'https://doi.org/10.5281/zenodo.24109170',
      pdfPath: 'pdfs/Minimal_Balancing_Multiplier_Zeta.pdf',
      paperPage: 'papers/zeta-hierarchy.html',
      guidePage: 'guides/zeta-hierarchy.html',
      lean4: false,
      halStatus: { EN: 'HAL Submitted (Moderation)', FR: 'Soumis sur HAL (Modération)', AR: 'مودع على HAL (قيد المراجعة)' },
      msc: ['11A25', '11N05', '11M06', '11B83'],
      oeis: ['A381054', 'A382286', 'A382306', 'A383115', 'A401528'],
      title: {
        EN: 'The Minimal Balancing Multiplier and the Riemann Zeta Function at Positive Integers',
        FR: 'The Minimal Balancing Multiplier and the Riemann Zeta Function at Positive Integers',
        AR: 'The Minimal Balancing Multiplier and the Riemann Zeta Function at Positive Integers'
      },
      subtitle: {
        EN: 'Central Divisors, Power-Balanced Sets, Apéry’s Constant ζ(3), and r-Degree Zeta Unification',
        FR: 'Diviseurs centraux, ensembles équilibrés de puissances, constante d’Apéry ζ(3) et unification de ζ(s)',
        AR: 'القواسم المركزية، المجموعات المتوازنة القوية، ثابت أبيري ζ(3) وتوحيد قيم دالة زيتا لريمان'
      },
      abstract: {
        EN: 'Establishes that partitioning positive integers into quadratic and r-degree power shells links central conjugate divisors directly to the prime-counting function π(x) and positive integer values of the Riemann zeta function. Proves the sharp prime ceiling β(p) = ⌊√p⌋², the 4:1 intra-shell spectral gap, the ζ(3) asymptotic law for the square-multiplier set (OEIS A401528) and first moment of β(n) (OEIS A382286), and the r-degree parity split unifying ζ(2s+1) and ζ(2s).',
        FR: 'Établit que le partitionnement des entiers en couches quadratiques et de degré r relie directement les diviseurs centraux conjugués à la fonction de compte des nombres premiers π(x) et aux valeurs entières positives de la fonction zêta de Riemann ζ(s). Démontre le plafond premier exact β(p) = ⌊√p⌋², le fossé spectral 4:1, la loi asymptotique en ζ(3) pour l’ensemble à multiplicateur carré (OEIS A401528) et l’unification paire/impaire de ζ(r+1).',
        AR: 'يثبت أن تقسيم الأعداد الصحيحة الموجبة إلى طبقات تربيعية وطبقات قوى من الدرجة r يربط القواسم المركزية المترافقة مباشرة بدالة عد الأعداد الأولية π(x) وبقيم دالة زيتا لريمان عند الأعداد الصحيحة الموجبة، مع إثبات سقف الأعداد الأولية β(p) = ⌊√p⌋²، الفجوة الطيفية 4:1، وقانون التقارب نحو ثابت أبيري ζ(3) لمجموعة المضاعفات المربعة (A401528).'
      },
      bibtex: `@unpublished{Baloui2026ZetaHierarchy,
  author = {Baloui, Hassan},
  title  = {The Minimal Balancing Multiplier and the Riemann Zeta Function at Positive Integers},
  year   = {2026},
  month  = {nov},
  note   = {Zenodo preprint},
  doi    = {10.5281/zenodo.24109170},
  url    = {https://doi.org/10.5281/zenodo.24109170}
}`
    },
    {
      id: 'baloui-2026-geometry',
      num: 1,
      hierarchyRole: 'foundation',
      derivedFromAspect: {
        EN: 'Foundational Root Framework',
        FR: 'Socle Fondateur du Programme',
        AR: 'الأصل التأسيسي للبرنامج البحثي'
      },
      year: 2026,
      dateISO: '2026-10-18',
      dateDisplay: { EN: 'October 18, 2026', FR: '18 octobre 2026', AR: '18 أكتوبر 2026' },
      type: 'monograph',
      branch: 'foliations',
      doi: '10.5281/zenodo.23456718',
      doiUrl: 'https://doi.org/10.5281/zenodo.23456718',
      pdfPath: 'pdfs/Geometry_of_Integers.pdf',
      paperPage: 'papers/geometry-of-integers.html',
      guidePage: 'guides/foliations.html',
      lean4: true,
      halStatus: null,
      msc: ['11A05', '11B83', '05B45', '51M20', '68V15'],
      oeis: ['A382286'],
      title: {
        EN: 'Geometry of Integers',
        FR: 'Geometry of Integers',
        AR: 'Geometry of Integers'
      },
      subtitle: {
        EN: 'Intrinsic m-Degree Foliations, Geodesic Routing, Non-Commutative 2D Arithmetic & Lean 4 Verification',
        FR: 'Feuilletages intrinsèques de degré m, routage géodésique, arithmétique 2D non-commutative & preuves Lean 4',
        AR: 'التوريقات الجوهرية من الدرجة m، التوجيه الجيوديسي، الحساب ثنائي الأبعاد غير التبادلي والتحقق الآلي بـ Lean 4'
      },
      abstract: {
        EN: 'Foundational monograph breaking the unstated 1D ontological axiom of classical arithmetic. Constructs intrinsic m-degree power-shell foliations, three directional leaves (Left λ=0, Vertical λ=1/2, Right λ=1), non-commutative multi-directional operations (unique prime 31 additive intersection), double-cone origin reflection on ℤ₂, leaf-local triple prime factorizations, 1-zigzag Chebyshev geodesics, conical holonomy curvature, and machine-checked Lean 4 proofs.',
        FR: 'Monographie fondatrice brisant l’axiome unidimensionnel implicite de l’arithmétique classique. Construit les feuilletages intrinsèques de degré m, les trois feuilles directionnelles, les opérations multi-directionnelles non-commutatives (intersection unique au premier 31), la réflexion sur le double-cône ℤ₂, la triple factorisation première, la métrique géodésique de Chebyshev et les preuves formelles vérifiées sous Lean 4.',
        AR: 'مقال تأسيسي يكسر المسلمة أحادية البعد غير المعلنة للحساب الكلاسيكي، ويبني التوريقات الجوهرية من الدرجة m، الأوراق الاتجاهية الثلاث، العمليات الحسابية غير التبادلية (التقاطع الفريد عند العدد الأولي 31)، الانعكاس عبر الأصل على المخروط المزدوج ℤ₂، التفكيك الأولي الثلاثي، والمسارات الجيوديسية مع براهين محققة آلياً بنظام Lean 4.'
      },
      bibtex: `@article{Baloui2026GeometryOfIntegers,
  author  = {Baloui, Hassan},
  title   = {Geometry of Integers},
  year    = {2026},
  month   = {oct},
  doi     = {10.5281/zenodo.23456718},
  url     = {https://doi.org/10.5281/zenodo.23456718}
}`
    }
  ];

  // --------------------------------------------------------------------------
  // 4. OEIS SEQUENCES REGISTRY (PILLAR 3 — STRICT "SET / SETS" TERMINOLOGY)
  // --------------------------------------------------------------------------
  const OEIS_SEQUENCES = [
    {
      id: 'A382286',
      url: 'https://oeis.org/A382286',
      indexSymbol: 'n',
      formulaTex: '\\beta(n) = \\min\\!\\left\\{ k \\ge 1 : \\lfloor\\sqrt{d_2(kn)}\\rfloor = \\lfloor\\sqrt{d_1(kn)}\\rfloor \\right\\}',
      firstTerms: [1, 1, 1, 1, 4, 1, 4, 2, 1, 2, 9, 2, 9, 2, 2, 1, 16, 2, 16, 1],
      roleBadge: { EN: 'Core Multiplier', FR: 'Multiplicateur Central', AR: 'المضاعف الأساسي' },
      name: {
        EN: 'Minimal Balancing Multiplier β(n)',
        FR: 'Multiplicateur d’Équilibre Minimal β(n)',
        AR: 'المضاعف الموازن الأصغر β(n)'
      },
      desc: {
        EN: 'Least positive multiplier k pulling the central divisor pair of k·n into a single quadratic shell. Satisfies β(n) ≤ ⌊√n⌋² for all n ≥ 2 with equality if and only if n is prime, and first moment ∑_{n≤x} β(n) ~ (ζ(3)/2) x² / log x.',
        FR: 'Plus petit entier k ≥ 1 plaçant les diviseurs centraux de k·n dans une même couche quadratique. Vérifie β(n) ≤ ⌊√n⌋² avec égalité si et seulement si n est premier, et moment asymptotique ∑_{n≤x} β(n) ~ (ζ(3)/2) x² / log x.',
        AR: 'أصغر مضاعف صحيح موجب k يجمع القاسمين المركزيين للجداء k·n داخل طبقة تربيعية واحدة. يحقق المتباينة الحادة β(n) ≤ ⌊√n⌋² مع التساوي إذا وفقط إذا كان n عدداً أولياً، ومجموعه التقاربي محكوم بثابت أبيري ζ(3).'
      }
    },
    {
      id: 'A401528',
      url: 'https://oeis.org/A401528',
      indexSymbol: 'm',
      formulaTex: '\\mathcal{Q}_2 = \\left\\{ n \\ge 1 : \\beta(n) = m^2 \\text{ for some } m \\in \\mathbb{Z}_{\\ge 1} \\right\\}',
      firstTerms: [1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 16, 17, 19, 20, 23, 24, 25, 28, 29, 30],
      roleBadge: { EN: 'ζ(3) Square-Multiplier Set', FR: 'Ensemble Carré ζ(3)', AR: 'مجموعة المضاعفات المربعة ζ(3)' },
      name: {
        EN: 'Square-Multiplier Set (Apéry’s Constant ζ(3) Set)',
        FR: 'Ensemble à Multiplicateur Carré (Constante d’Apéry ζ(3))',
        AR: 'مجموعة الأعداد ذات المضاعف المربع (ثابت أبيري ζ(3))'
      },
      desc: {
        EN: 'Set of integers n ≥ 1 whose minimal balancing multiplier A382286(n) is a perfect square. Contains all balanced integers (β=1), all primes (β=k²), and prime-square/shell-resonant families (such as n=76 with β=4 and the binary boundary exception n=32), governed by Apéry’s constant ζ(3) = ∑ r⁻³.',
        FR: 'Ensemble des entiers n ≥ 1 dont le multiplicateur d’équilibre minimal A382286(n) est un carré parfait. Réunit les entiers équilibrés (β=1), tous les nombres premiers (β=k²) et les familles résonantes gouvernées par la constante d’Apéry ζ(3) = ∑ r⁻³.',
        AR: 'مجموعة الأعداد الصحيحة n ≥ 1 التي يكون مضاعفها الموازن الأصغر A382286(n) مربعاً كاملاً؛ تشمل الأعداد المتوازنة (β=1) وجميع الأعداد الأولية (β=k²) والعائلات الرنينية المحكومة بثابت أبيري ζ(3).'
      }
    },
    {
      id: 'A381054',
      url: 'https://oeis.org/A381054',
      indexSymbol: 'n',
      formulaTex: '\\beta_1(n) = \\min\\!\\left\\{ k \\ge 1 : \\lfloor\\sqrt{d_2(kn)}\\rfloor - \\lfloor\\sqrt{d_1(kn)}\\rfloor = 1 \\right\\}',
      firstTerms: [5, 4, 4, 2, 1, 2, 1, 1, 2, 1, 4, 1, 4, 1, 1, 5, 9, 1, 9, 3],
      roleBadge: { EN: 'Unit-Discrepancy Dual', FR: 'Dual d’Écart Unité', AR: 'مضاعف التباين الأحادي' },
      name: {
        EN: 'Minimal Unit-Discrepancy Multiplier',
        FR: 'Multiplicateur Minimal d’Écart Inter-Couches Unité',
        AR: 'المضاعف الأصغر للتباين الطبقي الأحادي'
      },
      desc: {
        EN: 'Least positive multiplier k placing the central conjugate divisors of k·n into two immediately adjacent quadratic shells (C(k·n) = 1). Forms the exact eccentric dual to A382286.',
        FR: 'Plus petit entier k ≥ 1 plaçant les diviseurs centraux conjugués de k·n dans deux couches quadratiques adjacentes (C(k·n) = 1). Forme le dual exact de A382286.',
        AR: 'أصغر مضاعف موجب k يضع القاسمين المركزيين للجداء k·n في طبقتين تربيعيتين متجاورتين تماماً (C(k·n) = 1)، ويشكل الثنائي المرافق للمتتالية A382286.'
      }
    },
    {
      id: 'A382306',
      url: 'https://oeis.org/A382306',
      indexSymbol: 'k',
      formulaTex: 'a(k) = \\#\\!\\left\\{ m \\in [k^2, k^2+2k] : \\lfloor\\sqrt{d_2(m)}\\rfloor = \\lfloor\\sqrt{d_1(m)}\\rfloor \\right\\}',
      firstTerms: [3, 2, 1, 3, 5, 4, 2, 1, 3, 5, 7, 6, 4, 2, 1],
      roleBadge: { EN: 'Balanced Shell Count', FR: 'Compte Équilibré par Couche', AR: 'تعداد المتوازنة في الطبقة' },
      name: {
        EN: 'Balanced Set Cardinality in Quadratic Shell S_k',
        FR: 'Cardinal de l’Ensemble Équilibré dans la Couche Quadratique S_k',
        AR: 'عدد عناصر المجموعة المتوازنة داخل الطبقة التربيعية S_k'
      },
      desc: {
        EN: 'Number of balanced integers (C(m) = 0, equivalently A382286(m) = 1) inside the k-th quadratic shell S_k = [k², k²+2k]. Displays periodic sawtooth waves and pairs with A383115 in a 1:2 asymptotic cumulative ratio.',
        FR: 'Nombre d’entiers équilibrés (C(m) = 0, soit A382286(m) = 1) dans la couche quadratique S_k = [k², k²+2k]. Présente des oscillations périodiques en dents de scie et forme un rapport cumulé 1:2 avec A383115.',
        AR: 'عدد الأعداد الصحيحة المتوازنة (C(m) = 0 أي A382286(m) = 1) داخل الطبقة التربيعية S_k = [k², k²+2k]، ويُظهر تموجات دورية ويشكل نسبة تراكمية 1:2 مع المتتالية A383115.'
      }
    },
    {
      id: 'A383115',
      url: 'https://oeis.org/A383115',
      indexSymbol: 'k',
      formulaTex: 'b(k) = \\#\\!\\left\\{ m \\in [k^2, k^2+2k] : \\lfloor\\sqrt{d_2(m)}\\rfloor - \\lfloor\\sqrt{d_1(m)}\\rfloor = 1 \\right\\}',
      firstTerms: [0, 3, 4, 2, 0, 2, 6, 8, 5, 3, 0, 3, 7, 10, 11],
      roleBadge: { EN: 'Unit-Eccentric Shell Count (2:1)', FR: 'Compte Écart-1 par Couche (2:1)', AR: 'تعداد التباين الأحادي (2:1)' },
      name: {
        EN: 'Unit-Discrepancy Set Cardinality in Quadratic Shell S_k',
        FR: 'Cardinal de l’Ensemble d’Écart Unité dans la Couche S_k',
        AR: 'عدد عناصر مجموعة التباين الأحادي داخل الطبقة التربيعية S_k'
      },
      desc: {
        EN: 'Number of integers in S_k = [k², k²+2k] whose central divisors lie one quadratic shell apart (C(m) = 1, equivalently A381054(m) = 1). Its cumulative sum across shells approaches twice that of A382306.',
        FR: 'Nombre d’entiers dans S_k = [k², k²+2k] dont les diviseurs centraux présentent un écart inter-couches égal à 1 (C(m) = 1, soit A381054(m) = 1), avec une somme cumulée tendant vers le double de A382306.',
        AR: 'عدد الأعداد داخل الطبقة S_k = [k², k²+2k] التي يفصل بين قاسميها المركزيين طبقة تربيعية واحدة (C(m) = 1 أي A381054(m) = 1)، ويقترب مجموعه التراكمي من ضعف مجموع A382306.'
      }
    }
  ];

  const DERIVED_STREAMS = [
    {
      id: 'coordinates',
      code: 'Lens I',
      accent: '#1E3A8A',
      href: 'guides/foliations.html#p1',
      formulaTex: 'n = (k, r)_S = (g_\\lambda, d_\\lambda)_\\lambda',
      tag: {
        EN: 'Intrinsic Coordinate Frame',
        FR: 'Repère de Coordonnées Intrinsèque',
        AR: 'الإطار الإحداثي الجوهري'
      },
      title: {
        EN: 'Power-Shell Partitions & Directional Leaves',
        FR: 'Partitions en Couches de Puissances & Feuilles Directionnelles',
        AR: 'تجزئات طبقات القوى والأوراق الاتجاهية'
      },
      desc: {
        EN: 'Unfolding the flat line into r-degree shells S_{k,r} = [k^r, (k+1)^r - 1] decouples scalar magnitude from longitudinal depth and endows every integer with three canonical directional leaves (λ ∈ {0, 1/2, 1}).',
        FR: 'Le déploiement de la droite plate en couches S_{k,r} = [k^r, (k+1)^r - 1] découple grandeur scalaire et profondeur longitudinale, dotant chaque entier de trois feuilles directionnelles canoniques (λ ∈ {0, 1/2, 1}).',
        AR: 'نشر المستقيم المسطح إلى طبقات قوى S_{k,r} = [k^r, (k+1)^r - 1] يفصل القيمة العددية عن العمق الطولي ويمنح كل عدد صحيح ثلاث أوراق اتجاهية قانونية (λ ∈ {0, 1/2, 1}).'
      },
      cta: {
        EN: 'Explore Coordinate Frames (Guide I) →',
        FR: 'Explorer les Repères (Guide I) →',
        AR: 'استكشاف الإحداثيات (الدليل I) ←'
      }
    },
    {
      id: 'foliated-arithmetic',
      code: 'Lens II',
      accent: '#059669',
      href: 'guides/foliations.html#p2',
      formulaTex: 'a \\oplus_2 b = \\{\\nabla_\\lambda(a,b)\\}, \\quad \\delta_m(x,y) = \\max(\\Delta k, |\\Delta g|)',
      tag: {
        EN: 'Algebra, Prime Triads & Geodesics',
        FR: 'Algèbre, Triades Premières & Géodésiques',
        AR: 'الجبر المورّق والجيوديسيا'
      },
      title: {
        EN: 'Non-Commutative Foliated Arithmetic & Conical Geometry',
        FR: 'Arithmétique Feuilletée Non-Commutative & Géométrie Conique',
        AR: 'الحساب المورّق غير التبادلي والهندسة المخروطية'
      },
      desc: {
        EN: 'Transporting along the three leaves transforms classical shifts into non-commutative triads (intersecting uniquely at prime 31), origin reflections on the double-cone ℤ₂, simultaneous triple prime factorizations, and 1-zigzag Chebyshev geodesics.',
        FR: 'Le transport sur les trois feuilles transforme les translations en triades non-commutatives (intersection unique au premier 31), réflexions sur le double-cône ℤ₂, triple factorisation première et géodésiques 1-zigzag.',
        AR: 'النقل عبر الأوراق الثلاث يحول الإزاحات إلى ثلاثيات غير تبادلية (تتقاطع بشكل فريد عند الأولي 31)، وانعكاسات عبر الأصل على المخروط المزدوج ℤ₂، وتفكيك أولي ثلاثي متزامن ومسارات جيوديسية.'
      },
      cta: {
        EN: 'Open 2D Arithmetic Lab (Guide I) →',
        FR: 'Ouvrir le Labo 2D (Guide I) →',
        AR: 'فتح مختبر الحساب 2D (الدليل I) ←'
      }
    },
    {
      id: 'minimal-balancing',
      code: 'Lens III',
      accent: '#0284C7',
      href: 'guides/zeta-hierarchy.html#p1',
      formulaTex: '\\beta(p) = \\lfloor\\sqrt{p}\\rfloor^2, \\quad \\sum_{n\\le x}\\beta(n) \\sim \\frac{\\zeta(3)}{2}\\frac{x^2}{\\log x}',
      tag: {
        EN: 'Divisor Dynamics, OEIS Sets & Zeta',
        FR: 'Dynamique des Diviseurs, Ensembles OEIS & Zeta',
        AR: 'ديناميكا القواسم ومجموعات OEIS وزيتا'
      },
      title: {
        EN: 'Minimal Balancing Multiplier, Prime Ceiling & The ζ(s) Hierarchy',
        FR: 'Multiplicateur d’Équilibre Minimal, Plafond Premier & Hiérarchie ζ(s)',
        AR: 'المضاعف الموازن الأصغر، سقف الأوليات وهرم زيتا ζ(s)'
      },
      desc: {
        EN: 'Measuring how central divisors span across the power shells of Geometry of Integers yields β(n) (OEIS A382286), exact prime detection across a 4:1 spectral gap, the Square-Multiplier Set governed by ζ(3) (OEIS A401528), and r-degree ζ(r+1) unification.',
        FR: 'La mesure de l’écart inter-couches des diviseurs centraux produit β(n) (OEIS A382286), la détection exacte des premiers via un fossé spectral 4:1, l’Ensemble Carré gouverné par ζ(3) (OEIS A401528) et l’unification de ζ(r+1).',
        AR: 'قياس التباين الطبقي للقواسم المركزية عبر طبقات هندسة الأعداد ينتج المضاعف β(n) (OEIS A382286)، والكشف التام عن الأوليات عبر فجوة 4:1، والمجموعة المربعة المحكومة بـ ζ(3) (OEIS A401528) وتوحيد ζ(r+1).'
      },
      cta: {
        EN: 'Launch Balancing & Zeta Lab (Guide II) →',
        FR: 'Ouvrir le Labo Zeta (Guide II) →',
        AR: 'فتح مختبر الموازنة وزيتا (الدليل II) ←'
      }
    }
  ];

  window.PORTAL_REGISTRY = {
    GUIDES,
    PUBLICATIONS,
    OEIS_SEQUENCES,
    DERIVED_STREAMS
  };

  window.ZetaMath = {
    CACHE_MAX,
    isqrt,
    isSquare,
    centralDivisors,
    shellDiscrepancy,
    computeBetaExact,
    computeA381054Exact,
    ensureTables,
    generateSequenceTerms,
    isPrimeFast: function (n) {
      ensureTables();
      if (n <= CACHE_MAX) return _isPrime[n] === 1;
      if (n < 2) return false;
      if (n % 2 === 0) return n === 2;
      for (let d = 3; d * d <= n; d += 2) if (n % d === 0) return false;
      return true;
    }
  };
})();
