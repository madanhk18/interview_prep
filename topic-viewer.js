// Supabase-backed topic viewer: groups on the left, topics inside the open group,
// one section at a time, the group's PDF below the content.
// Uses the public anon key only. Row Level Security allows read-only access.
const TV_SUPABASE_URL = 'https://utlsmmplvwsstogboilu.supabase.co';
const TV_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0bHNtbXBsdndzc3RvZ2JvaWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMjIzMzksImV4cCI6MjEwODU5ODMzOX0.nJfs97aNYYXd_cwyM8mIqbg1rvDwJb8DSu7y-J0UfyM';

const _tvCache = {};
let _tvState = null;

function tvEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function tvFetchTopic(slug) {
  if (_tvCache[slug]) return _tvCache[slug];
  const url = `${TV_SUPABASE_URL}/rest/v1/topics?slug=eq.${encodeURIComponent(slug)}` +
    `&select=slug,title,groups(position,title,pdf_url,sections(position,title,blocks))` +
    `&groups.order=position.asc&groups.sections.order=position.asc`;
  const res = await fetch(url, {
    headers: { apikey: TV_SUPABASE_KEY, Authorization: `Bearer ${TV_SUPABASE_KEY}` }
  });
  if (!res.ok) throw new Error(`Supabase ${res.status}`);
  const rows = await res.json();
  if (!rows.length) throw new Error('Topic not found in Supabase');
  _tvCache[slug] = rows[0];
  return rows[0];
}

// Light Java highlighting using the span classes already in styles.css.
function tvHighlightJava(code) {
  const out = [];
  const re = /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*")|(@[A-Za-z]+)|\b(public|private|protected|class|interface|static|void|new|return|this|import|package|extends|implements|final|int|String|boolean|throws|default)\b|\b(\d+)\b/g;
  let last = 0, m;
  while ((m = re.exec(code))) {
    out.push(tvEsc(code.slice(last, m.index)));
    const t = tvEsc(m[0]);
    if (m[1]) out.push(`<span class="cmt">${t}</span>`);
    else if (m[2]) out.push(`<span class="str">${t}</span>`);
    else if (m[3]) out.push(`<span class="fn">${t}</span>`);
    else if (m[4]) out.push(`<span class="kw">${t}</span>`);
    else out.push(`<span class="num">${t}</span>`);
    last = re.lastIndex;
  }
  out.push(tvEsc(code.slice(last)));
  return out.join('');
}

const TV_SQL_KW = /\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|JOIN|INNER|LEFT|RIGHT|FULL|OUTER|ON|AS|AND|OR|NOT|IN|BETWEEN|LIKE|IS|NULL|DISTINCT|COUNT|SUM|AVG|MIN|MAX|CASE|WHEN|THEN|ELSE|END|EXISTS|UNION|ALL|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|ALTER|DROP|ASC|DESC|COALESCE|IFNULL|WITH)\b/gi;
function tvHighlightSql(code) {
  return code.split('\n').map(line => {
    const ci = line.indexOf('--');
    const head = ci >= 0 ? line.slice(0, ci) : line;
    const cmt = ci >= 0 ? `<span class="cmt">${tvEsc(line.slice(ci))}</span>` : '';
    const out = [];
    const re = /('(?:[^'\\]|\\.)*')|(\b\d+(?:\.\d+)?\b)/g;
    let last = 0, m;
    const kw = t => tvEsc(t).replace(TV_SQL_KW, '<span class="kw">$&</span>');
    while ((m = re.exec(head))) {
      out.push(kw(head.slice(last, m.index)));
      out.push(m[1] ? `<span class="str">${tvEsc(m[0])}</span>` : `<span class="num">${tvEsc(m[0])}</span>`);
      last = re.lastIndex;
    }
    out.push(kw(head.slice(last)));
    return out.join('') + cmt;
  }).join('\n');
}

function tvInline(s) {
  return tvEsc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="tv-inline">$1</code>');
}

// Text blocks: blank line = new paragraph, "- x" = bullet, "-> x" stays a plain line.
function tvRenderText(text) {
  const parts = text.split(/\n{2,}/);
  return parts.map(part => {
    const lines = part.split('\n');
    let html = '', list = [];
    const flush = () => { if (list.length) { html += `<ul class="tv-list">${list.join('')}</ul>`; list = []; } };
    lines.forEach(l => {
      const b = l.match(/^\s*-\s+(?!>)(.*)/);
      if (b) list.push(`<li>${tvInline(b[1])}</li>`);
      else { flush(); if (l.trim()) html += `<p class="tv-p">${tvInline(l)}</p>`; }
    });
    flush();
    return html;
  }).join('');
}

function tvRenderBlock(b) {
  if (b.type === 'html') return `<div class="tv-text tv-html">${b.html}</div>`;
  if (b.type === 'text') return `<div class="tv-text">${tvRenderText(b.text)}</div>`;
  if (b.type === 'table') {
    const [head, ...rows] = b.rows;
    return `<div class="tv-table-wrap"><table class="tv-table"><thead><tr>${head.map(c => `<th>${tvInline(c)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${tvInline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  if (b.type === 'code') {
    const body = (b.lang === 'java' || !b.lang) ? tvHighlightJava(b.code)
      : b.lang === 'sql' ? tvHighlightSql(b.code) : tvEsc(b.code);
    return `<div class="code-block tv-code${b.tone ? ' tv-' + b.tone : ''}">
      <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">${tvEsc(b.label || b.lang || 'java')}</span></div>
      <div class="code-body">${body}</div>
    </div>`;
  }
  if (b.type === 'output') {
    const lines = b.text.split('\n').map(l => {
      const m = l.match(/^(.*?)\s*<-\s*red box\s*$/);
      return m ? `<span class="tv-redline">${tvEsc(m[1])}</span>` : tvEsc(l);
    }).join('\n');
    const hasRed = /red box/.test(b.text);
    return `<div class="tv-output"><div class="tv-output-label">${tvEsc(b.label || 'Output')}${hasRed ? ' <span class="tv-redkey">red = boxed in the PDF</span>' : ''}</div><pre>${lines}</pre></div>`;
  }
  return '';
}

function tvLearnedKey(slug) { return 'tv_learned2_' + slug; }
function tvGetLearned(slug) {
  try { return JSON.parse(localStorage.getItem(tvLearnedKey(slug)) || '[]'); } catch (e) { return []; }
}
function tvSaveLearned(slug, list) {
  try { localStorage.setItem(tvLearnedKey(slug), JSON.stringify(list)); } catch (e) {}
}
function tvId(g, s) { return g.position + ':' + s.position; }

// Flat reading order across all groups, used for Prev/Next.
function tvFlat(topic) {
  const flat = [];
  topic.groups.forEach((g, gi) => g.sections.forEach((s, si) => flat.push([gi, si])));
  return flat;
}

function tvRender(keepScroll) {
  const st = _tvState;
  const { topic, gi, si } = st;
  const group = topic.groups[gi];
  const sec = group.sections[si];
  const learned = tvGetLearned(topic.slug);
  const flat = tvFlat(topic);
  const at = flat.findIndex(p => p[0] === gi && p[1] === si);
  const isLearned = learned.includes(tvId(group, sec));
  const total = flat.length;
  const doneCount = topic.groups.reduce((n, g) => n + g.sections.filter(s => learned.includes(tvId(g, s))).length, 0);

  const nav = topic.groups.map((g, i) => {
    const open = st.expanded.has(i);
    const current = i === gi;
    const multi = g.sections.length > 1;
    const gDone = g.sections.filter(s => learned.includes(tvId(g, s))).length;
    const head = `<button class="tv-group${open ? ' open' : ''}${current ? ' current' : ''}" onclick="tvOpenGroup(${i})">
        <span class="tv-group-num">${i + 1}</span>
        <span class="tv-group-title">${tvEsc(g.title)}</span>
        ${multi ? `<span class="tv-group-count">${gDone}/${g.sections.length}</span><span class="tv-chev">›</span>` : (gDone ? '<span class="tv-nav-check" style="display:inline">✓</span>' : '')}
      </button>`;
    const subs = (multi && open) ? `<div class="tv-subs">${g.sections.map((s, j) => `
        <button class="tv-nav-item${j === si ? ' active' : ''}${learned.includes(tvId(g, s)) ? ' done' : ''}" onclick="tvGo(${i},${j})">
          <span class="tv-nav-num">${j + 1}</span><span class="tv-nav-title">${tvEsc(s.title)}</span><span class="tv-nav-check">✓</span>
        </button>`).join('')}</div>` : '';
    return head + subs;
  }).join('');

  const crumbs = group.sections.length > 1
    ? `<span class="tv-step">${tvEsc(group.title)} · Topic ${si + 1} of ${group.sections.length}</span>`
    : `<span class="tv-step">Section ${gi + 1} of ${topic.groups.length}</span>`;

  const prev = at > 0 ? flat[at - 1] : null;
  const next = at < total - 1 ? flat[at + 1] : null;

  const pdf = group.pdf_url
    ? `<section class="tv-pdfbox">
         <button class="tv-pdf-toggle${st.pdfOpen ? ' open' : ''}" onclick="tvTogglePdf()">
           <span class="tv-chev">›</span>
           <span>Original PDF notes <em>${tvEsc(group.title)}</em></span>
           <span class="tv-pdf-action">${st.pdfOpen ? 'Hide' : 'Show'}</span>
         </button>
         ${st.pdfOpen ? `<iframe class="tv-pdf" src="${tvEsc(group.pdf_url)}" allow="autoplay"></iframe>
         <p class="tv-hint">If the PDF doesn't load, set the Drive file to "Anyone with the link".</p>` : ''}
       </section>`
    : '';

  st.el.innerHTML = `
    <div class="tv">
      <aside class="tv-nav">
        <div class="tv-nav-head">${tvEsc(topic.title)}<span class="tv-progress">${doneCount}/${total} learned</span></div>
        <div class="tv-nav-list">${nav}</div>
      </aside>
      <section class="tv-main">
        <div class="tv-main-head">${crumbs}<h2>${tvEsc(sec.title)}</h2></div>
        ${sec.blocks.map(tvRenderBlock).join('')}
        <div class="tv-footer">
          <button class="tv-btn" ${prev ? `onclick="tvGo(${prev[0]},${prev[1]})"` : 'disabled'}>← Prev</button>
          <button class="tv-btn tv-learn${isLearned ? ' on' : ''}" onclick="tvToggleLearned()">${isLearned ? '✓ Learned' : 'Mark as learned'}</button>
          <button class="tv-btn tv-btn-primary" ${next ? `onclick="tvGo(${next[0]},${next[1]})"` : 'disabled'}>Next →</button>
        </div>
        ${pdf}
      </section>
    </div>`;

  const active = st.el.querySelector('.tv-nav-item.active') || st.el.querySelector('.tv-group.open');
  if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  if (typeof enhanceCodeCopyButtons === 'function') enhanceCodeCopyButtons();
  const overlay = document.getElementById('fullscreenOverlay');
  if (overlay && !keepScroll) overlay.scrollTop = 0;
}

function tvGo(g, s) {
  const st = _tvState;
  if (!st || !st.topic.groups[g] || !st.topic.groups[g].sections[s]) return;
  st.gi = g; st.si = s;
  st.expanded.add(g);
  try { localStorage.setItem('tv_pos2_' + st.topic.slug, g + ':' + s); } catch (e) {}
  tvRender();
}

function tvTogglePdf() {
  _tvState.pdfOpen = !_tvState.pdfOpen;
  const y = document.getElementById('fullscreenOverlay').scrollTop;
  tvRender(true);
  document.getElementById('fullscreenOverlay').scrollTop = y;
}

// Header click: expand or collapse the group's topic list.
// Opening a group you are not reading also jumps to its first topic.
function tvOpenGroup(g) {
  const st = _tvState;
  const group = st.topic.groups[g];
  if (group.sections.length < 2) { tvGo(g, 0); return; }
  if (st.expanded.has(g)) {
    st.expanded.delete(g);
    tvRender(true);
  } else {
    st.expanded.add(g);
    if (st.gi !== g) tvGo(g, 0); else tvRender(true);
  }
}

function tvToggleLearned() {
  const st = _tvState;
  const g = st.topic.groups[st.gi];
  const id = tvId(g, g.sections[st.si]);
  let list = tvGetLearned(st.topic.slug);
  list = list.includes(id) ? list.filter(p => p !== id) : list.concat(id);
  tvSaveLearned(st.topic.slug, list);
  tvRender();
}

document.addEventListener('keydown', e => {
  if (!_tvState || !document.body.contains(_tvState.el) || !_tvState.el.querySelector('.tv')) return;
  if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) return;
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const flat = tvFlat(_tvState.topic);
  const at = flat.findIndex(p => p[0] === _tvState.gi && p[1] === _tvState.si);
  const to = flat[at + (e.key === 'ArrowRight' ? 1 : -1)];
  if (to) tvGo(to[0], to[1]);
});

async function renderRemoteTopic(topic, contentEl) {
  contentEl.innerHTML = '<div class="tv-msg">Loading…</div>';
  try {
    const data = await tvFetchTopic(topic.remoteSlug);
    let gi = 0, si = 0;
    try {
      const p = (localStorage.getItem('tv_pos2_' + data.slug) || '0:0').split(':').map(n => parseInt(n, 10) || 0);
      if (data.groups[p[0]] && data.groups[p[0]].sections[p[1]]) { gi = p[0]; si = p[1]; }
    } catch (e) {}
    _tvState = { topic: data, gi, si, pdfOpen: false, expanded: new Set([gi]), el: contentEl };
    tvRender();
  } catch (err) {
    contentEl.innerHTML = `<div class="tv-msg">Could not load this topic (${tvEsc(err.message)}).
      <br><button class="tv-btn" onclick="renderRemoteTopic(_fsCurrentTopic, document.getElementById('fsContent'))">Retry</button></div>`;
  }
}
