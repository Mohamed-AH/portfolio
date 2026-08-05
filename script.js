/* ===========================================================
   Mohamed Abdul Hameed — Portfolio interactions
   =========================================================== */

(function () {
    'use strict';

    /* ---------- Theme toggle (dark default) ---------- */
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'light') {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            themeIcon.className = 'fas fa-sun text-amber-400';
        } else {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
            themeIcon.className = 'fas fa-moon text-slate-300';
        }
    }

    applyTheme(localStorage.getItem('theme') || 'dark');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const next = htmlElement.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            applyTheme(next);
        });
    }

    /* ---------- Mobile menu ---------- */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileNavLinks.forEach((link) => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    /* ---------- Copy email to clipboard ---------- */
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const copyBtnText = document.getElementById('copyBtnText');
    const EMAIL = 'emah84@gmail.com';

    if (copyEmailBtn && copyBtnText) {
        copyEmailBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(EMAIL);
                copyBtnText.innerText = 'Copied: ' + EMAIL;
            } catch (err) {
                window.location.href = 'mailto:' + EMAIL;
                copyBtnText.innerText = 'Opening email…';
            }
            setTimeout(() => { copyBtnText.innerText = 'Copy Email'; }, 2500);
        });
    }

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
