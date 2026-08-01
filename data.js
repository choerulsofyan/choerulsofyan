// Bilingual content + case study data
window.PORTFOLIO_DATA = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Available for select freelance engagements",
      name: "Choerul Sofyan",
      role: "Freelance fullstack engineer",
      tagline: "I take on the engineering work that's too big to leave broken, products with users, codebases with history, and the messy middle in between.",
      sub: "A decade of shipped software · Remote collaboration with teams in Singapore and Australia · Bandung, GMT+7.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See my work",
      stats: [
        { k: "10y", v: "Writing software that ships" },
        { k: "5", v: "Projects shipped across web & mobile" },
        { k: "3", v: "Freelance & agency engagements" }
      ]
    },
    sections: {
      workEyebrow: "Selected work",
      workTitle: "Three projects, three different contexts.",
      workSub: "A from-scratch build for an industry association, and ongoing change-request work for one of Indonesia's largest real estate brands.",
      servicesEyebrow: "What I do",
      servicesTitle: "Three ways I plug into a team.",
      servicesSub: "Long enough engagements to actually move the needle. Short enough to stay sharp.",
      stackEyebrow: "Toolbelt",
      stackTitle: "The stack I reach for.",
      stackSub: "Real working depth, not a Wikipedia list. If it's not here, I'll tell you.",
      processEyebrow: "How I work",
      processTitle: "A predictable rhythm, even when the work isn't.",
      contactEyebrow: "Let's talk",
      contactTitle: "Got a project in mind?",
      contactSub: "Tell me about the scope, the stack, the deadline. I usually reply within 24–48 hours."
    },
    services: [
      {
        n: "01",
        title: "Web App Development",
        desc: "Websites and internal systems built from scratch — PHP/Laravel backends, MySQL, membership systems, and the integrations (maps, chat, payments) an organization actually needs.",
        ideal: "Organizations needing a working site, not a template.",
        link: "apindo-jawa-barat"
      },
      {
        n: "02",
        title: "Change Requests & Maintenance",
        desc: "Working inside a live, existing codebase — change requests and bugfixes that ship without breaking what's already in production.",
        ideal: "Teams with a live product who need reliable ongoing changes, not a rebuild.",
        link: "era-web-app"
      },
      {
        n: "03",
        title: "Mobile / Hybrid App Development",
        desc: "Feature work on hybrid mobile apps (Cordova, React, Vue) already shipped to Google Play and the App Store.",
        ideal: "Products already live on mobile that need a steady hand.",
        link: "tool-protect"
      }
    ],
    stack: [
      { group: "Frontend", items: ["React.js", "Redux", "TypeScript", "JavaScript ES6+", "Vue.js", "jQuery", "Tailwind CSS", "Bootstrap"] },
      { group: "Backend", items: ["PHP", "Laravel", "Livewire", "CodeIgniter", "Node.js"] },
      { group: "Database", items: ["MySQL"] },
      { group: "Mobile / Hybrid", items: ["Apache Cordova"] },
      { group: "Tools", items: ["Git", "Figma", "Docker", "Linux", "VS Code"] },
      { group: "Practices", items: ["Agile / Scrum", "API integration", "Legacy migration", "Code review"] }
    ],
    process: [
      { n: "01", title: "Discovery call", body: "30 minutes. We talk through the scope, the constraints, and what success looks like. No deck, no pitch." },
      { n: "02", title: "Proposal & timeline", body: "Written scope, milestones, and a fixed price or weekly rate. You sign off before I touch a keyboard." },
      { n: "03", title: "Build & iterate", body: "Short feedback loops — usually a Friday demo. You see progress every week, not just at the end." },
      { n: "04", title: "Handoff & support", body: "Documented code, a recorded walkthrough, and a 30-day window for fixes. Then you own it — or I stay on retainer." }
    ],
    contact: {
      nameLabel: "Name",
      emailLabel: "Email",
      companyLabel: "Company",
      companyHint: "Optional",
      typeLabel: "Project type",
      typeOptions: ["Web app", "E-commerce", "Legacy migration", "UI refactor", "Other"],
      budgetLabel: "Budget range",
      budgetHint: "Optional, but helpful",
      budgetOptions: ["Less than $5K", "$5K – $15K", "$15K – $30K", "$30K+", "Not sure yet"],
      timelineLabel: "Timeline",
      timelineOptions: ["ASAP", "1 – 3 months", "3 – 6 months", "Flexible"],
      messageLabel: "Tell me about the project",
      messageHint: "What are you building? What's stuck? What does done look like?",
      submit: "Send inquiry",
      sending: "Sending…",
      success: "Got it. I'll reply within 24–48 hours.",
      altLabel: "Or reach me directly:",
      response: "Replies within 24–48 hours · GMT+7"
    },
    footer: {
      tagline: "Designed and built by Choerul. Made with care in Bandung, Indonesia.",
      colophon: "Built with React, Tailwind & Framer Motion. View source on GitHub.",
      copyright: `© ${new Date().getFullYear()} Choerul Sofyan. All rights reserved.`
    },
    aboutPreview: {
      eyebrow: "About",
      title: "I started as IT Support, fixing point-of-sale terminals in retail shops. Ten years later I take on the rewrites that have to happen without anyone noticing.",
      paragraphs: [
        "I've been writing software for a living since 2016, after two years in field IT taught me that most bugs are people problems first and technical problems second. The decade since has been a slow lesson in the rest: debugging under pressure, architecting for a team that doesn't exist yet, and doing both at the same time when a working system has to keep working through its own rewrite.",
        "Most of that decade has been remote, with engineering teams in Singapore and Australia, agencies running multi-timezone projects, and Indonesian founders who needed someone they could rely on. I work best with people who know what they want but need a senior pair of hands to actually ship it. Direct communication, weekly demos, no surprises in the invoice."
      ],
      readMore: "Read full background"
    }
  },
  id: {
    nav: { work: "Karya", services: "Layanan", about: "Tentang", contact: "Kontak" },
    hero: {
      eyebrow: "Tersedia untuk proyek freelance terpilih",
      name: "Choerul Sofyan",
      role: "Fullstack engineer freelance",
      tagline: "Saya mengambil pekerjaan engineering yang terlalu besar untuk dibiarkan rusak — produk yang sudah punya user, codebase yang sudah punya sejarah, dan kekacauan di antara keduanya.",
      sub: "Satu dekade software yang dikirim · Kolaborasi remote dengan tim di Singapura dan Australia · Bandung, GMT+7.",
      ctaPrimary: "Mulai proyek",
      ctaSecondary: "Lihat karya saya",
      stats: [
        { k: "10thn", v: "Menulis software yang dikirim" },
        { k: "4", v: "Industri yang pernah dikerjakan" },
        { k: "1", v: "Migrasi JSP → React, end-to-end" }
      ]
    },
    sections: {
      workEyebrow: "Karya terpilih",
      workTitle: "Tiga proyek, tiga konteks berbeda.",
      workSub: "Build dari nol untuk asosiasi industri, dan pekerjaan change-request berkelanjutan untuk salah satu brand real estate terbesar di Indonesia.",
      servicesEyebrow: "Yang saya kerjakan",
      servicesTitle: "Tiga cara saya masuk ke tim Anda.",
      servicesSub: "Cukup panjang untuk benar-benar bergerak. Cukup pendek untuk tetap tajam.",
      stackEyebrow: "Toolbelt",
      stackTitle: "Stack yang saya pakai.",
      stackSub: "Pengalaman beneran, bukan daftar Wikipedia. Kalau tidak ada di sini, saya akan bilang.",
      processEyebrow: "Cara kerja saya",
      processTitle: "Ritme yang bisa diprediksi, meski pekerjaannya tidak.",
      contactEyebrow: "Mari bicara",
      contactTitle: "Punya proyek?",
      contactSub: "Ceritakan lingkup, stack, dan deadline. Biasanya saya balas dalam 24–48 jam."
    },
    services: [
      {
        n: "01",
        title: "Pengembangan Web App",
        desc: "Website dan internal system dibangun dari nol — backend PHP/Laravel, MySQL, sistem membership, dan integrasi (maps, chat, pembayaran) yang benar-benar dibutuhkan organisasi.",
        ideal: "Organisasi yang butuh situs yang berfungsi, bukan template.",
        link: "apindo-jawa-barat"
      },
      {
        n: "02",
        title: "Change Request & Maintenance",
        desc: "Bekerja di dalam codebase yang sudah live — change request dan bugfix yang di-ship tanpa merusak yang sudah ada di produksi.",
        ideal: "Tim dengan produk live yang butuh perubahan reliable, bukan rebuild.",
        link: "era-web-app"
      },
      {
        n: "03",
        title: "Pengembangan Mobile / Hybrid App",
        desc: "Pengerjaan fitur di aplikasi mobile hybrid (Cordova, React, Vue) yang sudah live di Google Play dan App Store.",
        ideal: "Produk yang sudah live di mobile dan butuh tangan yang stabil.",
        link: "tool-protect"
      }
    ],
    stack: [
      { group: "Frontend", items: ["React.js", "Redux", "TypeScript", "JavaScript ES6+", "Vue.js", "jQuery", "Tailwind CSS", "Bootstrap"] },
      { group: "Backend", items: ["PHP", "Laravel", "Livewire", "CodeIgniter", "Node.js"] },
      { group: "Database", items: ["MySQL"] },
      { group: "Mobile / Hybrid", items: ["Apache Cordova"] },
      { group: "Tools", items: ["Git", "Figma", "Docker", "Linux", "VS Code"] },
      { group: "Praktik", items: ["Agile / Scrum", "Integrasi API", "Migrasi legacy", "Code review"] }
    ],
    process: [
      { n: "01", title: "Discovery call", body: "30 menit. Kita bahas scope, kendala, dan seperti apa kesuksesan. Tanpa deck, tanpa pitch." },
      { n: "02", title: "Proposal & timeline", body: "Scope tertulis, milestone, harga tetap atau rate mingguan. Anda setuju sebelum saya menyentuh keyboard." },
      { n: "03", title: "Build & iterate", body: "Loop umpan balik pendek — biasanya demo Jumat. Anda melihat progres setiap minggu, bukan hanya di akhir." },
      { n: "04", title: "Handoff & support", body: "Kode terdokumentasi, walkthrough video, dan jendela 30 hari untuk perbaikan. Selanjutnya milik Anda — atau saya tetap di retainer." }
    ],
    contact: {
      nameLabel: "Nama",
      emailLabel: "Email",
      companyLabel: "Perusahaan",
      companyHint: "Opsional",
      typeLabel: "Jenis proyek",
      typeOptions: ["Web app", "E-commerce", "Migrasi legacy", "UI refactor", "Lainnya"],
      budgetLabel: "Range budget",
      budgetHint: "Opsional, tapi membantu",
      budgetOptions: ["Di bawah $5K", "$5K – $15K", "$15K – $30K", "$30K+", "Belum yakin"],
      timelineLabel: "Timeline",
      timelineOptions: ["Segera", "1 – 3 bulan", "3 – 6 bulan", "Fleksibel"],
      messageLabel: "Ceritakan tentang proyeknya",
      messageHint: "Apa yang sedang dibangun? Apa yang stuck? Seperti apa selesainya?",
      submit: "Kirim",
      sending: "Mengirim…",
      success: "Diterima. Saya balas dalam 24–48 jam.",
      altLabel: "Atau hubungi langsung:",
      response: "Balas dalam 24–48 jam · GMT+7"
    },
    footer: {
      tagline: "Didesain dan dibangun oleh Choerul. Dibuat dengan teliti di Bandung, Indonesia.",
      colophon: "Dibangun dengan React, Tailwind & Framer Motion. Lihat source di GitHub.",
      copyright: `© ${new Date().getFullYear()} Choerul Sofyan. Hak cipta dilindungi.`
    },
    aboutPreview: {
      eyebrow: "Tentang",
      title: "Saya mulai sebagai IT Support, memperbaiki mesin point-of-sale di toko ritel. Sepuluh tahun kemudian saya mengambil rewrite yang harus terjadi tanpa ada yang menyadari.",
      paragraphs: [
        "Saya menulis software untuk hidup sejak 2016, setelah dua tahun di lapangan IT mengajarkan bahwa sebagian besar bug adalah masalah orang dulu, masalah teknis kemudian. Satu dekade setelahnya adalah pelajaran panjang tentang sisanya: debug di bawah tekanan, mengarsiteki untuk tim yang belum ada, dan melakukan keduanya sekaligus saat sistem yang sudah jalan harus tetap jalan selama proses rewrite-nya sendiri.",
        "Sebagian besar dekade itu dijalankan remote — dengan tim engineering di Singapura dan Australia, agency yang menjalankan proyek lintas zona waktu, dan founder Indonesia yang butuh seseorang yang bisa mereka andalkan. Saya bekerja paling baik dengan orang-orang yang tahu apa yang mereka inginkan tapi butuh sepasang tangan senior untuk benar-benar mengirimnya. Komunikasi langsung, demo mingguan, tanpa kejutan di invoice."
      ],
      readMore: "Baca latar belakang lengkap"
    }
  }
};

window.CASE_STUDIES = {
  "apindo-jawa-barat": {
    en: {
      slug: "apindo-jawa-barat",
      title: "Association website build",
      client: "DPP APINDO Jawa Barat",
      clientNote: "Indonesia",
      role: "Freelance Developer",
      year: "Jan 2025 \u2013 Mar 2025",
      stack: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript"],
      link: "https://apindojabar.or.id/",
      hook: "Built the official website for West Java's regional employers' association \u2014 news, membership, and event coverage in one platform.",
      overview: [
        "DPP APINDO Jawa Barat is the West Java regional board of Indonesia's national employers' association. They needed a working site to run member communications and registration, not just a brochure page.",
        "Contracted as a freelance developer to build the site end-to-end: news and event coverage, an online membership registration system with document uploads, and a gallery of organizational activities."
      ],
      myRole: "Sole freelance developer \u2014 scoped, built, and deployed the site on a Laravel/Blade stack.",
      approach: [
        "Built on Laravel with Blade templates and MySQL, matching a stack the org's future maintainers would recognize.",
        "Wired in the integrations the board actually uses day to day: WhatsApp click-to-chat, Google Maps for the office location, YouTube embeds for event coverage.",
        "Kept the membership registration flow simple \u2014 document upload, admin review, login portal \u2014 rather than over-engineering it."
      ],
      challenges: [
        { p: "Membership registration needed document uploads and an admin review step, not just a contact form.", s: "Built a dedicated registration flow with file uploads and a login portal, separate from the public marketing pages." }
      ],
      outcome: [
        { k: "3 months", v: "from kickoff to live site" },
        { k: "Live", v: "member registration, news, and gallery running in production" }
      ]
    },
    id: {
      slug: "apindo-jawa-barat",
      title: "Build situs asosiasi",
      client: "DPP APINDO Jawa Barat",
      clientNote: "Indonesia",
      role: "Freelance Developer",
      year: "Jan 2025 \u2013 Mar 2025",
      stack: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript"],
      link: "https://apindojabar.or.id/",
      hook: "Membangun situs resmi asosiasi pengusaha regional Jawa Barat \u2014 berita, membership, dan liputan acara dalam satu platform.",
      overview: [
        "DPP APINDO Jawa Barat adalah dewan regional Jawa Barat dari asosiasi pengusaha nasional Indonesia. Mereka butuh situs yang benar-benar berfungsi untuk komunikasi dan registrasi anggota, bukan sekadar halaman brosur.",
        "Dikontrak sebagai freelance developer untuk membangun situs end-to-end: liputan berita dan acara, sistem registrasi membership online dengan upload dokumen, dan galeri kegiatan organisasi."
      ],
      myRole: "Satu-satunya freelance developer \u2014 scoping, build, dan deploy situs dengan stack Laravel/Blade.",
      approach: [
        "Dibangun dengan Laravel, Blade templates, dan MySQL \u2014 stack yang dikenali oleh maintainer organisasi ke depannya.",
        "Memasang integrasi yang benar-benar dipakai board sehari-hari: WhatsApp click-to-chat, Google Maps untuk lokasi kantor, embed YouTube untuk liputan acara.",
        "Menjaga flow registrasi membership tetap sederhana \u2014 upload dokumen, review admin, login portal \u2014 tanpa over-engineering."
      ],
      challenges: [
        { p: "Registrasi membership butuh upload dokumen dan tahap review admin, bukan sekadar form kontak.", s: "Membangun flow registrasi khusus dengan upload file dan login portal, terpisah dari halaman marketing publik." }
      ],
      outcome: [
        { k: "3 bulan", v: "dari kickoff sampai situs live" },
        { k: "Live", v: "registrasi member, berita, dan galeri berjalan di produksi" }
      ]
    }
  },
  "gmes": {
    en: {
      slug: "gmes",
      title: "Corporate & catalog site",
      client: "GMES Co., Ltd.",
      clientNote: "South Korea \u00b7 freelance side project",
      role: "Freelance Developer",
      year: "May 2025 \u2013 Jul 2025",
      stack: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript"],
      hook: "A corporate and product-catalog site for a Busan-based marine spare parts supplier, taken on as a freelance side project.",
      overview: [
        "GMES supplies marine machinery and ship spare parts out of Busan, South Korea. They needed a site that could carry a real product catalog \u2014 engine parts, pumps, heat exchangers \u2014 alongside a quote/inquiry system for ship owners and fleet managers.",
        "Took this on as a self-initiated freelance project, building the catalog structure and inquiry flow on a Laravel stack."
      ],
      myRole: "Freelance developer (side project) \u2014 built the catalog and inquiry system end-to-end.",
      approach: [
        "Structured the product catalog into clear categories (engine parts, purifier systems, air compressors, pumps, heat exchangers) so a non-technical team could keep it updated.",
        "Built a request-for-quote form as the primary conversion path, since this is a B2B catalog, not a checkout flow.",
        "Used SEO meta tags (Open Graph, Twitter Cards, canonical URLs) given the site's role as the company's public storefront."
      ],
      challenges: [
        { p: "A large, technical product catalog needed to stay easy to browse for non-technical procurement staff.", s: "Grouped parts by system category rather than SKU, with a search/filter layer on top." }
      ],
      outcome: [
        { k: "Staging", v: "site currently live on a staging domain (demo.gmes.asia)" }
      ]
    },
    id: {
      slug: "gmes",
      title: "Situs korporat & katalog",
      client: "GMES Co., Ltd.",
      clientNote: "Korea Selatan \u00b7 freelance side project",
      role: "Freelance Developer",
      year: "Mei 2025 \u2013 Jul 2025",
      stack: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript"],
      hook: "Situs korporat dan katalog produk untuk supplier suku cadang kapal berbasis Busan, dikerjakan sebagai freelance side project.",
      overview: [
        "GMES memasok mesin dan suku cadang kapal dari Busan, Korea Selatan. Mereka butuh situs yang bisa menampung katalog produk sungguhan \u2014 engine parts, pompa, heat exchanger \u2014 sekaligus sistem quote/inquiry untuk pemilik kapal dan fleet manager.",
        "Mengambil ini sebagai proyek freelance inisiatif sendiri, membangun struktur katalog dan flow inquiry dengan stack Laravel."
      ],
      myRole: "Freelance developer (side project) \u2014 membangun katalog dan sistem inquiry end-to-end.",
      approach: [
        "Menyusun katalog produk ke kategori yang jelas (engine parts, purifier systems, air compressors, pompa, heat exchanger) agar tim non-teknis bisa tetap update.",
        "Membangun form request-for-quote sebagai jalur konversi utama, karena ini katalog B2B, bukan flow checkout.",
        "Memakai SEO meta tags (Open Graph, Twitter Cards, canonical URLs) mengingat peran situs sebagai etalase publik perusahaan."
      ],
      challenges: [
        { p: "Katalog produk yang besar dan teknis harus tetap mudah dijelajahi staf procurement non-teknis.", s: "Mengelompokkan parts berdasarkan kategori sistem, bukan SKU, dengan layer search/filter di atasnya." }
      ],
      outcome: [
        { k: "Staging", v: "situs saat ini live di domain staging (demo.gmes.asia)" }
      ]
    }
  },
  "tool-protect": {
    en: {
      slug: "tool-protect",
      title: "Digital toolbox app",
      client: "Tool Protect",
      clientNote: "Australia \u00b7 via Geekseat",
      role: "Developer, Geekseat",
      year: "May 2021 \u2013 Apr 2022",
      stack: ["ReactJS", "KendoUI", "Apache Cordova"],
      hook: "An Android/iOS app that lets tradespeople catalog their tools and generate instant police/insurance reports if one goes missing.",
      overview: [
        "Tool Protect lets tradespeople and small business owners record their power tools \u2014 photos, serial numbers, receipts \u2014 in a digital toolbox, then generate a police or insurance report instantly if a tool is stolen or damaged.",
        "Worked on this as part of the team at Geekseat, contributing to the React/Cordova app used by individual tradies and corporate accounts alike."
      ],
      myRole: "Developer on the Geekseat team \u2014 feature work on the React/Cordova app.",
      approach: [
        "Built UI on ReactJS with KendoUI components, wrapped in Apache Cordova for Android/iOS distribution.",
        "Focused on the core loop: add a tool with photos and details, then generate a report in a few taps \u2014 the app's whole value proposition."
      ],
      challenges: [
        { p: "The app needed to work reliably for users adding tools and documentation in the field, often with unreliable connectivity.", s: "Kept the core add-tool and report-generation flows lightweight and resilient to poor network conditions." }
      ],
      outcome: [
        { k: "Live", v: "on Google Play and the Apple App Store" },
        { k: "AU / NZ / UK", v: "primary markets served" }
      ]
    },
    id: {
      slug: "tool-protect",
      title: "App digital toolbox",
      client: "Tool Protect",
      clientNote: "Australia \u00b7 via Geekseat",
      role: "Developer, Geekseat",
      year: "Mei 2021 \u2013 Apr 2022",
      stack: ["ReactJS", "KendoUI", "Apache Cordova"],
      hook: "App Android/iOS yang memungkinkan tradesperson mencatat perkakas mereka dan membuat laporan polisi/asuransi instan jika hilang.",
      overview: [
        "Tool Protect memungkinkan tradesperson dan pemilik usaha kecil mencatat power tools mereka \u2014 foto, nomor seri, kwitansi \u2014 dalam toolbox digital, lalu membuat laporan polisi atau asuransi instan jika alat dicuri atau rusak.",
        "Mengerjakan ini sebagai bagian dari tim Geekseat, berkontribusi pada app React/Cordova yang dipakai tradies individu maupun akun korporat."
      ],
      myRole: "Developer di tim Geekseat \u2014 pengerjaan fitur di app React/Cordova.",
      approach: [
        "Membangun UI dengan ReactJS dan komponen KendoUI, dibungkus Apache Cordova untuk distribusi Android/iOS.",
        "Fokus pada core loop: tambah alat dengan foto dan detail, lalu buat laporan dalam beberapa tap \u2014 inti value proposition app ini."
      ],
      challenges: [
        { p: "App perlu bekerja reliable untuk user yang menambahkan alat dan dokumentasi di lapangan, sering dengan koneksi tidak stabil.", s: "Menjaga flow tambah-alat dan pembuatan laporan tetap ringan dan tahan terhadap koneksi jelek." }
      ],
      outcome: [
        { k: "Live", v: "di Google Play dan Apple App Store" },
        { k: "AU / NZ / UK", v: "pasar utama yang dilayani" }
      ]
    }
  },
  "era-mobile": {
    en: {
      slug: "era-mobile",
      title: "Real estate mobile app",
      client: "ERA Indonesia",
      clientNote: "via freelance agency",
      role: "Freelance Developer",
      year: "Sep 2020 \u2013 May 2021",
      stack: ["Vue.js", "Apache Cordova"],
      link: "https://play.google.com/store/apps/details?id=com.eraproperty&pcampaignid=web_share",
      linkType: "play",
      hook: "Change requests and bugfixes on ERA Indonesia's Android app, worked in parallel with the ERA web platform.",
      overview: [
        "ERA Mobile is ERA Indonesia's Android app, used by agents to manage listings and by the public to browse properties, contact agents, and use a mortgage calculator.",
        "Took on change requests and bugfixes on this app as a freelancer, in parallel with CR/bugfix work on the ERA web platform \u2014 not a from-scratch build."
      ],
      myRole: "Freelance developer \u2014 change requests and bugfixes on the Vue.js/Cordova app.",
      approach: [
        "Worked within the existing Vue.js + Apache Cordova codebase, prioritizing fixes that shipped without disrupting agents already using the app.",
        "Coordinated fixes across the mobile app and web platform where the two shared data or workflows."
      ],
      challenges: [
        { p: "Changes had to ship without breaking an app already in daily use by agents and the public.", s: "Scoped each CR narrowly and tested against the existing agent workflows before release." }
      ],
      outcome: [
        { k: "Live", v: "app maintained on Google Play throughout the engagement" },
        { k: "Parallel", v: "delivered alongside CR/bugfix work on the ERA web platform" }
      ]
    },
    id: {
      slug: "era-mobile",
      title: "App mobile real estate",
      client: "ERA Indonesia",
      clientNote: "via agency freelance",
      role: "Freelance Developer",
      year: "Sep 2020 \u2013 Mei 2021",
      stack: ["Vue.js", "Apache Cordova"],
      link: "https://play.google.com/store/apps/details?id=com.eraproperty&pcampaignid=web_share",
      linkType: "play",
      hook: "Change request dan bugfix di app Android ERA Indonesia, dikerjakan paralel dengan platform web ERA.",
      overview: [
        "ERA Mobile adalah app Android ERA Indonesia, dipakai agen untuk mengelola listing dan publik untuk browsing properti, kontak agen, dan pakai kalkulator KPR.",
        "Mengerjakan change request dan bugfix di app ini sebagai freelancer, paralel dengan pekerjaan CR/bugfix di platform web ERA \u2014 bukan build dari nol."
      ],
      myRole: "Freelance developer \u2014 change request dan bugfix di app Vue.js/Cordova.",
      approach: [
        "Bekerja di dalam codebase Vue.js + Apache Cordova yang sudah ada, memprioritaskan fix yang di-ship tanpa mengganggu agen yang sudah memakai app.",
        "Mengkoordinasikan fix di app mobile dan platform web ketika keduanya berbagi data atau workflow."
      ],
      challenges: [
        { p: "Perubahan harus di-ship tanpa merusak app yang sudah dipakai harian oleh agen dan publik.", s: "Membatasi scope tiap CR secara sempit dan test terhadap workflow agen yang ada sebelum rilis." }
      ],
      outcome: [
        { k: "Live", v: "app tetap terjaga di Google Play sepanjang engagement" },
        { k: "Paralel", v: "dikerjakan bersamaan dengan CR/bugfix di platform web ERA" }
      ]
    }
  },
  "nurul-falah": {
    en: {
      slug: "nurul-falah",
      title: "School website & CMS",
      client: "Pondok Pesantren Nurul Falah",
      clientNote: "Indonesia \u00b7 freelance side project",
      role: "Full-Stack Developer (solo)",
      year: "2026",
      stack: ["Laravel 13", "Filament v5", "Rumahweb (shared hosting)"],
      link: "https://nurulfalah.ponpes.id",
      hook: "A company profile site and admin CMS for an Islamic boarding school, built full-stack from scratch in about two weeks.",
      overview: [
        "Nurul Falah is an Islamic educational institution in Bandung, established 2006, running three accredited education levels. Before this project it had no official digital presence \u2014 profile, programs, and new-student admissions all ran on manual processes.",
        "Took this on as a freelance side project: a public site plus a Filament admin panel so non-technical school staff could run content themselves \u2014 articles, galleries, programs, facilities, admissions \u2014 without touching code."
      ],
      myRole: "Sole full-stack developer \u2014 built the public site and the entire Filament CMS, and handled deployment to shared hosting.",
      approach: [
        "Built the public site around a single goal: move a visitor (mostly parents) from learning about the school to enrolling or donating.",
        "Built the admin panel as the real deliverable \u2014 an article module with sanitized rich text, auto-generated slugs, categories/tags, author profiles, read-time calculation, and a draft/scheduled-publish workflow, plus simpler modules for programs, facilities, and gallery.",
        "Deployed a modern Laravel 13 app onto Rumahweb shared hosting \u2014 not built for this kind of framework \u2014 using a folder-split deployment approach."
      ],
      challenges: [
        { p: "Shared hosting has a restrictive directory structure that doesn't suit a standard Laravel deployment.", s: "Used a folder-split deployment approach to get the app running within the host's constraints." },
        { p: "A domain expired mid-project, compounded by a duplicate billing issue, taking the live site down.", s: "Resolved the billing conflict and restored the domain, bringing the site back to a healthy live state." }
      ],
      outcome: [
        { k: "~2 weeks", v: "from kickoff to live site" },
        { k: "Live", v: "nurulfalah.ponpes.id, self-managed by school staff" }
      ]
    },
    id: {
      slug: "nurul-falah",
      title: "Website & CMS sekolah",
      client: "Pondok Pesantren Nurul Falah",
      clientNote: "Indonesia \u00b7 freelance side project",
      role: "Full-Stack Developer (solo)",
      year: "2026",
      stack: ["Laravel 13", "Filament v5", "Rumahweb (shared hosting)"],
      link: "https://nurulfalah.ponpes.id",
      hook: "Situs company profile dan CMS admin untuk pesantren, dibangun full-stack dari nol dalam sekitar dua minggu.",
      overview: [
        "Nurul Falah adalah lembaga pendidikan Islam di Bandung, berdiri 2006, menjalankan tiga jenjang pendidikan terakreditasi. Sebelum proyek ini belum ada kehadiran digital resmi \u2014 profil, program, dan PPDB semuanya manual.",
        "Mengambil ini sebagai freelance side project: situs publik plus admin panel Filament agar staf sekolah yang non-teknis bisa mengelola konten sendiri \u2014 artikel, galeri, program, fasilitas, PPDB \u2014 tanpa menyentuh kode."
      ],
      myRole: "Satu-satunya full-stack developer \u2014 membangun situs publik dan seluruh CMS Filament, serta menangani deployment ke shared hosting.",
      approach: [
        "Membangun situs publik dengan satu tujuan: mengarahkan pengunjung (kebanyakan orang tua) dari mengenal sekolah sampai mendaftar atau berdonasi.",
        "Membangun admin panel sebagai deliverable utama \u2014 modul artikel dengan rich text yang disanitasi, slug otomatis, kategori/tag, profil penulis, kalkulasi waktu baca, dan workflow draft/scheduled-publish, plus modul lebih sederhana untuk program, fasilitas, dan galeri.",
        "Men-deploy aplikasi Laravel 13 modern ke shared hosting Rumahweb \u2014 yang tidak dirancang untuk framework seperti ini \u2014 memakai pendekatan folder-split deployment."
      ],
      challenges: [
        { p: "Shared hosting punya struktur direktori yang ketat, tidak cocok untuk deployment Laravel standar.", s: "Memakai pendekatan folder-split deployment agar aplikasi bisa jalan dalam batasan hosting." },
        { p: "Domain expired di tengah proyek, diperparah masalah duplicate billing, membuat situs live down.", s: "Menyelesaikan konflik billing dan memulihkan domain, mengembalikan situs ke kondisi live yang sehat." }
      ],
      outcome: [
        { k: "~2 minggu", v: "dari kickoff sampai situs live" },
        { k: "Live", v: "nurulfalah.ponpes.id, dikelola mandiri oleh staf sekolah" }
      ]
    }
  },
  "era-web-app": {
    en: {
      slug: "era-web-app",
      title: "Real estate web platform",
      client: "ERA Indonesia",
      clientNote: "via freelance agency",
      role: "Freelance Developer",
      year: "Sep 2020 \u2013 May 2021",
      stack: ["Custom backend", "Responsive frontend"],
      hook: "Change requests and bugfixes on ERA Indonesia's web platform, worked in parallel with the ERA Mobile app.",
      overview: [
        "ERA Indonesia is the web platform for ERA Real Estate's Indonesian master franchise (100+ branch offices) \u2014 property search/listings, agent recruitment, and training content.",
        "Took on change requests and bugfixes on this platform as a freelancer, in parallel with CR/bugfix work on the ERA Mobile app \u2014 not a from-scratch build."
      ],
      myRole: "Freelance developer \u2014 change requests and bugfixes on the web platform.",
      approach: [
        "Worked within the existing codebase, prioritizing fixes and CRs that shipped without disrupting live property listings and agent workflows.",
        "Coordinated with the ERA Mobile work where the platforms shared data (listings, member portal)."
      ],
      challenges: [
        { p: "Changes had to ship on a live property portal without disrupting active listings or agent recruitment flows.", s: "Scoped each CR narrowly and verified against production data before release." }
      ],
      outcome: [
        { k: "Live", v: "platform maintained throughout the engagement" },
        { k: "Parallel", v: "delivered alongside CR/bugfix work on ERA Mobile" }
      ]
    },
    id: {
      slug: "era-web-app",
      title: "Platform web real estate",
      client: "ERA Indonesia",
      clientNote: "via agency freelance",
      role: "Freelance Developer",
      year: "Sep 2020 \u2013 Mei 2021",
      stack: ["Custom backend", "Frontend responsive"],
      hook: "Change request dan bugfix di platform web ERA Indonesia, dikerjakan paralel dengan app ERA Mobile.",
      overview: [
        "ERA Indonesia adalah platform web untuk master franchise Indonesia dari ERA Real Estate (100+ kantor cabang) \u2014 pencarian/listing properti, rekrutmen agen, dan konten training.",
        "Mengerjakan change request dan bugfix di platform ini sebagai freelancer, paralel dengan pekerjaan CR/bugfix di app ERA Mobile \u2014 bukan build dari nol."
      ],
      myRole: "Freelance developer \u2014 change request dan bugfix di platform web.",
      approach: [
        "Bekerja di dalam codebase yang sudah ada, memprioritaskan fix dan CR yang di-ship tanpa mengganggu listing properti live dan workflow agen.",
        "Berkoordinasi dengan pekerjaan ERA Mobile ketika kedua platform berbagi data (listing, member portal)."
      ],
      challenges: [
        { p: "Perubahan harus di-ship di portal properti yang live tanpa mengganggu listing aktif atau flow rekrutmen agen.", s: "Membatasi scope tiap CR secara sempit dan verifikasi terhadap data produksi sebelum rilis." }
      ],
      outcome: [
        { k: "Live", v: "platform terjaga sepanjang engagement" },
        { k: "Paralel", v: "dikerjakan bersamaan dengan CR/bugfix di ERA Mobile" }
      ]
    }
  }
};
