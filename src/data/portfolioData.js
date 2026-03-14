// Portfolio data for Firman Naufal Aryaputra

export const personalInfo = {
  name: "Firman Naufal Aryaputra",
  tagline: "Fullstack Web Developer & AI Enthusiast",
  email: "firmanarpp@gmail.com",
  phone: "081717444053",
  whatsapp: "6281717444053",
  about: `Berpengalaman dalam menciptakan solusi digital cerdas dan inovatif. 
Memiliki keterampilan kuat dalam implementasi Deep Learning, analisis data, 
dan Web development, serta mampu mengintegrasikan teknologi Generative AI 
untuk meningkatkan efisiensi sistem.`,
  typingRoles: [
    "Building Smart Web Solutions",
    "Integrating Generative AI",
    "Crafting Fullstack Apps",
    "Exploring Deep Learning",
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "cyan",
    items: [
      { name: "React.js / Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript / TypeScript", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "emerald",
    items: [
      { name: "Node.js / Express", level: 78 },
      { name: "PHP / Laravel", level: 75 },
      { name: "REST API Design", level: 82 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    color: "cyan",
    items: [
      { name: "MySQL", level: 85 },
      { name: "XAMPP / PHPMyAdmin", level: 86 },
      { name: "Supabase / Firebase", level: 80 },
    ],
  },
  {
    category: "Data Science",
    icon: "BarChart2",
    color: "emerald",
    items: [
      { name: "Python / Pandas / NumPy", level: 85 },
      { name: "Data Visualization", level: 78 },
      { name: "Scikit-learn", level: 75 },
    ],
  },
  {
    category: "Deep Learning",
    icon: "Brain",
    color: "cyan",
    items: [
      { name: "TensorFlow / PyTorch", level: 78 },
      { name: "Computer Vision (CNN)", level: 72 },
      { name: "NLP / Transformers", level: 68 },
    ],
  },
  {
    category: "Generative AI",
    icon: "Sparkles",
    color: "emerald",
    items: [
      { name: "LLM Integration (GPT/Gemini)", level: 80 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
];

export const experiences = [
  {
    type: "experience",
    title: "Intern Web Developer",
    organization: "KPU Jawa Tengah",
    period: "2025",
    description:
      "Merancang aplikasi web inventaris ruangan yang responsif dan optimalisasi basis data. Bertanggung jawab pada seluruh siklus pengembangan mulai dari desain UI hingga deployment.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    icon: "Briefcase",
  },
];

export const education = [
  {
    type: "education",
    title: "Teknik Informatika",
    organization: "Universitas Dian Nuswantoro",
    period: "2022 – 2026",
    description:
      "Mendalami ilmu komputer, pengembangan perangkat lunak, kecerdasan buatan, dan sistem informasi.",
    tags: ["Algoritma", "AI", "Web Dev", "Data Science"],
    icon: "GraduationCap",
  },
];

export const certifications = [
  {
    type: "certification",
    title: "Deep Learning Institute",
    organization: "NVIDIA",
    period: "Juni 2025",
    description:
      "Sertifikasi internasional di bidang Deep Learning mencakup neural networks, computer vision, dan aplikasi AI.",
    tags: ["Deep Learning", "NVIDIA", "Neural Networks"],
    icon: "Award",
  },
  {
    type: "certification",
    title: "AI Opportunity Fund",
    organization: "UDINUS",
    period: "Oktober 2025",
    description:
      "Program intensif membangun solusi AI untuk kebutuhan industri dan masyarakat.",
    tags: ["Generative AI", "AI Solutions"],
    icon: "Award",
  },
  {
    type: "certification",
    title: "Software Engineering",
    organization: "RevoU",
    period: "Maret 2025",
    description:
      "Bootcamp Software Engineering mencakup frontend, backend, database design, dan agile development.",
    tags: ["Fullstack", "Agile", "System Design"],
    icon: "Award",
  },
];

export const projects = [
  {
    id: 1,
    title: "Warisan Kain - Batik Premium",
    category: "Frontend",
    description:
      "Landing page premium untuk toko batik dengan desain elegan, animasi scroll, filter produk berdasarkan kategori, dan integrasi keranjang belanja.",
    tech: ["React.js", "Framer Motion", "TailwindCSS", "Vite"],
    github: "https://github.com/Firmanarpp/WarisanKain.git",
    demo: "https://warisan-kain.vercel.app/",
    gradient: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.2)",
  },
  {
    id: 2,
    title: "DetikAdzan - Jadwal Sholat & Imsakiyah",
    category: "API Integration",
    description:
      "Aplikasi jadwal sholat real-time dengan auto-deteksi lokasi pengguna, tampilan imsakiyah, countdown waktu sholat berikutnya, dan pencarian kota.",
    tech: ["Vue.js", "Axios", "Aladhan API", "TailwindCSS"],
    github: "https://github.com/Firmanarpp/DetikAdzan.git",
    demo: "https://detik-adzan.vercel.app/",
    gradient: "from-violet-500/20 to-purple-500/20",
    glowColor: "rgba(139, 92, 246, 0.2)",
  },
  {
    id: 3,
    title: "OrangeCarwash77",
    category: "Web Application",
    description:
      "Landing page modern untuk jasa cuci mobil profesional dengan fitur booking, showcase layanan, galeri hasil pengerjaan, dan desain yang responsif serta elegan.",
    tech: ["React.js", "TailwindCSS", "Framer Motion", "Vite"],
    github: "https://github.com/Firmanarpp/OrangeCarwash77.git",
    demo: "https://orange-carwash77.vercel.app",
    gradient: "from-orange-500/20 to-red-500/20",
    glowColor: "rgba(249, 115, 22, 0.2)",
  },
];

export const publications = [
  {
    id: 1,
    title: "Monk Skin Tone Classification: RMSprop vs Adam Optimizer in MobileNetV2",
    journal: "Jurnal Informatika: Jurnal Pengembangan IT (JPIT)",
    vol: "10",
    no: "3",
    year: "2025",
    authors: "Firman Naufal Aryaputra, Christy Atika Sari, Eko Hari Rachmawanto",
    doi: "https://doi.org/10.30591/jpit.v10i3.8886",
    summary: "Riset ini mengembangkan sistem klasifikasi warna kulit manusia menggunakan skala Monk Skin Tone (MST) dengan arsitektur MobileNetV2. Menguji optimasi Adam dan RMSprop untuk mencapai akurasi hingga 98.26% guna mendukung personalisasi fashion yang inklusif.",
    tags: ["Deep Learning", "MobileNetV2", "Computer Vision", "Skin Tone Classification"],
  },
];
