// ============================================================================
// SHARED 5-PILLAR PORTAL SHELL & TRILINGUAL ENGINE (assets/shell.js)
// Renders Top Banner (#dualConeCanvas), 5-Pillar Navigation, Author Box,
// Character Legend, Footer, KaTeX Helpers, and Persistent EN/FR/AR Localization.
// ============================================================================

(function () {
  const SHELL_I18N = {
    EN: {
      charA: 'Alice',
      charAShort: 'A',
      charB: 'Bob',
      charBShort: 'B',
      bannerOverline: 'Research Portal & Interactive Laboratory',
      bannerMainTitle: 'New Mathematical Concepts: Breaking the unstated 1D axiom of the integers',
      bannerSubTitle: 'The Geometry of Integers — Foundational Power-Shell Coordinates, Non-Commutative Foliated Arithmetic, Minimal Balancing Multipliers & Derived Analytic Horizons',
      pilOverview: '1. Overview',
      pilGuides: '2. Thematic Guides',
      pilGuide1: 'Guide I: Discrete Foliations & 2D Arithmetic',
      pilGuide1Sub: '5 Interactive Pages • Lean 4 Verified (DOI: 23456718)',
      pilGuide2: 'Guide II: Balancing Multiplier & Zeta (ζ)',
      pilGuide2Sub: '3 Interactive Pages • OEIS & ζ(s) Hierarchy (DOI: 24109170)',
      pilOeis: '3. OEIS & Calculators',
      pilPubs: '4. Publications',
      pilFormal: '5. Formalization & Code',
      btnMobileMenu: 'Menu & Author',
      authorBoxHeader: 'Author & Principal Investigator',
      authorName: 'Dr. Hassan BALOUI',
      authorRole: 'Mathematician & Independent Researcher',
      authorDegree: 'Ph.D. in Mathematics — ENS Paris-Saclay',
      authorShortBio: 'Holds a Ph.D. in Mathematics from École Normale Supérieure de Paris-Saclay. Combines foundational research in discrete geometry, topology, and number theory with three decades of international executive leadership and industrial systems optimization.',
      btnSidebarDoi1: 'Paper I: Geometry of Integers (DOI) ↗',
      btnSidebarDoi2: 'Paper II: Zeta Hierarchy (DOI) ↗',
      btnSidebarOeis: 'OEIS Sequence Atlas (5) →',
      btnSidebarLean4: '✓ Lean 4 Verified Proofs',
      legendBoxHeader: 'Interactive Guide Characters',
      legendAliceTitle: 'Alice (A) — Geometric Anchor',
      legendAliceDesc: 'Fixes the starting integer station and resident leaf generator.',
      legendBobTitle: 'Bob (B) — Kinematic Driver',
      legendBobDesc: 'Sets the longitudinal step count or divisor along the 3 rays.',
      footerSubtitle: '5-Pillar Mathematical Research Portal & Interactive Laboratory'
    },
    FR: {
      charA: 'Alice',
      charAShort: 'A',
      charB: 'Bob',
      charBShort: 'B',
      bannerOverline: 'Portail de Recherche & Laboratoire Interactif',
      bannerMainTitle: "Nouveaux Concepts Mathématiques : Briser l'axiome unidimensionnel implicite des entiers",
      bannerSubTitle: 'La Géométrie des Entiers — Coordonnées Intrinsèques en Couches de Puissances, Arithmétique Feuilletée Non-Commutative, Multiplicateurs d’Équilibre & Horizons Analytiques',
      pilOverview: '1. Vue d’Ensemble',
      pilGuides: '2. Guides Thématiques',
      pilGuide1: 'Guide I : Feuilletages Discrets & Arithmétique 2D',
      pilGuide1Sub: '5 Pages Interactives • Vérifié Lean 4 (DOI: 23456718)',
      pilGuide2: 'Guide II : Multiplicateur d’Équilibre & Zeta (ζ)',
      pilGuide2Sub: '3 Pages Interactives • Suites OEIS & ζ(s) (DOI: 24109170)',
      pilOeis: '3. OEIS & Calculateurs',
      pilPubs: '4. Publications',
      pilFormal: '5. Formalisation & Code',
      btnMobileMenu: 'Menu & Auteur',
      authorBoxHeader: 'Auteur & Chercheur Principal',
      authorName: 'Dr. Hassan BALOUI',
      authorRole: 'Mathématicien & Chercheur Indépendant',
      authorDegree: 'Docteur en Mathématiques — ENS Paris-Saclay',
      authorShortBio: "Titulaire d'un Doctorat en Mathématiques de l'École Normale Supérieure de Paris-Saclay. Il allie la recherche fondamentale en géométrie discrète, topologie et théorie des nombres à trois décennies de direction exécutive internationale et d'optimisation de systèmes industriels.",
      btnSidebarDoi1: 'Article I : Geometry of Integers (DOI) ↗',
      btnSidebarDoi2: 'Article II : Hiérarchie Zeta (DOI) ↗',
      btnSidebarOeis: 'Atlas des Suites OEIS (5) →',
      btnSidebarLean4: '✓ Preuves Vérifiées Lean 4',
      legendBoxHeader: 'Personnages du Laboratoire',
      legendAliceTitle: 'Alice (A) — Ancre Géométrique',
      legendAliceDesc: 'Fixe la station entière de départ et le générateur de feuille.',
      legendBobTitle: 'Bob (B) — Pilote Cinématique',
      legendBobDesc: 'Fixe le nombre de pas longitudinaux ou le diviseur sur les 3 rayons.',
      footerSubtitle: 'Portail de Recherche Mathématique à 5 Piliers & Laboratoire Interactif'
    },
    AR: {
      charA: 'آية',
      charAShort: 'أ',
      charB: 'بدر',
      charBShort: 'ب',
      bannerOverline: 'بوابة البحث والمختبر التفاعلي',
      bannerMainTitle: 'مفاهيم رياضية جديدة: كسر المسلمة أحادية البعد غير المعلنة للأعداد الصحيحة',
      bannerSubTitle: 'هندسة الأعداد الصحيحة — الإحداثيات الجوهرية لطبقات القوى، الحساب المورّق غير التبادلي، المضاعفات الموازنة والآفاق التحليلية المنبثقة عنها',
      pilOverview: '1. نظرة عامة',
      pilGuides: '2. الأدلة الموضوعية',
      pilGuide1: 'الدليل I: التوريقات المتقطعة والحساب 2D',
      pilGuide1Sub: '5 صفحات تفاعلية • مبرهن بـ Lean 4 (DOI: 23456718)',
      pilGuide2: 'الدليل II: المضاعف الموازن وهرم زيتا (ζ)',
      pilGuide2Sub: '3 صفحات تفاعلية • متتاليات OEIS و ζ(s) (DOI: 24109170)',
      pilOeis: '3. متتاليات OEIS والحواسيب',
      pilPubs: '4. المنشورات العلمية',
      pilFormal: '5. البرهنة الصورية والكود',
      btnMobileMenu: 'القائمة والمؤلف',
      authorBoxHeader: 'المؤلف والباحث الرئيسي',
      authorName: 'د. حسن بالوي (Dr. Hassan BALOUI)',
      authorRole: 'عالم رياضيات وباحث مستقل',
      authorDegree: 'دكتوراه في الرياضيات — ENS Paris-Saclay',
      authorShortBio: 'حاصل على دكتوراه في الرياضيات من المدرسة العليا للأساتذة باريس-ساكلي (ENS Paris-Saclay). يجمع بين البحث التأسيسي في الهندسة المتقطعة والطوبولوجيا ونظرية الأعداد وثلاثة عقود من القيادة التنفيذية الدولية وتحسين الأنظمة الصناعية.',
      btnSidebarDoi1: 'المقال I: هندسة الأعداد الصحيحة (DOI) ↗',
      btnSidebarDoi2: 'المقال II: هرم دالة زيتا (DOI) ↗',
      btnSidebarOeis: 'أطلس متتاليات OEIS (5) ←',
      btnSidebarLean4: '✓ براهين محققة بـ Lean 4',
      legendBoxHeader: 'شخصيتا المختبر التفاعلي',
      legendAliceTitle: 'آية (أ) — المرتكز الهندسي',
      legendAliceDesc: 'تحدد محطة الانطلاق العددية ومولّد الورقة الاتجاهية.',
      legendBobTitle: 'بدر (ب) — المحرك الحركي',
      legendBobDesc: 'يحدد عدد الخطوات الطولية أو المقسوم عليه عبر الأشعة الثلاثة.',
      footerSubtitle: 'بوابة البحث الرياضي ذات الركائز الخمس والمختبر التفاعلي'
    }
  };

  let _config = {
    rootPrefix: '',
    activePillar: 'overview', // 'overview' | 'guides' | 'oeis' | 'publications' | 'formalization'
    guideId: null,            // 'foliations' | 'zeta' | null
    showCharLegend: false
  };

  let _currentLang = 'EN';
  let _coneCanvas = null;
  let _coneCtx = null;
  let _coneTime = 0;
  let _coneRunning = false;

  function loadSavedLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const qLang = (params.get('lang') || '').toUpperCase();
      if (qLang === 'EN' || qLang === 'FR' || qLang === 'AR') return qLang;
      const saved = (localStorage.getItem('nmc_portal_lang') || '').toUpperCase();
      if (saved === 'EN' || saved === 'FR' || saved === 'AR') return saved;
    } catch (e) {}
    return 'EN';
  }

  function saveLang(lang) {
    try { localStorage.setItem('nmc_portal_lang', lang); } catch (e) {}
  }

  function renderLatex(tex, displayMode = false) {
    if (window.katex) {
      try {
        return window.katex.renderToString(tex, { throwOnError: false, displayMode });
      } catch (e) {
        return tex;
      }
    }
    return tex;
  }

  function renderAllStaticLatex(rootEl) {
    const scope = rootEl || document;
    scope.querySelectorAll('.latex-eq').forEach(el => {
      const tex = el.getAttribute('data-tex');
      if (tex) el.innerHTML = renderLatex(tex, el.hasAttribute('data-display'));
    });
  }

  function buildHeaderHTML() {
    return `
    <header class="w-full bg-white border-b-2 border-[#1E3A8A]">
      <div class="max-w-[1320px] mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex-1 text-center md:text-left rtl:md:text-right">
          <div class="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] font-bold uppercase tracking-widest text-[#1E3A8A] bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>www.new-mathematical-concepts.org</span>
            <span>•</span>
            <span data-shell-i18n="bannerOverline">Research Portal & Interactive Laboratory</span>
          </div>
          <h1 class="serif-heading text-xl sm:text-2xl lg:text-[27px] font-bold text-[#0F172A] tracking-tight leading-snug mt-1.5" data-shell-i18n="bannerMainTitle">
            New Mathematical Concepts: Breaking the unstated 1D axiom of the integers
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-0.5" data-shell-i18n="bannerSubTitle">
            The Geometry of Integers — Foundational Power-Shell Coordinates, Non-Commutative Foliated Arithmetic, Minimal Balancing Multipliers & Derived Analytic Horizons
          </p>
        </div>
        <div class="shrink-0 flex flex-col items-center md:items-end gap-1.5">
          <div class="relative w-[280px] sm:w-[300px] h-[112px] rounded-lg bg-[#05070D] border-2 border-[#1E3A8A] shadow-md overflow-hidden">
            <canvas id="dualConeCanvas" class="absolute inset-0 w-full h-full block"></canvas>
            <div class="absolute bottom-1.5 right-2 z-10 px-1.5 py-0.5 rounded bg-[#05070D]/85 border border-cyan-500/30 text-[10px] text-cyan-300 math-latex">
              <span class="latex-eq" data-tex="\\mathbb{Z}_2^- \\cup \\{0\\} \\cup \\mathbb{Z}_2^+">ℤ₂⁻ ∪ {0} ∪ ℤ₂⁺</span>
            </div>
          </div>
        </div>
      </div>
    </header>`;
  }

  function buildTopbarHTML() {
    const r = _config.rootPrefix || '';
    const p = _config.activePillar;
    const cls = (key) => 'pillar-link' + (p === key ? ' pillar-link-active' : '');

    return `
    <div class="w-full pillar-bar sticky top-0 z-30 shadow-xs">
      <div class="max-w-[1320px] mx-auto px-3 sm:px-6 flex flex-wrap items-center justify-between gap-2">
        <!-- Left: Mobile Sidebar Toggle + 5 Permanent Pillars -->
        <div class="flex items-center gap-1 overflow-x-auto max-w-full py-1 lg:py-0">
          <button onclick="PortalShell.toggleMobileSidebar()"
                  class="lg:hidden inline-flex items-center gap-1 px-2.5 py-1.5 mr-1 rounded bg-[#1E3A8A] text-white font-bold text-xs shrink-0">
            <span>☰</span>
            <span data-shell-i18n="btnMobileMenu">Menu & Author</span>
          </button>

          <a href="${r}index.html" class="${cls('overview')}" data-shell-i18n="pilOverview">1. Overview</a>

          <div class="pillar-dropdown-wrap">
            <a href="${r}guides/foliations.html" class="${cls('guides')}">
              <span data-shell-i18n="pilGuides">2. Thematic Guides</span>
              <span class="text-[10px] opacity-75">▾</span>
            </a>
            <div class="pillar-dropdown-menu">
              <a href="${r}guides/foliations.html" class="pillar-dropdown-item ${_config.guideId === 'foliations' ? 'bg-blue-50/70 font-bold text-[#1E3A8A]' : ''}">
                <div class="font-bold" data-shell-i18n="pilGuide1">Guide I: Discrete Foliations & 2D Arithmetic</div>
                <div class="text-[11px] text-slate-500 mt-0.5" data-shell-i18n="pilGuide1Sub">5 Interactive Pages • Lean 4 Verified (DOI: 23456718)</div>
              </a>
              <a href="${r}guides/zeta-hierarchy.html" class="pillar-dropdown-item border-t border-slate-100 ${_config.guideId === 'zeta' ? 'bg-blue-50/70 font-bold text-[#1E3A8A]' : ''}">
                <div class="font-bold" data-shell-i18n="pilGuide2">Guide II: Balancing Multiplier & Zeta (ζ)</div>
                <div class="text-[11px] text-slate-500 mt-0.5" data-shell-i18n="pilGuide2Sub">3 Interactive Pages • OEIS & ζ(s) Hierarchy (DOI: 24109170)</div>
              </a>
            </div>
          </div>

          <a href="${r}oeis.html" class="${cls('oeis')}" data-shell-i18n="pilOeis">3. OEIS & Calculators</a>
          <a href="${r}publications.html" class="${cls('publications')}" data-shell-i18n="pilPubs">4. Publications</a>
          <a href="${r}formalization.html" class="${cls('formalization')}" data-shell-i18n="pilFormal">5. Formalization & Code</a>
        </div>

        <!-- Right: Compact DOI Pills + EN / FR / AR Switcher -->
        <div class="flex items-center gap-2 py-1.5 shrink-0 ml-auto lg:ml-0">
          <a href="https://doi.org/10.5281/zenodo.23456718" target="_blank" rel="noopener noreferrer"
             class="hidden xl:inline-flex doi-badge-pill" title="Geometry of Integers (Zenodo)">
            <span>DOI: 23456718</span><span>↗</span>
          </a>
          <a href="https://doi.org/10.5281/zenodo.24109170" target="_blank" rel="noopener noreferrer"
             class="hidden xl:inline-flex doi-badge-pill" title="Minimal Balancing Multiplier & Zeta (Zenodo)">
            <span>DOI: 24109170</span><span>↗</span>
          </a>

          <div class="inline-flex rounded border border-slate-300 bg-white overflow-hidden shadow-xs">
            <button onclick="PortalShell.setLanguage('EN')" id="lang-btn-EN" class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold bg-[#1E3A8A] text-white transition">
              <svg class="w-4 h-3 rounded-[1px] shrink-0" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="uk-clip"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                <g clip-path="url(#uk-clip)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3.5"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
                </g>
              </svg>
              <span>EN</span>
            </button>
            <button onclick="PortalShell.setLanguage('FR')" id="lang-btn-FR" class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 border-l border-slate-300 transition">
              <svg class="w-4 h-3 rounded-[1px] shrink-0" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
                <rect width="1" height="2" x="0" fill="#002395"/>
                <rect width="1" height="2" x="1" fill="#FFFFFF"/>
                <rect width="1" height="2" x="2" fill="#ED2939"/>
              </svg>
              <span>FR</span>
            </button>
            <button onclick="PortalShell.setLanguage('AR')" id="lang-btn-AR" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 border-l border-slate-300 rtl-font transition">
              <span>العربية</span>
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }

  function buildAuthorSidebarHTML() {
    const r = _config.rootPrefix || '';
    const legendHTML = _config.showCharLegend ? `
      <div class="lib-box !mb-0">
        <div class="lib-box-header">
          <span data-shell-i18n="legendBoxHeader">Interactive Guide Characters</span>
        </div>
        <div class="p-3.5 space-y-2.5 text-xs">
          <div class="flex items-start gap-2.5">
            <span id="legend-badge-a" class="w-5 h-5 rounded-full bg-[#E11D48] text-white font-bold flex items-center justify-center shrink-0 mt-0.5">A</span>
            <div>
              <div class="font-bold text-[#E11D48]" data-shell-i18n="legendAliceTitle">Alice (A) — Geometric Anchor</div>
              <div class="text-slate-600" data-shell-i18n="legendAliceDesc">Fixes the starting integer station and resident leaf generator.</div>
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <span id="legend-badge-b" class="w-5 h-5 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center shrink-0 mt-0.5">B</span>
            <div>
              <div class="font-bold text-[#0284C7]" data-shell-i18n="legendBobTitle">Bob (B) — Kinematic Driver</div>
              <div class="text-slate-600" data-shell-i18n="legendBobDesc">Sets the longitudinal step count or divisor along the 3 rays.</div>
            </div>
          </div>
        </div>
      </div>` : '';

    return `
      <div class="lib-box !mb-0">
        <div class="lib-box-header">
          <span data-shell-i18n="authorBoxHeader">Author & Principal Investigator</span>
        </div>
        <div class="p-4 flex flex-col items-center text-center space-y-3">
          <div class="w-28 h-28 rounded-full border-2 border-[#1E3A8A] bg-slate-100 overflow-hidden flex items-center justify-center shadow-sm relative">
            <img id="author-photo-img" src="${r}photo_HB.jpg" alt="Dr. Hassan BALOUI"
                 class="w-full h-full object-cover"
                 onerror="this.classList.add('hidden'); document.getElementById('author-monogram-fallback').classList.remove('hidden');" />
            <div id="author-monogram-fallback" class="hidden flex flex-col items-center justify-center p-2">
              <span class="serif-heading text-2xl font-bold text-[#1E3A8A]">HB</span>
              <span class="text-[9px] uppercase tracking-wider text-slate-500">ENS Paris-Saclay</span>
            </div>
          </div>

          <div>
            <h3 class="text-base font-extrabold text-slate-900" data-shell-i18n="authorName">Dr. Hassan BALOUI</h3>
            <p class="text-[11px] font-bold text-slate-700 mt-0.5" data-shell-i18n="authorRole">Mathematician & Independent Researcher</p>
            <p class="text-xs font-semibold text-[#1E3A8A] mt-0.5" data-shell-i18n="authorDegree">Ph.D. in Mathematics — ENS Paris-Saclay</p>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed text-left rtl:text-right" data-shell-i18n="authorShortBio">
            Holds a Ph.D. in Mathematics from École Normale Supérieure de Paris-Saclay. Combines foundational research in discrete geometry, topology, and number theory with three decades of international executive leadership and industrial systems optimization.
          </p>

          <div class="w-full pt-2 border-t border-slate-200 flex flex-col gap-1.5 text-xs">
            <a href="mailto:hassan.baloui@gmail.com" class="w-full py-1.5 px-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-[11px] font-semibold truncate">
              ✉ hassan.baloui@gmail.com
            </a>
            <a href="https://doi.org/10.5281/zenodo.23456718" target="_blank" rel="noopener noreferrer"
               class="w-full py-1.5 px-2 rounded bg-[#1E3A8A] hover:bg-blue-900 text-white font-semibold text-[11px] transition" data-shell-i18n="btnSidebarDoi1">
              Paper I: Geometry of Integers (DOI) ↗
            </a>
            <a href="https://doi.org/10.5281/zenodo.24109170" target="_blank" rel="noopener noreferrer"
               class="w-full py-1.5 px-2 rounded bg-[#0284C7] hover:bg-sky-700 text-white font-semibold text-[11px] transition" data-shell-i18n="btnSidebarDoi2">
              Paper II: Zeta Hierarchy (DOI) ↗
            </a>
            <a href="${r}oeis.html"
               class="w-full py-1.5 px-2 rounded bg-slate-50 hover:bg-slate-100 text-[#1E3A8A] border border-slate-300 font-bold text-[11px] transition" data-shell-i18n="btnSidebarOeis">
              OEIS Sequence Atlas (5) →
            </a>
            <a href="${r}formalization.html"
               class="w-full py-1 px-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[11px] transition text-center"
               data-shell-i18n="btnSidebarLean4">
              ✓ Lean 4 Verified Proofs
            </a>
          </div>
        </div>
      </div>
      ${legendHTML}`;
  }

  function buildFooterHTML() {
    return `
    <footer class="mt-12 bg-[#F8FAFC] border-t border-[#CBD5E1] py-6 px-4 text-xs text-slate-600">
      <div class="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <strong class="text-slate-900">www.new-mathematical-concepts.org</strong> •
          <span data-shell-i18n="footerSubtitle">5-Pillar Mathematical Research Portal & Interactive Laboratory</span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2">
          <span>© 2026 Dr. Hassan BALOUI</span>
          <span>•</span>
          <a href="https://doi.org/10.5281/zenodo.23456718" target="_blank" rel="noopener" class="mono-num hover:text-[#1E3A8A] underline">10.5281/zenodo.23456718</a>
          <span>•</span>
          <a href="https://doi.org/10.5281/zenodo.24109170" target="_blank" rel="noopener" class="mono-num hover:text-[#1E3A8A] underline">10.5281/zenodo.24109170</a>
        </div>
      </div>
    </footer>`;
  }

  // Procedural 3D Dual-Cone Banner Canvas (preserved from original portal)
  function resizeConeCanvas() {
    if (!_coneCanvas || !_coneCtx) return;
    const rect = _coneCanvas.parentElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    _coneCanvas.width = rect.width * window.devicePixelRatio;
    _coneCanvas.height = rect.height * window.devicePixelRatio;
    _coneCtx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function renderDualConeBanner() {
    if (!_coneCanvas || !_coneCtx) return;
    const w = _coneCanvas.width / window.devicePixelRatio;
    const h = _coneCanvas.height / window.devicePixelRatio;
    _coneCtx.clearRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const maxSpan = w * 0.42;

    _coneCtx.strokeStyle = 'rgba(255, 230, 0, 0.25)';
    _coneCtx.lineWidth = 1;
    _coneCtx.beginPath();
    _coneCtx.moveTo(0, cy); _coneCtx.lineTo(w, cy);
    _coneCtx.moveTo(cx, 0); _coneCtx.lineTo(cx, h);
    _coneCtx.stroke();

    const numShells = 5;
    const numRays = 18;
    const rot = _coneTime * 0.35;

    [-1, 1].forEach((side) => {
      const isLeft = side === -1;
      const rgb = isLeft ? '255, 42, 133' : '0, 240, 255';
      const hex = isLeft ? '#FF2A85' : '#00F0FF';

      for (let r = 0; r < numRays; r++) {
        const ang = (r / numRays) * Math.PI * 2 + rot * side;
        const xEnd = cx + side * maxSpan;
        const yEnd = cy + Math.sin(ang) * (h * 0.43);
        _coneCtx.strokeStyle = `rgba(${rgb}, 0.38)`;
        _coneCtx.lineWidth = 1.05;
        _coneCtx.beginPath();
        _coneCtx.moveTo(cx, cy);
        _coneCtx.lineTo(xEnd, yEnd);
        _coneCtx.stroke();
      }

      for (let s = 1; s <= numShells; s++) {
        const t = s / numShells;
        const xRing = cx + side * t * maxSpan;
        const rx = t * 11;
        const ry = t * (h * 0.42);
        _coneCtx.strokeStyle = `rgba(${rgb}, 0.78)`;
        _coneCtx.lineWidth = 1.3;
        _coneCtx.beginPath();
        _coneCtx.ellipse(xRing, cy, rx, ry, 0, 0, Math.PI * 2);
        _coneCtx.stroke();

        for (let r = 0; r < numRays; r += 2) {
          const ang = (r / numRays) * Math.PI * 2 + rot * side;
          const px = xRing + Math.cos(ang) * rx;
          const py = cy + Math.sin(ang) * ry;
          _coneCtx.fillStyle = hex;
          _coneCtx.beginPath();
          _coneCtx.arc(px, py, 1.6, 0, Math.PI * 2);
          _coneCtx.fill();
        }
      }
    });

    const grad = _coneCtx.createRadialGradient(cx, cy, 1, cx, cy, 22);
    grad.addColorStop(0, '#FFFFFF');
    grad.addColorStop(0.35, '#FFE600');
    grad.addColorStop(1, 'rgba(5, 7, 13, 0)');
    _coneCtx.fillStyle = grad;
    _coneCtx.beginPath();
    _coneCtx.arc(cx, cy, 22, 0, Math.PI * 2);
    _coneCtx.fill();

    _coneTime += 0.008;
    requestAnimationFrame(renderDualConeBanner);
  }

  function setLanguage(lang) {
    if (!SHELL_I18N[lang]) lang = 'EN';
    _currentLang = lang;
    saveLang(lang);

    const htmlEl = document.documentElement;
    htmlEl.lang = lang.toLowerCase();
    htmlEl.dir = lang === 'AR' ? 'rtl' : 'ltr';

    ['EN', 'FR', 'AR'].forEach(l => {
      const btn = document.getElementById(`lang-btn-${l}`);
      if (!btn) return;
      if (l === lang) {
        btn.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold bg-[#1E3A8A] text-white transition' + (l === 'AR' ? ' rtl-font' : '');
      } else {
        btn.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 border-l border-slate-300 transition' + (l === 'AR' ? ' rtl-font' : '');
      }
    });

    const shellDict = SHELL_I18N[lang];
    document.querySelectorAll('[data-shell-i18n]').forEach(el => {
      const k = el.getAttribute('data-shell-i18n');
      if (shellDict[k]) el.innerHTML = shellDict[k];
    });

    const pageDict = (window.PAGE_I18N && window.PAGE_I18N[lang]) ? window.PAGE_I18N[lang] : null;
    if (pageDict) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (pageDict[k] !== undefined) el.innerHTML = pageDict[k];
      });
    }

    const badgeA = document.getElementById('legend-badge-a');
    const badgeB = document.getElementById('legend-badge-b');
    if (badgeA) badgeA.textContent = shellDict.charAShort;
    if (badgeB) badgeB.textContent = shellDict.charBShort;

    renderAllStaticLatex();

    if (typeof window.onPortalLanguageChange === 'function') {
      window.onPortalLanguageChange(lang, shellDict);
    }
  }

  function toggleMobileSidebar() {
    const sb = document.getElementById('guide-sidebar');
    if (sb) sb.classList.toggle('hidden');
  }

  function copyText(text, btnEl, copiedLabel) {
    const fallbackCopy = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
    if (btnEl) {
      const orig = btnEl.innerHTML;
      btnEl.innerHTML = copiedLabel || '✓ Copied!';
      setTimeout(() => { btnEl.innerHTML = orig; }, 1800);
    }
  }

  function init(customConfig) {
    _config = Object.assign(_config, customConfig || {});

    const headerMount = document.getElementById('portal-header');
    if (headerMount) headerMount.innerHTML = buildHeaderHTML();

    const topbarMount = document.getElementById('portal-topbar');
    if (topbarMount) topbarMount.innerHTML = buildTopbarHTML();

    const authorMount = document.getElementById('portal-author-box');
    if (authorMount) authorMount.innerHTML = buildAuthorSidebarHTML();

    const footerMount = document.getElementById('portal-footer');
    if (footerMount) footerMount.innerHTML = buildFooterHTML();

    _coneCanvas = document.getElementById('dualConeCanvas');
    if (_coneCanvas) {
      _coneCtx = _coneCanvas.getContext('2d');
      resizeConeCanvas();
      if (!_coneRunning) {
        _coneRunning = true;
        renderDualConeBanner();
      }
      window.addEventListener('resize', resizeConeCanvas);
    }

    const initialLang = loadSavedLang();
    setLanguage(initialLang);
  }

  window.PortalShell = {
    SHELL_I18N,
    init,
    getLang: () => _currentLang,
    getCharInfo: () => SHELL_I18N[_currentLang],
    setLanguage,
    toggleMobileSidebar,
    renderLatex,
    renderAllStaticLatex,
    copyText
  };
})();
