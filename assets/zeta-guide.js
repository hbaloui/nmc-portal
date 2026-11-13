// ============================================================================
// GUIDE II INTERACTIVE CONTROLLER (assets/zeta-guide.js)
// ============================================================================

const ZETA_I18N = {
  EN: {
    bcRoot: 'New Mathematical Concepts',
    guide2Badge: 'Guide II: Balancing Multiplier & Zeta (ζ)',
    btnBackGuide1: '← Guide I: 2D Foliations',
    btnPaper2Record: '📄 Paper II & BibTeX (24109170)',
    mobZ1: '1. β(n) & 4:1 Gap',
    mobZ2: '2. Square Set & ζ(3)',
    mobZ3: '3. r-Degree ζ(s)',
    sidebarGuide2Heading: 'GUIDE II — 3 INTERACTIVE PAGES',
    navZ1: '1. Central Divisors & 4:1 Gap',
    subZ1_1: '• Prime Ceiling β(p) = ⌊√p⌋²',
    subZ1_2: '• Shell S_k Spectral Bar Inspector',
    navZ2: '2. Square-Multiplier Set & ζ(3)',
    subZ2_1: '• Set Q₂ (OEIS A401528) & n = 32',
    subZ2_2: '• Apéry’s Constant ζ(3) Convergence',
    navZ3: '3. r-Degree Zeta Hierarchy',
    subZ3_1: '• Power-Balanced Sets on ℕ_r',
    subZ3_2: '• Odd ζ(2s+1) vs. Even ζ(2s) Split',
    z1Box1Title: 'Central Conjugate Divisors, Exact Prime Detection & The 4:1 Intra-Shell Spectral Gap',
    z1Para1: 'Every integer n ≥ 2 admits a central conjugate divisor pair d₁(n) ≤ √n ≤ d₂(n) with n = d₁·d₂. Measuring how many quadratic shells separate d₁ and d₂ defines the shell discrepancy C(n) = ⌊√d₂(n)⌋ − ⌊√d₁(n)⌋ and the minimal balancing multiplier β(n) = min{k ≥ 1 : C(kn) = 0} (<strong>OEIS A382286</strong>).',
    z1Card1Title: 'Balanced Set (β(n) = 1)',
    z1Card1Body: 'When d₁(n) and d₂(n) already reside in the same quadratic shell S_j, C(n) = 0 and β(n) = 1 (counted per shell by OEIS A382306).',
    z1Card2Title: 'Sharp Prime Ceiling (β(p) = k²)',
    z1Card2Body: 'Inside shell S_k = [k², k²+2k], β(n) ≤ k² for every integer, with equality β(n) = k² if and only if n is prime—yielding an exact formula for π(x).',
    z1Card3Title: '4:1 Intra-Shell Spectral Gap',
    z1Card3Body: 'Every composite in S_k satisfies β(n) ≤ ⌊(k+1)²/4⌋, creating an empty forbidden zone separating composite multipliers from prime peaks by an asymptotic 4:1 ratio.',
    z1Box2Title: 'Interactive Spectral Gap Lab: Quadratic Shell S_k = [k², k² + 2k]',
    lblShellK: 'Shell Index k:',
    lblInspectInt: 'Integer n:',
    z1ClickBarHint: 'Click any bar inside shell S_k to inspect its central divisors, balancing product, and OEIS values.',
    z2Box1Title: 'The Square-Multiplier Set Q₂ (OEIS A401528) & Apéry’s Constant ζ(3)',
    z2Para1: 'The Square-Multiplier Set Q₂ = {n ≥ 1 : β(n) is a perfect square} (<strong>OEIS A401528</strong>) unites balanced integers (β=1), primes (β=k²), resonant prime-square multiples (such as n=76 with β=4), and the unique binary boundary exception n=32. Across shells, the first moment satisfies ∑_{n≤X} β(n) ~ (ζ(3)/2) X² / log X, governed by Apéry’s constant ζ(3) ≈ 1.2020569.',
    lblCutoffX: 'Sample Cutoff X:',
    z3Box1Title: 'Foliated Zeta Unification Across r-Degree Power Shells ℕ_r',
    z3Para1: 'Generalizing from quadratic shells (r = 2) to r-degree power shells S_{k,r} = [k^r, (k+1)^r − 1] organizes all positive integer values of the Riemann zeta function ζ(r+1) by foliation parity: even-degree foliations ℕ_{2s} generate odd zeta values ζ(2s+1), while odd-degree foliations ℕ_{2s−1} generate Euler’s even zeta values ζ(2s) ∈ ℚ·π^{2s}.',
    lblSelectDegreeR: 'Select Shell Degree r:',
    thZRegime: 'Foliation Space',
    thZShell: 'Power Shell S_{k,r}',
    thZParity: 'Degree Parity',
    thZConst: 'Zeta Value ζ(r+1)',
    thZNature: 'Arithmetic Status',
    btnNextOeis: 'Explore Pillar 3: OEIS Sequence Atlas (5) »',
    lblForbiddenZone: '4:1 Forbidden Gap',
    statSumBeta: 'Exact Partial Sum ∑_{n≤X} β(n)',
    statNormRatio: 'Normalized Ratio (2 log X / X²) ∑ β(n)',
    statQ2Count: 'Square-Multiplier Set #(Q₂ ∩ [1, X])',
    evenDegLbl: 'Even Degree (Odd Zeta)',
    oddDegLbl: 'Odd Degree (Eulerian Even Zeta)'
  },
  FR: {
    bcRoot: 'Nouveaux Concepts Mathématiques',
    guide2Badge: 'Guide II : Multiplicateur d’Équilibre & Zeta (ζ)',
    btnBackGuide1: '← Guide I : Feuilletages 2D',
    btnPaper2Record: '📄 Article II & BibTeX (24109170)',
    mobZ1: '1. β(n) & Fossé 4:1',
    mobZ2: '2. Ensemble Carré & ζ(3)',
    mobZ3: '3. Hiérarchie ζ(s)',
    sidebarGuide2Heading: 'GUIDE II — 3 PAGES INTERACTIVES',
    navZ1: '1. Diviseurs Centraux & Fossé 4:1',
    subZ1_1: '• Plafond Premier β(p) = ⌊√p⌋²',
    subZ1_2: '• Spectre de la Couche S_k',
    navZ2: '2. Ensemble Carré Q₂ & ζ(3)',
    subZ2_1: '• Ensemble Q₂ (OEIS A401528) & n = 32',
    subZ2_2: '• Convergence vers ζ(3) d’Apéry',
    navZ3: '3. Hiérarchie Zeta de Degré r',
    subZ3_1: '• Ensembles Équilibrés sur ℕ_r',
    subZ3_2: '• Séparation ζ(2s+1) Impair / ζ(2s) Pair',
    z1Box1Title: 'Diviseurs Centraux Conjugués, Détection des Premiers & Fossé Spectral 4:1',
    z1Para1: 'Tout entier n ≥ 2 possède une paire de diviseurs centraux conjugués d₁(n) ≤ √n ≤ d₂(n) avec n = d₁·d₂. L’écart inter-couches C(n) = ⌊√d₂(n)⌋ − ⌊√d₁(n)⌋ définit le multiplicateur d’équilibre minimal β(n) = min{k ≥ 1 : C(kn) = 0} (<strong>OEIS A382286</strong>).',
    z1Card1Title: 'Ensemble Équilibré (β(n) = 1)',
    z1Card1Body: 'Lorsque d₁(n) et d₂(n) résident déjà dans la même couche quadratique S_j, C(n) = 0 et β(n) = 1 (compté par OEIS A382306).',
    z1Card2Title: 'Plafond Premier Exact (β(p) = k²)',
    z1Card2Body: 'Dans la couche S_k = [k², k²+2k], β(n) ≤ k² pour tout entier, avec égalité β(n) = k² si et seulement si n est premier.',
    z1Card3Title: 'Fossé Spectral Intra-Couche 4:1',
    z1Card3Body: 'Tout composé de S_k vérifie β(n) ≤ ⌊(k+1)²/4⌋, ouvrant une zone interdite séparant les composés des sommets premiers selon un rapport asymptotique 4:1.',
    z1Box2Title: 'Laboratoire du Fossé Spectral : Couche Quadratique S_k = [k², k² + 2k]',
    lblShellK: 'Indice de Couche k :',
    lblInspectInt: 'Entier n :',
    z1ClickBarHint: 'Cliquez sur une barre de la couche S_k pour inspecter ses diviseurs centraux et ses valeurs OEIS.',
    z2Box1Title: 'L’Ensemble à Multiplicateur Carré Q₂ (OEIS A401528) & Constante d’Apéry ζ(3)',
    z2Para1: 'L’Ensemble à Multiplicateur Carré Q₂ = {n ≥ 1 : β(n) est un carré parfait} (<strong>OEIS A401528</strong>) réunit les entiers équilibrés (β=1), les nombres premiers (β=k²), les familles résonantes (n=76 avec β=4) et l’exception binaire n=32. Le premier moment vérifie ∑_{n≤X} β(n) ~ (ζ(3)/2) X² / log X, gouverné par ζ(3) ≈ 1.2020569.',
    lblCutoffX: 'Borne d’Échantillon X :',
    z3Box1Title: 'Unification Feuilletée de Zeta sur les Couches de Puissances de Degré r',
    z3Para1: 'Le passage aux couches de puissances S_{k,r} = [k^r, (k+1)^r − 1] organise toutes les valeurs entières positives ζ(r+1) selon la parité du feuilletage : les degrés pairs ℕ_{2s} engendrent ζ(2s+1), et les degrés impairs ℕ_{2s−1} engendrent ζ(2s) ∈ ℚ·π^{2s}.',
    lblSelectDegreeR: 'Choisir le Degré r :',
    thZRegime: 'Espace Feuilleté',
    thZShell: 'Couche de Puissance S_{k,r}',
    thZParity: 'Parité du Degré',
    thZConst: 'Valeur Zeta ζ(r+1)',
    thZNature: 'Statut Arithmétique',
    btnNextOeis: 'Explorer le Pilier 3 : Atlas des Suites OEIS (5) »',
    lblForbiddenZone: 'Fossé Interdit 4:1',
    statSumBeta: 'Somme Partielle Exacte ∑_{n≤X} β(n)',
    statNormRatio: 'Rapport Normalisé (2 log X / X²) ∑ β(n)',
    statQ2Count: 'Ensemble Carré #(Q₂ ∩ [1, X])',
    evenDegLbl: 'Degré Pair (Zeta Impair)',
    oddDegLbl: 'Degré Impair (Zeta Pair d’Euler)'
  },
  AR: {
    bcRoot: 'مفاهيم رياضية جديدة',
    guide2Badge: 'الدليل II: المضاعف الموازن وهرم زيتا (ζ)',
    btnBackGuide1: '→ الدليل I: التوريقات ثنائية الأبعاد',
    btnPaper2Record: '📄 المقال II و BibTeX (24109170)',
    mobZ1: '1. β(n) والفجوة 4:1',
    mobZ2: '2. المجموعة المربعة و ζ(3)',
    mobZ3: '3. هرم زيتا من الدرجة r',
    sidebarGuide2Heading: 'الدليل II — 3 صفحات تفاعلية',
    navZ1: '1. القواسم المركزية والفجوة 4:1',
    subZ1_1: '• سقف الأعداد الأولية β(p) = ⌊√p⌋²',
    subZ1_2: '• فاحص الطيف الطبقي S_k',
    navZ2: '2. مجموعة المضاعفات المربعة و ζ(3)',
    subZ2_1: '• المجموعة Q₂ (A401528) والاستثناء n = 32',
    subZ2_2: '• التقارب نحو ثابت أبيري ζ(3)',
    navZ3: '3. هرم زيتا عبر طبقات الدرجة r',
    subZ3_1: '• المجموعات المتوازنة القوية على ℕ_r',
    subZ3_2: '• انقسام قيم ζ(2s+1) الفردية و ζ(2s) الزوجية',
    z1Box1Title: 'القواسم المركزية المترافقة، الكشف التام عن الأعداد الأولية والفجوة الطيفية 4:1',
    z1Para1: 'لكل عدد صحيح n ≥ 2 زوج قواسم مركزية مترافقة d₁(n) ≤ √n ≤ d₂(n) بحيث n = d₁·d₂. يقيس التباين الطبقي C(n) = ⌊√d₂(n)⌋ − ⌊√d₁(n)⌋ المسافة الطبقية بينهما ويعرّف المضاعف الموازن الأصغر β(n) = min{k ≥ 1 : C(kn) = 0} (<strong>OEIS A382286</strong>).',
    z1Card1Title: 'المجموعة المتوازنة (β(n) = 1)',
    z1Card1Body: 'عندما يقع القاسمان d₁(n) و d₂(n) أصلاً في نفس الطبقة التربيعية S_j فإن C(n) = 0 و β(n) = 1 (تعدها OEIS A382306).',
    z1Card2Title: 'السقف الحاد للأعداد الأولية (β(p) = k²)',
    z1Card2Body: 'داخل الطبقة S_k = [k², k²+2k] يتحقق β(n) ≤ k² دائماً مع التساوي β(n) = k² إذا وفقط إذا كان n أولياً.',
    z1Card3Title: 'الفجوة الطيفية 4:1 داخل الطبقة',
    z1Card3Body: 'كل عدد مركب في الطبقة S_k يحقق β(n) ≤ ⌊(k+1)²/4⌋، مما ينشئ منطقة محظورة تفصل المركبات عن القمم الأولية بنسبة 4:1.',
    z1Box2Title: 'مختبر الفجوة الطيفية التفاعلي: الطبقة التربيعية S_k = [k², k² + 2k]',
    lblShellK: 'مؤشر الطبقة k:',
    lblInspectInt: 'العدد n:',
    z1ClickBarHint: 'انقر على أي عمود داخل الطبقة S_k لفحص قواسمه المركزية وجدائه المتوازن ومتتاليات OEIS.',
    z2Box1Title: 'مجموعة المضاعفات المربعة Q₂ (OEIS A401528) وثابت أبيري ζ(3)',
    z2Para1: 'تجمع مجموعة المضاعفات المربعة Q₂ = {n ≥ 1 : β(n) مربع كامل} (<strong>OEIS A401528</strong>) بين الأعداد المتوازنة (β=1)، الأعداد الأولية (β=k²)، العائلات الرنينية (مثل n=76 حيث β=4) والاستثناء الحدي الثنائي n=32، ويحقق العزم الأول ∑_{n≤X} β(n) ~ (ζ(3)/2) X² / log X.',
    lblCutoffX: 'حد العينة X:',
    z3Box1Title: 'توحيد قيم دالة زيتا عبر طبقات القوى من الدرجة r (ℕ_r)',
    z3Para1: 'تعميم الطبقات التربيعية (r = 2) إلى طبقات القوى S_{k,r} = [k^r, (k+1)^r − 1] ينظم جميع قيم دالة زيتا ζ(r+1) وفق زوجية الدرجة: التوريقات الزوجية ℕ_{2s} تولّد ζ(2s+1)، والفردية ℕ_{2s−1} تولّد ζ(2s) ∈ ℚ·π^{2s}.',
    lblSelectDegreeR: 'اختر درجة الطبقة r:',
    thZRegime: 'فضاء التوريق',
    thZShell: 'طبقة القوى S_{k,r}',
    thZParity: 'زوجية الدرجة',
    thZConst: 'قيمة زيتا ζ(r+1)',
    thZNature: 'الطبيعة الحسابية',
    btnNextOeis: 'استكشاف الركيزة 3: أطلس متتاليات OEIS (5) »',
    lblForbiddenZone: 'الفجوة المحظورة 4:1',
    statSumBeta: 'المجموع الجزئي الدقيق ∑_{n≤X} β(n)',
    statNormRatio: 'النسبة المعيارية (2 log X / X²) ∑ β(n)',
    statQ2Count: 'تعداد المجموعة المربعة #(Q₂ ∩ [1, X])',
    evenDegLbl: 'درجة زوجية (زيتا فردية)',
    oddDegLbl: 'درجة فردية (زيتا زوجية لأويلر)'
  }
};

window.PAGE_I18N = ZETA_I18N;
let zetaPage = 1, selectedN = 17, selectedK = 4, selectedDegreeR = 2, barHitRegions = [];

const ZETA_ROWS = [
  { r: 1, space: '\\mathbb{N}_1', shell: '[k, k]', even: false, zSym: '\\zeta(2) = \\frac{\\pi^2}{6}', val: 1.644934067, status: { EN: 'Transcendental (Euler, 1734)', FR: 'Transcendant (Euler, 1734)', AR: 'متسامٍ (أويلر، 1734)' } },
  { r: 2, space: '\\mathbb{N}_2', shell: '[k^2, k^2+2k]', even: true, zSym: '\\zeta(3) = \\sum_{m\\ge 1} m^{-3}', val: 1.202056903, status: { EN: 'Irrational (Apéry, 1978)', FR: 'Irrationnel (Apéry, 1978)', AR: 'غير ناطق (أبيري، 1978)' } },
  { r: 3, space: '\\mathbb{N}_3', shell: '[k^3, (k+1)^3-1]', even: false, zSym: '\\zeta(4) = \\frac{\\pi^4}{90}', val: 1.082323234, status: { EN: 'Transcendental (∈ ℚ·π⁴)', FR: 'Transcendant (∈ ℚ·π⁴)', AR: 'متسامٍ (∈ ℚ·π⁴)' } },
  { r: 4, space: '\\mathbb{N}_4', shell: '[k^4, (k+1)^4-1]', even: true, zSym: '\\zeta(5) = \\sum_{m\\ge 1} m^{-5}', val: 1.036927755, status: { EN: 'Odd Zeta Set Constant (Open)', FR: 'Constante Zeta Impaire (Ouvert)', AR: 'ثابت زيتا الفردي (مسألة مفتوحة)' } },
  { r: 5, space: '\\mathbb{N}_5', shell: '[k^5, (k+1)^5-1]', even: false, zSym: '\\zeta(6) = \\frac{\\pi^6}{945}', val: 1.017343062, status: { EN: 'Transcendental (∈ ℚ·π⁶)', FR: 'Transcendant (∈ ℚ·π⁶)', AR: 'متسامٍ (∈ ℚ·π⁶)' } },
  { r: 6, space: '\\mathbb{N}_6', shell: '[k^6, (k+1)^6-1]', even: true, zSym: '\\zeta(7) = \\sum_{m\\ge 1} m^{-7}', val: 1.008349277, status: { EN: 'Odd Zeta Set Constant (Rivoal–Zudilin)', FR: 'Constante Zeta Impaire (Rivoal–Zudilin)', AR: 'ثابت زيتا الفردي (ريفوال-زوديلين)' } }
];

function selectZetaPage(p, closeMobile = false) {
  if (p < 1 || p > 3) p = 1;
  zetaPage = p;
  try { history.replaceState(null, '', '#p' + p); } catch (e) {}
  for (let i = 1; i <= 3; i++) {
    const view = document.getElementById(`zeta-view-${i}`), btn = document.getElementById(`nav-btn-${i}`), sub = document.getElementById(`nav-sub-${i}`), pill = document.getElementById(`mob-pill-${i}`);
    if (i === p) {
      view.classList.remove('hidden'); btn.classList.add('nav-page-active'); sub.classList.remove('hidden');
      if (pill) pill.className = 'px-2.5 py-1 rounded-full whitespace-nowrap bg-[#1E3A8A] text-white';
    } else {
      view.classList.add('hidden'); btn.classList.remove('nav-page-active'); sub.classList.add('hidden');
      if (pill) pill.className = 'px-2.5 py-1 rounded-full whitespace-nowrap bg-slate-100 text-slate-700';
    }
  }
  if (closeMobile && window.innerWidth < 1024) document.getElementById('guide-sidebar').classList.add('hidden');
  const lang = PortalShell.getLang(), dict = ZETA_I18N[lang] || ZETA_I18N.EN;
  document.getElementById('breadcrumb-current').textContent = dict[`navZ${p}`];
  document.getElementById('pager-indicator').textContent = `${p} / 3`;
  const prevBtn = document.getElementById('btn-prev-page'), nextBtn = document.getElementById('btn-next-page'), oeisBtn = document.getElementById('btn-goto-oeis');
  prevBtn.style.visibility = p > 1 ? 'visible' : 'hidden';
  if (p > 1) prevBtn.textContent = `« ${dict[`navZ${p - 1}`]}`;
  if (p < 3) { nextBtn.classList.remove('hidden'); nextBtn.textContent = `${dict[`navZ${p + 1}`]} »`; oeisBtn.classList.add('hidden'); }
  else { nextBtn.classList.add('hidden'); oeisBtn.classList.remove('hidden'); }
  setTimeout(() => {
    if (p === 1) renderZetaGapLab();
    if (p === 2) renderZetaAperyLab();
    if (p === 3) renderZetaHierarchyPage();
  }, 25);
}

function prevZetaPage() { if (zetaPage > 1) selectZetaPage(zetaPage - 1); }
function nextZetaPage() { if (zetaPage < 3) selectZetaPage(zetaPage + 1); }

function onZetaShellSlider() {
  selectedK = parseInt(document.getElementById('z1-slider-k').value, 10);
  selectedN = selectedK * selectedK + 1;
  document.getElementById('z1-input-n').value = selectedN;
  renderZetaGapLab();
}

function onZetaInputN() {
  let n = parseInt(document.getElementById('z1-input-n').value, 10);
  if (isNaN(n) || n < 4) n = 4;
  if (n > 360) n = 360;
  selectedN = n; selectedK = ZetaMath.isqrt(n);
  document.getElementById('z1-slider-k').value = Math.min(18, Math.max(2, selectedK));
  renderZetaGapLab();
}

function setZetaPreset(n) {
  selectedN = n; selectedK = ZetaMath.isqrt(n);
  document.getElementById('z1-input-n').value = n;
  document.getElementById('z1-slider-k').value = Math.min(18, Math.max(2, selectedK));
  renderZetaGapLab();
}

function renderZetaGapLab() {
  const lang = PortalShell.getLang(), dict = ZETA_I18N[lang] || ZETA_I18N.EN, k = selectedK;
  document.getElementById('z1-k-val').textContent = k;
  const startM = k * k, count = 2 * k + 1, ceilPrime = k * k, compBound = Math.floor(((k + 1) * (k + 1)) / 4);
  const canvas = document.getElementById('zetaGapCanvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio; canvas.height = rect.height * window.devicePixelRatio;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  const w = rect.width, h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const padL = 48, padR = 18, padT = 28, padB = 34, plotW = w - padL - padR, plotH = h - padT - padB;
  const yOf = (val) => padT + plotH * (1 - val / Math.max(1, ceilPrime));
  const yCeil = yOf(ceilPrime), yComp = yOf(compBound);

  if (yComp > yCeil + 4) {
    ctx.fillStyle = 'rgba(225, 29, 72, 0.06)'; ctx.fillRect(padL, yCeil, plotW, yComp - yCeil);
    ctx.fillStyle = '#BE123C'; ctx.font = 'bold 10px Inter, sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(`${dict.lblForbiddenZone} (${compBound + 1}..${ceilPrime - 1})`, w - padR - 6, (yCeil + yComp) / 2 + 3);
  }
  ctx.save(); ctx.setLineDash([5, 4]); ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#E11D48'; ctx.beginPath(); ctx.moveTo(padL, yCeil); ctx.lineTo(w - padR, yCeil); ctx.stroke();
  ctx.strokeStyle = '#0284C7'; ctx.beginPath(); ctx.moveTo(padL, yComp); ctx.lineTo(w - padR, yComp); ctx.stroke();
  ctx.restore();
  ctx.font = 'bold 10px "JetBrains Mono", monospace'; ctx.textAlign = 'left';
  ctx.fillStyle = '#E11D48'; ctx.fillText(`k²=${ceilPrime}`, 4, yCeil + 3);
  ctx.fillStyle = '#0284C7'; ctx.fillText(`≤${compBound}`, 4, yComp + 3);

  barHitRegions = [];
  const slotW = plotW / count, barW = Math.max(4, Math.min(26, slotW * 0.68));
  for (let i = 0; i < count; i++) {
    const m = startM + i, bVal = ZetaMath.computeBetaExact(m), isP = ZetaMath.isPrimeFast(m);
    const xCenter = padL + (i + 0.5) * slotW, yTop = yOf(bVal), barH = Math.max(3, padT + plotH - yTop);
    ctx.fillStyle = isP ? '#E11D48' : (bVal === 1 ? '#059669' : '#0284C7');
    ctx.fillRect(xCenter - barW / 2, padT + plotH - barH, barW, barH);
    if (m === selectedN) { ctx.strokeStyle = '#0F172A'; ctx.lineWidth = 2.2; ctx.strokeRect(xCenter - barW / 2 - 1.5, padT + plotH - barH - 1.5, barW + 3, barH + 3); }
    if (count <= 25 || i % 2 === 0 || m === selectedN) {
      ctx.fillStyle = m === selectedN ? '#1E3A8A' : '#475569';
      ctx.font = `${m === selectedN ? 'bold ' : ''}10px "JetBrains Mono", monospace`; ctx.textAlign = 'center';
      ctx.fillText(String(m), xCenter, h - 12);
    }
    barHitRegions.push({ m, x1: xCenter - slotW / 2, x2: xCenter + slotW / 2 });
  }

  const cd = ZetaMath.centralDivisors(selectedN), disc = ZetaMath.shellDiscrepancy(selectedN);
  const bVal = ZetaMath.computeBetaExact(selectedN), b1Val = ZetaMath.computeA381054Exact(selectedN);
  const prod = bVal * selectedN, prodCd = ZetaMath.centralDivisors(prod), targetJ = ZetaMath.isqrt(prodCd.d1), inQ2 = ZetaMath.isSquare(bVal);
  document.getElementById('zeta-n-readout').innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
      <div class="math-latex text-sm font-bold text-[#1E3A8A]">${PortalShell.renderLatex(`n = ${selectedN} \\in \\mathcal{S}_{${ZetaMath.isqrt(selectedN)}}, \\quad d_1 \\times d_2 = ${cd.d1} \\times ${cd.d2}, \\quad C(${selectedN}) = ${disc}`)}</div>
      <span class="px-2.5 py-0.5 rounded font-bold text-[11px] ${inQ2 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}">A401528: ${inQ2 ? '✓ ∈ Q₂' : '∉ Q₂'}</span>
    </div>
    <div class="math-latex text-xs sm:text-sm text-slate-800 pt-1">${PortalShell.renderLatex(`\\text{A382286}(${selectedN}) = \\beta(${selectedN}) = ${bVal} \\implies ${bVal} \\times ${selectedN} = ${prod} = ${prodCd.d1} \\times ${prodCd.d2} \\in \\mathcal{S}_{${targetJ}} \\times \\mathcal{S}_{${targetJ}}, \\qquad \\text{A381054}(${selectedN}) = ${b1Val}`)}</div>`;
}

function renderZetaAperyLab() {
  const lang = PortalShell.getLang(), dict = ZETA_I18N[lang] || ZETA_I18N.EN;
  const X = parseInt(document.getElementById('z2-slider-x').value, 10);
  document.getElementById('z2-x-val').textContent = X;
  const APERY = 1.202056903159594;
  let runningSum = 0, q2Count = 0;
  const pts = [];
  for (let n = 1; n <= X; n++) {
    const b = ZetaMath.computeBetaExact(n);
    runningSum += b;
    if (ZetaMath.isSquare(b)) q2Count++;
    if (n >= 50 && (n % 10 === 0 || n === X)) pts.push({ x: n, y: (2 * Math.log(n) / (n * n)) * runningSum });
  }
  const finalNorm = (2 * Math.log(X) / (X * X)) * runningSum;
  document.getElementById('zeta-apery-stats').innerHTML = `
    <div class="p-3 rounded bg-slate-50 border border-slate-300"><div class="text-slate-500 font-semibold">${dict.statSumBeta}</div><div class="mono-num text-base font-extrabold text-[#1E3A8A] mt-0.5">${runningSum.toLocaleString()}</div></div>
    <div class="p-3 rounded bg-emerald-50 border border-emerald-300"><div class="text-emerald-900 font-semibold">${dict.statNormRatio}</div><div class="mono-num text-base font-extrabold text-emerald-800 mt-0.5">${finalNorm.toFixed(5)} <span class="text-xs font-normal">(→ 1.20206)</span></div></div>
    <div class="p-3 rounded bg-sky-50 border border-sky-300"><div class="text-sky-900 font-semibold">${dict.statQ2Count}</div><div class="mono-num text-base font-extrabold text-[#0369A1] mt-0.5">${q2Count} <span class="text-xs font-normal">/ ${X}</span></div></div>`;

  const canvas = document.getElementById('zetaAperyCanvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio; canvas.height = rect.height * window.devicePixelRatio;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  const w = rect.width, h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const padL = 52, padR = 20, padT = 24, padB = 30, plotW = w - padL - padR, plotH = h - padT - padB;
  const yMin = 0.9, yMax = 1.65;
  const xOf = (n) => padL + ((n - 50) / Math.max(1, X - 50)) * plotW;
  const yOf = (v) => padT + plotH * (1 - (Math.min(yMax, Math.max(yMin, v)) - yMin) / (yMax - yMin));
  const yAsym = yOf(APERY);
  ctx.save(); ctx.setLineDash([6, 4]); ctx.strokeStyle = '#059669'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(padL, yAsym); ctx.lineTo(w - padR, yAsym); ctx.stroke(); ctx.restore();
  ctx.fillStyle = '#059669'; ctx.font = 'bold 11px "JetBrains Mono", monospace'; ctx.textAlign = 'left';
  ctx.fillText('ζ(3) = 1.202057...', padL + 8, yAsym - 7);
  ctx.strokeStyle = '#1E3A8A'; ctx.lineWidth = 2.4; ctx.beginPath();
  pts.forEach((p, idx) => { const px = xOf(p.x), py = yOf(p.y); if (idx === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); });
  ctx.stroke();
}

function setZetaDegreeR(r) {
  selectedDegreeR = r;
  for (let i = 1; i <= 6; i++) {
    const btn = document.getElementById(`z3-r-${i}`);
    if (btn) btn.className = i === r ? 'px-3 py-1 rounded text-xs font-bold bg-[#1E3A8A] text-white mono-num' : 'px-3 py-1 rounded text-xs font-bold border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 mono-num';
  }
  renderZetaHierarchyPage();
}

function renderZetaHierarchyPage() {
  const lang = PortalShell.getLang(), dict = ZETA_I18N[lang] || ZETA_I18N.EN;
  const row = ZETA_ROWS.find(item => item.r === selectedDegreeR) || ZETA_ROWS[1];
  let partial = 0; for (let m = 1; m <= 200; m++) partial += Math.pow(m, -(row.r + 1));
  document.getElementById('zeta-degree-card').innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
      <div class="font-extrabold text-[#1E3A8A] text-sm">${PortalShell.renderLatex(`${row.space}: \\quad \\mathcal{S}_{k,${row.r}} = ${row.shell} \\;\\Longrightarrow\\; ${row.zSym}`)}</div>
      <span class="px-2.5 py-0.5 rounded text-[11px] font-bold ${row.even ? 'bg-rose-100 text-[#BE123C]' : 'bg-sky-100 text-[#0369A1]'}">${row.even ? dict.evenDegLbl : dict.oddDegLbl}</span>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-2 pt-1 text-slate-700">
      <span class="mono-num font-bold">ζ(${row.r + 1}) ≈ ${row.val.toFixed(9)} (∑_{m≤200} m⁻${row.r + 1} = ${partial.toFixed(9)})</span>
      <span class="font-semibold text-slate-600">${row.status[lang]}</span>
    </div>`;
  document.getElementById('zeta-parity-tbody').innerHTML = ZETA_ROWS.map(item => `
    <tr onclick="setZetaDegreeR(${item.r})" class="cursor-pointer transition ${item.r === selectedDegreeR ? 'bg-blue-50/80 font-bold' : 'hover:bg-slate-50'}">
      <td class="py-2.5 px-3 text-[#1E3A8A] font-bold">${PortalShell.renderLatex(item.space)}</td>
      <td class="py-2.5 px-3">${PortalShell.renderLatex(item.shell)}</td>
      <td class="py-2.5 px-3 font-sans text-xs ${item.even ? 'text-[#BE123C]' : 'text-[#0369A1]'}">${item.even ? dict.evenDegLbl : dict.oddDegLbl}</td>
      <td class="py-2.5 px-3 font-bold">${PortalShell.renderLatex(item.zSym)} <span class="mono-num text-[11px] text-slate-500">(${item.val.toFixed(6)})</span></td>
      <td class="py-2.5 px-3 font-sans text-xs text-slate-700">${item.status[lang]}</td>
    </tr>`).join('');
}

window.onPortalLanguageChange = function () { selectZetaPage(zetaPage); };
window.addEventListener('resize', () => { selectZetaPage(zetaPage); });
window.addEventListener('DOMContentLoaded', () => {
  ZetaMath.ensureTables();
  const gapCanvas = document.getElementById('zetaGapCanvas');
  if (gapCanvas) {
    gapCanvas.addEventListener('click', (ev) => {
      const r = gapCanvas.getBoundingClientRect(), x = ev.clientX - r.left;
      const hit = barHitRegions.find(b => x >= b.x1 && x <= b.x2);
      if (hit) { selectedN = hit.m; document.getElementById('z1-input-n').value = selectedN; renderZetaGapLab(); }
    });
  }
  const m = (window.location.hash || '').match(/^#p([1-3])$/i);
  if (m) zetaPage = parseInt(m[1], 10);
  PortalShell.init({ rootPrefix: '../', activePillar: 'guides', guideId: 'zeta', showCharLegend: false });
});
