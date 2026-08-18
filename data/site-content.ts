export const upcomingEvent = {
  title: "CyberVerse 2026",
  dateISO: "2026-09",
  date: { en: "September 2026", ja: "2026年9月" },
  activities: [
    { en: "Hackathon Event", ja: "ハッカソンイベント" },
    { en: "Capture the Flag Event", ja: "キャプチャー・ザ・フラッグ" },
    { en: "Robotics Exhibition", ja: "ロボティクス展示会" },
    { en: "Gaming Competition", ja: "ゲーム大会" },
  ],
  registrationUrl: null as string | null,
}

export const pastEvents = [
  { title: "Research Workshop — Day 03", titleJa: "研究ワークショップ — 第3回", date: { en: "31 July 2026", ja: "2026年7月31日" }, image: "/images/events/research-workshop-day03.jpg", typeKey: "workshopType", speaker: "Ms. Adithya", speakerJa: "アディティヤ講師", description: { en: "Writing a proper research paper, including its structure and referencing style.", ja: "適切な研究論文の書き方、論文構成、参考文献の記載スタイルを学びました。" } },
  { title: "Research Workshop — Day 02", titleJa: "研究ワークショップ — 第2回", date: { en: "24 July 2026", ja: "2026年7月24日" }, image: "/images/events/research-workshop-day02.jpg", typeKey: "workshopType", speaker: "Ms. Bhashini", speakerJa: "バシニ講師", description: { en: "Understanding how to read and analyse a research paper effectively.", ja: "研究論文を効果的に読み、分析する方法を学びました。" } },
  { title: "Research Workshop — Day 01", titleJa: "研究ワークショップ — 第1回", date: { en: "17 July 2026", ja: "2026年7月17日" }, image: "/images/events/research-workshop-day01.jpg", typeKey: "workshopType", speaker: "Professor Sandirigama", speakerJa: "サンディリガマ教授", description: { en: "Introducing students to why research is conducted and why it matters.", ja: "研究を行う理由と、その重要性について学ぶ入門セッションでした。" } },
  { title: "The Quantum Rift 2025", date: { en: "27 Jun 2025", ja: "2025年6月27日" }, image: "/images/events/quantum-rift.webp", typeKey: "esportsType", speaker: null, description: { en: "A high-energy campus esports tournament where teams tested their communication, tactics, and composure across competitive games.", ja: "チームが対戦ゲームを通してコミュニケーション、戦術、冷静さを競い合った、活気あふれる学内eスポーツ大会です。" } },
  { title: "Cyber Verse 2025", date: { en: "28 Mar 2025", ja: "2025年3月28日" }, image: "/images/events/cyber-verse.webp", typeKey: "techShowdown", speaker: null, description: { en: "A fast-paced technology challenge that brought together creative problem-solving, practical skills, teamwork, and innovation.", ja: "創造的な問題解決、実践スキル、チームワーク、イノベーションを結集したスピード感あふれる技術チャレンジです。" } },
  { title: "Battle of the Multiverse", date: { en: "26 Oct 2024", ja: "2024年10月26日" }, image: "/images/events/battle-multiverse.webp", typeKey: "nationalCtf", speaker: null, description: { en: "A national cybersecurity CTF where teams tackled web, cryptography, forensics, and logic challenges under competition pressure.", ja: "ウェブ、暗号、フォレンジック、論理問題にチームで挑戦した全国規模のサイバーセキュリティCTFです。" } },
] as const

export const eventGallery = [
  { image: "/images/events/event-photo-1.webp", alt: { en: "Gaming match in progress at an IT Club event", ja: "IT Clubイベントで進行中のゲーム対戦" } },
  { image: "/images/events/event-photo-2.webp", alt: { en: "Students attending a club competition", ja: "クラブ大会に参加する学生たち" } },
  { image: "/images/events/event-photo-3.webp", alt: { en: "An IT Club workshop and team session", ja: "IT Clubのワークショップとチームセッション" } },
  { image: "/images/events/event-photo-4.webp", alt: { en: "Competitors collaborating during an event", ja: "イベント中に協力する参加者" } },
  { image: "/images/events/event-photo-5.webp", alt: { en: "A focused esports team at the tournament", ja: "大会に集中するeスポーツチーム" } },
  { image: "/images/events/event-photo-6.webp", alt: { en: "The gaming tournament finals in action", ja: "盛り上がるゲーム大会の決勝" } },
  { image: "/images/events/event-photo-7.webp", alt: { en: "Students competing at the event setup", ja: "イベント会場で競い合う学生たち" } },
  { image: "/images/events/event-photo-8.webp", alt: { en: "A memorable community event moment", ja: "コミュニティイベントの思い出の一場面" } },
] as const

export const studentResearchPapers = [
  {
    slug: "ai-powered-decision-support-for-climate-resilient-agriculture",
    title: "AI-Powered Decision Support for Climate-Resilient Agriculture in Sri Lanka",
    student: "Janithma",
    summary: {
      en: "A paper exploring how decision-support ideas can help farming adapt to changing climate conditions.",
      ja: "変化する気候に対応するための意思決定支援の考え方を探る論文です。",
    },
    file: "AI-Powered Decision Support for Climate-Resilient Agriculture in Sri Lanka - Janithma_2.pdf",
  },
  {
    slug: "are-we-alone-search-for-extraterrestrial-life",
    title: "Are We Alone? The Search for Extraterrestrial Life",
    student: "Student proposal",
    summary: {
      en: "A research proposal focused on one of science's biggest questions and the evidence around it.",
      ja: "科学の大きな問いのひとつと、その証拠を扱う研究提案です。",
    },
    file: "Are we Alone, The Search for Extrateresstrial Life Research Proposal - ChatGPT.pdf",
  },
  {
    slug: "assessing-the-effectiveness-of-e-waste-recycling-practices",
    title: "Assessing the Effectiveness of E-Waste Recycling Practices",
    student: "Akash Wimukthi Rajapaksha",
    summary: {
      en: "A study that examines how well e-waste recycling practices work in practice.",
      ja: "電子廃棄物のリサイクル実践がどの程度機能しているかを検討した研究です。",
    },
    file: "Assessing the Effectiveness of E-Waste Recycling Practices - Akash wimukthi Rajapaksha.pdf",
  },
  {
    slug: "comparative-analysis-of-a-star-and-dijkstra",
    title: "Comparative Analysis of A* and Dijkstra Algorithms for Shortest Path Determination",
    student: "Dulketh",
    summary: {
      en: "A technical comparison of two shortest-path algorithms and where each one performs best.",
      ja: "2つの最短経路アルゴリズムを比較し、それぞれの強みを整理した論文です。",
    },
    file: "Comparative Analysis of A-Star and Dijkstra Algorithms for Shortest Path Determination - Dulketh.pdf",
  },
  {
    slug: "eldercare-connect",
    title: "ElderCare Connect",
    student: "Student project",
    summary: {
      en: "A concept paper centered on support, access, and connection for elder care.",
      ja: "高齢者ケアにおける支援、利用しやすさ、つながりをテーマにした構想論文です。",
    },
    file: "ElderCare Connect.pdf",
  },
  {
    slug: "eco-friendly-alternatives-to-single-use-foodware",
    title: "Analysis of Eco-Friendly Alternatives to Single-Use Foodware in Sri Lanka",
    student: "Afthal Ahamed",
    summary: {
      en: "A research proposal exploring cleaner alternatives to single-use foodware.",
      ja: "使い捨て食品容器に代わる環境負荷の少ない選択肢を探る研究提案です。",
    },
    file: "RESEARCH PROPOSAL - Analysis of Eco-Friendly Alternatives to Single-Use Foodware in Sri Lanka - Afthal Ahamed.pdf",
  },
  {
    slug: "touch-free-human-computer-interaction",
    title: "Touch-Free Human-Computer Interaction",
    student: "Shalika Dehideniya",
    summary: {
      en: "A paper focused on interaction methods that reduce physical contact with devices.",
      ja: "デバイスへの接触を減らす操作方法に焦点を当てた論文です。",
    },
    file: "Touch-Free Human-Computer Interaction - Shalika Dehideniya.pdf",
  },
] as const

export const socialChannels = [
  { label: "Instagram", detail: "@itcluboflnbti", href: "https://www.instagram.com/itcluboflnbti", icon: "instagram" },
  { label: "LinkedIn", detail: "Information Technology Club of LNBTI", href: "https://www.linkedin.com/company/information-technology-club-of-lnbti/", icon: "linkedin" },
  { label: "Facebook", detail: "IT Club community page", href: "https://www.facebook.com/share/18SH5fVBS7/", icon: "facebook" },
] as const
