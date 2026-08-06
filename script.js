(function () {
  'use strict';

  var STORE = 'mah-theme';
  var pref = localStorage.getItem(STORE) || 'system';

  function paint() {
    var resolved = pref === 'system'
      ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      : pref;
    document.documentElement.setAttribute('data-theme', resolved);

    var opts = document.querySelectorAll('[data-theme-opt]');
    for (var i = 0; i < opts.length; i++) {
      var b = opts[i];
      var on = b.getAttribute('data-theme-opt') === pref;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.style.background = on ? 'var(--accent)' : 'transparent';
      b.style.color = on ? 'var(--accent-ink)' : 'var(--muted)';
    }
  }

  function setPref(p) {
    pref = p;
    localStorage.setItem(STORE, p);
    paint();
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action], [data-theme-opt]');
    if (!el) return;

    var mode = el.getAttribute('data-theme-opt');
    if (mode) { setPref(mode); return; }

    if (el.getAttribute('data-action') === 'copyEmail') {
      var btn = el;
      navigator.clipboard.writeText('emah84@gmail.com').then(function () {
        btn.textContent = 'Copied ✓';
      }, function () {
        window.location.href = 'mailto:emah84@gmail.com';
        btn.textContent = 'Opening…';
      });
      setTimeout(function () { btn.textContent = 'Copy email'; }, 2200);
    }
  });

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
    if (pref === 'system') paint();
  });

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Scroll-spy: highlight the section currently in view
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-nav] a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var active = '';
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) active = en.target.id; });
      links.forEach(function (a) {
        a.setAttribute('aria-current', a.getAttribute('href') === '#' + active ? 'true' : 'false');
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  paint();
})();
