/* Case study slide-in overlay. */

const { useEffect, useRef, useState } = React;

function CaseStudyModal({ slug, lang, onClose, onNavigate, order }) {
  const data = window.CASE_STUDIES[slug]?.[lang];
  const Thumb = window.Thumbs[slug];
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // focus the panel for keyboard nav
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [slug]);

  if (!data) return null;

  const i = order.indexOf(slug);
  const next = order[(i + 1) % order.length];
  const nextData = window.CASE_STUDIES[next]?.[lang];
  const linkLabels = { en: 'Visit live site', id: 'Kunjungi situs live' };
  const playLabels = { en: 'View on Google Play', id: 'Lihat di Google Play' };
  const gallery = window.ProjectGallery?.[slug];
  const [galleryIdx, setGalleryIdx] = useState(0);
  useEffect(() => { setGalleryIdx(0); }, [slug]);
  const galleryLen = gallery?.images?.length || 0;
  const prevSlide = () => setGalleryIdx((v) => (v - 1 + galleryLen) % galleryLen);
  const nextSlide = () => setGalleryIdx((v) => (v + 1) % galleryLen);

  return (
    <div className="cs-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cs-panel" ref={panelRef} tabIndex={-1}>
        <div className="cs-top">
          <span className="label">CASE STUDY · {String(i + 1).padStart(2, '0')} / {String(order.length).padStart(2, '0')}</span>
          <button className="x" onClick={onClose} aria-label="Close case study">
            <window.I.X size={16}/>
          </button>
        </div>

        <div className="cs-content">
          <div className="cs-meta">
            <span className="m"><strong>Client</strong>&nbsp;&nbsp;{data.client} <span style={{opacity:0.6}}>({data.clientNote})</span></span>
            <span className="m"><strong>Role</strong>&nbsp;&nbsp;{data.role}</span>
            <span className="m"><strong>Year</strong>&nbsp;&nbsp;{data.year}</span>
          </div>

          <h2 className="cs-title">{data.title}</h2>
          <p className="cs-hook">{data.hook}</p>

          <div className={`cs-hero-gallery ${gallery?.kind === 'phone' ? 'kind-phone' : ''}`}>
            {!gallery ? (
              <div className="cs-frame-browser"><div className="bar"><i/><i/><i/></div><Thumb/></div>
            ) : gallery.kind === 'phone' ? gallery.images.map((src, gi) => (
              <div className="cs-frame-phone" key={gi}>
                <div className="notch"></div>
                <img src={src} alt={`${data.title} screenshot ${gi + 1}`}/>
              </div>
            )) : galleryLen > 1 ? (
              <div className="cs-carousel">
                <div className="cs-carousel-stage">
                  <button type="button" className="cs-carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous screenshot"><window.I.Arrow size={16} style={{transform:'rotate(180deg)'}}/></button>
                  <div className="cs-frame-browser">
                    <div className="bar"><i/><i/><i/></div>
                    <img src={gallery.images[galleryIdx]} alt={`${data.title} screenshot ${galleryIdx + 1}`}/>
                  </div>
                  <button type="button" className="cs-carousel-nav-btn next" onClick={nextSlide} aria-label="Next screenshot"><window.I.Arrow size={16}/></button>
                </div>
                <div className="cs-carousel-dots">
                  {gallery.images.map((_, gi) => (
                    <span key={gi} className={gi === galleryIdx ? 'active' : ''} onClick={() => setGalleryIdx(gi)}/>
                  ))}
                </div>
              </div>
            ) : (
              <div className="cs-frame-browser"><div className="bar"><i/><i/><i/></div><img src={gallery.images[0]} alt={`${data.title} screenshot`}/></div>
            )}
          </div>

          <div className="cs-block">
            <h3>Overview</h3>
            {data.overview.map((p, i) => <p key={i} className={i === 0 ? 'lead' : ''}>{p}</p>)}
          </div>

          <div className="cs-block">
            <h3>My role</h3>
            <p>{data.myRole}</p>
          </div>

          <div className="cs-block">
            <h3>Approach</h3>
            {data.approach.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="cs-block">
            <h3>Challenges &amp; solutions</h3>
            {data.challenges.map((c, i) => (
              <div className="cs-challenge" key={i}>
                <div className="p">Problem</div>
                <p className="p-text">{c.p}</p>
                <div className="s">Solution</div>
                <p className="s-text">{c.s}</p>
              </div>
            ))}
          </div>

          <div className="cs-block">
            <h3>Outcome &amp; impact</h3>
            <div className="cs-outcome">
              {data.outcome.map((o, i) => (
                o.k === 'Live' && data.link ? (
                  <a href={data.link} target="_blank" rel="noopener" className="o is-link" key={i}>
                    <div className="k">{o.k}</div>
                    <div className="v">{o.v} <window.I.ArrowUR size={12}/></div>
                  </a>
                ) : (
                  <div className="o" key={i}>
                    <div className="k">{o.k}</div>
                    <div className="v">{o.v}</div>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="cs-block">
            <h3>Tech stack</h3>
            <div className="cs-stack-list">
              {data.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
            </div>
          </div>

          {data.nda && (
            <div className="cs-block">
              <div className="cs-nda">⚠ {data.nda}</div>
            </div>
          )}

          <button
            className="cs-next"
            onClick={() => onNavigate(next)}
            style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', textAlign: 'left' }}
          >
            <div>
              <div className="label">Next case study</div>
              <div className="next-title">{nextData.title} <span style={{color: 'var(--text-faint)'}}>— {nextData.client}</span></div>
            </div>
            <span style={{ color: 'var(--accent)' }}><window.I.Arrow size={20}/></span>
          </button>
        </div>
      </div>
    </div>
  );
}

window.CaseStudyModal = CaseStudyModal;
