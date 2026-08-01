/* All-work page — renders every project in CASE_STUDIES as a card grid.
   Reuses the same shell (Nav, Footer, ScrollProgress) and the case-study modal. */

const { useState, useEffect, useRef } = React;
const { useTweaks, TweaksPanel, TweakSection, TweakRadio } = window;

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "accent": "cyan",
  "theme": "dark",
  "lang": "en"
}/*EDITMODE-END*/;

function startYear(y) { const m = String(y).match(/\d{4}/); return m ? m[0] : y; }

// Returns every slug in CASE_STUDIES, optionally with display order
function allProjectSlugs() {
  return Object.keys(window.CASE_STUDIES || {});
}

// Reuse the home page's reveal + scroll-progress + nav.
// We don't re-import — they're already in app.jsx, but app.jsx isn't loaded on
// this page. So we ship slim copies here.

function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    const els = [...document.querySelectorAll('.reveal')];
    els.forEach((el) => el.classList.add('pre'));
    const reveal = (el) => el.classList.remove('pre');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.01 });
    requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
    const t = setTimeout(() => document.querySelectorAll('.reveal.pre').forEach(reveal), 900);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      if (ref.current) ref.current.style.setProperty('--progress', p + '%');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true"/>;
}

function Nav({ lang, setLang, theme, setTheme, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Primary">
      <div className="nav-inner">
        <a href="index.html" className="brand" aria-label="Home">
          <span className="brand-mark">CS</span>
          <span>choerul<span style={{ color: 'var(--text-faint)' }}>.sofyan</span></span>
        </a>
        <div className="nav-links" role="menubar">
          <a className="nav-link active" href="Work.html">{t.nav.work}</a>
          <a className="nav-link" href="index.html#services">{t.nav.services}</a>
          <a className="nav-link" href="index.html#about">{t.nav.about}</a>
          <a className="nav-link" href="index.html#contact">{t.nav.contact}</a>
        </div>
        <div className="nav-tools">
          <button
            className="icon-btn lang-btn"
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            aria-label={`Switch language`}
          >
            <span className={lang === 'en' ? '' : 'off'}>EN</span>
            <span style={{ color: 'var(--text-faint)', margin: '0 4px' }}>/</span>
            <span className={lang === 'id' ? '' : 'off'}>ID</span>
          </button>
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch theme`}
          >
            {theme === 'dark' ? <window.I.Sun size={16}/> : <window.I.Moon size={16}/>}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ t, lang }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-col">
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark">CS</span>
              <span>choerul<span style={{ color: 'var(--text-faint)' }}>.sofyan</span></span>
            </div>
            <p className="footer-tagline" style={{ fontSize: 14, color: 'var(--text-muted)' }}>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h5>{lang === 'en' ? 'Sitemap' : 'Peta situs'}</h5>
            <a href="Work.html">{t.nav.work}</a>
            <a href="index.html#services">{t.nav.services}</a>
            <a href="index.html#about">{t.nav.about}</a>
            <a href="index.html#contact">{t.nav.contact}</a>
          </div>
          <div className="footer-col">
            <h5>{lang === 'en' ? 'Elsewhere' : 'Di tempat lain'}</h5>
            <a href="mailto:choerulsofyanmf@gmail.com">choerulsofyanmf@gmail.com</a>
            <a href="https://linkedin.com/in/choerulsofyan" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/choerulsofyan" target="_blank" rel="noopener">GitHub</a>
            <a href="https://upwork.com" target="_blank" rel="noopener">Upwork</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.colophon}</span>
        </div>
      </div>
    </footer>
  );
}

// ============ APP ============
function WorkApp() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULS);
  const [lang, setLang] = useState(tweaks.lang || 'en');
  const [theme, setTheme] = useState(tweaks.theme || 'dark');
  const [openSlug, setOpenSlug] = useState(null);

  useEffect(() => { setLang(tweaks.lang || 'en'); }, [tweaks.lang]);
  useEffect(() => { setTheme(tweaks.theme || 'dark'); }, [tweaks.theme]);
  const setLangBoth = (v) => { setLang(v); setTweak('lang', v); };
  const setThemeBoth = (v) => { setTheme(v); setTweak('theme', v); };

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { document.documentElement.setAttribute('data-accent', tweaks.accent); }, [tweaks.accent]);

  const t = window.PORTFOLIO_DATA[lang];
  useReveal();

  const slugs = allProjectSlugs();

  return (
    <>
      <ScrollProgress/>
      <Nav lang={lang} setLang={setLangBoth} theme={theme} setTheme={setThemeBoth} t={t}/>

      <main id="main">
        <header className="hero wrap" style={{ paddingBlock: '64px 32px' }}>
          <div className="reveal" style={{ marginBottom: 14 }}>
            <a href="index.html" className="eyebrow" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <window.I.Arrow size={12} style={{ transform: 'rotate(180deg)' }}/>
              {lang === 'en' ? 'Back to home' : 'Kembali ke beranda'}
            </a>
          </div>
          <h1 className="hero-headline reveal" style={{ maxWidth: '20ch' }}>
            {lang === 'en' ? 'All projects.' : 'Semua proyek.'}
          </h1>
          <p className="hero-sub reveal" style={{ marginTop: 24, maxWidth: '60ch' }}>
            {lang === 'en'
              ? `${slugs.length} engagements across SaaS, e-commerce, real estate, and retail. Click a card to read the full case study.`
              : `${slugs.length} engagement di SaaS, e-commerce, real estate, dan retail. Klik kartu untuk membaca studi kasus lengkap.`}
          </p>
        </header>

        <section className="wrap" style={{ paddingBlock: '40px 96px', borderTop: 'none' }}>
          <div className="work-grid">
            {slugs.map((slug, idx) => {
              const cs = window.CASE_STUDIES[slug][lang];
              const Thumb = window.Thumbs[slug];
              return (
                <button
                  type="button"
                  className="work-card reveal"
                  key={slug}
                  onClick={() => setOpenSlug(slug)}
                  aria-label={`Open case study: ${cs.title}`}
                >
                  <div className="work-thumb">
                    <div className="work-thumb-fig">{Thumb ? <Thumb/> : null}</div>
                  </div>
                  <div className="work-body">
                    <div>
                      <div className="work-meta">
                        <span>{startYear(cs.year)}</span>
                        <span className="dot">·</span>
                        <span>{cs.client}</span>
                      </div>
                      <h3 className="work-title">{cs.title}</h3>
                      <p className="work-hook">{cs.hook}</p>
                    </div>
                    <div className="work-tags">
                      {cs.stack.slice(0, 5).map((s) => <span className="tag" key={s}>{s}</span>)}
                    </div>
                    <div className="work-card-foot">
                      <span>{cs.role}</span>
                      <span className="work-card-arrow"><window.I.ArrowUR size={14}/></span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <Footer t={t} lang={lang}/>

      {openSlug && (
        <window.CaseStudyModal
          slug={openSlug}
          lang={lang}
          order={slugs}
          onClose={() => setOpenSlug(null)}
          onNavigate={(s) => setOpenSlug(s)}
        />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Mode"
            value={theme}
            onChange={setThemeBoth}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
            ]}
          />
        </TweakSection>
        <TweakSection label="Language">
          <TweakRadio
            label="Locale"
            value={lang}
            onChange={setLangBoth}
            options={[
              { value: 'en', label: 'English' },
              { value: 'id', label: 'Bahasa' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WorkApp/>);
