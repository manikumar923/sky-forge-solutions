/* ---------- B.Tech projects page ---------- */
(function () {
  const data = window.SKYFORGE_PROJECTS;
  const grid = document.getElementById('project-grid');
  if (!data || !grid) return;

  const WA = 'https://wa.me/918885599388?text=';
  const tabsEl = document.getElementById('branch-tabs');
  const title = document.getElementById('branch-title');
  const blurb = document.getElementById('branch-blurb');
  const count = document.getElementById('project-count');
  const empty = document.getElementById('project-empty');
  const search = document.getElementById('project-search');
  const keys = Object.keys(data);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let branch = 'all';

  const total = keys.reduce((n, k) => n + data[k].items.length, 0);
  const tabs = [['all', 'All', total]].concat(keys.map((k) => [k, data[k].short, data[k].items.length]));
  tabsEl.innerHTML = tabs.map(([k, label, n]) =>
    '<button type="button" role="tab" class="branch-tab" data-branch="' + k + '" aria-selected="false">' + esc(label) + ' <span>' + n + '</span></button>').join('');

  function card(p, k) {
    const msg = 'Hi Sky Forge Solutions, I am a B.Tech final-year ' + data[k].short + ' student. I am interested in the major project "' + p.t + '". Please share the details.';
    return '<article class="project-card">' +
      '<div class="project-meta"><span class="branch-pill">' + esc(data[k].short) + '</span><span class="card-tag">' + esc(p.a.toUpperCase()) + '</span></div>' +
      '<h3>' + esc(p.t) + '</h3><p>' + esc(p.d) + '</p>' +
      '<ul class="tech-list">' + p.k.map((x) => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
      '<a class="project-enquire" target="_blank" rel="noopener" href="' + WA + encodeURIComponent(msg) + '">Enquire about this project →</a>' +
      '</article>';
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = branch === 'all' ? keys : [branch];
    let html = '';
    let shown = 0;
    list.forEach((k) => {
      data[k].items.forEach((p) => {
        const hay = (p.t + ' ' + p.a + ' ' + p.d + ' ' + p.k.join(' ') + ' ' + data[k].short).toLowerCase();
        if (q && !hay.includes(q)) return;
        html += card(p, k);
        shown += 1;
      });
    });
    grid.innerHTML = html;
    empty.hidden = shown > 0;
    title.textContent = branch === 'all' ? 'All branches' : data[branch].name;
    blurb.textContent = branch === 'all' ? 'Major project ideas for CSE, ECE, EEE, Civil and Mechanical students.' : data[branch].blurb;
    count.textContent = shown + (shown === 1 ? ' project' : ' projects') + (q ? ' matching “' + search.value.trim() + '”' : '');
    tabsEl.querySelectorAll('.branch-tab').forEach((b) => {
      const on = b.dataset.branch === branch;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', String(on));
    });
  }

  function fromHash() {
    const h = (location.hash || '').replace('#', '').toLowerCase();
    branch = keys.includes(h) ? h : 'all';
    render();
  }

  tabsEl.addEventListener('click', (e) => {
    const b = e.target.closest('.branch-tab');
    if (!b) return;
    branch = b.dataset.branch;
    history.replaceState(null, '', branch === 'all' ? location.pathname : '#' + branch);
    render();
  });
  search.addEventListener('input', render);
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
