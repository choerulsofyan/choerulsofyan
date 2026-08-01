/* Project thumbnails — real screenshots framed as browser windows (web) or phone bezels (mobile); iconographic placeholder otherwise. */

function BrowserThumb({ src, label }) {
  return (
    <div className="thumb-canvas">
      <span className="work-thumb-label">{label}</span>
      <div className="thumb-browser">
        <div className="thumb-browser-bar"><i/><i/><i/></div>
        <div className="thumb-browser-body"><img src={src} alt=""/></div>
      </div>
    </div>
  );
}

function PhoneThumb({ src, label }) {
  return (
    <div className="thumb-canvas">
      <span className="work-thumb-label">{label}</span>
      <div className="thumb-phone-wrap">
        <div className="thumb-phone">
          <div className="thumb-phone-notch"></div>
          <img src={src} alt=""/>
        </div>
      </div>
    </div>
  );
}

const ThumbGmes = () => (
  <div className="thumb-canvas">
    <span className="work-thumb-label">corporate · catalog</span>
    <div className="thumb-art" style={{inset:'15%'}}>
      <div className="topbar"><i/><i/><i/></div>
      <div className="body">
        <div className="head"><div className="bar w35"></div></div>
        <div className="grid">
          <div className="cell"/><div className="cell"/>
          <div className="cell"/><div className="cell"/>
        </div>
      </div>
    </div>
  </div>
);

window.ProjectGallery = {
  "apindo-jawa-barat": { kind: "browser", images: ["assets/projects/apindo-jawa-barat/hero.png"] },
  "tool-protect": { kind: "phone", images: ["assets/projects/tool-protect/hero.png", "assets/projects/tool-protect/gallery-1.png"] },
  "era-mobile": { kind: "phone", images: ["assets/projects/era-mobile/hero.png", "assets/projects/era-mobile/gallery-1.png"] },
  "era-web-app": { kind: "browser", images: ["assets/projects/era-web-app/hero.png", "assets/projects/era-web-app/gallery-1.png"] },
  "nurul-falah": { kind: "browser", images: ["assets/projects/nurul-falah/hero.png", "assets/projects/nurul-falah/gallery-1.png"] },
};

window.Thumbs = {
  "apindo-jawa-barat": () => <BrowserThumb src="assets/projects/apindo-jawa-barat/hero.png" label="association · website"/>,
  "gmes": ThumbGmes,
  "tool-protect": () => <PhoneThumb src="assets/projects/tool-protect/hero.png" label="mobile · asset mgmt"/>,
  "era-mobile": () => <PhoneThumb src="assets/projects/era-mobile/hero.png" label="mobile · real estate"/>,
  "era-web-app": () => <BrowserThumb src="assets/projects/era-web-app/hero.png" label="web · real estate"/>,
  "nurul-falah": () => <BrowserThumb src="assets/projects/nurul-falah/hero.png" label="school · CMS"/>,
};
