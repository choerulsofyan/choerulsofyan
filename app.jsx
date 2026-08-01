/* Choerul Sofyan portfolio — main app */

const { useState, useEffect, useRef, useCallback, useMemo } = React;
const { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, TweakButton } = window;

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "accent": "cyan",
  "theme": "dark",
  "lang": "en",
  "compactNav": false
}/*EDITMODE-END*/;

// ============ scroll progress + cursor halo ============
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
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true"/>;
}

function CursorHalo() { return null; /* removed per user feedback */ }

// ============ scroll reveal ============
function useReveal() {
  useEffect(() => {
    // Default: everything is visible. Optionally stage the reveal animation
    // by adding `.pre` then removing as they intersect. Skipped if reduced
    // motion is on or if IntersectionObserver isn't available.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const els = [...document.querySelectorAll('.reveal')];
    els.forEach((el) => el.classList.add('pre'));

    // Tiny rAF so the class apply commits before we start removing.
    const reveal = (el) => el.classList.remove('pre');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.01 });

    requestAnimationFrame(() => els.forEach((el) => io.observe(el)));

    // Safety net: if IO is throttled (e.g. some preview environments),
    // force-reveal anything that's still .pre after a beat.
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal.pre').forEach(reveal);
    }, 900);

    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

// ============ scroll spy ============
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= fromTop) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join('|')]);
  return active;
}

// ============ NAV ============
function Nav({ lang, setLang, theme, setTheme, t, active }) {
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
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand-mark">CS</span>
          <span>choerul<span style={{ color: 'var(--text-faint)' }}>.sofyan</span></span>
        </a>

        <div className="nav-links" role="menubar">
          <a className={`nav-link ${active === 'work' ? 'active' : ''}`} href="#work">{t.nav.work}</a>
          <a className={`nav-link ${active === 'services' ? 'active' : ''}`} href="#services">{t.nav.services}</a>
          <a className={`nav-link ${active === 'about' ? 'active' : ''}`} href="#about">{t.nav.about}</a>
          <a className={`nav-link ${active === 'contact' ? 'active' : ''}`} href="#contact">{t.nav.contact}</a>
        </div>

        <div className="nav-tools">
          <button
            className="icon-btn lang-btn"
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            aria-label={`Switch language to ${lang === 'en' ? 'Indonesian' : 'English'}`}
            title="Toggle language"
          >
            <span className={lang === 'en' ? '' : 'off'}>EN</span>
            <span style={{ color: 'var(--text-faint)', margin: '0 4px' }}>/</span>
            <span className={lang === 'id' ? '' : 'off'}>ID</span>
          </button>
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch theme to ${theme === 'dark' ? 'light' : 'dark'}`}
            title="Toggle theme"
          >
            {theme === 'dark' ? <window.I.Sun size={16}/> : <window.I.Moon size={16}/>}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============ HERO ============
function StatNumber({ k }) {
  // Extract leading numeric portion (e.g. "10y" → 10, "4" → 4). Animate it.
  const m = String(k).match(/^(\d+)([^\d]*)$/);
  const target = m ? parseInt(m[1], 10) : null;
  const suffix = m ? m[2] : '';
  const ref = useRef(null);
  const [val, setVal] = useState(target ?? k);

  useEffect(() => {
    if (target == null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(target); return; }
    setVal(0);
    let raf, start;
    const dur = 720;
    const tick = (t) => {
      if (start == null) start = t;
      const p = Math.min(1, (t - start) / dur);
      // easeOutQuad
      const eased = 1 - (1 - p) * (1 - p);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    // small delay so it lines up with hero cascade
    const to = setTimeout(() => { raf = requestAnimationFrame(tick); }, 500);
    return () => { cancelAnimationFrame(raf); clearTimeout(to); };
  }, [target]);

  if (target == null) return <>{k}</>;
  return <>{val}{suffix}</>;
}

function Hero({ t }) {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-status reveal">
        <span className="dot"/>
        <span>{t.hero.eyebrow}</span>
      </div>

      <p className="hero-name reveal">{t.hero.name} <span style={{opacity:0.5}}>/</span> {t.hero.role}</p>

      <h1 className="hero-headline reveal">
        {t.hero.tagline.split('—').map((part, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1
              ? <em>{part.trim()}</em>
              : part.trim()}
            {i < arr.length - 1 && <>&nbsp;— </>}
          </React.Fragment>
        ))}
      </h1>

      <p className="hero-tagline reveal" style={{ display: 'none' }}>{t.hero.tagline}</p>
      <p className="hero-sub reveal">{t.hero.sub}</p>

      <div className="hero-ctas reveal">
        <a href="#contact" className="btn btn-primary">
          {t.hero.ctaPrimary} <span className="arrow"><window.I.Arrow size={14}/></span>
        </a>
        <a href="#work" className="btn">
          {t.hero.ctaSecondary} <span className="arrow"><window.I.Arrow size={14}/></span>
        </a>
      </div>

      <div className="hero-stats reveal">
        {t.hero.stats.map((s, i) => (
          <div className="hero-stat" key={i}>
            <div className="k"><StatNumber k={s.k}/></div>
            <div className="v">{s.v}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

function startYear(y) { const m = String(y).match(/\d{4}/); return m ? m[0] : y; }

// ============ WORK ============
const WORK_ORDER = ['apindo-jawa-barat', 'era-mobile', 'nurul-falah'];

function Work({ t, lang, onOpen }) {
  return (
    <section id="work" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">{t.sections.workEyebrow}</span>
        <h2>{t.sections.workTitle}</h2>
        <p>{t.sections.workSub}</p>
      </div>

      <div className="work-grid">
        {WORK_ORDER.map((slug, idx) => {
          const cs = window.CASE_STUDIES[slug][lang];
          const Thumb = window.Thumbs[slug];
          return (
            <button
              type="button"
              className="work-card reveal"
              key={slug}
              onClick={() => onOpen(slug)}
              aria-label={`Open case study: ${cs.title}`}
            >
              <div className="work-thumb">
                <div className="work-thumb-fig">
                  <Thumb/>
                </div>
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

      <div className="work-foot reveal">
        <a href="Work.html" className="work-foot-link">
          {lang === 'en' ? 'See all work' : 'Lihat semua karya'}
          <window.I.Arrow size={14}/>
        </a>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services({ t, onOpen }) {
  return (
    <section id="services" className="wrap">
      <div className="section-head reveal">
        <span className="eyebrow">{t.sections.servicesEyebrow}</span>
        <h2>{t.sections.servicesTitle}</h2>
        <p>{t.sections.servicesSub}</p>
      </div>

      <div className="services reveal">
        {t.services.map((s, i) => (
          <div className="service" key={i}>
            <span className="num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <button className="lk" onClick={() => onOpen(s.link)}>
              See related case study <window.I.Arrow size={12}/>
            </button>
            <p className="ideal"><strong>Ideal for:</strong> {s.ideal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ STACK ============
function Stack({ t }) {
  return (
    <section className="wrap" id="stack">
      <div className="section-head reveal">
        <span className="eyebrow">{t.sections.stackEyebrow}</span>
        <h2>{t.sections.stackTitle}</h2>
        <p>{t.sections.stackSub}</p>
      </div>

      <div className="stack-grid reveal">
        {t.stack.map((g, i) => (
          <div className="stack-group" key={i}>
            <h4>{g.group}</h4>
            <div className="stack-items">
              {g.items.map((it) => <span className="stack-item" key={it}>{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ ABOUT (preview) ============
function About({ t }) {
  return (
    <section className="wrap" id="about">
      <div className="about-preview">
        <div className="about-photo reveal">
          <span className="bracket tl" aria-hidden="true"/>
          <span className="bracket br" aria-hidden="true"/>
          <img src="assets/headshot.png" alt="Choerul Sofyan portrait" loading="lazy"/>
          <div className="ph-meta">choerul.sofyan · bandung</div>
        </div>
        <div className="reveal">
          <span className="eyebrow">{t.aboutPreview.eyebrow}</span>
          <h2 className="about-headline">{t.aboutPreview.title}</h2>
          {t.aboutPreview.paragraphs.map((p, i) => <p key={i} className="about-para">{p}</p>)}
          <a href="cv.pdf" className="about-link" download>
            <window.I.Download size={14}/>
            {t.aboutPreview.readMore} · CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS ============
function Process({ t }) {
  return (
    <section className="wrap" id="process">
      <div className="section-head reveal">
        <span className="eyebrow">{t.sections.processEyebrow}</span>
        <h2>{t.sections.processTitle}</h2>
      </div>
      <div className="process-list">
        {t.process.map((p, i) => (
          <div className="proc reveal" key={i}>
            <span className="n">{p.n}</span>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ CONTACT ============
function Contact({ t }) {
  const [form, setForm] = useState({
    name: '', email: '', company: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | sent

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = '↳ required';
    if (!data.email.trim()) e.email = '↳ required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = '↳ doesn\'t look like an email';
    if (!data.message.trim()) e.message = '↳ required';
    else if (data.message.trim().length < 12) e.message = '↳ a little more detail, please';
    return e;
  };

  const onChange = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate(form);
    if (Object.keys(er).length) { setErrors(er); return; }
    setState('sending');
    setTimeout(() => {
      setState('sent');
    }, 900);
  };

  return (
    <section className="wrap" id="contact">
      <div className="section-head reveal">
        <span className="eyebrow">{t.sections.contactEyebrow}</span>
        <h2>{t.sections.contactTitle}</h2>
        <p>{t.sections.contactSub}</p>
      </div>

      <div className="contact-wrap">
        <div className="contact-side reveal">
          <div className="response">{t.contact.response}</div>

          <div className="contact-direct">
            <span className="label">{t.contact.altLabel}</span>
            <a href="mailto:choerulsofyanmf@gmail.com">
              <window.I.Mail size={14}/> choerulsofyanmf@gmail.com
            </a>
            <a href="https://linkedin.com/in/choerulsofyan" target="_blank" rel="noopener">
              <window.I.Linkedin size={14}/> linkedin.com/in/choerulsofyan
            </a>
            <a href="https://github.com/choerulsofyan" target="_blank" rel="noopener">
              <window.I.Github size={14}/> github.com/choerulsofyan
            </a>
            <a href="https://upwork.com" target="_blank" rel="noopener">
              <window.I.Briefcase size={14}/> upwork profile
            </a>
          </div>
        </div>

        <form className="form-card reveal" onSubmit={onSubmit} noValidate>
          <div className="form-row split">
            <div>
              <label className="form-label" htmlFor="f-name">{t.contact.nameLabel} <span className="req">*</span> {errors.name && <span className="form-error">{errors.name}</span>}</label>
              <input id="f-name" type="text" value={form.name} onChange={onChange('name')} autoComplete="name" required/>
            </div>
            <div>
              <label className="form-label" htmlFor="f-email">{t.contact.emailLabel} <span className="req">*</span> {errors.email && <span className="form-error">{errors.email}</span>}</label>
              <input id="f-email" type="email" value={form.email} onChange={onChange('email')} autoComplete="email" required/>
            </div>
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="f-company">
              {t.contact.companyLabel} <span className="hint">{t.contact.companyHint}</span>
            </label>
            <input id="f-company" type="text" value={form.company} onChange={onChange('company')} autoComplete="organization"/>
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="f-msg">
              {t.contact.messageLabel} <span className="req">*</span>
              <span className="hint">{t.contact.messageHint}</span>
              {errors.message && <span className="form-error">{errors.message}</span>}
            </label>
            <textarea id="f-msg" rows={6} value={form.message} onChange={onChange('message')} required/>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-primary" disabled={state !== 'idle'}>
              {state === 'sending' ? t.contact.sending : state === 'sent' ? '✓ ' + t.contact.success : t.contact.submit}
              {state === 'idle' && <span className="arrow"><window.I.Arrow size={14}/></span>}
            </button>
          </div>

          {state === 'sent' && (
            <div className="form-success">✓ {t.contact.success}</div>
          )}
        </form>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA({ t, lang }) {
  const headline = lang === 'en'
    ? <>Got an idea? <em>Let&apos;s build it.</em></>
    : <>Punya ide? <em>Mari bangun.</em></>;
  const sub = lang === 'en'
    ? 'Tell me about it. I read every inquiry myself.'
    : 'Ceritakan. Saya baca setiap pertanyaan sendiri.';
  return (
    <section className="final-cta wrap reveal" id="final-cta">
      <h2>{headline}</h2>
      <p>{sub}</p>
      <a href="#contact" className="btn btn-primary">
        {t.hero.ctaPrimary} <span className="arrow"><window.I.Arrow size={14}/></span>
      </a>
    </section>
  );
}

// ============ FOOTER ============
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
            <a href="#work">{t.nav.work}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
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

// ============ TWEAKS PANEL ============
const ACCENT_SWATCHES = [
  { key: 'cyan',   preview: 'oklch(0.82 0.12 210)' },
  { key: 'lime',   preview: 'oklch(0.84 0.16 130)' },
];

function AccentPicker({ value, onChange }) {
  return (
    <div className="twk-row" style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'stretch' }}>
      <div className="twk-lbl" style={{ marginBottom: 4 }}><span>Accent</span></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {ACCENT_SWATCHES.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => onChange(s.key)}
            aria-label={s.key}
            title={s.key}
            style={{
              height: 32,
              borderRadius: 8,
              border: value === s.key ? '2px solid #fff' : '1px solid rgba(255,255,255,0.18)',
              outline: value === s.key ? '1px solid ' + s.preview : 'none',
              outlineOffset: 1,
              background: s.preview,
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MyTweaks({ tweaks, setTweak, lang, setLang, theme, setTheme }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme">
        <TweakRadio
          label="Mode"
          value={theme}
          onChange={(v) => setTheme(v)}
          options={[
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' },
          ]}
        />
        <AccentPicker value={tweaks.accent} onChange={(v) => setTweak('accent', v)} />
      </TweakSection>

      <TweakSection label="Language">
        <TweakRadio
          label="Locale"
          value={lang}
          onChange={(v) => setLang(v)}
          options={[
            { value: 'en', label: 'English' },
            { value: 'id', label: 'Bahasa' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// ============ APP ============
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULS);
  const [lang, setLang] = useState(tweaks.lang || 'en');
  const [theme, setTheme] = useState(tweaks.theme || 'dark');
  const [openSlug, setOpenSlug] = useState(null);

  // sync tweak panel changes back into state
  useEffect(() => { setLang(tweaks.lang || 'en'); }, [tweaks.lang]);
  useEffect(() => { setTheme(tweaks.theme || 'dark'); }, [tweaks.theme]);

  // when local state changes (from header toggles), push to tweak store too
  const setLangBoth = (v) => { setLang(v); setTweak('lang', v); };
  const setThemeBoth = (v) => { setTheme(v); setTweak('theme', v); };

  // apply attributes on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', tweaks.accent);
  }, [tweaks.accent]);

  const t = window.PORTFOLIO_DATA[lang];
  const active = useScrollSpy(['top', 'work', 'services', 'about', 'contact']);
  useReveal();

  return (
    <>
      <ScrollProgress/>
      <a href="#main" className="kbd" style={{ position: 'absolute', left: -9999, top: 'auto' }}>Skip to content</a>
      <Nav lang={lang} setLang={setLangBoth} theme={theme} setTheme={setThemeBoth} t={t} active={active}/>
      <main id="main">
        <Hero t={t}/>
        <Work t={t} lang={lang} onOpen={setOpenSlug}/>
        <Services t={t} onOpen={setOpenSlug}/>
        <About t={t}/>
        <Process t={t}/>
        <Stack t={t}/>
        <Contact t={t} lang={lang}/>
      </main>
      <Footer t={t} lang={lang}/>

      {openSlug && (
        <window.CaseStudyModal
          slug={openSlug}
          lang={lang}
          order={WORK_ORDER}
          onClose={() => setOpenSlug(null)}
          onNavigate={(slug) => setOpenSlug(slug)}
        />
      )}

      <MyTweaks
        tweaks={tweaks}
        setTweak={setTweak}
        lang={lang}
        setLang={setLangBoth}
        theme={theme}
        setTheme={setThemeBoth}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
