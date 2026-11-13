// ============================================================================
// PILLAR 1 CONTROLLER: FOUNDATIONAL OVERVIEW HUB (assets/overview-hub.js)
// Enforces the strict epistemological flow:
//   The Geometry of Integers (Foundational Root)
//     ├── Lens I:   Intrinsic Power-Shell Coordinates & Directional Leaves
//     ├── Lens II:  Non-Commutative Foliated Arithmetic, FTA & Geodesics
//     └── Lens III: Inter-Shell Divisor Dynamics, β(n) & The ζ(s) Hierarchy
// ============================================================================

const HUB_I18N = {
  EN: {
    hubSidebarTitle: 'PORTAL ARCHITECTURE (5 PILLARS)',
    sidePil1: '1. Foundational Overview (GOI)',
    sidePil2a: '2A. Guide I: Foliations & 2D Lab',
    sidePil2b: '2B. Guide II: Multiplier & Zeta (ζ)',
    sidePil3: '3. OEIS Sequence Atlas (5)',
    sidePil4: '4. Preprints & Publications',
    sidePil5: '5. Lean 4 Proofs & Open Code',
    foundationHeader: '★ Foundational Starting Point — The Geometry of Integers',
    foundationLead: 'For over two millennia—from Euclid and Peano to Whitehead and Russell—arithmetic has operated under an unstated one-dimensional ontological axiom: that the integers reside on a flat line (m = 1) where scalar magnitude and longitudinal step depth from zero coincide identically. <strong>The Geometry of Integers</strong> breaks this axiom at its root by unfolding ℕ intrinsically into r-degree power shells without importing any external continuum. Every concept in this research portal—whether intrinsic coordinate frames, non-commutative 2D foliated arithmetic, or minimal balancing multipliers and ζ(s)—originates directly from this single geometric foundation.',
    btnEnterFoundationGuide: '▶ Enter Foundational Guide I (5 Pages)',
    btnFoundationRecord: '📄 Monograph Record & BibTeX',
    btnFoundationLean: '✓ Lean 4 Formal Proofs',
    btnZenodoDoi: 'Zenodo DOI ↗',
    derivationBoxTitle: 'From One Foundation to Every Derived Horizon: Three Mathematical Lenses',
    trunkOverline: 'ROOT ONTOLOGICAL FRAMEWORK',
    trunkTitle: 'The Geometry of Integers — Intrinsic Power-Shell Foliations',
    trunkDesc: 'Partitioning ℕ into power shells S_{k,r} = [k^r, (k+1)^r − 1] decouples longitudinal shell depth k from lateral intra-shell position, turning the integers into a curved foliated space from which three complementary mathematical lenses emerge:',
    stemCaption: '▼ Every Coordinate, Operation & Analytic Invariant Flows from This Geometry ▼',
    inspBoxTitle: 'Unified Geometry-of-Integers Inspector: One Integer n Across All Derived Lenses',
    lblEnterInt: 'Inspect Integer n (2 – 2000):',
    lblNotablePresets: 'Notable Integers:',
    rootBannerPrefix: 'Foundational Home in the Geometry of Integers (Quadratic Foliation ℕ₂):',
    lens1CardTitle: 'Lens I — Coordinates & Leaves',
    lens2CardTitle: 'Lens II — 2D Arithmetic & Geodesics',
    lens3CardTitle: 'Lens III — Minimal Balancing & ζ(3)',
    lblLeafGens: 'Leaf Generators (g_L, g_V, g_R):',
    lblLeafDepths: 'Local Depths (d₀, d_½, d₁):',
    lblBirthShells: 'Birth Shells (k₀,L, k₀,V, k₀,R):',
    lblUnitTriad: 'Unit Shift Triad (n ⊕₂ 1):',
    lblGeodesicApex: 'Geodesic Distance δ₂(0, n):',
    lblLeafPrimality: 'Leaf-Depth Primality:',
    lblCentralDivs: 'Central Divisors d₁ × d₂:',
    lblMultipliers: 'Multipliers β(n) & β₁(n):',
    lblSquareSet: 'Square-Multiplier Set (A401528):',
    statusPrime: 'Prime Ceiling: β(p) = k²',
    statusBalanced: 'Balanced in S_j (β(n) = 1)',
    statusCompositeEcc: 'Eccentric Composite (4:1 Gap)',
    inSetYes: '✓ ∈ Q₂ (Square β)',
    inSetNo: '∉ Q₂ (Non-square β)',
    primeDepthCount: 'prime leaf depth(s)',
    derivedPubsHeader: 'Recent Research Developments Derived from the Geometry of Integers',
    linkFullBib: 'Full Bibliography →',
    btnLaunchGuide: '▶ Launch Interactive Guide',
    btnPaperBib: '📄 Paper Record & BibTeX',
    guidesDirHeader: 'Pillar 2 — Thematic Interactive Laboratories',
    guidesDirBadge: 'Scoped Guides',
    pagesBadgeWord: 'Interactive Pages',
    btnEnterGuide: 'Open Interactive Guide →',
    oeisQuickHeader: 'Pillar 3 — Connected OEIS Sequences (5)',
    linkOpenAtlas: 'Open Atlas →',
    oeisQuickDesc: 'Five interconnected entries in the On-Line Encyclopedia of Integer Sequences arise directly from tracking divisor discrepancies and balanced sets across the quadratic shells of the Geometry of Integers:',
    btnLaunchOeis: '▶ Launch Live OEIS Plotter & Term Calculator',
    formalQuickHeader: 'Pillars 4 & 5 — Archival Papers & Lean 4 Code',
    linkAllPubs: 'Bibliography →',
    formalQuickDesc: 'The foundational monograph and every derived preprint carry dedicated Highwire Press bibliographic pages, same-domain archival PDFs, machine-checked Lean 4 formal proofs, and reproducible Python scripts.',
    pillPaper1: '★ Foundational Monograph (23456718)',
    pillPaper2: '↳ Derived Paper II (24109170)',
    btnOpenFormal: '✓ Inspect Lean 4 Proofs & Verification Scripts'
  },
  FR: {
    hubSidebarTitle: 'ARCHITECTURE DU PORTAIL (5 PILIERS)',
    sidePil1: '1. Socle Fondateur (GOI)',
    sidePil2a: '2A. Guide I : Feuilletages & Labo 2D',
    sidePil2b: '2B. Guide II : Multiplicateur & Zeta (ζ)',
    sidePil3: '3. Atlas des Suites OEIS (5)',
    sidePil4: '4. Prépublications & Articles',
    sidePil5: '5. Preuves Lean 4 & Code Ouvert',
    foundationHeader: '★ Point de Départ Fondateur — La Géométrie des Entiers',
    foundationLead: "Depuis plus de deux millénaires — d'Euclide et Peano à Whitehead et Russell — l'arithmétique opère sous un axiome ontologique unidimensionnel implicite : que les entiers résident sur une droite plate (m = 1) où grandeur scalaire et profondeur depuis zéro coïncident. <strong>La Géométrie des Entiers</strong> brise cet axiome à la racine en déployant intrinsèquement ℕ en couches de puissances de degré r sans importer de continuum externe. Tout ce qui suit sur ce portail — coordonnées intrinsèques, arithmétique feuilletée 2D ou multiplicateurs d'équilibre et hiérarchie ζ(s) — découle directement de ce socle géométrique unique.",
    btnEnterFoundationGuide: '▶ Ouvrir le Guide Fondateur I (5 Pages)',
    btnFoundationRecord: '📄 Fiche Monographie & BibTeX',
    btnFoundationLean: '✓ Preuves Formelles Lean 4',
    btnZenodoDoi: 'DOI Zenodo ↗',
    derivationBoxTitle: 'D’une Fondation Unique à Tous les Horizons Dérivés : Trois Prismes Mathématiques',
    trunkOverline: 'SOCLE ONTOLOGIQUE FONDATEUR',
    trunkTitle: 'La Géométrie des Entiers — Feuilletages Intrinsèques en Couches de Puissances',
    trunkDesc: 'Le partitionnement intrinsèque S_{k,r} = [k^r, (k+1)^r − 1] découple la profondeur longitudinale k de la position latérale intra-couche, faisant émerger trois prismes mathématiques complémentaires :',
    stemCaption: '▼ Chaque Coordonnée, Opération & Invariant Analytique Découle de Cette Géométrie ▼',
    inspBoxTitle: 'Inspecteur Unifié de la Géométrie des Entiers : Un Entier n à Travers les Trois Prismes',
    lblEnterInt: 'Inspecter l’entier n (2 – 2000) :',
    lblNotablePresets: 'Entiers Remarquables :',
    rootBannerPrefix: 'Position Fondatrice dans la Géométrie des Entiers (Feuilletage Quadratique ℕ₂) :',
    lens1CardTitle: 'Prisme I — Coordonnées & Feuilles',
    lens2CardTitle: 'Prisme II — Arithmétique 2D & Géodésiques',
    lens3CardTitle: 'Prisme III — Équilibre Minimal & ζ(3)',
    lblLeafGens: 'Générateurs (g_L, g_V, g_R) :',
    lblLeafDepths: 'Profondeurs (d₀, d_½, d₁) :',
    lblBirthShells: 'Couches Natales (k₀,L, k₀,V, k₀,R) :',
    lblUnitTriad: 'Triade d’Unité (n ⊕₂ 1) :',
    lblGeodesicApex: 'Distance Géodésique δ₂(0, n) :',
    lblLeafPrimality: 'Primalité des Feuilles :',
    lblCentralDivs: 'Diviseurs Centraux d₁ × d₂ :',
    lblMultipliers: 'Multiplicateurs β(n) & β₁(n) :',
    lblSquareSet: 'Ensemble Carré (A401528) :',
    statusPrime: 'Plafond Premier : β(p) = k²',
    statusBalanced: 'Équilibré dans S_j (β(n) = 1)',
    statusCompositeEcc: 'Composé Excentrique (Fossé 4:1)',
    inSetYes: '✓ ∈ Q₂ (β carré)',
    inSetNo: '∉ Q₂ (β non carré)',
    primeDepthCount: 'profondeur(s) première(s)',
    derivedPubsHeader: 'Développements de Recherche Récents Issus de la Géométrie des Entiers',
    linkFullBib: 'Bibliographie Complète →',
    btnLaunchGuide: '▶ Ouvrir le Guide Interactif',
    btnPaperBib: '📄 Fiche Article & BibTeX',
    guidesDirHeader: 'Pilier 2 — Laboratoires Interactifs Thématiques',
    guidesDirBadge: 'Guides Dédiés',
    pagesBadgeWord: 'Pages Interactives',
    btnEnterGuide: 'Explorer le Guide Interactif →',
    oeisQuickHeader: 'Pilier 3 — Suites OEIS Connectées (5)',
    linkOpenAtlas: 'Ouvrir l’Atlas →',
    oeisQuickDesc: 'Cinq suites interconnectées dans l’encyclopédie OEIS émergent directement de la dynamique des diviseurs centraux et des ensembles équilibrés sur les couches quadratiques de la Géométrie des Entiers :',
    btnLaunchOeis: '▶ Ouvrir le Traceur OEIS & Calculateur de Termes',
    formalQuickHeader: 'Piliers 4 & 5 — Articles d’Archive & Preuves Lean 4',
    linkAllPubs: 'Bibliographie →',
    formalQuickDesc: 'La monographie fondatrice et chaque prépublication dérivée disposent de fiches Highwire Press dédiées, de PDF sur le même domaine, de preuves formelles Lean 4 et de scripts Python reproductibles.',
    pillPaper1: '★ Monographie Fondatrice (23456718)',
    pillPaper2: '↳ Article Dérivé II (24109170)',
    btnOpenFormal: '✓ Consulter les Preuves Lean 4 & Scripts'
  },
  AR: {
    hubSidebarTitle: 'هندسة البوابة (الركائز الخمس)',
    sidePil1: '1. الأصل التأسيسي (هندسة الأعداد)',
    sidePil2a: '2أ. الدليل I: التوريقات ومختبر 2D',
    sidePil2b: '2ب. الدليل II: المضاعف الموازن وزيتا (ζ)',
    sidePil3: '3. أطلس متتاليات OEIS (5)',
    sidePil4: '4. المنشورات والمقالات البحثية',
    sidePil5: '5. براهين Lean 4 والكود المفتوح',
    foundationHeader: '★ نقطة الانطلاق التأسيسية — هندسة الأعداد الصحيحة',
    foundationLead: 'لأكثر من ألفي عام — منذ إقليدس وبيانو إلى وايتهد وراسل — عمل الحساب الكلاسيكي تحت مسلمة وجودية أحادية البعد غير معلنة تفترض إقامة الأعداد الصحيحة على مستقيم مسطح (m = 1) تتطابق فيه القيمة العددية مع العمق من الصفر. تكسر <strong>هندسة الأعداد الصحيحة</strong> هذه المسلمة من جذورها عبر نشر ℕ جوهرياً إلى طبقات قوى من الدرجة r دون استيراد أي فضاء متصل خارجي. كل ما يأتي لاحقاً في هذه البوابة — سواء الإحداثيات المورّقة، أو الحساب ثنائي الأبعاد غير التبادلي، أو المضاعفات الموازنة وهرم زيتا ζ(s) — ينبثق مباشرة من هذا الأصل الهندسي الواحد.',
    btnEnterFoundationGuide: '▶ الدخول إلى الدليل التأسيسي I (5 صفحات)',
    btnFoundationRecord: '📄 بطاقة المقال التأسيسي و BibTeX',
    btnFoundationLean: '✓ براهين Lean 4 المحققة آلياً',
    btnZenodoDoi: 'معرف Zenodo DOI ↗',
    derivationBoxTitle: 'من أصل هندسي واحد إلى كافة الآفاق المنبثقة: ثلاث عدسات رياضية متكاملة',
    trunkOverline: 'الإطار الوجودي الجذري',
    trunkTitle: 'هندسة الأعداد الصحيحة — التوريقات الجوهرية لطبقات القوى',
    trunkDesc: 'يفصل التقسيم الجوهري S_{k,r} = [k^r, (k+1)^r − 1] بين العمق الطبقي الطولي k والموضع العرضي داخل الطبقة، مما يولّد ثلاث عدسات رياضية متكاملة:',
    stemCaption: '▼ جميع الإحداثيات والعمليات والثوابت التحليلية تتفرع عن هذه الهندسة ▼',
    inspBoxTitle: 'الفاحص الموحد لهندسة الأعداد الصحيحة: عدد واحد n عبر العدسات الثلاث المنبثقة',
    lblEnterInt: 'فحص العدد الصحيح n (2 – 2000):',
    lblNotablePresets: 'أعداد مميزة:',
    rootBannerPrefix: 'الموقع التأسيسي في هندسة الأعداد الصحيحة (التوريق التربيعي ℕ₂):',
    lens1CardTitle: 'العدسة I — الإحداثيات والأوراق',
    lens2CardTitle: 'العدسة II — الحساب 2D والجيوديسيا',
    lens3CardTitle: 'العدسة III — الموازنة الصغرى و ζ(3)',
    lblLeafGens: 'مولدات الأوراق (g_L, g_V, g_R):',
    lblLeafDepths: 'الأعماق المحلية (d₀, d_½, d₁):',
    lblBirthShells: 'طبقات الميلاد (k₀,L, k₀,V, k₀,R):',
    lblUnitTriad: 'ثلاثية خطوة الوحدة (n ⊕₂ 1):',
    lblGeodesicApex: 'المسافة الجيوديسية δ₂(0, n):',
    lblLeafPrimality: 'أولية أعماق الأوراق:',
    lblCentralDivs: 'القاسمان المركزيان d₁ × d₂:',
    lblMultipliers: 'المضاعفان β(n) و β₁(n):',
    lblSquareSet: 'المجموعة المربعة (A401528):',
    statusPrime: 'سقف الأوليات: β(p) = k²',
    statusBalanced: 'متوازن في S_j (β(n) = 1)',
    statusCompositeEcc: 'مركب متباين (فجوة 4:1)',
    inSetYes: '✓ ∈ Q₂ (مضاعف مربع)',
    inSetNo: '∉ Q₂ (غير مربع)',
    primeDepthCount: 'أعماق ورقية أولية',
    derivedPubsHeader: 'أحدث الأبحاث والامتدادات المنبثقة عن هندسة الأعداد الصحيحة',
    linkFullBib: 'القائمة الكاملة للمنشورات ←',
    btnLaunchGuide: '▶ فتح الدليل التفاعلي',
    btnPaperBib: '📄 صفحة المقال و BibTeX',
    guidesDirHeader: 'الركيزة 2 — المختبرات البحثية التفاعلية',
    guidesDirBadge: 'أدلة متخصصة',
    pagesBadgeWord: 'صفحات تفاعلية',
    btnEnterGuide: 'فتح الدليل التفاعلي ←',
    oeisQuickHeader: 'الركيزة 3 — متتاليات OEIS المترابطة (5)',
    linkOpenAtlas: 'فتح الأطلس ←',
    oeisQuickDesc: 'خمس متتاليات مترابطة في موسوعة OEIS تنشأ مباشرة من تتبع تباين القواسم المركزية والمجموعات المتوازنة عبر الطبقات التربيعية لهندسة الأعداد الصحيحة:',
    btnLaunchOeis: '▶ فتح راسم متتاليات OEIS وحاسبة الحدود',
    formalQuickHeader: 'الركيزتان 4 و 5 — المقالات المؤرشفة وبراهين Lean 4',
    linkAllPubs: 'قائمة المنشورات ←',
    formalQuickDesc: 'يمتلك المقال التأسيسي وكل بحث منبثق عنه صفحات توثيقية بوسوم Highwire Press وملفات PDF محلية مع براهين Lean 4 المحققة آلياً وأكواد Python القياسية.',
    pillPaper1: '★ المقال التأسيسي (23456718)',
    pillPaper2: '↳ البحث المنبثق II (24109170)',
    btnOpenFormal: '✓ استعراض براهين Lean 4 وأكواد التحقق'
  }
};

window.PAGE_I18N = HUB_I18N;

function decomposeQuadraticFull(n) {
  const k = Math.floor(Math.sqrt(n));
  const r = n - k * k;
  const gl = r;
  const gv = n - (k * k + k);
  const gr = (k + 1) * (k + 1) - 1 - n;
  const k0l = Math.ceil(gl / 2);
  const k0v = Math.abs(gv);
  const k0r = Math.ceil(gr / 2);
  const dl = k - k0l;
  const dv = k - k0v;
  const dr = k - k0r;
  // Unit step shift triad n ⊕₂ 1 = {∇_0(n,1), ∇_{1/2}(n,1), ∇_1(n,1)}
  const t0 = n + (2 * k + 1);
  const tHalf = n + (2 * k + 2);
  const t1 = n + (2 * k + 3);
  return { k, r, gl, gv, gr, k0l, k0v, k0r, dl, dv, dr, triad1: [t0, tHalf, t1] };
}

function renderHubDynamicSections(lang) {
  const dict = HUB_I18N[lang] || HUB_I18N.EN;
  const pubs = PORTAL_REGISTRY.PUBLICATIONS;
  const foundation = pubs.find(p => p.hierarchyRole === 'foundation') || pubs[pubs.length - 1];
  const derivedList = pubs.filter(p => p.hierarchyRole !== 'foundation');

  // 1. BOX 1: Permanent Foundational Charter (Geometry of Integers)
  document.getElementById('foundation-charter-body').innerHTML = `
    <div class="space-y-4">
      <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${dict.foundationLead}</p>
      <div class="p-4 rounded-md bg-slate-50 border border-slate-300 border-l-4 border-l-[#1E3A8A] rtl:border-l rtl:border-r-4 rtl:border-r-[#1E3A8A] space-y-2.5">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 rounded bg-[#1E3A8A] text-white font-extrabold">${foundation.derivedFromAspect ? foundation.derivedFromAspect[lang] : 'Foundational Root Framework'}</span>
            <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold mono-num">DOI: ${foundation.doi}</span>
            <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[11px]">✓ Lean 4 Verified</span>
          </div>
          <span class="text-slate-500 font-semibold">${foundation.dateDisplay[lang]}</span>
        </div>
        <div>
          <h2 class="serif-heading text-xl sm:text-2xl font-bold text-slate-900">${foundation.title[lang]}</h2>
          <p class="text-xs sm:text-sm font-semibold text-[#1E3A8A] mt-0.5">${foundation.subtitle[lang]}</p>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${foundation.abstract[lang]}</p>
        <div class="flex flex-wrap items-center gap-2.5 pt-1">
          <a href="${foundation.guidePage}" class="px-3.5 py-2 rounded bg-[#1E3A8A] hover:bg-blue-900 text-white text-xs font-bold transition">${dict.btnEnterFoundationGuide}</a>
          <a href="${foundation.paperPage}" class="px-3.5 py-2 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition">${dict.btnFoundationRecord}</a>
          <a href="formalization.html" class="px-3.5 py-2 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition">${dict.btnFoundationLean}</a>
          <a href="${foundation.doiUrl}" target="_blank" rel="noopener" class="px-3.5 py-2 rounded bg-slate-100 hover:bg-slate-200 text-[#1E3A8A] mono-num text-xs font-bold transition">${dict.btnZenodoDoi}</a>
        </div>
      </div>
    </div>
  `;

  // 2. BOX 2: Three Derived Mathematical Lenses (from PORTAL_REGISTRY.DERIVED_STREAMS)
  const streams = PORTAL_REGISTRY.DERIVED_STREAMS || [];
  document.getElementById('derived-lenses-grid').innerHTML = streams.map(s => `
    <div class="p-4 rounded-md bg-slate-50 border border-slate-300 flex flex-col justify-between space-y-3" style="border-top: 4px solid ${s.accent};">
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2 py-0.5 rounded text-[11px] font-extrabold text-white" style="background:${s.accent};">${s.code}</span>
          <span class="text-[11px] font-bold text-slate-500 truncate">${s.tag[lang]}</span>
        </div>
        <h3 class="serif-heading text-base sm:text-lg font-bold text-slate-900 leading-snug">${s.title[lang]}</h3>
        <div class="p-2 rounded bg-white border border-slate-200 text-center text-xs overflow-x-auto">
          ${PortalShell.renderLatex(s.formulaTex, false)}
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${s.desc[lang]}</p>
      </div>
      <div class="pt-2 border-t border-slate-200">
        <a href="${s.href}" class="inline-flex items-center font-bold text-xs hover:underline" style="color:${s.accent};">
          ${s.cta[lang]}
        </a>
      </div>
    </div>
  `).join('');

  // 3. BOX 4: Derived Preprints & Extensions
  document.getElementById('derived-preprints-body').innerHTML = derivedList.map(item => {
    const oeisBadges = (item.oeis || []).map(id =>
      `<a href="oeis.html#${id}" class="px-2 py-0.5 rounded bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] border border-blue-200 mono-num text-[11px] font-bold">${id}</a>`
    ).join('');
    return `
      <div class="p-4 rounded-md bg-slate-50 border border-slate-300 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex flex-wrap items-center gap-2">
            ${item.derivedFromAspect ? `<span class="px-2.5 py-0.5 rounded bg-sky-50 text-[#0369A1] border border-sky-300 font-bold text-[11px]">↳ ${item.derivedFromAspect[lang]}</span>` : ''}
            <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold mono-num">DOI: ${item.doi}</span>
            ${item.halStatus ? `<span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">${item.halStatus[lang]}</span>` : ''}
          </div>
          <span class="text-slate-500 font-semibold">${item.dateDisplay[lang]}</span>
        </div>
        <div>
          <h3 class="serif-heading text-lg sm:text-xl font-bold text-slate-900">${item.title[lang]}</h3>
          <p class="text-xs sm:text-sm font-semibold text-[#0284C7] mt-0.5">${item.subtitle[lang]}</p>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${item.abstract[lang]}</p>
        <div class="flex flex-wrap items-center gap-1.5">${oeisBadges}</div>
        <div class="flex flex-wrap items-center gap-2.5 pt-1">
          <a href="${item.guidePage}" class="px-3.5 py-1.5 rounded bg-[#0284C7] hover:bg-sky-700 text-white text-xs font-bold transition">${dict.btnLaunchGuide}</a>
          <a href="${item.paperPage}" class="px-3.5 py-1.5 rounded bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition">${dict.btnPaperBib}</a>
          <a href="${item.doiUrl}" target="_blank" rel="noopener" class="px-3.5 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-[#1E3A8A] mono-num text-xs font-bold transition">${dict.btnZenodoDoi}</a>
        </div>
      </div>
    `;
  }).join('');

  // 4. BOX 5: Thematic Guides Grid & OEIS Pills
  document.getElementById('hub-guides-grid').innerHTML = PORTAL_REGISTRY.GUIDES.map((g, idx) => `
    <div class="p-4 rounded-md bg-slate-50 border border-slate-300 flex flex-col justify-between space-y-3">
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2.5 py-0.5 rounded text-xs font-extrabold ${idx === 0 ? 'bg-[#1E3A8A] text-white' : 'bg-[#0284C7] text-white'}">${g.code}</span>
          <span class="text-[11px] font-bold text-slate-500">${g.pagesCount} ${dict.pagesBadgeWord}</span>
        </div>
        <h3 class="serif-heading text-lg font-bold text-slate-900 leading-snug">${g.title[lang]}</h3>
        <div class="p-2 rounded bg-white border border-slate-200 text-center text-xs overflow-x-auto">
          ${PortalShell.renderLatex(g.badgeTex, false)}
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${g.summary[lang]}</p>
      </div>
      <div class="pt-2 border-t border-slate-200 flex items-center justify-between">
        <span class="mono-num text-[11px] text-slate-500">DOI: ${g.doi}</span>
        <a href="${g.href}" class="px-3 py-1.5 rounded ${idx === 0 ? 'bg-[#1E3A8A] hover:bg-blue-900' : 'bg-[#0284C7] hover:bg-sky-700'} text-white text-xs font-bold transition">
          ${dict.btnEnterGuide}
        </a>
      </div>
    </div>
  `).join('');

  document.getElementById('hub-oeis-pills').innerHTML = PORTAL_REGISTRY.OEIS_SEQUENCES.map(seq => `
    <a href="oeis.html#${seq.id}" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 hover:bg-blue-50 border border-slate-300 hover:border-[#1E3A8A] text-xs transition">
      <span class="mono-num font-bold text-[#1E3A8A]">${seq.id}</span>
      <span class="text-slate-600 text-[11px]">${seq.roleBadge[lang]}</span>
    </a>
  `).join('');

  updateHubInspector();
}

function setHubN(val) {
  document.getElementById('hub-input-n').value = val;
  updateHubInspector();
}

function updateHubInspector() {
  const lang = PortalShell.getLang();
  const dict = HUB_I18N[lang] || HUB_I18N.EN;
  let n = parseInt(document.getElementById('hub-input-n').value, 10);
  if (isNaN(n) || n < 2) n = 2;
  if (n > 2000) n = 2000;

  const geo = decomposeQuadraticFull(n);
  const cd = ZetaMath.centralDivisors(n);
  const disc = ZetaMath.shellDiscrepancy(n);
  const betaVal = ZetaMath.computeBetaExact(n);
  const beta1Val = ZetaMath.computeA381054Exact(n);
  const primeFlag = ZetaMath.isPrimeFast(n);
  const sqFlag = ZetaMath.isSquare(betaVal);
  const j1 = ZetaMath.isqrt(cd.d1);
  const j2 = ZetaMath.isqrt(cd.d2);
  const balShell = ZetaMath.isqrt(ZetaMath.centralDivisors(betaVal * n).d1);

  const primeDepths = [geo.dl, geo.dv, geo.dr].filter(d => d >= 2 && ZetaMath.isPrimeFast(d)).length;

  // Root Banner
  document.getElementById('hub-inspector-root').innerHTML = `
    <div class="flex flex-wrap items-center justify-center gap-2">
      <span class="font-bold text-[#1E3A8A]">${dict.rootBannerPrefix}</span>
      <span class="math-latex font-bold text-slate-900">
        ${PortalShell.renderLatex(`n = ${n} \\in \\mathcal{S}_{${geo.k}} = [${geo.k * geo.k},\\; ${(geo.k + 1) * (geo.k + 1) - 1}], \\quad k = ${geo.k}, \\quad r = ${geo.r}`)}
      </span>
    </div>
  `;

  let statusBadge = '';
  if (primeFlag) {
    statusBadge = `<span class="px-2 py-0.5 rounded bg-rose-100 text-[#BE123C] font-bold text-[11px]">${dict.statusPrime}</span>`;
  } else if (betaVal === 1) {
    statusBadge = `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">${dict.statusBalanced}</span>`;
  } else {
    statusBadge = `<span class="px-2 py-0.5 rounded bg-sky-100 text-[#0369A1] font-bold text-[11px]">${dict.statusCompositeEcc}</span>`;
  }

  document.getElementById('hub-inspector-cards').innerHTML = `
    <!-- Card 1: Lens I (Coordinates & Leaves) -->
    <div class="p-3.5 rounded-md bg-slate-50 border border-slate-300 border-t-4 border-t-[#1E3A8A] space-y-2 text-xs">
      <div class="font-extrabold text-[#1E3A8A] border-b border-slate-200 pb-1.5 flex items-center justify-between">
        <span>${dict.lens1CardTitle}</span>
        <a href="guides/foliations.html#p1" class="text-[11px] text-[#0284C7] hover:underline">Guide I →</a>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblLeafGens}</span>
        <span class="math-latex font-bold">${PortalShell.renderLatex(`(${geo.gl},\\; ${geo.gv},\\; ${geo.gr})`)}</span>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblLeafDepths}</span>
        <span class="math-latex font-bold">${PortalShell.renderLatex(`(${geo.dl},\\; ${geo.dv},\\; ${geo.dr})`)}</span>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblBirthShells}</span>
        <span class="math-latex font-bold">${PortalShell.renderLatex(`(${geo.k0l},\\; ${geo.k0v},\\; ${geo.k0r})`)}</span>
      </div>
    </div>

    <!-- Card 2: Lens II (Foliated Arithmetic & Geodesics) -->
    <div class="p-3.5 rounded-md bg-slate-50 border border-slate-300 border-t-4 border-t-[#059669] space-y-2 text-xs">
      <div class="font-extrabold text-[#059669] border-b border-slate-200 pb-1.5 flex items-center justify-between">
        <span>${dict.lens2CardTitle}</span>
        <a href="guides/foliations.html#p2" class="text-[11px] text-[#1E3A8A] hover:underline">Lab 2D →</a>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblUnitTriad}</span>
        <span class="math-latex font-bold">${PortalShell.renderLatex(`\\{${geo.triad1.join(', ')}\\}`)}</span>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblGeodesicApex}</span>
        <span class="math-latex font-bold">${PortalShell.renderLatex(`\\delta_2(0, ${n}) = ${geo.k}`)}</span>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblLeafPrimality}</span>
        <span class="font-bold ${primeDepths === 3 ? 'text-emerald-700' : 'text-slate-700'}">${primeDepths} / 3 ${dict.primeDepthCount}</span>
      </div>
    </div>

    <!-- Card 3: Lens III (Minimal Balancing & Zeta Set) -->
    <div class="p-3.5 rounded-md bg-slate-50 border border-slate-300 border-t-4 border-t-[#0284C7] space-y-2 text-xs">
      <div class="font-extrabold text-[#0284C7] border-b border-slate-200 pb-1.5 flex items-center justify-between">
        <span>${dict.lens3CardTitle}</span>
        <a href="guides/zeta-hierarchy.html#p1" class="text-[11px] text-[#1E3A8A] hover:underline">Guide II →</a>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblCentralDivs}</span>
        <span class="math-latex font-bold">${PortalShell.renderLatex(`${cd.d1}\\times${cd.d2} \\; (S_{${j1}}\\times S_{${j2}}),\\; C=${disc}`)}</span>
      </div>
      <div class="flex justify-between py-0.5">
        <span class="text-slate-600">${dict.lblMultipliers}</span>
        <span class="math-latex font-bold text-[#1E3A8A]">${PortalShell.renderLatex(`\\beta=${betaVal}\\;[S_{${balShell}}],\\; \\beta_1=${beta1Val}`)}</span>
      </div>
      <div class="flex items-center justify-between gap-1 py-0.5">
        <span class="font-bold ${sqFlag ? 'text-emerald-700' : 'text-slate-600'}">${sqFlag ? dict.inSetYes : dict.inSetNo}</span>
        ${statusBadge}
      </div>
    </div>
  `;
}

window.onPortalLanguageChange = function (lang) {
  renderHubDynamicSections(lang);
};

window.addEventListener('DOMContentLoaded', () => {
  ZetaMath.ensureTables();
  PortalShell.init({
    rootPrefix: '',
    activePillar: 'overview',
    guideId: null,
    showCharLegend: false
  });
});
