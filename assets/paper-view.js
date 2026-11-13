// ============================================================================
// SINGLE-ARTICLE SCHOLARLY RECORD ENHANCER (assets/paper-view.js)
// Preserves static Highwire Press HTML for ScholarBot while enabling EN/FR/AR
// localization, 1-click BibTeX copy, connected OEIS pills & Guide links.
// ============================================================================

const PAPER_VIEW_I18N = {
  EN: {
    bcRoot: 'New Mathematical Concepts',
    bcPubs: 'Publications',
    sidebarHeading: 'SCHOLARLY RECORD',
    navAllPubs: '← All Publications (2)',
    navOtherPaper: 'Companion Paper Record →',
    navGuide: '▶ Interactive Guide Lab',
    navOeis: 'OEIS Sequence Atlas →',
    lblAbstract: 'Abstract',
    lblKeyResults: 'Principal Theorems & Structural Results',
    lblBibtex: 'BibTeX Citation',
    btnCopyBib: 'Copy BibTeX',
    btnDownloadPdf: '⬇ Download Full-Text PDF',
    btnZenodoRecord: 'Zenodo DOI Record ↗',
    btnExploreGuide: '▶ Explore in Interactive Laboratory',
    lblConnectedOeis: 'Connected OEIS Sequences:'
  },
  FR: {
    bcRoot: 'Nouveaux Concepts Mathématiques',
    bcPubs: 'Publications',
    sidebarHeading: 'FICHE BIBLIOGRAPHIQUE',
    navAllPubs: '← Toutes les Publications (2)',
    navOtherPaper: 'Autre Fiche Article →',
    navGuide: '▶ Laboratoire Interactif',
    navOeis: 'Atlas des Suites OEIS →',
    lblAbstract: 'Résumé',
    lblKeyResults: 'Théorèmes Principaux & Résultats Structurels',
    lblBibtex: 'Citation BibTeX',
    btnCopyBib: 'Copier BibTeX',
    btnDownloadPdf: '⬇ Télécharger le PDF Complet',
    btnZenodoRecord: 'Archive DOI Zenodo ↗',
    btnExploreGuide: '▶ Explorer dans le Guide Interactif',
    lblConnectedOeis: 'Suites OEIS Associées :'
  },
  AR: {
    bcRoot: 'مفاهيم رياضية جديدة',
    bcPubs: 'المنشورات',
    sidebarHeading: 'بطاقة التوثيق الأكاديمي',
    navAllPubs: '→ جميع المنشورات (2)',
    navOtherPaper: 'صفحة المقال المرافق ←',
    navGuide: '▶ المختبر التفاعلي',
    navOeis: 'أطلس متتاليات OEIS ←',
    lblAbstract: 'الملخص العلمي',
    lblKeyResults: 'المبرهنات الرئيسية والنتائج البنيوية',
    lblBibtex: 'توثيق BibTeX',
    btnCopyBib: 'نسخ BibTeX',
    btnDownloadPdf: '⬇ تحميل النص الكامل PDF',
    btnZenodoRecord: 'سجل Zenodo DOI ↗',
    btnExploreGuide: '▶ الاستكشاف في الدليل التفاعلي',
    lblConnectedOeis: 'متتاليات OEIS المرتبطة:'
  }
};

const PAPER_HIGHLIGHTS = {
  'baloui-2026-geometry': [
    {
      tex: '\\{n\\} = S_k \\cap V_{g_v} \\cap R_{g_r} \\cap L_{g_l}',
      text: {
        EN: 'Intrinsic m-degree power-shell coordinate frames and three canonical directional leaves (λ ∈ {0, 1/2, 1}).',
        FR: 'Repères intrinsèques en couches de puissances de degré m et trois feuilles directionnelles canoniques.',
        AR: 'الإحداثيات الجوهرية لطبقات القوى من الدرجة m والأوراق الاتجاهية الثلاث القانونية.'
      }
    },
    {
      tex: '(3 \\oplus_2 4) \\cap (4 \\oplus_2 3) = \\{31\\}',
      text: {
        EN: 'Non-commutative multi-directional arithmetic with unique cross-direction additive intersection at prime 31 (Lean 4 verified).',
        FR: 'Arithmétique multi-directionnelle non-commutative avec intersection croisée unique au nombre premier 31 (vérifié sous Lean 4).',
        AR: 'حساب متعدد الاتجاهات غير تبادلي مع تقاطع جمعي متصالب فريد عند العدد الأولي 31 (محقق بـ Lean 4).'
      }
    },
    {
      tex: '\\delta_m(x, y) = \\max(\\Delta k, |\\Delta g|) \\xrightarrow{m \\to 1} |x - y|',
      text: {
        EN: '1-zigzag Chebyshev geodesic routing, double-cone reflection across zero, leaf-local triple FTA, and m = 1 Peano collapse.',
        FR: 'Routage géodésique 1-zigzag de Chebyshev, réflexion sur le double-cône, triple factorisation première et limite de Peano m = 1.',
        AR: 'المسارات الجيوديسية لتشيبيشيف، الانعكاس عبر الأصل على المخروط المزدوج، التفكيك الأولي الثلاثي واختزال بيانو عند m = 1.'
      }
    }
  ],
  'baloui-2026-zeta': [
    {
      tex: '\\beta(n) \\le \\lfloor\\sqrt{n}\\rfloor^2 \\quad (\\text{equality } \\Longleftrightarrow n \\in \\mathbb{P})',
      text: {
        EN: 'Sharp prime ceiling for the minimal balancing multiplier (OEIS A382286) and 4:1 intra-shell spectral gap separating composites from primes.',
        FR: 'Plafond premier exact pour le multiplicateur d’équilibre minimal (OEIS A382286) et fossé spectral intra-couche 4:1.',
        AR: 'السقف الحاد للأعداد الأولية للمضاعف الموازن الأصغر (OEIS A382286) والفجوة الطيفية 4:1 داخل الطبقة التربيعية.'
      }
    },
    {
      tex: '\\sum_{n \\le x} \\beta(n) \\sim \\frac{\\zeta(3)}{2}\\frac{x^2}{\\log x}',
      text: {
        EN: 'Square-Multiplier Set Q₂ (OEIS A401528), binary boundary exception n = 32, and asymptotic governance by Apéry’s constant ζ(3).',
        FR: 'Ensemble à Multiplicateur Carré Q₂ (OEIS A401528), exception binaire n = 32 et loi asymptotique gouvernée par la constante d’Apéry ζ(3).',
        AR: 'مجموعة المضاعفات المربعة Q₂ (OEIS A401528)، الاستثناء الثنائي الحدي n = 32، والقانون التقاربي المحكوم بثابت أبيري ζ(3).'
      }
    },
    {
      tex: '\\mathbb{N}_{2s} \\Longrightarrow \\zeta(2s+1), \\qquad \\mathbb{N}_{2s-1} \\Longrightarrow \\zeta(2s) \\in \\mathbb{Q}\\pi^{2s}',
      text: {
        EN: 'Foliated parity unification of odd and even positive integer values of the Riemann zeta function across r-degree power shells.',
        FR: 'Unification par parité des valeurs impaires et paires de la fonction zêta de Riemann sur les couches de puissances de degré r.',
        AR: 'توحيد القيم الفردية والزوجية لدالة زيتا لريمان عبر طبقات القوى من الدرجة r وفق زوجية التوريق.'
      }
    }
  ]
};

window.PAGE_I18N = PAPER_VIEW_I18N;

function renderPaperRecord() {
  const root = document.getElementById('paper-record-mount');
  if (!root) return;
  const pubId = root.getAttribute('data-pub-id');
  const pub = PORTAL_REGISTRY.PUBLICATIONS.find(p => p.id === pubId);
  if (!pub) return;

  const lang = PortalShell.getLang();
  const dict = PAPER_VIEW_I18N[lang] || PAPER_VIEW_I18N.EN;
  const other = PORTAL_REGISTRY.PUBLICATIONS.find(p => p.id !== pubId);

  const otherLink = document.getElementById('sidebar-other-paper');
  if (otherLink && other) otherLink.href = '../' + other.paperPage;
  const guideLink = document.getElementById('sidebar-guide-link');
  if (guideLink) guideLink.href = '../' + pub.guidePage;

  document.getElementById('paper-subtitle-dyn').textContent = pub.subtitle[lang];
  document.getElementById('paper-date-dyn').textContent = pub.dateDisplay[lang];
  document.getElementById('paper-abstract-dyn').textContent = pub.abstract[lang];

  const halEl = document.getElementById('paper-hal-badge');
  if (halEl) {
    if (pub.halStatus) {
      halEl.textContent = pub.halStatus[lang];
      halEl.classList.remove('hidden');
    } else {
      halEl.classList.add('hidden');
    }
  }

  const highlights = PAPER_HIGHLIGHTS[pubId] || [];
  document.getElementById('paper-highlights-list').innerHTML = highlights.map(h => `
    <div class="p-3.5 rounded bg-slate-50 border border-slate-200 space-y-1.5">
      <div class="math-latex text-center py-1 bg-white rounded border border-slate-200 overflow-x-auto">${PortalShell.renderLatex(h.tex, false)}</div>
      <p class="text-xs text-slate-700 leading-relaxed">${h.text[lang]}</p>
    </div>
  `).join('');

  document.getElementById('paper-oeis-pills').innerHTML = (pub.oeis || []).map(id =>
    `<a href="../oeis.html#${id}" class="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] border border-blue-200 mono-num text-xs font-bold transition">OEIS ${id} →</a>`
  ).join('');
}

function copyCurrentPaperBib(btnEl) {
  const root = document.getElementById('paper-record-mount');
  const pubId = root ? root.getAttribute('data-pub-id') : '';
  const pub = PORTAL_REGISTRY.PUBLICATIONS.find(p => p.id === pubId);
  if (pub) PortalShell.copyText(pub.bibtex, btnEl, '✓ BibTeX Copied!');
}

window.onPortalLanguageChange = function () { renderPaperRecord(); };
window.addEventListener('DOMContentLoaded', () => {
  PortalShell.init({ rootPrefix: '../', activePillar: 'publications', guideId: null, showCharLegend: false });
});
