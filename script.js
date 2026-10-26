const CATEGORIES = {
  backend:         { label:'Backend',          color:'#f59e0b' },
  devops:          { label:'DevOps',           color:'#0ea5e9' },
  database:        { label:'Database',         color:'#10b981' },
  'cs-fundamentals':{ label:'CS Fundamentals', color:'#ef4444' },
  frameworks:      { label:'Frameworks',       color:'#22c55e' },
};

const TOPICS = [
  // New topics kept up front
  {id:'spring-boot',name:'Spring Boot',icon:'',color:'#22c55e',gradient:'',category:'frameworks',hasContent:true,isNew:true,remoteSlug:'spring-boot'},

  {id:'jdbc',name:'JDBC',icon:'️',color:'#6366f1',gradient:'',category:'backend',hasContent:true,remoteSlug:'jdbc'},
  {id:'docker',name:'Docker',icon:'',color:'#0ea5e9',gradient:'',category:'devops',hasContent:true,remoteSlug:'docker'},
  {id:'git',name:'Git & GitHub',icon:'',color:'#f97316',gradient:'',category:'devops',hasContent:true,remoteSlug:'git'},
  {id:'mysql',name:'MySQL',icon:'',color:'#10b981',gradient:'',category:'database',hasContent:true,remoteSlug:'mysql'},
  {id:'dbms',name:'DBMS Basics',icon:'',color:'#8b5cf6',gradient:'',category:'database',hasContent:true,remoteSlug:'dbms'},
  {id:'computer-networks',name:'Computer Networks',icon:'',color:'#06b6d4',gradient:'',category:'cs-fundamentals',hasContent:true,remoteSlug:'computer-networks'},
  {id:'operating-systems',name:'Operating Systems',icon:'️',color:'#ef4444',gradient:'',category:'cs-fundamentals',hasContent:true,remoteSlug:'operating-systems'},
];

let currentFilter = 'all';
let _hasMoreBelow = false;

function toggleAcc(id) {
  const header = document.querySelector(`#acc-${id} .accordion-header`);
  const body = document.getElementById(`body-${id}`);
  if (!header || !body) return;
  const isOpen = body.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

function getContent() { return ''; }

const TOPIC_ICONS = {
  'spring-boot':        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v8"/><circle cx="12" cy="12" r="3"/></svg>`,
  'docker':             `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="8" width="3" height="3" rx="0.5"/><rect x="6" y="8" width="3" height="3" rx="0.5"/><rect x="10" y="8" width="3" height="3" rx="0.5"/><rect x="6" y="4" width="3" height="3" rx="0.5"/><rect x="10" y="4" width="3" height="3" rx="0.5"/><path d="M2 14c0 2 1.5 3 4 3h10c3 0 5-1.5 5-4 0-1-.5-2-1.5-2.5C19 9 18 8 16 8h-3"/><path d="M20 11.5c1-.2 2 .3 2 1.5"/></svg>`,
  'git':                `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v6M9 6h6"/><path d="M15 6c0 6-9 9-9 9"/></svg>`,
  'mysql':              `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>`,
  'dbms':               `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>`,
  'computer-networks':  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="18" width="6" height="4" rx="1"/><rect x="16" y="18" width="6" height="4" rx="1"/><line x1="12" y1="6" x2="12" y2="13"/><line x1="12" y1="13" x2="5" y2="18"/><line x1="12" y1="13" x2="19" y2="18"/></svg>`,
  'operating-systems':  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><line x1="2" y1="7" x2="22" y2="7"/></svg>`,
  'jdbc':               `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7"/><path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/></svg>`,
};

/* Per-topic accent colors — only 5% saturation, just a tint */
const TOPIC_COLORS = {
};

function getAccent(id) {
  if (TOPIC_COLORS[id]) return TOPIC_COLORS[id];
  const topic = TOPICS.find(t => t.id === id);
  if (topic && topic.color) {
    const hex = topic.color.replace('#','');
    const r = parseInt(hex.substring(0,2),16), g = parseInt(hex.substring(2,4),16), b = parseInt(hex.substring(4,6),16);
    return { color: topic.color, glow: `rgba(${r},${g},${b},0.20)` };
  }
  if (topic && CATEGORIES[topic.category]) {
    const catColor = CATEGORIES[topic.category].color;
    const hex = catColor.replace('#','');
    const r = parseInt(hex.substring(0,2),16), g = parseInt(hex.substring(2,4),16), b = parseInt(hex.substring(4,6),16);
    return { color: catColor, glow: `rgba(${r},${g},${b},0.20)` };
  }
  return TOPIC_COLORS['default'];
}

function renderCard(topic) {
  const cat = CATEGORIES[topic.category];
  const svgIcon = TOPIC_ICONS[topic.id];

  return `
  <div class="card" id="card-${topic.id}" data-category="${topic.category}" data-name="${topic.name.toLowerCase()}"
    style="cursor:pointer;position:relative" onclick="toggleExpand('${topic.id}')" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleExpand('${topic.id}')}">
    ${topic.isNew ? `<span class="new-ribbon">New</span>` : ''}
    <div style="padding:18px 20px 16px">
      <!-- Top row -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
        <div class="icon-box">${svgIcon}</div>
        <div style="min-width:0">
          <h3 style="font-size:15px;font-weight:700;color:var(--nb-text);margin-bottom:4px;line-height:1.3">${topic.name}</h3>
          <span class="cat-badge">${cat.label}</span>
        </div>
      </div>
    </div>
    <div class="card-divider"></div>
    <!-- Status row -->
    <div class="card-status-row">
      ${topic.hasContent
        ? `<span class="status-pill status-pill-done"><span class="status-pill-dot"></span>Has content</span>`
        : `<span class="status-pill status-pill-wip"><span class="status-pill-dot"></span>In progress</span>`}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--nb-text2)"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
    </div>
  </div>`;
}

function toggleExpand(id) {
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) return;
  const cardEl = document.getElementById('card-' + id);
  if (cardEl && cardEl.blur) cardEl.blur();
  openFullscreen(topic);
}

// Renders a topic's content into the already-open fullscreen overlay,
// without touching browser history. Shared by openFullscreen() and the
// popstate handler (when stepping back to a previously-viewed topic).
function renderFullscreenTopic(topic) {
  const overlay = document.getElementById('fullscreenOverlay');
  const titleEl = document.getElementById('fsTopicTitle');
  const contentEl = document.getElementById('fsContent');

  titleEl.innerHTML = `<div style="font-size:15px;font-weight:700;color:var(--text)">${topic.name}</div>`;

  contentEl.innerHTML = '<div style="padding:40px 0;text-align:center;color:var(--text3);font-size:13px">Loading…</div>';
  overlay.classList.remove('closing');
  overlay.classList.add('active');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  syncLoadMoreVisibility();

  contentEl.classList.add('fs-wide');
  renderRemoteTopic(topic, contentEl);
}

// Tracks whether we currently own a pushed history entry for the overlay
let _fsHistoryPushed = false;
// Stack of topics visited while the overlay stays open (e.g. via an
// "Answer from:" link, a bookmark, or a search result clicked from inside
// an already-open topic). Lets the Back button step back one topic at a
// time instead of jumping straight to the home page.
let _fsStack = [];
// The topic currently shown in the overlay, if any.
let _fsCurrentTopic = null;

function openFullscreen(topic) {
  const overlay = document.getElementById('fullscreenOverlay');
  const wasActive = overlay.classList.contains('active') && !overlay.classList.contains('closing');

  if (wasActive && _fsCurrentTopic && _fsCurrentTopic.id !== topic.id) {
    // Navigating to a different topic while the overlay is already open —
    // remember where we came from and push a new history entry so Back
    // returns here first, instead of closing straight to the home page.
    _fsStack.push(_fsCurrentTopic);
    history.pushState({ fsOverlay: true, nested: true }, '', location.href);
    _fsHistoryPushed = true;
  } else if (!wasActive) {
    // Fresh open from the home page — start a clean navigation stack and
    // push a single history entry so Back closes the overlay.
    _fsStack = [];
    if (!_fsHistoryPushed) {
      history.pushState({ fsOverlay: true }, '', location.href);
      _fsHistoryPushed = true;
    }
  }
  // If the same topic is reopened while already active, do nothing extra.

  _fsCurrentTopic = topic;
  renderFullscreenTopic(topic);
}

// Public close function — used by the "Back to Topics" button, Escape key,
// and anywhere else in the UI. If we pushed a history entry when opening,
// go back through it (this fires popstate, which decides whether to step
// back to a previous topic or actually close the overlay). Otherwise
// close directly.
function closeFullscreen() {
  if (_fsHistoryPushed) {
    history.back();
  } else {
    doCloseFullscreen();
  }
}

// Does the actual closing animation/cleanup. Called either directly
// (no history entry was pushed) or from the popstate handler (when the
// user pressed the phone/browser back button and the nested stack, if
// any, is already empty).
function doCloseFullscreen() {
  const overlay = document.getElementById('fullscreenOverlay');
  overlay.classList.add('closing');
  _fsStack = [];
  _fsCurrentTopic = null;
  setTimeout(() => {
    overlay.classList.remove('active','closing');
    document.body.style.overflow = '';
    syncLoadMoreVisibility();
    // Restore search query if one was active when user opened this topic
    if (_lastSearchQuery) {
      const inp = document.getElementById('searchInput');
      inp.value = _lastSearchQuery;
      _searchResults = deepSearch(_lastSearchQuery);
      renderSearchDropdown(_searchResults, _lastSearchQuery);
      updateSearchClearBtn();
      // Focus and select the whole query so typing replaces it instantly
      inp.focus();
      inp.select();
    }
  }, 280);
}

// Fires when the user taps the phone/browser Back button (or swipes back).
// If the overlay is open and there's a previous topic on the nested stack
// (e.g. they followed an "Answer from:" or bookmark link), step back to
// that topic instead of closing straight to the home page. Otherwise close
// the overlay for real.
window.addEventListener('popstate', () => {
  const overlay = document.getElementById('fullscreenOverlay');
  if (overlay && overlay.classList.contains('active') && !overlay.classList.contains('closing')) {
    if (_fsStack.length) {
      const prevTopic = _fsStack.pop();
      _fsCurrentTopic = prevTopic;
      renderFullscreenTopic(prevTopic);
      // An underlying history entry for this overlay still exists, so
      // leave _fsHistoryPushed as-is (true) — Back will work again.
    } else {
      _fsHistoryPushed = false;
      _fsCurrentTopic = null;
      doCloseFullscreen();
    }
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const btn = document.getElementById('sidebarToggleBtn');
  const isCollapsed = sidebar.classList.toggle('collapsed');
  main.classList.toggle('sidebar-collapsed', isCollapsed);
  btn.classList.toggle('collapsed', isCollapsed);
  localStorage.setItem('sidebarCollapsed', isCollapsed ? '1' : '0');
}

// Mobile sidebar (hamburger) — separate open/close state from desktop collapse
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const isOpen = sidebar.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('show', isOpen);
  if (isOpen) sidebar.classList.remove('collapsed'); // never show a 0-width sidebar
  syncLoadMoreVisibility();
  syncMobileMenuBtn();
}
function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (backdrop) backdrop.classList.remove('show');
  syncLoadMoreVisibility();
  syncMobileMenuBtn();
}
window.addEventListener('resize', function(){
  if (window.innerWidth > 768) closeMobileSidebar();
});

// ── Mobile FAB (bottom-right arrow) — one button, four meanings ──
// right = sidebar closed, at top      -> tap opens the sidebar
// left  = sidebar open                -> tap closes the sidebar
// down  = sidebar closed, scrolled,
//         more content below          -> tap nudges the page down
// up    = sidebar closed, at/near
//         the bottom of the page      -> tap scrolls back to top
const MOBILE_BTN_SCROLL_THRESHOLD = 80; // px scrolled before we switch from "menu" to "scroll" mode
const MOBILE_BTN_BOTTOM_THRESHOLD = 120; // px from bottom counted as "reached the end"

function getMobileMenuBtnDirection() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.classList.contains('open')) return 'left';

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const viewportH = window.innerHeight;
  const pageH = document.documentElement.scrollHeight;
  const distanceFromBottom = pageH - viewportH - scrollY;

  if (scrollY <= MOBILE_BTN_SCROLL_THRESHOLD) return 'right';
  if (distanceFromBottom <= MOBILE_BTN_BOTTOM_THRESHOLD) return 'up';
  return 'down';
}

function syncMobileMenuBtn() {
  const btn = document.getElementById('mobileMenuBtn');
  if (!btn || window.innerWidth > 768) return;

  const dir = getMobileMenuBtnDirection();
  btn.classList.remove('dir-right', 'dir-left', 'dir-down', 'dir-up');
  btn.classList.add('dir-' + dir);

  const labels = {
    right: 'Open menu',
    left: 'Close menu',
    down: 'Scroll down for more',
    up: 'Back to top'
  };
  btn.setAttribute('aria-label', labels[dir]);
  btn.setAttribute('title', labels[dir]);
}

function handleMobileMenuBtnTap() {
  const dir = getMobileMenuBtnDirection();
  if (dir === 'right' || dir === 'left') {
    toggleMobileSidebar(); // syncMobileMenuBtn() runs inside here
    return;
  }
  if (dir === 'down') {
    window.scrollBy({ top: Math.round(window.innerHeight * 0.7), behavior: 'smooth' });
  } else if (dir === 'up') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Scroll listener below will update the icon as the page moves.
}

let _mobileBtnScrollTicking = false;
window.addEventListener('scroll', () => {
  if (_mobileBtnScrollTicking) return;
  _mobileBtnScrollTicking = true;
  requestAnimationFrame(() => {
    syncMobileMenuBtn();
    _mobileBtnScrollTicking = false;
  });
}, { passive: true });

window.addEventListener('resize', syncMobileMenuBtn);
document.addEventListener('DOMContentLoaded', syncMobileMenuBtn);
syncMobileMenuBtn();

// Restore sidebar state
(function(){
  if (localStorage.getItem('sidebarCollapsed') === '1' && window.innerWidth > 768) {
    document.getElementById('sidebar').classList.add('collapsed');
    document.getElementById('main').classList.add('sidebar-collapsed');
    document.getElementById('sidebarToggleBtn').classList.add('collapsed');
  }
})();

function setTaglineTheme(isLight) {
  const h1 = document.getElementById('mainTagline');
  if (!h1) return;
  if (isLight) {
    h1.style.background = 'none';
    h1.style.webkitBackgroundClip = 'unset';
    h1.style.webkitTextFillColor = 'rgba(10,8,30,0.92)';
    h1.style.color = 'rgba(10,8,30,0.92)';
  } else {
    h1.style.background = 'linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.6) 100%)';
    h1.style.webkitBackgroundClip = 'text';
    h1.style.webkitTextFillColor = 'transparent';
    h1.style.color = '';
  }
}

// Applies the given theme ('light' or 'dark') to the page: body class,
// sun/moon icon swap, tagline color, and persists the choice.
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  const sun = document.getElementById('httSun');
  const moon = document.getElementById('httMoon');
  if (sun) sun.style.display = isLight ? '' : 'none';
  if (moon) moon.style.display = isLight ? 'none' : '';
  setTaglineTheme(isLight);
  localStorage.setItem('theme', theme);
}

// Toggles between light and dark mode.
function toggleTheme() {
  const isCurrentlyLight = document.body.classList.contains('light-mode');
  applyTheme(isCurrentlyLight ? 'dark' : 'light');
}

// Keep footer copyright year current
(function(){
  const yEl = document.getElementById('copyrightYear');
  if (yEl) yEl.textContent = new Date().getFullYear();
})();

// Light mode is the default for everyone; if the person has toggled to
// dark before, remember that choice on their next visit.
(function(){
  const saved = localStorage.getItem('theme');
  applyTheme(saved === 'dark' ? 'dark' : 'light');
})();

function filterCat(cat) {
  currentFilter = cat;
  expandedId = null;
  renderAll();
  syncTopicsDropdownActive();
  if (window.innerWidth <= 768) closeMobileSidebar();
}

// ─────────────────────────────────────────────
//  TOPICS QUICK-JUMP DROPDOWN (next to search bar)
// ─────────────────────────────────────────────

function toggleTopicsDropdown(e) {
  if (e) e.stopPropagation();
  const wrap = document.getElementById('topicsDropdownWrap');
  const panel = document.getElementById('topicsDropdownPanel');
  const backdrop = document.getElementById('topicsDropdownBackdrop');
  const opening = !panel.classList.contains('visible');
  panel.classList.toggle('visible', opening);
  wrap.classList.toggle('open', opening);
  if (backdrop) backdrop.classList.toggle('visible', opening);
  document.body.style.overflow = (opening && window.innerWidth <= 768) ? 'hidden' : '';
  if (opening) {
    syncTopicsDropdownActive();
    positionTopicsDropdownPanel();
  }
}

function positionTopicsDropdownPanel() {
  const panel = document.getElementById('topicsDropdownPanel');
  if (!panel) return;
  if (window.innerWidth <= 768) { // mobile uses a fixed bottom-sheet, no JS positioning needed
    panel.style.top = '';
    return;
  }
  const wrap = document.getElementById('topicsDropdownWrap');
  if (!wrap) return;
  const rect = wrap.getBoundingClientRect();
  panel.style.top = Math.round(rect.bottom + 8) + 'px';
}

function closeTopicsDropdown() {
  const wrap = document.getElementById('topicsDropdownWrap');
  const panel = document.getElementById('topicsDropdownPanel');
  const backdrop = document.getElementById('topicsDropdownBackdrop');
  panel.classList.remove('visible');
  wrap.classList.remove('open');
  if (backdrop) backdrop.classList.remove('visible');
  document.body.style.overflow = '';
}

function selectTopicsDropdown(cat) {
  filterCat(cat);
  closeTopicsDropdown();
  document.getElementById('main')?.scrollTo?.({ top: 0, behavior: 'smooth' });
}

function syncTopicsDropdownActive() {
  document.querySelectorAll('.tdp-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-cat') === currentFilter);
  });
}

document.addEventListener('click', (e) => {
  const wrap = document.getElementById('topicsDropdownWrap');
  if (wrap && !wrap.contains(e.target)) closeTopicsDropdown();
});

window.addEventListener('resize', () => {
  const panel = document.getElementById('topicsDropdownPanel');
  if (panel && panel.classList.contains('visible')) positionTopicsDropdownPanel();
});

// ─────────────────────────────────────────────
//  BOOKMARKS / STARRED SUBSECTIONS (sidebar)
// ─────────────────────────────────────────────

const BOOKMARKS_KEY = 'kv_bookmarks_v2';

function getBookmarks() {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveBookmarks(list) {
  try { localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list)); } catch (e) {}
}

function isSectionBookmarked(bmId) {
  return getBookmarks().some(b => b.id === bmId);
}

function toggleSectionBookmark(topicId, sectionId, title) {
  const bmId = topicId + '::' + sectionId;
  let list = getBookmarks();
  const exists = list.some(b => b.id === bmId);
  if (exists) {
    list = list.filter(b => b.id !== bmId);
  } else {
    const topic = TOPICS.find(t => t.id === topicId);
    list.unshift({ id: bmId, topicId, sectionId, title, topicName: topic ? topic.name : topicId });
  }
  saveBookmarks(list);
  renderBookmarks();
  // Sync the star button state on the accordion, if visible
  const btn = document.querySelector(`.accordion-star-btn[data-bmid="${bmId}"]`);
  if (btn) btn.classList.toggle('starred', !exists);
}

function removeBookmark(bmId, e) {
  if (e) e.stopPropagation();
  const list = getBookmarks().filter(b => b.id !== bmId);
  saveBookmarks(list);
  renderBookmarks();
  const btn = document.querySelector(`.accordion-star-btn[data-bmid="${bmId}"]`);
  if (btn) btn.classList.remove('starred');
}

function clearBookmarks() {
  saveBookmarks([]);
  renderBookmarks();
  document.querySelectorAll('.accordion-star-btn.starred').forEach(b => b.classList.remove('starred'));
}

function openBookmark(topicId, sectionId) {
  const topic = TOPICS.find(t => t.id === topicId);
  if (!topic) return;
  openFullscreen(topic);
  if (window.innerWidth <= 768) closeMobileSidebar();

  const tryScroll = (attempts) => {
    if (attempts <= 0) return;
    const accEl = document.getElementById('acc-' + sectionId);
    if (!accEl) { setTimeout(() => tryScroll(attempts - 1), 80); return; }
    const header = accEl.querySelector('.accordion-header');
    const body = document.getElementById('body-' + sectionId);
    if (header && body && !body.classList.contains('open')) {
      header.classList.add('open');
      body.classList.add('open');
    }
    setTimeout(() => {
      accEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      accEl.classList.add('search-highlight-flash');
      setTimeout(() => accEl.classList.remove('search-highlight-flash'), 2600);
    }, 120);
  };
  setTimeout(() => tryScroll(10), 300);
}

function renderBookmarks() {
  const section = document.getElementById('bookmarksSection');
  const listEl = document.getElementById('bookmarksList');
  const hintEl = document.getElementById('bookmarksEmptyHint');
  if (!section || !listEl) return;
  const items = getBookmarks();
  if (!items.length) {
    section.style.display = 'none';
    listEl.innerHTML = '';
    if (hintEl) hintEl.style.display = 'flex';
    return;
  }
  section.style.display = 'block';
  if (hintEl) hintEl.style.display = 'none';
  listEl.innerHTML = items.map(bm => {
    const accent = getAccent(bm.topicId);
    return `
    <a class="bookmark-item" href="#" onclick="openBookmark('${bm.topicId}','${bm.sectionId}');return false">
      <span class="bmi-icon" style="color:${accent.color}"><svg width="13" height="13" viewBox="0 0 24 24" fill="${accent.color}" stroke="${accent.color}" stroke-width="1.5" stroke-linejoin="round"><path d="M7 3.5h10a1 1 0 0 1 1 1V21l-6-3.6-6 3.6V4.5a1 1 0 0 1 1-1z"/></svg></span>
      <span style="flex:1;min-width:0;overflow:hidden">
        <span class="bmi-text" style="display:block">${bm.title}</span>
        <span style="display:block;font-size:10.5px;color:var(--text3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${bm.topicName}</span>
      </span>
      <button type="button" class="bmi-remove" title="Remove bookmark" onclick="removeBookmark('${bm.id}', event)">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </a>`;
  }).join('');
}

// Inject a star-toggle button onto every accordion (subsection) within the
// currently open topic, so any subsection can be bookmarked for later revision.
function enhanceAccordionStars(topicId) {
  const contentEl = document.getElementById('fsContent');
  if (!contentEl) return;
  contentEl.querySelectorAll('.accordion').forEach(accEl => {
    if (accEl.querySelector('.accordion-star-btn')) return; // already added
    const fullId = accEl.id || '';
    const sectionId = fullId.replace(/^acc-/, '');
    if (!sectionId) return;
    const header = accEl.querySelector('.accordion-header');
    if (!header) return;

    let title = '';
    const titleSpan = header.querySelector(':scope > span:first-child > span:last-child');
    title = ((titleSpan && titleSpan.textContent) || header.textContent || '').trim();

    const bmId = topicId + '::' + sectionId;
    const starred = isSectionBookmarked(bmId);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'accordion-star-btn' + (starred ? ' starred' : '');
    btn.title = 'Bookmark this subsection';
    btn.setAttribute('data-bmid', bmId);
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M7 3.5h10a1 1 0 0 1 1 1V21l-6-3.6-6 3.6V4.5a1 1 0 0 1 1-1z"/></svg>';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleSectionBookmark(topicId, sectionId, title);
    });
    accEl.appendChild(btn);
  });
}

// Injects a "Copy" button into every code block's header within the
// currently open topic, so users can copy code samples with one click.
function enhanceCodeCopyButtons() {
  const contentEl = document.getElementById('fsContent');
  if (!contentEl) return;
  contentEl.querySelectorAll('.code-block').forEach(block => {
    const header = block.querySelector('.code-header');
    const body = block.querySelector('.code-body');
    if (!header || !body) return;
    if (header.querySelector('.code-copy-btn')) return; // already added

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Copy code');
    const copyIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    const checkIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    btn.innerHTML = copyIcon + '<span>Copy</span>';

    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = body.innerText;
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        // Fallback for environments without clipboard API access
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e2) {}
        document.body.removeChild(ta);
      }
      btn.classList.add('copied');
      btn.innerHTML = checkIcon + '<span>Copied</span>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = copyIcon + '<span>Copy</span>';
      }, 1800);
    });

    // Header is a 3-column grid (dots | copy button | label) so the
    // Copy button sits centered in the middle of the bar, with dots on
    // the left and the filename/label on the right.
    const dots = header.querySelector('.code-dots');
    if (dots && dots.nextSibling) {
      header.insertBefore(btn, dots.nextSibling);
    } else {
      header.appendChild(btn);
    }
  });
}

function setFilter(cat, btn) {
  currentFilter = cat;
  expandedId = null;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAll();
}

function filterTopics() {
  renderAll();
}

function renderAll() {
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const grid = document.getElementById('topicsGrid');
  let filtered = TOPICS.filter(t => {
    const catMatch = currentFilter === 'all' || t.category === currentFilter;
    const searchMatch = !search || t.name.toLowerCase().includes(search);
    return catMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(renderCard).join('');
  document.getElementById('totalCount').textContent = filtered.length;

  // Content height just changed — re-check whether there's more to scroll to
  requestAnimationFrame(syncLoadMoreVisibility);
  requestAnimationFrame(syncMobileMenuBtn);
}

// Shows the floating arrow whenever it's useful:
//  - there's more content below the fold  -> down arrow, nudges the page down
//  - user has scrolled down and reached the bottom -> arrow flips to point up,
//    acting as a "back to top" button instead of just disappearing
//  - user is at the very top with nothing to scroll -> hidden
// Also hidden while the fullscreen topic view / mobile sidebar drawer is open.
function syncLoadMoreVisibility() {
  const wrap = document.getElementById('loadMoreWrap');
  const btn = document.getElementById('loadMoreBtn');
  if (!wrap || !btn) return;
  const overlay = document.getElementById('fullscreenOverlay');
  const sidebar = document.getElementById('sidebar');
  const overlayOpen = !!(overlay && overlay.classList.contains('active'));
  const mobileSidebarOpen = !!(sidebar && sidebar.classList.contains('open'));

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const viewportH = window.innerHeight;
  const pageH = document.documentElement.scrollHeight;
  _hasMoreBelow = (pageH - viewportH - scrollY) > 120;
  const hasScrolledDown = scrollY > 120;

  const shouldShow = (_hasMoreBelow || hasScrolledDown) && !overlayOpen && !mobileSidebarOpen;
  wrap.classList.toggle('show', shouldShow);
  if (!shouldShow) return;

  const isUp = !_hasMoreBelow && hasScrolledDown;
  btn.classList.toggle('up', isUp);
  const polyline = btn.querySelector('polyline');
  if (polyline) polyline.setAttribute('points', isUp ? '6 15 12 9 18 15' : '6 9 12 15 18 9');
  btn.setAttribute('aria-label', isUp ? 'Scroll back to top' : 'Scroll down for more topics');
  btn.setAttribute('title', isUp ? 'Back to top' : 'More topics below');
}

// Down state: pure scroll hint — nudges the page down so the user sees more
// of what's already rendered. Up state: scrolls smoothly back to the top.
function loadMoreTopics() {
  const btn = document.getElementById('loadMoreBtn');
  if (btn && btn.classList.contains('up')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollBy({ top: Math.round(window.innerHeight * 0.7), behavior: 'smooth' });
  }
}

let _scrollSyncTicking = false;
window.addEventListener('scroll', () => {
  if (_scrollSyncTicking) return;
  _scrollSyncTicking = true;
  requestAnimationFrame(() => {
    syncLoadMoreVisibility();
    _scrollSyncTicking = false;
  });
}, { passive: true });

window.addEventListener('resize', syncLoadMoreVisibility);

// ─────────────────────────────────────────────
//  DEEP SEARCH ENGINE
// ─────────────────────────────────────────────

let _searchIndex = null; // built once on first use
let _searchHlIdx = -1;   // keyboard-highlighted row index

function buildSearchIndex() {
  if (_searchIndex) return _searchIndex;
  const index = [];

  TOPICS.forEach(topic => {
    // 1. Topic title itself
    index.push({
      topicId:   topic.id,
      topicName: topic.name,
      topicIcon: topic.icon,
      sectionId: null,
      title:     topic.name,
      preview:   '',
      rank:      0 // topic title = highest
    });

    // 2. Parse the topic's HTML content (if it has any)
    const html = getContent(topic);
    if (!html || html.includes('No content added yet')) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Walk accordion sections
    doc.querySelectorAll('.accordion').forEach(acc => {
      const sectionId = acc.id; // e.g. "acc-git-rebase"
      const headerEl  = acc.querySelector('.accordion-header');
      const bodyEl    = acc.querySelector('.accordion-body');

      const headerText = headerEl ? headerEl.innerText.trim() : '';
      const bodyText   = bodyEl   ? bodyEl.innerText.trim()   : '';

      if (headerText) {
        index.push({
          topicId:   topic.id,
          topicName: topic.name,
          topicIcon: topic.icon,
          sectionId: sectionId,
          title:     headerText,
          preview:   bodyText.slice(0, 200),
          rank:      1 // section title
        });
      }

      // Also index individual sub-elements inside the body for paragraph/keyword hits
      if (bodyEl) {
        // Tables: each row
        bodyEl.querySelectorAll('tr').forEach(row => {
          const rowText = row.innerText.trim();
          if (rowText.length > 3) {
            index.push({
              topicId:   topic.id,
              topicName: topic.name,
              topicIcon: topic.icon,
              sectionId: sectionId,
              title:     headerText,
              preview:   rowText.slice(0, 180),
              rank:      3
            });
          }
        });

        // Code blocks
        bodyEl.querySelectorAll('code, pre').forEach(el => {
          const code = el.innerText.trim();
          if (code.length > 4) {
            index.push({
              topicId:   topic.id,
              topicName: topic.name,
              topicIcon: topic.icon,
              sectionId: sectionId,
              title:     headerText,
              preview:   code.slice(0, 180),
              rank:      3
            });
          }
        });

        // Paragraphs and list items
        bodyEl.querySelectorAll('p, li, .hbox, .wbox, .sbox, .ybox').forEach(el => {
          const txt = el.innerText.trim();
          if (txt.length > 5) {
            index.push({
              topicId:   topic.id,
              topicName: topic.name,
              topicIcon: topic.icon,
              sectionId: sectionId,
              title:     headerText,
              preview:   txt.slice(0, 180),
              rank:      3
            });
          }
        });
      }
    });

    // Also index content outside accordions (bare headings, paragraphs)
    doc.querySelectorAll('h2, h3, h4, strong').forEach(el => {
      const txt = el.innerText.trim();
      if (txt.length > 3) {
        index.push({
          topicId:   topic.id,
          topicName: topic.name,
          topicIcon: topic.icon,
          sectionId: null,
          title:     txt,
          preview:   '',
          rank:      2
        });
      }
    });
  });

  _searchIndex = index;
  return index;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${escapeRe(query)})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function deepSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const index = buildSearchIndex();
  const seen  = new Map(); // deduplicate: key = topicId+sectionId+title

  const scored = [];

  index.forEach(entry => {
    const titleLow   = entry.title.toLowerCase();
    const previewLow = entry.preview.toLowerCase();

    let score = -1;
    if (titleLow === q)                    score = 0;  // exact title
    else if (titleLow.startsWith(q))       score = 1;  // title starts with
    else if (titleLow.includes(q))         score = 2;  // partial title
    else if (previewLow.includes(q))       score = 3;  // content match
    else return;

    // Bump score by base rank (topic title < section title < content)
    score = score * 10 + entry.rank;

    // Dedup: keep the best-scored entry per (topicId, sectionId, title)
    const key = entry.topicId + '|' + (entry.sectionId||'') + '|' + entry.title;
    if (!seen.has(key) || seen.get(key).score > score) {
      seen.set(key, { ...entry, score });
    }
  });

  const results = Array.from(seen.values())
    .sort((a, b) => a.score - b.score)
    .slice(0, 20);

  return results;
}

function renderSearchDropdown(results, query) {
  const dd = document.getElementById('searchDropdown');
  if (!results.length) {
    dd.innerHTML = `<div class="search-no-results">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:block;margin:0 auto 8px"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      No results for <strong>"${query}"</strong>
    </div>`;
    dd.classList.add('visible');
    return;
  }

  const count = results.length;
  let html = `<div class="search-results-header">${count} result${count>1?'s':''} for "${query}"</div>`;

  results.forEach((r, i) => {
    const accent = (typeof TOPIC_COLORS !== 'undefined' && TOPIC_COLORS[r.topicId]) || (typeof getAccent === 'function' && r.topicId ? getAccent(r.topicId) : { color:'#3b82f6', glow:'rgba(59,130,246,0.2)' });
    const badge  = r.sectionId ? 'Section' : 'Topic';
    const crumbSection = r.sectionId && r.title !== r.topicName
      ? `<span class="sri-arrow">›</span><span>${highlight(r.title, query)}</span>`
      : '';

    // Snippet from preview
    let snippet = '';
    if (r.preview) {
      const lo = r.preview.toLowerCase();
      const idx = lo.indexOf(query.toLowerCase());
      if (idx !== -1) {
        const start = Math.max(0, idx - 40);
        snippet = (start > 0 ? '…' : '') + r.preview.slice(start, idx + query.length + 80);
      } else {
        snippet = r.preview.slice(0, 100);
      }
    }

    html += `<div class="search-result-item" data-idx="${i}"
      onclick="selectSearchResult(${i})"
      onmouseenter="hlSearchResult(${i})">
      <div class="sri-icon" style="background:${accent.color}15;color:${accent.color}">${r.topicIcon}</div>
      <div style="flex:1;min-width:0">
        <div class="sri-breadcrumb">
          <span>${r.topicName}</span>
          ${crumbSection}
        </div>
        <div class="sri-title">${highlight(r.title, query)}</div>
        ${snippet ? `<div class="sri-preview">${highlight(snippet, query)}</div>` : ''}
      </div>
      <span class="sri-badge">${badge}</span>
    </div>`;
  });

  dd.innerHTML = html;
  dd.classList.add('visible');
  _searchHlIdx = -1;
}

function hlSearchResult(idx) {
  _searchHlIdx = idx;
  document.querySelectorAll('.search-result-item').forEach((el, i) => {
    el.classList.toggle('highlighted', i === idx);
  });
}

let _searchResults = [];
let _lastSearchQuery = ''; // remembers query so it restores after closing a topic

function onSearchInput() {
  const q = document.getElementById('searchInput').value.trim();

  // If user cleared the box manually, forget the saved query
  if (!q) _lastSearchQuery = '';

  updateSearchClearBtn();

  // Always filter the card grid
  renderAll();

  if (!q) {
    closeSearchDropdown();
    return;
  }

  _searchResults = deepSearch(q);
  renderSearchDropdown(_searchResults, q);
}

function updateSearchClearBtn() {
  const inp = document.getElementById('searchInput');
  const btn = document.getElementById('searchClearBtn');
  if (!inp || !btn) return;
  btn.classList.toggle('visible', inp.value.length > 0);
}

function clearSearchInput() {
  const inp = document.getElementById('searchInput');
  inp.value = '';
  _lastSearchQuery = '';
  _searchResults = [];
  updateSearchClearBtn();
  closeSearchDropdown();
  renderAll();
  inp.focus();
}

function onSearchFocus() {
  const q = document.getElementById('searchInput').value.trim();
  if (q && _searchResults.length) {
    document.getElementById('searchDropdown').classList.add('visible');
  }
}

function closeSearchDropdown() {
  document.getElementById('searchDropdown').classList.remove('visible');
  _searchHlIdx = -1;
}

function onSearchKeyDown(e) {
  const dd = document.getElementById('searchDropdown');
  const visible = dd.classList.contains('visible');
  const items = dd.querySelectorAll('.search-result-item');

  if (e.key === 'Escape') { closeSearchDropdown(); return; }
  if (!visible || !items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _searchHlIdx = Math.min(_searchHlIdx + 1, items.length - 1);
    hlSearchResult(_searchHlIdx);
    items[_searchHlIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _searchHlIdx = Math.max(_searchHlIdx - 1, 0);
    hlSearchResult(_searchHlIdx);
    items[_searchHlIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (_searchHlIdx >= 0) selectSearchResult(_searchHlIdx);
    else if (_searchResults.length) selectSearchResult(0);
  }
}

function selectSearchResult(idx) {
  const result = _searchResults[idx];
  if (!result) return;

  closeSearchDropdown();

  // Remember the query so we can restore it when user closes the topic
  _lastSearchQuery = document.getElementById('searchInput').value.trim();

  // Clear search input & re-render grid normally
  document.getElementById('searchInput').value = '';
  updateSearchClearBtn();
  renderAll();

  // Find the topic
  const topic = TOPICS.find(t => t.id === result.topicId);
  if (!topic) return;

  // Open the fullscreen overlay for this topic
  openFullscreen(topic);

  // After content is injected, scroll to the section and highlight
  const tryScroll = (attempts) => {
    if (attempts <= 0) return;
    const overlay = document.getElementById('fullscreenOverlay');
    const sectionId = result.sectionId; // e.g. "acc-git-rebase"

    if (sectionId) {
      const accEl = document.getElementById(sectionId);
      if (!accEl) {
        setTimeout(() => tryScroll(attempts - 1), 80);
        return;
      }

      // Open the accordion if closed
      const accId = sectionId.replace(/^acc-/, '');
      const header = accEl.querySelector('.accordion-header');
      const body   = document.getElementById('body-' + accId);
      if (header && body && !body.classList.contains('open')) {
        header.classList.add('open');
        body.classList.add('open');
      }

      // Scroll to it
      setTimeout(() => {
        accEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Flash highlight
        accEl.classList.add('search-highlight-flash');
        setTimeout(() => accEl.classList.remove('search-highlight-flash'), 2600);
      }, 120);

    } else {
      // Just scroll to the top of the content
      overlay.scrollTop = 0;
    }
  };

  // Wait for content to be rendered (the openFullscreen uses double rAF)
  setTimeout(() => tryScroll(10), 300);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.search-wrap');
  if (wrap && !wrap.contains(e.target)) closeSearchDropdown();
});

// Esc → close the open topic, same as the "Back to Topics" button
// Ctrl+F / Cmd+F → focus search bar
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('fullscreenOverlay');
    if (overlay && overlay.classList.contains('active') && !overlay.classList.contains('closing')) {
      closeFullscreen();
    }
    return;
  }

  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    // Only intercept if fullscreen overlay is NOT open
    const overlay = document.getElementById('fullscreenOverlay');
    if (overlay && overlay.classList.contains('active')) return;
    e.preventDefault();
    const inp = document.getElementById('searchInput');
    inp.focus();
    inp.select();
  }
});

// Set search placeholder based on OS (Mac vs Windows/Linux)
(function() {
  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  const inp = document.getElementById('searchInput');
  if (inp) inp.placeholder = isMac
    ? '⌘F to search  —  topics, sections, keywords…'
    : 'Ctrl+F to search  —  topics, sections, keywords…';
})();

// ─────────────────────────────────────────────
//  INTERVIEW QUESTIONS — "Add Your Own" feature
// ─────────────────────────────────────────────
// Initial render
renderAll();
renderBookmarks();
syncTopicsDropdownActive();
