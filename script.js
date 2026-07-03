const CATEGORIES = {
  backend:         { label:'Backend',          color:'#f59e0b' },
  devops:          { label:'DevOps',           color:'#0ea5e9' },
  database:        { label:'Database',         color:'#10b981' },
  'cs-fundamentals':{ label:'CS Fundamentals', color:'#ef4444' },
  dsa:             { label:'DSA',              color:'#6366f1' },
  frontend:        { label:'Frontend',         color:'#eab308' },
  frameworks:      { label:'Frameworks',       color:'#22c55e' },
  ai:              { label:'AI/ML',            color:'#a855f7' },
  apis:            { label:'APIs & HTTP',      color:'#f43f5e' },
  interview:       { label:'Interview Prep',   color:'#fbbf24' },
};

const TOPICS = [
  {id:'bit-manipulation',name:'Bit Manipulation',icon:'🔢',color:'#14b8a6',gradient:'from-teal-400 to-cyan-600',category:'dsa',hasContent:true},
  {id:'binary-search',name:'Binary Search',icon:'🔍',color:'#84cc16',gradient:'',category:'dsa',hasContent:true},
  {id:'sorting',name:'Sorting Algorithms',icon:'📊',color:'#a855f7',gradient:'',category:'dsa'},
  {id:'sliding-window',name:'Sliding Window',icon:'🪟',color:'#ec4899',gradient:'',category:'dsa'},
  {id:'arrays',name:'Arrays',icon:'📦',color:'#6366f1',gradient:'',category:'dsa',hasContent:true},
  {id:'strings',name:'Strings',icon:'🔤',color:'#10b981',gradient:'',category:'dsa'},
  {id:'stack-queue',name:'Stack & Queue',icon:'📚',color:'#f97316',gradient:'',category:'dsa'},
  {id:'linked-list',name:'Linked List',icon:'🔗',color:'#8b5cf6',gradient:'',category:'dsa',hasContent:true},
  {id:'trees',name:'Trees',icon:'🌳',color:'#22c55e',gradient:'',category:'dsa'},
  {id:'dynamic-programming',name:'Dynamic Programming',icon:'🧠',color:'#ef4444',gradient:'',category:'dsa'},
  {id:'graphs',name:'Graphs',icon:'🕸️',color:'#06b6d4',gradient:'',category:'dsa'},
  {id:'jdbc',name:'JDBC',icon:'🗄️',color:'#6366f1',gradient:'',category:'backend',hasContent:true},
  {id:'java-oop',name:'Java + OOP Concepts',icon:'☕',color:'#f59e0b',gradient:'',category:'backend'},
  {id:'java-features',name:'Java 8, 17 & 21 Features',icon:'⚡',color:'#f59e0b',gradient:'',category:'backend'},
  {id:'built-in-functions',name:'Built-in Functions',icon:'🧰',color:'#f59e0b',gradient:'',category:'backend',hasContent:true},
  {id:'projects',name:'Projects Explanation',icon:'🚀',color:'#f97316',gradient:'',category:'backend',hasContent:true},
  {id:'spring-mvc',name:'Spring MVC',icon:'🍃',color:'#84cc16',gradient:'',category:'frameworks',hasContent:true},
  {id:'spring-boot',name:'Spring Boot',icon:'🌱',color:'#22c55e',gradient:'',category:'frameworks',hasContent:true},
  {id:'docker',name:'Docker',icon:'🐳',color:'#0ea5e9',gradient:'',category:'devops',hasContent:true},
  {id:'kubernetes',name:'Kubernetes',icon:'⚙️',color:'#3b82f6',gradient:'',category:'devops',hasContent:true},
  {id:'git',name:'Git & GitHub',icon:'🌿',color:'#f97316',gradient:'',category:'devops',hasContent:true},
  {id:'maven',name:'Maven',icon:'📦',color:'#c71a36',gradient:'',category:'devops',hasContent:true},
  {id:'mysql',name:'MySQL',icon:'🐬',color:'#10b981',gradient:'',category:'database'},
  {id:'dbms',name:'DBMS Basics',icon:'💾',color:'#8b5cf6',gradient:'',category:'database',hasContent:true},
  {id:'computer-networks',name:'Computer Networks',icon:'🌐',color:'#06b6d4',gradient:'',category:'cs-fundamentals',hasContent:true},
  {id:'operating-systems',name:'Operating Systems',icon:'🖥️',color:'#ef4444',gradient:'',category:'cs-fundamentals',hasContent:true},
  {id:'javascript',name:'JavaScript Basics',icon:'🟨',color:'#eab308',gradient:'',category:'frontend'},
  {id:'html-css',name:'HTML & CSS',icon:'🎨',color:'#e879f9',gradient:'',category:'frontend',hasContent:true},
  {id:'ai-concepts',name:'AI Related Concepts',icon:'🤖',color:'#a855f7',gradient:'',category:'ai'},
  {id:'apis-http',name:'APIs & HTTP Codes',icon:'🌐',color:'#f43f5e',gradient:'',category:'apis',hasContent:true},
  {id:'interview-questions',name:'Interview Questions',icon:'🎯',color:'#fbbf24',gradient:'',category:'interview',hasContent:true},
];

const HTML_CSS_CONTENT = `
<div class="content-area">

  <!-- INTERVIEW NOTE -->
  <div style="background:rgba(232,121,249,0.07);border:1px solid rgba(232,121,249,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#e879f9">Backend interview scope</strong> — You don't need deep frontend knowledge. Interviewers just check basic awareness of: semantic HTML, box model, flexbox centering, positioning, and specificity. That's it.
  </div>

  <!-- 1. Semantic HTML + Must-Know Tags -->
  <div class="accordion" id="acc-html-semantic">
    <button class="accordion-header" onclick="toggleAcc('html-semantic')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#e879f9">&lt;/&gt;</span>
        <span>1. Semantic HTML — Structure &amp; Must-Know Tags</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-html-semantic">
      <div class="hbox"><strong>Semantic tags</strong> describe the meaning of content to the browser and screen readers — not just how it looks.</div>

      <p class="section-label">Semantic vs Non-Semantic</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Semantic Tag</th><th>Meaning</th><th>Non-semantic equivalent</th></tr></thead>
        <tbody>
          <tr><td style="color:#e879f9">&lt;header&gt;</td><td>Page or section header</td><td>&lt;div id="header"&gt;</td></tr>
          <tr><td style="color:#e879f9">&lt;nav&gt;</td><td>Navigation links</td><td>&lt;div id="nav"&gt;</td></tr>
          <tr><td style="color:#e879f9">&lt;main&gt;</td><td>Primary content of page</td><td>&lt;div id="main"&gt;</td></tr>
          <tr><td style="color:#e879f9">&lt;section&gt;</td><td>Thematic grouping</td><td>&lt;div&gt;</td></tr>
          <tr><td style="color:#e879f9">&lt;article&gt;</td><td>Self-contained content (blog post)</td><td>&lt;div&gt;</td></tr>
          <tr><td style="color:#e879f9">&lt;footer&gt;</td><td>Footer area</td><td>&lt;div id="footer"&gt;</td></tr>
          <tr><td style="color:#e879f9">&lt;aside&gt;</td><td>Sidebar / related content</td><td>&lt;div&gt;</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Why it matters: better <strong>SEO</strong>, <strong>accessibility</strong> (screen readers), and cleaner code. Interviewers ask "what is semantic HTML?" — this table is your answer.</div>

      <p class="section-label">Inline vs Block Elements</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Block</th><th>Inline</th></tr></thead>
        <tbody>
          <tr><td>Takes full width, starts new line</td><td>Takes only content width, stays in line</td></tr>
          <tr><td style="color:#e879f9">&lt;div&gt;, &lt;p&gt;, &lt;h1–h6&gt;, &lt;section&gt;</td><td style="color:#7dd3fc">&lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;img&gt;</td></tr>
        </tbody>
      </table></div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What is semantic HTML and why use it?</strong><br>
          <span style="color:var(--text2)">Semantic tags describe the purpose of content (nav, header, footer). They improve SEO because search engines understand page structure, and improve accessibility because screen readers can navigate by landmarks.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: Difference between &lt;div&gt; and &lt;span&gt;?</strong><br>
          <span style="color:var(--text2)">&lt;div&gt; is a block element — takes full width, forces a new line. &lt;span&gt; is inline — sits within text/content without breaking flow. div for layout sections, span for styling a piece of text.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What does DOCTYPE do?</strong><br>
          <span style="color:var(--text2)">&lt;!DOCTYPE html&gt; tells the browser to render the page in HTML5 standards mode. Without it, some browsers fall into "quirks mode" with inconsistent rendering.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. CSS Box Model -->
  <div class="accordion" id="acc-html-boxmodel">
    <button class="accordion-header" onclick="toggleAcc('html-boxmodel')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#e879f9">□</span>
        <span>2. CSS Box Model</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-html-boxmodel">
      <div class="hbox">Every HTML element is a rectangular box. From inside out: <strong>Content → Padding → Border → Margin</strong></div>

      <div style="display:flex;justify-content:center;margin:14px 0">
        <div style="text-align:center;font-family:'JetBrains Mono',monospace;font-size:12px">
          <div style="background:rgba(239,68,68,0.12);border:2px dashed rgba(239,68,68,0.45);padding:12px;border-radius:8px;color:rgba(255,255,255,0.45)">
            MARGIN — outer spacing, transparent
            <div style="background:rgba(251,191,36,0.12);border:2px dashed rgba(251,191,36,0.45);padding:10px;border-radius:6px;margin:8px;color:rgba(255,255,255,0.55)">
              BORDER — visible edge
              <div style="background:rgba(99,102,241,0.18);border:2px dashed rgba(99,102,241,0.45);padding:8px;border-radius:4px;margin:8px;color:rgba(255,255,255,0.65)">
                PADDING — inner spacing, inherits background
                <div style="background:rgba(16,185,129,0.22);padding:8px;border-radius:3px;margin:8px;color:#10b981;font-weight:600">CONTENT (width × height)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="section-label">The Key: box-sizing</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>box-sizing</th><th>What "width" means</th><th>Problem?</th></tr></thead>
        <tbody>
          <tr><td style="color:#ef4444">content-box (default)</td><td>Content only. Total = width + padding + border</td><td>Adds padding = element grows ⚠</td></tr>
          <tr><td style="color:#10b981">border-box (use this)</td><td>Content + padding + border. Total = width exactly</td><td>No surprise — stays predictable ✅</td></tr>
        </tbody>
      </table></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Global Reset (always add this)</span></div>
        <div class="code-body"><span class="fn">*</span> { <span class="kw">box-sizing</span>: border-box; <span class="kw">margin</span>: <span class="num">0</span>; <span class="kw">padding</span>: <span class="num">0</span>; }

<span class="cmt">/* Padding vs Margin: */</span>
<span class="cmt">/* padding = space INSIDE the element (background shows) */</span>
<span class="cmt">/* margin  = space OUTSIDE (always transparent) */</span></div>
      </div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What is the CSS Box Model?</strong><br>
          <span style="color:var(--text2)">Every element is a box: Content in the center, surrounded by Padding (inner spacing), then Border (visible edge), then Margin (outer spacing). Each layer adds to the total space the element occupies on screen.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: Difference between padding and margin?</strong><br>
          <span style="color:var(--text2)">Padding is space inside the element — the background color shows through it. Margin is space outside — it's always transparent and pushes other elements away.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What is box-sizing: border-box?</strong><br>
          <span style="color:var(--text2)">By default (content-box), setting width:200px means the content is 200px, then padding and border are added on top, making the element bigger than expected. border-box makes width include padding and border — so the element stays exactly 200px total. Far more predictable.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. CSS Selectors & Specificity -->
  <div class="accordion" id="acc-html-specificity">
    <button class="accordion-header" onclick="toggleAcc('html-specificity')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#e879f9">.#</span>
        <span>3. CSS Selectors &amp; Specificity</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-html-specificity">
      <div class="hbox">When two rules target the same element, <strong>specificity</strong> decides which one wins. Higher = overrides lower.</div>

      <p class="section-label">Specificity Hierarchy (low → high)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Selector</th><th>Example</th><th>Score</th></tr></thead>
        <tbody>
          <tr><td>Element / Tag</td><td style="color:#7dd3fc">p { }</td><td>1</td></tr>
          <tr><td>Class / Pseudo-class / Attribute</td><td style="color:#7dd3fc">.card { } &nbsp; :hover</td><td>10</td></tr>
          <tr><td>ID</td><td style="color:#7dd3fc">#header { }</td><td>100</td></tr>
          <tr><td>Inline style</td><td style="color:#7dd3fc">style="color:red"</td><td>1000</td></tr>
          <tr><td>!important</td><td style="color:#ef4444">color: red !important</td><td>Overrides everything ⚠</td></tr>
        </tbody>
      </table></div>

      <p class="section-label">Common Selectors — Quick Reference</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Selectors.css</span></div>
        <div class="code-body"><span class="fn">p</span>         { }   <span class="cmt">/* all &lt;p&gt; elements */</span>
<span class="fn">.card</span>     { }   <span class="cmt">/* class selector */</span>
<span class="fn">#hero</span>     { }   <span class="cmt">/* ID selector */</span>
<span class="fn">div p</span>     { }   <span class="cmt">/* any &lt;p&gt; inside a div (descendant) */</span>
<span class="fn">div &gt; p</span>   { }   <span class="cmt">/* direct child &lt;p&gt; only */</span>
<span class="fn">a:hover</span>   { }   <span class="cmt">/* pseudo-class */</span>
<span class="fn">p::before</span> { }   <span class="cmt">/* pseudo-element */</span></div>
      </div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What is specificity in CSS?</strong><br>
          <span style="color:var(--text2)">When multiple CSS rules apply to the same element, specificity determines which one wins. ID selectors beat class selectors, which beat element selectors. Inline styles beat all. !important overrides everything but should be avoided.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What's the difference between class and ID selectors?</strong><br>
          <span style="color:var(--text2)">A class (.card) can be reused on multiple elements. An ID (#header) should be unique per page. ID has higher specificity (100 vs 10). In practice, prefer classes for styling and IDs for JS/anchor links.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: div p vs div &gt; p — difference?</strong><br>
          <span style="color:var(--text2)">div p selects any &lt;p&gt; anywhere inside a div, no matter how deeply nested. div &gt; p selects only &lt;p&gt; elements that are direct children of the div.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Flexbox + Positioning (combined) -->
  <div class="accordion" id="acc-html-layout">
    <button class="accordion-header" onclick="toggleAcc('html-layout')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#e879f9">flex</span>
        <span>4. Flexbox &amp; CSS Positioning</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-html-layout">

      <p class="section-label">Flexbox — The One-Liner Everyone Asks</p>
      <div class="sbox" style="margin-bottom:12px">
        ⭐ <strong>How to center anything:</strong> <code style="background:rgba(16,185,129,0.18);padding:2px 6px;border-radius:4px;font-size:12px">display:flex; justify-content:center; align-items:center;</code>
      </div>

      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Flexbox Essentials</span></div>
        <div class="code-body"><span class="fn">.container</span> {
  <span class="kw">display</span>: flex;
  <span class="kw">flex-direction</span>: row;          <span class="cmt">/* row (default) | column */</span>
  <span class="kw">justify-content</span>: space-between; <span class="cmt">/* main axis alignment */</span>
  <span class="kw">align-items</span>: center;          <span class="cmt">/* cross axis alignment */</span>
  <span class="kw">gap</span>: <span class="num">16px</span>;                     <span class="cmt">/* space between items */</span>
  <span class="kw">flex-wrap</span>: wrap;               <span class="cmt">/* wrap to next line */</span>
}</div>
      </div>

      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>justify-content</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#7dd3fc">flex-start</td><td>Pack items to start</td></tr>
          <tr><td style="color:#7dd3fc">center</td><td>Center along main axis</td></tr>
          <tr><td style="color:#7dd3fc">flex-end</td><td>Pack items to end</td></tr>
          <tr><td style="color:#7dd3fc">space-between</td><td>First & last touch edges, equal gaps between</td></tr>
          <tr><td style="color:#7dd3fc">space-evenly</td><td>Equal space everywhere including edges</td></tr>
        </tbody>
      </table></div>

      <p class="section-label" style="margin-top:16px">CSS Positioning — The 5 Values</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Value</th><th>Behaviour</th><th>Use case</th></tr></thead>
        <tbody>
          <tr><td style="color:#e879f9">static</td><td>Default — normal document flow</td><td>Everything by default</td></tr>
          <tr><td style="color:#e879f9">relative</td><td>Offset from its normal position; still in flow</td><td>Minor nudges; anchor for absolute children</td></tr>
          <tr><td style="color:#e879f9">absolute</td><td>Removed from flow; placed relative to nearest positioned ancestor</td><td>Badges, tooltips, dropdowns</td></tr>
          <tr><td style="color:#e879f9">fixed</td><td>Relative to viewport; stays while scrolling</td><td>Sticky navbars, floating buttons</td></tr>
          <tr><td style="color:#e879f9">sticky</td><td>Acts relative until scroll threshold, then fixed</td><td>Table headers, section labels</td></tr>
        </tbody>
      </table></div>
      <div class="ybox">⚠ <code style="font-family:'JetBrains Mono',monospace">position:absolute</code> needs a <code style="font-family:'JetBrains Mono',monospace">position:relative</code> parent — otherwise it positions relative to the entire &lt;html&gt; page!</div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: How do you center a div?</strong><br>
          <span style="color:var(--text2)">display:flex; justify-content:center; align-items:center; on the parent container. This centers both horizontally and vertically.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What is Flexbox and when do you use it?</strong><br>
          <span style="color:var(--text2)">Flexbox is a 1D layout model — it arranges items in a row or column. Use it for navigation bars, card rows, centering elements, or any layout along a single axis.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: Difference between absolute and fixed positioning?</strong><br>
          <span style="color:var(--text2)">absolute is placed relative to the nearest positioned ancestor and scrolls with the page. fixed is always relative to the viewport and stays in place while scrolling — used for persistent navbars or chat buttons.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: Why isn't my absolute element positioned correctly?</strong><br>
          <span style="color:var(--text2)">Most common reason: no positioned ancestor. The parent must have position:relative (or absolute/fixed/sticky) — otherwise the absolute child jumps to the top-left of the whole page.</span>
        </div>
        <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#e879f9">Q: What is the difference between Flexbox and Grid? (bonus)</strong><br>
          <span style="color:var(--text2)">Flexbox is 1D — works along one axis (row OR column). Grid is 2D — controls both rows AND columns simultaneously. Use Flexbox for components (navbars, cards). Use Grid for full page layout (header / sidebar / main / footer).</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-html-qrev">
    <button class="accordion-header" onclick="toggleAcc('html-qrev')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#e879f9">⚡</span>
        <span>Quick Revision — HTML &amp; CSS Cheatsheet</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-html-qrev">
      <div class="qrev-card"><span class="qrev-key">Semantic HTML</span><span class="qrev-val">header, nav, main, section, article, footer — improves SEO &amp; accessibility</span></div>
      <div class="qrev-card"><span class="qrev-key">Block vs Inline</span><span class="qrev-val">div/p/h1 = block (full width) · span/a/strong = inline (content width)</span></div>
      <div class="qrev-card"><span class="qrev-key">Box Model</span><span class="qrev-val">Content → Padding → Border → Margin (inside out)</span></div>
      <div class="qrev-card"><span class="qrev-key">box-sizing</span><span class="qrev-val">border-box — width includes padding+border. Always use * { box-sizing: border-box }</span></div>
      <div class="qrev-card"><span class="qrev-key">Padding vs Margin</span><span class="qrev-val">padding = inner space (background shows) · margin = outer space (transparent)</span></div>
      <div class="qrev-card"><span class="qrev-key">Specificity</span><span class="qrev-val">inline(1000) > #id(100) > .class(10) > tag(1) · !important overrides all</span></div>
      <div class="qrev-card"><span class="qrev-key">Center anything</span><span class="qrev-val">display:flex · justify-content:center · align-items:center (on parent)</span></div>
      <div class="qrev-card"><span class="qrev-key">Flexbox</span><span class="qrev-val">1D layout. justify-content = main axis · align-items = cross axis</span></div>
      <div class="qrev-card"><span class="qrev-key">position:absolute</span><span class="qrev-val">needs position:relative on parent. Removed from normal flow.</span></div>
      <div class="qrev-card"><span class="qrev-key">fixed vs sticky</span><span class="qrev-val">fixed = always in viewport · sticky = normal until scroll threshold</span></div>
      <div class="qrev-card"><span class="qrev-key">Flex vs Grid</span><span class="qrev-val">Flex = 1D (row or column) · Grid = 2D (rows AND columns)</span></div>
    </div>
  </div>

</div>
`

const LINKED_LIST_CONTENT = `
<div class="content-area">

  <!-- 1. Odd/Even Linked List -->
  <div class="accordion" id="acc-ll-odd-even">
    <button class="accordion-header" onclick="toggleAcc('ll-odd-even')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">⇌</span>
        <span>1. Odd / Even Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-odd-even">
      <div class="hbox"><strong>Goal:</strong> Group all odd-indexed nodes first, then all even-indexed nodes. Indices are 1-based. Must be done <strong>in-place in O(1) space and O(n) time</strong>.</div>
      <p class="section-label">Intuition</p>
      <div class="ybox">Maintain four pointers: <code>oddHead</code>, <code>odd</code>, <code>evenHead</code>, <code>even</code>. Each iteration, skip one node in the odd chain and one in the even chain. At end, connect odd tail → evenHead.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">OddEvenList.java</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">OddOrEven</span>(<span class="typ">Node</span> head) {
    <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span> head;

    <span class="typ">Node</span> oddHead  = head;
    <span class="typ">Node</span> odd      = head;
    <span class="typ">Node</span> evenHead = head.next;
    <span class="typ">Node</span> even     = head.next;

    <span class="kw">while</span> (even != <span class="kw">null</span> &amp;&amp; even.next != <span class="kw">null</span>) {
        odd.next  = odd.next.next;   <span class="cmt">// odd skips over even</span>
        even.next = even.next.next;  <span class="cmt">// even skips over odd</span>
        odd  = odd.next;
        even = even.next;
    }
    odd.next = evenHead;             <span class="cmt">// stitch: odd tail → even head</span>
    <span class="kw">return</span> oddHead;
}</div>
      </div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Input</th><th>Output</th></tr></thead>
        <tbody>
          <tr><td>1→2→3→4→5</td><td>1→3→5→2→4</td></tr>
          <tr><td>2→1→3→5→6→4→7</td><td>2→3→6→7→1→5→4</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — no extra list created, just pointer rewiring.</div>
    </div>
  </div>

  <!-- 2. Sort 0s 1s 2s -->
  <div class="accordion" id="acc-ll-012">
    <button class="accordion-header" onclick="toggleAcc('ll-012')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">0·1·2</span>
        <span>2. Sort a Linked List of 0s, 1s and 2s</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-012">
      <div class="hbox"><strong>Goal:</strong> Sort a linked list containing only 0, 1, and 2 without using extra space for a new list. Dutch National Flag variant for linked lists.</div>
      <p class="section-label">Approach — Three Dummy Heads</p>
      <div class="ybox">Create three dummy nodes: <code>zeroHead</code>, <code>oneHead</code>, <code>twoHead</code>. Traverse and append each node to the matching list. Finally chain: zero list → one list → two list.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Sort012.java</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">sort012</span>(<span class="typ">Node</span> head) {

    <span class="typ">Node</span> zeroHead = <span class="kw">new</span> <span class="typ">Node</span>(<span class="num">-1</span>);
    <span class="typ">Node</span> oneHead  = <span class="kw">new</span> <span class="typ">Node</span>(<span class="num">-1</span>);
    <span class="typ">Node</span> twoHead  = <span class="kw">new</span> <span class="typ">Node</span>(<span class="num">-1</span>);

    <span class="typ">Node</span> zero = zeroHead;
    <span class="typ">Node</span> one  = oneHead;
    <span class="typ">Node</span> two  = twoHead;
    <span class="typ">Node</span> temp = head;

    <span class="kw">while</span> (temp != <span class="kw">null</span>) {
        <span class="kw">if</span>      (temp.data == <span class="num">0</span>) { zero.next = temp; zero = temp; }
        <span class="kw">else if</span> (temp.data == <span class="num">1</span>) { one.next  = temp; one  = temp; }
        <span class="kw">else</span>                     { two.next  = temp; two  = temp; }
        temp = temp.next;
    }

    zero.next = (oneHead.next != <span class="kw">null</span>) ? oneHead.next : twoHead.next;
    one.next  = twoHead.next;
    two.next  = <span class="kw">null</span>;

    <span class="kw">return</span> zeroHead.next;
}</div>
      </div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — only 3 dummy nodes used regardless of input size.</div>
    </div>
  </div>

  <!-- 3. Remove Nth Node from End -->
  <div class="accordion" id="acc-ll-remove-nth">
    <button class="accordion-header" onclick="toggleAcc('ll-remove-nth')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">✂</span>
        <span>3. Remove Nth Node from End</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-remove-nth">
      <div class="hbox"><strong>Goal:</strong> Remove the Nth node from the end of the list in <strong>one pass</strong>.</div>
      <p class="section-label">Two Pointer Trick</p>
      <div class="ybox">Advance <code>fast</code> exactly <strong>k steps</strong> ahead. If <code>fast</code> becomes null, the head itself is the target — return <code>head.next</code>. Otherwise move both <code>slow</code> and <code>fast</code> until <code>fast.next == null</code>. Now <code>slow</code> sits just before the target — skip it.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">RemoveNthFromEnd.java</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">removeNth</span>(<span class="typ">Node</span> head, <span class="typ">int</span> k) {

    <span class="typ">Node</span> fast = head;

    <span class="kw">for</span> (<span class="typ">int</span> i = <span class="num">0</span>; i &lt; k; i++)
        fast = fast.next;

    <span class="kw">if</span> (fast == <span class="kw">null</span>)          <span class="cmt">// removing the head node</span>
        <span class="kw">return</span> head.next;

    <span class="typ">Node</span> slow = head;
    <span class="kw">while</span> (fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;  <span class="cmt">// skip the target node</span>
    <span class="kw">return</span> head;
}</div>
      </div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>List</th><th>N</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>1→2→3→4→5</td><td>2</td><td>1→2→3→5</td></tr>
          <tr><td>1</td><td>1</td><td>[]</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — dummy node handles edge case of deleting head.</div>
    </div>
  </div>

  <!-- 4. Reverse a Linked List -->
  <div class="accordion" id="acc-ll-reverse">
    <button class="accordion-header" onclick="toggleAcc('ll-reverse')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">↩</span>
        <span>4. Reverse a Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-reverse">
      <div class="hbox"><strong>Goal:</strong> Reverse the direction of all next pointers in-place.</div>
      <p class="section-label">Iterative (3-pointer) Approach</p>
      <div class="ybox">Keep track of <code>prev</code>, <code>curr</code>, <code>next</code>. At each step: save next, flip pointer, advance both pointers forward.</div>
      <p class="section-label">Java Code — Iterative</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">ReverseList.java</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">reverseLL</span>(<span class="typ">Node</span> head) {
    <span class="kw">if</span> (head == <span class="kw">null</span> || head.next == <span class="kw">null</span>) <span class="kw">return</span> head;

    <span class="typ">Node</span> prev = <span class="kw">null</span>;
    <span class="typ">Node</span> cur  = head;

    <span class="kw">while</span> (cur != <span class="kw">null</span>) {
        <span class="typ">Node</span> next = cur.next;  <span class="cmt">// save next</span>
        cur.next  = prev;      <span class="cmt">// flip pointer</span>
        prev      = cur;       <span class="cmt">// advance prev</span>
        cur       = next;      <span class="cmt">// advance cur</span>
    }
    <span class="kw">return</span> prev;               <span class="cmt">// prev is new head</span>
}</div>
      </div>
      <p class="section-label">Java Code — Recursive</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">ReverseList Recursive</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">reverseLL</span>(<span class="typ">Node</span> head) {
    <span class="kw">if</span> (head == <span class="kw">null</span> || head.next == <span class="kw">null</span>) <span class="kw">return</span> head;
    <span class="typ">Node</span> newHead = <span class="fn">reverseLL</span>(head.next);
    head.next.next = head;   <span class="cmt">// reverse the link</span>
    head.next = <span class="kw">null</span>;        <span class="cmt">// cut old forward link</span>
    <span class="kw">return</span> newHead;
}</div>
      </div>
      <div class="sbox">✅ Iterative: O(n) time, O(1) space &nbsp;|&nbsp; Recursive: O(n) time, O(n) stack space.</div>
    </div>
  </div>

  <!-- 5. Add One to Number Represented as LL -->
  <div class="accordion" id="acc-ll-add-one">
    <button class="accordion-header" onclick="toggleAcc('ll-add-one')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">+1</span>
        <span>5. Add One to a Number in Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-add-one">
      <div class="hbox"><strong>Goal:</strong> A number is stored digit-by-digit in a linked list (most significant digit first). Add 1 and return the result as a linked list.</div>

      <p class="section-label">Approach — Recursive</p>
      <div class="ybox">Recurse all the way to the <strong>last node</strong> (base case → return carry = 1). On the way back up (stack unwinding), add carry to the current node's data. If <code>sum ≥ 10</code>, set <code>node.data = sum % 10</code> and propagate <code>carry = 1</code> up. After recursion, if carry is still 1, prepend a new node with value 1 (e.g. 999 + 1 = 1000).</div>

      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">AddOne.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {

    <span class="kw">int</span> <span class="fn">helper</span>(<span class="typ">Node</span> node) {
        <span class="cmt">// Base case</span>
        <span class="kw">if</span> (node == <span class="kw">null</span>)
            <span class="kw">return</span> <span class="num">1</span>;   <span class="cmt">// add 1 here</span>

        <span class="kw">int</span> carry = <span class="fn">helper</span>(node.next);

        <span class="kw">int</span> sum = node.data + carry;

        node.data = sum % <span class="num">10</span>;

        <span class="kw">return</span> sum / <span class="num">10</span>;     <span class="cmt">// carry</span>
    }

    <span class="typ">Node</span> <span class="fn">addOne</span>(<span class="typ">Node</span> head) {

        <span class="kw">int</span> carry = <span class="fn">helper</span>(head);

        <span class="kw">if</span> (carry == <span class="num">1</span>) {
            <span class="typ">Node</span> newNode = <span class="kw">new</span> <span class="typ">Node</span>(<span class="num">1</span>);
            newNode.next = head;
            head = newNode;
        }

        <span class="kw">return</span> head;
    }
}</div>
      </div>

      <p class="section-label">How Recursion Works (Stack Unwinding)</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:13px 15px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        The recursive call goes all the way to <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">null</code> and returns <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">1</code> (the initial +1). As the call stack unwinds from tail to head, each node adds the carry to its own data. This naturally simulates right-to-left addition without reversing the list.
      </div>

      <p class="section-label">Dry Run — 1 → 9 → 9 → 9 (= 1999 + 1 = 2000)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Node</th><th>carry in</th><th>sum</th><th>node.data</th><th>carry out</th></tr></thead>
        <tbody>
          <tr><td>null (base)</td><td>—</td><td>—</td><td>—</td><td>1</td></tr>
          <tr><td>9 (last)</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>9 (2nd)</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>9 (1st)</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>1 (head)</td><td>1</td><td>2</td><td>2</td><td>0</td></tr>
          <tr><td colspan="5" style="color:var(--text2)">Result: 2 → 0 → 0 → 0</td></tr>
        </tbody>
      </table></div>

      <p class="section-label">Dry Run — 9 → 9 → 9 (= 999 + 1 = 1000, new head)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Node</th><th>carry in</th><th>sum</th><th>node.data</th><th>carry out</th></tr></thead>
        <tbody>
          <tr><td>null (base)</td><td>—</td><td>—</td><td>—</td><td>1</td></tr>
          <tr><td>9 (last)</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>9 (mid)</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>9 (head)</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td colspan="5" style="color:#8b5cf6">carry == 1 → prepend new Node(1) → 1 → 0 → 0 → 0</td></tr>
        </tbody>
      </table></div>

      <div class="sbox">✅ <strong>TC:</strong> O(n) — one recursive pass &nbsp;|&nbsp; <strong>SC:</strong> O(n) — call stack depth = list length</div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why use recursion instead of reversing the list?</strong><br>
          <span style="color:var(--text2)">Recursion naturally reaches the last node first via the call stack — same effect as reversing, but without actually modifying the list's structure. Cleaner and one-pass.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why does the base case return 1?</strong><br>
          <span style="color:var(--text2)">When <code>node == null</code>, we've gone past the last node. Returning 1 seeds the carry that propagates back through the list during unwinding — this is where the +1 originates.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: When is the new head node created?</strong><br>
          <span style="color:var(--text2)">Only when the final carry out of <code>helper(head)</code> is 1 — i.e. every digit was 9 (e.g. 9, 99, 999). A new node with value 1 is prepended and returned as the new head.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 6. Find Middle Element -->
  <div class="accordion" id="acc-ll-middle">
    <button class="accordion-header" onclick="toggleAcc('ll-middle')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">⚡</span>
        <span>6. Find the Middle Element of Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-middle">
      <div class="hbox"><strong>Goal:</strong> Return the middle node. If two middles exist (even length), return the <strong>second</strong> middle.</div>
      <p class="section-label">Floyd's Slow & Fast Pointer</p>
      <div class="ybox"><code>slow</code> moves 1 step, <code>fast</code> moves 2 steps. When fast reaches the end, slow is at the middle. Simple and elegant.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">MiddleNode.java</span></div>
        <div class="code-body"><span class="typ">Node</span> <span class="fn">findMid</span>(<span class="typ">Node</span> head) {

    <span class="typ">Node</span> fast = head;
    <span class="typ">Node</span> slow = head;

    <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
    }

    <span class="kw">return</span> slow;
}</div>
      </div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Input</th><th>Length</th><th>Middle</th></tr></thead>
        <tbody>
          <tr><td>1→2→3→4→5</td><td>5 (odd)</td><td>Node 3</td></tr>
          <tr><td>1→2→3→4→5→6</td><td>6 (even)</td><td>Node 4 (2nd middle)</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — classic two-pointer trick.</div>
    </div>
  </div>

  <!-- 7. Detect Loop/Cycle -->
  <div class="accordion" id="acc-ll-detect-cycle">
    <button class="accordion-header" onclick="toggleAcc('ll-detect-cycle')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">🔄</span>
        <span>7. Detect Loop / Cycle in Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-detect-cycle">
      <div class="hbox"><strong>Goal:</strong> Return <code>true</code> if the linked list contains a cycle (any node's next points back to a previous node).</div>
      <p class="section-label">Floyd's Cycle Detection Algorithm</p>
      <div class="ybox">Slow moves 1 step, fast moves 2 steps. If there's a cycle, fast will eventually lap slow and they will <strong>meet inside the loop</strong>. If fast reaches null → no cycle.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">DetectCycle.java</span></div>
        <div class="code-body"><span class="typ">Node</span> fast = head;
<span class="typ">Node</span> slow = head;

<span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
    slow = slow.next;
    fast = fast.next.next;

    <span class="kw">if</span> (slow == fast)
        <span class="kw">return true</span>;
}

<span class="kw">return false</span>;</div>
      </div>
      <div class="wbox">⚠️ Do NOT use <code>HashSet</code> for this — it uses O(n) space. Floyd's is the optimal O(1) space solution.</div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1)</div>
    </div>
  </div>

  <!-- 8. Find Length of Loop -->
  <div class="accordion" id="acc-ll-loop-length">
    <button class="accordion-header" onclick="toggleAcc('ll-loop-length')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">📏</span>
        <span>8. Find the Length of Loop in Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-loop-length">
      <div class="hbox"><strong>Goal:</strong> If a cycle exists, return the number of nodes in the cycle (loop length).</div>
      <p class="section-label">Approach</p>
      <div class="ybox">Step 1: Use Floyd's to find the meeting point inside the loop. Step 2: Keep one pointer fixed at the meeting point, move the other around the loop, counting steps until they meet again.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">LoopLength.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">public int</span> <span class="fn">lengthOfLoop</span>(<span class="typ">Node</span> head) {

        <span class="typ">Node</span> fast = head;
        <span class="typ">Node</span> slow = head;

        <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
            slow = slow.next;
            fast = fast.next.next;

            <span class="kw">if</span> (slow == fast)
                <span class="kw">break</span>;
        }

        <span class="kw">if</span> (fast == <span class="kw">null</span> || fast.next == <span class="kw">null</span>)
            <span class="kw">return</span> <span class="num">0</span>;

        <span class="typ">int</span> c = <span class="num">1</span>;
        fast = fast.next;

        <span class="kw">while</span> (fast != slow) {
            c++;
            fast = fast.next;
        }

        <span class="kw">return</span> c;
    }
}</div>
      </div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1)</div>
    </div>
  </div>

  <!-- 9. Delete Middle Node -->
  <div class="accordion" id="acc-ll-delete-middle">
    <button class="accordion-header" onclick="toggleAcc('ll-delete-middle')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">🗑</span>
        <span>9. Delete the Middle Node of Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-delete-middle">
      <div class="hbox"><strong>Goal:</strong> Delete the middle node. Middle = ⌊n/2⌋ (0-indexed). For n=5, delete index 2. For n=6, delete index 3.</div>
      <p class="section-label">Slow & Fast Pointer — With Prev Tracking</p>
      <div class="ybox">Track <code>prev</code> pointer one step behind <code>slow</code>. When fast reaches the end, slow is at the middle — do <code>prev.next = slow.next</code> to remove it.</div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">DeleteMiddle.java</span></div>
        <div class="code-body"><span class="typ">Node</span> <span class="fn">DelMid</span>(<span class="typ">Node</span> head) {

    <span class="kw">if</span> (head == <span class="kw">null</span> || head.next == <span class="kw">null</span>)
        <span class="kw">return null</span>;

    <span class="typ">Node</span> prev = <span class="kw">null</span>;
    <span class="typ">Node</span> front = <span class="kw">null</span>;
    <span class="typ">Node</span> fast = head;
    <span class="typ">Node</span> slow = head;

    <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
        prev  = slow;
        slow  = slow.next;
        front = slow.next;
        fast  = fast.next.next;
    }

    prev.next = front;

    <span class="kw">return</span> head;
}</div>
      </div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Input</th><th>Deleted</th><th>Output</th></tr></thead>
        <tbody>
          <tr><td>1→3→4→7→1→2→6</td><td>7 (idx 3)</td><td>1→3→4→1→2→6</td></tr>
          <tr><td>1→2→3→4</td><td>3 (idx 2)</td><td>1→2→4</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1)</div>
    </div>
  </div>

  <!-- 10. Find Starting Point of Cycle -->
  <div class="accordion" id="acc-ll-cycle-start">
    <button class="accordion-header" onclick="toggleAcc('ll-cycle-start')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">🎯</span>
        <span>10. Find Starting Point of the Cycle</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-cycle-start">
      <div class="hbox"><strong>Goal:</strong> If a cycle exists, return the node where the cycle begins (entry point of the loop).</div>
      <p class="section-label">Floyd's + Reset Trick</p>
      <div class="ybox">After detecting the meeting point with Floyd's: reset <code>slow</code> back to <code>head</code>. Keep <code>fast</code> at the meeting point. Move both <strong>one step at a time</strong> — they will meet exactly at the <strong>cycle start</strong>.</div>
      <p class="section-label">Why This Works</p>
      <div class="formula-card">
        <div class="formula-name">Mathematical Proof</div>
        <div class="formula-val">dist(head → cycle_start) = dist(meeting_pt → cycle_start)</div>
        <div class="formula-desc">This holds because: when fast meets slow, fast has traveled exactly 2× the distance of slow. The extra distance fast covered is exactly one full loop, which equals the head-to-entry distance.</div>
      </div>
      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">CycleStart.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">public int</span> <span class="fn">cycleStart</span>(<span class="typ">Node</span> head) {

        <span class="kw">if</span> (head == <span class="kw">null</span> || head.next == <span class="kw">null</span>)
            <span class="kw">return</span> <span class="num">-1</span>;

        <span class="typ">Node</span> fast = head;
        <span class="typ">Node</span> slow = head;

        <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
            slow = slow.next;
            fast = fast.next.next;

            <span class="kw">if</span> (slow == fast)
                <span class="kw">break</span>;
        }

        <span class="kw">if</span> (fast == <span class="kw">null</span> || fast.next == <span class="kw">null</span>)
            <span class="kw">return</span> <span class="num">-1</span>;

        slow = head;

        <span class="kw">while</span> (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        <span class="kw">return</span> slow.data;
    }
}</div>
      </div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — most asked cycle question in interviews!</div>
    </div>
  </div>

  <!-- 11. Remove Duplicates from Sorted LL -->
  <div class="accordion" id="acc-ll-remove-dup">
    <button class="accordion-header" onclick="toggleAcc('ll-remove-dup')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">🧹</span>
        <span>11. Remove Duplicates from Sorted Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-remove-dup">
      <div class="hbox"><strong>Goal:</strong> Given a <em>sorted</em> linked list, remove all duplicate nodes so each value appears only once.</div>
      <p class="section-label">Approach — Single Pass</p>
      <div class="ybox">Since the list is sorted, duplicates are always adjacent. Walk with <code>curr</code>: while <code>curr.val == curr.next.val</code>, skip next. Otherwise advance <code>curr</code>.</div>
      <p class="section-label">Java Code — Keep One Copy</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">RemoveDuplicates.java</span></div>
        <div class="code-body"><span class="typ">Node</span> <span class="fn">removeDuplicates</span>(<span class="typ">Node</span> head) {

    <span class="typ">Node</span> temp = head;

    <span class="kw">while</span> (temp != <span class="kw">null</span> &amp;&amp; temp.next != <span class="kw">null</span>) {

        <span class="kw">if</span> (temp.data == temp.next.data)
            temp.next = temp.next.next;

        <span class="kw">else</span>
            temp = temp.next;
    }

    <span class="kw">return</span> head;
}</div>
      </div>
      <p class="section-label">Variant — Remove ALL copies of duplicates</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">RemoveAllDuplicates.java</span></div>
        <div class="code-body"><span class="kw">public</span> <span class="typ">ListNode</span> <span class="fn">deleteDuplicates</span>(<span class="typ">ListNode</span> head) {
    <span class="typ">ListNode</span> dummy = <span class="kw">new</span> <span class="typ">ListNode</span>(<span class="num">0</span>);
    dummy.next = head;
    <span class="typ">ListNode</span> prev = dummy;
    <span class="kw">while</span> (prev.next != <span class="kw">null</span>) {
        <span class="typ">ListNode</span> curr = prev.next;
        <span class="kw">while</span> (curr.next != <span class="kw">null</span> &amp;&amp; curr.val == curr.next.val)
            curr = curr.next;           <span class="cmt">// skip all same-val</span>
        <span class="kw">if</span> (prev.next == curr) prev = prev.next; <span class="cmt">// no dup</span>
        <span class="kw">else</span> prev.next = curr.next;              <span class="cmt">// remove all</span>
    }
    <span class="kw">return</span> dummy.next;
}</div>
      </div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Input</th><th>Keep One</th><th>Remove All</th></tr></thead>
        <tbody>
          <tr><td>1→1→2→3→3</td><td>1→2→3</td><td>2</td></tr>
          <tr><td>1→2→3→3→4→4→5</td><td>1→2→3→4→5</td><td>1→2→5</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>TC:</strong> O(n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — sorted property is the key advantage.</div>
    </div>
  </div>

  <!-- 12. Check Palindrome -->
  <div class="accordion" id="acc-ll-palindrome">
    <button class="accordion-header" onclick="toggleAcc('ll-palindrome')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">🔁</span>
        <span>12. Check Palindrome Linked List</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-palindrome">
      <div class="hbox"><strong>Goal:</strong> Check if a singly linked list is a palindrome. Must be done in <strong>O(n) time</strong> and <strong>O(1) extra space</strong> — no array copying allowed.</div>

      <p class="section-label">Intuition — 3-Step Approach</p>
      <div class="ybox" style="margin-bottom:10px">
        <strong>Step 1:</strong> Find the middle using slow &amp; fast pointers.<br>
        <strong>Step 2:</strong> Reverse the second half of the list.<br>
        <strong>Step 3:</strong> Compare first half and reversed second half node by node.
      </div>

      <p class="section-label">Why slow &amp; fast pointers find the middle?</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:13px 15px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">fast</code> moves 2 steps for every 1 step of <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">slow</code>. When <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">fast</code> reaches the end, <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">slow</code> is exactly at the <strong>middle</strong>. For a list of length n: slow travels n/2 steps → sits at the midpoint. <code style="background:rgba(139,92,246,0.12);padding:2px 6px;border-radius:4px;font-size:12px">slow.next</code> becomes the head of the second half.
      </div>

      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">PalindromeLL.java</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">palindromeLL</span>(<span class="typ">Node</span> head) {
    <span class="cmt">// edge case: empty or single node</span>
    <span class="kw">if</span> (head == <span class="kw">null</span> || head.next == <span class="kw">null</span>) <span class="kw">return</span> head;

    <span class="cmt">// Step 1: Find middle via slow &amp; fast pointers</span>
    <span class="typ">Node</span> slow = head;
    <span class="typ">Node</span> fast = head;
    <span class="kw">while</span> (fast.next != <span class="kw">null</span> &amp;&amp; fast.next.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
    }

    <span class="cmt">// Step 2: Reverse second half (slow.next is second half head)</span>
    <span class="typ">Node</span> secHead = <span class="fn">reverseLL</span>(slow.next);

    <span class="cmt">// Step 3: Compare both halves</span>
    <span class="typ">Node</span> firstH = head;
    <span class="kw">while</span> (secHead != <span class="kw">null</span>) {
        <span class="kw">if</span> (firstH.data != secHead.data) {
            System.out.println(<span class="str">"Not a Palindrome"</span>);
            <span class="kw">return null</span>;
        }
        firstH  = firstH.next;
        secHead = secHead.next;
    }

    <span class="kw">return</span> head;
}</div>
      </div>

      <p class="section-label">Dry Run — 1 → 2 → 3 → 2 → 1</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Step</th><th>What Happens</th><th>State</th></tr></thead>
        <tbody>
          <tr><td>Find Middle</td><td>slow/fast both start at 1; fast jumps 2x</td><td>slow lands at <strong>3</strong> (index 2)</td></tr>
          <tr><td>Second Half</td><td>slow.next = 2→1</td><td>reverseLL gives <strong>1→2</strong></td></tr>
          <tr><td>Compare</td><td>1==1 ✓, 2==2 ✓, secHead=null → exit</td><td>return <strong>true</strong></td></tr>
        </tbody>
      </table></div>

      <p class="section-label">Dry Run — 1 → 2 → 3 → 4 → 5 (Not Palindrome)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Step</th><th>What Happens</th><th>State</th></tr></thead>
        <tbody>
          <tr><td>Find Middle</td><td>slow lands at <strong>3</strong></td><td>slow.next = 4→5</td></tr>
          <tr><td>Reverse</td><td>reverseLL(4→5) = <strong>5→4</strong></td><td>secHead = 5</td></tr>
          <tr><td>Compare</td><td>firstH.data=1, secHead.data=5 → 1≠5</td><td>return <strong>false</strong></td></tr>
        </tbody>
      </table></div>

      <div class="sbox">✅ <strong>TC:</strong> O(n) — one pass to find middle + one pass to compare &nbsp;|&nbsp; <strong>SC:</strong> O(1) — only pointer variables used.</div>

      <p class="section-label" style="margin-top:16px">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why check fast.next != null &amp;&amp; fast.next.next != null?</strong><br>
          <span style="color:var(--text2)">To avoid NullPointerException. If the list has even length, fast.next becomes null. If odd, fast.next.next becomes null. Both conditions stop the loop safely at the middle.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why use slow.next as the second half head, not slow itself?</strong><br>
          <span style="color:var(--text2)">slow points to the last node of the first half. slow.next is where the second half begins. Reversing from slow.next leaves the first half untouched.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why loop while secHead != null and not firstH != null?</strong><br>
          <span style="color:var(--text2)">For odd-length lists, the first half has one extra node (the middle). secHead (reversed second half) is always shorter or equal, so we stop when secHead runs out — the middle node doesn't need a comparison partner.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why does the edge case return false for single node?</strong><br>
          <span style="color:var(--text2)">A single node has no second half to compare against, so the while loop never runs and would return true by default. Depending on definition, a single node is trivially a palindrome — if needed, change the edge case to return true.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Extra: Add Two Linked Lists -->
  <div class="accordion" id="acc-ll-add2">
    <button class="accordion-header" onclick="toggleAcc('ll-add2')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">➕</span>
        <span>Extra. Add Two Linked Lists</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-add2">
      <div class="hbox"><strong>Goal:</strong> Two numbers are stored as linked lists (LSB at head). Add them and return the sum as a linked list. Handle carry propagation.</div>

      <p class="section-label">Intuition</p>
      <div class="ybox">Simulate grade-school addition digit by digit. Use a <code>carry</code> variable. At each step: <code>sum = carry + (head1.data if exists) + (head2.data if exists)</code>. New node gets <code>sum % 10</code>, carry becomes <code>sum / 10</code>. Continue until both lists exhausted AND carry is 0.</div>

      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Add2LL.java</span></div>
        <div class="code-body"><span class="kw">public static</span> <span class="typ">Node</span> <span class="fn">Add2LL</span>(<span class="typ">Node</span> head1, <span class="typ">Node</span> head2) {

    <span class="typ">Node</span> dummy = <span class="kw">new</span> <span class="typ">Node</span>(<span class="num">-1</span>);
    <span class="typ">Node</span> cur   = dummy;
    <span class="typ">int</span>  carry = <span class="num">0</span>;

    <span class="kw">while</span> (head1 != <span class="kw">null</span> || head2 != <span class="kw">null</span>) {

        <span class="typ">int</span> sum = carry;

        <span class="kw">if</span> (head1 != <span class="kw">null</span>) { sum += head1.data; head1 = head1.next; }
        <span class="kw">if</span> (head2 != <span class="kw">null</span>) { sum += head2.data; head2 = head2.next; }

        carry     = sum / <span class="num">10</span>;
        cur.next  = <span class="kw">new</span> <span class="typ">Node</span>(sum % <span class="num">10</span>);
        cur       = cur.next;
    }

    <span class="kw">if</span> (carry != <span class="num">0</span>)
        cur.next = <span class="kw">new</span> <span class="typ">Node</span>(carry);  <span class="cmt">// e.g. 999 + 1 → extra node 1</span>

    <span class="kw">return</span> dummy.next;
}</div>
      </div>

      <p class="section-label">Dry Run — (2→4→3) + (5→6→4) = 807 (342 + 465)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Step</th><th>head1</th><th>head2</th><th>sum</th><th>carry</th><th>Node added</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>2</td><td>5</td><td>7</td><td>0</td><td>7</td></tr>
          <tr><td>2</td><td>4</td><td>6</td><td>10</td><td>1</td><td>0</td></tr>
          <tr><td>3</td><td>3</td><td>4</td><td>8</td><td>0</td><td>8</td></tr>
          <tr><td>end</td><td>null</td><td>null</td><td>—</td><td>0</td><td>result: 7→0→8</td></tr>
        </tbody>
      </table></div>

      <div class="sbox">✅ <strong>TC:</strong> O(max(m, n)) — one pass through both lists &nbsp;|&nbsp; <strong>SC:</strong> O(max(m, n)) — for the result list nodes.</div>

      <p class="section-label" style="margin-top:16px">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why start carry = 0 and add to sum first?</strong><br>
          <span style="color:var(--text2)">Carry from the previous digit must be included in the current digit's sum. Initializing sum = carry ensures it rolls over correctly each step.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why check carry != 0 after the loop?</strong><br>
          <span style="color:var(--text2)">If both lists are exhausted but carry is still 1 (e.g. 999 + 1), we need one extra node. Without this check, the final carry would be silently lost.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why use a dummy node?</strong><br>
          <span style="color:var(--text2)">A dummy node avoids special-casing the very first node insertion. We always do cur.next = new Node(...) and return dummy.next at the end — clean and uniform.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: What if the lists are of different lengths?</strong><br>
          <span style="color:var(--text2)">The while loop runs as long as either head is not null. The null-check guards on head1 and head2 handle unequal lengths — the shorter list simply contributes 0 after it ends.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Extra: Intersection of Y-Shaped Linked Lists -->
  <div class="accordion" id="acc-ll-intersect">
    <button class="accordion-header" onclick="toggleAcc('ll-intersect')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#8b5cf6">🔀</span>
        <span>Extra. Intersection of Y-Shaped Linked Lists</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-intersect">
      <div class="hbox"><strong>Goal:</strong> Find the node where two singly linked lists merge into a Y-shape. Return the intersection node (by reference), or null if they don't intersect.</div>

      <p class="section-label">Intuition — Length Difference Trick</p>
      <div class="ybox">Find the lengths of both lists. Advance the pointer of the longer list by the difference. Then move both pointers one step at a time — they will meet exactly at the intersection node.</div>

      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">IntersectionY.java</span></div>
        <div class="code-body"><span class="typ">Node</span> <span class="fn">intersectionY</span>(<span class="typ">Node</span> l1, <span class="typ">Node</span> l2) {

    <span class="kw">if</span> (l1 == <span class="kw">null</span> || l2 == <span class="kw">null</span>)
        <span class="kw">return null</span>;

    <span class="typ">int</span> n1 = <span class="num">0</span>, n2 = <span class="num">0</span>;

    <span class="typ">Node</span> c1 = l1;
    <span class="typ">Node</span> c2 = l2;

    <span class="kw">while</span> (c1 != <span class="kw">null</span>) { n1++; c1 = c1.next; }
    <span class="kw">while</span> (c2 != <span class="kw">null</span>) { n2++; c2 = c2.next; }

    <span class="kw">if</span> (n1 &gt; n2)
        <span class="kw">return</span> <span class="fn">collision</span>(l1, l2, n1 - n2);

    <span class="kw">return</span> <span class="fn">collision</span>(l2, l1, n2 - n1);
}

<span class="kw">public</span> <span class="typ">Node</span> <span class="fn">collision</span>(<span class="typ">Node</span> g, <span class="typ">Node</span> s, <span class="typ">int</span> diff) {

    <span class="kw">while</span> (diff &gt; <span class="num">0</span>) {
        g = g.next;
        diff--;
    }

    <span class="kw">while</span> (g != s) {
        g = g.next;
        s = s.next;
    }

    <span class="kw">return</span> g;
}</div>
      </div>

      <p class="section-label">Dry Run</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>List A</th><th>List B</th><th>Intersection</th></tr></thead>
        <tbody>
          <tr><td>4→1→8→4→5</td><td>5→6→1→8→4→5</td><td>Node (8)</td></tr>
          <tr><td>2→6→4</td><td>1→5</td><td>null</td></tr>
        </tbody>
      </table></div>

      <div class="sbox">✅ <strong>TC:</strong> O(m + n) — two passes to find lengths + one pass to find intersection &nbsp;|&nbsp; <strong>SC:</strong> O(1) — only pointer variables.</div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why advance the longer list first?</strong><br>
          <span style="color:var(--text2)">Both lists share the same tail from the intersection onward. By skipping the extra nodes in the longer list, both pointers are the same distance from the intersection — so they meet in sync.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Why check g != s by reference and not by value?</strong><br>
          <span style="color:var(--text2)">Two different nodes can have the same value but be different nodes. The intersection is a shared memory reference — we're looking for the same node object, not equal values.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Revision Cheatsheet -->
  <div class="accordion" id="acc-ll-cheat">
    <button class="accordion-header" onclick="toggleAcc('ll-cheat')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f59e0b">⚡</span>
        <span>Quick Revision Cheatsheet</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ll-cheat">
      <div class="qrev-card"><span class="qrev-key">Odd/Even Split</span><span class="qrev-val">odd.next=even.next · odd=odd.next · even.next=odd.next · even=even.next</span></div>
      <div class="qrev-card"><span class="qrev-key">Sort 0s 1s 2s</span><span class="qrev-val">3 dummy heads → chain: z→o→t</span></div>
      <div class="qrev-card"><span class="qrev-key">Remove Nth from End</span><span class="qrev-val">fast = n+1 ahead → move both → slow.next = slow.next.next</span></div>
      <div class="qrev-card"><span class="qrev-key">Reverse (iterative)</span><span class="qrev-val">prev=null · curr.next=prev · prev=curr · curr=next</span></div>
      <div class="qrev-card"><span class="qrev-key">Add One</span><span class="qrev-val">recurse to null → return 1 → unwind: node.data=(data+carry)%10, carry=sum/10 → prepend new node if carry==1</span></div>
      <div class="qrev-card"><span class="qrev-key">Find Middle</span><span class="qrev-val">slow×1 + fast×2 → slow = middle when fast = null</span></div>
      <div class="qrev-card"><span class="qrev-key">Detect Cycle</span><span class="qrev-val">slow×1 + fast×2 → meet inside loop = cycle exists</span></div>
      <div class="qrev-card"><span class="qrev-key">Loop Length</span><span class="qrev-val">find meeting pt → walk one pointer around loop → count steps</span></div>
      <div class="qrev-card"><span class="qrev-key">Delete Middle</span><span class="qrev-val">fast starts at head.next.next → slow stays 1 behind middle</span></div>
      <div class="qrev-card"><span class="qrev-key">Cycle Start Point</span><span class="qrev-val">meet → reset slow=head → both move 1 step → meet at entry</span></div>
      <div class="qrev-card"><span class="qrev-key">Remove Duplicates</span><span class="qrev-val">sorted → skip while curr.val == curr.next.val</span></div>
      <div class="qrev-card"><span class="qrev-key">Palindrome Check</span><span class="qrev-val">find mid (slow/fast) → reverse 2nd half → compare both halves</span></div>
      <div class="qrev-card"><span class="qrev-key">Add Two LLs</span><span class="qrev-val">dummy head + carry loop: sum = carry + d1 + d2, node = sum%10, carry = sum/10</span></div>
    </div>
  </div>

</div>
`;

const PROJECTS_CONTENT = `
<div class="content-area">

  <!-- PROJECT 1: SURAKSHA DIAL -->
  <div class="accordion" id="acc-suraksha">
    <button class="accordion-header" onclick="toggleAcc('suraksha')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f97316">📱</span>
        <span>1. Suraksha Dial – Emergency Speech Recognition App</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-suraksha">

      <div class="hbox" style="margin-bottom:12px">
        <strong>Tech Stack:</strong> Android Studio · Java · SpeechRecognizer API · Foreground Service · AndroidManifest
      </div>

      <!-- Resume Line -->
      <p class="section-label">Resume Bullet Points</p>
      <div style="background:rgba(249,115,22,0.07);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:13px;line-height:1.8;color:var(--text)">
        • Developed a real-time Android application to detect distress keywords such as <em>"help"</em> and <em>"emergency"</em> using Android's built-in SpeechRecognizer API.<br>
        • Implemented continuous voice monitoring by restarting speech recognition callbacks to ensure persistent listening.<br>
        • Configured and managed Android framework services to enable reliable speech detection.
      </div>

      <!-- Para 1 -->
      <p class="section-label">Why Android Studio &amp; Project Setup</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        Since Suraksha Dial is an Android mobile application, I used <strong>Android Studio</strong> as the development environment. Android Studio is the official IDE for Android development, and when we create a new project it automatically provides the required boilerplate structure such as Gradle build files, resource folders, and a default launcher activity. These files are necessary for compiling, packaging, and running the application on an Android device.
      </div>

      <!-- Para 2 -->
      <p class="section-label">Boilerplate Files</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        Android Studio automatically creates files like <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">build.gradle</code>, <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">settings.gradle</code>, and folders like <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">res</code> and <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">java</code>. These are mandatory files required by the Android OS to build an APK and run it on a mobile phone. I did not manually write these files, but I worked on top of this base structure.
      </div>

      <!-- Para 3 -->
      <p class="section-label">App Logo &amp; UI Design</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        Android Studio provides built-in tools for UI and resource management. I used Android Studio's <strong>Image Asset tool</strong> to generate the application logo, which is stored in the <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">mipmap</code> folder. For the user interface, I used <strong>XML layout files</strong> where Android Studio supports drag-and-drop components like buttons and text fields, making UI design straightforward.
      </div>

      <!-- Para 4 -->
      <p class="section-label">What I Actually Implemented</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        On top of the default project structure, I implemented the actual application logic. The app consists of a simple user interface to start or stop the service, and a <strong>foreground service</strong> that continuously listens for distress words in the background.
      </div>

      <!-- Para 5 -->
      <p class="section-label">Core Logic – Speech Recognition</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        For speech detection, I used Android's built-in <strong>SpeechRecognizer API</strong>. SpeechRecognizer converts spoken words into text. I used <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">RecognizerIntent</code> to configure how the speech recognition behaves — such as language and recognition mode.
      </div>

      <!-- Para 6 - KEY -->
      <p class="section-label">⭐ Continuous Listening (Key Concept)</p>
      <div class="sbox" style="margin-bottom:12px;font-size:13px;line-height:1.75">
        By default, speech recognition listens only <strong>once</strong>. To make it continuous, I handled speech recognition inside a <strong>foreground service</strong> and restarted the listener inside callback methods like <code style="background:rgba(16,185,129,0.18);padding:2px 6px;border-radius:4px;font-size:12px">onResults</code> and <code style="background:rgba(16,185,129,0.18);padding:2px 6px;border-radius:4px;font-size:12px">onError</code>. This ensures the app keeps listening continuously instead of stopping after one phrase.
      </div>

      <!-- Para 7 -->
      <p class="section-label">Why Foreground Service?</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        A <strong>foreground service</strong> was used because Android restricts background access to sensitive resources like the microphone. Foreground services run with a persistent notification, which prevents the system from killing the service while the app is in the background or the screen is locked.
      </div>

      <!-- Para 8 -->
      <p class="section-label">Emergency Action – Keyword Detection</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        Once speech is recognized, the detected text is processed and checked for predefined distress keywords like <em>"help"</em> or <em>"emergency"</em>. If a keyword is detected, the app automatically triggers a phone call to a predefined emergency number using <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">Intent.ACTION_CALL</code>.
      </div>

      <!-- Para 9 -->
      <p class="section-label">Permissions &amp; Privacy</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:4px;font-size:13px;line-height:1.75;color:var(--text)">
        The required permissions — <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">RECORD_AUDIO</code>, <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">CALL_PHONE</code>, and <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">FOREGROUND_SERVICE</code> — are declared in <code style="background:rgba(249,115,22,0.12);padding:2px 6px;border-radius:4px;font-size:12px">AndroidManifest.xml</code>. The app requests only essential permissions and does not store or send any user data, ensuring user privacy.
      </div>

      <!-- Quick Fire Q&A -->
      <p class="section-label" style="margin-top:18px">⚡ Quick Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#f97316">Q: Why foreground service and not background service?</strong><br>
          <span style="color:var(--text2)">Android restricts microphone access in background. Foreground service runs with a persistent notification and cannot be killed by the OS.</span>
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#f97316">Q: How did you implement continuous listening?</strong><br>
          <span style="color:var(--text2)">SpeechRecognizer stops after one result by default. I restarted it inside onResults() and onError() callbacks to loop continuously.</span>
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#f97316">Q: Is the speech recognition online or offline?</strong><br>
          <span style="color:var(--text2)">Android's SpeechRecognizer API can work both ways depending on device configuration. I used RecognizerIntent without explicitly specifying offline mode.</span>
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#f97316">Q: What permissions does the app require?</strong><br>
          <span style="color:var(--text2)">RECORD_AUDIO for microphone, CALL_PHONE to trigger emergency call, and FOREGROUND_SERVICE to keep the listener alive in background.</span>
        </div>
      </div>

    </div>
  </div>

  <!-- PROJECT 2: STUDENT DATABASE MANAGEMENT SYSTEM -->
  <div class="accordion" id="acc-studentdb">
    <button class="accordion-header" onclick="toggleAcc('studentdb')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#6366f1">🗄️</span>
        <span>2. Student Database Management System</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-studentdb">

      <div class="hbox" style="margin-bottom:12px">
        <strong>Tech Stack:</strong> Java · JDBC · MySQL · Docker
      </div>

      <!-- Resume Lines -->
      <p class="section-label">Resume Bullet Points</p>
      <div style="background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:13px;line-height:1.8;color:var(--text)">
        • Developed a Java-based Student Database Management System supporting full CRUD operations using JDBC and MySQL to manage 100+ student records efficiently.<br>
        • Designed optimized SQL queries and database interactions to ensure fast and reliable data access.<br>
        • Containerized both the application and database using Docker.
      </div>

      <!-- Overview -->
      <p class="section-label">Project Overview</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        This is a Java console application that manages student records using a <strong>MySQL database</strong>. The application connects to the database through <strong>JDBC</strong> (Java Database Connectivity) and supports all four CRUD operations — Create, Read, Update, and Delete — enabling efficient management of 100+ student records.
      </div>

      <!-- JDBC Connection -->
      <p class="section-label">How JDBC Connection Works</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        JDBC is a Java API that lets Java programs interact with relational databases. I used <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">DriverManager.getConnection()</code> with the MySQL JDBC URL, username, and password to establish the connection. I used <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">PreparedStatement</code> instead of <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">Statement</code> to prevent SQL injection and improve query performance through precompilation.
      </div>

      <!-- CRUD Operations -->
      <p class="section-label">CRUD Operations Explained</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.15);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#10b981">CREATE</strong> — <span style="color:var(--text2)">INSERT INTO students (name, age, grade) VALUES (?, ?, ?) — adds a new student record.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#6366f1">READ</strong> — <span style="color:var(--text2)">SELECT * FROM students — retrieves all records; ResultSet iterates through rows returned by the query.</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.15);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#f59e0b">UPDATE</strong> — <span style="color:var(--text2)">UPDATE students SET grade=? WHERE id=? — modifies an existing student's data by primary key.</span>
        </div>
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#ef4444">DELETE</strong> — <span style="color:var(--text2)">DELETE FROM students WHERE id=? — removes a specific student record from the database.</span>
        </div>
      </div>

      <!-- SQL Optimization -->
      <p class="section-label">SQL Query Optimization</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        I designed queries to fetch only the required columns instead of using <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">SELECT *</code> wherever possible. I also added an <strong>index on the student ID</strong> (primary key) to ensure fast lookup. Using <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">PreparedStatement</code> further optimizes performance since the query is compiled once and reused with different parameters.
      </div>

      <!-- Docker -->
      <p class="section-label">⭐ Docker – Why &amp; How</p>
      <div class="sbox" style="margin-bottom:12px;font-size:13px;line-height:1.75">
        I containerized both the <strong>Java application</strong> and the <strong>MySQL database</strong> using Docker. I wrote a <code style="background:rgba(16,185,129,0.18);padding:2px 6px;border-radius:4px;font-size:12px">Dockerfile</code> for the Java app and used <code style="background:rgba(16,185,129,0.18);padding:2px 6px;border-radius:4px;font-size:12px">docker-compose.yml</code> to define and run both services together. This ensures the application runs consistently across any environment — no "works on my machine" problems. The MySQL container is configured with environment variables for username, password, and database name.
      </div>

      <!-- PreparedStatement vs Statement -->
      <p class="section-label">PreparedStatement vs Statement</p>
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;font-size:13px;line-height:1.75;color:var(--text)">
        <strong>Statement</strong> compiles the SQL query every time it is executed — this is slower and vulnerable to SQL injection.<br>
        <strong>PreparedStatement</strong> precompiles the query once. Parameters are passed separately using <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">setString()</code>, <code style="background:rgba(99,102,241,0.12);padding:2px 6px;border-radius:4px;font-size:12px">setInt()</code> etc., which prevents SQL injection and improves performance for repeated queries.
      </div>

      <!-- Quick Fire Q&A -->
      <p class="section-label" style="margin-top:18px">⚡ Quick Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Why did you use JDBC instead of Hibernate/JPA?</strong><br>
          <span style="color:var(--text2)">JDBC gives direct control over SQL queries. For a focused CRUD application, JDBC is lightweight and simpler without the overhead of an ORM framework.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Why PreparedStatement over Statement?</strong><br>
          <span style="color:var(--text2)">PreparedStatement precompiles the SQL query, prevents SQL injection attacks by treating parameters as data not code, and performs better for repeated executions.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Why Docker for this project?</strong><br>
          <span style="color:var(--text2)">Docker ensures the app and database run in isolated containers with consistent configuration. Any developer can spin up the full environment with a single docker-compose up command.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: How does the Java app connect to MySQL inside Docker?</strong><br>
          <span style="color:var(--text2)">In docker-compose, services communicate via the service name as hostname. The Java app's JDBC URL points to the MySQL service name (e.g., jdbc:mysql://mysql-db:3306/studentdb) instead of localhost.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: How did you optimize your SQL queries?</strong><br>
          <span style="color:var(--text2)">Used indexed primary keys for fast lookups, selected only required columns, and used PreparedStatement for precompiled reusable queries.</span>
        </div>
      </div>

    </div>
  </div>

</div>
`;

const DBMS_CONTENT = `
<div class="content-area">

  <!-- Intro banner -->
  <div style="background:rgba(139,92,246,0.07);border:1px solid rgba(139,92,246,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#8b5cf6">Interview scope</strong> — Focus on: ACID, Keys, Normalization (1NF–3NF), Indexes, Transactions. Most asked DBMS area in interviews.
  </div>

  <!-- 1. What is DBMS -->
  <div class="accordion" id="acc-dbms-intro">
    <button class="accordion-header" onclick="toggleAcc('dbms-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">💾</span><span>1. What is DBMS &amp; RDBMS?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-intro">
      <div class="hbox"><strong>DBMS</strong> = software that helps users store, manage, retrieve, and update data efficiently. Provides security, avoids duplication, ensures consistency. Examples: MySQL, Oracle.</div>
      <p class="section-label">DBMS vs RDBMS</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>DBMS</th><th>RDBMS</th></tr></thead>
        <tbody>
          <tr><td>Stores data as files</td><td>Stores data as tables (rows &amp; columns)</td></tr>
          <tr><td>No relationships between data</td><td>Supports relationships via keys</td></tr>
          <tr><td>Less secure</td><td>More secure</td></tr>
          <tr><td>No normalization</td><td>Follows normalization rules</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ RDBMS connects tables using <strong>Primary Key → Foreign Key</strong> relationships. Example: Student table + Marks table connected via StudentID.</div>
      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: What is DBMS?</strong><br>
          <span style="color:var(--text2)">DBMS is software that helps store, manage, retrieve, and update data efficiently. It avoids data duplication, provides security, and ensures consistency. Examples: MySQL, Oracle.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Difference between DBMS and RDBMS?</strong><br>
          <span style="color:var(--text2)">DBMS stores data as files; RDBMS stores data in tables. RDBMS supports relationships between tables using keys and follows normalization — making it more structured and reliable.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. ACID Properties -->
  <div class="accordion" id="acc-dbms-acid">
    <button class="accordion-header" onclick="toggleAcc('dbms-acid')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">⚗️</span><span>2. ACID Properties</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-acid">
      <div class="hbox">ACID ensures database transactions remain <strong>safe, consistent, and reliable</strong> — even when many users access simultaneously or failures occur.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#10b981">A — Atomicity</strong><br>
          <span style="color:var(--text2)">Transaction is <strong>all-or-nothing</strong>. Either every step succeeds, or none do. If ₹1000 is debited from A but crash happens before crediting B → ROLLBACK. Money is not lost.</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">Interview line: "Atomicity ensures incomplete transactions do not leave the database in an inconsistent state."</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#8b5cf6">C — Consistency</strong><br>
          <span style="color:var(--text2)">Database moves from <strong>one valid state to another</strong>. All rules (PK, FK, CHECK constraints) are respected. No negative balances, no duplicate PKs, no orphan FKs.</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">Interview line: "Consistency ensures database constraints and integrity rules are not violated after a transaction."</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#f59e0b">I — Isolation</strong><br>
          <span style="color:var(--text2)">Multiple transactions run simultaneously but results are as if they ran <strong>one after another</strong>. Two users booking the last ticket at the same time → only one succeeds.</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">Interview line: "Isolation ensures concurrent transactions do not affect each other's execution."</span>
        </div>
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#ef4444">D — Durability</strong><br>
          <span style="color:var(--text2)">Once a transaction is <strong>committed</strong>, data is permanent — even if the system crashes. Changes are stored in logs/disk and survive failures.</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">Interview line: "Durability ensures committed data is not lost even in case of system failure."</span>
        </div>
      </div>
      <div class="sbox">⭐ <strong>One-line summary:</strong> Atomicity = all-or-nothing · Consistency = valid state · Isolation = no interference · Durability = permanent</div>
    </div>
  </div>

  <!-- 3. Keys -->
  <div class="accordion" id="acc-dbms-keys">
    <button class="accordion-header" onclick="toggleAcc('dbms-keys')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">🔑</span><span>3. Primary Key &amp; Foreign Key</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-keys">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Primary Key</th><th>Foreign Key</th></tr></thead>
        <tbody>
          <tr><td>Uniquely identifies each row</td><td>Refers to PK of another table</td></tr>
          <tr><td>NOT NULL — cannot be empty</td><td>Can be NULL</td></tr>
          <tr><td>Only one per table</td><td>Multiple allowed per table</td></tr>
          <tr><td>Ensures entity integrity</td><td>Ensures referential integrity</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Example: Student table has <code style="background:rgba(139,92,246,0.12);padding:1px 5px;border-radius:4px;font-size:12px">StudentID</code> as PK. Marks table has <code style="background:rgba(139,92,246,0.12);padding:1px 5px;border-radius:4px;font-size:12px">StudentID</code> as FK → links both tables.</div>
      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: What is a Primary Key?</strong><br>
          <span style="color:var(--text2)">A primary key is a field that uniquely identifies each row in a table. It cannot have duplicate or NULL values. Example: StudentID in a students table.</span>
        </div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: What is a Foreign Key?</strong><br>
          <span style="color:var(--text2)">A foreign key is a field in one table that refers to the primary key of another table, used to maintain relationships between tables.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Normalization -->
  <div class="accordion" id="acc-dbms-norm">
    <button class="accordion-header" onclick="toggleAcc('dbms-norm')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">📐</span><span>4. Normalization — 1NF → 3NF</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-norm">
      <div class="hbox"><strong>Normalization</strong> = organizing data to reduce redundancy and improve data integrity by splitting large tables into smaller related ones.</div>
      <div class="ybox">Without normalization: same data stored multiple times → inconsistency → insert/update/delete anomalies.</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:12px">
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#10b981">1NF — First Normal Form</strong><br>
          <span style="color:var(--text2)">Each column contains <strong>atomic (single) values</strong>. No repeating groups or multi-valued attributes. Example: a "Subjects" column with "Math, Science" violates 1NF — split into separate rows.</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">One-liner: 1NF removes multi-valued attributes.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#6366f1">2NF — Second Normal Form</strong><br>
          <span style="color:var(--text2)">Must be in 1NF + every non-key attribute depends on the <strong>entire primary key</strong>, not just part of it (no partial dependency).<br>
          <em>Example:</em> PK = (StudentID, SubjectID). StudentName depends only on StudentID → partial dependency → violates 2NF.<br>
          Fix: Split into Student(StudentID, StudentName) + Marks(StudentID, SubjectID, Marks).</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">One-liner: 2NF removes partial dependency.</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#f59e0b">3NF — Third Normal Form</strong><br>
          <span style="color:var(--text2)">Must be in 2NF + non-key attributes must not depend on other non-key attributes (no transitive dependency).<br>
          <em>Example:</em> StudentID → Dept → DeptHead. DeptHead depends on Dept, not StudentID → transitive → violates 3NF.<br>
          Fix: Split into Student(StudentID, Dept) + Department(Dept, DeptHead).</span><br>
          <span style="font-size:11.5px;color:var(--text3);margin-top:4px;display:block">One-liner: 3NF removes transitive dependency.</span>
        </div>
      </div>
      <div class="sbox">⭐ Memory trick: <strong>1NF</strong> = atomic values · <strong>2NF</strong> = no partial dependency · <strong>3NF</strong> = no transitive dependency</div>
    </div>
  </div>

  <!-- 5. Indexes -->
  <div class="accordion" id="acc-dbms-index">
    <button class="accordion-header" onclick="toggleAcc('dbms-index')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">📇</span><span>5. Indexes in DBMS</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-index">
      <div class="hbox">An <strong>index</strong> is a database object that improves the speed of data retrieval. Like a book index — jump directly to a page instead of reading every page.</div>
      <div class="ybox">Without index: full table scan (slow). With index: direct row access via B-Tree (fast). Especially useful for WHERE, JOIN, ORDER BY.</div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Pros ✅</th><th>Cons ❌</th></tr></thead>
        <tbody>
          <tr><td>Faster SELECT queries</td><td>Slower INSERT operations</td></tr>
          <tr><td>Faster JOIN operations</td><td>Slower UPDATE operations</td></tr>
          <tr><td>Improved query performance</td><td>Slower DELETE operations</td></tr>
          <tr><td>Eliminates full table scan</td><td>Extra storage required</td></tr>
        </tbody>
      </table></div>
      <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px;margin-top:8px">
        <strong style="color:#8b5cf6">Q: How do indexes work internally?</strong><br>
        <span style="color:var(--text2)">Indexes use <strong>B-Tree</strong> data structure — a balanced tree that maintains sorted data and allows fast search, insert, and delete operations. Interview line: "Indexes use B-Trees to enable faster data access."</span>
      </div>
      <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px;margin-top:8px">
        <strong style="color:#8b5cf6">Q: Why not index every column?</strong><br>
        <span style="color:var(--text2)">Indexes speed up reads but slow down writes (INSERT/UPDATE/DELETE) because the index must also be updated. Extra storage is also needed. Use indexes on columns used frequently in WHERE or JOIN.</span>
      </div>
    </div>
  </div>

  <!-- 6. Transactions, COMMIT, ROLLBACK -->
  <div class="accordion" id="acc-dbms-txn">
    <button class="accordion-header" onclick="toggleAcc('dbms-txn')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">💳</span><span>6. Transactions, COMMIT &amp; ROLLBACK</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-txn">
      <div class="hbox">A <strong>transaction</strong> is a logical unit of work containing one or more SQL operations, executed <strong>completely or not at all</strong>.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#10b981">COMMIT</strong> — Saves all changes <strong>permanently</strong>. Confirms the transaction was successful. Without it, changes may be lost on failure.
        </div>
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#ef4444">ROLLBACK</strong> — <strong>Undoes</strong> all changes in the transaction. Restores database to the previous consistent state. Used when an error occurs mid-transaction.
        </div>
      </div>
      <div class="sbox">⭐ <strong>Perfect interview answer:</strong> "Transactions group SQL operations into a single unit. COMMIT saves the transaction permanently, while ROLLBACK undoes changes if an error occurs."</div>
    </div>
  </div>

  <!-- 7. DELETE vs TRUNCATE vs DROP -->
  <div class="accordion" id="acc-dbms-del">
    <button class="accordion-header" onclick="toggleAcc('dbms-del')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">🗑️</span><span>7. DELETE vs TRUNCATE vs DROP</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-del">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Feature</th><th style="color:#fbbf24">DELETE</th><th style="color:#fb923c">TRUNCATE</th><th style="color:#f87171">DROP</th></tr></thead>
        <tbody>
          <tr><td>Type</td><td>DML</td><td>DDL</td><td>DDL</td></tr>
          <tr><td>Removes</td><td>Selected rows</td><td>All rows</td><td>Table itself</td></tr>
          <tr><td>WHERE clause</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr>
          <tr><td>Rollback possible</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr>
          <tr><td>Speed</td><td>Slower</td><td>Fast</td><td>Fast</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Memory:</strong> DELETE = selective (rollback safe) · TRUNCATE = wipe all rows (no undo) · DROP = delete entire table structure</div>
    </div>
  </div>

  <!-- 8. Deadlock in DBMS -->
  <div class="accordion" id="acc-dbms-deadlock">
    <button class="accordion-header" onclick="toggleAcc('dbms-deadlock')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">🔒</span><span>8. Deadlock in DBMS</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-deadlock">
      <div class="hbox">A <strong>deadlock</strong> is when two or more transactions wait indefinitely for resources held by each other — neither can proceed.</div>
      <div class="ybox">Example: T1 holds Resource A, waits for B. T2 holds Resource B, waits for A. → Circular wait → deadlock.</div>
      <p class="section-label">4 Coffman Conditions (ALL must be true for deadlock)</p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:7px;padding:9px 13px;font-size:12.5px"><strong style="color:#8b5cf6">Mutual Exclusion</strong> — resource can only be used by one transaction at a time</div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:7px;padding:9px 13px;font-size:12.5px"><strong style="color:#8b5cf6">Hold and Wait</strong> — transaction holds one resource and waits for another</div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:7px;padding:9px 13px;font-size:12.5px"><strong style="color:#8b5cf6">No Preemption</strong> — resource cannot be forcibly taken away</div>
        <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.15);border-radius:7px;padding:9px 13px;font-size:12.5px"><strong style="color:#8b5cf6">Circular Wait</strong> — transactions wait in a cycle (T1→T2→T1)</div>
      </div>
      <div class="sbox">✅ Interview line: "Deadlock occurs when transactions wait indefinitely due to circular resource dependency."</div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-dbms-qrev">
    <button class="accordion-header" onclick="toggleAcc('dbms-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-dbms-qrev">
      <div class="qrev-card"><span class="qrev-key">DBMS vs RDBMS</span><span class="qrev-val">Files vs Tables · No relations vs Relations via keys</span></div>
      <div class="qrev-card"><span class="qrev-key">Atomicity</span><span class="qrev-val">All-or-nothing · incomplete → ROLLBACK</span></div>
      <div class="qrev-card"><span class="qrev-key">Consistency</span><span class="qrev-val">Valid state → valid state · constraints always enforced</span></div>
      <div class="qrev-card"><span class="qrev-key">Isolation</span><span class="qrev-val">Concurrent = as if sequential · no interference</span></div>
      <div class="qrev-card"><span class="qrev-key">Durability</span><span class="qrev-val">Committed = permanent · survives crashes</span></div>
      <div class="qrev-card"><span class="qrev-key">Primary Key</span><span class="qrev-val">Unique + NOT NULL + one per table</span></div>
      <div class="qrev-card"><span class="qrev-key">Foreign Key</span><span class="qrev-val">Refers to PK of another table · can be NULL</span></div>
      <div class="qrev-card"><span class="qrev-key">1NF</span><span class="qrev-val">Atomic values only — no multi-valued columns</span></div>
      <div class="qrev-card"><span class="qrev-key">2NF</span><span class="qrev-val">No partial dependency — non-key depends on full PK</span></div>
      <div class="qrev-card"><span class="qrev-key">3NF</span><span class="qrev-val">No transitive dependency — non-key on non-key</span></div>
      <div class="qrev-card"><span class="qrev-key">Index</span><span class="qrev-val">B-Tree · faster SELECT · slower writes · extra storage</span></div>
      <div class="qrev-card"><span class="qrev-key">DELETE vs TRUNCATE vs DROP</span><span class="qrev-val">DML+WHERE+rollback · DDL all rows · DDL table gone</span></div>
      <div class="qrev-card"><span class="qrev-key">COMMIT / ROLLBACK</span><span class="qrev-val">Save permanently / Undo to previous state</span></div>
    </div>
  </div>

</div>
`;

const OS_CONTENT = `
<div class="content-area">

  <div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#ef4444">Interview scope</strong> — Focus on: Process vs Thread, CPU Scheduling (FCFS, Round Robin), Deadlock, Memory Management basics.
  </div>

  <!-- 1. What is OS -->
  <div class="accordion" id="acc-os-intro">
    <button class="accordion-header" onclick="toggleAcc('os-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#ef4444">🖥️</span><span>1. What is an Operating System?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-os-intro">
      <div class="hbox">An <strong>Operating System</strong> is system software that acts as an <strong>interface between the user and computer hardware</strong>. It manages CPU, memory, processes, files, and devices.</div>
      <p class="section-label">Main Functions of OS</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">
        <div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.15);border-radius:7px;padding:8px 13px;font-size:12.5px;color:var(--text)"><strong style="color:#ef4444">Process Management</strong> — create, schedule, terminate processes</div>
        <div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.15);border-radius:7px;padding:8px 13px;font-size:12.5px;color:var(--text)"><strong style="color:#ef4444">Memory Management</strong> — allocate/deallocate RAM</div>
        <div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.15);border-radius:7px;padding:8px 13px;font-size:12.5px;color:var(--text)"><strong style="color:#ef4444">File Management</strong> — organize, store, retrieve files</div>
        <div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.15);border-radius:7px;padding:8px 13px;font-size:12.5px;color:var(--text)"><strong style="color:#ef4444">Device Management</strong> — manage I/O devices via drivers</div>
      </div>
      <div class="sbox">✅ Also provides: security, user interface, and multitasking.</div>
    </div>
  </div>

  <!-- 2. Process vs Thread -->
  <div class="accordion" id="acc-os-process">
    <button class="accordion-header" onclick="toggleAcc('os-process')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#ef4444">⚙️</span><span>2. Process vs Thread</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-os-process">
      <div class="hbox"><strong>Process</strong> = a program in execution (includes code, data, memory, CPU time). &nbsp;|&nbsp; <strong>Thread</strong> = the smallest unit of execution within a process.</div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Process</th><th>Thread</th></tr></thead>
        <tbody>
          <tr><td>Independent program in execution</td><td>Sub-unit of a process</td></tr>
          <tr><td>Has its own memory space</td><td>Shares memory with other threads</td></tr>
          <tr><td>Heavyweight — more resources</td><td>Lightweight — fewer resources</td></tr>
          <tr><td>Slower to create and switch</td><td>Faster to create and switch</td></tr>
          <tr><td>If one crashes, others unaffected</td><td>If one crashes, can affect the process</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Example: Chrome browser = one process. Each tab = separate thread inside it sharing same memory.</div>
      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#ef4444">Q: What is a process?</strong><br>
          <span style="color:var(--text2)">A process is a program in execution that includes code, data, and system resources like memory and CPU time.</span>
        </div>
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#ef4444">Q: Difference between process and thread?</strong><br>
          <span style="color:var(--text2)">A process has its own memory space, while threads share the same memory within a process — making threads faster and lightweight.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. CPU Scheduling -->
  <div class="accordion" id="acc-os-sched">
    <button class="accordion-header" onclick="toggleAcc('os-sched')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#ef4444">📅</span><span>3. CPU Scheduling</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-os-sched">
      <div class="hbox"><strong>CPU Scheduling</strong> = the OS decides which process gets CPU time when multiple processes are ready to execute.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#10b981">FCFS — First Come First Serve</strong><br>
          <span style="color:var(--text2)">Processes execute in the <strong>order they arrive</strong>. Simple but can cause long waiting time (convoy effect — short jobs stuck behind long ones).</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#6366f1">Round Robin</strong><br>
          <span style="color:var(--text2)">Each process gets a <strong>fixed time slice</strong> (quantum) and runs cyclically. Fair and commonly used in <strong>time-sharing systems</strong>. No starvation.</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#f59e0b">Priority Scheduling</strong><br>
          <span style="color:var(--text2)">Process with the <strong>highest priority</strong> executes first. Can cause <strong>starvation</strong> — low priority processes may never run if higher priority processes keep arriving.</span>
        </div>
      </div>
      <div class="sbox">⭐ FCFS = simple/order of arrival · Round Robin = time slice/fair · Priority = highest first/starvation risk</div>
    </div>
  </div>

  <!-- 4. Deadlock -->
  <div class="accordion" id="acc-os-deadlock">
    <button class="accordion-header" onclick="toggleAcc('os-deadlock')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#ef4444">🔒</span><span>4. Deadlock, Starvation &amp; Multitasking</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-os-deadlock">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#ef4444">Deadlock</strong><br>
          <span style="color:var(--text2)">Occurs when multiple processes <strong>wait indefinitely for resources held by each other</strong>, so none can proceed. Requires all 4 Coffman conditions: mutual exclusion, hold-and-wait, no preemption, circular wait.</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#f59e0b">Starvation</strong><br>
          <span style="color:var(--text2)">A process <strong>never gets CPU time</strong> because higher-priority processes keep executing. Unlike deadlock (stuck together), starvation is a single process being indefinitely postponed.</span>
        </div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#10b981">Multitasking</strong><br>
          <span style="color:var(--text2)">Ability of an OS to <strong>run multiple programs simultaneously</strong> by sharing CPU time among them. The CPU rapidly switches between processes — giving the illusion of parallelism.</span>
        </div>
      </div>
      <div class="sbox">✅ Deadlock = circular wait (both stuck) · Starvation = one process never runs · Multitasking = CPU time sharing</div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-os-qrev">
    <button class="accordion-header" onclick="toggleAcc('os-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#ef4444">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-os-qrev">
      <div class="qrev-card"><span class="qrev-key">OS</span><span class="qrev-val">Interface between user and hardware · manages CPU, memory, files, devices</span></div>
      <div class="qrev-card"><span class="qrev-key">Process</span><span class="qrev-val">Program in execution · own memory · heavyweight</span></div>
      <div class="qrev-card"><span class="qrev-key">Thread</span><span class="qrev-val">Smallest execution unit · shares memory · lightweight · faster</span></div>
      <div class="qrev-card"><span class="qrev-key">FCFS</span><span class="qrev-val">Order of arrival · simple · convoy effect (long wait)</span></div>
      <div class="qrev-card"><span class="qrev-key">Round Robin</span><span class="qrev-val">Fixed time slice · cyclic · fair · no starvation</span></div>
      <div class="qrev-card"><span class="qrev-key">Priority Scheduling</span><span class="qrev-val">Highest priority first · risk of starvation</span></div>
      <div class="qrev-card"><span class="qrev-key">Deadlock</span><span class="qrev-val">Circular wait · all 4 Coffman conditions · none can proceed</span></div>
      <div class="qrev-card"><span class="qrev-key">Starvation</span><span class="qrev-val">Process never gets CPU · higher priority always wins</span></div>
      <div class="qrev-card"><span class="qrev-key">Multitasking</span><span class="qrev-val">Multiple programs via CPU time sharing</span></div>
    </div>
  </div>

</div>
`;

const CN_CONTENT = `
<div class="content-area">

  <div style="background:rgba(6,182,212,0.07);border:1px solid rgba(6,182,212,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#06b6d4">Interview scope</strong> — Focus on: TCP vs UDP, OSI model (7 layers), TCP/IP model (4 layers), DNS, IP address, types of networks.
  </div>

  <!-- 1. What is CN -->
  <div class="accordion" id="acc-cn-intro">
    <button class="accordion-header" onclick="toggleAcc('cn-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#06b6d4">🌐</span><span>1. What is a Computer Network?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-cn-intro">
      <div class="hbox">A <strong>computer network</strong> is a collection of interconnected devices that <strong>share data and resources</strong> such as files and internet connections.</div>
      <p class="section-label">Types of Networks</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Type</th><th>Coverage</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td style="color:#06b6d4">LAN</td><td>Local Area Network — small area (building/floor)</td><td>Office network, home Wi-Fi</td></tr>
          <tr><td style="color:#06b6d4">MAN</td><td>Metropolitan Area Network — city level</td><td>City-wide internet provider</td></tr>
          <tr><td style="color:#06b6d4">WAN</td><td>Wide Area Network — countries/continents</td><td>The Internet</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Real-life example: Your phone + laptop + Wi-Fi router = a LAN. You browse internet → data travels through WAN.</div>
    </div>
  </div>

  <!-- 2. IP, Protocol, DNS -->
  <div class="accordion" id="acc-cn-basics">
    <button class="accordion-header" onclick="toggleAcc('cn-basics')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#06b6d4">📡</span><span>2. IP Address, Protocol &amp; DNS</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-cn-basics">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(6,182,212,0.06);border:1px solid rgba(6,182,212,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#06b6d4">IP Address</strong><br>
          <span style="color:var(--text2)">A <strong>unique identifier</strong> assigned to each device on a network to enable communication. IPv4 = 32 bits → 4 octets (e.g., 192.168.1.1). IPv6 = 128 bits → created because IPv4 ran out of addresses.</span>
        </div>
        <div style="background:rgba(6,182,212,0.06);border:1px solid rgba(6,182,212,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#06b6d4">Protocol</strong><br>
          <span style="color:var(--text2)">A <strong>set of rules</strong> that defines how data is transmitted and received between devices on a network.</span>
        </div>
        <div style="background:rgba(6,182,212,0.06);border:1px solid rgba(6,182,212,0.18);border-radius:8px;padding:13px 15px;font-size:13px">
          <strong style="color:#06b6d4">DNS — Domain Name System</strong><br>
          <span style="color:var(--text2)">Converts <strong>human-readable domain names into IP addresses</strong>. Like a phone book for the internet. You type "google.com" → DNS resolves it to "142.250.x.x".</span>
        </div>
      </div>
      <div style="background:rgba(6,182,212,0.06);border:1px solid rgba(6,182,212,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
        <strong style="color:#06b6d4">Q: Why does IPv4 have 4 parts?</strong><br>
        <span style="color:var(--text2)">IPv4 is 32 bits long, divided into 4 equal parts of 8 bits each (octets). So: 32 bits = 8+8+8+8 = 4 octets → written as 192.168.1.1. Interview line: "IPv4 has 4 parts because it is 32 bits divided into four 8-bit octets."</span>
      </div>
    </div>
  </div>

  <!-- 3. TCP vs UDP -->
  <div class="accordion" id="acc-cn-tcp">
    <button class="accordion-header" onclick="toggleAcc('cn-tcp')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#06b6d4">🔀</span><span>3. TCP vs UDP</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-cn-tcp">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Feature</th><th style="color:#10b981">TCP</th><th style="color:#f59e0b">UDP</th></tr></thead>
        <tbody>
          <tr><td>Type</td><td>Connection-oriented</td><td>Connectionless</td></tr>
          <tr><td>Reliability</td><td>Reliable — guarantees delivery</td><td>Unreliable — no guarantee</td></tr>
          <tr><td>Speed</td><td>Slower (overhead for reliability)</td><td>Faster (no overhead)</td></tr>
          <tr><td>Order</td><td>Maintains packet order</td><td>No order guarantee</td></tr>
          <tr><td>Use case</td><td>HTTP, file transfer, email</td><td>Video streaming, gaming, DNS, VoIP</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>One-liner:</strong> TCP = reliable, ordered, slower · UDP = fast, no guarantee, used for real-time data</div>
    </div>
  </div>

  <!-- 4. OSI Model -->
  <div class="accordion" id="acc-cn-osi">
    <button class="accordion-header" onclick="toggleAcc('cn-osi')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#06b6d4">📚</span><span>4. OSI Model (7 Layers)</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-cn-osi">
      <div class="hbox">OSI model = 7 layers describing how data moves from sender to receiver (physical transmission → application interaction). It is a <strong>theoretical reference model</strong>.</div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>#</th><th>Layer</th><th>What it does</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td style="color:#06b6d4">7</td><td>Application</td><td>User interaction, network services</td><td>HTTP, FTP, SMTP</td></tr>
          <tr><td style="color:#06b6d4">6</td><td>Presentation</td><td>Data format, encryption, compression</td><td>SSL, JPEG</td></tr>
          <tr><td style="color:#06b6d4">5</td><td>Session</td><td>Manages sessions/connections</td><td>NetBIOS</td></tr>
          <tr><td style="color:#06b6d4">4</td><td>Transport</td><td>Reliable delivery, TCP/UDP</td><td>TCP, UDP</td></tr>
          <tr><td style="color:#06b6d4">3</td><td>Network</td><td>Routing, IP addressing</td><td>IP, Router</td></tr>
          <tr><td style="color:#06b6d4">2</td><td>Data Link</td><td>MAC address, error detection</td><td>Ethernet, Switch</td></tr>
          <tr><td style="color:#06b6d4">1</td><td>Physical</td><td>Actual bits over hardware</td><td>Cable, Wi-Fi</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Memory trick (top to bottom): <strong>All People Seem To Need Data Processing</strong> (Application → Physical)</div>
    </div>
  </div>

  <!-- 5. TCP/IP Model -->
  <div class="accordion" id="acc-cn-tcpip">
    <button class="accordion-header" onclick="toggleAcc('cn-tcpip')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#06b6d4">🔧</span><span>5. TCP/IP Model &amp; OSI vs TCP/IP</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-cn-tcpip">
      <div class="hbox"><strong>TCP/IP</strong> is the <strong>practical</strong> networking model used in real-world internet. Has 4 layers vs OSI's 7.</div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>TCP/IP Layer</th><th>Maps to OSI</th></tr></thead>
        <tbody>
          <tr><td style="color:#06b6d4">Application (Layer 4)</td><td>Application + Presentation + Session (OSI 5,6,7)</td></tr>
          <tr><td style="color:#06b6d4">Transport (Layer 3)</td><td>Transport (OSI 4)</td></tr>
          <tr><td style="color:#06b6d4">Internet (Layer 2)</td><td>Network (OSI 3)</td></tr>
          <tr><td style="color:#06b6d4">Network Access (Layer 1)</td><td>Data Link + Physical (OSI 1,2)</td></tr>
        </tbody>
      </table></div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th>OSI</th><th>TCP/IP</th></tr></thead>
        <tbody>
          <tr><td>Theoretical reference model</td><td>Practical — used in real networking</td></tr>
          <tr><td>7 layers</td><td>4 layers</td></tr>
          <tr><td>Each layer strictly separate</td><td>Layers can overlap</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-cn-qrev">
    <button class="accordion-header" onclick="toggleAcc('cn-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#06b6d4">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-cn-qrev">
      <div class="qrev-card"><span class="qrev-key">LAN / MAN / WAN</span><span class="qrev-val">Building · City · Country/Internet</span></div>
      <div class="qrev-card"><span class="qrev-key">IP Address</span><span class="qrev-val">Unique device identifier · IPv4=32bit · IPv6=128bit</span></div>
      <div class="qrev-card"><span class="qrev-key">DNS</span><span class="qrev-val">Domain name → IP address (phone book of internet)</span></div>
      <div class="qrev-card"><span class="qrev-key">TCP</span><span class="qrev-val">Connection-oriented · reliable · ordered · slower</span></div>
      <div class="qrev-card"><span class="qrev-key">UDP</span><span class="qrev-val">Connectionless · fast · no guarantee · streaming/gaming</span></div>
      <div class="qrev-card"><span class="qrev-key">OSI (7 layers)</span><span class="qrev-val">Physical→Data Link→Network→Transport→Session→Presentation→Application</span></div>
      <div class="qrev-card"><span class="qrev-key">TCP/IP (4 layers)</span><span class="qrev-val">Network Access → Internet → Transport → Application</span></div>
      <div class="qrev-card"><span class="qrev-key">OSI vs TCP/IP</span><span class="qrev-val">Theoretical (7) vs Practical real-world (4)</span></div>
      <div class="qrev-card"><span class="qrev-key">IPv4 = 4 parts</span><span class="qrev-val">32 bits ÷ 4 = 8 bits per octet → 192.168.1.1</span></div>
    </div>
  </div>

</div>
`;

const GIT_CONTENT = `
<div class="content-area">

  <div style="background:rgba(249,115,22,0.07);border:1px solid rgba(249,115,22,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#f97316">Interview scope</strong> — Know the Git workflow (add → commit → push), branching, merge vs rebase, and what GitHub is. These come up when they ask about your project.
  </div>

  <!-- 1. Git & GitHub -->
  <div class="accordion" id="acc-git-intro">
    <button class="accordion-header" onclick="toggleAcc('git-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#f97316">🌿</span><span>1. Git vs GitHub</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-git-intro">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Git</th><th>GitHub</th></tr></thead>
        <tbody>
          <tr><td>A tool (version control system)</td><td>An online platform (hosts repositories)</td></tr>
          <tr><td>Works locally on your machine</td><td>Works online (cloud)</td></tr>
          <tr><td>Can work offline</td><td>Needs internet</td></tr>
          <tr><td>Tracks code versions</td><td>Hosts, shares, and collaborates on code</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Git manages versions locally, GitHub hosts them remotely."</div>
      <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px;margin-top:8px">
        <strong style="color:#f97316">Q: What is Git?</strong><br>
        <span style="color:var(--text2)">Git is a distributed version control system used to track changes in source code — helps manage versions, work safely in teams, and revert to previous states.</span>
      </div>
    </div>
  </div>

  <!-- 2. 3 Areas & File States -->
  <div class="accordion" id="acc-git-areas">
    <button class="accordion-header" onclick="toggleAcc('git-areas')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#f97316">📂</span><span>2. Working Directory, Staging Area &amp; Repository</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-git-areas">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f97316">Working Directory</strong> — where you write and edit code. Files can be <em>Untracked</em> (new, Git doesn't know about them) or <em>Modified</em> (changed but not staged).
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f97316">Staging Area</strong> — where selected changes are kept before commit. File is <em>Staged</em> = ready to commit. Use <code style="background:rgba(249,115,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">git add .</code>
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f97316">Repository</strong> — where commits (history/snapshots) are stored. Local repo on your machine, remote repo on GitHub.
        </div>
      </div>
      <div class="sbox">⭐ <strong>Flow:</strong> Working Directory → <code style="background:rgba(249,115,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">git add</code> → Staging Area → <code style="background:rgba(249,115,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">git commit</code> → Local Repo → <code style="background:rgba(249,115,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">git push</code> → GitHub</div>
    </div>
  </div>

  <!-- 3. Core Commands -->
  <div class="accordion" id="acc-git-commands">
    <button class="accordion-header" onclick="toggleAcc('git-commands')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#f97316">⌨️</span><span>3. Core Git Commands</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-git-commands">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Command</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#f97316"><code>git init</code></td><td>Initialize a new Git repository</td></tr>
          <tr><td style="color:#f97316"><code>git add .</code></td><td>Stage all changes to staging area</td></tr>
          <tr><td style="color:#f97316"><code>git commit -m "msg"</code></td><td>Save staged changes as a version snapshot in local repo</td></tr>
          <tr><td style="color:#f97316"><code>git push</code></td><td>Upload local commits to remote repository (GitHub)</td></tr>
          <tr><td style="color:#f97316"><code>git pull</code></td><td>Download latest changes from remote to local</td></tr>
          <tr><td style="color:#f97316"><code>git clone &lt;url&gt;</code></td><td>Copy a remote repository to local machine</td></tr>
          <tr><td style="color:#f97316"><code>git status</code></td><td>Show current state of files (untracked/modified/staged)</td></tr>
          <tr><td style="color:#f97316"><code>git log</code></td><td>View commit history</td></tr>
          <tr><td style="color:#f97316"><code>git remote -v</code></td><td>Show linked remote repository URLs</td></tr>
          <tr><td style="color:#f97316"><code>git revert &lt;id&gt;</code></td><td>Safely undo a commit by creating a new commit</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>commit vs push:</strong> commit = local save (offline) · push = upload to remote (needs internet)</div>
    </div>
  </div>

  <!-- 4. Branch, Merge, Rebase -->
  <div class="accordion" id="acc-git-branch">
    <button class="accordion-header" onclick="toggleAcc('git-branch')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#f97316">🌿</span><span>4. Branching — Merge vs Rebase</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-git-branch">
      <div class="hbox">A <strong>branch</strong> is a separate line of development — work on features safely without affecting the main code.</div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Branch commands</span></div>
        <div class="code-body"><span class="cmt"># List / create branches</span>
git branch
git checkout -b feature-branch   <span class="cmt"># create + switch</span>
git checkout main                 <span class="cmt"># switch to main</span>

<span class="cmt"># Merge feature into main</span>
git checkout main
git merge feature-branch

<span class="cmt"># Rebase feature onto main</span>
git rebase main</div>
      </div>
      <div class="tbl-wrap" style="margin-top:12px"><table class="bit-table">
        <thead><tr><th>Merge</th><th>Rebase</th></tr></thead>
        <tbody>
          <tr><td>Keeps full history</td><td>Rewrites history (cleaner)</td></tr>
          <tr><td>Creates a merge commit</td><td>No merge commit</td></tr>
          <tr><td>Safer for shared/team branches</td><td>Use on private branches only</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Merge is safer for team branches; rebase keeps history clean but rewrites it."</div>
    </div>
  </div>

  <!-- 5. PR, Fork, Merge Conflict -->
  <div class="accordion" id="acc-git-collab">
    <button class="accordion-header" onclick="toggleAcc('git-collab')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#f97316">🤝</span><span>5. Pull Request, Fork &amp; Merge Conflict</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-git-collab">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f97316">Pull Request (PR)</strong> — A request to review and merge your code into another branch. Used for code review, safe merging, and team collaboration.
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f97316">Fork</strong> — A personal copy of another repository. Used for open-source contributions when you don't have direct access to the original repo.
        </div>
        <div style="background:rgba(249,115,22,0.06);border:1px solid rgba(249,115,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f97316">Merge Conflict</strong> — Occurs when Git cannot automatically merge changes (two people edited the same line). Fix: edit file manually → remove conflict markers (&lt;&lt;&lt;&lt;&lt; / ===== / &gt;&gt;&gt;&gt;&gt;) → git add → git commit.
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-git-qrev">
    <button class="accordion-header" onclick="toggleAcc('git-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#f97316">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-git-qrev">
      <div class="qrev-card"><span class="qrev-key">Git vs GitHub</span><span class="qrev-val">Tool (local VCS) vs Platform (online hosting)</span></div>
      <div class="qrev-card"><span class="qrev-key">3 Areas</span><span class="qrev-val">Working Dir → Staging Area → Repository</span></div>
      <div class="qrev-card"><span class="qrev-key">git add</span><span class="qrev-val">Move to staging area · select files for commit</span></div>
      <div class="qrev-card"><span class="qrev-key">git commit</span><span class="qrev-val">Local save · creates version snapshot · offline</span></div>
      <div class="qrev-card"><span class="qrev-key">git push</span><span class="qrev-val">Upload commits to GitHub · needs internet</span></div>
      <div class="qrev-card"><span class="qrev-key">commit vs push</span><span class="qrev-val">Local save vs remote upload</span></div>
      <div class="qrev-card"><span class="qrev-key">Branch</span><span class="qrev-val">Separate dev line · safe feature work</span></div>
      <div class="qrev-card"><span class="qrev-key">Merge vs Rebase</span><span class="qrev-val">Merge = safe+history · Rebase = clean history (rewrites)</span></div>
      <div class="qrev-card"><span class="qrev-key">Merge Conflict</span><span class="qrev-val">Two edits clash → resolve manually → add → commit</span></div>
      <div class="qrev-card"><span class="qrev-key">Pull Request</span><span class="qrev-val">Request to review + merge code</span></div>
      <div class="qrev-card"><span class="qrev-key">Fork</span><span class="qrev-val">Personal copy of another repo · for open-source</span></div>
      <div class="qrev-card"><span class="qrev-key">git revert</span><span class="qrev-val">Safe undo · creates new commit · safe for shared repos</span></div>
    </div>
  </div>

</div>
`;

const BIT_MANIPULATION_CONTENT = `
<div class="content-area">

  <!-- 1. Basic Bitwise Operators -->
  <div class="accordion" id="acc-ops">
    <button class="accordion-header" onclick="toggleAcc('ops')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">⊕</span>
        <span>1. Basic Bitwise Operators</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-ops">

      <p class="section-label">AND (&amp;) — Both bits must be 1</p>
      <div class="tbl-wrap">
        <table class="bit-table">
          <thead><tr><th>A</th><th>B</th><th>A &amp; B</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>1</td><td>1</td><td style="color:#10b981;font-weight:600">1</td></tr>
          </tbody>
        </table>
      </div>
      <div class="hbox"><strong>Example:</strong> <code style="font-family:'JetBrains Mono',monospace">1101 &amp; 1011 = 1001</code></div>

      <p class="section-label" style="margin-top:12px">OR (|) — At least one bit is 1</p>
      <div class="tbl-wrap">
        <table class="bit-table">
          <thead><tr><th>A</th><th>B</th><th>A | B</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td style="color:#10b981;font-weight:600">1</td></tr>
            <tr><td>1</td><td>0</td><td style="color:#10b981;font-weight:600">1</td></tr>
            <tr><td>1</td><td>1</td><td style="color:#10b981;font-weight:600">1</td></tr>
          </tbody>
        </table>
      </div>
      <div class="hbox"><strong>Example:</strong> <code style="font-family:'JetBrains Mono',monospace">1101 | 1011 = 1111</code></div>

      <p class="section-label" style="margin-top:12px">XOR (^) — Different bits → 1</p>
      <div class="tbl-wrap">
        <table class="bit-table">
          <thead><tr><th>A</th><th>B</th><th>A ^ B</th></tr></thead>
          <tbody>
            <tr><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>0</td><td>1</td><td style="color:#10b981;font-weight:600">1</td></tr>
            <tr><td>1</td><td>0</td><td style="color:#10b981;font-weight:600">1</td></tr>
            <tr><td>1</td><td>1</td><td>0</td></tr>
          </tbody>
        </table>
      </div>
      <div class="hbox"><strong>Example:</strong> <code style="font-family:'JetBrains Mono',monospace">1101 ^ 1011 = 0110</code></div>

    </div>
  </div>

  <!-- 2. Left Shift -->
  <div class="accordion" id="acc-lshift">
    <button class="accordion-header" onclick="toggleAcc('lshift')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">«</span>
        <span>2. Left Shift (&lt;&lt;)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-lshift">
      <div class="sbox"><strong>Multiplies by powers of 2</strong></div>
      <div class="bit-op-grid">
        <div class="formula-card"><div class="formula-name">Left Shift by 1</div><div class="formula-val">n &lt;&lt; 1 = n × 2</div></div>
        <div class="formula-card"><div class="formula-name">Left Shift by 2</div><div class="formula-val">n &lt;&lt; 2 = n × 4</div></div>
        <div class="formula-card"><div class="formula-name">Left Shift by 3</div><div class="formula-val">n &lt;&lt; 3 = n × 8</div></div>
        <div class="formula-card"><div class="formula-name">Left Shift by k</div><div class="formula-val">n &lt;&lt; k = n × 2<sup>k</sup></div></div>
      </div>
      <div class="hbox"><strong>Example:</strong> 13 = <code style="font-family:'JetBrains Mono',monospace">1101</code>&nbsp;&nbsp;→&nbsp;&nbsp;13&lt;&lt;1 = <code style="font-family:'JetBrains Mono',monospace">11010</code> = <strong>26</strong></div>
    </div>
  </div>

  <!-- 3. Right Shift -->
  <div class="accordion" id="acc-rshift">
    <button class="accordion-header" onclick="toggleAcc('rshift')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">»</span>
        <span>3. Right Shift (&gt;&gt;)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-rshift">
      <div class="sbox"><strong>Divides by powers of 2</strong> (integer division)</div>
      <div class="bit-op-grid">
        <div class="formula-card"><div class="formula-name">Right Shift by 1</div><div class="formula-val">n &gt;&gt; 1 = n / 2</div></div>
        <div class="formula-card"><div class="formula-name">Right Shift by 2</div><div class="formula-val">n &gt;&gt; 2 = n / 4</div></div>
        <div class="formula-card"><div class="formula-name">Right Shift by 3</div><div class="formula-val">n &gt;&gt; 3 = n / 8</div></div>
        <div class="formula-card"><div class="formula-name">Right Shift by k</div><div class="formula-val">n &gt;&gt; k = n / 2<sup>k</sup></div></div>
      </div>
      <div class="hbox"><strong>Example:</strong> 13 = <code style="font-family:'JetBrains Mono',monospace">1101</code>&nbsp;&nbsp;→&nbsp;&nbsp;13&gt;&gt;2 = <code style="font-family:'JetBrains Mono',monospace">0011</code> = <strong>3</strong></div>
    </div>
  </div>

  <!-- 4. Decimal → Binary -->
  <div class="accordion" id="acc-d2b">
    <button class="accordion-header" onclick="toggleAcc('d2b')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">10→2</span>
        <span>4. Decimal → Binary</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-d2b">
      <div class="ybox"><strong>Key lines:</strong> <code style="font-family:'JetBrains Mono',monospace">lastBit = n &amp; 1;&nbsp;&nbsp;n = n &gt;&gt; 1;</code></div>
      <p class="section-label">Trace: 13 → binary</p>
      <div class="tbl-wrap">
        <table class="bit-table">
          <thead><tr><th>n</th><th>n &amp; 1 (bit)</th></tr></thead>
          <tbody>
            <tr><td>13</td><td>1</td></tr>
            <tr><td>6</td><td>0</td></tr>
            <tr><td>3</td><td>1</td></tr>
            <tr><td>1</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
      <div class="sbox">Bits obtained: <code style="font-family:'JetBrains Mono',monospace">1 0 1 1</code> → Reverse → <strong style="color:#10b981">1101</strong></div>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div>
          <span style="font-size:11px;color:var(--text3)">Decimal to Binary — Java</span>
        </div>
        <div class="code-body"><span class="typ">String</span> toBinary(<span class="kw">int</span> n) {
    <span class="typ">StringBuilder</span> sb = <span class="kw">new</span> <span class="typ">StringBuilder</span>();
    <span class="kw">while</span> (n > <span class="num">0</span>) {
        sb.append(n &amp; <span class="num">1</span>);   <span class="cmt">// get last bit</span>
        n = n &gt;&gt; <span class="num">1</span>;          <span class="cmt">// right shift</span>
    }
    <span class="kw">return</span> sb.reverse().toString();
}</div>
      </div>
    </div>
  </div>

  <!-- 5. Binary → Decimal -->
  <div class="accordion" id="acc-b2d">
    <button class="accordion-header" onclick="toggleAcc('b2d')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">2→10</span>
        <span>5. Binary → Decimal</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-b2d">
      <div class="ybox"><strong>Key line:</strong> <code style="font-family:'JetBrains Mono',monospace">res = (res &lt;&lt; 1) + bit;</code>&nbsp;&nbsp; ≡ &nbsp;&nbsp;<code style="font-family:'JetBrains Mono',monospace">res = res * 2 + bit;</code></div>
      <p class="section-label">Trace: 1101 → decimal</p>
      <div class="tbl-wrap">
        <table class="bit-table">
          <thead><tr><th>Bit</th><th>res</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>1</td></tr>
            <tr><td>1</td><td>3</td></tr>
            <tr><td>0</td><td>6</td></tr>
            <tr><td>1</td><td>13</td></tr>
          </tbody>
        </table>
      </div>
      <div class="sbox">Output: <strong style="color:#10b981">13</strong></div>
    </div>
  </div>

  <!-- 6. Power of 2 Check -->
  <div class="accordion" id="acc-pow2">
    <button class="accordion-header" onclick="toggleAcc('pow2')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">2ⁿ</span>
        <span>6. Power of 2 Check</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-pow2">
      <div class="formula-card">
        <div class="formula-name">Formula</div>
        <div class="formula-val">(n &gt; 0) &amp;&amp; ((n &amp; (n-1)) == 0)</div>
        <div class="formula-desc">If n has only 1 bit set, n-1 flips all lower bits → AND = 0</div>
      </div>
      <div class="bit-op-grid">
        <div>
          <p class="section-label">16 — Is power of 2 ✅</p>
          <div class="tbl-wrap">
            <table class="bit-table">
              <thead><tr><th></th><th>Binary</th></tr></thead>
              <tbody>
                <tr><td>16</td><td>10000</td></tr>
                <tr><td>15</td><td>01111</td></tr>
                <tr><td style="color:#10b981">16 &amp; 15</td><td style="color:#10b981;font-weight:700">00000 = 0 ✅</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p class="section-label">14 — Not power of 2 ❌</p>
          <div class="tbl-wrap">
            <table class="bit-table">
              <thead><tr><th></th><th>Binary</th></tr></thead>
              <tbody>
                <tr><td>14</td><td>1110</td></tr>
                <tr><td>13</td><td>1101</td></tr>
                <tr><td style="color:#ef4444">14 &amp; 13</td><td style="color:#ef4444;font-weight:700">1100 ≠ 0 ❌</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="wbox">⚠ <strong>Remember:</strong> n-1 means subtract 1 from the whole number, NOT remove the last bit.</div>
    </div>
  </div>

  <!-- 7. What is 1<<k -->
  <div class="accordion" id="acc-mask">
    <button class="accordion-header" onclick="toggleAcc('mask')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">1&lt;&lt;k</span>
        <span>7. What is 1&lt;&lt;k? (Bitmask)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-mask">
      <div class="sbox">Creates a mask with <strong>only the k<sup>th</sup> bit set</strong> — "Put a single 1 at position k"</div>
      <div class="tbl-wrap">
        <table class="bit-table">
          <thead><tr><th>Expression</th><th>Binary</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1 &lt;&lt; 0</td><td>0001</td><td>1</td></tr>
            <tr><td>1 &lt;&lt; 1</td><td>0010</td><td>2</td></tr>
            <tr><td>1 &lt;&lt; 2</td><td>0100</td><td>4</td></tr>
            <tr><td>1 &lt;&lt; 3</td><td>1000</td><td>8</td></tr>
            <tr><td>1 &lt;&lt; 4</td><td>10000</td><td>16</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 8. Check kth bit -->
  <div class="accordion" id="acc-kth">
    <button class="accordion-header" onclick="toggleAcc('kth')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">k<sup>th</sup></span>
        <span>8. Check k<sup>th</sup> Bit</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-kth">
      <div class="formula-card">
        <div class="formula-name">Formula</div>
        <div class="formula-val">(n &amp; (1 &lt;&lt; k)) != 0</div>
        <div class="formula-desc">If result ≠ 0, the k<sup>th</sup> bit is SET; if result = 0, it's NOT set</div>
      </div>
      <p class="section-label">Example: n = 14 = 1110</p>
      <div class="bit-op-grid">
        <div>
          <div class="sbox">Check k=2 (bit IS set ✅)<br><code style="font-family:'JetBrains Mono',monospace">1110 &amp; 0100 = 0100 ≠ 0</code></div>
        </div>
        <div>
          <div class="wbox">Check k=0 (bit NOT set ❌)<br><code style="font-family:'JetBrains Mono',monospace">1110 &amp; 0001 = 0000 = 0</code></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 9. Set the Ith Bit -->
  <div class="accordion" id="acc-setbit">
    <button class="accordion-header" onclick="toggleAcc('setbit')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">|</span>
        <span>9. Set the I<sup>th</sup> Bit</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-setbit">
      <div class="formula-card">
        <div class="formula-name">Formula</div>
        <div class="formula-val">n = n | (1 &lt;&lt; i)</div>
        <div class="formula-desc">OR with a mask that has only the i<sup>th</sup> bit as 1 — forces that bit to become 1</div>
      </div>
      <div class="bit-op-grid">
        <div>
          <div class="sbox">Set bit 1 of n=5 (101)<br><code style="font-family:'JetBrains Mono',monospace">101 | 010 = 111 = 7</code></div>
        </div>
        <div>
          <div class="hbox">Already set? No problem!<br><code style="font-family:'JetBrains Mono',monospace">111 | 010 = 111 = 7</code> (unchanged)</div>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div>
          <span style="font-size:11px;color:var(--text3)">Set Ith Bit — Java</span>
        </div>
        <div class="code-body"><span class="kw">int</span> <span class="fn">setIthBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> i) {
    <span class="kw">return</span> n | (<span class="num">1</span> &lt;&lt; i);
}</div>
      </div>
    </div>
  </div>

  <!-- 10. Clear the Ith Bit -->
  <div class="accordion" id="acc-clearbit">
    <button class="accordion-header" onclick="toggleAcc('clearbit')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">&amp;~</span>
        <span>10. Clear the I<sup>th</sup> Bit</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-clearbit">
      <div class="formula-card">
        <div class="formula-name">Formula</div>
        <div class="formula-val">n = n &amp; ~(1 &lt;&lt; i)</div>
        <div class="formula-desc">AND with inverted mask (~) — the i<sup>th</sup> position becomes 0, all others stay the same</div>
      </div>
      <div class="bit-op-grid">
        <div>
          <div class="ybox">Clear bit 1 of n=7 (111)<br><code style="font-family:'JetBrains Mono',monospace">~(010) = 101<br>111 &amp; 101 = 101 = 5</code></div>
        </div>
        <div>
          <div class="wbox">Already 0? Still 0!<br><code style="font-family:'JetBrains Mono',monospace">101 &amp; 101 = 101 = 5</code> (unchanged)</div>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div>
          <span style="font-size:11px;color:var(--text3)">Clear Ith Bit — Java</span>
        </div>
        <div class="code-body"><span class="kw">int</span> <span class="fn">clearIthBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> i) {
    <span class="kw">return</span> n &amp; ~(<span class="num">1</span> &lt;&lt; i);
}</div>
      </div>
    </div>
  </div>

  <!-- 11. Toggle Kth Bit -->
  <div class="accordion" id="acc-toggle">
    <button class="accordion-header" onclick="toggleAcc('toggle')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">^</span>
        <span>11. Toggle K<sup>th</sup> Bit</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-toggle">
      <div class="formula-card">
        <div class="formula-name">Formula</div>
        <div class="formula-val">n = n ^ (1 &lt;&lt; k)</div>
        <div class="formula-desc">XOR with mask — flips the k<sup>th</sup> bit: 0→1 and 1→0</div>
      </div>
      <div class="bit-op-grid">
        <div>
          <div class="sbox">Toggle bit 1 of n=5 (101)<br><code style="font-family:'JetBrains Mono',monospace">101 ^ 010 = 111 = 7</code> (0→1 ✅)</div>
        </div>
        <div>
          <div class="hbox">Toggle bit 1 of n=7 (111)<br><code style="font-family:'JetBrains Mono',monospace">111 ^ 010 = 101 = 5</code> (1→0 ✅)</div>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div>
          <span style="font-size:11px;color:var(--text3)">Toggle Kth Bit — Java</span>
        </div>
        <div class="code-body"><span class="kw">int</span> <span class="fn">toggleKthBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> k) {
    <span class="kw">return</span> n ^ (<span class="num">1</span> &lt;&lt; k);
}</div>
      </div>
    </div>
  </div>

  <!-- 12. Remove Kth Bit -->
  <div class="accordion" id="acc-removebit">
    <button class="accordion-header" onclick="toggleAcc('removebit')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">✂</span>
        <span>12. Remove K<sup>th</sup> Bit (unset rightmost set bit)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-removebit">
      <div class="formula-card">
        <div class="formula-name">Formula — Remove specific k<sup>th</sup> bit</div>
        <div class="formula-val">n = n &amp; ~(1 &lt;&lt; k)</div>
        <div class="formula-desc">Same as Clear — AND with inverted mask forces bit k to 0</div>
      </div>
      <div class="formula-card" style="margin-top:8px">
        <div class="formula-name">Formula — Remove rightmost set bit (classic trick)</div>
        <div class="formula-val">n = n &amp; (n - 1)</div>
        <div class="formula-desc">Subtracting 1 flips the lowest set bit and all bits below it → AND zeroes them all out</div>
      </div>
      <div class="bit-op-grid">
        <div>
          <p class="section-label">Remove rightmost set bit: n=12 (1100)</p>
          <div class="tbl-wrap">
            <table class="bit-table">
              <thead><tr><th></th><th>Binary</th></tr></thead>
              <tbody>
                <tr><td>12</td><td>1100</td></tr>
                <tr><td>11</td><td>1011</td></tr>
                <tr><td style="color:#10b981">12 &amp; 11</td><td style="color:#10b981;font-weight:700">1000 = 8 ✅</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p class="section-label">Remove rightmost set bit: n=6 (0110)</p>
          <div class="tbl-wrap">
            <table class="bit-table">
              <thead><tr><th></th><th>Binary</th></tr></thead>
              <tbody>
                <tr><td>6</td><td>0110</td></tr>
                <tr><td>5</td><td>0101</td></tr>
                <tr><td style="color:#10b981">6 &amp; 5</td><td style="color:#10b981;font-weight:700">0100 = 4 ✅</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div>
          <span style="font-size:11px;color:var(--text3)">Remove Bit — Java</span>
        </div>
        <div class="code-body"><span class="cmt">// Remove specific kth bit</span>
<span class="kw">int</span> <span class="fn">removeKthBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> k) {
    <span class="kw">return</span> n &amp; ~(<span class="num">1</span> &lt;&lt; k);
}

<span class="cmt">// Remove rightmost set bit (classic)</span>
<span class="kw">int</span> <span class="fn">removeRightmostSetBit</span>(<span class="kw">int</span> n) {
    <span class="kw">return</span> n &amp; (n - <span class="num">1</span>);
}</div>
      </div>
    </div>
  </div>

  <!-- 13. Check Even or Odd -->
  <div class="accordion" id="acc-evenodd">
    <button class="accordion-header" onclick="toggleAcc('evenodd')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">2÷</span>
        <span>13. Check Even or Odd using Bit</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-evenodd">
      <div class="formula-card">
        <div class="formula-name">Formula</div>
        <div class="formula-val">(n &amp; 1) == 0 → Even &nbsp;|&nbsp; (n &amp; 1) == 1 → Odd</div>
        <div class="formula-desc">The last (LSB) bit is always 0 for even numbers and 1 for odd numbers</div>
      </div>
      <div class="ybox" style="margin-bottom:10px"><strong>Why?</strong> Any even number in binary ends in <code style="font-family:'JetBrains Mono',monospace">0</code>. Any odd number ends in <code style="font-family:'JetBrains Mono',monospace">1</code>. AND with 1 isolates just that last bit.</div>
      <div class="bit-op-grid">
        <div>
          <p class="section-label">n = 6 (0110) — Even ✅</p>
          <div class="tbl-wrap">
            <table class="bit-table">
              <thead><tr><th></th><th>Binary</th></tr></thead>
              <tbody>
                <tr><td>6</td><td>0110</td></tr>
                <tr><td>1</td><td>0001</td></tr>
                <tr><td style="color:#10b981">6 &amp; 1</td><td style="color:#10b981;font-weight:700">0000 = 0 → EVEN</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p class="section-label">n = 7 (0111) — Odd ✅</p>
          <div class="tbl-wrap">
            <table class="bit-table">
              <thead><tr><th></th><th>Binary</th></tr></thead>
              <tbody>
                <tr><td>7</td><td>0111</td></tr>
                <tr><td>1</td><td>0001</td></tr>
                <tr><td style="color:#f472b6">7 &amp; 1</td><td style="color:#f472b6;font-weight:700">0001 = 1 → ODD</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div>
          <span style="font-size:11px;color:var(--text3)">Even or Odd — Java</span>
        </div>
        <div class="code-body"><span class="typ">String</span> <span class="fn">evenOrOdd</span>(<span class="kw">int</span> n) {
    <span class="kw">return</span> (n &amp; <span class="num">1</span>) == <span class="num">0</span> ? <span class="str">"Even"</span> : <span class="str">"Odd"</span>;
}

<span class="cmt">// Faster than n % 2 == 0 — no division needed!</span></div>
      </div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-qrev">
    <button class="accordion-header" onclick="toggleAcc('qrev')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#14b8a6">⚡</span>
        <span>Quick Revision Cheatsheet</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-qrev">
      <div class="qrev-card"><span class="qrev-key">AND</span><span class="qrev-val">1 &amp; 1 = 1 · otherwise 0</span></div>
      <div class="qrev-card"><span class="qrev-key">OR</span><span class="qrev-val">0 | 0 = 0 · otherwise 1</span></div>
      <div class="qrev-card"><span class="qrev-key">XOR</span><span class="qrev-val">Same → 0 · Different → 1</span></div>
      <div class="qrev-card"><span class="qrev-key">Left Shift</span><span class="qrev-val">n &lt;&lt; k = n × 2<sup>k</sup></span></div>
      <div class="qrev-card"><span class="qrev-key">Right Shift</span><span class="qrev-val">n &gt;&gt; k = n / 2<sup>k</sup></span></div>
      <div class="qrev-card"><span class="qrev-key">Decimal → Binary</span><span class="qrev-val">lastBit = n&amp;1 · n&gt;&gt;=1</span></div>
      <div class="qrev-card"><span class="qrev-key">Binary → Decimal</span><span class="qrev-val">res = (res&lt;&lt;1) + bit</span></div>
      <div class="qrev-card"><span class="qrev-key">Power of 2</span><span class="qrev-val">(n &amp; (n-1)) == 0</span></div>
      <div class="qrev-card"><span class="qrev-key">Check k<sup>th</sup> Bit</span><span class="qrev-val">(n &amp; (1&lt;&lt;k)) != 0</span></div>
      <div class="qrev-card"><span class="qrev-key">Set I<sup>th</sup> Bit</span><span class="qrev-val">n | (1 &lt;&lt; i)</span></div>
      <div class="qrev-card"><span class="qrev-key">Clear I<sup>th</sup> Bit</span><span class="qrev-val">n &amp; ~(1 &lt;&lt; i)</span></div>
      <div class="qrev-card"><span class="qrev-key">Toggle K<sup>th</sup> Bit</span><span class="qrev-val">n ^ (1 &lt;&lt; k)</span></div>
      <div class="qrev-card"><span class="qrev-key">Remove Rightmost 1</span><span class="qrev-val">n &amp; (n-1)</span></div>
      <div class="qrev-card"><span class="qrev-key">Even / Odd</span><span class="qrev-val">(n &amp; 1) == 0 → Even · else Odd</span></div>
    </div>
  </div>

</div>
`;

const DOCKER_CONTENT = `
<div class="content-area">

  <div style="background:rgba(14,165,233,0.07);border:1px solid rgba(14,165,233,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🐳 <strong style="color:#0ea5e9">Interview Ready</strong> — You used Docker in your Student DBMS project. Cover: What/Why/Where Docker is, containerization, images, containers, isolation, Dockerfile breakdown, RUN vs CMD, Docker Volumes, Docker Compose, all Docker commands, and the complete Docker flow.
  </div>

  <!-- 1. What is Docker -->
  <div class="accordion" id="acc-docker-what">
    <button class="accordion-header" onclick="toggleAcc('docker-what')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🐳</span><span>1. What is Docker?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-what">
      <div class="hbox"><strong>Docker</strong> is a containerization platform used to package an application along with its dependencies so that it runs the same way on any system.</div>
      <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <strong style="color:#0ea5e9">Layman Terms:</strong><br>
        <span style="color:var(--text2)">Docker puts your application, Java, and required files into one box and runs it anywhere — no "works on my machine" problems.</span>
      </div>
      <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <strong style="color:#0ea5e9">In your project:</strong><br>
        <span style="color:var(--text2)">Docker ensures my Java + MySQL project runs without manually installing Java or the JDBC driver on every machine.</span>
      </div>
      <div class="sbox">✅ <strong>One-liner:</strong> Docker packages code + dependencies into containers that run consistently everywhere.</div>
    </div>
  </div>

  <!-- 2. Why Docker is Used -->
  <div class="accordion" id="acc-docker-why">
    <button class="accordion-header" onclick="toggleAcc('docker-why')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">❓</span><span>2. Why Docker is Used?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-why">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Avoid environment issues</strong> — App behaves the same in dev, test, and production.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Portability</strong> — Run on any machine, cloud, or OS without reinstalling dependencies.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Consistent execution</strong> — Same image produces the same result everywhere.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Faster deployment</strong> — Build once, deploy anywhere in seconds.
        </div>
      </div>
      <div class="sbox">⭐ <strong>Interview-style answer:</strong> "Docker is widely used in CI/CD pipelines and cloud-based application deployment."</div>
    </div>
  </div>

  <!-- 3. Where is Docker Used -->
  <div class="accordion" id="acc-docker-where">
    <button class="accordion-header" onclick="toggleAcc('docker-where')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🌍</span><span>3. Where is Docker Used?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-where">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Domain</th><th>Use Case</th></tr></thead>
        <tbody>
          <tr><td style="color:#0ea5e9">Software Development</td><td>Consistent dev environments for all team members</td></tr>
          <tr><td style="color:#0ea5e9">Testing</td><td>Spin up isolated test environments quickly</td></tr>
          <tr><td style="color:#0ea5e9">Deployment</td><td>Ship apps to production without config headaches</td></tr>
          <tr><td style="color:#0ea5e9">Cloud &amp; DevOps</td><td>CI/CD pipelines on AWS, GCP, Azure</td></tr>
          <tr><td style="color:#0ea5e9">Microservices</td><td>Each service runs in its own container</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 4. Containerization -->
  <div class="accordion" id="acc-docker-container">
    <button class="accordion-header" onclick="toggleAcc('docker-container')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">📦</span><span>4. What is Containerization?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-container">
      <div class="hbox"><strong>Containerization</strong> is the process of running applications in isolated environments called <strong>containers</strong>.</div>
      <p class="section-label">Container vs Virtual Machine</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>VM (Virtual Machine)</th><th>Docker Container</th></tr></thead>
        <tbody>
          <tr><td>Has its own full OS</td><td>Shares the host OS kernel</td></tr>
          <tr><td>Heavy — GBs in size</td><td>Lightweight — MBs in size</td></tr>
          <tr><td>Slow to start (minutes)</td><td>Fast to start (seconds)</td></tr>
          <tr><td>More isolated</td><td>Process-level isolation</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Key difference:</strong> VM = full OS per app · Docker = shares host OS, only packages what the app needs.</div>
    </div>
  </div>

  <!-- 5. Docker Image vs Container -->
  <div class="accordion" id="acc-docker-image">
    <button class="accordion-header" onclick="toggleAcc('docker-image')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🖼️</span><span>5. Docker Image vs Docker Container</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-image">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Docker Image</th><th>Docker Container</th></tr></thead>
        <tbody>
          <tr><td>A <strong>blueprint</strong> / template</td><td>A <strong>running instance</strong> of an image</td></tr>
          <tr><td>Read-only, static</td><td>Running, dynamic process</td></tr>
          <tr><td>Built from a Dockerfile</td><td>Created from an image via docker run</td></tr>
          <tr><td>Like a <strong>class</strong> in Java</td><td>Like an <strong>object</strong> of that class</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Memory trick:</strong> Image = class · Container = object &nbsp;|&nbsp; You build an image once, run it as many containers as needed.</div>
      <p class="section-label">Examples used in your project</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:4px">
        <code style="background:rgba(14,165,233,0.10);border:1px solid rgba(14,165,233,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#7dd3fc">openjdk:21</code>
        <code style="background:rgba(14,165,233,0.10);border:1px solid rgba(14,165,233,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#7dd3fc">mysql:8</code>
      </div>
    </div>
  </div>

  <!-- 6. Docker Architecture -->
  <div class="accordion" id="acc-docker-arch">
    <button class="accordion-header" onclick="toggleAcc('docker-arch')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🏗️</span><span>6. Docker Architecture (Basic)</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-arch">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Component</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#0ea5e9">Docker Client</td><td>The CLI you use to run docker commands (docker build, docker run)</td></tr>
          <tr><td style="color:#0ea5e9">Docker Daemon</td><td>Background service that builds, runs, and manages containers</td></tr>
          <tr><td style="color:#0ea5e9">Docker Images</td><td>Read-only templates used to create containers</td></tr>
          <tr><td style="color:#0ea5e9">Docker Containers</td><td>Running instances of images — the actual app execution</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ You type <code style="background:rgba(14,165,233,0.12);padding:1px 5px;border-radius:4px;font-size:12px">docker run</code> → Client sends request → Daemon executes it → Container starts.</div>
    </div>
  </div>

  <!-- 7. Dockerfile -->
  <div class="accordion" id="acc-docker-dockerfile">
    <button class="accordion-header" onclick="toggleAcc('docker-dockerfile')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">📄</span><span>7. What is a Dockerfile? — Your Project Dockerfile</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-dockerfile">
      <div class="hbox">A <strong>Dockerfile</strong> is a text file containing instructions to build a Docker image. You wrote this yourself for the Student DBMS project.</div>

      <p class="section-label">Your Dockerfile — Full Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Dockerfile</span></div>
        <div class="code-body"><span class="kw">FROM</span> <span class="typ">openjdk:21</span>
<span class="kw">WORKDIR</span> <span class="str">/app</span>
<span class="kw">COPY</span> <span class="str">*.java /app/</span>
<span class="kw">COPY</span> <span class="str">mysql-connector-j-9.4.0.jar /app/</span>
<span class="kw">RUN</span> <span class="fn">javac -cp ".:mysql-connector-j-9.4.0.jar" *.java</span>
<span class="kw">CMD</span> [<span class="str">"java"</span>, <span class="str">"-cp"</span>, <span class="str">".:mysql-connector-j-9.4.0.jar"</span>, <span class="str">"Main"</span>]</div>
      </div>

      <p class="section-label">Line-by-Line Explanation</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#0ea5e9">FROM openjdk:21</strong><br>
          <span style="color:var(--text2)">Base image — provides both the Java compiler (javac) and Java runtime (java). All subsequent instructions run on top of this.</span>
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#0ea5e9">WORKDIR /app</strong><br>
          <span style="color:var(--text2)">Sets the working directory inside the container. All COPY, RUN, and CMD instructions execute relative to this path.</span>
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#0ea5e9">COPY *.java /app/</strong><br>
          <span style="color:var(--text2)">Copies all Java source files from your local machine into the container's /app directory.</span>
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#0ea5e9">COPY mysql-connector-j-9.4.0.jar /app/</strong><br>
          <span style="color:var(--text2)">Copies the JDBC driver JAR into the container. Required so Java can connect to MySQL.</span>
        </div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#10b981">RUN javac -cp ".:mysql-connector-j-9.4.0.jar" *.java</strong><br>
          <span style="color:var(--text2)">Compiles all Java source files at <strong>build time</strong> inside the container. <code style="background:rgba(16,185,129,0.12);padding:1px 5px;border-radius:4px;font-size:12px">-cp</code> sets the classpath to include the JDBC JAR.</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#f59e0b">CMD ["java", "-cp", ".:mysql-connector-j-9.4.0.jar", "Main"]</strong><br>
          <span style="color:var(--text2)">Runs the application at <strong>runtime</strong> when the container starts. Executes the Main class with the JDBC JAR on the classpath.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 8. RUN vs CMD -->
  <div class="accordion" id="acc-docker-runcmd">
    <button class="accordion-header" onclick="toggleAcc('docker-runcmd')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">⚡</span><span>8. RUN vs CMD — Very Important</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-runcmd">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>RUN</th><th>CMD</th></tr></thead>
        <tbody>
          <tr><td>Executes at <strong>build time</strong></td><td>Executes at <strong>runtime</strong></td></tr>
          <tr><td>Creates a new layer in the image</td><td>Runs when the container starts</td></tr>
          <tr><td>Used for setup (install, compile)</td><td>Used to start the application</td></tr>
          <tr><td>Can have multiple RUN commands</td><td>Only one CMD per Dockerfile</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>In your project:</strong> RUN = compile Java files · CMD = start the Java application</div>
      <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px;margin-top:8px">
        <strong style="color:#0ea5e9">Interview line:</strong><br>
        <span style="color:var(--text2)">RUN executes during image build and its result becomes part of the image. CMD executes when the container starts and defines the default command to run the application.</span>
      </div>
    </div>
  </div>

  <!-- 9. Docker Commands you used -->
  <div class="accordion" id="acc-docker-commands">
    <button class="accordion-header" onclick="toggleAcc('docker-commands')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">⌨️</span><span>9. Docker Commands You Used in Project</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-commands">
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Terminal Commands</span></div>
        <div class="code-body"><span class="cmt"># Build the Docker image from Dockerfile</span>
<span class="fn">docker build -t student-app .</span>
<span class="cmt"># Converts Dockerfile into an image named "student-app"</span>
<span class="cmt"># The dot (.) means look for Dockerfile in current directory</span>

<span class="cmt"># Run the container</span>
<span class="fn">docker run student-app</span>
<span class="cmt"># Creates and starts a container from the student-app image</span>

<span class="cmt"># Check running containers</span>
<span class="fn">docker ps</span>
<span class="cmt"># Lists all currently running containers</span>

<span class="cmt"># Stop a container</span>
<span class="fn">docker stop &lt;container-id&gt;</span>
<span class="cmt"># Gracefully stops the running container</span></div>
      </div>
      <div class="tbl-wrap" style="margin-top:12px"><table class="bit-table">
        <thead><tr><th>Command</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#0ea5e9"><code>docker build -t student-app .</code></td><td>Builds image, tags it as "student-app"</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker run student-app</code></td><td>Starts a container from the image</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker ps</code></td><td>Lists all running containers</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker stop &lt;id&gt;</code></td><td>Stops a running container</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 10. Isolation -->
  <div class="accordion" id="acc-docker-isolation">
    <button class="accordion-header" onclick="toggleAcc('docker-isolation')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🔒</span><span>10. Container Isolation</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-isolation">
      <div class="hbox"><strong>Isolation</strong> means each container has its own processes, filesystem, and dependencies — failures in one container do not affect others.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;margin-top:10px">
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">Own processes</strong> — Each container runs its own set of processes, invisible to other containers.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">Own filesystem</strong> — Each container has its own isolated file system; changes don't bleed between containers.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">Own dependencies</strong> — Container 1 can run Java 17 while Container 2 runs Java 21 on the same host.
        </div>
      </div>
      <div class="wbox">❌ If <strong>Container 1</strong> crashes, <strong>Container 2</strong> and <strong>Container 3</strong> continue running — completely unaffected.</div>
      <div class="sbox" style="margin-top:10px">✅ <strong>Interview answer:</strong> Isolation means each container operates independently with its own environment, so a crash or misconfiguration in one container does not impact others.</div>
    </div>
  </div>

  <!-- 11. Docker Volumes -->
  <div class="accordion" id="acc-docker-volumes">
    <button class="accordion-header" onclick="toggleAcc('docker-volumes')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">💾</span><span>11. Docker Volumes — Persistent Storage</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-volumes">
      <div class="wbox">⚠ Containers are <strong>temporary</strong> — data inside a container is lost when the container is removed.</div>
      <div style="margin-top:10px;margin-bottom:10px">
        <div class="hbox"><strong>Docker Volumes</strong> provide persistent storage that survives outside the container lifecycle.</div>
      </div>
      <p class="section-label">Advantages of Volumes</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Persistent storage</strong> — Data survives even if the container is deleted.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Shareable</strong> — The same volume can be mounted to new or multiple containers.
        </div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#0ea5e9">✅ Database safe</strong> — MySQL/Postgres data survives container restarts.
        </div>
      </div>
      <p class="section-label">Volume Commands</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Docker Volume Commands</span></div>
        <div class="code-body"><span class="cmt"># Create a volume</span>
<span class="fn">docker volume create mysql-data</span>

<span class="cmt"># List all volumes</span>
<span class="fn">docker volume ls</span>

<span class="cmt"># Mount volume when running a container</span>
<span class="fn">docker run -v mysql-data:/var/lib/mysql mysql</span>
<span class="cmt"># -v volume_name:path_inside_container</span></div>
      </div>
      <div class="sbox" style="margin-top:10px">✅ <strong>Interview answer:</strong> Docker Volumes provide persistent storage independent of the container lifecycle — data is preserved even when the container is deleted.</div>
    </div>
  </div>

  <!-- 12. Docker Compose -->
  <div class="accordion" id="acc-docker-compose">
    <button class="accordion-header" onclick="toggleAcc('docker-compose')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🧩</span><span>12. Docker Compose — Multi-Container Management</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-compose">
      <div class="hbox"><strong>Docker Compose</strong> is a tool used to define and manage multi-container applications using a single YAML configuration file (<code style="background:rgba(14,165,233,0.12);padding:1px 5px;border-radius:4px;font-size:12px">docker-compose.yml</code>).</div>
      <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin:10px 0">
        <strong style="color:#0ea5e9">Example — Your project:</strong><br>
        <span style="color:var(--text2)">Spring Boot Application + MySQL Database → both containers started together with one command.</span>
      </div>
      <p class="section-label">Docker vs Docker Compose</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Docker</th><th>Docker Compose</th></tr></thead>
        <tbody>
          <tr><td>Manages a <strong>single</strong> container</td><td>Manages <strong>multiple</strong> containers</td></tr>
          <tr><td><code>docker run mysql</code></td><td><code>docker compose up</code></td></tr>
          <tr><td>One command per container</td><td>All services defined in one YAML file</td></tr>
        </tbody>
      </table></div>
      <p class="section-label">Docker Compose Commands</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Docker Compose Commands</span></div>
        <div class="code-body"><span class="cmt"># Start all services defined in docker-compose.yml</span>
<span class="fn">docker compose up</span>

<span class="cmt"># Run in background (detached mode)</span>
<span class="fn">docker compose up -d</span>

<span class="cmt"># Stop all services</span>
<span class="fn">docker compose down</span></div>
      </div>
      <div class="sbox" style="margin-top:10px">✅ <strong>Interview answer:</strong> Docker Compose is a tool used to define and manage multi-container applications using a YAML configuration file, so all services start and stop together.</div>
    </div>
  </div>

  <!-- 13. Complete Docker Commands Reference -->
  <div class="accordion" id="acc-docker-allcommands">
    <button class="accordion-header" onclick="toggleAcc('docker-allcommands')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">📋</span><span>13. Complete Docker Commands Reference</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-allcommands">
      <p class="section-label">Image Commands</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Command</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#0ea5e9"><code>docker build -t image_name .</code></td><td>Build image from Dockerfile</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker images</code></td><td>View all local images</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker rmi image_name</code></td><td>Remove an image</td></tr>
        </tbody>
      </table></div>
      <p class="section-label">Container Commands</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Command</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#0ea5e9"><code>docker run image_name</code></td><td>Create and start a container</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker ps</code></td><td>View running containers</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker ps -a</code></td><td>View all containers (including stopped)</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker stop container_id</code></td><td>Stop a running container</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker start container_id</code></td><td>Start a stopped container</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker rm container_id</code></td><td>Remove a container</td></tr>
        </tbody>
      </table></div>
      <p class="section-label">Volume Commands</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Command</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#0ea5e9"><code>docker volume create mysql-data</code></td><td>Create a named volume</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker volume ls</code></td><td>List all volumes</td></tr>
          <tr><td style="color:#0ea5e9"><code>docker run -v mysql-data:/var/lib/mysql mysql</code></td><td>Mount volume to container</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 14. Complete Docker Flow -->
  <div class="accordion" id="acc-docker-flow">
    <button class="accordion-header" onclick="toggleAcc('docker-flow')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🔄</span><span>14. Complete Docker Flow</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-flow">
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px">
          <span style="font-size:16px">📝</span><span><strong style="color:#0ea5e9">Application</strong> — Your source code</span>
        </div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px">
          <span style="font-size:16px">📄</span><span><strong style="color:#0ea5e9">Dockerfile</strong> — Instructions to build the image</span>
        </div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓ <code style="font-size:11px;color:#7dd3fc">docker build</code></div>
        <div style="background:rgba(14,165,233,0.06);border:1px solid rgba(14,165,233,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px">
          <span style="font-size:16px">🖼️</span><span><strong style="color:#0ea5e9">Docker Image</strong> — Read-only blueprint (class)</span>
        </div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓ <code style="font-size:11px;color:#7dd3fc">docker run</code></div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px">
          <span style="font-size:16px">📦</span><span><strong style="color:#10b981">Docker Container</strong> — Running instance (object) — Application Running!</span>
        </div>
      </div>
      <div class="sbox">✅ <strong>One-liner flow:</strong> Write Dockerfile → <code>docker build</code> → Image → <code>docker run</code> → Container running your app.</div>
    </div>
  </div>

  <!-- 15. How Docker helped your project -->
  <div class="accordion" id="acc-docker-project">
    <button class="accordion-header" onclick="toggleAcc('docker-project')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">🚀</span><span>15. How Docker Helped Your Project</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-project">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#10b981">✅ No Java installation needed</strong> — openjdk:21 base image includes Java runtime.
        </div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#10b981">✅ No JDBC setup needed</strong> — JDBC JAR is copied into the container automatically.
        </div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#10b981">✅ Same output everywhere</strong> — Image runs identically on Windows, Linux, macOS, or any cloud.
        </div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:11px 14px;font-size:13px">
          <strong style="color:#10b981">✅ Easy to share</strong> — Anyone can run your project with one command.
        </div>
      </div>
      <div class="sbox">⭐ <strong>Confident Interview Answer:</strong> "I wrote a Dockerfile to containerize my Java application by selecting an appropriate base image, managing dependencies manually, compiling the code inside the container, and running it using CMD. This ensured the application runs consistently across systems."</div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-docker-qrev">
    <button class="accordion-header" onclick="toggleAcc('docker-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-docker-qrev">
      <div class="qrev-card"><span class="qrev-key">Docker</span><span class="qrev-val">Containerization platform · packages app + dependencies · runs anywhere</span></div>
      <div class="qrev-card"><span class="qrev-key">Containerization</span><span class="qrev-val">Isolated env · shares host OS · lightweight vs VM (full OS)</span></div>
      <div class="qrev-card"><span class="qrev-key">Isolation</span><span class="qrev-val">Each container has own processes, filesystem &amp; deps · crash in one ≠ affect others</span></div>
      <div class="qrev-card"><span class="qrev-key">Docker Image</span><span class="qrev-val">Blueprint / class · read-only · built from Dockerfile</span></div>
      <div class="qrev-card"><span class="qrev-key">Docker Container</span><span class="qrev-val">Running instance / object · created from image · lightweight &amp; portable</span></div>
      <div class="qrev-card"><span class="qrev-key">Dockerfile</span><span class="qrev-val">Text file with build instructions · FROM → WORKDIR → COPY → RUN → CMD</span></div>
      <div class="qrev-card"><span class="qrev-key">FROM</span><span class="qrev-val">Base image · openjdk:21 provides Java compiler + runtime</span></div>
      <div class="qrev-card"><span class="qrev-key">WORKDIR</span><span class="qrev-val">Sets working directory inside container · /app</span></div>
      <div class="qrev-card"><span class="qrev-key">COPY</span><span class="qrev-val">Copies files from local machine into container</span></div>
      <div class="qrev-card"><span class="qrev-key">RUN</span><span class="qrev-val">Build time · compiles code · creates image layer</span></div>
      <div class="qrev-card"><span class="qrev-key">CMD</span><span class="qrev-val">Runtime · starts the app when container runs</span></div>
      <div class="qrev-card"><span class="qrev-key">RUN vs CMD</span><span class="qrev-val">RUN = build time setup · CMD = runtime start</span></div>
      <div class="qrev-card"><span class="qrev-key">Docker Volumes</span><span class="qrev-val">Persistent storage · data survives container deletion · shareable across containers</span></div>
      <div class="qrev-card"><span class="qrev-key">Docker Compose</span><span class="qrev-val">Multi-container management via YAML · docker compose up / down</span></div>
      <div class="qrev-card"><span class="qrev-key">docker build -t image_name .</span><span class="qrev-val">Build image from Dockerfile in current directory</span></div>
      <div class="qrev-card"><span class="qrev-key">docker images</span><span class="qrev-val">View all local images</span></div>
      <div class="qrev-card"><span class="qrev-key">docker run image_name</span><span class="qrev-val">Create and start container from image</span></div>
      <div class="qrev-card"><span class="qrev-key">docker ps</span><span class="qrev-val">List running containers</span></div>
      <div class="qrev-card"><span class="qrev-key">docker ps -a</span><span class="qrev-val">List all containers including stopped</span></div>
      <div class="qrev-card"><span class="qrev-key">docker stop / start / rm</span><span class="qrev-val">Stop · Start · Remove a container by ID</span></div>
      <div class="qrev-card"><span class="qrev-key">docker rmi image_name</span><span class="qrev-val">Remove a Docker image</span></div>
      <div class="qrev-card"><span class="qrev-key">docker volume create / ls</span><span class="qrev-val">Create or list Docker volumes</span></div>
      <div class="qrev-card"><span class="qrev-key">docker compose up -d</span><span class="qrev-val">Start all services in background (detached)</span></div>
      <div class="qrev-card"><span class="qrev-key">docker compose down</span><span class="qrev-val">Stop and remove all services</span></div>
      <div class="qrev-card"><span class="qrev-key">One-liner</span><span class="qrev-val">Docker packaged my Java–MySQL app with all dependencies for consistent execution across environments.</span></div>
    </div>
  </div>

</div>
`;

let currentFilter = 'all';
let _hasMoreBelow = false;

const ARRAYS_CONTENT = `
<div class="content-area">

  <div style="background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#6366f1">DSA scope</strong> — Arrays are the most fundamental data structure. Common patterns: two pointers, prefix sums, sliding window, and in-place manipulation.
  </div>

  <!-- 1. Plus One (LeetCode 66) -->
  <div class="accordion" id="acc-arr-plusone">
    <button class="accordion-header" onclick="toggleAcc('arr-plusone')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#6366f1">➕</span>
        <span>1. Plus One — LeetCode #66</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-arr-plusone">
      <div class="hbox"><strong>Goal:</strong> Given a large integer as a digit array (most significant digit first, no leading zeros), increment it by 1 and return the resulting array.</div>

      <p class="section-label">Key Observations</p>
      <div class="ybox">
        Add 1 from the <strong>rightmost digit</strong>. If <code>digit + 1 &lt; 10</code> → just increment and return (no carry needed). If <code>digit == 9</code> → it becomes 0 and carry propagates left. If all digits are 9 (e.g. [9,9,9]) → result is a new array of length+1 starting with 1 (e.g. [1,0,0,0]).
      </div>

      <p class="section-label">Approach — Recursive Helper</p>
      <div class="ybox" style="margin-bottom:10px">
        Recurse to the last index (base case → add 1). On unwind: compute <code>sum = arr[id] + carry</code>, set <code>arr[id] = sum % 10</code>, return <code>sum / 10</code> as new carry. After recursion if carry == 1, build a new array one size larger.
      </div>

      <p class="section-label">Java Code — Recursive</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">PlusOne.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">private int</span> <span class="fn">helper</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> id) {
        <span class="kw">if</span> (id == arr.length) <span class="kw">return</span> <span class="num">1</span>;   <span class="cmt">// base: add 1 here</span>

        <span class="kw">int</span> carry = <span class="fn">helper</span>(arr, id + <span class="num">1</span>);
        <span class="kw">int</span> sum = carry + arr[id];
        arr[id] = sum % <span class="num">10</span>;
        <span class="kw">return</span> sum / <span class="num">10</span>;              <span class="cmt">// carry</span>
    }

    <span class="kw">public int</span>[] <span class="fn">plusOne</span>(<span class="kw">int</span>[] digits) {
        <span class="kw">int</span> carry = <span class="fn">helper</span>(digits, <span class="num">0</span>);

        <span class="kw">if</span> (carry == <span class="num">1</span>) {
            <span class="kw">int</span>[] arr = <span class="kw">new int</span>[digits.length + <span class="num">1</span>];
            arr[<span class="num">0</span>] = carry;
            <span class="kw">int</span> idx = <span class="num">1</span>;
            <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; digits.length; i++) {
                arr[idx++] = digits[i];
            }
            <span class="kw">return</span> arr;
        }
        <span class="kw">return</span> digits;
    }
}</div>
      </div>

      <p class="section-label">Dry Run — [1, 2, 3] → 123 + 1 = 124</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>id</th><th>arr[id]</th><th>carry in</th><th>sum</th><th>arr[id] after</th><th>carry out</th></tr></thead>
        <tbody>
          <tr><td>3 (base)</td><td>—</td><td>—</td><td>—</td><td>—</td><td>1</td></tr>
          <tr><td>2</td><td>3</td><td>1</td><td>4</td><td>4</td><td>0</td></tr>
          <tr><td>1</td><td>2</td><td>0</td><td>2</td><td>2</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td colspan="6" style="color:var(--text2)">Result: [1, 2, 4] ✅</td></tr>
        </tbody>
      </table></div>

      <p class="section-label">Dry Run — [9, 9, 9] → 999 + 1 = 1000 (new array)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>id</th><th>arr[id]</th><th>carry in</th><th>sum</th><th>arr[id] after</th><th>carry out</th></tr></thead>
        <tbody>
          <tr><td>3 (base)</td><td>—</td><td>—</td><td>—</td><td>—</td><td>1</td></tr>
          <tr><td>2</td><td>9</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>9</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td>0</td><td>9</td><td>1</td><td>10</td><td>0</td><td>1</td></tr>
          <tr><td colspan="6" style="color:#6366f1">carry == 1 → build new array [1, 0, 0, 0] ✅</td></tr>
        </tbody>
      </table></div>

      <p class="section-label">Constraints</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Constraint</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>digits.length</td><td>1 ≤ n ≤ 100</td></tr>
          <tr><td>digits[i]</td><td>0 ≤ d ≤ 9</td></tr>
          <tr><td>No leading zeros</td><td>except the number 0 itself</td></tr>
        </tbody>
      </table></div>

      <div class="sbox">✅ <strong>TC:</strong> O(n) — one recursive pass through the array &nbsp;|&nbsp; <strong>SC:</strong> O(n) — call stack depth. New array only created in the all-9s edge case.</div>

      <p class="section-label" style="margin-top:16px">Connection to Linked List Version</p>
      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:12px 14px;font-size:12.5px;margin-bottom:10px">
        <strong style="color:#6366f1">Same idea, different container.</strong> In the LL version (<em>Add 1 to a Linked List</em>), the recursive <code>helper(node)</code> reaches <code>null</code> as base case. Here, <code>helper(arr, id)</code> reaches <code>id == arr.length</code>. Both return carry = 1 from the base and unwind the same way — making the two problems almost identical in logic.
      </div>

      <p class="section-label">⚡ Interview Q&amp;A</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:4px">
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Why use recursion instead of a simple loop?</strong><br>
          <span style="color:var(--text2)">A loop works fine too and is O(1) space. Recursion here mirrors the linked list version and is clean, but interviewers may ask for the iterative approach: iterate from right to left, set digit to 0 if it's 9 (carry continues), else increment and return immediately. If the loop finishes with all 9s, create a new length+1 array.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#8b5cf6">Q: Simplest iterative solution?</strong><br>
          <span style="color:var(--text2)">Walk from end: if <code>digits[i] &lt; 9</code> → increment and return immediately. Else set <code>digits[i] = 0</code> and continue. If the loop ends (all were 9), create <code>new int[n+1]</code> and set index 0 to 1. This is O(n) time, O(1) extra space (excluding output).</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What's the most common edge case?</strong><br>
          <span style="color:var(--text2)">All digits being 9 — e.g. [9], [9,9], [9,9,9]. The result requires one extra digit at the front, so the array size must increase by 1. This is the only case where a new array is returned; otherwise the original array is modified in-place and returned.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Revision Cheatsheet -->
  <div class="accordion" id="acc-arr-qrev">
    <button class="accordion-header" onclick="toggleAcc('arr-qrev')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f59e0b">⚡</span>
        <span>Quick Revision Cheatsheet</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-arr-qrev">
      <div class="qrev-card"><span class="qrev-key">Plus One</span><span class="qrev-val">recurse/loop from end → digit&lt;9? increment+return : set 0+carry · all 9s? → new int[n+1], arr[0]=1</span></div>
    </div>
  </div>

</div>
`;


const BINARY_SEARCH_CONTENT = `
<div class="content-area">

  <div style="background:rgba(132,204,22,0.07);border:1px solid rgba(132,204,22,0.22);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#84cc16">DSA scope</strong> — Binary Search runs in <strong>O(log n)</strong> on sorted data. Core boilerplate + 8 classical variants: Lower/Upper Bound, Floor/Ceil, First/Last Occurrence, Rotated Arrays, Duplicates, Minimum in Rotation, and Single Non-Duplicate.
  </div>

  <!-- 1. Core Boilerplate -->
  <div class="accordion" id="acc-bs-core">
    <button class="accordion-header" onclick="toggleAcc('bs-core')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">🔍</span>
        <span>1. Core Boilerplate — Standard Binary Search</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-core">
      <div class="hbox"><strong>When to Use:</strong> Array must be <strong>sorted</strong>. Returns the index of the target, or -1 if not found.</div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0 4px">
        <div class="formula-card" style="flex:1;min-width:130px"><span class="formula-label">Time</span><span class="formula-val" style="color:#84cc16">O(log n)</span></div>
        <div class="formula-card" style="flex:1;min-width:130px"><span class="formula-label">Space</span><span class="formula-val" style="color:#84cc16">O(1)</span></div>
        <div class="formula-card" style="flex:1;min-width:130px"><span class="formula-label">Requirement</span><span class="formula-val" style="color:#84cc16">Sorted Array</span></div>
      </div>

      <p class="section-label">Java Code</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">BinarySearch.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">binarySearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {

    <span class="kw">int</span> low = <span class="num">0</span>;
    <span class="kw">int</span> high = arr.length - <span class="num">1</span>;

    <span class="kw">while</span> (low &lt;= high) {

        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;   <span class="cmt">// avoids overflow</span>

        <span class="kw">if</span> (arr[mid] == target)  <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] &lt; target) low  = mid + <span class="num">1</span>;
        <span class="kw">else</span>                        high = mid - <span class="num">1</span>;
    }

    <span class="kw">return</span> -<span class="num">1</span>;
}</div>
      </div>

      <p class="section-label">Dry Run — arr = [1,3,5,7,9], target = 7</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Iteration</th><th>low</th><th>high</th><th>mid</th><th>arr[mid]</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>0</td><td>4</td><td>2</td><td>5</td><td>5 &lt; 7 → low = 3</td></tr>
          <tr><td>2</td><td>3</td><td>4</td><td>3</td><td>7</td><td>Found! return 3 ✅</td></tr>
        </tbody>
      </table></div>

      <div class="ybox"><strong>Key trick:</strong> Use <code>mid = low + (high - low) / 2</code> instead of <code>(low + high) / 2</code> to prevent integer overflow when indices are large.</div>
    </div>
  </div>

  <!-- 2. Lower & Upper Bound -->
  <div class="accordion" id="acc-bs-bounds">
    <button class="accordion-header" onclick="toggleAcc('bs-bounds')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">📐</span>
        <span>2. Lower Bound &amp; Upper Bound</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-bounds">

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
        <div style="flex:1;min-width:220px;background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#84cc16">Lower Bound</strong> — smallest index such that <code>arr[index] ≥ x</code><br>
          <span style="color:var(--text3);font-size:11px">Returns arr.length if no such index exists</span>
        </div>
        <div style="flex:1;min-width:220px;background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#84cc16">Upper Bound</strong> — smallest index such that <code>arr[index] &gt; x</code><br>
          <span style="color:var(--text3);font-size:11px">Returns arr.length if no such index exists</span>
        </div>
      </div>

      <p class="section-label">Lower Bound — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">LowerBound.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">lowerBound</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> x) {

    <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>;
    <span class="kw">int</span> ans = arr.length;   <span class="cmt">// default: not found</span>

    <span class="kw">while</span> (low &lt;= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

        <span class="kw">if</span> (arr[mid] &gt;= x) { ans = mid; high = mid - <span class="num">1</span>; }  <span class="cmt">// potential answer, go left</span>
        <span class="kw">else</span>               low = mid + <span class="num">1</span>;
    }
    <span class="kw">return</span> ans;
}</div>
      </div>

      <p class="section-label">Upper Bound — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">UpperBound.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">upperBound</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> x) {

    <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>;
    <span class="kw">int</span> ans = arr.length;

    <span class="kw">while</span> (low &lt;= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

        <span class="kw">if</span> (arr[mid] &gt; x) { ans = mid; high = mid - <span class="num">1</span>; }  <span class="cmt">// strictly greater</span>
        <span class="kw">else</span>              low = mid + <span class="num">1</span>;
    }
    <span class="kw">return</span> ans;
}</div>
      </div>

      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>arr = [1, 3, 3, 5, 7]</th><th>x = 3</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>Lower Bound</td><td>arr[idx] ≥ 3</td><td>index <strong>1</strong> (first 3)</td></tr>
          <tr><td>Upper Bound</td><td>arr[idx] &gt; 3</td><td>index <strong>3</strong> (the 5)</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 3. Floor & Ceil -->
  <div class="accordion" id="acc-bs-floorceil">
    <button class="accordion-header" onclick="toggleAcc('bs-floorceil')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">🏠</span>
        <span>3. Floor Value &amp; Ceil Value</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-floorceil">

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
        <div style="flex:1;min-width:200px;background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#84cc16">Floor</strong> — largest element <strong>≤ x</strong> (returns the value, not the index)
        </div>
        <div style="flex:1;min-width:200px;background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#84cc16">Ceil</strong> — smallest element <strong>≥ x</strong> (returns the value, not the index)
        </div>
      </div>

      <p class="section-label">Floor Value — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">FloorCeil.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">floorValue</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> x) {

    <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>;
    <span class="kw">int</span> ans = -<span class="num">1</span>;

    <span class="kw">while</span> (low &lt;= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

        <span class="kw">if</span> (arr[mid] &lt;= x) { ans = arr[mid]; low = mid + <span class="num">1</span>; }   <span class="cmt">// valid floor, go right</span>
        <span class="kw">else</span>               high = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> ans;
}</div>
      </div>

      <p class="section-label">Ceil Value — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">FloorCeil.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">ceilValue</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> x) {

    <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>;
    <span class="kw">int</span> ans = -<span class="num">1</span>;

    <span class="kw">while</span> (low &lt;= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

        <span class="kw">if</span> (arr[mid] &gt;= x) { ans = arr[mid]; high = mid - <span class="num">1</span>; }  <span class="cmt">// valid ceil, go left</span>
        <span class="kw">else</span>               low = mid + <span class="num">1</span>;
    }
    <span class="kw">return</span> ans;
}</div>
      </div>

      <div class="sbox">✅ Floor stores <code>arr[mid]</code> and moves <strong>right</strong>; Ceil stores <code>arr[mid]</code> and moves <strong>left</strong>. The direction mirrors Lower/Upper Bound (which store the index instead).</div>
    </div>
  </div>

  <!-- 4. First & Last Occurrence -->
  <div class="accordion" id="acc-bs-occur">
    <button class="accordion-header" onclick="toggleAcc('bs-occur')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">🎯</span>
        <span>4. First &amp; Last Occurrence</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-occur">
      <div class="hbox"><strong>Goal:</strong> Find the first (or last) index of a target in a sorted array that may contain duplicates.</div>

      <p class="section-label">First Occurrence — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Occurrence.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">firstOccurrence</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {

    <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>, first = -<span class="num">1</span>;

    <span class="kw">while</span> (low &lt;= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

        <span class="kw">if</span> (arr[mid] == target) { first = mid; high = mid - <span class="num">1</span>; }   <span class="cmt">// save, go left</span>
        <span class="kw">else if</span> (arr[mid] &lt; target) low  = mid + <span class="num">1</span>;
        <span class="kw">else</span>                        high = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> first;
}</div>
      </div>

      <p class="section-label">Last Occurrence — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Occurrence.java</span></div>
        <div class="code-body"><span class="kw">public static int</span> <span class="fn">lastOccurrence</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {

    <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>, last = -<span class="num">1</span>;

    <span class="kw">while</span> (low &lt;= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

        <span class="kw">if</span> (arr[mid] == target) { last = mid; low = mid + <span class="num">1</span>; }   <span class="cmt">// save, go right</span>
        <span class="kw">else if</span> (arr[mid] &lt; target) low  = mid + <span class="num">1</span>;
        <span class="kw">else</span>                        high = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> last;
}</div>
      </div>

      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>arr = [1, 2, 2, 2, 3]</th><th>target = 2</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>First Occurrence</td><td>go left on match</td><td>index <strong>1</strong></td></tr>
          <tr><td>Last Occurrence</td><td>go right on match</td><td>index <strong>3</strong></td></tr>
          <tr><td>Count of 2s</td><td>last − first + 1</td><td><strong>3</strong></td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 5. Rotated Sorted Array I -->
  <div class="accordion" id="acc-bs-rot1">
    <button class="accordion-header" onclick="toggleAcc('bs-rot1')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">🔄</span>
        <span>5. Search in Rotated Sorted Array I (No Duplicates)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-rot1">
      <div class="ybox"><strong>Key Observation:</strong> One half is <em>always</em> sorted. Identify which half, then check if the target falls inside it.</div>

      <p class="section-label">Decision Pattern</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Pattern</span></div>
        <div class="code-body"><span class="kw">if</span> (nums[low] &lt;= nums[mid]) {   <span class="cmt">// left half sorted</span>
    <span class="kw">if</span> (target &gt;= nums[low] &amp;&amp; target &lt; nums[mid])  high = mid - <span class="num">1</span>;
    <span class="kw">else</span>                                             low  = mid + <span class="num">1</span>;
} <span class="kw">else</span> {                          <span class="cmt">// right half sorted</span>
    <span class="kw">if</span> (target &gt; nums[mid] &amp;&amp; target &lt;= nums[high]) low  = mid + <span class="num">1</span>;
    <span class="kw">else</span>                                             high = mid - <span class="num">1</span>;
}</div>
      </div>

      <p class="section-label">Full Solution — LeetCode 33</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">RotatedSearch.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">public int</span> <span class="fn">search</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> target) {

        <span class="kw">int</span> l = <span class="num">0</span>, h = nums.length - <span class="num">1</span>;

        <span class="kw">while</span> (l &lt;= h) {
            <span class="kw">int</span> mid = l + (h - l) / <span class="num">2</span>;

            <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;

            <span class="kw">if</span> (nums[l] &lt;= nums[mid]) {          <span class="cmt">// left sorted</span>
                <span class="kw">if</span> (nums[l] &lt;= target &amp;&amp; target &lt; nums[mid]) h = mid - <span class="num">1</span>;
                <span class="kw">else</span>                                             l = mid + <span class="num">1</span>;
            } <span class="kw">else</span> {                              <span class="cmt">// right sorted</span>
                <span class="kw">if</span> (nums[mid] &lt; target &amp;&amp; target &lt;= nums[h]) l = mid + <span class="num">1</span>;
                <span class="kw">else</span>                                            h = mid - <span class="num">1</span>;
            }
        }
        <span class="kw">return</span> -<span class="num">1</span>;
    }
}</div>
      </div>

      <div class="sbox">✅ <strong>TC:</strong> O(log n) &nbsp;|&nbsp; <strong>SC:</strong> O(1)</div>
    </div>
  </div>

  <!-- 6. Rotated Sorted Array II (Duplicates) -->
  <div class="accordion" id="acc-bs-rot2">
    <button class="accordion-header" onclick="toggleAcc('bs-rot2')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">🔄</span>
        <span>6. Search in Rotated Sorted Array II (With Duplicates)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-rot2">
      <div class="hbox"><strong>Extra condition needed:</strong> When <code>arr[low] == arr[mid] == arr[high]</code>, we cannot determine which half is sorted. Shrink both pointers.</div>

      <p class="section-label">Extra Condition — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Extra condition</span></div>
        <div class="code-body"><span class="kw">if</span> (arr[low] == arr[mid] &amp;&amp; arr[mid] == arr[high]) {
    low++;
    high--;
    <span class="kw">continue</span>;
}</div>
      </div>

      <p class="section-label">Full Solution — LeetCode 81</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">RotatedSearchII.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">public boolean</span> <span class="fn">search</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> key) {

        <span class="kw">int</span> low = <span class="num">0</span>, high = arr.length - <span class="num">1</span>;

        <span class="kw">while</span> (low &lt;= high) {
            <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

            <span class="kw">if</span> (arr[mid] == key) <span class="kw">return true</span>;

            <span class="cmt">// Cannot determine sorted half → shrink both</span>
            <span class="kw">if</span> (arr[low] == arr[mid] &amp;&amp; arr[mid] == arr[high]) {
                low++; high--; <span class="kw">continue</span>;
            }

            <span class="kw">if</span> (arr[low] &lt;= arr[mid]) {
                <span class="kw">if</span> (key &gt;= arr[low] &amp;&amp; key &lt;= arr[mid]) high = mid - <span class="num">1</span>;
                <span class="kw">else</span>                                     low  = mid + <span class="num">1</span>;
            } <span class="kw">else</span> {
                <span class="kw">if</span> (key &gt;= arr[mid] &amp;&amp; key &lt;= arr[high]) low  = mid + <span class="num">1</span>;
                <span class="kw">else</span>                                      high = mid - <span class="num">1</span>;
            }
        }
        <span class="kw">return false</span>;
    }
}</div>
      </div>

      <div class="wbox"><strong>⚠️ TC:</strong> O(log n) average, <strong>O(n) worst case</strong> when all elements are duplicates (e.g. [2,2,2,2,2]).</div>
    </div>
  </div>

  <!-- 7. Minimum in Rotated Sorted Array & Count Rotations -->
  <div class="accordion" id="acc-bs-minrot">
    <button class="accordion-header" onclick="toggleAcc('bs-minrot')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">📉</span>
        <span>7. Minimum in Rotated Array &amp; Count Rotations</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-minrot">

      <p class="section-label">Find Minimum — Pattern</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">MinRotated.java</span></div>
        <div class="code-body"><span class="kw">while</span> (low &lt; high) {
    <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

    <span class="kw">if</span> (nums[mid] &gt; nums[high]) low  = mid + <span class="num">1</span>;   <span class="cmt">// min is in right half</span>
    <span class="kw">else</span>                        high = mid;          <span class="cmt">// mid could be the min</span>
}
<span class="kw">return</span> nums[low];</div>
      </div>

      <div class="ybox" style="margin-bottom:12px"><strong>Observation:</strong> The minimum element is the <em>only</em> element smaller than its left neighbour. After the loop, <code>low == high</code> == index of minimum.</div>

      <p class="section-label">Count Rotations</p>
      <div class="hbox" style="margin-bottom:10px"><strong>Observation:</strong> Index of the minimum element = number of rotations applied to the array.</div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">CountRotations.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">public int</span> <span class="fn">countRotations</span>(<span class="kw">int</span>[] nums) {

        <span class="kw">int</span> low = <span class="num">0</span>, high = nums.length - <span class="num">1</span>;

        <span class="kw">while</span> (low &lt; high) {
            <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

            <span class="kw">if</span> (nums[mid] &gt; nums[high]) low  = mid + <span class="num">1</span>;
            <span class="kw">else</span>                        high = mid;
        }
        <span class="kw">return</span> low;   <span class="cmt">// index of min = rotation count</span>
    }
}</div>
      </div>
    </div>
  </div>

  <!-- 8. Single Non-Duplicate -->
  <div class="accordion" id="acc-bs-single">
    <button class="accordion-header" onclick="toggleAcc('bs-single')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#84cc16">🎲</span>
        <span>8. Single Element in Sorted Array — LeetCode 540</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-single">
      <div class="hbox"><strong>Goal:</strong> Every element appears exactly twice, except one. Find the single element in O(log n) time and O(1) space.</div>

      <p class="section-label">Key Observation</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px">
        <div style="flex:1;min-width:200px;background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#84cc16">Before the single element</strong><br>
          Even index → first occurrence of pair<br>
          Odd index → second occurrence of pair
        </div>
        <div style="flex:1;min-width:200px;background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:11px 14px;font-size:12.5px">
          <strong style="color:#84cc16">After the single element</strong><br>
          Odd index → first occurrence of pair<br>
          Even index → second occurrence of pair
        </div>
      </div>

      <div class="ybox" style="margin-bottom:12px">If the pairing pattern is <em>intact</em> at <code>mid</code>, the single element is to the <strong>right</strong>. If the pattern is <em>broken</em>, it is to the <strong>left</strong> (or mid itself).</div>

      <p class="section-label">Full Solution — Java</p>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">SingleNonDuplicate.java</span></div>
        <div class="code-body"><span class="kw">class</span> <span class="typ">Solution</span> {
    <span class="kw">public int</span> <span class="fn">singleNonDuplicate</span>(<span class="kw">int</span>[] nums) {

        <span class="kw">int</span> n = nums.length;
        <span class="cmt">// Edge cases: single element at the boundary</span>
        <span class="kw">if</span> (n == <span class="num">1</span>)                           <span class="kw">return</span> nums[<span class="num">0</span>];
        <span class="kw">if</span> (nums[<span class="num">0</span>] != nums[<span class="num">1</span>])             <span class="kw">return</span> nums[<span class="num">0</span>];
        <span class="kw">if</span> (nums[n-<span class="num">1</span>] != nums[n-<span class="num">2</span>])         <span class="kw">return</span> nums[n-<span class="num">1</span>];

        <span class="kw">int</span> low = <span class="num">1</span>, high = n - <span class="num">2</span>;   <span class="cmt">// skip first and last</span>

        <span class="kw">while</span> (low &lt;= high) {
            <span class="kw">int</span> mid = low + (high - low) / <span class="num">2</span>;

            <span class="cmt">// mid is the unique element</span>
            <span class="kw">if</span> (nums[mid] != nums[mid-<span class="num">1</span>] &amp;&amp; nums[mid] != nums[mid+<span class="num">1</span>])
                <span class="kw">return</span> nums[mid];

            <span class="cmt">// Pattern intact at mid → single is to the right</span>
            <span class="kw">if</span> ((mid % <span class="num">2</span> == <span class="num">1</span> &amp;&amp; nums[mid] == nums[mid-<span class="num">1</span>]) ||
                (mid % <span class="num">2</span> == <span class="num">0</span> &amp;&amp; nums[mid] == nums[mid+<span class="num">1</span>]))
                low = mid + <span class="num">1</span>;
            <span class="kw">else</span>
                high = mid - <span class="num">1</span>;
        }
        <span class="kw">return</span> -<span class="num">1</span>;
    }
}</div>
      </div>

      <div class="sbox">✅ <strong>TC:</strong> O(log n) &nbsp;|&nbsp; <strong>SC:</strong> O(1) — Searching only the interior [1, n-2] after handling boundary edge cases.</div>
    </div>
  </div>

  <!-- Quick Revision Cheatsheet -->
  <div class="accordion" id="acc-bs-qrev">
    <button class="accordion-header" onclick="toggleAcc('bs-qrev')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f59e0b">⚡</span>
        <span>Quick Revision Cheatsheet</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-bs-qrev">
      <div class="qrev-card"><span class="qrev-key">Core BS</span><span class="qrev-val">mid = low+(high-low)/2 · &lt; → low=mid+1 · &gt; → high=mid-1 · == → return mid</span></div>
      <div class="qrev-card"><span class="qrev-key">Lower Bound</span><span class="qrev-val">arr[mid] ≥ x → save mid, go left · else go right · default ans = arr.length</span></div>
      <div class="qrev-card"><span class="qrev-key">Upper Bound</span><span class="qrev-val">arr[mid] &gt; x → save mid, go left · else go right · default ans = arr.length</span></div>
      <div class="qrev-card"><span class="qrev-key">Floor / Ceil</span><span class="qrev-val">Floor: ≤ x → save val, go right · Ceil: ≥ x → save val, go left</span></div>
      <div class="qrev-card"><span class="qrev-key">First Occ.</span><span class="qrev-val">== target → save, go left (high=mid-1)</span></div>
      <div class="qrev-card"><span class="qrev-key">Last Occ.</span><span class="qrev-val">== target → save, go right (low=mid+1)</span></div>
      <div class="qrev-card"><span class="qrev-key">Rotated (no dup)</span><span class="qrev-val">nums[l]≤nums[mid] → left sorted · check target in range → narrow · else other half</span></div>
      <div class="qrev-card"><span class="qrev-key">Rotated (dup)</span><span class="qrev-val">arr[low]==arr[mid]==arr[high] → low++, high-- · then same as no-dup</span></div>
      <div class="qrev-card"><span class="qrev-key">Min / Rotations</span><span class="qrev-val">mid&gt;high → low=mid+1 · else high=mid · return nums[low] (= rotation count)</span></div>
      <div class="qrev-card"><span class="qrev-key">Single Element</span><span class="qrev-val">Pattern intact (even→next, odd→prev) → go right · else go left</span></div>
    </div>
  </div>

</div>
`;

const BUILT_IN_FUNCTIONS_SECTIONS = [
  {title:'1. Arrays (Arrays class)', groups:[
    ['Sorting & Searching', ['Arrays.sort(arr)', 'Arrays.binarySearch(arr, key)']],
    ['Copying', ['Arrays.copyOf(arr, size)', 'Arrays.copyOfRange(arr, from, to)']],
    ['Filling', ['Arrays.fill(arr, value)']],
    ['Comparison', ['Arrays.equals(arr1, arr2)', 'Arrays.deepEquals(arr1, arr2)']],
    ['Conversion', ['Arrays.asList(arr)', 'Arrays.toString(arr)', 'Arrays.deepToString(arr)']]
  ]},
  {title:'2. String', groups:[
    ['Length & Character Access', ['length()', 'charAt(index)']],
    ['Searching', ['indexOf()', 'lastIndexOf()', 'contains()', 'startsWith()', 'endsWith()']],
    ['Comparison', ['equals()', 'equalsIgnoreCase()', 'compareTo()', 'compareToIgnoreCase()']],
    ['Modification', ['substring()', 'replace()', 'replaceAll()', 'trim()', 'strip()', 'concat()']],
    ['Conversion', ['toLowerCase()', 'toUpperCase()', 'toCharArray()', 'split()', 'valueOf()']]
  ]},
  {title:'3. StringBuilder', groups:[
    ['Add', ['append()', 'insert()']],
    ['Delete', ['delete()', 'deleteCharAt()']],
    ['Update', ['setCharAt()', 'replace()']],
    ['Reverse', ['reverse()']],
    ['Utility', ['length()', 'capacity()', 'charAt()', 'substring()']]
  ]},
  {title:'4. ArrayList', groups:[
    ['Add Elements', ['add()', 'add(index, element)']],
    ['Access', ['get(index)']],
    ['Update', ['set(index, value)']],
    ['Delete', ['remove(index)', 'remove(object)', 'clear()']],
    ['Search', ['contains()', 'indexOf()', 'lastIndexOf()']],
    ['Utility', ['size()', 'isEmpty()', 'sort()', 'toArray()']]
  ]},
  {title:'5. LinkedList', groups:[
    ['Queue Operations', ['addFirst()', 'addLast()', 'removeFirst()', 'removeLast()', 'getFirst()', 'getLast()']],
    ['Common Operations', ['add()', 'remove()', 'contains()', 'size()']]
  ]},
  {title:'6. Stack', groups:[
    ['Main Operations', ['push()', 'pop()', 'peek()', 'empty()', 'search()']]
  ]},
  {title:'7. Queue', groups:[
    ['Operations', ['offer()', 'poll()', 'peek()', 'add()', 'remove()', 'element()']]
  ]},
  {title:'8. PriorityQueue', groups:[
    ['Insert', ['offer()', 'add()']],
    ['Remove', ['poll()', 'remove()']],
    ['Access', ['peek()']],
    ['Utility', ['size()', 'contains()', 'isEmpty()']]
  ]},
  {title:'9. HashMap', groups:[
    ['Insert', ['put()', 'putIfAbsent()']],
    ['Access', ['get()', 'getOrDefault()']],
    ['Remove', ['remove()']],
    ['Search', ['containsKey()', 'containsValue()']],
    ['Traversal', ['keySet()', 'values()', 'entrySet()']],
    ['Utility', ['replace()', 'size()', 'clear()', 'isEmpty()']]
  ]},
  {title:'10. TreeMap', groups:[
    ['Insert', ['put()']],
    ['Access', ['get()', 'firstKey()', 'lastKey()', 'ceilingKey()', 'floorKey()', 'higherKey()', 'lowerKey()']],
    ['Remove', ['remove()']]
  ]},
  {title:'11. HashSet', groups:[
    ['Main Operations', ['add()', 'remove()', 'contains()', 'size()', 'clear()', 'isEmpty()']]
  ]},
  {title:'12. LinkedHashSet', note:'Preserves insertion order.', groups:[
    ['Operations', ['add()', 'remove()', 'contains()', 'size()']]
  ]},
  {title:'13. TreeSet', groups:[
    ['Access', ['first()', 'last()', 'ceiling()', 'floor()', 'higher()', 'lower()']],
    ['Utility', ['add()', 'remove()', 'contains()']]
  ]},
  {title:'14. Collections Class', groups:[
    ['Sorting', ['Collections.sort()', 'Collections.reverseOrder()']],
    ['Max & Min', ['Collections.max()', 'Collections.min()']],
    ['Reverse & Shuffle', ['Collections.reverse()', 'Collections.shuffle()']],
    ['Search', ['Collections.binarySearch()', 'Collections.frequency()']],
    ['Fill', ['Collections.fill()']]
  ]},
  {title:'15. Comparable & compareTo()', groups:[
    ['String', ['str1.compareTo(str2)']],
    ['Integer', ['Integer.compare(a,b)']],
    ['Character', ['Character.compare(a,b)']],
    ['Long', ['Long.compare(a,b)']],
    ['Double', ['Double.compare(a,b)']]
  ]},
  {title:'16. Comparator', groups:[
    ['Ascending', ['Collections.sort(list);']],
    ['Descending', ['Collections.sort(list, Collections.reverseOrder());']],
    ['Custom', ['Collections.sort(list, (a,b)->a.age-b.age);']]
  ]},
  {title:'17. Math Class', groups:[
    ['Maximum & Minimum', ['Math.max()', 'Math.min()']],
    ['Power & Root', ['Math.pow()', 'Math.sqrt()']],
    ['Absolute', ['Math.abs()']],
    ['Rounding', ['Math.ceil()', 'Math.floor()', 'Math.round()']],
    ['Random', ['Math.random()']]
  ]},
  {title:'18. Character Class', groups:[
    ['Check Type', ['isDigit()', 'isLetter()', 'isLetterOrDigit()', 'isUpperCase()', 'isLowerCase()', 'isWhitespace()']],
    ['Conversion', ['toUpperCase()', 'toLowerCase()']]
  ]},
  {title:'19. Streams (Java 8)', groups:[
    ['Filtering', ['filter()']],
    ['Transformation', ['map()', 'flatMap()']],
    ['Sorting', ['sorted()']],
    ['Reduction', ['reduce()', 'count()', 'sum()']],
    ['Terminal Operations', ['collect()', 'forEach()', 'findFirst()', 'anyMatch()', 'allMatch()']]
  ]},
  {title:'20. Trees (Binary Tree)', groups:[
    ['Traversals', ['Preorder', 'Inorder', 'Postorder', 'Level Order']],
    ['Queue Methods Used', ['offer()', 'poll()', 'peek()']]
  ]},
  {title:'21. Graphs', groups:[
    ['BFS Queue Methods', ['offer()', 'poll()']],
    ['DFS', ['Recursion', 'Stack methods (push(), pop())']]
  ]},
  {title:'22. Important Utility Methods', groups:[
    ['Integer', ['parseInt()', 'valueOf()', 'toBinaryString()']],
    ['Long', ['parseLong()']],
    ['Double', ['parseDouble()']],
    ['String Conversion', ['String.valueOf()']]
  ]},
  {title:'23. Bit Manipulation', groups:[
    ['Binary Operations', ['&', '|', '^', '~', '<<', '>>', '>>>']],
    ['Built-in Methods', ['Integer.bitCount()', 'Integer.highestOneBit()', 'Integer.lowestOneBit()', 'Integer.numberOfLeadingZeros()', 'Integer.numberOfTrailingZeros()']]
  ]},
  {title:'24. Deque (Very Important)', groups:[
    ['Insert', ['offerFirst()', 'offerLast()']],
    ['Remove', ['pollFirst()', 'pollLast()']],
    ['Access', ['peekFirst()', 'peekLast()']]
  ]},
  {title:'25. Frequently Used Interview Methods', groups:[
    ['Strings', ['substring()', 'split()', 'toCharArray()', 'compareTo()']],
    ['Arrays', ['sort()', 'binarySearch()']],
    ['Collections', ['sort()', 'reverse()']],
    ['HashMap', ['put()', 'getOrDefault()', 'containsKey()']],
    ['Stack', ['push()', 'pop()', 'peek()']],
    ['Queue', ['offer()', 'poll()', 'peek()']],
    ['PriorityQueue', ['offer()', 'poll()']],
    ['Set', ['add()', 'contains()']]
  ]}
];

function escBuiltin(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function builtinMethodChip(method) {
  return `<code style="display:inline-block;font-family:'JetBrains Mono',monospace;font-size:12px;color:#fbbf24;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.18);border-radius:7px;padding:5px 8px;margin:3px 4px 3px 0">${escBuiltin(method)}</code>`;
}

function renderBuiltinGroups(groups) {
  return groups.map(([label, methods]) => `
    <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-bottom:10px">
      <div class="section-label" style="margin:0 0 8px 0">${escBuiltin(label)}</div>
      <div>${methods.map(builtinMethodChip).join('')}</div>
    </div>`).join('');
}

function renderBuiltinSection(section, index) {
  const id = 'builtin-' + index;
  return `
  <div class="accordion" id="acc-${id}">
    <button class="accordion-header" onclick="toggleAcc('${id}')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f59e0b">◆</span>
        <span>${escBuiltin(section.title)}</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-${id}">
      ${section.note ? `<div class="sbox" style="margin-bottom:10px">✅ ${escBuiltin(section.note)}</div>` : ''}
      ${renderBuiltinGroups(section.groups)}
    </div>
  </div>`;
}

const BUILT_IN_FUNCTIONS_CONTENT = `
<div class="content-area">
  <div style="background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#f59e0b">Interview quick map</strong> — commonly used Java built-in methods across arrays, strings, collections, maps, sets, streams, math, characters, trees, graphs, and bit manipulation.
  </div>
  ${BUILT_IN_FUNCTIONS_SECTIONS.map(renderBuiltinSection).join('')}
</div>`;


const APIS_HTTP_CONTENT = `
<div class="content-area">

  <!-- Interview Note Banner -->
  <div style="background:rgba(244,63,94,0.08);border:1px solid rgba(244,63,94,0.22);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#f43f5e">Interview scope</strong> — APIs and HTTP codes are asked in almost every backend/fullstack interview. Know: what is an API, REST principles, HTTP methods, and the key status codes cold.
  </div>

  <!-- 1. What is an API -->
  <div class="accordion" id="acc-api-intro">
    <button class="accordion-header" onclick="toggleAcc('api-intro')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">🌐</span>
        <span>1. What is an API? (Starting Point)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-intro">
      <div style="padding:4px 0 12px">
        <div class="hbox" style="margin-bottom:12px">✅ <strong>Definition (INTERVIEW READY)</strong> — API (Application Programming Interface) is a way for two software applications to communicate with each other.</div>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px">🧠 Layman Example — The Restaurant Analogy</p>
        <div style="background:rgba(244,63,94,0.06);border:1px solid rgba(244,63,94,0.15);border-radius:8px;padding:12px 14px;margin-bottom:12px;font-size:13px;line-height:1.8;color:var(--text2)">
          <div style="margin-bottom:6px">Think of a restaurant 🍽️</div>
          <div>• <strong style="color:var(--text)">You</strong> → Customer</div>
          <div>• <strong style="color:var(--text)">Kitchen</strong> → Server / Database</div>
          <div>• <strong style="color:var(--text)">Waiter</strong> → API</div>
          <div style="margin-top:8px;color:var(--text)">You don't go inside the kitchen. You give an order → waiter → kitchen → food → waiter → you.</div>
          <div style="margin-top:8px;font-weight:700;color:#f43f5e">👉 API = Waiter</div>
        </div>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:6px">🔹 Why do we need APIs?</p>
        <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:12px">
          <li>One application cannot directly access another application's data</li>
          <li>APIs provide <strong style="color:var(--text)">controlled, secure</strong> communication</li>
          <li>Used in web apps, mobile apps, microservices</li>
        </ul>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:6px">🔹 Where are APIs used? (Real Life)</p>
        <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px">
          <li>Login with Google / Facebook</li>
          <li>Payment gateways (Razorpay, PayPal)</li>
          <li>Weather apps fetching live data</li>
          <li>Mobile apps talking to backend</li>
          <li>Frontend ↔ Backend communication</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 2. Request & Response -->
  <div class="accordion" id="acc-api-reqres">
    <button class="accordion-header" onclick="toggleAcc('api-reqres')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">📨</span>
        <span>2. Request &amp; Response</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-reqres">
      <div style="padding:4px 0 12px">
        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px">What is a Request?</p>
        <p style="font-size:13px;color:var(--text2);margin-bottom:8px">A request contains:</p>
        <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:10px">
          <li><strong style="color:var(--text)">URL</strong> (endpoint)</li>
          <li><strong style="color:var(--text)">HTTP method</strong> (GET, POST, etc.)</li>
          <li><strong style="color:var(--text)">Data</strong> (optional — for POST/PUT)</li>
        </ul>
        <div class="code-block"><div class="code-header"><span>Example Request</span></div><div class="code-body">GET /students</div></div>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin:14px 0 8px">What is a Response?</p>
        <p style="font-size:13px;color:var(--text2);margin-bottom:8px">A response contains:</p>
        <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:10px">
          <li><strong style="color:var(--text)">Status code</strong> (200, 404, etc.)</li>
          <li><strong style="color:var(--text)">Data</strong> (usually JSON)</li>
        </ul>
        <div class="code-block"><div class="code-header"><span>Example Response (JSON)</span></div><div class="code-body">{
  "rollNo": "101",
  "name": "Madan",
  "dept": "CSE"
}</div></div>
      </div>
    </div>
  </div>

  <!-- 3. REST API -->
  <div class="accordion" id="acc-api-rest">
    <button class="accordion-header" onclick="toggleAcc('api-rest')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">⚡</span>
        <span>3. What is a REST API? (Important)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-rest">
      <div style="padding:4px 0 12px">
        <div class="hbox" style="margin-bottom:12px">✅ <strong>Definition</strong> — REST (Representational State Transfer) is an architectural style for designing APIs using HTTP.</div>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:6px">🔹 Why REST API is popular?</p>
        <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:14px">
          <li>Simple and lightweight</li>
          <li>Uses standard HTTP</li>
          <li>Platform independent</li>
          <li>Works with JSON (easy to read)</li>
        </ul>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px">🔹 REST API HTTP Methods</p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:14px">
          <thead><tr style="background:rgba(244,63,94,0.1)">
            <th style="text-align:left;padding:8px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">Method</th>
            <th style="text-align:left;padding:8px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">Purpose</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 10px;color:#4ade80;font-weight:600">GET</td><td style="padding:8px 10px;color:var(--text2)">Fetch / Read data</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 10px;color:#60a5fa;font-weight:600">POST</td><td style="padding:8px 10px;color:var(--text2)">Create new data</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 10px;color:#fbbf24;font-weight:600">PUT</td><td style="padding:8px 10px;color:var(--text2)">Update existing data</td></tr>
            <tr><td style="padding:8px 10px;color:#f87171;font-weight:600">DELETE</td><td style="padding:8px 10px;color:var(--text2)">Remove data</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px">🔹 REST API Example — Student Project</p>
        <table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:14px">
          <thead><tr style="background:rgba(244,63,94,0.08)">
            <th style="text-align:left;padding:7px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">Operation</th>
            <th style="text-align:left;padding:7px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">Method</th>
            <th style="text-align:left;padding:7px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">Endpoint</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 10px;color:var(--text2)">Get all students</td><td style="padding:7px 10px;color:#4ade80;font-weight:600">GET</td><td style="padding:7px 10px;font-family:monospace;color:var(--text)">/students</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 10px;color:var(--text2)">Get one student</td><td style="padding:7px 10px;color:#4ade80;font-weight:600">GET</td><td style="padding:7px 10px;font-family:monospace;color:var(--text)">/students/101</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 10px;color:var(--text2)">Add student</td><td style="padding:7px 10px;color:#60a5fa;font-weight:600">POST</td><td style="padding:7px 10px;font-family:monospace;color:var(--text)">/students</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:7px 10px;color:var(--text2)">Update student</td><td style="padding:7px 10px;color:#fbbf24;font-weight:600">PUT</td><td style="padding:7px 10px;font-family:monospace;color:var(--text)">/students/101</td></tr>
            <tr><td style="padding:7px 10px;color:var(--text2)">Delete student</td><td style="padding:7px 10px;color:#f87171;font-weight:600">DELETE</td><td style="padding:7px 10px;font-family:monospace;color:var(--text)">/students/101</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:6px">🔹 REST API Principles (Light — Not Deep)</p>
        <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px">
          <li><strong style="color:var(--text)">Stateless</strong> — server doesn't store client session/state</li>
          <li>Uses standard HTTP methods</li>
          <li>Resource-based URLs (e.g. <code style="font-family:monospace;color:#f43f5e">/students/101</code>)</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 4. JSON -->
  <div class="accordion" id="acc-api-json">
    <button class="accordion-header" onclick="toggleAcc('api-json')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">📦</span>
        <span>4. What is JSON? (API Basic)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-json">
      <div style="padding:4px 0 12px">
        <div class="hbox" style="margin-bottom:12px">JSON is a <strong>lightweight data format</strong> used to send data between client and server. Easy for humans to read and machines to parse.</div>
        <div class="code-block"><div class="code-header"><span>JSON Example</span></div><div class="code-body">{
  "rollNo": "102",
  "name": "Ravi",
  "email": "ravi@gmail.com"
}</div></div>
        <div style="margin-top:10px;font-size:13px;color:var(--text2)">
          <strong style="color:var(--text)">Key points:</strong>
          <ul style="padding-left:18px;margin-top:6px;line-height:1.9">
            <li>Data in <code style="font-family:monospace;color:#f43f5e">key: value</code> pairs</li>
            <li>Keys are always strings (in quotes)</li>
            <li>Values can be string, number, boolean, array, or object</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- 5. API vs REST API -->
  <div class="accordion" id="acc-api-vs-rest">
    <button class="accordion-header" onclick="toggleAcc('api-vs-rest')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">🆚</span>
        <span>5. API vs REST API (Very Common)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-vs-rest">
      <div style="padding:4px 0 12px">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead><tr style="background:rgba(244,63,94,0.08)">
            <th style="text-align:left;padding:8px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">API</th>
            <th style="text-align:left;padding:8px 10px;color:#f43f5e;border-bottom:1px solid rgba(244,63,94,0.2)">REST API</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 10px;color:var(--text2)">General interface between apps</td><td style="padding:8px 10px;color:var(--text2)">A specific type of API</td></tr>
            <tr style="border-bottom:1px solid var(--border)"><td style="padding:8px 10px;color:var(--text2)">Can use any protocol</td><td style="padding:8px 10px;color:var(--text2)">Uses HTTP only</td></tr>
            <tr><td style="padding:8px 10px;color:var(--text2)">May use XML, JSON, or others</td><td style="padding:8px 10px;color:var(--text2)">Mostly JSON</td></tr>
          </tbody>
        </table>
        <div class="sbox" style="margin-top:12px">💡 <strong>One-liner for interview:</strong> All REST APIs are APIs, but not all APIs are REST APIs.</div>
      </div>
    </div>
  </div>

  <!-- 6. HTTP Status Codes -->
  <div class="accordion" id="acc-api-statuscodes">
    <button class="accordion-header" onclick="toggleAcc('api-statuscodes')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">🔢</span>
        <span>6. HTTP Status Codes (Interview Favorite ⭐)</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-statuscodes">
      <div style="padding:4px 0 12px">
        <div class="hbox" style="margin-bottom:14px">HTTP status codes are 3-digit responses from the server to the browser/client. Grouped by their first digit — <strong>1xx Info, 2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error</strong>.</div>

        <!-- 2xx Success -->
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#4ade80;margin-bottom:8px">✅ 2xx — Success</p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px">
          <tbody>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px;width:60px"><span style="font-weight:700;color:#4ade80;font-family:monospace">200</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">OK</td>
              <td style="padding:9px 10px;color:var(--text2)">Request succeeded. Standard success for GET.</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#4ade80;font-family:monospace">201</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Created</td>
              <td style="padding:9px 10px;color:var(--text2)">Resource created successfully — returned after POST.</td>
            </tr>
            <tr>
              <td style="padding:9px 10px"><span style="font-weight:700;color:#4ade80;font-family:monospace">204</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">No Content</td>
              <td style="padding:9px 10px;color:var(--text2)">Success but no body returned — common for DELETE.</td>
            </tr>
          </tbody>
        </table>

        <!-- 3xx Redirection -->
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#60a5fa;margin-bottom:8px">↪️ 3xx — Redirection</p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px">
          <tbody>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px;width:60px"><span style="font-weight:700;color:#60a5fa;font-family:monospace">301</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Moved Permanently</td>
              <td style="padding:9px 10px;color:var(--text2)">URL has permanently changed. Browser updates bookmark.</td>
            </tr>
            <tr>
              <td style="padding:9px 10px"><span style="font-weight:700;color:#60a5fa;font-family:monospace">304</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Not Modified</td>
              <td style="padding:9px 10px;color:var(--text2)">Cached version is still valid — use the cache.</td>
            </tr>
          </tbody>
        </table>

        <!-- 4xx Client Errors -->
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#fbbf24;margin-bottom:8px">⚠️ 4xx — Client Error (Your Fault)</p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px">
          <tbody>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px;width:60px"><span style="font-weight:700;color:#fbbf24;font-family:monospace">400</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Bad Request</td>
              <td style="padding:9px 10px;color:var(--text2)">Invalid input / malformed request sent by client.</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#fbbf24;font-family:monospace">401</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Unauthorized</td>
              <td style="padding:9px 10px;color:var(--text2)">Not logged in / missing or invalid auth token.</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#fbbf24;font-family:monospace">403</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Forbidden</td>
              <td style="padding:9px 10px;color:var(--text2)">Logged in but no permission for this resource.</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#fbbf24;font-family:monospace">404</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Not Found</td>
              <td style="padding:9px 10px;color:var(--text2)">The requested resource doesn't exist. Very common!</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#fbbf24;font-family:monospace">405</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Method Not Allowed</td>
              <td style="padding:9px 10px;color:var(--text2)">HTTP method not supported for this endpoint.</td>
            </tr>
            <tr>
              <td style="padding:9px 10px"><span style="font-weight:700;color:#fbbf24;font-family:monospace">429</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Too Many Requests</td>
              <td style="padding:9px 10px;color:var(--text2)">Rate limit exceeded — slow down your requests.</td>
            </tr>
          </tbody>
        </table>

        <!-- 5xx Server Errors -->
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#f87171;margin-bottom:8px">🔥 5xx — Server Error (Server's Fault)</p>
        <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:14px">
          <tbody>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px;width:60px"><span style="font-weight:700;color:#f87171;font-family:monospace">500</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Internal Server Error</td>
              <td style="padding:9px 10px;color:var(--text2)">Generic server crash — something went wrong on the backend.</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#f87171;font-family:monospace">502</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Bad Gateway</td>
              <td style="padding:9px 10px;color:var(--text2)">Server got an invalid response from an upstream server.</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border)">
              <td style="padding:9px 10px"><span style="font-weight:700;color:#f87171;font-family:monospace">503</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Service Unavailable</td>
              <td style="padding:9px 10px;color:var(--text2)">Server is down or overloaded — try again later.</td>
            </tr>
            <tr>
              <td style="padding:9px 10px"><span style="font-weight:700;color:#f87171;font-family:monospace">504</span></td>
              <td style="padding:9px 10px;font-weight:600;color:var(--text)">Gateway Timeout</td>
              <td style="padding:9px 10px;color:var(--text2)">Upstream server didn't respond in time.</td>
            </tr>
          </tbody>
        </table>

        <!-- Quick Memory Trick -->
        <div style="background:rgba(244,63,94,0.06);border:1px solid rgba(244,63,94,0.18);border-radius:8px;padding:12px 14px;font-size:12.5px;line-height:1.9;color:var(--text2)">
          <strong style="color:#f43f5e">🧠 Memory Trick for Interview:</strong><br/>
          <span style="color:var(--text)">1xx</span> = Hang on… &nbsp;|&nbsp; <span style="color:#4ade80">2xx</span> = Here you go ✅ &nbsp;|&nbsp; <span style="color:#60a5fa">3xx</span> = Go away → &nbsp;|&nbsp; <span style="color:#fbbf24">4xx</span> = You messed up ⚠️ &nbsp;|&nbsp; <span style="color:#f87171">5xx</span> = I messed up 🔥
        </div>
      </div>
    </div>
  </div>

  <!-- 7. Quick Revision -->
  <div class="accordion" id="acc-api-qrev">
    <button class="accordion-header" onclick="toggleAcc('api-qrev')">
      <span style="display:flex;align-items:center;gap:8px">
        <span style="color:#f43f5e">⚡</span>
        <span>7. Quick Revision — Interview One-Liners</span>
      </span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-api-qrev">
      <div style="padding:4px 0 12px">
        <ul style="font-size:13px;color:var(--text2);line-height:2;padding-left:18px">
          <li><strong style="color:var(--text)">API</strong> = interface for two apps to talk</li>
          <li><strong style="color:var(--text)">REST API</strong> = API that follows REST rules using HTTP</li>
          <li><strong style="color:var(--text)">GET</strong> = read, <strong style="color:var(--text)">POST</strong> = create, <strong style="color:var(--text)">PUT</strong> = update, <strong style="color:var(--text)">DELETE</strong> = remove</li>
          <li><strong style="color:var(--text)">200</strong> = OK, <strong style="color:var(--text)">201</strong> = Created, <strong style="color:var(--text)">204</strong> = No Content</li>
          <li><strong style="color:var(--text)">400</strong> = Bad Request, <strong style="color:var(--text)">401</strong> = Unauthorized, <strong style="color:var(--text)">403</strong> = Forbidden</li>
          <li><strong style="color:var(--text)">404</strong> = Not Found, <strong style="color:var(--text)">500</strong> = Server Error</li>
          <li><strong style="color:var(--text)">JSON</strong> = lightweight key-value format used in API responses</li>
          <li><strong style="color:var(--text)">Stateless</strong> = server doesn't remember previous requests</li>
        </ul>
      </div>
    </div>
  </div>

</div>
`;
function toggleAcc(id) {
  const header = document.querySelector(`#acc-${id} .accordion-header`);
  const body = document.getElementById(`body-${id}`);
  if (!header || !body) return;
  const isOpen = body.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

const KUBERNETES_CONTENT = `
<div class="content-area">

  <div style="background:rgba(59,130,246,0.07);border:1px solid rgba(59,130,246,0.22);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    ⚙️ <strong style="color:#3b82f6">Interview Ready</strong> — Kubernetes (K8s) is the industry-standard container orchestration platform. Cover: What it is, core components (Pod, Deployment, ReplicaSet, Service, Node, Cluster), YAML basics, and must-know kubectl commands.
  </div>

  <!-- 1. What is Kubernetes -->
  <div class="accordion" id="acc-k8s-what">
    <button class="accordion-header" onclick="toggleAcc('k8s-what')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">⚙️</span><span>1. What is Kubernetes?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-what">
      <div class="hbox"><strong>Kubernetes</strong> is an open-source <strong>container orchestration platform</strong> that automates deploying, managing, scaling, and recovering containerized applications.</div>
      <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <strong style="color:#3b82f6">Docker vs Kubernetes:</strong><br>
        <span style="color:var(--text2)">🐳 <strong>Docker</strong> creates and runs containers &nbsp;|&nbsp; ⚙️ <strong>Kubernetes</strong> manages containers at scale (scheduling, healing, scaling).</span>
      </div>
      <p class="section-label">Key Features</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">✅ <strong style="color:#3b82f6">Self-healing</strong> — Automatically restarts failed containers</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">✅ <strong style="color:#3b82f6">Auto-scaling</strong> — Adds or removes instances based on load</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">✅ <strong style="color:#3b82f6">Load balancing</strong> — Distributes traffic across Pods</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">✅ <strong style="color:#3b82f6">High availability</strong> — Keeps apps running even if nodes fail</div>
      </div>
      <div class="sbox">✅ <strong>One-liner:</strong> Kubernetes is a container orchestration platform used to manage containerized applications at scale.</div>
    </div>
  </div>

  <!-- 2. Pod -->
  <div class="accordion" id="acc-k8s-pod">
    <button class="accordion-header" onclick="toggleAcc('k8s-pod')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">📦</span><span>2. What is a Pod?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-pod">
      <div class="hbox"><strong>Pod</strong> is the <strong>smallest deployable unit</strong> in Kubernetes. It wraps one or more containers and gives them a shared network and storage.</div>
      <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <strong style="color:#3b82f6">Key point:</strong><br>
        <span style="color:var(--text2)">Kubernetes manages <strong>Pods</strong>, not containers directly. A Pod usually contains <strong>one container</strong>.</span>
      </div>
      <p class="section-label">Hierarchy</p>
      <div class="qrev-card" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;padding:12px 16px;border-radius:8px;line-height:2;margin-bottom:10px">
        Application → Container → <strong style="color:#3b82f6">Pod</strong>
      </div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A Pod is the smallest deployable unit in Kubernetes that wraps one or more containers sharing network and storage.</div>
    </div>
  </div>

  <!-- 3. Deployment -->
  <div class="accordion" id="acc-k8s-deploy">
    <button class="accordion-header" onclick="toggleAcc('k8s-deploy')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🚀</span><span>3. What is a Deployment?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-deploy">
      <div class="hbox"><strong>Deployment</strong> manages Pods and ensures the desired number of Pod replicas are always running using a <strong>ReplicaSet</strong> underneath.</div>
      <p class="section-label">Features</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">🔁 <strong style="color:#3b82f6">Self-healing</strong> — If a Pod crashes, the Deployment recreates it automatically via ReplicaSet</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">📈 <strong style="color:#3b82f6">Scaling</strong> — Easily scale up or down the number of Pods</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">🔄 <strong style="color:#3b82f6">Rolling updates</strong> — Update app version without downtime</div>
      </div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A Deployment manages Pods and maintains the desired number of Pod replicas automatically.</div>
    </div>
  </div>

  <!-- 4. ReplicaSet -->
  <div class="accordion" id="acc-k8s-rs">
    <button class="accordion-header" onclick="toggleAcc('k8s-rs')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🔁</span><span>4. What is a ReplicaSet?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-rs">
      <div class="hbox"><strong>ReplicaSet</strong> ensures that the specified number of Pod replicas are <strong>always running</strong>. If a Pod dies, ReplicaSet creates a new one.</div>
      <p class="section-label">Architecture Chain</p>
      <div class="qrev-card" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;padding:12px 16px;border-radius:8px;line-height:2;margin-bottom:10px">
        You → Deployment → <strong style="color:#3b82f6">ReplicaSet</strong> → Pods → Containers
      </div>
      <p class="section-label">Self-healing Example (replicas: 3)</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Before Crash</th><th>After Crash</th><th>After ReplicaSet heals</th></tr></thead>
        <tbody>
          <tr><td>Pod1 ✅</td><td>Pod1 ✅</td><td>Pod1 ✅</td></tr>
          <tr><td>Pod2 ✅</td><td>Pod2 ❌</td><td>New Pod2 ✅</td></tr>
          <tr><td>Pod3 ✅</td><td>Pod3 ✅</td><td>Pod3 ✅</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A ReplicaSet ensures the specified number of Pod replicas are always running. If a Pod crashes, it automatically creates a new one.</div>
    </div>
  </div>

  <!-- 5. Replica -->
  <div class="accordion" id="acc-k8s-replica">
    <button class="accordion-header" onclick="toggleAcc('k8s-replica')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">📋</span><span>5. What is a Replica?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-replica">
      <div class="hbox">A <strong>Replica</strong> is simply a <strong>copy of a Pod</strong>. Setting <code style="background:rgba(59,130,246,0.12);padding:1px 6px;border-radius:4px;font-size:12px">replicas: 3</code> tells Kubernetes to always keep 3 identical Pods running.</div>
      <p class="section-label">Benefits</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">🟢 <strong style="color:#3b82f6">High availability</strong> — App stays up even if one Pod dies</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">⚖️ <strong style="color:#3b82f6">Load distribution</strong> — Traffic is spread across multiple Pods</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">🛡️ <strong style="color:#3b82f6">Fault tolerance</strong> — System continues working despite failures</div>
      </div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A Replica is a copy of a Pod used to improve availability and handle more traffic.</div>
    </div>
  </div>

  <!-- 6. Service -->
  <div class="accordion" id="acc-k8s-service">
    <button class="accordion-header" onclick="toggleAcc('k8s-service')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🌐</span><span>6. What is a Service?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-service">
      <div class="hbox"><strong>Service</strong> provides a stable endpoint (IP + DNS) to access Pods. Since Pod IPs change every time a Pod restarts, users always connect to the Service instead.</div>
      <p class="section-label">Why Service is needed</p>
      <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <span style="color:var(--text2)">❌ Without Service: Pod dies → new Pod gets a new IP → users can't connect<br>✅ With Service: Users always hit the same stable IP/DNS — Service routes to healthy Pods</span>
      </div>
      <p class="section-label">Traffic Flow</p>
      <div class="qrev-card" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;padding:12px 16px;border-radius:8px;line-height:2;margin-bottom:10px">
        Users → <strong style="color:#3b82f6">Service</strong> → Pod1 / Pod2 / Pod3
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">🔒 <strong style="color:#3b82f6">Stable IP &amp; DNS</strong> — Doesn't change when Pods restart</div>
        <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:8px;padding:10px 14px;font-size:13px">⚖️ <strong style="color:#3b82f6">Load balancing</strong> — Routes traffic evenly across all healthy Pods</div>
      </div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A Service provides a stable way to access Pods and distributes traffic among them, regardless of Pod restarts.</div>
    </div>
  </div>

  <!-- 7. Node -->
  <div class="accordion" id="acc-k8s-node">
    <button class="accordion-header" onclick="toggleAcc('k8s-node')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🖥️</span><span>7. What is a Node?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-node">
      <div class="hbox"><strong>Node</strong> is a physical or virtual machine that runs Pods. It provides the CPU, memory, and storage that Pods need to operate.</div>
      <p class="section-label">Node contains</p>
      <div class="qrev-card" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;padding:12px 16px;border-radius:8px;line-height:2;margin-bottom:10px">
        <strong style="color:#3b82f6">Node</strong><br>
        ├── Pod1<br>
        ├── Pod2<br>
        └── Pod3
      </div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A Node is a machine (physical or virtual) that runs Pods and provides CPU, memory, and storage resources.</div>
    </div>
  </div>

  <!-- 8. Cluster -->
  <div class="accordion" id="acc-k8s-cluster">
    <button class="accordion-header" onclick="toggleAcc('k8s-cluster')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🏗️</span><span>8. What is a Cluster?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-cluster">
      <div class="hbox"><strong>Cluster</strong> is a group of Nodes managed together by Kubernetes. It is the entire K8s environment.</div>
      <p class="section-label">Cluster Structure</p>
      <div class="qrev-card" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;padding:12px 16px;border-radius:8px;line-height:2;margin-bottom:10px">
        <strong style="color:#3b82f6">Cluster</strong><br>
        ├── Node1 → Pod1, Pod2<br>
        └── Node2 → Pod3, Pod4
      </div>
      <div class="sbox">✅ <strong>Interview answer:</strong> A Cluster is a group of Nodes managed by Kubernetes as a single system.</div>
    </div>
  </div>

  <!-- 9. YAML -->
  <div class="accordion" id="acc-k8s-yaml">
    <button class="accordion-header" onclick="toggleAcc('k8s-yaml')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">📄</span><span>9. YAML in Kubernetes</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-yaml">
      <div class="hbox"><strong>YAML</strong> is the configuration language used to define Kubernetes resources <strong>declaratively</strong> — you describe what you want, K8s makes it happen.</div>
      <p class="section-label">Example Deployment YAML</p>
      <div class="code-block" style="margin-bottom:12px">
        <div class="code-header"><span>deployment.yaml</span></div>
        <pre class="code-body">apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80</pre>
      </div>
      <p class="section-label">Key Fields</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Field</th><th>What it does</th><th>Example values</th></tr></thead>
        <tbody>
          <tr><td style="color:#3b82f6">kind</td><td>Type of K8s object to create</td><td>Pod, Deployment, Service</td></tr>
          <tr><td style="color:#3b82f6">metadata.name</td><td>Name of the object</td><td>nginx-deployment</td></tr>
          <tr><td style="color:#3b82f6">spec.replicas</td><td>How many Pods to run</td><td>3</td></tr>
          <tr><td style="color:#3b82f6">spec.template</td><td>Pod template (container config)</td><td>image, ports, env</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview answer:</strong> YAML files are used to define Kubernetes resources declaratively — you describe the desired state and K8s ensures it.</div>
    </div>
  </div>

  <!-- 10. kubectl -->
  <div class="accordion" id="acc-k8s-kubectl">
    <button class="accordion-header" onclick="toggleAcc('k8s-kubectl')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">💻</span><span>10. kubectl — CLI Commands</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-kubectl">
      <div class="hbox"><strong>kubectl</strong> is the command-line tool to interact with and manage Kubernetes clusters.</div>
      <p class="section-label">Must-Know Commands</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Command</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td style="color:#3b82f6;font-family:'JetBrains Mono',monospace;font-size:12px">kubectl apply -f deployment.yaml</td><td>Create/update resources from YAML file</td></tr>
          <tr><td style="color:#3b82f6;font-family:'JetBrains Mono',monospace;font-size:12px">kubectl get pods</td><td>List all running Pods</td></tr>
          <tr><td style="color:#3b82f6;font-family:'JetBrains Mono',monospace;font-size:12px">kubectl get all</td><td>List all resources in cluster</td></tr>
          <tr><td style="color:#3b82f6;font-family:'JetBrains Mono',monospace;font-size:12px">kubectl describe pod pod-name</td><td>Show detailed info about a Pod</td></tr>
          <tr><td style="color:#3b82f6;font-family:'JetBrains Mono',monospace;font-size:12px">kubectl logs pod-name</td><td>View logs of a Pod</td></tr>
          <tr><td style="color:#3b82f6;font-family:'JetBrains Mono',monospace;font-size:12px">kubectl delete deployment nginx</td><td>Delete a Deployment</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview answer:</strong> kubectl is the CLI tool used to manage and interact with Kubernetes clusters.</div>
    </div>
  </div>

  <!-- 11. Full Hierarchy -->
  <div class="accordion" id="acc-k8s-hierarchy">
    <button class="accordion-header" onclick="toggleAcc('k8s-hierarchy')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🗂️</span><span>11. Kubernetes Full Hierarchy</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-hierarchy">
      <div class="hbox">The complete chain from your application code to the Kubernetes infrastructure:</div>
      <div class="qrev-card" style="font-family:'JetBrains Mono',monospace;font-size:13px;padding:16px 20px;border-radius:8px;line-height:2.4;margin-bottom:12px;text-align:center">
        Application<br>
        ↓<br>
        Container<br>
        ↓<br>
        <strong style="color:#3b82f6">Pod</strong><br>
        ↓<br>
        <strong style="color:#3b82f6">ReplicaSet</strong><br>
        ↓<br>
        <strong style="color:#3b82f6">Deployment</strong><br>
        ↓<br>
        <strong style="color:#3b82f6">Service</strong><br>
        ↓<br>
        <strong style="color:#3b82f6">Node</strong><br>
        ↓<br>
        <strong style="color:#3b82f6">Cluster</strong>
      </div>
      <div class="sbox">💡 <strong>Memory trick:</strong> "A Can Park Right During Sunny Nights Carefully" → App, Container, Pod, ReplicaSet, Deployment, Service, Node, Cluster</div>
    </div>
  </div>

  <!-- 12. Top Interview Q&A -->
  <div class="accordion" id="acc-k8s-qa">
    <button class="accordion-header" onclick="toggleAcc('k8s-qa')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#3b82f6">🎯</span><span>12. Top Interview Questions</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-k8s-qa">
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: What is Kubernetes?</div>
          <div style="font-size:13px;color:var(--text2)">A container orchestration platform that automates deployment, scaling, and management of containerized applications.</div>
        </div>
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: What is a Pod?</div>
          <div style="font-size:13px;color:var(--text2)">The smallest deployable unit in Kubernetes that wraps one or more containers with shared network and storage.</div>
        </div>
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: What is a Deployment?</div>
          <div style="font-size:13px;color:var(--text2)">An object that manages Pods and maintains the desired number of replicas via a ReplicaSet, with self-healing and rolling updates.</div>
        </div>
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: Difference between Deployment and ReplicaSet?</div>
          <div style="font-size:13px;color:var(--text2)">Deployment is higher-level and supports rolling updates &amp; rollbacks. ReplicaSet only maintains Pod count. Deployment manages the ReplicaSet.</div>
        </div>
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: Why do we need a Service?</div>
          <div style="font-size:13px;color:var(--text2)">Pod IPs change when Pods restart. A Service provides a stable DNS/IP endpoint that always routes traffic to healthy Pods.</div>
        </div>
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: What is the difference between a Node and a Cluster?</div>
          <div style="font-size:13px;color:var(--text2)">A Node is a single machine that runs Pods. A Cluster is a group of Nodes managed together by Kubernetes.</div>
        </div>
        <div class="qrev-card" style="padding:12px 15px;border-radius:8px">
          <div class="qrev-key" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:5px">Q: What is kubectl?</div>
          <div style="font-size:13px;color:var(--text2)">A CLI tool used to deploy, inspect, manage, and delete Kubernetes resources by sending commands to the cluster API.</div>
        </div>
      </div>
    </div>
  </div>

</div>
`;

const JDBC_CONTENT = `
<div class="content-area">

  <!-- Interview Note Banner -->
  <div style="background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#6366f1">Interview scope</strong> — Know the 7 JDBC steps cold, Connection vs Statement vs PreparedStatement, ResultSet, executeQuery() vs executeUpdate() vs execute(), and the JDBC URL format. This is exactly the JDBC you used in your Student DBMS project.
  </div>

  <!-- 1. What is JDBC -->
  <div class="accordion" id="acc-jdbc-intro">
    <button class="accordion-header" onclick="toggleAcc('jdbc-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🗄️</span><span>1. What is JDBC?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-intro">
      <div class="hbox"><strong>JDBC (Java Database Connectivity)</strong> is an API that enables Java applications to connect and interact with relational databases such as MySQL, Oracle, and PostgreSQL.</div>

      <p class="section-label">Key Features</p>
      <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:12px">
        <li>Database connectivity to any relational database</li>
        <li>Platform independent — same Java code works everywhere</li>
        <li>Supports SQL queries directly from Java code</li>
        <li>Provides full CRUD operations (Create, Read, Update, Delete)</li>
        <li>Supports multiple databases through different drivers</li>
      </ul>

      <p class="section-label">JDBC Flow</p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:13px;text-align:center"><strong style="color:#6366f1">Java Application</strong></div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:13px;text-align:center"><strong style="color:#6366f1">JDBC</strong></div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:10px 14px;font-size:13px;text-align:center"><strong style="color:#10b981">Database</strong></div>
      </div>

      <div class="sbox">⭐ <strong>Interview answer:</strong> "JDBC is an API that allows Java applications to communicate with relational databases and perform operations like Insert, Update, Delete, and Select."</div>
    </div>
  </div>

  <!-- 2. JDBC Architecture -->
  <div class="accordion" id="acc-jdbc-arch">
    <button class="accordion-header" onclick="toggleAcc('jdbc-arch')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🏗️</span><span>2. JDBC Architecture</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-arch">
      <div class="hbox">JDBC architecture sits between your Java code and the database, with four layers handling the handoff.</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin:10px 0 14px">
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px"><span style="font-size:16px">☕</span><span><strong style="color:#6366f1">Java Application</strong> — your code calling JDBC methods</span></div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px"><span style="font-size:16px">🧩</span><span><strong style="color:#6366f1">JDBC API</strong> — Connection, Statement, ResultSet interfaces</span></div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px"><span style="font-size:16px">🧭</span><span><strong style="color:#6366f1">DriverManager</strong> — picks the right driver, creates the connection</span></div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px"><span style="font-size:16px">🌉</span><span><strong style="color:#6366f1">JDBC Driver</strong> — converts Java calls into DB-specific commands</span></div>
        <div style="text-align:center;color:var(--text3);font-size:16px">↓</div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:10px"><span style="font-size:16px">🗄️</span><span><strong style="color:#10b981">Database</strong> — MySQL, Oracle, PostgreSQL, etc.</span></div>
      </div>
      <div class="sbox">✅ <strong>One-liner:</strong> Java Application → JDBC API → DriverManager → JDBC Driver → Database.</div>
    </div>
  </div>

  <!-- 3. JDBC Driver -->
  <div class="accordion" id="acc-jdbc-driver">
    <button class="accordion-header" onclick="toggleAcc('jdbc-driver')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🌉</span><span>3. JDBC Driver</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-driver">
      <div class="hbox">A <strong>JDBC Driver</strong> acts as a bridge between the Java application and the database — it translates JDBC calls into the database's native protocol.</div>
      <p class="section-label">MySQL Driver Class</p>
      <div style="margin-bottom:10px"><code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">com.mysql.cj.jdbc.Driver</code></div>
      <div class="sbox">⭐ <strong>Interview answer:</strong> "A JDBC Driver converts Java calls into database-specific commands and enables communication with the database."</div>
    </div>
  </div>

  <!-- 4. The 7 Steps of JDBC -->
  <div class="accordion" id="acc-jdbc-steps">
    <button class="accordion-header" onclick="toggleAcc('jdbc-steps')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🪜</span><span>4. The 7 Steps of JDBC</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-steps">
      <div class="hbox">There are <strong>seven steps</strong> involved in every JDBC program — this is the single most asked JDBC question.</div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 1 — Import Package</strong></div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 1</span></div>
        <div class="code-body"><span class="kw">import</span> java.sql.*;</div>
      </div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 2 — Load and Register Driver</strong></div>
      <div class="code-block" style="margin-bottom:6px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 2</span></div>
        <div class="code-body"><span class="typ">Class</span>.<span class="fn">forName</span>(<span class="str">"com.mysql.cj.jdbc.Driver"</span>);</div>
      </div>
      <div class="ybox" style="margin-bottom:14px">Java 8+ automatically loads the driver if the JAR is on the classpath — this line is often optional now, but interviewers still expect you to know it.</div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 3 — Establish Connection</strong></div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 3</span></div>
        <div class="code-body"><span class="typ">Connection</span> con =
    <span class="fn">DriverManager.getConnection</span>(url, username, password);</div>
      </div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 4 — Create Statement</strong></div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 4</span></div>
        <div class="code-body"><span class="typ">Statement</span> st = con.<span class="fn">createStatement</span>();
<span class="cmt">// or</span>
<span class="typ">PreparedStatement</span> ps = con.<span class="fn">prepareStatement</span>(query);</div>
      </div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 5 — Execute Query</strong></div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 5</span></div>
        <div class="code-body"><span class="typ">ResultSet</span> rs = st.<span class="fn">executeQuery</span>(query);
<span class="cmt">// or</span>
<span class="kw">int</span> count = st.<span class="fn">executeUpdate</span>(query);</div>
      </div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 6 — Process Result</strong></div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 6</span></div>
        <div class="code-body"><span class="kw">while</span>(rs.<span class="fn">next</span>())
{
    System.out.<span class="fn">println</span>(rs.<span class="fn">getString</span>(<span class="num">1</span>));
}</div>
      </div>

      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:10px 14px;font-size:12.5px;margin-bottom:6px"><strong style="color:#6366f1">Step 7 — Close Connection</strong></div>
      <div class="code-block" style="margin-bottom:16px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Step 7</span></div>
        <div class="code-body">rs.<span class="fn">close</span>();
st.<span class="fn">close</span>();
con.<span class="fn">close</span>();</div>
      </div>

      <p class="section-label">Complete JDBC Flow</p>
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:4px">
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Java Program</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Import Package</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Load Driver</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Create Connection</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Create Statement</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Execute Query</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#a5b4fc">Process Result</span>
        <span style="color:var(--text3)">→</span>
        <span style="background:rgba(16,185,129,0.10);border:1px solid rgba(16,185,129,0.25);border-radius:99px;padding:5px 12px;font-size:12px;color:#6ee7b7">Close Connection</span>
      </div>
    </div>
  </div>

  <!-- 5. Connection Interface -->
  <div class="accordion" id="acc-jdbc-connection">
    <button class="accordion-header" onclick="toggleAcc('jdbc-connection')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🔗</span><span>5. Connection Interface</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-connection">
      <div class="hbox"><strong>Connection</strong> represents a session between Java and the database.</div>
      <div class="code-block" style="margin-bottom:12px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Example</span></div>
        <div class="code-body"><span class="typ">Connection</span> con =
<span class="fn">DriverManager.getConnection</span>(url, user, password);</div>
      </div>
      <p class="section-label">Responsibilities</p>
      <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:12px">
        <li>Connects to the database</li>
        <li>Creates Statement and PreparedStatement objects</li>
        <li>Manages transactions</li>
      </ul>
      <div class="sbox">⭐ <strong>Interview answer:</strong> "Connection interface represents the connection between Java application and database."</div>
    </div>
  </div>

  <!-- 6. Statement & PreparedStatement -->
  <div class="accordion" id="acc-jdbc-statement">
    <button class="accordion-header" onclick="toggleAcc('jdbc-statement')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">📝</span><span>6. Statement &amp; PreparedStatement</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-statement">
      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <strong style="color:#6366f1">Statement</strong> — <span style="color:var(--text2)">used to execute SQL queries. Compiled by the database every single time it runs.</span>
      </div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Statement Example</span></div>
        <div class="code-body"><span class="typ">Statement</span> st =
con.<span class="fn">createStatement</span>();

<span class="typ">ResultSet</span> rs =
st.<span class="fn">executeQuery</span>(query);</div>
      </div>

      <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:13px 15px;font-size:13px;margin-bottom:10px">
        <strong style="color:#10b981">PreparedStatement</strong> — <span style="color:var(--text2)">a precompiled SQL statement. Compiled once, then reused with different parameter values.</span>
      </div>
      <div class="code-block" style="margin-bottom:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">PreparedStatement Example</span></div>
        <div class="code-body"><span class="typ">String</span> query =
<span class="str">"insert into student values(?,?,?)"</span>;

<span class="typ">PreparedStatement</span> ps =
con.<span class="fn">prepareStatement</span>(query);

ps.<span class="fn">setInt</span>(<span class="num">1</span>,<span class="num">1</span>);
ps.<span class="fn">setString</span>(<span class="num">2</span>,<span class="str">"Madan"</span>);
ps.<span class="fn">setInt</span>(<span class="num">3</span>,<span class="num">22</span>);

ps.<span class="fn">executeUpdate</span>();</div>
      </div>

      <p class="section-label">Advantages of PreparedStatement</p>
      <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px;margin-bottom:12px">
        <li>Faster — query compiled only once</li>
        <li>Prevents SQL Injection</li>
        <li>Reusable with different parameter values</li>
      </ul>

      <p class="section-label">Statement vs PreparedStatement</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Statement</th><th>PreparedStatement</th></tr></thead>
        <tbody>
          <tr><td>Query compiled every time</td><td>Query compiled once</td></tr>
          <tr><td>Slow</td><td>Faster</td></tr>
          <tr><td>Vulnerable to SQL Injection</td><td>Prevents SQL Injection</td></tr>
          <tr><td>Simple queries</td><td>Parameterized queries</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ <strong>Interview answer:</strong> "PreparedStatement is a precompiled statement that improves performance and prevents SQL Injection attacks."</div>
    </div>
  </div>

  <!-- 7. ResultSet & Its Methods -->
  <div class="accordion" id="acc-jdbc-resultset">
    <button class="accordion-header" onclick="toggleAcc('jdbc-resultset')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">📊</span><span>7. ResultSet &amp; Its Methods</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-resultset">
      <div class="hbox"><strong>ResultSet</strong> stores the rows of data returned from a SELECT query.</div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Traversing Rows</span></div>
        <div class="code-body"><span class="typ">ResultSet</span> rs =
st.<span class="fn">executeQuery</span>(query);

<span class="kw">while</span>(rs.<span class="fn">next</span>())
{
    <span class="kw">int</span> id = rs.<span class="fn">getInt</span>(<span class="num">1</span>);
    <span class="typ">String</span> name = rs.<span class="fn">getString</span>(<span class="num">2</span>);
}</div>
      </div>

      <p class="section-label">Move Cursor</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.next()</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.previous()</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.first()</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.last()</code>
      </div>

      <p class="section-label">Retrieve Values</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px">
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.getInt(1)</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.getString(2)</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.getDouble(3)</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.getDate(4)</code>
        <code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">rs.getString("name")</code>
      </div>
      <div class="ybox" style="margin-bottom:10px">Columns can be accessed either by <strong>index</strong> (1-based, e.g. <code>rs.getInt(1)</code>) or by <strong>column name</strong> (e.g. <code>rs.getString("name")</code>).</div>
      <div class="sbox">⭐ <strong>Interview answer:</strong> "ResultSet stores rows returned by a SELECT statement." rs.next() moves the cursor to the next row and returns true if a row exists.</div>
    </div>
  </div>

  <!-- 8. executeQuery vs executeUpdate vs execute -->
  <div class="accordion" id="acc-jdbc-execute">
    <button class="accordion-header" onclick="toggleAcc('jdbc-execute')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🏃</span><span>8. executeQuery() vs executeUpdate() vs execute()</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-execute">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Method</th><th>Used For</th><th>Returns</th></tr></thead>
        <tbody>
          <tr><td style="color:#6366f1">executeQuery()</td><td>SELECT</td><td>ResultSet</td></tr>
          <tr><td style="color:#6366f1">executeUpdate()</td><td>INSERT, UPDATE, DELETE</td><td>int (rows affected)</td></tr>
          <tr><td style="color:#6366f1">execute()</td><td>General-purpose — query type unknown</td><td>boolean</td></tr>
        </tbody>
      </table></div>

      <div class="code-block" style="margin-bottom:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Examples</span></div>
        <div class="code-body"><span class="typ">ResultSet</span> rs =
st.<span class="fn">executeQuery</span>(<span class="str">"select * from student"</span>);

<span class="kw">int</span> count =
st.<span class="fn">executeUpdate</span>(query);  <span class="cmt">// e.g. "1 row affected"</span>

<span class="kw">boolean</span> result =
st.<span class="fn">execute</span>(query);</div>
      </div>
      <div class="sbox">✅ <strong>Memory trick:</strong> executeQuery = SELECT only · executeUpdate = write operations + row count · execute = use when you don't know the query type in advance.</div>
    </div>
  </div>

  <!-- 9. DDL, DML, DQL -->
  <div class="accordion" id="acc-jdbc-ddl">
    <button class="accordion-header" onclick="toggleAcc('jdbc-ddl')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🗂️</span><span>9. DDL, DML &amp; DQL</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-ddl">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#6366f1">DDL — Data Definition Language</strong><br>
          <span style="color:var(--text2)">Changes the <strong>structure</strong> of a table. Examples: CREATE, ALTER, DROP, TRUNCATE.</span>
        </div>
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#10b981">DML — Data Manipulation Language</strong><br>
          <span style="color:var(--text2)">Changes the <strong>data</strong> inside a table. Examples: INSERT, UPDATE, DELETE.</span>
        </div>
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#f59e0b">DQL — Data Query Language</strong><br>
          <span style="color:var(--text2)">Fetches <strong>data</strong> from a table. Example: SELECT.</span>
        </div>
      </div>
      <div class="sbox">✅ <strong>One-liner:</strong> DDL = structure · DML = data changes · DQL = data fetch.</div>
    </div>
  </div>

  <!-- 10. JDBC URL & Important Interfaces -->
  <div class="accordion" id="acc-jdbc-url">
    <button class="accordion-header" onclick="toggleAcc('jdbc-url')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🌐</span><span>10. JDBC URL &amp; Important Interfaces</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-url">
      <p class="section-label">MySQL JDBC URL Format</p>
      <div style="margin-bottom:10px"><code style="background:rgba(99,102,241,0.10);border:1px solid rgba(99,102,241,0.20);border-radius:7px;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#a5b4fc">jdbc:mysql://localhost:3306/mydb</code></div>
      <div class="tbl-wrap" style="margin-bottom:14px"><table class="bit-table">
        <thead><tr><th>Part</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td style="color:#6366f1">localhost</td><td>Server / host address</td></tr>
          <tr><td style="color:#6366f1">3306</td><td>Default MySQL port</td></tr>
          <tr><td style="color:#6366f1">mydb</td><td>Database name</td></tr>
        </tbody>
      </table></div>

      <p class="section-label">Important Interfaces</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Interface</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td style="color:#6366f1">Driver</td><td>Database driver</td></tr>
          <tr><td style="color:#6366f1">Connection</td><td>Represents the database connection</td></tr>
          <tr><td style="color:#6366f1">Statement</td><td>Executes SQL queries</td></tr>
          <tr><td style="color:#6366f1">PreparedStatement</td><td>Executes parameterized SQL queries</td></tr>
          <tr><td style="color:#6366f1">CallableStatement</td><td>Executes stored procedures</td></tr>
          <tr><td style="color:#6366f1">ResultSet</td><td>Stores rows returned by SELECT queries</td></tr>
          <tr><td style="color:#6366f1">ResultSetMetaData</td><td>Provides info about columns (name, type, count)</td></tr>
          <tr><td style="color:#6366f1">DatabaseMetaData</td><td>Provides info about the database itself</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 11. CallableStatement & SQLException -->
  <div class="accordion" id="acc-jdbc-callable">
    <button class="accordion-header" onclick="toggleAcc('jdbc-callable')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">⚠️</span><span>11. CallableStatement &amp; SQLException</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-callable">
      <div class="hbox"><strong>CallableStatement</strong> is used to execute stored procedures.</div>
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Example</span></div>
        <div class="code-body"><span class="typ">CallableStatement</span> cs =
con.<span class="fn">prepareCall</span>(<span class="str">"{call procedureName()}"</span>);</div>
      </div>
      <div class="sbox" style="margin-bottom:14px">⭐ <strong>Interview answer:</strong> "CallableStatement is used to execute stored procedures in JDBC."</div>

      <div class="hbox"><strong>SQLException</strong> is used to handle database-related exceptions.</div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Exception Handling</span></div>
        <div class="code-body"><span class="kw">try</span>
{
    <span class="cmt">// JDBC code</span>
}
<span class="kw">catch</span>(<span class="typ">SQLException</span> e)
{
    System.out.<span class="fn">println</span>(e);
}</div>
      </div>
    </div>
  </div>

  <!-- 12. Complete JDBC Program -->
  <div class="accordion" id="acc-jdbc-program">
    <button class="accordion-header" onclick="toggleAcc('jdbc-program')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">💻</span><span>12. Complete JDBC Program</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-program">
      <div class="code-block" style="margin-bottom:14px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Demo.java</span></div>
        <div class="code-body"><span class="kw">import</span> java.sql.*;

<span class="kw">class</span> <span class="typ">Demo</span>
{
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="typ">String</span> args[]) <span class="kw">throws</span> <span class="typ">Exception</span>
    {
        <span class="typ">Class</span>.<span class="fn">forName</span>(<span class="str">"com.mysql.cj.jdbc.Driver"</span>);

        <span class="typ">String</span> url =
        <span class="str">"jdbc:mysql://localhost:3306/studentdb"</span>;

        <span class="typ">String</span> username = <span class="str">"root"</span>;

        <span class="typ">String</span> password = <span class="str">"1234"</span>;

        <span class="typ">Connection</span> con =
        <span class="fn">DriverManager.getConnection</span>(url,username,password);

        <span class="typ">Statement</span> st =
        con.<span class="fn">createStatement</span>();

        <span class="typ">ResultSet</span> rs =
        st.<span class="fn">executeQuery</span>(<span class="str">"select * from student"</span>);

        <span class="kw">while</span>(rs.<span class="fn">next</span>())
        {
            System.out.<span class="fn">println</span>(
                    rs.<span class="fn">getInt</span>(<span class="num">1</span>)+<span class="str">" "</span>+
                    rs.<span class="fn">getString</span>(<span class="num">2</span>));
        }

        rs.<span class="fn">close</span>();
        st.<span class="fn">close</span>();
        con.<span class="fn">close</span>();
    }
}</div>
      </div>
      <p class="section-label">JDBC Responsibilities</p>
      <ul style="font-size:13px;color:var(--text2);line-height:1.9;padding-left:18px">
        <li>Connect to databases</li>
        <li>Execute SQL queries</li>
        <li>Retrieve results</li>
        <li>Insert, Update and Delete records</li>
        <li>Manage transactions</li>
      </ul>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-jdbc-qrev">
    <button class="accordion-header" onclick="toggleAcc('jdbc-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-qrev">
      <div class="qrev-card"><span class="qrev-key">JDBC</span><span class="qrev-val">API connecting Java apps to relational databases</span></div>
      <div class="qrev-card"><span class="qrev-key">JDBC Driver</span><span class="qrev-val">Bridge · converts Java calls to DB-specific commands</span></div>
      <div class="qrev-card"><span class="qrev-key">7 Steps</span><span class="qrev-val">Import → Load Driver → Connect → Statement → Execute → Process → Close</span></div>
      <div class="qrev-card"><span class="qrev-key">Connection</span><span class="qrev-val">Session between Java application and database</span></div>
      <div class="qrev-card"><span class="qrev-key">Statement</span><span class="qrev-val">Executes plain SQL · recompiled every run · slower</span></div>
      <div class="qrev-card"><span class="qrev-key">PreparedStatement</span><span class="qrev-val">Precompiled once · faster · prevents SQL Injection</span></div>
      <div class="qrev-card"><span class="qrev-key">ResultSet</span><span class="qrev-val">Stores SELECT rows · rs.next() moves cursor, returns boolean</span></div>
      <div class="qrev-card"><span class="qrev-key">executeQuery()</span><span class="qrev-val">SELECT → returns ResultSet</span></div>
      <div class="qrev-card"><span class="qrev-key">executeUpdate()</span><span class="qrev-val">INSERT/UPDATE/DELETE → returns int (rows affected)</span></div>
      <div class="qrev-card"><span class="qrev-key">execute()</span><span class="qrev-val">Unknown query type → returns boolean</span></div>
      <div class="qrev-card"><span class="qrev-key">DDL / DML / DQL</span><span class="qrev-val">Structure (CREATE,ALTER) / Data (INSERT,UPDATE) / Fetch (SELECT)</span></div>
      <div class="qrev-card"><span class="qrev-key">JDBC URL</span><span class="qrev-val">jdbc:mysql://host:port/dbname</span></div>
      <div class="qrev-card"><span class="qrev-key">CallableStatement</span><span class="qrev-val">Executes stored procedures</span></div>
      <div class="qrev-card"><span class="qrev-key">SQLException</span><span class="qrev-val">Handles database-related exceptions</span></div>
      <div class="qrev-card"><span class="qrev-key">Default MySQL Port</span><span class="qrev-val">3306</span></div>
    </div>
  </div>

  <!-- Top Interview Questions -->
  <div class="accordion" id="acc-jdbc-topqa">
    <button class="accordion-header" onclick="toggleAcc('jdbc-topqa')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#6366f1">🎯</span><span>Top Interview Questions</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-jdbc-topqa">
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What is JDBC?</strong><br>
          <span style="color:var(--text2)">JDBC is an API that allows Java applications to communicate with databases.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What are the seven steps in JDBC?</strong><br>
          <span style="color:var(--text2)">Import package, Load driver, Establish connection, Create statement, Execute query, Process result, Close connection.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What is Connection?</strong><br>
          <span style="color:var(--text2)">Connection represents a session between Java and the database.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What is ResultSet?</strong><br>
          <span style="color:var(--text2)">ResultSet stores rows returned from a SELECT query.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Difference between executeQuery() and executeUpdate()?</strong><br>
          <span style="color:var(--text2)">executeQuery() is used for SELECT and returns a ResultSet. executeUpdate() is used for INSERT, UPDATE, DELETE and returns an int (rows affected).</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Difference between Statement and PreparedStatement?</strong><br>
          <span style="color:var(--text2)">Statement executes normal SQL queries and is compiled every time. PreparedStatement is precompiled, faster, and prevents SQL Injection.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: Why use PreparedStatement?</strong><br>
          <span style="color:var(--text2)">Faster execution, reusable, and prevents SQL Injection.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What does rs.next() do?</strong><br>
          <span style="color:var(--text2)">Moves the cursor to the next row and returns true if a row exists.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What is CallableStatement?</strong><br>
          <span style="color:var(--text2)">Used for executing stored procedures.</span>
        </div>
        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px">
          <strong style="color:#6366f1">Q: What is the default MySQL port number?</strong><br>
          <span style="color:var(--text2)">3306</span>
        </div>
      </div>
    </div>
  </div>

</div>
`;

const SPRING_MVC_CONTENT = `
<div class="content-area">

  <div style="background:rgba(132,204,22,0.07);border:1px solid rgba(132,204,22,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#84cc16">Interview scope</strong> — Know why Spring was introduced over plain Servlets, IoC &amp; DI basics, and the Spring MVC request flow (DispatcherServlet → Handler Mapping → Controller).
  </div>

  <!-- 1. Servlet & Servlet Container -->
  <div class="accordion" id="acc-mvc-servlet">
    <button class="accordion-header" onclick="toggleAcc('mvc-servlet')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#84cc16">🧩</span><span>1. Servlet &amp; Servlet Container</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-mvc-servlet">
      <div class="hbox">A <strong>Servlet</strong> is a Java class used to build web applications — it receives HTTP requests, processes them, and returns HTTP responses. A <strong>Servlet Container</strong> (e.g. Tomcat) manages the servlet lifecycle.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin:10px 0">
        <div style="background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          Applications are deployed as <strong style="color:#84cc16">WAR files</strong> inside the servlet container.
        </div>
        <div style="background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          The container uses <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">web.xml</code> to determine which servlet should handle a request — this is called <strong style="color:#84cc16">Servlet Mapping</strong>.
        </div>
      </div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Request Flow — Servlet</span></div>
        <div class="code-body"><span class="cmt">Client Request</span>
      ↓
Servlet Container (Tomcat)
      ↓
Reads web.xml
      ↓
Invokes Required Servlet
      ↓
Response to Client</div>
      </div>
      <div class="sbox">⚠️ <strong>Drawbacks:</strong> Heavy web.xml config · manual object lifecycle management · hard to manage dependencies · complex REST API development · less modular/harder to maintain.</div>
    </div>
  </div>

  <!-- 2. How Spring solves these problems -->
  <div class="accordion" id="acc-mvc-spring">
    <button class="accordion-header" onclick="toggleAcc('mvc-spring')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#84cc16">🌱</span><span>2. How Spring Framework Solves These Problems</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-mvc-spring">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
        <div style="background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#84cc16">a) Annotation-Based Configuration</strong> — eliminates most <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">web.xml</code> configs. Uses <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Component</code>, <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Controller</code>, <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Service</code>, <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Repository</code>.
        </div>
        <div style="background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#84cc16">b) IoC (Inversion of Control)</strong> — the Spring Container manages object creation and lifecycle, reducing manual object management.
        </div>
        <div style="background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#84cc16">c) Dependency Injection (DI)</strong> — Spring automatically injects required dependencies. <code style="background:rgba(132,204,22,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Autowired</code> tells Spring to resolve and inject the required bean.
        </div>
      </div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">DI Example</span></div>
        <div class="code-body"><span class="cmt">@Component</span>
public class Student {}

<span class="cmt">@Autowired</span>
private Student student;</div>
      </div>
      <div style="background:rgba(132,204,22,0.06);border:1px solid rgba(132,204,22,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:12px">
        <strong style="color:#84cc16">d) Better MVC Support</strong> — Spring MVC provides a structured way to handle requests, makes REST API development easier, and integrates well with Hibernate, JDBC, JPA, JUnit, Mockito and many other frameworks.
      </div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Spring replaces manual object &amp; config management with IoC + DI, and annotations replace most of web.xml."</div>
    </div>
  </div>

  <!-- 3. Spring MVC Architecture -->
  <div class="accordion" id="acc-mvc-arch">
    <button class="accordion-header" onclick="toggleAcc('mvc-arch')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#84cc16">🏗️</span><span>3. Spring MVC Architecture</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-mvc-arch">
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Request Flow — Spring MVC</span></div>
        <div class="code-body"><span class="cmt">Client Request</span>
      ↓
Tomcat
      ↓
DispatcherServlet
      ↓
Handler Mapping
      ↓
Controller
      ↓
Business Logic
      ↓
Response</div>
      </div>
      <div class="hbox" style="margin-top:10px"><strong>DispatcherServlet</strong> is the front controller — it finds the appropriate controller using Handler Mapping. The controller then processes the request and returns the response.</div>
      <div class="sbox">✅ <strong>Interview line:</strong> "DispatcherServlet is the front controller in Spring MVC — every request passes through it before reaching the right controller."</div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-mvc-qrev">
    <button class="accordion-header" onclick="toggleAcc('mvc-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#84cc16">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-mvc-qrev">
      <div class="qrev-card"><span class="qrev-key">Servlet</span><span class="qrev-val">Java class · handles HTTP request/response</span></div>
      <div class="qrev-card"><span class="qrev-key">Servlet Container</span><span class="qrev-val">Manages servlet lifecycle (e.g. Tomcat)</span></div>
      <div class="qrev-card"><span class="qrev-key">web.xml</span><span class="qrev-val">Servlet mapping config · Spring reduces this via annotations</span></div>
      <div class="qrev-card"><span class="qrev-key">IoC</span><span class="qrev-val">Spring Container manages object creation &amp; lifecycle</span></div>
      <div class="qrev-card"><span class="qrev-key">DI</span><span class="qrev-val">@Autowired auto-injects required beans</span></div>
      <div class="qrev-card"><span class="qrev-key">@Component/@Controller/@Service/@Repository</span><span class="qrev-val">Core stereotype annotations</span></div>
      <div class="qrev-card"><span class="qrev-key">DispatcherServlet</span><span class="qrev-val">Front controller · routes requests via Handler Mapping</span></div>
      <div class="qrev-card"><span class="qrev-key">MVC Flow</span><span class="qrev-val">Client → Tomcat → DispatcherServlet → Handler Mapping → Controller → Response</span></div>
    </div>
  </div>

</div>
`;

const SPRING_BOOT_CONTENT = `
<div class="content-area">

  <div style="background:rgba(34,197,94,0.07);border:1px solid rgba(34,197,94,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#22c55e">Interview scope</strong> — Know Spring Boot's core value: starter dependencies, auto-configuration, embedded server, and Convention over Configuration — and be ready to contrast each with plain Spring MVC.
  </div>

  <!-- 1. What is Spring Boot -->
  <div class="accordion" id="acc-boot-intro">
    <button class="accordion-header" onclick="toggleAcc('boot-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">🌱</span><span>1. What is Spring Boot?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-intro">
      <div class="hbox">Spring Boot is an <strong>extension of the Spring Framework</strong> that enables rapid development of production-ready applications with minimal configuration.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th>Feature</th><th>What it means</th></tr></thead>
        <tbody>
          <tr><td>Quick application development</td><td>Minimal setup to get started</td></tr>
          <tr><td>Production-ready by default</td><td>Sensible defaults built-in</td></tr>
          <tr><td>Starter dependencies</td><td>Bundled, version-compatible dependency sets</td></tr>
          <tr><td>Auto Configuration</td><td>Configures beans based on classpath</td></tr>
          <tr><td>Embedded Web Server</td><td>Tomcat/Jetty/Undertow built-in</td></tr>
          <tr><td>Minimal XML configuration</td><td>Mostly annotation/Java-based config</td></tr>
          <tr><td>Convention over Configuration</td><td>Sensible defaults, override only what's needed</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Spring Boot doesn't replace Spring — it removes the boilerplate configuration Spring MVC requires."</div>
    </div>
  </div>

  <!-- 2. Dependency Management -->
  <div class="accordion" id="acc-boot-deps">
    <button class="accordion-header" onclick="toggleAcc('boot-deps')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">📦</span><span>2. Dependency Management</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-deps">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Spring MVC</th><th>Spring Boot</th></tr></thead>
        <tbody>
          <tr><td>Developer manually adds required dependencies and versions</td><td>Uses Starter Dependencies (e.g. spring-boot-starter-web)</td></tr>
          <tr><td>Version conflicts must be resolved manually</td><td>Parent POM manages compatible versions automatically</td></tr>
          <tr><td>Individual dependency versions tracked by hand</td><td>No need to manage individual dependency versions</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ Starter dependencies bundle everything needed for a feature (web, JPA, security, etc.) into one compatible package.</div>
    </div>
  </div>

  <!-- 3. Auto Configuration -->
  <div class="accordion" id="acc-boot-autoconfig">
    <button class="accordion-header" onclick="toggleAcc('boot-autoconfig')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">⚙️</span><span>3. Auto Configuration</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-autoconfig">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Spring MVC</th><th>Spring Boot</th></tr></thead>
        <tbody>
          <tr><td>Manual configuration of DispatcherServlet</td><td>Automatically configured based on project dependencies</td></tr>
          <tr><td>Manual AppConfig class needed</td><td>Not required — auto-configured</td></tr>
          <tr><td>Needs @EnableWebMvc explicitly</td><td>Not required — enabled automatically</td></tr>
          <tr><td>Other configuration classes written by hand</td><td>Reduces boilerplate configuration</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Auto-configuration inspects what's on the classpath and configures beans for you, so you skip writing config classes manually."</div>
    </div>
  </div>

  <!-- 4. Embedded Server -->
  <div class="accordion" id="acc-boot-server">
    <button class="accordion-header" onclick="toggleAcc('boot-server')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">🖥️</span><span>4. Embedded Server</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-server">
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#22c55e">Spring MVC</strong> — the application must be deployed separately on an external server like Tomcat (as a WAR file).
        </div>
        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#22c55e">Spring Boot</strong> — comes with an embedded Tomcat (or Jetty/Undertow). No separate deployment is required.
        </div>
      </div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Run Spring Boot App</span></div>
        <div class="code-body"><span class="cmt">Run as Java Application</span></div>
      </div>
      <div class="sbox">⭐ Spring Boot apps are self-contained — run them directly, no external server setup needed.</div>
    </div>
  </div>

  <!-- 5. Convention over Configuration -->
  <div class="accordion" id="acc-boot-convention">
    <button class="accordion-header" onclick="toggleAcc('boot-convention')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">📐</span><span>5. Convention over Configuration</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-convention">
      <div class="hbox">Spring Boot provides <strong>sensible default configurations</strong>. Developers only configure what is different from the defaults, and any default behavior can be overridden whenever required.</div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15);border-radius:8px;padding:12px 14px;font-size:12.5px;margin-top:10px">
        <strong style="color:#22c55e">Q: What does "Convention over Configuration" mean in Spring Boot?</strong><br>
        <span style="color:var(--text2)">Instead of requiring explicit configuration for everything, Spring Boot assumes reasonable defaults (e.g. default port 8080, default DB config) so you only write config for what needs to differ from the standard setup.</span>
      </div>
    </div>
  </div>

  <!-- Layered Architecture (full notes, single dropdown) -->
  <div class="accordion" id="acc-boot-layered">
    <button class="accordion-header" onclick="toggleAcc('boot-layered')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">🏛️</span><span>6. Layered Architecture in Spring Boot</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-layered">
<div class="hbox">Layered Architecture separates an application into different layers, where each layer has a specific responsibility. This improves <strong>maintainability, scalability, reusability, and testing</strong>.</div>


      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Architecture Flow</span></div>
        <div class="code-body"><span class="cmt">Client</span>
   ↓
Controller Layer
   ↓
Service Layer
   ↓
Repository Layer
   ↓
Database</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;margin:12px 0">
        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#22c55e">1. Controller Layer</strong> <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Controller</code> / <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@RestController</code><br>
          <span style="color:var(--text2)">Responsibility: Handles HTTP requests and responses. Receives client requests (GET, POST, PUT, DELETE), validates input data, calls the Service Layer, returns response (JSON/Object) to the client. Does not contain business logic.</span>
        </div>
        <div class="code-block">
          <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Controller Example</span></div>
          <div class="code-body">@RestController
@RequestMapping("/api")</div>
        </div>

        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
          <strong style="color:#22c55e">2. Service Layer</strong> <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Service</code><br>
          <span style="color:var(--text2)">Responsibility: Contains Business Logic. Implements application logic, processes data received from the controller, calls the Repository Layer, and can communicate with multiple repositories if required.</span>
        </div>
        <div class="code-block">
          <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Service Example</span></div>
          <div class="code-body">@Service</div>
        </div>

        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
          <strong style="color:#22c55e">3. Repository Layer</strong> <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Repository</code><br>
          <span style="color:var(--text2)">Responsibility: Database Operations. Performs CRUD operations, interacts directly with the database, uses Spring Data JPA/Hibernate.</span>
        </div>
        <div class="code-block">
          <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Repository Example</span></div>
          <div class="code-body">@Repository
public interface StudentRepository extends JpaRepository&lt;Student, Integer&gt; { }</div>
        </div>

        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
          <strong style="color:#22c55e">Database</strong> — Stores application data permanently. The Repository Layer communicates with the database.
        </div>
      </div>

      <div class="sbox">✅ <strong>Interview line:</strong> "Controller handles requests, Service handles business logic, Repository handles the database — each layer only talks to the one directly below it."</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>📁</span><span>Additional Packages — Entity, DTO, Utility, Config</span></div>

      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#22c55e">1. Entity</strong> — Represents a database table. Each object represents one row in the table. Uses JPA annotations.
        </div>
        <div class="code-block">
          <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Entity Example</span></div>
          <div class="code-body">@Entity
@Table(name="students")</div>
        </div>

        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
          <strong style="color:#22c55e">2. DTO (Data Transfer Object)</strong><br>
          <span style="color:var(--text2)">Purpose: Transfers data between layers without exposing the Entity.</span>
        </div>
        <div class="tbl-wrap"><table class="bit-table">
          <thead><tr><th colspan="2">Advantages of DTO</th></tr></thead>
          <tbody>
            <tr><td colspan="2">Improves security</td></tr>
            <tr><td colspan="2">Transfers only required data</td></tr>
            <tr><td colspan="2">Reduces unnecessary fields in API responses</td></tr>
            <tr><td colspan="2">Decouples Entity from API</td></tr>
          </tbody>
        </table></div>
        <div class="code-block">
          <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">DTO Example</span></div>
          <div class="code-body">public class StudentDTO {
    private String name;
    private String email;
}</div>
        </div>

        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
          <strong style="color:#22c55e">3. Utility Package</strong> — Contains reusable helper methods. Examples: date formatting, string manipulation, password encryption, common validation methods. Helps avoid duplicate code.
        </div>

        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
          <strong style="color:#22c55e">4. Config Package</strong> — Contains application configuration classes. Examples: Security Configuration, Swagger Configuration, CORS Configuration, Bean Configuration.
        </div>
        <div class="code-block">
          <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Config Annotation</span></div>
          <div class="code-body">@Configuration</div>
        </div>
      </div>
      <div class="sbox">⭐ DTO ≠ Entity: Entity maps to the DB table; DTO shapes what's exposed to the client.</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>🧱</span><span>POJO (Plain Old Java Object)</span></div>

      <div class="hbox">A POJO is a simple Java class that: contains fields (variables), contains getters and setters, does not depend on any special framework, and can be used as an Entity, DTO, or Model class.</div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">POJO Example</span></div>
        <div class="code-body">public class Student {
    private int id;
    private String name;
}</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>🔁</span><span>Complete Request Flow & Advantages of Layered Architecture</span></div>

      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Complete Request Flow</span></div>
        <div class="code-body"><span class="cmt">Client</span>
   ↓
Controller
   ↓
Service (Business Logic)
   ↓
Repository
   ↓
Database
   ↑
Repository
   ↑
Service
   ↑
Controller
   ↑
Response to Client</div>
      </div>
      <div class="tbl-wrap" style="margin-top:12px"><table class="bit-table">
        <thead><tr><th colspan="2">Advantages of Layered Architecture</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Separation of Concerns (SoC)</td></tr>
          <tr><td colspan="2">Easier maintenance and debugging</td></tr>
          <tr><td colspan="2">Better code reusability</td></tr>
          <tr><td colspan="2">Easy testing of individual layers</td></tr>
          <tr><td colspan="2">Supports scalability</td></tr>
          <tr><td colspan="2">Makes the application clean, modular, and easier to understand</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Layered architecture gives Separation of Concerns — each layer is independently testable, maintainable, and reusable."</div>
    </div>
  </div>

  <!-- Spring Boot Annotations (Controller Layer) - full notes, single dropdown -->
  <div class="accordion" id="acc-boot-annotations">
    <button class="accordion-header" onclick="toggleAcc('boot-annotations')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">🏷️</span><span>7. Spring Boot Annotations (Controller Layer — @Controller, @RestController, @RequestMapping)</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-annotations">
      <div class="hbox">Spring Boot uses annotations to configure and define the behavior of classes and methods with minimal configuration.</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>1️⃣</span><span>@Controller</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Controller</code> indicates that a class is responsible for handling HTTP requests.
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Features</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Used mainly in Spring MVC Web Applications</td></tr>
          <tr><td colspan="2">Returns View Names (HTML/JSP/Thymeleaf pages)</td></tr>
          <tr><td colspan="2">Used when developing server-side web applications</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@Controller Example</span></div>
        <div class="code-body">@Controller
public class UserController {
}</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>2️⃣</span><span>@ResponseBody</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@ResponseBody</code> tells Spring to write the return value directly into the HTTP response body instead of returning a view.
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Used with @Controller</td></tr>
          <tr><td colspan="2">Returns data such as JSON, String, XML, etc.</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@ResponseBody Example</span></div>
        <div class="code-body">@Controller
public class UserController {
    @ResponseBody
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
}</div>
      </div>
      <div class="sbox">⭐ <strong>Without @ResponseBody:</strong> "Hello" is treated as a view name. <strong>With @ResponseBody:</strong> "Hello" is sent directly as the HTTP response.</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>3️⃣</span><span>@RestController</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@RestController</code> is a combination of <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Controller</code> + <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@ResponseBody</code>.
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Features</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Used for building REST APIs</td></tr>
          <tr><td colspan="2">Returns JSON/Object/String directly</td></tr>
          <tr><td colspan="2">No need to explicitly use @ResponseBody on every method</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@RestController Example</span></div>
        <div class="code-body">@RestController
public class UserController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
}</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th>@Controller</th><th>@RestController</th></tr></thead>
        <tbody>
          <tr><td>Used for Web Applications</td><td>Used for REST APIs</td></tr>
          <tr><td>Returns HTML/View pages</td><td>Returns JSON/Object/String</td></tr>
          <tr><td>Requires @ResponseBody to return data</td><td>@ResponseBody is included automatically</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>4️⃣</span><span>@RequestMapping</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@RequestMapping</code> maps an HTTP request (URL) to a controller class or method.
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Features</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Maps URLs</td></tr>
          <tr><td colspan="2">Can specify HTTP methods (GET, POST, PUT, DELETE)</td></tr>
          <tr><td colspan="2">Can be applied at both class level and method level</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@RequestMapping Example</span></div>
        <div class="code-body">@RestController
@RequestMapping("/api")
public class UserController {
    @RequestMapping(
        value="/fetchUser",
        method=RequestMethod.GET
    )
    public String getUser() {
        return "Fetching User";
    }
}</div>
      </div>
      <div class="sbox">⭐ <strong>Request URL:</strong> <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">/api/fetchUser</code></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">Shortcut Mapping Annotations</strong> — instead of writing the full @RequestMapping with value + method, Spring provides specialized annotations.
      </div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:8px">
        <strong style="color:#22c55e">@GetMapping</strong> — handles GET requests.
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@GetMapping Example</span></div>
        <div class="code-body">@GetMapping("/fetchUser")
public String getUser() {
    return "Fetching User";
}</div>
      </div>
      <div class="sbox">⭐ Equivalent to: <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@RequestMapping(value="/fetchUser", method=RequestMethod.GET)</code></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">@PostMapping</strong> — handles POST requests.
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@PostMapping Example</span></div>
        <div class="code-body">@PostMapping("/saveUser")
public String saveUser() {
    return "Saved";
}</div>
      </div>
      <div class="sbox">⭐ Equivalent to: <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@RequestMapping(value="/saveUser", method=RequestMethod.POST)</code></div>

      <div class="tbl-wrap" style="margin-top:14px"><table class="bit-table">
        <thead><tr><th>Annotation</th><th>HTTP Method</th></tr></thead>
        <tbody>
          <tr><td><code>@GetMapping</code></td><td>GET</td></tr>
          <tr><td><code>@PostMapping</code></td><td>POST</td></tr>
          <tr><td><code>@PutMapping</code></td><td>PUT</td></tr>
          <tr><td><code>@DeleteMapping</code></td><td>DELETE</td></tr>
          <tr><td><code>@PatchMapping</code></td><td>PATCH</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>5️⃣</span><span>@RequestParam</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@RequestParam</code> binds request parameters (query parameters) from the URL to method parameters.
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@RequestParam Example</span></div>
        <div class="code-body">@GetMapping("/fetchUser")
public String getUserDetails(
    @RequestParam(name="firstName") String firstName,
    @RequestParam(name="lastName") String lastName,
    @RequestParam(name="age") int age) {
    return "User Details";
}</div>
      </div>
      <div class="sbox">⭐ <strong>URL:</strong> <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">/api/fetchUser?firstName=Madan&amp;lastName=HK&amp;age=21</code><br>
      <strong>Values received:</strong> firstName = Madan · lastName = HK · age = 21</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Important Points</th></tr></thead>
        <tbody>
          <tr><td colspan="2">By default, required = true</td></tr>
          <tr><td colspan="2">To make a parameter optional: <code>@RequestParam(required = false)</code></td></tr>
          <tr><td colspan="2">You can also provide a default value: <code>@RequestParam(defaultValue = "18")</code></td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>📋</span><span>Summary</span></div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Annotation</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><code>@Controller</code></td><td>Handles HTTP requests and returns View (HTML)</td></tr>
          <tr><td><code>@ResponseBody</code></td><td>Writes return value directly to HTTP response body</td></tr>
          <tr><td><code>@RestController</code></td><td>Combination of @Controller + @ResponseBody; used for REST APIs</td></tr>
          <tr><td><code>@RequestMapping</code></td><td>Maps URL and HTTP method to controller methods</td></tr>
          <tr><td><code>@GetMapping</code></td><td>Handles GET requests</td></tr>
          <tr><td><code>@PostMapping</code></td><td>Handles POST requests</td></tr>
          <tr><td><code>@PutMapping</code></td><td>Handles PUT requests</td></tr>
          <tr><td><code>@DeleteMapping</code></td><td>Handles DELETE requests</td></tr>
          <tr><td><code>@PatchMapping</code></td><td>Handles PATCH requests</td></tr>
          <tr><td><code>@RequestParam</code></td><td>Binds URL query parameters to method arguments</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "@RestController = @Controller + @ResponseBody. @RequestMapping is the general-purpose mapper; @GetMapping/@PostMapping/etc. are shortcuts for it."</div>
    </div>
  </div>

  <!-- Spring Boot Bean, IoC & Bean Life Cycle - full notes, single dropdown -->
  <div class="accordion" id="acc-boot-bean">
    <button class="accordion-header" onclick="toggleAcc('boot-bean')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">☕</span><span>8. Spring Boot Bean, Inversion of Control (IoC) &amp; Bean Life Cycle</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-bean">

      <div style="display:flex;align-items:center;gap:8px;margin:0 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>❓</span><span>What is a Bean?</span></div>
      <div class="hbox">In simple terms, a Bean is a Java object that is managed by the Spring Container (IoC Container).</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Spring creates the Bean</td></tr>
          <tr><td colspan="2">Spring manages the Bean</td></tr>
          <tr><td colspan="2">Spring maintains the Bean throughout its lifecycle</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>📦</span><span>IoC Container</span></div>
      <div class="hbox">The IoC (Inversion of Control) Container contains all the Beans and is responsible for:</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Creating Beans</td></tr>
          <tr><td colspan="2">Managing Beans</td></tr>
          <tr><td colspan="2">Maintaining the Bean lifecycle</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>🛠️</span><span>How to Create a Bean? (2 ways)</span></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <strong style="color:#22c55e">1. Through @Component Annotation</strong>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@Component Example</span></div>
        <div class="code-body">@Component
public class User {
}</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Spring Boot follows the Convention over Configuration approach</td></tr>
          <tr><td colspan="2">Spring Boot tries to auto-configure based on conventions</td></tr>
          <tr><td colspan="2">Annotations like @Controller, @Service, @Repository internally tell Spring to create Beans and manage them</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ <strong>Note:</strong> If we annotate a class with @Component and it does not have any user-defined constructor, it works fine.</div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">What if a User-defined Constructor is Present?</strong>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@Component with constructor</span></div>
        <div class="code-body">@Component
public class User {

    String uName;
    String uAddress;

    User(String uName, String uAddress){
        this.uName = uName;
        this.uAddress = uAddress;
    }
}</div>
      </div>
      <div class="sbox">⚠️ If we run the application with only @Component in this case: <strong>APPLICATION FAILED TO START</strong> — because Spring Boot does not know what values should be passed to the constructor while creating the Bean. In these cases, <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Bean</code> comes into the picture. Here, we provide the configuration details and tell Spring Boot to use them while creating the Bean — by creating a separate configuration class.</div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@Bean Configuration Example</span></div>
        <div class="code-body">@Configuration
public class AppConfig {

    @Bean
    public User createBean(){
        return new User("Madan", "Shivamogga");
    }
}</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>🔍</span><span>How does Spring Boot find these Beans?</span></div>
      <div class="hbox">Spring Boot finds Beans using <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@ComponentScan</code>.</div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@ComponentScan Example</span></div>
        <div class="code-body">@SpringBootApplication
@ComponentScan(basePackages="com....")</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">It scans the specified package and its sub-packages</td></tr>
          <tr><td colspan="2">It identifies classes annotated with Spring stereotypes and creates Beans</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ <strong>Note:</strong> Even if we do not explicitly provide @ComponentScan, the application still works because @SpringBootApplication internally contains @ComponentScan. Another way of creating Beans is by using a @Configuration class (as shown above).</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>⏱️</span><span>At What Time are Beans Created?</span></div>
      <div class="hbox">There are two types of Bean initialization.</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#22c55e">1. Eager Initialization (Default)</strong><br>
          <span style="color:var(--text2)">Bean is created when the application starts. Singleton scope Beans are eagerly initialized by default.</span>
        </div>
        <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <strong style="color:#22c55e">2. Lazy Initialization</strong><br>
          <span style="color:var(--text2)">Some Beans are created only when they are actually needed. Example: Prototype scope Beans, Beans annotated with <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Lazy</code>.</span>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>🔁</span><span>Bean Life Cycle</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Bean Life Cycle Steps</span></div>
        <div class="code-body"><span class="cmt">Step 1: Application starts</span>
    ↓
Step 2: IoC Container starts
    ↓
Configuration is loaded
    ↓
Step 3: Spring constructs (creates) the Bean
    ↓
Step 4: Dependencies are injected into the constructed Bean
    ↓
Step 5: @PostConstruct method is executed
    ↓
Step 6: Bean is used by the application
    ↓
Step 7: @PreDestroy method is executed
    ↓
Step 8: Bean is destroyed</div>
      </div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:10px">
        <strong style="color:#22c55e">Step 5 — @PostConstruct</strong> used for: initializing data, login-related initialization, any setup work after dependency injection.
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@PostConstruct Example</span></div>
        <div class="code-body">@PostConstruct
public void initialize(){
    System.out.println("All work has been done");
}</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>💉</span><span>Dependency Injection</span></div>
      <div class="hbox">If the required Bean is found, Spring Boot injects it. If the Bean is not available, Spring Boot first creates the Bean and then injects it.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Three ways of Dependency Injection</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Constructor Injection</td></tr>
          <tr><td colspan="2">Setter Injection</td></tr>
          <tr><td colspan="2">Field Injection</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">DI + Lifecycle Example</span></div>
        <div class="code-body">@Component
public class User {

    @Autowired
    private Order order;

    @PostConstruct
    public void initialize(){
        System.out.println("All work has been done");
    }

    User(){
        System.out.println("Initializing Constructor");
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Output Order</span></div>
        <div class="code-body"><span class="cmt">Initializing Constructor</span>
        ↓
@Autowired Injection
        ↓
@PostConstruct
(All work has been done)</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>📌</span><span>Important Points</span></div>
      <div class="tbl-wrap"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Bean = Java object managed by the Spring IoC Container</td></tr>
          <tr><td colspan="2">IoC Container creates, manages, and destroys Beans</td></tr>
          <tr><td colspan="2">Beans can be created using @Component or @Bean</td></tr>
          <tr><td colspan="2">Use @Bean when constructor values or custom configuration are required</td></tr>
          <tr><td colspan="2">Spring Boot finds Beans using @ComponentScan</td></tr>
          <tr><td colspan="2">@SpringBootApplication already includes @ComponentScan internally</td></tr>
          <tr><td colspan="2">Singleton Beans are eagerly initialized by default</td></tr>
          <tr><td colspan="2">@Lazy creates Beans only when required</td></tr>
        </tbody>
      </table></div>

      <div class="code-block" style="margin-top:12px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Bean Lifecycle Order (Summary)</span></div>
        <div class="code-body"><span class="cmt">Application Starts</span>
    ↓
IoC Container Starts
    ↓
Configuration Loaded
    ↓
Bean Created
    ↓
Dependency Injection
    ↓
@PostConstruct
    ↓
Bean Used
    ↓
@PreDestroy
    ↓
Bean Destroyed</div>
      </div>
      <div class="sbox">✅ <strong>Interview line:</strong> "A Bean is just an object the Spring IoC Container creates, wires with dependencies, initializes via @PostConstruct, and eventually destroys via @PreDestroy — @Component is for Spring-owned classes, @Bean is for objects Spring doesn't own or that need custom construction."</div>
    </div>
  </div>

  <!-- Dependency Injection: Advantages & Disadvantages - full notes, single dropdown -->
  <div class="accordion" id="acc-boot-di">
    <button class="accordion-header" onclick="toggleAcc('boot-di')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">💉</span><span>9. Dependency Injection in Spring Boot (Advantages &amp; Disadvantages)</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-di">

      <div class="hbox">Dependency Injection helps to implement the <strong>Dependency Inversion Principle (DIP)</strong> in Spring Boot. Using Dependency Injection, we can make our classes independent of their dependencies.</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>✅</span><span>Advantages of Dependency Injection</span></div>
      <div class="tbl-wrap"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">No tight coupling between classes</td></tr>
          <tr><td colspan="2">Makes classes loosely coupled</td></tr>
          <tr><td colspan="2">Helps to achieve the Dependency Inversion Principle (SOLID Principle)</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">DI Example</span></div>
        <div class="code-body">@Component
public class User {

    @Autowired
    Order order;
}

@Component
public class Order {

}</div>
      </div>
      <div class="sbox">⭐ <strong>@Autowired</strong> tells Spring to look for a Bean of the required type. If the Bean is present, Spring injects it. If the Bean is not present, Spring creates it and then injects it.</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>🧩</span><span>Types of Dependency Injection (3 ways)</span></div>
      <div class="tbl-wrap"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Field Injection</td></tr>
          <tr><td colspan="2">Setter Injection</td></tr>
          <tr><td colspan="2">Constructor Injection (Most Important)</td></tr>
        </tbody>
      </table></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">1. Field Injection</strong><br>
        <span style="color:var(--text2)">Dependency is injected directly into the field of the class. Spring uses reflection to iterate over the fields and resolve the dependency.</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Field Injection Example</span></div>
        <div class="code-body">@Component
public class User {

    @Autowired
    Order order;
}

@Component
@Lazy
public class Order {

}</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
        <tbody>
          <tr><td>Very simple</td><td>Cannot be used with immutable (final) fields</td></tr>
          <tr><td>Easy to use</td><td>We cannot make injected fields final</td></tr>
          <tr><td>—</td><td>Chances of NullPointerException</td></tr>
        </tbody>
      </table></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">2. Setter Injection</strong><br>
        <span style="color:var(--text2)">Dependencies are injected using setter methods. We need to annotate the setter method using @Autowired.</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Setter Injection Example</span></div>
        <div class="code-body">@Component
public class User {

    public Order order;

    @Autowired
    public void setUserOrder(Order order){
        this.order = order;
    }
}</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th>Advantages</th><th>Disadvantage</th></tr></thead>
        <tbody>
          <tr><td>Dependency can be changed any time</td><td rowspan="2">Difficult to read and maintain</td></tr>
          <tr><td>Easy for testing</td></tr>
        </tbody>
      </table></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">3. Constructor Injection</strong><br>
        <span style="color:var(--text2)">Dependency is resolved during object initialization. It is the most recommended way of Dependency Injection.</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Constructor Injection Example</span></div>
        <div class="code-body">@Component
public class User {

    Order order;

    @Autowired
    User(Order order){
        this.order = order;
        System.out.println("Initialized");
    }
}</div>
      </div>
      <div class="sbox">⭐ <strong>Note:</strong> If there is only one constructor, we do not have to explicitly mention @Autowired. If there are multiple constructors, @Autowired is mandatory.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Advantages of Constructor Injection</th></tr></thead>
        <tbody>
          <tr><td colspan="2">All mandatory dependencies are initialized during object creation itself</td></tr>
          <tr><td colspan="2">We can create immutable objects</td></tr>
          <tr><td colspan="2">If there is any missing dependency, it fails during initialization itself</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Immutable Object Example</span></div>
        <div class="code-body">@Component
class User {

    public final Order order;

    @Autowired
    User(Order order){
        this.order = order;
    }
}</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>⚠️</span><span>Common Disadvantages of Dependency Injection</span></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <strong style="color:#22c55e">1. Circular Dependency</strong>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Circular Dependency Example</span></div>
        <div class="code-body">@Component
public class Order {

    @Autowired
    Invoice invoice;
}

@Component
public class Invoice {

    @Autowired
    Order order;
}</div>
      </div>
      <div class="sbox">⭐ Here, Order depends on Invoice, and Invoice depends on Order — this creates a Circular Dependency.</div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:10px">
        <strong style="color:#22c55e">Solution</strong> — move the common code from both dependent classes into a separate class. Another approach: use <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Lazy</code> with <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@Autowired</code>, or use <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">@PostConstruct</code>.
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Circular Dependency — Example Idea</span></div>
        <div class="code-body">@Component
class Order{

    @Autowired
    Invoice invoice;

    public void setUser(){
        invoice.setOrder(this);
    }
}

@Component
class Invoice{

    Order order;

    public void setOrder(Order order){
        this.order = order;
    }
}</div>
      </div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:16px">
        <strong style="color:#22c55e">2. Unsatisfied Dependency</strong><br>
        <span style="color:var(--text2)">Problem: suppose an interface has multiple implementations.</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Unsatisfied Dependency Example</span></div>
        <div class="code-body">interface Order{

}

@Component
class OnlineOrder implements Order{

}

@Component
class OfflineOrder implements Order{

}

@Component
public class User{

    @Autowired
    Order order;
}</div>
      </div>
      <div class="sbox">⚠️ Application fails to start because Spring Boot does not know which Order Bean should be created.</div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:12px">
        <strong style="color:#22c55e">Solution 1 — @Primary</strong><br>
        <span style="color:var(--text2)">Place @Primary on one of the implementation classes. Spring will select that Bean by default.</span>
      </div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:10px">
        <strong style="color:#22c55e">Solution 2 — @Qualifier</strong><br>
        <span style="color:var(--text2)">Specify which Bean should be injected.</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">@Qualifier Example</span></div>
        <div class="code-body">@Component
class User{

    @Autowired
    @Qualifier("offline")
    Order order;
}

@Qualifier("onlineorder")
@Component
class OnlineOrder implements Order{

}

@Qualifier("offline")
@Component
class OfflineOrder implements Order{

}</div>
      </div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Spring creates the object of the class whose name is specified in @Qualifier. @Primary sets a default choice, @Qualifier picks explicitly — and circular dependencies are solved with @Lazy, @PostConstruct, or refactoring the shared logic out."</div>
    </div>
  </div>

  <!-- Bean Scopes: Singleton, Prototype, Request, Session - full notes, single dropdown -->
  <div class="accordion" id="acc-boot-scopes">
    <button class="accordion-header" onclick="toggleAcc('boot-scopes')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">🎯</span><span>10. Bean Scopes in Spring Boot (Singleton, Prototype, Request, Session)</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-scopes">

      <div class="hbox">Bean Scope defines how many instances of a Bean the Spring IoC Container creates, and when. Spring Boot supports four common scopes: <strong>Singleton</strong>, <strong>Prototype</strong>, <strong>Request</strong>, and <strong>Session</strong>.</div>

      <!-- SINGLETON -->
      <div style="display:flex;align-items:center;gap:8px;margin:20px 0 10px;font-size:14px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.25);padding-bottom:6px"><span>1️⃣</span><span>Singleton Scope</span></div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th colspan="2">Definition</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Default bean scope in Spring Boot</td></tr>
          <tr><td colspan="2">Only one instance of the bean is created by the IoC Container</td></tr>
          <tr><td colspan="2">Bean is Eagerly Initialized, i.e., created during application startup</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Controller Example</span></div>
        <div class="code-body">@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    User user;

    public TestController() {
        System.out.println("TestController instance initialization");
    }

    @PostConstruct
    public void init() {
        System.out.println("TestController object hashCode : " + this.hashCode()
                + " User object hashCode : " + user.hashCode());
    }

    @GetMapping("/fetchUser")
    public ResponseEntity&lt;String&gt; getUserDetails() {
        System.out.println("fetchUser api invoked");
        return ResponseEntity.status(HttpStatus.OK).body("");
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">User Bean</span></div>
        <div class="code-body">@Component
@Scope("singleton")
public class User {

    public User() {
        System.out.println("User initialization");
    }

    @PostConstruct
    public void init() {
        System.out.println("User object hashCode : " + this.hashCode());
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Console Output</span></div>
        <div class="code-body"><span class="cmt">TestController instance initialization</span>
User initialization
User object hashCode : 1140202235
TestController object hashCode : 1525414607
User object hashCode : 1140202235

fetchUser api invoked</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Observation</th></tr></thead>
        <tbody>
          <tr><td colspan="2">User bean is created only once</td></tr>
          <tr><td colspan="2">Same hashCode is printed every time</td></tr>
          <tr><td colspan="2">Calling /fetchUser again does not create another User object</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ <strong>Why?</strong> Since Singleton is the default scope, Spring creates only one object and reuses it throughout the application.</div>

      <!-- PROTOTYPE -->
      <div style="display:flex;align-items:center;gap:8px;margin:24px 0 10px;font-size:14px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.25);padding-bottom:6px"><span>2️⃣</span><span>Prototype Scope</span></div>
      <div class="hbox">Prototype scope creates a new Bean object every time it is requested. Unlike Singleton scope, the same object is not reused. It is also Lazily Initialized, meaning the object is created only when it is actually required.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Important Points</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Every time a new object is created</td></tr>
          <tr><td colspan="2">Lazily initialized, i.e., object is created only when it is required</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ Example uses three Beans: TestController, Student, User.</div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Controller</span></div>
        <div class="code-body">@RestController
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@RequestMapping("/api")
public class TestController {

    @Autowired
    User user;

    @Autowired
    Student student;

    public TestController() {
        System.out.println("TestController instance initialization");
    }

    @PostConstruct
    public void init() {
        System.out.println("TestController object hashCode : " + this.hashCode()
                + " User object hashCode : " + user.hashCode()
                + " Student object hashCode : " + student.hashCode());
    }

    @GetMapping("/fetchUser")
    public ResponseEntity&lt;String&gt; getUserDetails() {

        System.out.println("fetchUser api invoked");

        return ResponseEntity.status(HttpStatus.OK).body("");
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Student Bean</span></div>
        <div class="code-body">@Component
public class Student {

    @Autowired
    User user;

    public Student() {
        System.out.println("Student instance initialization");
    }

    @PostConstruct
    public void init() {

        System.out.println("Student object hashCode : " + this.hashCode()
                + " User object hashCode : " + user.hashCode());
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">User Bean</span></div>
        <div class="code-body">@Component
@Scope("prototype")
public class User {

    public User() {
        System.out.println("User initialization");
    }

    @PostConstruct
    public void init() {
        System.out.println("User object hashCode : " + this.hashCode());
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Console Output — Application Startup</span></div>
        <div class="code-body"><span class="cmt">Student instance initialization</span>
User initialization

User object hashCode : XXXXXXXX

Student object hashCode : XXXXXXXX
User object hashCode : XXXXXXXX</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Observation (Startup)</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Student Bean is created</td></tr>
          <tr><td colspan="2">User Bean is created</td></tr>
          <tr><td colspan="2">HashCodes are displayed</td></tr>
          <tr><td colspan="2">Since Prototype scope is used, a new User object is created whenever it is required</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Calling the API — http://localhost:8090/api/fetchUser</span></div>
        <div class="code-body"><span class="cmt">TestController instance initialization</span>

User initialization

User object hashCode : XXXXXXXX

TestController object hashCode : XXXXXXXX
User object hashCode : XXXXXXXX
Student object hashCode : XXXXXXXX

fetchUser api invoked</div>
      </div>

      <!-- REQUEST -->
      <div style="display:flex;align-items:center;gap:8px;margin:24px 0 10px;font-size:14px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.25);padding-bottom:6px"><span>3️⃣</span><span>Request Scope</span></div>
      <div class="hbox">Request Scope creates a new Bean object for every HTTP request. The Bean is Lazily Initialized, meaning it is created only when a request is received.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Important Points</th></tr></thead>
        <tbody>
          <tr><td colspan="2">A new object is created for each HTTP request</td></tr>
          <tr><td colspan="2">Bean is Lazily Initialized</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ Example uses three Beans: TestController, Student, User.</div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">TestController</span></div>
        <div class="code-body">@RestController
@Scope("request")
@RequestMapping("/api")
public class TestController {

    @Autowired
   User user;

    @Autowired
    Student student;

    public TestController() {
        System.out.println("TestController instance initialization");
    }

    @PostConstruct
    public void init() {
        System.out.println(
            "TestController object hashCode : " + this.hashCode()
            + " User object hashCode : " + user.hashCode()
            + " Student object hashCode : " + student.hashCode()
        );
    }

    @GetMapping(path="/fetchUser")
    public ResponseEntity&lt;String&gt; getUserDetails() {

        System.out.println("fetchUser api invoked");

        return ResponseEntity.status(HttpStatus.OK).body("");
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Student Bean</span></div>
        <div class="code-body">@Component
@Scope("prototype")
public class Student {

    @Autowired
    User user;

    public Student() {
        System.out.println("Student instance initialization");
    }

    @PostConstruct
    public void init() {

        System.out.println(
            "Student object hashCode : " + this.hashCode()
            + " User object hashCode : " + user.hashCode()
        );
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">User Bean</span></div>
        <div class="code-body">@Component
@Scope("request")
public class User {

    public User() {
        System.out.println("User initialization");
    }

    @PostConstruct
    public void init() {

        System.out.println(
            "User object hashCode : " + this.hashCode()
        );
    }
}</div>
      </div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">What Happens During Application Startup?</strong><br>
        <span style="color:var(--text2)">Only the Spring Boot application starts. No User Bean is created. No Student Bean is created. No TestController Bean is created.</span>
      </div>
      <div class="sbox">⭐ <strong>Observation:</strong> Since Request Scope is lazily initialized, Spring does not create the Bean until an HTTP request arrives.</div>

      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Calling the API — http://localhost:8090/api/fetchUser</span></div>
        <div class="code-body"><span class="cmt">TestController instance initialization</span>

User initialization

User object hashCode : XXXXXXXX

Student instance initialization

Student object hashCode : XXXXXXXX
User object hashCode : XXXXXXXX

TestController object hashCode : XXXXXXXX
User object hashCode : XXXXXXXX
Student object hashCode : XXXXXXXX

fetchUser api invoked</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Observation — First Request</th></tr></thead>
        <tbody>
          <tr><td colspan="2">TestController object is created</td></tr>
          <tr><td colspan="2">User Bean is created</td></tr>
          <tr><td colspan="2">Student Bean is created</td></tr>
          <tr><td colspan="2">fetchUser API is invoked</td></tr>
          <tr><td colspan="2">All hashCodes are displayed</td></tr>
        </tbody>
      </table></div>

      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Calling the API Again</span></div>
        <div class="code-body"><span class="cmt">TestController instance initialization</span>

User initialization

User object hashCode : NEW HASHCODE

Student instance initialization

Student object hashCode : NEW HASHCODE
User object hashCode : NEW HASHCODE

TestController object hashCode : NEW HASHCODE
User object hashCode : NEW HASHCODE
Student object hashCode : NEW HASHCODE

fetchUser api invoked</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Observation — Second Request</th></tr></thead>
        <tbody>
          <tr><td colspan="2">A new TestController object is created</td></tr>
          <tr><td colspan="2">A new User Bean is created</td></tr>
          <tr><td colspan="2">A new Student Bean is created</td></tr>
          <tr><td colspan="2">All hashCodes are different from the first request</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ This proves that Request Scope creates a new Bean for every HTTP request.</div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:16px">
        <strong style="color:#22c55e">Problem with Request Scope</strong><br>
        <span style="color:var(--text2)">Suppose we write a Request-scoped Bean and inject it into a Singleton Controller. During application startup, Singleton Beans are eagerly initialized, but Request Scope Beans are lazily initialized. Since there is no active HTTP request during application startup, Spring cannot create a Request Bean — causing the application to fail.</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Problem Setup</span></div>
        <div class="code-body">@Component
@Scope("request")
public class User {

}</div>
      </div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:10px">
        <strong style="color:#22c55e">Solution — Use Scoped Proxy</strong>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Scoped Proxy Solution</span></div>
        <div class="code-body">@Component
@Scope(
    value = "request",
    proxyMode = ScopedProxyMode.TARGET_CLASS
)
public class User {

}</div>
      </div>
      <div class="sbox">⭐ With <code style="background:rgba(34,197,94,0.12);padding:1px 5px;border-radius:4px;font-size:12px">proxyMode = ScopedProxyMode.TARGET_CLASS</code>, Spring injects a proxy object instead of the actual Bean. The real Request Bean is created only when an HTTP request is received — allowing the application to start successfully.</div>

      <div class="tbl-wrap" style="margin-top:12px"><table class="bit-table">
        <thead><tr><th colspan="2">Request Scope — Summary</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Request Scope creates one Bean per HTTP request</td></tr>
          <tr><td colspan="2">Bean is lazily initialized</td></tr>
          <tr><td colspan="2">No Bean is created during application startup</td></tr>
          <tr><td colspan="2">Every request creates a new object</td></tr>
          <tr><td colspan="2">Different hashCodes prove different Bean instances</td></tr>
          <tr><td colspan="2">Injecting a Request Bean into a Singleton Bean causes startup failure</td></tr>
          <tr><td colspan="2">Use proxyMode = ScopedProxyMode.TARGET_CLASS to solve this problem</td></tr>
        </tbody>
      </table></div>

      <!-- SESSION -->
      <div style="display:flex;align-items:center;gap:8px;margin:24px 0 10px;font-size:14px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.25);padding-bottom:6px"><span>4️⃣</span><span>Session Scope</span></div>
      <div class="hbox">Session Scope creates one Bean object per HTTP Session. The same Bean is reused for all requests within the same session. When the session ends (logout/session timeout), the Bean is destroyed.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Important Points</th></tr></thead>
        <tbody>
          <tr><td colspan="2">One Bean is created per user session</td></tr>
          <tr><td colspan="2">Same Bean is shared across multiple requests of the same session</td></tr>
          <tr><td colspan="2">Bean is destroyed when the session expires or the user logs out</td></tr>
          <tr><td colspan="2">Bean is Lazily Initialized</td></tr>
        </tbody>
      </table></div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">User Bean</span></div>
        <div class="code-body">@Component
@Scope(value = "session")
public class User {

    public User() {
        System.out.println("User initialization");
    }

    @PostConstruct
    public void init() {
        System.out.println("User object hashCode : " + this.hashCode());
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Controller</span></div>
        <div class="code-body">@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    User user;

    @GetMapping("/fetchUser")
    public ResponseEntity&lt;String&gt; fetchUser() {

        System.out.println("User object hashCode : " + user.hashCode());

        return ResponseEntity.ok("Success");
    }
}</div>
      </div>
      <div class="sbox">⭐ <strong>Application Startup:</strong> Session Bean is not created. Spring waits until an HTTP request creates a session — because Session Scope is Lazily Initialized.</div>

      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">First API Request — http://localhost:8090/api/fetchUser</span></div>
        <div class="code-body"><span class="cmt">User initialization</span>

User object hashCode : XXXXXXXX

fetchUser api invoked</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Session starts</td></tr>
          <tr><td colspan="2">User Bean is created</td></tr>
          <tr><td colspan="2">HashCode is printed</td></tr>
        </tbody>
      </table></div>

      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Second API Request (Same Browser / Same Session)</span></div>
        <div class="code-body"><span class="cmt">User object hashCode : XXXXXXXX</span>

fetchUser api invoked</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">No new User object is created</td></tr>
          <tr><td colspan="2">Same hashCode is printed</td></tr>
          <tr><td colspan="2">Same Session Bean is reused</td></tr>
        </tbody>
      </table></div>

      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#22c55e">After Logout / Session Timeout</strong><br>
        <span style="color:var(--text2)">When the current session ends, the Session Bean is destroyed. If the user logs in or creates a new session again:</span>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">New Session Started</span></div>
        <div class="code-body"><span class="cmt">User initialization</span>

User object hashCode : NEW HASHCODE</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">A completely new Session Bean is created</td></tr>
          <tr><td colspan="2">HashCode changes because a new session starts</td></tr>
        </tbody>
      </table></div>

      <div class="sbox">✅ <strong>Interview line:</strong> "Singleton = one object for the whole app (eager). Prototype = new object every time it's requested (lazy). Request = one object per HTTP request (lazy). Session = one object per user session, reused across that session's requests, destroyed on logout/timeout. Injecting Request/Session scoped Beans into Singletons needs a Scoped Proxy to avoid startup failure."</div>
    </div>
  </div>

  <!-- Dynamic Bean Initialization -->
  <div class="accordion" id="acc-boot-dynamicbean">
    <button class="accordion-header" onclick="toggleAcc('boot-dynamicbean')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">🔀</span><span>11. Dynamic Bean Initialization</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-dynamicbean">
      <div class="hbox">Sometimes there are multiple implementations of the same interface, and instead of hard-coding which one Spring should inject, we want the Bean chosen <strong>dynamically based on a configuration value</strong>.</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>1️⃣</span><span>Problem Statement</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <span style="color:var(--text2)">An interface has two implementations. A controller autowires the interface directly — Spring has no way to know which one to inject.</span>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Order.java (interface)</span></div>
        <div class="code-body">public interface Order {
    public void createOrder();
}</div>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">OnlineOrder.java</span></div>
        <div class="code-body">@Component
public class OnlineOrder implements Order {

    public OnlineOrder() {
        System.out.println("Online Order Initialized");
    }

    @Override
    public void createOrder() {
        System.out.println("Created Online Order");
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">OfflineOrder.java</span></div>
        <div class="code-body">@Component
public class OfflineOrder implements Order {

    public OfflineOrder() {
        System.out.println("Offline Order Initialized");
    }

    @Override
    public void createOrder() {
        System.out.println("Created Offline Order");
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">User.java (Controller)</span></div>
        <div class="code-body">@RestController
@RequestMapping("/api")
public class User {

    @Autowired
    Order order;

    @PostMapping("/createOrder")
    public ResponseEntity&lt;String&gt; createOrder() {

        order.createOrder();

        return ResponseEntity.ok("OK");
    }
}</div>
      </div>

      <div class="wbox" style="margin-top:12px">⚠️ Spring finds two Beans implementing <code style="background:rgba(239,68,68,0.12);padding:1px 5px;border-radius:4px;font-size:12px">Order</code> — <code style="background:rgba(239,68,68,0.12);padding:1px 5px;border-radius:4px;font-size:12px">OnlineOrder</code> and <code style="background:rgba(239,68,68,0.12);padding:1px 5px;border-radius:4px;font-size:12px">OfflineOrder</code>. Since both are eligible candidates, Spring doesn't know which one to inject — the application fails to start with an <strong>UnsatisfiedDependencyException</strong>.</div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Startup Error</span></div>
        <div class="code-body">APPLICATION FAILED TO START

UnsatisfiedDependencyException:
Error creating bean with name 'user'</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>2️⃣</span><span>Solution 1 — Using @Qualifier</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <span style="color:var(--text2)">Annotate both implementations with a distinct @Qualifier name, then request the specific one at the injection point.</span>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Qualified Implementations + Controller</span></div>
        <div class="code-body">@Component
@Qualifier("onlineOrderObject")
public class OnlineOrder implements Order { }

@Component
@Qualifier("offlineOrderObject")
public class OfflineOrder implements Order { }

@RestController
@RequestMapping("/api")
public class User {

    @Qualifier("onlineOrderObject")
    @Autowired
    Order order;
}</div>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Output</span></div>
        <div class="code-body">Online Order Initialized
Created Online Order</div>
      </div>
      <div class="sbox">✅ Spring injects exactly the Bean named in @Qualifier — no ambiguity, application starts cleanly.</div>

      <div style="background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.2);border-radius:8px;padding:12px 14px;font-size:13px;margin-top:14px">
        <strong style="color:#ef4444">Limitation of @Qualifier</strong><br>
        <span style="color:var(--text2)">To switch from OnlineOrder to OfflineOrder tomorrow, you have to go back into the source code and change the @Qualifier value. Every implementation switch means a code change and redeploy.</span>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>3️⃣</span><span>Solution 2 — Dynamic Bean Initialization</span></div>
      <div style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
        <span style="color:var(--text2)">Instead of @Qualifier, create the Bean manually inside a @Configuration class, and decide which implementation to return based on a value injected with @Value from application.properties.</span>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">AppConfig.java</span></div>
        <div class="code-body">@Configuration
public class AppConfig {

    @Bean
    public Order createOrderBean(
            @Value("\${isOnlineOrder}")
            boolean isOnlineOrder) {

        if (isOnlineOrder) {
            return new OnlineOrder();
        } else {
            return new OfflineOrder();
        }
    }
}</div>
      </div>
      <div class="code-block" style="margin-top:8px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">application.properties</span></div>
        <div class="code-body">isOnlineOrder=false</div>
      </div>

      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th>isOnlineOrder</th><th>Output</th></tr></thead>
        <tbody>
          <tr><td>true</td><td>Online Order Initialized → Created Online Order</td></tr>
          <tr><td>false</td><td>Offline Order Initialized → Created Offline Order</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Spring creates the Bean based on the value of isOnlineOrder. No Java code needs to change — only the property value does."</div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.2);padding-bottom:6px"><span>4️⃣</span><span>@Value Annotation</span></div>
      <div class="hbox">@Value is used to inject values from various sources like a property file, environment variables, or inline literals.</div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Inline Literal Example</span></div>
        <div class="code-body">@Bean
public Order createOrderBean(
        @Value("false")
        boolean isOnlineOrder) {

    if (isOnlineOrder) {
        return new OnlineOrder();
    } else {
        return new OfflineOrder();
    }
}</div>
      </div>
      <div class="sbox">⭐ Here the value is hardcoded with @Value("false") instead of being read from application.properties — useful for quick testing, but the property-file version is what you'd actually ship.</div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-boot-qrev">
    <button class="accordion-header" onclick="toggleAcc('boot-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#22c55e">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-boot-qrev">
      <div class="qrev-card"><span class="qrev-key">Spring Boot</span><span class="qrev-val">Extension of Spring · minimal config · production-ready</span></div>
      <div class="qrev-card"><span class="qrev-key">Starter Dependencies</span><span class="qrev-val">Bundled, version-compatible deps via Parent POM</span></div>
      <div class="qrev-card"><span class="qrev-key">Auto Configuration</span><span class="qrev-val">Configures DispatcherServlet/beans automatically</span></div>
      <div class="qrev-card"><span class="qrev-key">Embedded Server</span><span class="qrev-val">Built-in Tomcat/Jetty/Undertow · no external deploy</span></div>
      <div class="qrev-card"><span class="qrev-key">Convention over Configuration</span><span class="qrev-val">Sensible defaults · override only what's needed</span></div>
      <div class="qrev-card"><span class="qrev-key">Spring MVC vs Boot</span><span class="qrev-val">Manual config+deploy vs auto-config+embedded server</span></div>
      <div class="qrev-card"><span class="qrev-key">Layered Architecture</span><span class="qrev-val">Client → Controller → Service → Repository → Database</span></div>
      <div class="qrev-card"><span class="qrev-key">Controller</span><span class="qrev-val">@Controller/@RestController · handles HTTP, no business logic</span></div>
      <div class="qrev-card"><span class="qrev-key">Service</span><span class="qrev-val">@Service · business logic · calls Repository</span></div>
      <div class="qrev-card"><span class="qrev-key">Repository</span><span class="qrev-val">@Repository · CRUD via Spring Data JPA/Hibernate</span></div>
      <div class="qrev-card"><span class="qrev-key">Entity</span><span class="qrev-val">Maps to a DB table · one object = one row</span></div>
      <div class="qrev-card"><span class="qrev-key">DTO</span><span class="qrev-val">Transfers data between layers · hides Entity · improves security</span></div>
      <div class="qrev-card"><span class="qrev-key">Utility Package</span><span class="qrev-val">Reusable helpers · date/string/encryption/validation</span></div>
      <div class="qrev-card"><span class="qrev-key">Config Package</span><span class="qrev-val">@Configuration · Security/Swagger/CORS/Bean config</span></div>
      <div class="qrev-card"><span class="qrev-key">POJO</span><span class="qrev-val">Plain Java class · fields+getters/setters · no framework dependency</span></div>
      <div class="qrev-card"><span class="qrev-key">Layered Arch Advantages</span><span class="qrev-val">SoC · maintainability · reusability · testability · scalability</span></div>
      <div class="qrev-card"><span class="qrev-key">@Controller</span><span class="qrev-val">Returns view names (HTML/JSP/Thymeleaf) · web apps</span></div>
      <div class="qrev-card"><span class="qrev-key">@ResponseBody</span><span class="qrev-val">Writes return value directly to HTTP response body</span></div>
      <div class="qrev-card"><span class="qrev-key">@RestController</span><span class="qrev-val">@Controller + @ResponseBody · returns JSON/Object/String</span></div>
      <div class="qrev-card"><span class="qrev-key">@RequestMapping</span><span class="qrev-val">Maps URL + HTTP method · class or method level</span></div>
      <div class="qrev-card"><span class="qrev-key">@GetMapping/@PostMapping</span><span class="qrev-val">Shortcuts for @RequestMapping(GET)/(POST)</span></div>
      <div class="qrev-card"><span class="qrev-key">Mapping Annotations</span><span class="qrev-val">Get/Post/Put/Delete/PatchMapping → GET/POST/PUT/DELETE/PATCH</span></div>
      <div class="qrev-card"><span class="qrev-key">@RequestParam</span><span class="qrev-val">Binds query params · required=true by default · use required=false or defaultValue</span></div>
      <div class="qrev-card"><span class="qrev-key">Bean</span><span class="qrev-val">Java object managed/created/maintained by Spring IoC Container</span></div>
      <div class="qrev-card"><span class="qrev-key">IoC Container</span><span class="qrev-val">Creates, manages, maintains lifecycle of all Beans</span></div>
      <div class="qrev-card"><span class="qrev-key">@Component</span><span class="qrev-val">Auto-creates Bean · fails at startup if a constructor needs args</span></div>
      <div class="qrev-card"><span class="qrev-key">@Bean</span><span class="qrev-val">Use in @Configuration class · for custom/constructor-arg creation</span></div>
      <div class="qrev-card"><span class="qrev-key">@ComponentScan</span><span class="qrev-val">Finds Beans by scanning packages · included in @SpringBootApplication</span></div>
      <div class="qrev-card"><span class="qrev-key">Eager vs Lazy</span><span class="qrev-val">Singleton = eager (default) · Prototype/@Lazy = created on demand</span></div>
      <div class="qrev-card"><span class="qrev-key">Bean Life Cycle</span><span class="qrev-val">Start → IoC Container → Config Loaded → Bean Created → DI → @PostConstruct → Used → @PreDestroy → Destroyed</span></div>
      <div class="qrev-card"><span class="qrev-key">@PostConstruct</span><span class="qrev-val">Runs after dependency injection · setup/init logic</span></div>
      <div class="qrev-card"><span class="qrev-key">@PreDestroy</span><span class="qrev-val">Runs before Bean destruction · cleanup logic</span></div>
      <div class="qrev-card"><span class="qrev-key">DI Types</span><span class="qrev-val">Constructor Injection · Setter Injection · Field Injection</span></div>
      <div class="qrev-card"><span class="qrev-key">Execution Order</span><span class="qrev-val">Constructor → @Autowired injection → @PostConstruct</span></div>
      <div class="qrev-card"><span class="qrev-key">DI Purpose</span><span class="qrev-val">Implements Dependency Inversion Principle · loose coupling</span></div>
      <div class="qrev-card"><span class="qrev-key">Field Injection</span><span class="qrev-val">Simple but no immutability · risk of NullPointerException</span></div>
      <div class="qrev-card"><span class="qrev-key">Setter Injection</span><span class="qrev-val">Changeable anytime, testable · harder to read/maintain</span></div>
      <div class="qrev-card"><span class="qrev-key">Constructor Injection</span><span class="qrev-val">Most recommended · enables immutability · fails fast on missing deps</span></div>
      <div class="qrev-card"><span class="qrev-key">Circular Dependency</span><span class="qrev-val">A→B→A · fix via @Lazy, @PostConstruct, or refactor shared code out</span></div>
      <div class="qrev-card"><span class="qrev-key">Unsatisfied Dependency</span><span class="qrev-val">Multiple implementations of an interface · Spring can't pick one</span></div>
      <div class="qrev-card"><span class="qrev-key">@Primary</span><span class="qrev-val">Marks the default Bean among multiple implementations</span></div>
      <div class="qrev-card"><span class="qrev-key">@Qualifier</span><span class="qrev-val">Explicitly names which Bean implementation to inject</span></div>
      <div class="qrev-card"><span class="qrev-key">Singleton Scope</span><span class="qrev-val">Default · one instance · eagerly initialized</span></div>
      <div class="qrev-card"><span class="qrev-key">Prototype Scope</span><span class="qrev-val">New object every request-for-it · lazily initialized</span></div>
      <div class="qrev-card"><span class="qrev-key">Request Scope</span><span class="qrev-val">One Bean per HTTP request · lazily initialized</span></div>
      <div class="qrev-card"><span class="qrev-key">Session Scope</span><span class="qrev-val">One Bean per user session · reused until logout/timeout</span></div>
      <div class="qrev-card"><span class="qrev-key">Scoped Proxy</span><span class="qrev-val">proxyMode=TARGET_CLASS · fixes Request/Session Bean in Singleton startup failure</span></div>
      <div class="qrev-card"><span class="qrev-key">Same hashCode</span><span class="qrev-val">= Singleton/Session reuse · Different hashCode = Prototype/Request new instance</span></div>
      <div class="qrev-card"><span class="qrev-key">Dynamic Bean Initialization</span><span class="qrev-val">Create Bean in @Configuration, pick implementation via @Value-injected property</span></div>
      <div class="qrev-card"><span class="qrev-key">@Qualifier limitation</span><span class="qrev-val">Switching implementation means editing source code</span></div>
      <div class="qrev-card"><span class="qrev-key">@Value</span><span class="qrev-val">Injects values from property file, env vars, or inline literals — e.g. @Value("false")</span></div>
    </div>
  </div>

</div>
`;

const MAVEN_CONTENT = `
<div class="content-area">

  <div style="background:rgba(199,26,54,0.07);border:1px solid rgba(199,26,54,0.2);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#c71a36">Interview scope</strong> — Know what Maven does, what pom.xml contains, and be able to recite the 7 lifecycle phases in order with what each one does.
  </div>

  <!-- 1. What is Maven -->
  <div class="accordion" id="acc-maven-intro">
    <button class="accordion-header" onclick="toggleAcc('maven-intro')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">📦</span><span>1. What is Maven?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-intro">
      <div class="hbox">Maven is a <strong>Project Management and Build Automation Tool</strong> used mainly for Java projects.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Maven helps in</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Build automation</td></tr>
          <tr><td colspan="2">Dependency management</td></tr>
          <tr><td colspan="2">Project structure management</td></tr>
          <tr><td colspan="2">Dependency resolution (downloads required libraries automatically)</td></tr>
          <tr><td colspan="2">Packaging applications (JAR/WAR)</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Maven automates the build, manages dependencies, and enforces a standard project structure — so you don't manually download JARs or set up folders."</div>
    </div>
  </div>

  <!-- 2. POM -->
  <div class="accordion" id="acc-maven-pom">
    <button class="accordion-header" onclick="toggleAcc('maven-pom')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">📄</span><span>2. POM (Project Object Model)</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-pom">
      <div class="hbox">The heart of every Maven project is the <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">pom.xml</code> file.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">POM contains</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Project information</td></tr>
          <tr><td colspan="2">Dependencies</td></tr>
          <tr><td colspan="2">Plugins</td></tr>
          <tr><td colspan="2">Build configuration</td></tr>
          <tr><td colspan="2">Repositories</td></tr>
          <tr><td colspan="2">Properties</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ Every Maven project contains exactly one <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">pom.xml</code> file.</div>
    </div>
  </div>

  <!-- 3. Project Structure -->
  <div class="accordion" id="acc-maven-structure">
    <button class="accordion-header" onclick="toggleAcc('maven-structure')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">🗂️</span><span>3. Standard Maven Project Structure</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-structure">
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Project Structure</span></div>
        <div class="code-body"><span class="cmt">Project</span>
│
├── pom.xml
│
└── src
    ├── main
    │   ├── java
    │   │   └── com.company.app
    │   │       └── Application.java
    │   └── resources
    │
    └── test
        ├── java
        │   └── com.company.app
        │       └── ApplicationTest.java
        └── resources</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">
        <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">src/main/java</code> → Application source code.
        </div>
        <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">src/main/resources</code> → Configuration files (application.properties, etc.).
        </div>
        <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">src/test/java</code> → Unit test classes.
        </div>
        <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px">
          <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">pom.xml</code> → Project configuration.
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Parent POM & Properties -->
  <div class="accordion" id="acc-maven-parentprops">
    <button class="accordion-header" onclick="toggleAcc('maven-parentprops')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">🧬</span><span>4. Parent POM &amp; Properties</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-parentprops">
      <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-bottom:10px">
        <strong style="color:#c71a36">Parent POM</strong>
      </div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th colspan="2">Parent POM</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Every Maven project has one Parent POM</td></tr>
          <tr><td colspan="2">If not specified, Maven uses the Super POM (default parent)</td></tr>
          <tr><td colspan="2">Parent POM provides default configurations inherited by the project</td></tr>
        </tbody>
      </table></div>

      <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin:16px 0 10px">
        <strong style="color:#c71a36">Properties</strong> — key-value pairs used for configuration.
      </div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Properties Example</span></div>
        <div class="code-body">&lt;properties&gt;
    &lt;java.version&gt;17&lt;/java.version&gt;
&lt;/properties&gt;</div>
      </div>
      <div class="sbox">⭐ Key → <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">java.version</code> · Value → <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">17</code></div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Benefits of Properties</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Avoids hardcoding</td></tr>
          <tr><td colspan="2">Easy version management</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 5. Repositories & Dependencies -->
  <div class="accordion" id="acc-maven-repodeps">
    <button class="accordion-header" onclick="toggleAcc('maven-repodeps')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">🌐</span><span>5. Repositories &amp; Dependencies</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-repodeps">
      <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin-bottom:10px">
        <strong style="color:#c71a36">Repositories</strong> — store Maven artifacts (JAR files). Maven searches repositories to download required dependencies.
      </div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Repository Example</span></div>
        <div class="code-body">&lt;repositories&gt;
    &lt;repository&gt;
        &lt;id&gt;central&lt;/id&gt;
        &lt;url&gt;https://repo.maven.apache.org/maven2&lt;/url&gt;
    &lt;/repository&gt;
&lt;/repositories&gt;</div>
      </div>
      <div class="sbox">⭐ <strong>Default Repository:</strong> Maven Central Repository.</div>

      <div style="background:rgba(199,26,54,0.06);border:1px solid rgba(199,26,54,0.18);border-radius:8px;padding:12px 14px;font-size:13px;margin:16px 0 10px">
        <strong style="color:#c71a36">Dependencies</strong> — external libraries required by the project. Declared inside:
      </div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Dependencies Block</span></div>
        <div class="code-body">&lt;dependencies&gt;
    ...
&lt;/dependencies&gt;</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">Maven automatically...</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Downloads missing JARs</td></tr>
          <tr><td colspan="2">Resolves transitive dependencies</td></tr>
          <tr><td colspan="2">Adds them to the project</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- 6. Build Element -->
  <div class="accordion" id="acc-maven-build">
    <button class="accordion-header" onclick="toggleAcc('maven-build')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">🔧</span><span>6. Build Element</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-build">
      <div class="hbox">The <code style="background:rgba(199,26,54,0.12);padding:1px 5px;border-radius:4px;font-size:12px">&lt;build&gt;</code> section is used to configure the build.</div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <thead><tr><th colspan="2">&lt;build&gt; is used to</th></tr></thead>
        <tbody>
          <tr><td colspan="2">Configure the build process</td></tr>
          <tr><td colspan="2">Add plugins</td></tr>
          <tr><td colspan="2">Customize lifecycle tasks</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">⭐ Plugins perform specific tasks during different lifecycle phases.</div>
    </div>
  </div>

  <!-- 7. Maven Build Lifecycle - full notes, single dropdown -->
  <div class="accordion" id="acc-maven-lifecycle">
    <button class="accordion-header" onclick="toggleAcc('maven-lifecycle')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">🔄</span><span>7. Maven Build Lifecycle</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-lifecycle">
      <div class="hbox">The Maven lifecycle consists of several phases executed in order.</div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Lifecycle Phases</span></div>
        <div class="code-body"><span class="cmt">Validate</span>
    ↓
Compile
    ↓
Test
    ↓
Package
    ↓
Verify
    ↓
Install
    ↓
Deploy</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>1️⃣</span><span>Validate</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn validate</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Checks project structure</td></tr>
          <tr><td colspan="2">Verifies pom.xml</td></tr>
          <tr><td colspan="2">Ensures project is valid before building</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>2️⃣</span><span>Compile</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn compile</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Compiles Java source code</td></tr>
          <tr><td colspan="2">Converts .java files into .class (bytecode)</td></tr>
          <tr><td colspan="2">Generates the target/classes directory</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>3️⃣</span><span>Test</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn test</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Executes unit tests (JUnit, etc.)</td></tr>
          <tr><td colspan="2">Runs all previous phases (validate + compile) first</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>4️⃣</span><span>Package</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn package</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Runs all previous phases</td></tr>
          <tr><td colspan="2">Packages the application into JAR or WAR</td></tr>
          <tr><td colspan="2">Output is generated inside the target/ folder</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>5️⃣</span><span>Verify</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn verify</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Performs additional checks after packaging</td></tr>
          <tr><td colspan="2">Verifies package integrity</td></tr>
          <tr><td colspan="2">Runs integration or quality checks if configured</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>6️⃣</span><span>Install</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn install</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Installs the generated JAR/WAR into the Local Maven Repository (.m2)</td></tr>
          <tr><td colspan="2">Makes the artifact available for other local projects</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>7️⃣</span><span>Deploy</span></div>
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Command</span></div>
        <div class="code-body">mvn deploy</div>
      </div>
      <div class="tbl-wrap" style="margin-top:10px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">Uploads the artifact to a Remote Repository</td></tr>
          <tr><td colspan="2">Requires repository URL configuration in pom.xml</td></tr>
          <tr><td colspan="2">Used for sharing builds within an organization</td></tr>
        </tbody>
      </table></div>

      <div style="display:flex;align-items:center;gap:8px;margin:18px 0 10px;font-size:13.5px;font-weight:700;color:#c71a36;border-bottom:1px solid rgba(199,26,54,0.2);padding-bottom:6px"><span>📌</span><span>Important Notes</span></div>
      <div class="hbox">Running a lifecycle phase automatically executes all previous phases.</div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Example</span></div>
        <div class="code-body">mvn package</div>
      </div>
      <div class="code-block" style="margin-top:10px">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">Execution Order</span></div>
        <div class="code-body"><span class="cmt">Validate</span>
→ Compile
→ Test
→ Package</div>
      </div>
      <div class="tbl-wrap" style="margin-top:12px"><table class="bit-table">
        <tbody>
          <tr><td colspan="2">The target/ folder is created after mvn compile</td></tr>
          <tr><td colspan="2">mvn install stores the artifact in the local repository (.m2)</td></tr>
          <tr><td colspan="2">mvn deploy uploads the artifact to a remote repository</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ <strong>Interview line:</strong> "Maven phases run in order — Validate → Compile → Test → Package → Verify → Install → Deploy — and running any phase runs everything before it too."</div>
    </div>
  </div>

  <!-- Quick Revision -->
  <div class="accordion" id="acc-maven-qrev">
    <button class="accordion-header" onclick="toggleAcc('maven-qrev')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#c71a36">⚡</span><span>Quick Revision Cheatsheet</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-maven-qrev">
      <div class="qrev-card"><span class="qrev-key">Maven</span><span class="qrev-val">Build automation + dependency management tool for Java</span></div>
      <div class="qrev-card"><span class="qrev-key">pom.xml</span><span class="qrev-val">Project info, dependencies, plugins, build config, repos, properties</span></div>
      <div class="qrev-card"><span class="qrev-key">src/main/java</span><span class="qrev-val">Application source code</span></div>
      <div class="qrev-card"><span class="qrev-key">src/main/resources</span><span class="qrev-val">Config files (application.properties)</span></div>
      <div class="qrev-card"><span class="qrev-key">src/test/java</span><span class="qrev-val">Unit test classes</span></div>
      <div class="qrev-card"><span class="qrev-key">Parent POM</span><span class="qrev-val">One per project · defaults to Super POM if unset</span></div>
      <div class="qrev-card"><span class="qrev-key">Properties</span><span class="qrev-val">Key-value config · avoids hardcoding</span></div>
      <div class="qrev-card"><span class="qrev-key">Repositories</span><span class="qrev-val">Store JARs · default = Maven Central</span></div>
      <div class="qrev-card"><span class="qrev-key">Dependencies</span><span class="qrev-val">External libs · auto-downloaded + transitive resolution</span></div>
      <div class="qrev-card"><span class="qrev-key">&lt;build&gt;</span><span class="qrev-val">Configures build process + plugins + lifecycle tasks</span></div>
      <div class="qrev-card"><span class="qrev-key">Lifecycle Order</span><span class="qrev-val">Validate → Compile → Test → Package → Verify → Install → Deploy</span></div>
      <div class="qrev-card"><span class="qrev-key">Validate</span><span class="qrev-val">Checks pom.xml + project structure</span></div>
      <div class="qrev-card"><span class="qrev-key">Compile</span><span class="qrev-val">.java → .class · creates target/classes</span></div>
      <div class="qrev-card"><span class="qrev-key">Test</span><span class="qrev-val">Runs unit tests · runs validate+compile first</span></div>
      <div class="qrev-card"><span class="qrev-key">Package</span><span class="qrev-val">Builds JAR/WAR into target/</span></div>
      <div class="qrev-card"><span class="qrev-key">Verify</span><span class="qrev-val">Checks package integrity</span></div>
      <div class="qrev-card"><span class="qrev-key">Install</span><span class="qrev-val">Copies artifact to local repo (.m2)</span></div>
      <div class="qrev-card"><span class="qrev-key">Deploy</span><span class="qrev-val">Uploads artifact to remote repo</span></div>
      <div class="qrev-card"><span class="qrev-key">Key Rule</span><span class="qrev-val">Running a phase runs all phases before it automatically</span></div>
    </div>
  </div>

</div>
`;

const INTERVIEW_QUESTIONS_CONTENT = `
<div class="content-area">

  <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:10px;padding:13px 16px;margin-bottom:16px;font-size:12.5px;line-height:1.7;color:var(--text2)">
    🎯 <strong style="color:#fbbf24">Curated Interview Q&A</strong> — The most frequently asked questions across Java, JVM, DSA, OOPs, MySQL, DBMS, Computer Networks, OS, JDBC, Docker, Kubernetes and Python. Tap any question to reveal the answer. Scroll down to add your own questions using answers already on this site.
  </div>

  <p class="section-label">☕ Java, JVM &amp; OOPs</p>

  <!-- Q1: HashMap internal working -->
  <div class="accordion" id="acc-iq-hashmap">
    <button class="accordion-header" onclick="toggleAcc('iq-hashmap')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>How does a HashMap work internally in Java?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-hashmap">
      <div class="hbox">A HashMap stores entries in an internal array called the <strong>bucket table (table[])</strong>. Every key's <code>hashCode()</code> is passed through an internal hash function, then reduced with <code>(n - 1) &amp; hash</code> — where n is the array length — to pick a bucket index. Each bucket holds a linked list (or a red-black tree, since Java 8) of entries whose keys landed on the same index.</div>

      <p class="section-label">Visualizing the bucket array</p>
      <div class="tbl-wrap" style="padding:14px 8px;overflow-x:auto">
        <svg width="720" height="230" viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto;min-width:680px">
          <text x="360" y="14" text-anchor="middle" font-size="11" font-family="JetBrains Mono, monospace" fill="#fbbf24">index = (n - 1) &amp; hash(key)   —  n = table.length = 8</text>

          <!-- bucket array cells -->
          <g font-family="JetBrains Mono, monospace">
            <rect x="20" y="30" width="65" height="40" rx="6" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="52" y="55" text-anchor="middle" font-size="11" fill="#3b82f6">null</text>
            <text x="52" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[0]</text>

            <rect x="105" y="30" width="65" height="40" rx="6" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="137" y="55" text-anchor="middle" font-size="11" fill="#3b82f6">null</text>
            <text x="137" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[1]</text>

            <rect x="190" y="30" width="65" height="40" rx="6" fill="none" stroke="#8b5cf6" stroke-width="2.2"/>
            <text x="222" y="55" text-anchor="middle" font-size="11" fill="#8b5cf6">●</text>
            <text x="222" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[2]</text>

            <rect x="275" y="30" width="65" height="40" rx="6" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="307" y="55" text-anchor="middle" font-size="11" fill="#3b82f6">null</text>
            <text x="307" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[3]</text>

            <rect x="360" y="30" width="65" height="40" rx="6" fill="none" stroke="#8b5cf6" stroke-width="2.2"/>
            <text x="392" y="55" text-anchor="middle" font-size="11" fill="#8b5cf6">●</text>
            <text x="392" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[4]</text>

            <rect x="445" y="30" width="65" height="40" rx="6" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="477" y="55" text-anchor="middle" font-size="11" fill="#3b82f6">null</text>
            <text x="477" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[5]</text>

            <rect x="530" y="30" width="65" height="40" rx="6" fill="none" stroke="#8b5cf6" stroke-width="2.2"/>
            <text x="562" y="55" text-anchor="middle" font-size="11" fill="#8b5cf6">●</text>
            <text x="562" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[6]</text>

            <rect x="615" y="30" width="65" height="40" rx="6" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="647" y="55" text-anchor="middle" font-size="11" fill="#3b82f6">null</text>
            <text x="647" y="85" text-anchor="middle" font-size="10" fill="var(--text3)">[7]</text>
          </g>

          <!-- chain for bucket 2: collision of two keys -->
          <line x1="222" y1="70" x2="222" y2="105" stroke="#8b5cf6" stroke-width="1.6" marker-end="url(#arrow)"/>
          <rect x="167" y="105" width="110" height="34" rx="6" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="1.4"/>
          <text x="222" y="126" text-anchor="middle" font-size="10.5" font-family="JetBrains Mono, monospace" fill="var(--text)">"apple" → 100</text>
          <line x1="222" y1="139" x2="222" y2="160" stroke="#8b5cf6" stroke-width="1.6" marker-end="url(#arrow)"/>
          <text x="248" y="152" font-size="9" fill="var(--text3)">next</text>
          <rect x="167" y="160" width="110" height="34" rx="6" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="1.4"/>
          <text x="222" y="181" text-anchor="middle" font-size="10.5" font-family="JetBrains Mono, monospace" fill="var(--text)">"grape" → 55</text>
          <text x="222" y="212" text-anchor="middle" font-size="9.5" fill="var(--text3)">collision — same bucket, linked</text>

          <!-- bucket 4 single entry -->
          <line x1="392" y1="70" x2="392" y2="105" stroke="#8b5cf6" stroke-width="1.6" marker-end="url(#arrow)"/>
          <rect x="337" y="105" width="110" height="34" rx="6" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="1.4"/>
          <text x="392" y="126" text-anchor="middle" font-size="10.5" font-family="JetBrains Mono, monospace" fill="var(--text)">"cat" → 7</text>
          <text x="392" y="152" text-anchor="middle" font-size="9.5" fill="var(--text3)">next → null</text>

          <!-- bucket 6 single entry -->
          <line x1="562" y1="70" x2="562" y2="105" stroke="#8b5cf6" stroke-width="1.6" marker-end="url(#arrow)"/>
          <rect x="507" y="105" width="110" height="34" rx="6" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="1.4"/>
          <text x="562" y="126" text-anchor="middle" font-size="10.5" font-family="JetBrains Mono, monospace" fill="var(--text)">"dog" → 23</text>
          <text x="562" y="152" text-anchor="middle" font-size="9.5" fill="var(--text3)">next → null</text>

          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#8b5cf6"/>
            </marker>
          </defs>
        </svg>
      </div>

      <p class="section-label">Step by step — put("apple", 100)</p>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">1. Hash it</strong> — call <code>key.hashCode()</code>, then spread the bits: <code>h ^ (h &gt;&gt;&gt; 16)</code>, to reduce collisions from poor hashCode implementations.</li>
        <li><strong style="color:var(--text)">2. Locate bucket</strong> — <code>index = hash &amp; (table.length - 1)</code>. This only works because capacity is always a power of 2 — it's a fast substitute for the slower <code>% length</code>.</li>
        <li><strong style="color:var(--text)">3. Insert</strong> — if the bucket is empty, place the node directly. If not, walk the chain comparing <code>hashCode()</code> then <code>equals()</code> — if a match is found, the value is replaced; otherwise the new node is appended.</li>
        <li><strong style="color:var(--text)">4. Resize</strong> — once size exceeds <code>capacity × loadFactor</code> (default 0.75), the table doubles and every entry is rehashed into the new, larger array.</li>
        <li><strong style="color:var(--text)">5. Treeification</strong> — since Java 8, if a single bucket's chain grows past 8 nodes (and table capacity ≥ 64), that bucket converts from a linked list to a red-black tree, dropping worst-case lookup from O(n) to O(log n).</li>
      </ul>

      <div class="sbox">✅ <strong>Average case:</strong> O(1) for get/put/remove because a good hash spreads keys evenly across buckets. <strong>Worst case:</strong> O(n) with a linked-list bucket (all keys collide), or O(log n) once that bucket has treeified.</div>
      <div class="ybox">⚠ Two objects that are <code>equals()</code> must return the <strong>same</strong> <code>hashCode()</code> — breaking this contract is the #1 cause of "my HashMap lost my entry" bugs.</div>
    </div>
  </div>

  <!-- Q2: equals vs hashCode -->
  <div class="accordion" id="acc-iq-equals-hashcode">
    <button class="accordion-header" onclick="toggleAcc('iq-equals-hashcode')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What is the contract between equals() and hashCode()?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-equals-hashcode">
      <div class="hbox">If two objects are equal according to <code>equals()</code>, they <strong>must</strong> produce the same <code>hashCode()</code>. The reverse isn't required — unequal objects are allowed to share a hash code (that's just a collision).</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li>Breaking this contract means a hash-based collection (HashMap, HashSet) can't find an entry it already stored, because it looks in the wrong bucket.</li>
        <li>Always override both together — most IDEs and Lombok's <code>@EqualsAndHashCode</code> generate a matching pair automatically.</li>
      </ul>
      <div class="sbox">✅ Interview one-liner: "equal objects must have equal hash codes; equal hash codes don't require equal objects."</div>
    </div>
  </div>

  <!-- Q3: OOP pillars -->
  <div class="accordion" id="acc-iq-oop-pillars">
    <button class="accordion-header" onclick="toggleAcc('iq-oop-pillars')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What are the four pillars of OOP?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-oop-pillars">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Pillar</th><th>What it means</th><th>Java example</th></tr></thead>
        <tbody>
          <tr><td style="color:#fbbf24">Encapsulation</td><td>Bundle data + behavior, hide internal state</td><td>private fields + public getters/setters</td></tr>
          <tr><td style="color:#fbbf24">Abstraction</td><td>Expose only what's necessary, hide implementation details</td><td>interfaces, abstract classes</td></tr>
          <tr><td style="color:#fbbf24">Inheritance</td><td>Reuse behavior by extending a parent class</td><td>class Dog extends Animal</td></tr>
          <tr><td style="color:#fbbf24">Polymorphism</td><td>Same method call, different behavior at runtime/compile time</td><td>method overriding &amp; overloading</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Runtime polymorphism uses dynamic method dispatch (overriding); compile-time polymorphism is overloading, resolved by the compiler.</div>
    </div>
  </div>

  <!-- Q4: abstract vs interface -->
  <div class="accordion" id="acc-iq-abstract-interface">
    <button class="accordion-header" onclick="toggleAcc('iq-abstract-interface')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Abstract class vs Interface — when do you use which?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-abstract-interface">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Abstract class</th><th>Interface</th></tr></thead>
        <tbody>
          <tr><td>Can have state (instance fields)</td><td>Only constants (public static final)</td></tr>
          <tr><td>Single inheritance only</td><td>A class can implement many interfaces</td></tr>
          <tr><td>Can mix abstract + concrete methods</td><td>Since Java 8: default &amp; static methods allowed too</td></tr>
          <tr><td>Use for a strong "is-a" relationship sharing code</td><td>Use to define a capability/contract ("can-do")</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Rule of thumb: prefer interfaces for flexibility; reach for an abstract class when subclasses genuinely share implementation, not just a signature.</div>
    </div>
  </div>

  <!-- Q5: String immutability -->
  <div class="accordion" id="acc-iq-string-pool">
    <button class="accordion-header" onclick="toggleAcc('iq-string-pool')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Why is String immutable in Java, and what is the String pool?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-string-pool">
      <div class="hbox">Once created, a String's character content can never change — any "modification" (concat, replace, substring) returns a brand-new String object.</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">Security</strong> — Strings are used for class names, file paths, network connections; immutability stops them being altered mid-use.</li>
        <li><strong style="color:var(--text)">Thread safety</strong> — an immutable object is automatically safe to share across threads, no synchronization needed.</li>
        <li><strong style="color:var(--text)">Caching / String pool</strong> — literal strings are stored once in a special heap area (the string pool) and reused. <code>String a = "hi"; String b = "hi";</code> — a and b point to the same object.</li>
        <li><strong style="color:var(--text)">Safe hashCode caching</strong> — since content never changes, the hash code is computed once and cached, making Strings excellent HashMap keys.</li>
      </ul>
      <div class="ybox">⚠ <code>new String("hi")</code> forces a new object outside the pool, even though the content is identical — that's why <code>==</code> comparisons on Strings are a classic interview trap.</div>
    </div>
  </div>

  <p class="section-label">🧬 JVM Internals</p>

  <!-- Q6: JVM architecture -->
  <div class="accordion" id="acc-iq-jvm-architecture">
    <button class="accordion-header" onclick="toggleAcc('iq-jvm-architecture')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Explain the JVM architecture.</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-jvm-architecture">
      <div class="hbox">The JVM has three major subsystems that turn a compiled .class file into a running program.</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">1. Class Loader Subsystem</strong> — loads, links (verify/prepare/resolve) and initializes .class files, using Bootstrap → Extension → Application loaders (delegation model).</li>
        <li><strong style="color:var(--text)">2. Runtime Data Areas</strong> — Method Area (class metadata), Heap (all objects, shared), Stack (one per thread, holds frames for local variables), PC Register, Native Method Stack.</li>
        <li><strong style="color:var(--text)">3. Execution Engine</strong> — Interpreter (reads bytecode line by line), JIT Compiler (compiles "hot" methods to native machine code for speed), and the Garbage Collector.</li>
      </ul>
      <div class="sbox">✅ Interview line: "Class loader loads it, runtime data areas store it, execution engine runs it."</div>
    </div>
  </div>

  <!-- Q7: GC -->
  <div class="accordion" id="acc-iq-gc">
    <button class="accordion-header" onclick="toggleAcc('iq-gc')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>How does Garbage Collection work in Java?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-gc">
      <div class="hbox">The GC automatically reclaims heap memory occupied by objects that are no longer <strong>reachable</strong> from any GC root (local variables, active threads, static fields).</div>
      <p class="section-label">Generational heap</p>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Region</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Young Gen (Eden + 2 Survivor)</td><td>New objects; most die young → frequent, cheap Minor GC</td></tr>
          <tr><td>Old Gen (Tenured)</td><td>Objects that survived several Minor GCs → less frequent Major/Full GC</td></tr>
          <tr><td>Metaspace</td><td>Class metadata (off-heap, replaced PermGen since Java 8)</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Most modern collectors (G1, ZGC, Shenandoah) use a mark → sweep → compact cycle and aim to keep pause times short even on large heaps.</div>
    </div>
  </div>

  <!-- Q8: JVM vs JRE vs JDK -->
  <div class="accordion" id="acc-iq-jvm-jre-jdk">
    <button class="accordion-header" onclick="toggleAcc('iq-jvm-jre-jdk')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Difference between JVM, JRE and JDK?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-jvm-jre-jdk">
      <div class="hbox"><strong>JDK ⊃ JRE ⊃ JVM</strong> — each one contains the previous.</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">JVM</strong> — the abstract engine that actually executes bytecode. Platform-specific.</li>
        <li><strong style="color:var(--text)">JRE</strong> — JVM + core class libraries (java.lang, java.util, etc.) needed to <em>run</em> Java programs.</li>
        <li><strong style="color:var(--text)">JDK</strong> — JRE + development tools (javac compiler, debugger, javadoc) needed to <em>build</em> Java programs.</li>
      </ul>
    </div>
  </div>

  <p class="section-label">🧮 Data Structures &amp; Algorithms</p>

  <!-- Q9: ArrayList vs LinkedList -->
  <div class="accordion" id="acc-iq-arraylist-linkedlist">
    <button class="accordion-header" onclick="toggleAcc('iq-arraylist-linkedlist')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>ArrayList vs LinkedList — which one and why?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-arraylist-linkedlist">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Operation</th><th>ArrayList</th><th>LinkedList</th></tr></thead>
        <tbody>
          <tr><td>Random access get(i)</td><td>O(1) — contiguous array</td><td>O(n) — must walk the chain</td></tr>
          <tr><td>Insert/delete at start</td><td>O(n) — shifts elements</td><td>O(1) — just relink pointers</td></tr>
          <tr><td>Insert/delete at end</td><td>O(1) amortized</td><td>O(1)</td></tr>
          <tr><td>Memory</td><td>Compact, cache-friendly</td><td>Extra pointer overhead per node</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Default to ArrayList — it's cache-friendly and covers 90% of use cases. Reach for LinkedList only with heavy insert/delete at both ends (it also implements Deque).</div>
    </div>
  </div>

  <!-- Q10: quicksort vs mergesort -->
  <div class="accordion" id="acc-iq-quicksort-mergesort">
    <button class="accordion-header" onclick="toggleAcc('iq-quicksort-mergesort')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>QuickSort vs MergeSort — how do they compare?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-quicksort-mergesort">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th></th><th>QuickSort</th><th>MergeSort</th></tr></thead>
        <tbody>
          <tr><td>Average time</td><td>O(n log n)</td><td>O(n log n)</td></tr>
          <tr><td>Worst case</td><td>O(n²) — bad pivot choice</td><td>O(n log n) — always</td></tr>
          <tr><td>Space</td><td>O(log n) — in-place</td><td>O(n) — needs auxiliary array</td></tr>
          <tr><td>Stable?</td><td>No</td><td>Yes</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ QuickSort usually wins in practice (better cache locality, in-place). MergeSort wins when you need guaranteed O(n log n) or stability — e.g. sorting linked lists or external/disk sorting.</div>
    </div>
  </div>

  <!-- Q11: recursion & stack overflow -->
  <div class="accordion" id="acc-iq-recursion-stack">
    <button class="accordion-header" onclick="toggleAcc('iq-recursion-stack')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>How does recursion use the call stack, and what causes StackOverflowError?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-recursion-stack">
      <div class="hbox">Every method call pushes a new stack frame (local variables, return address) onto the thread's call stack. Recursion keeps pushing frames until the base case is hit, then pops them off one by one while returning.</div>
      <div class="ybox">⚠ Missing or unreachable base case → frames keep piling up until the fixed-size stack runs out of memory → <code>StackOverflowError</code>. Deep recursion (e.g. traversing a huge tree) can trigger this even with a correct base case.</div>
      <div class="sbox">✅ Fix: rewrite as iteration with an explicit stack/queue, or use tail recursion where the language/JVM supports optimizing it (note: standard JVM does not optimize tail calls).</div>
    </div>
  </div>

  <p class="section-label">🐬 MySQL &amp; DBMS</p>

  <!-- Q12: Normalization -->
  <div class="accordion" id="acc-iq-normalization">
    <button class="accordion-header" onclick="toggleAcc('iq-normalization')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What is normalization? Explain 1NF, 2NF, 3NF.</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-normalization">
      <div class="hbox">Normalization organizes tables to reduce data redundancy and avoid update/insert/delete anomalies, by progressively removing dependency problems.</div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Form</th><th>Rule</th></tr></thead>
        <tbody>
          <tr><td style="color:#10b981">1NF</td><td>Every column holds atomic (indivisible) values — no repeating groups or arrays in a cell</td></tr>
          <tr><td style="color:#10b981">2NF</td><td>1NF + no partial dependency — every non-key column depends on the <em>whole</em> composite primary key</td></tr>
          <tr><td style="color:#10b981">3NF</td><td>2NF + no transitive dependency — non-key columns depend only on the key, not on other non-key columns</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Trade-off: normalization reduces redundancy but can require more joins; denormalization is sometimes used deliberately for read-heavy reporting workloads.</div>
    </div>
  </div>

  <!-- Q13: ACID -->
  <div class="accordion" id="acc-iq-acid">
    <button class="accordion-header" onclick="toggleAcc('iq-acid')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What are ACID properties in a database transaction?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-acid">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Property</th><th>Guarantee</th></tr></thead>
        <tbody>
          <tr><td style="color:#10b981">Atomicity</td><td>All statements in a transaction succeed, or none do (all-or-nothing)</td></tr>
          <tr><td style="color:#10b981">Consistency</td><td>A transaction moves the DB from one valid state to another, respecting constraints</td></tr>
          <tr><td style="color:#10b981">Isolation</td><td>Concurrent transactions don't interfere — controlled by isolation levels</td></tr>
          <tr><td style="color:#10b981">Durability</td><td>Once committed, changes survive a crash (written to disk/log)</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ MySQL's InnoDB engine is ACID-compliant by default; MyISAM is not (no transaction support).</div>
    </div>
  </div>

  <!-- Q14: index/btree -->
  <div class="accordion" id="acc-iq-index-btree">
    <button class="accordion-header" onclick="toggleAcc('iq-index-btree')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>How do database indexes speed up queries?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-index-btree">
      <div class="hbox">Without an index, MySQL performs a <strong>full table scan</strong> — reading every row to find matches (O(n)). An index builds a separate, sorted <strong>B-Tree</strong> structure on the indexed column(s), so lookups become O(log n).</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li>A B-Tree keeps data sorted and balanced, so range queries (<code>BETWEEN</code>, <code>&gt;</code>, <code>ORDER BY</code>) and equality lookups both stay fast.</li>
        <li><strong style="color:var(--text)">Trade-off</strong> — every INSERT/UPDATE/DELETE must also update the index, so over-indexing slows writes.</li>
        <li>A <strong>composite index</strong> on (a, b) only helps queries that filter on a, or on a and b together — not on b alone (leftmost-prefix rule).</li>
      </ul>
      <div class="sbox">✅ Interview line: "Indexes use B-Trees to enable faster data access, at the cost of slower writes and extra storage."</div>
    </div>
  </div>

  <p class="section-label">🌐 Computer Networks &amp; Operating Systems</p>

  <!-- Q15: TCP handshake -->
  <div class="accordion" id="acc-iq-tcp-handshake">
    <button class="accordion-header" onclick="toggleAcc('iq-tcp-handshake')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Explain the TCP 3-way handshake.</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-tcp-handshake">
      <div class="hbox">Before any data flows, client and server synchronize sequence numbers to establish a reliable, ordered connection:</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">1. SYN</strong> — client sends a SYN packet with an initial sequence number, requesting a connection.</li>
        <li><strong style="color:var(--text)">2. SYN-ACK</strong> — server acknowledges and replies with its own SYN, containing its own sequence number.</li>
        <li><strong style="color:var(--text)">3. ACK</strong> — client acknowledges the server's SYN. Connection is now established.</li>
      </ul>
      <div class="sbox">✅ Closing a connection uses a 4-way handshake (FIN/ACK from each side) since either side may still have data to finish sending.</div>
    </div>
  </div>

  <!-- Q16: OSI vs TCP/IP -->
  <div class="accordion" id="acc-iq-osi-tcpip">
    <button class="accordion-header" onclick="toggleAcc('iq-osi-tcpip')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>OSI model vs TCP/IP model?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-osi-tcpip">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>OSI (7 layers)</th><th>TCP/IP (4 layers)</th></tr></thead>
        <tbody>
          <tr><td>Application, Presentation, Session</td><td>Application</td></tr>
          <tr><td>Transport</td><td>Transport</td></tr>
          <tr><td>Network</td><td>Internet</td></tr>
          <tr><td>Data Link, Physical</td><td>Network Access</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ OSI is a theoretical/teaching reference model; TCP/IP is the practical model the real internet runs on.</div>
    </div>
  </div>

  <!-- Q17: process vs thread -->
  <div class="accordion" id="acc-iq-process-thread">
    <button class="accordion-header" onclick="toggleAcc('iq-process-thread')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Process vs Thread — what's the difference?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-process-thread">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>Process</th><th>Thread</th></tr></thead>
        <tbody>
          <tr><td>Independent execution unit with its own memory space</td><td>Lightweight unit inside a process, shares its memory</td></tr>
          <tr><td>Heavier to create/switch</td><td>Cheaper to create/switch</td></tr>
          <tr><td>Communication needs IPC (pipes, sockets)</td><td>Communicates directly via shared variables</td></tr>
          <tr><td>One process crashing doesn't affect others</td><td>One thread crashing can take down the whole process</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- Q18: deadlock -->
  <div class="accordion" id="acc-iq-deadlock">
    <button class="accordion-header" onclick="toggleAcc('iq-deadlock')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What is a deadlock, and what are its four necessary conditions?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-deadlock">
      <div class="hbox">A deadlock is a state where two or more threads/processes are each waiting on a resource the other holds, so none can proceed. All four Coffman conditions must hold simultaneously:</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">Mutual exclusion</strong> — a resource can be held by only one thread at a time.</li>
        <li><strong style="color:var(--text)">Hold and wait</strong> — a thread holds a resource while waiting for another.</li>
        <li><strong style="color:var(--text)">No preemption</strong> — a resource can't be forcibly taken away; it must be released voluntarily.</li>
        <li><strong style="color:var(--text)">Circular wait</strong> — a closed chain of threads, each waiting on the next.</li>
      </ul>
      <div class="sbox">✅ Prevention: break any one condition — e.g. always acquire locks in the same global order to eliminate circular wait.</div>
    </div>
  </div>

  <p class="section-label">🗄️ JDBC, Docker &amp; Kubernetes</p>

  <!-- Q19: JDBC steps -->
  <div class="accordion" id="acc-iq-jdbc-steps">
    <button class="accordion-header" onclick="toggleAcc('iq-jdbc-steps')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What are the steps to connect a Java application to a database using JDBC?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-jdbc-steps">
      <div class="code-block">
        <div class="code-header"><div class="code-dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#10b981"></span></div><span style="font-size:11px;color:var(--text3)">JdbcExample.java</span></div>
        <pre style="margin:0;padding:12px 14px;font-size:12px;line-height:1.7;overflow-x:auto"><code>Class.forName("com.mysql.cj.jdbc.Driver");           // 1. Load driver
Connection con = DriverManager.getConnection(         // 2. Open connection
    "jdbc:mysql://localhost:3306/mydb", "user", "pass");
Statement st = con.createStatement();                 // 3. Create statement
ResultSet rs = st.executeQuery("SELECT * FROM users"); // 4. Execute query
while (rs.next()) {                                    // 5. Process results
    System.out.println(rs.getString("name"));
}
con.close();                                           // 6. Close connection</code></pre>
      </div>
      <div class="sbox">✅ Since JDBC 4.0, <code>Class.forName()</code> is optional — drivers auto-register via ServiceLoader. Prefer <code>PreparedStatement</code> over <code>Statement</code> to avoid SQL injection and get query plan caching.</div>
    </div>
  </div>

  <!-- Q20: docker vs vm -->
  <div class="accordion" id="acc-iq-docker-vs-vm">
    <button class="accordion-header" onclick="toggleAcc('iq-docker-vs-vm')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Docker container vs Virtual Machine — what's the real difference?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-docker-vs-vm">
      <div class="hbox">A VM virtualizes hardware and runs a full guest OS on top of a hypervisor. A container shares the host machine's OS kernel and only isolates the process, filesystem and network — making it far lighter.</div>
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>VM</th><th>Container</th></tr></thead>
        <tbody>
          <tr><td>Boots in minutes, GBs in size</td><td>Starts in seconds, MBs in size</td></tr>
          <tr><td>Full isolated guest OS + kernel</td><td>Shares host kernel, isolated via namespaces/cgroups</td></tr>
          <tr><td>Stronger isolation boundary</td><td>Lighter, but weaker isolation than a VM</td></tr>
        </tbody>
      </table></div>
    </div>
  </div>

  <!-- Q21: k8s why -->
  <div class="accordion" id="acc-iq-k8s-why">
    <button class="accordion-header" onclick="toggleAcc('iq-k8s-why')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Why do we need Kubernetes if we already have Docker?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-k8s-why">
      <div class="hbox">Docker runs containers on a single machine. In production you have dozens or thousands of containers spread across many machines — Kubernetes is the <strong>orchestrator</strong> that manages them all as one system.</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li><strong style="color:var(--text)">Self-healing</strong> — restarts or reschedules a Pod automatically if a container crashes or a node dies.</li>
        <li><strong style="color:var(--text)">Scaling</strong> — a Deployment can scale replica Pods up/down automatically based on load.</li>
        <li><strong style="color:var(--text)">Service discovery &amp; load balancing</strong> — a Service gives a stable network identity to a set of ever-changing Pods.</li>
        <li><strong style="color:var(--text)">Rolling updates &amp; rollbacks</strong> — deploy new versions with zero downtime, roll back instantly if something breaks.</li>
      </ul>
    </div>
  </div>

  <p class="section-label">🐍 Python Basics</p>

  <!-- Q22: list vs tuple -->
  <div class="accordion" id="acc-iq-list-tuple">
    <button class="accordion-header" onclick="toggleAcc('iq-list-tuple')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>Python List vs Tuple — when do you use each?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-list-tuple">
      <div class="tbl-wrap"><table class="bit-table">
        <thead><tr><th>List</th><th>Tuple</th></tr></thead>
        <tbody>
          <tr><td>Mutable — can add/remove/change items</td><td>Immutable — fixed once created</td></tr>
          <tr><td><code>[1, 2, 3]</code></td><td><code>(1, 2, 3)</code></td></tr>
          <tr><td>Slightly slower, more memory</td><td>Faster, less memory overhead</td></tr>
          <tr><td>Not hashable — can't be a dict key</td><td>Hashable (if contents are) — can be a dict key</td></tr>
        </tbody>
      </table></div>
      <div class="sbox">✅ Use a tuple for fixed, heterogeneous data (like coordinates) and as dict keys; use a list for a growing, homogeneous collection.</div>
    </div>
  </div>

  <!-- Q23: GIL -->
  <div class="accordion" id="acc-iq-gil">
    <button class="accordion-header" onclick="toggleAcc('iq-gil')">
      <span style="display:flex;align-items:center;gap:8px"><span style="color:#fbbf24">Q</span><span>What is the GIL (Global Interpreter Lock) in Python?</span></span>
      <svg class="accordion-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="accordion-body" id="body-iq-gil">
      <div class="hbox">The GIL is a mutex in CPython that allows only <strong>one thread</strong> to execute Python bytecode at a time, even on a multi-core machine.</div>
      <ul style="padding-left:18px;font-size:12.5px;line-height:1.9;color:var(--text2)">
        <li>It exists to keep CPython's memory management (reference counting) simple and thread-safe.</li>
        <li><strong style="color:var(--text)">Impact</strong> — CPU-bound multithreaded code doesn't get true parallelism; threads are still useful for I/O-bound work (network, disk) since the GIL is released during I/O waits.</li>
        <li><strong style="color:var(--text)">Workarounds</strong> — use the <code>multiprocessing</code> module (separate processes, separate GILs) for CPU-bound parallelism, or use libraries like NumPy that release the GIL during heavy computation.</li>
      </ul>
    </div>
  </div>

  <!-- ADD YOUR OWN QUESTION -->
  <div class="section-label" style="margin-top:26px">➕ Add Your Own Question</div>
  <div class="hbox">Type a question, then either pick an existing answer from any card on this site, or write your own answer. Your questions are saved locally in this browser.</div>

  <div id="iqAddPanel" class="iq-add-panel">
    <div id="iqEditingBanner" style="display:none;align-items:center;justify-content:space-between;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.3);border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:11.5px;color:#fbbf24;font-weight:600">
      <span>✏️ Editing your question</span>
      <button type="button" onclick="cancelEditUserQuestion()" style="background:none;border:none;color:#fbbf24;cursor:pointer;font-size:11.5px;font-weight:700;text-decoration:underline">Cancel</button>
    </div>

    <label class="iq-label">Question</label>
    <input type="text" id="iqQuestionInput" class="iq-input" placeholder="e.g. What is the difference between == and .equals() in Java?" autocomplete="off"/>

    <label class="iq-label" style="margin-top:14px">Answer</label>
    <div class="iq-mode-toggle" role="tablist">
      <button type="button" id="iqModeBtnSearch" class="iq-mode-btn active" onclick="setIQAnswerMode('search')">🔍 Select from site</button>
      <button type="button" id="iqModeBtnManual" class="iq-mode-btn" onclick="setIQAnswerMode('manual')">✍️ Type my own</button>
    </div>

    <div id="iqSearchMode">
      <input type="text" id="iqAnswerSearch" class="iq-input" placeholder="Search topics, sections, keywords…" autocomplete="off" oninput="onIQAnswerSearch()"/>
      <div id="iqSearchResults" class="iq-results"></div>
      <div id="iqSelectedAnswer" style="display:none"></div>
    </div>

    <div id="iqManualMode" style="display:none">
      <textarea id="iqManualAnswerInput" class="iq-input iq-textarea" placeholder="Write the answer here…" oninput="updateIQAddBtnState()"></textarea>
    </div>

    <button type="button" id="iqAddBtn" class="iq-add-btn" disabled onclick="addUserQuestion()">+ Add Question</button>
  </div>

  <div id="userQuestionsList"></div>

</div>

`;

function getContent(topic) {
  if (topic.id === 'bit-manipulation') return BIT_MANIPULATION_CONTENT;
  if (topic.id === 'html-css') return HTML_CSS_CONTENT;
  if (topic.id === 'linked-list') return LINKED_LIST_CONTENT;
  if (topic.id === 'arrays') return ARRAYS_CONTENT;
  if (topic.id === 'projects') return PROJECTS_CONTENT;
  if (topic.id === 'built-in-functions') return BUILT_IN_FUNCTIONS_CONTENT;
  if (topic.id === 'dbms') return DBMS_CONTENT;
  if (topic.id === 'operating-systems') return OS_CONTENT;
  if (topic.id === 'computer-networks') return CN_CONTENT;
  if (topic.id === 'git') return GIT_CONTENT;
  if (topic.id === 'maven') return MAVEN_CONTENT;
  if (topic.id === 'docker') return DOCKER_CONTENT;
  if (topic.id === 'kubernetes') return KUBERNETES_CONTENT;
  if (topic.id === 'binary-search') return BINARY_SEARCH_CONTENT;
  if (topic.id === 'apis-http') return APIS_HTTP_CONTENT;
  if (topic.id === 'jdbc') return JDBC_CONTENT;
  if (topic.id === 'spring-mvc') return SPRING_MVC_CONTENT;
  if (topic.id === 'spring-boot') return SPRING_BOOT_CONTENT;
  if (topic.id === 'interview-questions') return INTERVIEW_QUESTIONS_CONTENT;
  return `<div class="content-area"><div style="padding:20px 0;text-align:center">
    <div style="font-size:24px;margin-bottom:8px;opacity:0.3">◦ ◦ ◦</div>
    <p style="font-size:13px;color:var(--text3)">No content added yet for this topic</p>
  </div></div>`;
}

/* ── Per-topic SVG icon map (Lucide/Phosphor style) ── */
const TOPIC_ICONS = {
  'maven':              `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>`,
  'arrays':             `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="3" height="8" rx="1"/><rect x="8" y="5" width="3" height="14" rx="1"/><rect x="13" y="8" width="3" height="8" rx="1"/><rect x="18" y="6" width="3" height="12" rx="1"/></svg>`,
  'graphs':             `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><line x1="7" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="17" y2="11"/><line x1="14" y1="13" x2="17" y2="18"/></svg>`,
  'trees':              `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="4" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="8" cy="20" r="2"/><line x1="12" y1="6" x2="7" y2="11"/><line x1="12" y1="6" x2="17" y2="11"/><line x1="6" y1="14" x2="5" y2="18"/><line x1="6" y1="14" x2="7" y2="18"/></svg>`,
  'dynamic-programming':`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>`,
  'sorting':            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="9" y2="18"/></svg>`,
  'binary-search':      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  'bit-manipulation':   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><text x="2" y="16" font-size="12" font-family="monospace" fill="currentColor" stroke="none">01</text><text x="2" y="23" font-size="9" font-family="monospace" fill="currentColor" stroke="none">10</text></svg>`,
  'sliding-window':     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="7" width="20" height="10" rx="2"/><rect x="7" y="7" width="8" height="10" rx="1" fill="currentColor" opacity="0.2"/><line x1="7" y1="7" x2="7" y2="17"/><line x1="15" y1="7" x2="15" y2="17"/></svg>`,
  'linked-list':        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="9" width="6" height="6" rx="2"/><rect x="9" y="9" width="6" height="6" rx="2"/><rect x="16" y="9" width="6" height="6" rx="2"/><line x1="8" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="16" y2="12"/></svg>`,
  'stack-queue':        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/></svg>`,
  'strings':            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 7V5h11v2"/><path d="M7 5v14"/><path d="M12 13v-1h9v1"/><path d="M16 12v7"/></svg>`,
  'java-oop':           `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="11" width="8" height="8" rx="2"/><path d="M11 15h4a2 2 0 0 0 0-4h-4"/><path d="M15 11V7a2 2 0 0 0-4 0v4"/></svg>`,
  'java-features':      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'built-in-functions': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M7 10h2l2 4 2-6 1 2h3"/></svg>`,
  'projects':           `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12l7-7 7 7"/></svg>`,
  'spring-mvc':         `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v8M8 12h8"/></svg>`,
  'spring-boot':        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v8"/><circle cx="12" cy="12" r="3"/></svg>`,
  'docker':             `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="8" width="3" height="3" rx="0.5"/><rect x="6" y="8" width="3" height="3" rx="0.5"/><rect x="10" y="8" width="3" height="3" rx="0.5"/><rect x="6" y="4" width="3" height="3" rx="0.5"/><rect x="10" y="4" width="3" height="3" rx="0.5"/><path d="M2 14c0 2 1.5 3 4 3h10c3 0 5-1.5 5-4 0-1-.5-2-1.5-2.5C19 9 18 8 16 8h-3"/><path d="M20 11.5c1-.2 2 .3 2 1.5"/></svg>`,
  'kubernetes':         `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="15"/><line x1="9" y1="10.5" x2="2.5" y2="7"/><line x1="21.5" y1="17" x2="15" y2="13.5"/><line x1="9" y1="13.5" x2="2.5" y2="17"/><line x1="21.5" y1="7" x2="15" y2="10.5"/></svg>`,
  'git':                `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v6M9 6h6"/><path d="M15 6c0 6-9 9-9 9"/></svg>`,
  'mysql':              `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>`,
  'dbms':               `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>`,
  'computer-networks':  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="18" width="6" height="4" rx="1"/><rect x="16" y="18" width="6" height="4" rx="1"/><line x1="12" y1="6" x2="12" y2="13"/><line x1="12" y1="13" x2="5" y2="18"/><line x1="12" y1="13" x2="19" y2="18"/></svg>`,
  'operating-systems':  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><line x1="2" y1="7" x2="22" y2="7"/></svg>`,
  'javascript':         `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 17c0 1.5 2 2 3 1s1-4 1-6"/><path d="M13 15c0 2 1 3 3 3s3-1 3-3-1-2-3-2-3-1-3-3 1-2 3-2 2 .5 2 1"/></svg>`,
  'html-css':           `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z"/><path d="M8 8h8l-.5 5-3.5 1-3.5-1-.2-3H15"/></svg>`,
  'ai-concepts':        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z"/><line x1="9" y1="10" x2="9" y2="14"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="15" y1="10" x2="15" y2="14"/></svg>`,
  'apis-http':          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  'jdbc':               `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7"/><path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/></svg>`,
  'interview-questions':`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`,
};

/* Per-topic accent colors — only 5% saturation, just a tint */
const TOPIC_COLORS = {
  'arrays':              { color:'#3b82f6', glow:'rgba(59,130,246,0.20)' },
  'graphs':              { color:'#06b6d4', glow:'rgba(6,182,212,0.20)'  },
  'trees':               { color:'#22c55e', glow:'rgba(34,197,94,0.20)'  },
  'dynamic-programming': { color:'#ec4899', glow:'rgba(236,72,153,0.20)' },
  'sorting':             { color:'#f97316', glow:'rgba(249,115,22,0.20)' },
  'binary-search':       { color:'#8b5cf6', glow:'rgba(139,92,246,0.20)' },
  'bit-manipulation':    { color:'#14b8a6', glow:'rgba(20,184,166,0.20)' },
  'sliding-window':      { color:'#ec4899', glow:'rgba(236,72,153,0.20)' },
  'linked-list':         { color:'#8b5cf6', glow:'rgba(139,92,246,0.20)' },
  'stack-queue':         { color:'#f97316', glow:'rgba(249,115,22,0.20)' },
  'strings':             { color:'#10b981', glow:'rgba(16,185,129,0.20)' },
  'interview-questions': { color:'#fbbf24', glow:'rgba(251,191,36,0.20)' },
  'default':             { color:'#7c6fe0', glow:'rgba(124,111,224,0.20)'},
};

function getAccent(id) {
  return TOPIC_COLORS[id] || TOPIC_COLORS['default'];
}

function renderCard(topic) {
  const cat = CATEGORIES[topic.category];
  const accent = getAccent(topic.id);
  const svgIcon = TOPIC_ICONS[topic.id];

  return `
  <div class="card" id="card-${topic.id}" data-category="${topic.category}" data-name="${topic.name.toLowerCase()}"
    style="cursor:pointer;--card-color:${accent.color};--card-glow:${accent.glow};position:relative" onclick="toggleExpand('${topic.id}')">
    <!-- Accent top border stripe -->
    <div style="height:2px;background:linear-gradient(90deg,${accent.color},transparent 70%);opacity:0.7"></div>
    <div style="padding:18px 20px 20px">
      <!-- Top row -->
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="icon-box" style="
            background:${accent.color}12;
            border:1px solid ${accent.color}28;
            color:${accent.color};
            box-shadow:0 0 20px ${accent.glow}, 0 0 8px ${accent.glow};
          ">
            ${svgIcon}
          </div>
          <div>
            <h3 style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px">${topic.name}</h3>
            <span class="cat-badge" style="background:${cat.color}15;color:${cat.color};border:1px solid ${cat.color}22">${cat.label}</span>
          </div>
        </div>
      </div>

      <!-- Open indicator -->
      <div class="expand-btn" style="pointer-events:none;justify-content:${topic.hasContent ? 'space-between' : 'center'}">
        ${topic.hasContent ? `<span style="color:var(--text3);font-weight:500;font-size:11px;letter-spacing:0.02em">Has content</span>` : ''}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
      </div>
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

function openFullscreen(topic) {
  const overlay = document.getElementById('fullscreenOverlay');
  const titleEl = document.getElementById('fsTopicTitle');
  const contentEl = document.getElementById('fsContent');

  titleEl.innerHTML = `<div style="font-size:15px;font-weight:700;color:var(--text)">${topic.name}</div>`;

  // Show overlay immediately so animation starts, inject content after paint
  contentEl.innerHTML = '<div style="padding:40px 0;text-align:center;color:var(--text3);font-size:13px">Loading…</div>';
  overlay.classList.remove('closing');
  overlay.classList.add('active');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  syncLoadMoreVisibility();

  // Defer heavy innerHTML parse until after the open animation frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      contentEl.innerHTML = getContent(topic);
      enhanceAccordionStars(topic.id);
      if (topic.id === 'interview-questions') {
        _iqAnswerMode = 'search';
        _iqSelectedAnswer = null;
        renderUserQuestions();
        const searchInp = document.getElementById('iqAnswerSearch');
        if (searchInp) searchInp.addEventListener('keydown', (e) => { if (e.key === 'Escape') e.stopPropagation(); });
      } else {
        // Every other card gets a lightweight "add your own Q&A" panel —
        // manual question + manual answer only, no site-wide search.
        _cqaCurrentTopicId = topic.id;
        _cqaEditingId = null;
        contentEl.insertAdjacentHTML('beforeend', renderCustomQAPanel(topic));
        renderCustomQAList(topic.id);
      }
    });
  });

  // Push a history entry so the mobile/browser "Back" button closes the
  // overlay instead of navigating away from the page.
  if (!_fsHistoryPushed) {
    history.pushState({ fsOverlay: true }, '', location.href);
    _fsHistoryPushed = true;
  }
}

// Tracks whether we currently own a pushed history entry for the overlay
let _fsHistoryPushed = false;

// Public close function — used by the "Back to Topics" button, Escape key,
// and anywhere else in the UI. If we pushed a history entry when opening,
// go back through it (this fires popstate, which actually closes the
// overlay via doCloseFullscreen). Otherwise close directly.
function closeFullscreen() {
  if (_fsHistoryPushed) {
    _fsHistoryPushed = false;
    history.back();
  } else {
    doCloseFullscreen();
  }
}

// Does the actual closing animation/cleanup. Called either directly
// (no history entry was pushed) or from the popstate handler (when the
// user pressed the phone/browser back button).
function doCloseFullscreen() {
  const overlay = document.getElementById('fullscreenOverlay');
  overlay.classList.add('closing');
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
// If the overlay is open, close it instead of letting the browser navigate
// away from the page.
window.addEventListener('popstate', () => {
  const overlay = document.getElementById('fullscreenOverlay');
  if (overlay && overlay.classList.contains('active') && !overlay.classList.contains('closing')) {
    _fsHistoryPushed = false;
    doCloseFullscreen();
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
}
function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (backdrop) backdrop.classList.remove('show');
  syncLoadMoreVisibility();
}
window.addEventListener('resize', function(){
  if (window.innerWidth > 768) closeMobileSidebar();
});

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

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  setTaglineTheme(isLight);
  // Update top-right emoji (hidden)
  const topBtn = document.getElementById('themeToggle');
  if (topBtn) topBtn.textContent = isLight ? '🌙' : '☀️';
  // Update sidebar SVG sun/moon toggle icons
  document.getElementById('iconSun').style.display = isLight ? 'none' : '';
  document.getElementById('iconMoon').style.display = isLight ? '' : 'none';
  // Update header pill toggle icons
  const httSun = document.getElementById('httSun');
  const httMoon = document.getElementById('httMoon');
  if (httSun) httSun.style.display = isLight ? 'none' : '';
  if (httMoon) httMoon.style.display = isLight ? '' : 'none';
  // Animate vault icon (now replaced — gracefully no-op)
  const darkIcon = document.getElementById('vaultIconDark');
  const lightIcon = document.getElementById('vaultIconLight');
  if (darkIcon && lightIcon) {
    if (isLight) {
      darkIcon.style.opacity = '0'; darkIcon.style.transform = 'rotate(15deg) scale(0.8)';
      lightIcon.style.opacity = '1'; lightIcon.style.transform = 'rotate(0deg) scale(1)';
    } else {
      darkIcon.style.opacity = '1'; darkIcon.style.transform = 'rotate(0deg) scale(1)';
      lightIcon.style.opacity = '0'; lightIcon.style.transform = 'rotate(-15deg) scale(0.8)';
    }
  }
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Restore theme
(function(){
  const saved = localStorage.getItem('theme');
  const httSun = document.getElementById('httSun');
  const httMoon = document.getElementById('httMoon');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    const topBtn = document.getElementById('themeToggle');
    if (topBtn) topBtn.textContent = '🌙';
    document.getElementById('iconSun').style.display = 'none';
    document.getElementById('iconMoon').style.display = '';
    if (httSun) httSun.style.display = 'none';
    if (httMoon) httMoon.style.display = '';
    setTaglineTheme(true);
  } else {
    const topBtn = document.getElementById('themeToggle');
    if (topBtn) topBtn.textContent = '☀️';
    document.getElementById('iconSun').style.display = '';
    document.getElementById('iconMoon').style.display = 'none';
    if (httSun) httSun.style.display = '';
    if (httMoon) httMoon.style.display = 'none';
  }
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
  const opening = !panel.classList.contains('visible');
  panel.classList.toggle('visible', opening);
  wrap.classList.toggle('open', opening);
  if (opening) syncTopicsDropdownActive();
}

function closeTopicsDropdown() {
  const wrap = document.getElementById('topicsDropdownWrap');
  const panel = document.getElementById('topicsDropdownPanel');
  panel.classList.remove('visible');
  wrap.classList.remove('open');
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
    if (hintEl) hintEl.style.display = 'block';
    return;
  }
  section.style.display = 'block';
  if (hintEl) hintEl.style.display = 'none';
  listEl.innerHTML = items.map(bm => {
    const accent = getAccent(bm.topicId);
    return `
    <a class="bookmark-item" href="#" onclick="openBookmark('${bm.topicId}','${bm.sectionId}');return false">
      <span class="bmi-icon" style="color:${accent.color}"><svg width="13" height="13" viewBox="0 0 24 24" fill="${accent.color}" stroke="${accent.color}" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg></span>
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
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg>';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleSectionBookmark(topicId, sectionId, title);
    });
    accEl.appendChild(btn);
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
    const accent = (typeof TOPIC_COLORS !== 'undefined' && TOPIC_COLORS[r.topicId]) || { color:'#7c6fe0', glow:'rgba(124,111,224,0.2)' };
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
const IQ_STORAGE_KEY = 'kv_user_interview_questions';
let _iqSearchResults = [];
let _iqSelectedAnswer = null; // { topicId, topicName, sectionId, title, preview }
let _iqAnswerMode = 'search'; // 'search' | 'manual'
let _iqEditingId = null; // id of the user question currently being edited, or null when adding new

function setIQAnswerMode(mode) {
  _iqAnswerMode = mode;
  document.getElementById('iqModeBtnSearch').classList.toggle('active', mode === 'search');
  document.getElementById('iqModeBtnManual').classList.toggle('active', mode === 'manual');
  document.getElementById('iqSearchMode').style.display = mode === 'search' ? 'block' : 'none';
  document.getElementById('iqManualMode').style.display = mode === 'manual' ? 'block' : 'none';
  updateIQAddBtnState();
}

function getUserQuestions() {
  try {
    const raw = localStorage.getItem(IQ_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveUserQuestions(list) {
  try { localStorage.setItem(IQ_STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
}

// Live-search the entire site (reuses the same deep search index as the
// main search bar) as the user types an answer query inside the
// Interview Questions "Add Your Own" panel.
function onIQAnswerSearch() {
  const q = (document.getElementById('iqAnswerSearch').value || '').trim();
  const resultsEl = document.getElementById('iqSearchResults');
  if (!q) { resultsEl.innerHTML = ''; _iqSearchResults = []; return; }

  // Exclude the Interview Questions card itself from its own answer pool
  _iqSearchResults = deepSearch(q).filter(r => r.topicId !== 'interview-questions').slice(0, 12);

  if (!_iqSearchResults.length) {
    resultsEl.innerHTML = `<div class="iq-empty-hint">No matching content found for "${escapeHtml(q)}"</div>`;
    return;
  }

  resultsEl.innerHTML = _iqSearchResults.map((r, i) => `
    <div class="iq-result-item" onclick="selectIQAnswer(${i})">
      <div style="flex:1;min-width:0">
        <div class="iq-result-breadcrumb">${r.topicIcon || '📄'} ${escapeHtml(r.topicName)}${r.sectionId && r.title !== r.topicName ? ' › ' + escapeHtml(r.title) : ''}</div>
        <div class="iq-result-title">${escapeHtml(r.title)}</div>
        ${r.preview ? `<div class="iq-result-preview">${escapeHtml(r.preview.slice(0, 140))}</div>` : ''}
      </div>
    </div>`).join('');
}

function selectIQAnswer(idx) {
  const r = _iqSearchResults[idx];
  if (!r) return;
  _iqSelectedAnswer = {
    topicId: r.topicId,
    topicName: r.topicName,
    topicIcon: r.topicIcon,
    sectionId: r.sectionId,
    title: r.title,
    preview: r.preview
  };

  document.getElementById('iqSearchResults').innerHTML = '';
  document.getElementById('iqAnswerSearch').value = '';

  const box = document.getElementById('iqSelectedAnswer');
  box.style.display = 'block';
  box.className = 'iq-selected-box';
  box.innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
      <div style="min-width:0">
        <div style="font-size:10px;color:#22c55e;font-weight:700;letter-spacing:0.03em;text-transform:uppercase;margin-bottom:3px">✓ Answer selected</div>
        <div style="font-size:12px;color:var(--text3);margin-bottom:2px">${r.topicIcon || '📄'} ${escapeHtml(r.topicName)}</div>
        <div style="font-size:12.5px;font-weight:600;color:var(--text)">${escapeHtml(r.title)}</div>
      </div>
      <button type="button" onclick="clearIQAnswer()" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:16px;line-height:1;padding:2px" title="Remove">&times;</button>
    </div>`;

  updateIQAddBtnState();
}

function clearIQAnswer() {
  _iqSelectedAnswer = null;
  const box = document.getElementById('iqSelectedAnswer');
  box.style.display = 'none';
  box.innerHTML = '';
  updateIQAddBtnState();
}

function updateIQAddBtnState() {
  const q = (document.getElementById('iqQuestionInput').value || '').trim();
  let hasAnswer = false;
  if (_iqAnswerMode === 'manual') {
    const manualText = (document.getElementById('iqManualAnswerInput').value || '').trim();
    hasAnswer = manualText.length > 0;
  } else {
    hasAnswer = !!_iqSelectedAnswer;
  }
  document.getElementById('iqAddBtn').disabled = !(q && hasAnswer);
}

function addUserQuestion() {
  const qInput = document.getElementById('iqQuestionInput');
  const question = qInput.value.trim();
  if (!question) return;

  let answerObj = null;
  if (_iqAnswerMode === 'manual') {
    const manualText = document.getElementById('iqManualAnswerInput').value.trim();
    if (!manualText) return;
    answerObj = { manual: true, text: manualText };
  } else {
    if (!_iqSelectedAnswer) return;
    answerObj = _iqSelectedAnswer;
  }

  const list = getUserQuestions();

  if (_iqEditingId) {
    // Update the existing entry in place, keep its original position & createdAt
    const idx = list.findIndex(q => q.id === _iqEditingId);
    if (idx !== -1) {
      list[idx] = { ...list[idx], question, answer: answerObj, updatedAt: Date.now() };
    }
  } else {
    list.unshift({
      id: 'uq-' + Date.now(),
      question,
      answer: answerObj,
      createdAt: Date.now()
    });
  }

  saveUserQuestions(list);
  resetIQForm();
  renderUserQuestions();
}

// Populate the Add/Edit panel with an existing question so it can be edited,
// then scroll the panel into view.
function editUserQuestion(id, e) {
  if (e) e.stopPropagation();
  const item = getUserQuestions().find(q => q.id === id);
  if (!item) return;

  _iqEditingId = id;

  document.getElementById('iqQuestionInput').value = item.question;
  document.getElementById('iqEditingBanner').style.display = 'flex';
  document.getElementById('iqAddBtn').textContent = '💾 Save Changes';

  if (item.answer && item.answer.manual) {
    setIQAnswerMode('manual');
    document.getElementById('iqManualAnswerInput').value = item.answer.text || '';
  } else {
    setIQAnswerMode('search');
    _iqSelectedAnswer = item.answer;
    document.getElementById('iqAnswerSearch').value = '';
    document.getElementById('iqSearchResults').innerHTML = '';
    const box = document.getElementById('iqSelectedAnswer');
    box.style.display = 'block';
    box.className = 'iq-selected-box';
    box.innerHTML = `
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="min-width:0">
          <div style="font-size:10px;color:#22c55e;font-weight:700;letter-spacing:0.03em;text-transform:uppercase;margin-bottom:3px">✓ Answer selected</div>
          <div style="font-size:12px;color:var(--text3);margin-bottom:2px">${item.answer.topicIcon || '📄'} ${escapeHtml(item.answer.topicName || '')}</div>
          <div style="font-size:12.5px;font-weight:600;color:var(--text)">${escapeHtml(item.answer.title || '')}</div>
        </div>
        <button type="button" onclick="clearIQAnswer()" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:16px;line-height:1;padding:2px" title="Remove">&times;</button>
      </div>`;
  }

  updateIQAddBtnState();

  const panel = document.getElementById('iqAddPanel');
  if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelEditUserQuestion() {
  resetIQForm();
}

// Clears the Add/Edit panel back to its default "add new" state.
function resetIQForm() {
  _iqEditingId = null;
  document.getElementById('iqQuestionInput').value = '';
  document.getElementById('iqManualAnswerInput').value = '';
  document.getElementById('iqAnswerSearch').value = '';
  document.getElementById('iqSearchResults').innerHTML = '';
  document.getElementById('iqEditingBanner').style.display = 'none';
  document.getElementById('iqAddBtn').textContent = '+ Add Question';
  clearIQAnswer();
  setIQAnswerMode('search');
}

function deleteUserQuestion(id, e) {
  if (e) e.stopPropagation();
  const list = getUserQuestions().filter(q => q.id !== id);
  saveUserQuestions(list);
  // If the deleted question was mid-edit, reset the form too
  if (_iqEditingId === id) resetIQForm();
  renderUserQuestions();
}

function renderUserQuestions() {
  const wrap = document.getElementById('userQuestionsList');
  if (!wrap) return;
  const list = getUserQuestions();

  const qInput = document.getElementById('iqQuestionInput');
  if (qInput) qInput.oninput = updateIQAddBtnState;
  const manualInput = document.getElementById('iqManualAnswerInput');
  if (manualInput) manualInput.oninput = updateIQAddBtnState;

  if (!list.length) {
    wrap.innerHTML = '';
    return;
  }

  wrap.innerHTML = `<div class="section-label" style="margin-top:8px">Your Added Questions (${list.length})</div>` +
    list.map(item => {
      const a = item.answer || {};
      const isManual = !!a.manual;
      const badgeLabel = isManual ? 'Your Question · Manual answer' : 'Your Question';
      const bodyText = isManual ? a.text : (a.preview || 'See full answer on the source card →');
      const sourceLink = !isManual && a.topicId
        ? `<div class="iq-user-source" onclick="${a.sectionId
            ? `openBookmark('${a.topicId}', '${a.sectionId.replace(/^acc-/, '')}')`
            : `(function(){const t=TOPICS.find(x=>x.id==='${a.topicId}'); if(t) openFullscreen(t);})()`}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
            Answer from: ${a.topicIcon || '📄'} ${escapeHtml(a.topicName || '')}${a.sectionId ? ' › ' + escapeHtml(a.title || '') : ''}
          </div>`
        : '';

      return `
      <div class="iq-user-card">
        <div class="iq-card-actions">
          <button type="button" class="iq-action-btn" onclick="editUserQuestion('${item.id}', event)" title="Edit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          </button>
          <button type="button" class="iq-action-btn iq-action-btn-danger" onclick="deleteUserQuestion('${item.id}', event)" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
          </button>
        </div>
        <span class="iq-user-badge">${badgeLabel}</span>
        <div class="iq-user-q">${escapeHtml(item.question)}</div>
        <div style="font-size:12.5px;line-height:1.7;color:var(--text2);white-space:pre-wrap">${escapeHtml(bodyText)}</div>
        ${sourceLink}
      </div>`;
    }).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str == null ? '' : str);
  return div.innerHTML;
}

// ─────────────────────────────────────────────
//  GENERIC "ADD YOUR OWN Q&A" — every non-interview card
//  Manual question + manual answer only, no site search.
//  One Q&A list per topic, stored under its own localStorage key.
// ─────────────────────────────────────────────
const CQA_STORAGE_PREFIX = 'kv_custom_qa_';
let _cqaCurrentTopicId = null;
let _cqaEditingId = null;

function renderCustomQAPanel(topic) {
  return `
    <div class="content-area" style="padding-top:2px">
      <div class="section-label" style="margin-top:22px">➕ Add Your Own Question</div>
      <div class="hbox">Type your own question and answer for ${escapeHtml(topic.name)}. Saved locally in this browser.</div>
      <div class="iq-add-panel">
        <div id="cqaEditingBanner" style="display:none;align-items:center;justify-content:space-between;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.3);border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:11.5px;color:#fbbf24;font-weight:600">
          <span>✏️ Editing your question</span>
          <button type="button" onclick="cancelEditCustomQA()" style="background:none;border:none;color:#fbbf24;cursor:pointer;font-size:11.5px;font-weight:700;text-decoration:underline">Cancel</button>
        </div>
        <label class="iq-label">Question</label>
        <input type="text" id="cqaQuestionInput" class="iq-input" placeholder="Type your own question…" autocomplete="off" oninput="updateCQAAddBtnState()"/>
        <label class="iq-label" style="margin-top:12px">Answer</label>
        <textarea id="cqaAnswerInput" class="iq-input iq-textarea" placeholder="Type your own answer…" oninput="updateCQAAddBtnState()"></textarea>
        <button type="button" id="cqaAddBtn" class="iq-add-btn" disabled onclick="addCustomQA()">+ Add Question</button>
      </div>
      <div id="cqaList"></div>
    </div>`;
}

function getCustomQA(topicId) {
  try {
    const raw = localStorage.getItem(CQA_STORAGE_PREFIX + topicId);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveCustomQA(topicId, list) {
  try { localStorage.setItem(CQA_STORAGE_PREFIX + topicId, JSON.stringify(list)); } catch (e) {}
}

function updateCQAAddBtnState() {
  const qEl = document.getElementById('cqaQuestionInput');
  const aEl = document.getElementById('cqaAnswerInput');
  if (!qEl || !aEl) return;
  const q = qEl.value.trim();
  const a = aEl.value.trim();
  document.getElementById('cqaAddBtn').disabled = !(q && a);
}

function addCustomQA() {
  const qInput = document.getElementById('cqaQuestionInput');
  const aInput = document.getElementById('cqaAnswerInput');
  const question = qInput.value.trim();
  const answer = aInput.value.trim();
  if (!question || !answer || !_cqaCurrentTopicId) return;

  const list = getCustomQA(_cqaCurrentTopicId);

  if (_cqaEditingId) {
    const idx = list.findIndex(x => x.id === _cqaEditingId);
    if (idx !== -1) list[idx] = { ...list[idx], question, answer, updatedAt: Date.now() };
  } else {
    list.unshift({ id: 'cqa-' + Date.now(), question, answer, createdAt: Date.now() });
  }

  saveCustomQA(_cqaCurrentTopicId, list);
  resetCQAForm();
  renderCustomQAList(_cqaCurrentTopicId);
}

function editCustomQA(id, e) {
  if (e) e.stopPropagation();
  const item = getCustomQA(_cqaCurrentTopicId).find(x => x.id === id);
  if (!item) return;

  _cqaEditingId = id;
  document.getElementById('cqaQuestionInput').value = item.question;
  document.getElementById('cqaAnswerInput').value = item.answer;
  document.getElementById('cqaEditingBanner').style.display = 'flex';
  document.getElementById('cqaAddBtn').textContent = '💾 Save Changes';
  updateCQAAddBtnState();

  const panel = document.getElementById('cqaQuestionInput');
  if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelEditCustomQA() {
  resetCQAForm();
}

function resetCQAForm() {
  _cqaEditingId = null;
  const qEl = document.getElementById('cqaQuestionInput'); if (qEl) qEl.value = '';
  const aEl = document.getElementById('cqaAnswerInput'); if (aEl) aEl.value = '';
  const banner = document.getElementById('cqaEditingBanner'); if (banner) banner.style.display = 'none';
  const btn = document.getElementById('cqaAddBtn'); if (btn) { btn.textContent = '+ Add Question'; btn.disabled = true; }
}

function deleteCustomQA(id, e) {
  if (e) e.stopPropagation();
  const list = getCustomQA(_cqaCurrentTopicId).filter(x => x.id !== id);
  saveCustomQA(_cqaCurrentTopicId, list);
  if (_cqaEditingId === id) resetCQAForm();
  renderCustomQAList(_cqaCurrentTopicId);
}

function renderCustomQAList(topicId) {
  const wrap = document.getElementById('cqaList');
  if (!wrap) return;
  const list = getCustomQA(topicId);

  if (!list.length) {
    wrap.innerHTML = '';
    return;
  }

  wrap.innerHTML = `<div class="section-label" style="margin-top:8px">Your Added Questions (${list.length})</div>` +
    list.map(item => `
      <div class="iq-user-card">
        <div class="iq-card-actions">
          <button type="button" class="iq-action-btn" onclick="editCustomQA('${item.id}', event)" title="Edit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          </button>
          <button type="button" class="iq-action-btn iq-action-btn-danger" onclick="deleteCustomQA('${item.id}', event)" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
          </button>
        </div>
        <span class="iq-user-badge">Your Question</span>
        <div class="iq-user-q">${escapeHtml(item.question)}</div>
        <div style="font-size:12.5px;line-height:1.7;color:var(--text2);white-space:pre-wrap">${escapeHtml(item.answer)}</div>
      </div>`).join('');
}

// Initial render
renderAll();
renderBookmarks();
syncTopicsDropdownActive();
