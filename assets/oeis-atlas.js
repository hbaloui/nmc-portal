// ============================================================================
// PILLAR 3: OEIS SEQUENCE ATLAS & LIVE PLOTTER (assets/oeis-atlas.js)
// ============================================================================

const OEIS_PAGE_I18N = {
  EN: {
    bcRoot: 'New Mathematical Concepts',
    oeisPillarBadge: 'Pillar 3: OEIS Sequence Atlas & Calculators',
    btnGotoZetaGuide: '← Guide II: Balancing Multiplier & Zeta (ζ)',
    btnGotoPubs: 'Publications →',
    sidebarOeisHeading: 'INDEXED OEIS SEQUENCES',
    lblTermCount: 'Terms Computed:',
    btnCompare2to1: '⇄ Compare 2:1 Cumulative Ratio (A383115 / A382306)',
    btnCopyTerms: 'Copy Terms',
    lblComputedData: 'Exact Computed Terms (Click any term to highlight on plot)',
    evalBoxTitle: 'Synchronized Cross-Sequence Evaluator (n & Quadratic Shell S_k)',
    lblEvalInput: 'Evaluate Integer n (2 – 2500):',
    dirBoxTitle: 'Complete OEIS Sequence Registry & Mathematical Definitions',
    fltAll: 'All (5)',
    fltMult: 'Multipliers',
    fltSets: 'Sets & Shells',
    btnPlotHere: '▶ Plot in Lab ↑',
    ratioTitle: 'Cumulative Shell Ratio: (∑_{j≤k} A383115(j)) / (∑_{j≤k} A382306(j)) → 2',
    memberYes: '✓ Member of Set',
    memberNo: '∉ Outside Set',
    shellForN: 'for shell k ='
  },
  FR: {
    bcRoot: 'Nouveaux Concepts Mathématiques',
    oeisPillarBadge: 'Pilier 3 : Atlas des Suites OEIS & Calculateurs',
    btnGotoZetaGuide: '← Guide II : Multiplicateur d’Équilibre & Zeta (ζ)',
    btnGotoPubs: 'Publications →',
    sidebarOeisHeading: 'SUITES OEIS INDEXÉES',
    lblTermCount: 'Termes Calculés :',
    btnCompare2to1: '⇄ Comparer le Rapport Cumulé 2:1 (A383115 / A382306)',
    btnCopyTerms: 'Copier les Termes',
    lblComputedData: 'Termes Exacts Calculés (Cliquez sur un terme pour l’isoler)',
    evalBoxTitle: 'Évaluateur Synchronisé Multi-Suites (n & Couche Quadratique S_k)',
    lblEvalInput: 'Évaluer l’entier n (2 – 2500) :',
    dirBoxTitle: 'Registre Complet des Suites OEIS & Définitions Mathématiques',
    fltAll: 'Toutes (5)',
    fltMult: 'Multiplicateurs',
    fltSets: 'Ensembles & Couches',
    btnPlotHere: '▶ Tracer ci-dessus ↑',
    ratioTitle: 'Rapport Cumulé par Couche : (∑_{j≤k} A383115(j)) / (∑_{j≤k} A382306(j)) → 2',
    memberYes: '✓ Membre de l’Ensemble',
    memberNo: '∉ Hors de l’Ensemble',
    shellForN: 'pour la couche k ='
  },
  AR: {
    bcRoot: 'مفاهيم رياضية جديدة',
    oeisPillarBadge: 'الركيزة 3: أطلس متتاليات OEIS والحواسيب التفاعلية',
    btnGotoZetaGuide: '→ الدليل II: المضاعف الموازن وهرم زيتا (ζ)',
    btnGotoPubs: 'المنشورات ←',
    sidebarOeisHeading: 'متتاليات OEIS المفهرسة',
    lblTermCount: 'عدد الحدود المحسوبة:',
    btnCompare2to1: '⇄ مقارنة النسبة التراكمية 2:1 (A383115 / A382306)',
    btnCopyTerms: 'نسخ الحدود',
    lblComputedData: 'الحدود المحسوبة بدقة (انقر على أي حد لإبرازه على الرسم)',
    evalBoxTitle: 'المقيّم المتزامن عبر المتتاليات الخمس (للعدد n والطبقة S_k)',
    lblEvalInput: 'فحص العدد الصحيح n (2 – 2500):',
    dirBoxTitle: 'السجل الكامل لمتتاليات OEIS والتعاريف الرياضية',
    fltAll: 'الكل (5)',
    fltMult: 'المضاعفات',
    fltSets: 'المجموعات والطبقات',
    btnPlotHere: '▶ رسم في المختبر ↑',
    ratioTitle: 'النسبة التراكمية للطبقات: (∑_{j≤k} A383115(j)) / (∑_{j≤k} A382306(j)) → 2',
    memberYes: '✓ ينتمي للمجموعة',
    memberNo: '∉ خارج المجموعة',
    shellForN: 'للطبقة k ='
  }
};

window.PAGE_I18N = OEIS_PAGE_I18N;
let activeSeqId = 'A382286', termCount = 45, selectedTermIdx = 16, ratioMode = false, activeFilter = 'ALL', plotHits = [], currentComputedTerms = [];

function getSeqObj(id) { return PORTAL_REGISTRY.OEIS_SEQUENCES.find(s => s.id === id) || PORTAL_REGISTRY.OEIS_SEQUENCES[0]; }

function selectOeisSequence(seqId, closeMobile = false) {
  ratioMode = false; activeSeqId = seqId; selectedTermIdx = 0;
  try { history.replaceState(null, '', '#' + seqId); } catch (e) {}
  const slider = document.getElementById('oeis-slider-count');
  if (seqId === 'A382306' || seqId === 'A383115') {
    slider.max = 48;
    if (termCount > 48) { termCount = 36; slider.value = 36; }
  } else slider.max = 75;
  if (closeMobile && window.innerWidth < 1024) document.getElementById('guide-sidebar').classList.add('hidden');
  renderOeisAll();
}

function onOeisCountSlider() {
  ratioMode = false;
  termCount = parseInt(document.getElementById('oeis-slider-count').value, 10);
  if (selectedTermIdx >= termCount) selectedTermIdx = termCount - 1;
  renderOeisAll();
}

function toggleOeisRatioMode() { ratioMode = !ratioMode; renderOeisPlotter(); }
function copyActiveOeisTerms(btnEl) { PortalShell.copyText(currentComputedTerms.map(t => t.value).join(', '), btnEl, '✓ Copied!'); }

function renderOeisNavigation(lang) {
  const seqs = PORTAL_REGISTRY.OEIS_SEQUENCES;
  document.getElementById('oeis-sidebar-list').innerHTML = seqs.map(s => {
    const isAct = s.id === activeSeqId && !ratioMode;
    return `<button onclick="selectOeisSequence('${s.id}', true)" class="nav-page-btn ${isAct ? 'nav-page-active' : ''}"><span class="truncate"><strong class="mono-num">${s.id}</strong> — ${s.roleBadge[lang]}</span><span class="text-xs opacity-75">▸</span></button>`;
  }).join('');
  document.getElementById('oeis-mobile-pills').innerHTML = seqs.map(s => {
    const isAct = s.id === activeSeqId && !ratioMode;
    return `<button onclick="selectOeisSequence('${s.id}')" class="px-2.5 py-1 rounded-full whitespace-nowrap ${isAct ? 'bg-[#1E3A8A] text-white' : 'bg-white border border-slate-300 text-slate-700'}">${s.id}</button>`;
  }).join('');
}

function renderOeisPlotter() {
  const lang = PortalShell.getLang(), dict = OEIS_PAGE_I18N[lang] || OEIS_PAGE_I18N.EN, seq = getSeqObj(activeSeqId);
  document.getElementById('oeis-breadcrumb-seq').textContent = seq.id;
  document.getElementById('oeis-active-id').textContent = seq.id;
  document.getElementById('oeis-active-title').textContent = seq.name[lang];
  const ext = document.getElementById('oeis-external-link');
  ext.href = seq.url; ext.textContent = `oeis.org/${seq.id} ↗`;
  document.getElementById('oeis-active-desc').textContent = seq.desc[lang];
  document.getElementById('oeis-active-formula').innerHTML = PortalShell.renderLatex(seq.formulaTex, false);
  document.getElementById('oeis-count-val').textContent = termCount;
  document.getElementById('btn-ratio-mode').className = ratioMode
    ? 'px-3 py-1.5 rounded bg-[#059669] text-white text-xs font-bold transition'
    : 'px-3 py-1.5 rounded border border-emerald-600 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition';

  currentComputedTerms = ZetaMath.generateSequenceTerms(seq.id, termCount);
  if (selectedTermIdx >= currentComputedTerms.length) selectedTermIdx = 0;

  document.getElementById('oeis-terms-strip').innerHTML = currentComputedTerms.map((item, idx) => {
    const sel = !ratioMode && idx === selectedTermIdx;
    return `<button onclick="selectedTermIdx=${idx}; ratioMode=false; renderOeisPlotter();" class="px-2 py-0.5 rounded mono-num text-xs border transition ${sel ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] font-bold' : 'bg-white hover:bg-blue-50 text-slate-800 border-slate-300'}"><span class="text-[10px] opacity-65">${seq.indexSymbol}=${item.index}:</span> ${item.value}</button>`;
  }).join('');

  const canvas = document.getElementById('oeisPlotCanvas');
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio; canvas.height = rect.height * window.devicePixelRatio;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  const w = rect.width, h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const padL = 48, padR = 18, padT = 26, padB = 30, plotW = w - padL - padR, plotH = h - padT - padB;
  plotHits = [];

  if (ratioMode) {
    const balTerms = ZetaMath.generateSequenceTerms('A382306', 48), eccTerms = ZetaMath.generateSequenceTerms('A383115', 48);
    let cumB = 0, cumE = 0; const rPts = [];
    for (let i = 0; i < balTerms.length; i++) {
      cumB += balTerms[i].value; cumE += eccTerms[i].value;
      if (i >= 1) rPts.push({ k: i + 1, ratio: cumE / cumB, cumE, cumB });
    }
    const yMin = 0.5, yMax = 2.3;
    const xOf = (idx) => padL + (idx / Math.max(1, rPts.length - 1)) * plotW;
    const yOf = (v) => padT + plotH * (1 - (v - yMin) / (yMax - yMin));
    const y2 = yOf(2.0);
    ctx.save(); ctx.setLineDash([6, 4]); ctx.strokeStyle = '#059669'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(padL, y2); ctx.lineTo(w - padR, y2); ctx.stroke(); ctx.restore();
    ctx.fillStyle = '#059669'; ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText('2.0 (Asymptotic 2:1 Ratio)', padL + 8, y2 - 6);
    ctx.strokeStyle = '#1E3A8A'; ctx.lineWidth = 2.4; ctx.beginPath();
    rPts.forEach((p, idx) => { const px = xOf(idx), py = yOf(p.ratio); if (idx === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); });
    ctx.stroke();
    const last = rPts[rPts.length - 1];
    document.getElementById('oeis-point-readout').textContent = `${dict.ratioTitle} | k=1..48: ∑A383115 = ${last.cumE}, ∑A382306 = ${last.cumB}, Ratio = ${last.ratio.toFixed(4)}`;
    return;
  }

  const maxVal = Math.max(1, ...currentComputedTerms.map(t => t.value));
  const nPts = currentComputedTerms.length, slotW = plotW / nPts, barW = Math.max(3, Math.min(16, slotW * 0.62));
  const yOf = (v) => padT + plotH * (1 - v / maxVal);

  ctx.strokeStyle = '#E2E8F0'; ctx.lineWidth = 1;
  [0, 0.5, 1].forEach(frac => {
    const gy = padT + plotH * (1 - frac);
    ctx.beginPath(); ctx.moveTo(padL, gy); ctx.lineTo(w - padR, gy); ctx.stroke();
    ctx.fillStyle = '#64748B'; ctx.font = '10px "JetBrains Mono", monospace'; ctx.textAlign = 'right';
    ctx.fillText(String(Math.round(maxVal * frac)), padL - 6, gy + 3);
  });

  currentComputedTerms.forEach((item, idx) => {
    const cx = padL + (idx + 0.5) * slotW, cy = yOf(item.value), isSel = idx === selectedTermIdx;
    const isPrimeHighlight = seq.id === 'A382286' && ZetaMath.isPrimeFast(item.index);
    ctx.fillStyle = isSel ? '#1E3A8A' : (isPrimeHighlight ? '#E11D48' : '#0284C7');
    const bh = Math.max(2.5, padT + plotH - cy);
    ctx.fillRect(cx - barW / 2, padT + plotH - bh, barW, bh);
    ctx.beginPath(); ctx.arc(cx, cy, isSel ? 4.5 : 2.6, 0, Math.PI * 2); ctx.fill();
    if (idx % Math.max(1, Math.floor(nPts / 10)) === 0 || isSel) {
      ctx.fillStyle = isSel ? '#1E3A8A' : '#475569';
      ctx.font = `${isSel ? 'bold ' : ''}10px "JetBrains Mono", monospace`; ctx.textAlign = 'center';
      ctx.fillText(String(item.index), cx, h - 10);
    }
    plotHits.push({ idx, x1: cx - slotW / 2, x2: cx + slotW / 2 });
  });

  const selItem = currentComputedTerms[selectedTermIdx];
  if (selItem) document.getElementById('oeis-point-readout').textContent = `${seq.id}(${selItem.index}) = ${selItem.value}`;
}

function setEvalN(n) { document.getElementById('oeis-eval-n').value = n; renderCrossEvaluator(); }

function renderCrossEvaluator() {
  const lang = PortalShell.getLang(), dict = OEIS_PAGE_I18N[lang] || OEIS_PAGE_I18N.EN;
  let n = parseInt(document.getElementById('oeis-eval-n').value, 10);
  if (isNaN(n) || n < 2) n = 2; if (n > 2500) n = 2500;
  const k = ZetaMath.isqrt(n), v2286 = ZetaMath.computeBetaExact(n), v1054 = ZetaMath.computeA381054Exact(n), in401528 = ZetaMath.isSquare(v2286);
  let balK = 0, ecc1K = 0;
  for (let m = k * k; m <= k * k + 2 * k; m++) {
    const d = ZetaMath.shellDiscrepancy(m);
    if (d === 0) balK++; else if (d === 1) ecc1K++;
  }
  const cards = [
    { id: 'A382286', label: `β(${n})`, val: v2286, sub: ZetaMath.isPrimeFast(n) ? `= k² (${k}²)` : `C(${v2286}·${n}) = 0` },
    { id: 'A401528', label: `n = ${n}`, val: in401528 ? '∈ Q₂' : '∉ Q₂', sub: in401528 ? dict.memberYes : dict.memberNo },
    { id: 'A381054', label: `β₁(${n})`, val: v1054, sub: `C(${v1054}·${n}) = 1` },
    { id: 'A382306', label: `a(${k})`, val: balK, sub: `${dict.shellForN} ${k}` },
    { id: 'A383115', label: `b(${k})`, val: ecc1K, sub: `${dict.shellForN} ${k}` }
  ];
  document.getElementById('oeis-eval-grid').innerHTML = cards.map(c => `
    <div onclick="selectOeisSequence('${c.id}'); window.scrollTo({top:0, behavior:'smooth'});" class="p-3 rounded bg-slate-50 hover:bg-blue-50/70 border border-slate-300 cursor-pointer transition space-y-1">
      <div class="flex items-center justify-between"><span class="mono-num font-extrabold text-[#1E3A8A]">${c.id}</span><span class="mono-num text-[11px] text-slate-500">${c.label}</span></div>
      <div class="mono-num text-base font-extrabold text-slate-900">${c.val}</div>
      <div class="text-[11px] text-slate-600">${c.sub}</div>
    </div>`).join('');
}

function setOeisFilter(flt) {
  activeFilter = flt;
  ['ALL', 'MULT', 'SETS'].forEach(k => {
    const btn = document.getElementById(`oeis-flt-${k}`);
    if (btn) btn.className = k === flt ? 'px-2 py-0.5 rounded bg-[#1E3A8A] text-white font-bold' : 'px-2 py-0.5 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold';
  });
  renderOeisDirectory();
}

function renderOeisDirectory() {
  const lang = PortalShell.getLang(), dict = OEIS_PAGE_I18N[lang] || OEIS_PAGE_I18N.EN;
  const list = PORTAL_REGISTRY.OEIS_SEQUENCES.filter(s => {
    if (activeFilter === 'MULT') return s.id === 'A382286' || s.id === 'A381054';
    if (activeFilter === 'SETS') return s.id === 'A401528' || s.id === 'A382306' || s.id === 'A383115';
    return true;
  });
  document.getElementById('oeis-directory-cards').innerHTML = list.map(s => `
    <div class="p-4 rounded-md bg-slate-50 border border-slate-300 flex flex-col justify-between space-y-3">
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-2"><span class="px-2.5 py-0.5 rounded bg-[#1E3A8A] text-white mono-num text-xs font-extrabold">${s.id}</span><span class="text-[11px] font-bold text-[#0284C7]">${s.roleBadge[lang]}</span></div>
        <h3 class="serif-heading text-lg font-bold text-slate-900">${s.name[lang]}</h3>
        <div class="p-2 rounded bg-white border border-slate-200 text-center text-xs overflow-x-auto">${PortalShell.renderLatex(s.formulaTex, false)}</div>
        <p class="text-xs text-slate-600 leading-relaxed">${s.desc[lang]}</p>
        <div class="p-2 rounded bg-white border border-slate-200 mono-num text-[11px] text-slate-700 truncate">${s.firstTerms.join(', ')}, ...</div>
      </div>
      <div class="pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
        <button onclick="selectOeisSequence('${s.id}'); window.scrollTo({top:0, behavior:'smooth'});" class="px-3 py-1.5 rounded bg-[#1E3A8A] hover:bg-blue-900 text-white text-xs font-bold transition">${dict.btnPlotHere}</button>
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 mono-num text-xs font-bold transition">oeis.org/${s.id} ↗</a>
      </div>
    </div>`).join('');
}

function renderOeisAll() { renderOeisNavigation(PortalShell.getLang()); renderOeisPlotter(); renderCrossEvaluator(); renderOeisDirectory(); }
window.onPortalLanguageChange = function () { renderOeisAll(); };
window.addEventListener('resize', () => { renderOeisPlotter(); });
window.addEventListener('DOMContentLoaded', () => {
  ZetaMath.ensureTables();
  const plotCanvas = document.getElementById('oeisPlotCanvas');
  if (plotCanvas) {
    plotCanvas.addEventListener('click', (ev) => {
      if (ratioMode) return;
      const r = plotCanvas.getBoundingClientRect(), x = ev.clientX - r.left;
      const hit = plotHits.find(h => x >= h.x1 && x <= h.x2);
      if (hit) { selectedTermIdx = hit.idx; renderOeisPlotter(); }
    });
  }
  const hashId = (window.location.hash || '').replace('#', '').trim().toUpperCase();
  if (PORTAL_REGISTRY.OEIS_SEQUENCES.some(s => s.id === hashId)) activeSeqId = hashId;
  PortalShell.init({ rootPrefix: '', activePillar: 'oeis', guideId: null, showCharLegend: false });
});
