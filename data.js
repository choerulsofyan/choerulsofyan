// Bilingual content + case study data
window.PORTFOLIO_DATA = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Available for select freelance engagements",
      name: "Choerul Sofyan",
      role: "Freelance fullstack engineer",
      tagline: "I work on projects that need to land right. Products with real users, codebases with years of history, and everything in between.",
      sub: "10 years shipping software. Remote work with teams in Singapore and Australia. Bandung, GMT+7.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See my work",
      stats: [
        { k: "10y", v: "Building shipping software" },
        { k: "5", v: "Projects across web and mobile" },
        { k: "3", v: "Freelance and agency roles" }
      ]
    },
    sections: {
      workEyebrow: "Selected work",
      workTitle: "Three projects, each different.",
      workSub: "A site built from scratch for an industry association, plus ongoing maintenance work for one of Indonesia's largest real estate companies.",
      servicesEyebrow: "What I do",
      servicesTitle: "How I fit into a team.",
      servicesSub: "Long enough engagements to get real impact. Short enough to stay current.",
      stackEyebrow: "Toolbelt",
      stackTitle: "Technologies I know well.",
      stackSub: "Real experience, not a list. If it's not here, I'll say so.",
      processEyebrow: "How I work",
      processTitle: "Predictable process, even when projects aren't.",
      contactEyebrow: "Let's talk",
      contactTitle: "Got a project in mind?",
      contactSub: "Tell me about the scope, stack, and timeline. I usually reply within 24 to 48 hours."
    },
    services: [
      {
        n: "01",
        title: "Web App Development",
        desc: "Websites and internal systems built from the ground up. PHP/Laravel backends, MySQL, membership systems, and the integrations you actually need (maps, chat, payments).",
        ideal: "Organizations that need a working site, not a template.",
        link: "apindo-jawa-barat"
      },
      {
        n: "02",
        title: "Change Requests & Maintenance",
        desc: "Working inside an existing live codebase. Change requests and bugfixes that ship without breaking production.",
        ideal: "Teams with live products that need ongoing changes, not a rebuild.",
        link: "era-web-app"
      },
      {
        n: "03",
        title: "Mobile / Hybrid App Development",
        desc: "Feature work on hybrid mobile apps (Cordova, React, Vue) already live on Google Play and the App Store.",
        ideal: "Live products on mobile that need a careful approach.",
        link: "tool-protect"
      }
    ],
    stack: [
      { group: "frontend", items: ["React.js", "Redux", "TypeScript", "JavaScript", "Vue.js", "jQuery", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "SASS", "Nuxt", "Livewire"] },
      { group: "backend", items: ["PHP", "Laravel", "CodeIgniter", "Lumen", "Node.js", "Express.js", "Flask", "Python", "Java", "Bun"] },
      { group: "Database", items: ["MySQL", "MongoDB", "SQL"] },
      { group: "Tools", items: ["Git", "Figma", "Docker", "Linux", "Microsoft Fabric", "VS Code"] },
      { group: "Practices", items: ["Agile / Scrum", "API integration", "Legacy migration", "Code review"] },
      { group: "Specialties", items: ["Fullstack development", "Frontend development", "Backend development", "Web application development", "Web applications", "Web development", "Web services", "UI/UX", "Technical support"] }
    ],
    process: [
      { n: "01", title: "Discovery call", body: "30 minutes. We talk through scope, constraints, and what done looks like. No pitch deck." },
      { n: "02", title: "Proposal & timeline", body: "Written scope, milestones, fixed price or weekly rate. You approve before I start coding." },
      { n: "03", title: "Build & iterate", body: "Short feedback loops, usually a Friday demo. You see progress every week." },
      { n: "04", title: "Handoff & support", body: "Documented code, a recorded walkthrough, and 30 days to fix bugs. Then you own it or I stay on retainer." }
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
      success: "Got it. I'll get back to you within 24 to 48 hours.",
      altLabel: "Or reach out directly:",
      response: "I reply within 24 to 48 hours · GMT+7"
    },
    footer: {
      tagline: "Designed and built by Choerul. Made in Bandung, Indonesia.",
      colophon: "",
      copyright: `© ${new Date().getFullYear()} Choerul Sofyan. All rights reserved.`
    },
    aboutPreview: {
      eyebrow: "About",
      title: "I started in IT Support, fixing point-of-sale systems in retail shops. Ten years later I handle rewrites that need to happen without anyone noticing.",
      paragraphs: [
        "I've been writing software full-time since 2016, after two years in field IT taught me that most bugs are people problems before they're technical ones. The past decade has taught me the rest: debugging under pressure, building systems for teams that don't exist yet, and keeping a running system alive while you rebuild it underneath.",
        "Most of my decade has been remote work: teams in Singapore and Australia, agencies managing multi-timezone projects, Indonesian founders who needed someone reliable. I work best with people who know what they want but need experienced hands to ship it. Direct communication, weekly demos, and no invoice surprises."
      ],
      readMore: "Read full background"
    }
  },
  id: {
    nav: { work: "Karya", services: "Layanan", about: "Tentang", contact: "Kontak" },
    hero: {
      eyebrow: "Tersedia untuk proyek freelance terpilih",
      name: "Choerul Sofyan",
      role: "fullstack engineer freelance",
      tagline: "Saya menangani proyek yang harus beres dengan benar: produk dengan user nyata, codebase dengan sejarah panjang, dan segala kerumitan di antaranya.",
      sub: "Satu dekade menulis dan merilis software. Kerja remote bersama tim di Singapura dan Australia. Berbasis di Bandung, GMT+7.",
      ctaPrimary: "Mulai proyek",
      ctaSecondary: "Lihat karya saya",
      stats: [
        { k: "10thn", v: "Menulis software yang benar-benar dirilis" },
        { k: "4", v: "Industri yang pernah dikerjakan" },
        { k: "1", v: "Migrasi JSP → React, end-to-end" }
      ]
    },
    sections: {
      workEyebrow: "Karya terpilih",
      workTitle: "Tiga proyek, tiga konteks berbeda.",
      workSub: "Mulai dari website yang dibangun dari nol untuk asosiasi industri, sampai pekerjaan maintenance berkelanjutan untuk salah satu perusahaan real estate terbesar di Indonesia.",
      servicesEyebrow: "Yang saya kerjakan",
      servicesTitle: "Cara saya berkontribusi di tim Anda.",
      servicesSub: "Cukup panjang untuk memberi dampak nyata, cukup singkat supaya saya tetap belajar hal baru.",
      stackEyebrow: "Toolbelt",
      stackTitle: "Teknologi yang saya kuasai.",
      stackSub: "Pengalaman yang benar-benar terpakai, bukan sekadar daftar. Kalau ada yang belum saya kuasai, saya akan bilang terus terang.",
      processEyebrow: "Cara kerja saya",
      processTitle: "Alur kerja yang konsisten, meski setiap proyek berbeda.",
      contactEyebrow: "Mari bicara",
      contactTitle: "Punya proyek?",
      contactSub: "Ceritakan lingkup, stack, dan timeline. Biasanya saya balas dalam 24 sampai 48 jam."
    },
    services: [
      {
        n: "01",
        title: "Pengembangan Web App",
        desc: "Website dan sistem internal yang dibangun dari nol: backend PHP/Laravel, MySQL, sistem membership, dan integrasi yang benar-benar dibutuhkan organisasi Anda, mulai dari maps, chat, sampai pembayaran.",
        ideal: "Organisasi yang butuh website berfungsi, bukan template.",
        link: "apindo-jawa-barat"
      },
      {
        n: "02",
        title: "Change Request & Maintenance",
        desc: "Bekerja di dalam codebase yang sudah live, mengerjakan change request dan bugfix yang bisa naik ke production tanpa merusak apa pun yang sudah berjalan.",
        ideal: "Tim dengan produk live yang butuh perubahan berkelanjutan, bukan rebuild total.",
        link: "era-web-app"
      },
      {
        n: "03",
        title: "Pengembangan Mobile / Hybrid App",
        desc: "Pengerjaan fitur di aplikasi mobile hybrid (Cordova, React, Vue) yang sudah live di Google Play dan App Store.",
        ideal: "Produk mobile yang sudah live dan butuh penanganan yang teliti.",
        link: "tool-protect"
      }
    ],
    stack: [
      { group: "frontend", items: ["React.js", "Redux", "TypeScript", "JavaScript", "Vue.js", "jQuery", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "SASS", "Nuxt", "Livewire"] },
      { group: "backend", items: ["PHP", "Laravel", "CodeIgniter", "Lumen", "Node.js", "Express.js", "Flask", "Python", "Java", "Bun"] },
      { group: "Database", items: ["MySQL", "MongoDB", "SQL"] },
      { group: "Tools", items: ["Git", "Figma", "Docker", "Linux", "Microsoft Fabric", "VS Code"] },
      { group: "Praktik", items: ["Agile / Scrum", "Integrasi API", "Migrasi legacy", "Code review"] },
      { group: "Spesialisasi", items: ["fullstack development", "frontend development", "backend development", "web application development", "web applications", "web development", "web services", "UI/UX", "technical support"] }
    ],
    process: [
      { n: "01", title: "Discovery call", body: "30 menit untuk membahas lingkup kerja, kendala, dan tolok ukur keberhasilan proyek. Tanpa pitch deck." },
      { n: "02", title: "Proposal & timeline", body: "Lingkup kerja tertulis, milestone jelas, dan harga tetap atau tarif mingguan. Anda yang menyetujui semuanya sebelum saya mulai coding." },
      { n: "03", title: "Build & iterate", body: "Siklus feedback yang singkat, biasanya lewat demo tiap Jumat. Anda bisa melihat progresnya setiap minggu." },
      { n: "04", title: "Handoff & support", body: "Kode yang terdokumentasi, video walkthrough, dan masa 30 hari untuk perbaikan bug. Setelah itu, semuanya jadi milik Anda, atau saya tetap standby lewat retainer." }
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
      messageHint: "Sedang membangun apa? Ada yang mentok di mana? Selesainya itu seperti apa?",
      submit: "Kirim",
      sending: "Mengirim…",
      success: "Diterima. Saya balas dalam 24 sampai 48 jam.",
      altLabel: "Atau hubungi langsung:",
      response: "Saya balas dalam 24 sampai 48 jam · GMT+7"
    },
    footer: {
      tagline: "Didesain dan dibangun sendiri oleh Choerul, dari Bandung, Indonesia.",
      colophon: "",
      copyright: `© ${new Date().getFullYear()} Choerul Sofyan. Hak cipta dilindungi.`
    },
    aboutPreview: {
      eyebrow: "Tentang",
      title: "Saya memulai karier sebagai IT Support, memperbaiki mesin point-of-sale di toko-toko ritel. Sepuluh tahun kemudian, saya yang menangani rewrite besar yang harus berjalan mulus tanpa disadari siapa pun.",
      paragraphs: [
        "Saya menulis software secara full-time sejak 2016, setelah dua tahun kerja di lapangan sebagai IT support mengajarkan saya bahwa kebanyakan bug itu sebenarnya masalah orang, baru masalah teknis belakangan. Sepuluh tahun berikutnya mengajarkan sisanya: cara debugging di bawah tekanan, merancang sistem untuk tim yang bahkan belum terbentuk, dan menjaga sistem yang sedang berjalan tetap hidup sambil saya rombak dari dalam.",
        "Sebagian besar dari waktu itu saya jalani secara remote: bersama tim engineering di Singapura dan Australia, agency yang mengelola proyek lintas zona waktu, sampai founder-founder Indonesia yang butuh orang yang bisa diandalkan. Saya paling nyaman bekerja dengan orang yang sudah tahu apa yang mereka mau, tapi butuh tangan berpengalaman untuk benar-benar mewujudkannya. Komunikasi langsung, demo tiap minggu, dan tanpa kejutan di invoice."
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
      hook: "Built the official website for West Java's regional employers association. News, membership, and event coverage all in one place.",
      overview: [
        "DPP APINDO Jawa Barat is West Java's regional board of Indonesia's national employers association. They needed an actual working site, not a brochure. Member communications and registration had to work properly.",
        "I built the site end-to-end: news and event coverage, an online membership registration system with document uploads, and a gallery of what the organization does."
      ],
      myRole: "I was the solo developer. Scoped it, built it, deployed it on Laravel and Blade.",
      approach: [
        "Built with Laravel, Blade templates, and MySQL. Tech stack that the organization's future maintainers would recognize.",
        "Wired in integrations they actually use every day: WhatsApp click-to-chat, Google Maps for the office, YouTube embeds for events.",
        "Kept membership registration simple. Document upload, admin review, login portal. No over-engineering."
      ],
      challenges: [
        { p: "Membership registration needed document uploads and admin review, not just a contact form.", s: "Built a dedicated registration flow with file uploads and a login portal, separate from the marketing pages." }
      ],
      outcome: [
        { k: "3 months", v: "from kickoff to live" },
        { k: "Live", v: "member registration, news, and gallery in production" }
      ]
    },
    id: {
      slug: "apindo-jawa-barat",
      title: "Pembuatan website asosiasi",
      client: "DPP APINDO Jawa Barat",
      clientNote: "Indonesia",
      role: "Freelance Developer",
      year: "Jan 2025 \u2013 Mar 2025",
      stack: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript"],
      link: "https://apindojabar.or.id/",
      hook: "Membangun website resmi untuk asosiasi pengusaha regional Jawa Barat, mencakup berita, sistem membership, dan liputan acara dalam satu platform.",
      overview: [
        "DPP APINDO Jawa Barat adalah dewan regional Jawa Barat dari asosiasi pengusaha nasional Indonesia. Mereka butuh website yang benar-benar berfungsi, bukan sekadar halaman brosur. Komunikasi dan registrasi member harus benar-benar berjalan dengan baik.",
        "Saya membangun websitenya dari awal, mulai dari liputan berita dan acara, sistem registrasi membership online dengan upload dokumen, sampai galeri kegiatan organisasi."
      ],
      myRole: "Developer satu-satunya di proyek ini. Saya yang menentukan lingkup kerja, membangun, dan men-deploy semuanya dengan Laravel dan Blade.",
      approach: [
        "Dibangun dengan Laravel, Blade templates, dan MySQL, stack yang nantinya mudah dikenali siapa pun yang meneruskan maintenance website ini.",
        "Memasang integrasi yang benar-benar mereka pakai sehari-hari, seperti WhatsApp click-to-chat, Google Maps untuk lokasi kantor, dan embed YouTube untuk liputan acara.",
        "Menjaga alur registrasi membership tetap sederhana: upload dokumen, admin review, lalu login ke portal member, tanpa over-engineering."
      ],
      challenges: [
        { p: "Registrasi membership butuh proses upload dokumen dan admin review, bukan sekadar form kontak biasa.", s: "Membangun alur registrasi khusus dengan upload file dan login portal, terpisah dari halaman-halaman marketing publik." }
      ],
      outcome: [
        { k: "3 bulan", v: "dari kickoff ke live" },
        { k: "Live", v: "registrasi member, berita, dan galeri di produksi" }
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
      hook: "Corporate and product catalog site for a Busan-based marine spare parts supplier. A side project I took on myself.",
      overview: [
        "GMES supplies marine machinery and ship spare parts from Busan, South Korea. They needed a site that could hold a real product catalog\u2014engine parts, pumps, heat exchangers\u2014plus a quote and inquiry system for ship owners and fleet managers.",
        "I took this on as a self-initiated project. Built the catalog structure and inquiry flow on Laravel."
      ],
      myRole: "Solo freelance developer on this side project. Built the catalog and inquiry system end-to-end.",
      approach: [
        "Organized the product catalog into clear categories (engine parts, purifier systems, air compressors, pumps, heat exchangers). Their non-technical team can keep it updated.",
        "Built a request-for-quote form as the main conversion path. This is a B2B catalog, not a checkout flow.",
        "Added SEO meta tags (Open Graph, Twitter Cards, canonical URLs) since this is the company's public storefront."
      ],
      challenges: [
        { p: "A large, technical product catalog needed to be easy to browse for non-technical procurement staff.", s: "Grouped parts by system category instead of SKU, with search and filter on top." }
      ],
      outcome: [
        { k: "Staging", v: "site is live on a staging domain (demo.gmes.asia)" }
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
      hook: "Situs korporat dan katalog produk untuk supplier suku cadang kapal berbasis Busan. Side project yang saya ambil sendiri.",
      overview: [
        "GMES memasok mesin dan suku cadang kapal dari Busan, Korea Selatan. Mereka butuh website yang bisa menampilkan katalog produk yang sesungguhnya (engine parts, pompa, heat exchanger), sekaligus sistem quote dan inquiry untuk pemilik kapal dan fleet manager.",
        "Saya ambil ini sebagai proyek pribadi, membangun struktur katalog dan alur inquiry dengan Laravel."
      ],
      myRole: "Developer tunggal untuk side project ini. Saya membangun katalog dan sistem inquiry dari ujung ke ujung.",
      approach: [
        "Mengelompokkan katalog produk ke kategori yang jelas (engine parts, purifier systems, air compressors, pompa, heat exchanger) supaya tim non-teknis mereka bisa dengan mudah memperbaruinya sendiri.",
        "Membangun form request-for-quote sebagai jalur konversi utama, karena ini katalog B2B, bukan alur checkout biasa.",
        "Menambahkan SEO meta tags (Open Graph, Twitter Cards, canonical URLs) karena website ini jadi etalase publik perusahaan."
      ],
      challenges: [
        { p: "Katalog produk yang besar dan teknis ini harus tetap mudah dijelajahi oleh staf procurement yang non-teknis.", s: "Mengelompokkan parts berdasarkan kategori sistem, bukan SKU, ditambah fitur pencarian dan filter di atasnya." }
      ],
      outcome: [
        { k: "Staging", v: "website live di domain staging (demo.gmes.asia)" }
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
      hook: "Android/iOS app for tradespeople to catalog their tools and instantly generate police or insurance reports if one goes missing.",
      overview: [
        "Tool Protect lets tradespeople and small business owners record their power tools\u2014photos, serial numbers, receipts\u2014in a digital toolbox. Then generate a police or insurance report instantly if a tool is stolen or damaged.",
        "I worked on this as part of the team at Geekseat, contributing to the React/Cordova app. Used by individual tradies and corporate accounts."
      ],
      myRole: "Developer on the Geekseat team. Feature work on the React/Cordova app.",
      approach: [
        "Built the UI with ReactJS and KendoUI components, wrapped in Apache Cordova for Android and iOS distribution.",
        "Focused on the core flow: add a tool with photos and details, then generate a report in a few taps. That's the whole value."
      ],
      challenges: [
        { p: "The app needed to work reliably in the field for users adding tools and documentation. Often with unreliable connections.", s: "Kept the add-tool and report-generation flows lightweight and resilient to poor network." }
      ],
      outcome: [
        { k: "Live", v: "on Google Play and Apple App Store" },
        { k: "AU / NZ / UK", v: "primary markets" }
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
      hook: "App Android/iOS yang membantu tradesperson mencatat perkakas mereka dan langsung membuat laporan polisi atau asuransi kalau ada yang hilang.",
      overview: [
        "Tool Protect memungkinkan tradesperson dan pemilik usaha kecil mencatat power tools mereka (foto, nomor seri, kwitansi) dalam toolbox digital, lalu langsung membuat laporan polisi atau asuransi kalau alat itu dicuri atau rusak.",
        "Saya mengerjakan ini sebagai bagian dari tim Geekseat, berkontribusi pada app React/Cordova yang dipakai baik oleh tradies individu maupun akun korporat."
      ],
      myRole: "Developer di tim Geekseat, mengerjakan fitur-fitur baru di app React/Cordova.",
      approach: [
        "Membangun UI dengan ReactJS dan komponen KendoUI, dibungkus Apache Cordova untuk distribusi ke Android dan iOS.",
        "Fokus pada alur inti: tambah alat lengkap dengan foto dan detail, lalu buat laporan cuma dalam beberapa tap. Itulah inti value dari app ini."
      ],
      challenges: [
        { p: "App ini harus tetap bekerja dengan andal di lapangan, saat user menambahkan alat dan dokumentasi dengan koneksi yang sering tidak stabil.", s: "Menjaga alur tambah-alat dan pembuatan laporan tetap ringan serta tahan terhadap koneksi yang jelek." }
      ],
      outcome: [
        { k: "Live", v: "di Google Play dan Apple App Store" },
        { k: "AU / NZ / UK", v: "pasar utama" }
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
      hook: "Change requests and bugfixes on ERA Indonesia's Android app. Worked in parallel with their web platform.",
      overview: [
        "ERA Mobile is ERA Indonesia's Android app. Agents use it to manage listings. The public uses it to browse properties, contact agents, and use a mortgage calculator.",
        "I took on change requests and bugfixes on this app as a freelancer. Also did CR and bugfix work on the ERA web platform in parallel. Not a from-scratch build."
      ],
      myRole: "Freelance developer. Change requests and bugfixes on the Vue.js/Cordova app.",
      approach: [
        "Worked inside the existing Vue.js and Apache Cordova codebase. Prioritized fixes that shipped without disrupting agents already using the app.",
        "Coordinated fixes across the mobile app and web platform when the two shared data or workflows."
      ],
      challenges: [
        { p: "Changes had to ship without breaking an app already in daily use by agents and the public.", s: "Scoped each CR narrowly and tested against the existing agent workflows before release." }
      ],
      outcome: [
        { k: "Live", v: "app stayed on Google Play throughout the engagement" },
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
      hook: "Change request dan bugfix untuk app Android ERA Indonesia, dikerjakan paralel dengan platform web mereka.",
      overview: [
        "ERA Mobile adalah app Android milik ERA Indonesia. Agen memakainya untuk mengelola listing, sementara publik memakainya untuk mencari properti, menghubungi agen, dan memakai kalkulator KPR.",
        "Saya mengerjakan change request dan bugfix di app ini sebagai freelancer, sekaligus mengerjakan CR dan bugfix di platform web ERA secara paralel. Bukan proyek build dari nol."
      ],
      myRole: "Freelance developer, mengerjakan change request dan bugfix di app Vue.js/Cordova.",
      approach: [
        "Bekerja di dalam codebase Vue.js dan Apache Cordova yang sudah ada, memprioritaskan fix yang bisa naik ke production tanpa mengganggu agen yang sedang memakai app.",
        "Mengoordinasikan fix di app mobile dan platform web setiap kali keduanya berbagi data atau alur kerja yang sama."
      ],
      challenges: [
        { p: "Setiap perubahan harus naik ke production tanpa merusak app yang sudah dipakai setiap hari oleh agen maupun publik.", s: "Membatasi scope tiap CR supaya tetap sempit dan spesifik, lalu mengujinya terhadap alur kerja agen yang sudah ada sebelum rilis." }
      ],
      outcome: [
        { k: "Live", v: "app tetap di Google Play sepanjang engagement" },
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
      role: "Fullstack developer (solo)",
      year: "2026",
      stack: ["Laravel 13", "Filament v5", "Rumahweb (shared hosting)"],
      link: "https://nurulfalah.ponpes.id",
      hook: "Company profile site and admin CMS for an Islamic boarding school. Built fullstack from scratch in about two weeks.",
      overview: [
        "Nurul Falah is an Islamic educational institution in Bandung, established 2006. Runs three accredited education levels. Before this project, no official digital presence. Everything was manual: profile, programs, new student admissions.",
        "I took this on as a side project. Built a public site plus a Filament admin panel. Non-technical school staff can manage content themselves\u2014articles, galleries, programs, facilities, admissions\u2014without touching code."
      ],
      myRole: "Solo fullstack developer. Built the public site and the entire Filament CMS. Handled deployment to shared hosting.",
      approach: [
        "Built the public site around one goal: get a visitor (mostly parents) from learning about the school to enrolling or donating.",
        "Built the admin panel as the real deliverable. Article module with sanitized rich text, auto slugs, categories, tags, author profiles, read time calculation, and draft/scheduled-publish workflow. Plus simpler modules for programs, facilities, and gallery.",
        "Deployed a modern Laravel 13 app to Rumahweb shared hosting. Not built for this kind of framework. Used a folder-split deployment approach."
      ],
      challenges: [
        { p: "Shared hosting has a restrictive directory structure. Doesn't suit standard Laravel deployment.", s: "Used folder-split deployment to get the app running within the host's constraints." },
        { p: "A domain expired mid-project. A duplicate billing issue made it worse. The live site went down.", s: "Resolved the billing conflict and restored the domain. Brought the site back to a healthy live state." }
      ],
      outcome: [
        { k: "~2 weeks", v: "from kickoff to live" },
        { k: "Live", v: "nurulfalah.ponpes.id, managed by school staff" }
      ]
    },
    id: {
      slug: "nurul-falah",
      title: "Website & CMS sekolah",
      client: "Pondok Pesantren Nurul Falah",
      clientNote: "Indonesia \u00b7 freelance side project",
      role: "Fullstack developer (solo)",
      year: "2026",
      stack: ["Laravel 13", "Filament v5", "Rumahweb (shared hosting)"],
      link: "https://nurulfalah.ponpes.id",
      hook: "Situs company profile dan CMS admin untuk pesantren. Dibangun fullstack dari nol dalam sekitar dua minggu.",
      overview: [
        "Nurul Falah adalah lembaga pendidikan Islam di Bandung yang berdiri sejak 2006 dan menjalankan tiga jenjang pendidikan terakreditasi. Sebelum proyek ini, mereka belum punya kehadiran digital resmi sama sekali. Semuanya masih manual, mulai dari profil sekolah, program, sampai PPDB.",
        "Saya ambil ini sebagai side project: membangun website publik sekaligus admin panel Filament, supaya staf sekolah yang non-teknis bisa mengelola konten sendiri (artikel, galeri, program, fasilitas, PPDB) tanpa perlu menyentuh kode sama sekali."
      ],
      myRole: "fullstack developer tunggal di proyek ini. Saya membangun website publik dan seluruh CMS Filament, sekaligus menangani deployment ke shared hosting.",
      approach: [
        "Membangun website publik di sekitar satu tujuan saja: mengantar pengunjung, kebanyakan orang tua, dari sekadar mengenal sekolah sampai akhirnya mendaftar atau berdonasi.",
        "Membangun admin panel sebagai deliverable utama, lengkap dengan modul artikel yang punya rich text bersih, slug otomatis, kategori, tag, profil penulis, kalkulasi waktu baca, dan workflow draft/scheduled-publish, ditambah modul-modul yang lebih sederhana untuk program, fasilitas, dan galeri.",
        "Men-deploy aplikasi Laravel 13 yang modern ke shared hosting Rumahweb, yang sebetulnya tidak dirancang untuk framework seperti ini, dengan pendekatan folder-split deployment."
      ],
      challenges: [
        { p: "Shared hosting punya struktur direktori yang ketat dan tidak cocok untuk deployment Laravel standar.", s: "Memakai pendekatan folder-split deployment supaya aplikasi tetap bisa berjalan dalam batasan hosting." },
        { p: "Domain sempat expired di tengah proyek, diperparah masalah duplicate billing, sampai bikin website yang sudah live jadi down.", s: "Menyelesaikan konflik billing dan memulihkan domain, sampai website kembali ke kondisi live yang sehat." }
      ],
      outcome: [
        { k: "~2 minggu", v: "dari kickoff ke live" },
        { k: "Live", v: "nurulfalah.ponpes.id, dikelola staf sekolah" }
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
      hook: "Change requests and bugfixes on ERA Indonesia's web platform. Worked in parallel with the ERA Mobile app.",
      overview: [
        "ERA Indonesia is the web platform for ERA Real Estate's Indonesian master franchise. 100+ branch offices. Property search and listings, agent recruitment, training content.",
        "I took on change requests and bugfixes on this platform as a freelancer. Also did CR and bugfix work on the ERA Mobile app in parallel. Not a from-scratch build."
      ],
      myRole: "Freelance developer. Change requests and bugfixes on the web platform.",
      approach: [
        "Worked inside the existing codebase. Prioritized fixes and CRs that shipped without disrupting live property listings and agent workflows.",
        "Coordinated with the ERA Mobile work when the platforms shared data (listings, member portal)."
      ],
      challenges: [
        { p: "Changes had to ship on a live property portal without disrupting active listings or agent recruitment.", s: "Scoped each CR narrowly and verified against production data before release." }
      ],
      outcome: [
        { k: "Live", v: "platform stayed up throughout the engagement" },
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
      stack: ["Custom backend", "Responsive frontend"],
      hook: "Change request dan bugfix di platform web ERA Indonesia, dikerjakan paralel dengan app ERA Mobile.",
      overview: [
        "ERA Indonesia adalah platform web untuk master franchise Indonesia dari ERA Real Estate, yang punya lebih dari 100 kantor cabang. Platform ini mencakup pencarian dan listing properti, rekrutmen agen, sampai konten training.",
        "Saya mengerjakan change request dan bugfix di platform ini sebagai freelancer, sekaligus mengerjakan CR dan bugfix di app ERA Mobile secara paralel. Bukan proyek build dari nol."
      ],
      myRole: "Freelance developer, mengerjakan change request dan bugfix di platform web.",
      approach: [
        "Bekerja di dalam codebase yang sudah ada, memprioritaskan fix dan CR yang bisa naik ke production tanpa mengganggu listing properti yang live maupun alur kerja agen.",
        "Berkoordinasi dengan pekerjaan di ERA Mobile setiap kali kedua platform berbagi data yang sama, seperti listing dan member portal."
      ],
      challenges: [
        { p: "Setiap perubahan harus naik ke production di portal properti yang live, tanpa mengganggu listing aktif atau proses rekrutmen agen.", s: "Membatasi scope tiap CR supaya tetap sempit, lalu memverifikasinya terhadap data produksi sebelum rilis." }
      ],
      outcome: [
        { k: "Live", v: "platform tetap up sepanjang engagement" },
        { k: "Paralel", v: "dikerjakan bersamaan dengan CR/bugfix di ERA Mobile" }
      ]
    }
  }
};
