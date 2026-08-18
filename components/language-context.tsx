"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

export type Language = "en" | "ja"
type Copy = Record<string, { en: string; ja: string }>

const copy: Copy = {
  home: { en: "Home", ja: "ホーム" }, resources: { en: "Resources", ja: "リソース" }, events: { en: "Events", ja: "イベント" },
  about: { en: "About", ja: "私たちについて" }, contact: { en: "Contact", ja: "お問い合わせ" }, verify: { en: "Verify", ja: "認証" },
  changeLanguage: { en: "Switch to Japanese", ja: "英語に切り替える" }, toggleNavigation: { en: "Toggle navigation", ja: "ナビゲーションを切り替える" },
  heroTitleA: { en: "Learn.", ja: "学ぶ。" }, heroTitleB: { en: "Build.", ja: "創る。" }, heroTitleC: { en: "Lead.", ja: "導く。" },
  heroDescription: { en: "A student-led community where curiosity becomes capability through practical learning, ambitious events, and ideas built together. From hands-on workshops and research sessions to hackathons, cybersecurity challenges, robotics, and esports, we give students the space to experiment, collaborate, lead, and build experience that reaches beyond the classroom.", ja: "好奇心を力に変える学生主導のコミュニティ。実践的な学び、挑戦的なイベント、そして仲間と創るアイデアを通じて成長します。ワークショップや研究セッションから、ハッカソン、サイバーセキュリティ競技、ロボティクス、eスポーツまで、学生が試し、協力し、リーダーシップを発揮し、教室の外へ広がる経験を積める場所を提供します。" },
  exploreEvents: { en: "Explore what’s next", ja: "次のイベントを見る" }, browseResources: { en: "Browse resources", ja: "リソースを見る" },
  programming: { en: "Programming", ja: "プログラミング" }, programmingDetail: { en: "Languages & logic", ja: "言語とロジック" },
  cyberSecurity: { en: "Cybersecurity", ja: "サイバーセキュリティ" }, cyberDetail: { en: "Defence & CTF", ja: "防御とCTF" },
  innovation: { en: "Innovation", ja: "イノベーション" }, innovationDetail: { en: "Ideas into prototypes", ja: "アイデアを試作品へ" },
  esports: { en: "Esports", ja: "eスポーツ" }, esportsDetail: { en: "Compete as one", ja: "チームで挑戦" },
  hubTitle: { en: "A resource hub built around the way students learn.", ja: "学生の学び方に寄り添うリソースハブ。" },
  hubDescription: { en: "Student-created notes and practical references, organised for quick revision and deeper understanding.", ja: "学生が作成したノートや実践資料を、復習や理解を深めやすい形で整理しています。" },
  researchShowcaseLabel: { en: "Workshop outcomes", ja: "ワークショップ成果" },
  researchShowcaseTitle: { en: "Research papers written by our students.", ja: "学生が書き上げた研究論文。" },
  researchShowcaseDescription: { en: "These submissions show how ideas from the research workshop were developed into structured papers, proposals, and technical studies.", ja: "研究ワークショップで生まれたアイデアが、構成のある論文、提案書、技術研究へと発展した成果を紹介します。" },
  studentResearchPaper: { en: "Student paper", ja: "学生論文" },
  researchPaperCount: { en: "student papers", ja: "学生論文" },
  seeShowcase: { en: "See the showcase", ja: "ショーケースを見る" },
  researchShowcaseHint: { en: "Open the showcase below to read the full submissions.", ja: "下のショーケースで各提出論文の全文を確認できます。" },
  webDevelopment: { en: "Web development", ja: "ウェブ開発" }, databases: { en: "Databases", ja: "データベース" },
  coreSyntax: { en: "Core syntax, OOP, data structures", ja: "基本構文、OOP、データ構造" }, fullStack: { en: "Frontend, backend, and full stack", ja: "フロントエンド、バックエンド、フルスタック" },
  dataDetail: { en: "SQL, modelling, and NoSQL", ja: "SQL、モデリング、NoSQL" }, securityDetail: { en: "Web security and cryptography", ja: "ウェブセキュリティと暗号技術" },
  curated: { en: "Curated for clarity", ja: "分かりやすさを重視" }, curatedDetail: { en: "Every listed resource is reviewed before public release.", ja: "すべてのリソースは公開前に内容を確認しています。" },
  seeCollection: { en: "See the collection", ja: "コレクションを見る" }, previewCatalogue: { en: "Preview catalogue", ja: "公開予定カタログ" },
  learningCollection: { en: "Learning collection", ja: "学習コレクション" }, catalogueIntro: { en: "Browse what is being prepared. Downloads appear only after files are reviewed and published.", ja: "準備中の教材をご覧いただけます。確認・公開済みのファイルのみダウンロード可能になります。" },
  searchTopics: { en: "Search topics…", ja: "トピックを検索…" }, filterProgramme: { en: "Filter by programme", ja: "プログラムで絞り込む" }, allProgrammes: { en: "All programmes", ja: "すべてのプログラム" },
  programmes: { en: "programmes", ja: "プログラム" }, plannedResources: { en: "planned resources", ja: "公開予定リソース" }, publicationProgress: { en: "Publication in progress", ja: "公開準備中" }, preparing: { en: "Preparing", ja: "準備中" }, noResults: { en: "No planned resources match that search.", ja: "検索条件に一致するリソースはありません。" }, scrollResources: { en: "Scrollable resource list", ja: "スクロール可能なリソース一覧" },
  eventsLabel: { en: "Events", ja: "イベント" }, eventsTitle: { en: "Competition creates momentum.", ja: "競い合いが、新しい勢いを生む。" }, eventsIntro: { en: "From focused CTFs to campus-wide esports, our events turn shared interests into practical confidence.", ja: "本格的なCTFからキャンパス規模のeスポーツまで、共通の興味を実践的な自信へと変えます。" },
  upcoming: { en: "Upcoming", ja: "開催予定" }, presents: { en: "LNBTI IT Club presents", ja: "LNBTI IT Club 主催" }, eventDescription: { en: "A campus-wide technology experience bringing together innovation, cybersecurity, robotics, and competitive gaming through four signature events.", ja: "イノベーション、サイバーセキュリティ、ロボティクス、競技ゲームを4つの主要イベントで結ぶ、キャンパス全体のテクノロジー体験です。" }, venue: { en: "LNBTI campus premises", ja: "LNBTIキャンパス構内" }, registerInterest: { en: "Registration details coming soon", ja: "参加登録の詳細は近日公開" },
  previously: { en: "Previously at the club", ja: "これまでのイベント" }, archive: { en: "Archive 2024—2025", ja: "アーカイブ 2024—2025" }, esportsType: { en: "Esports", ja: "eスポーツ" }, techShowdown: { en: "Tech showdown", ja: "技術コンテスト" }, nationalCtf: { en: "National CTF", ja: "全国CTF" },
  workshopType: { en: "Workshop", ja: "ワークショップ" }, conductedBy: { en: "Conducted by", ja: "講師" }, previousEvents: { en: "Previous events", ja: "前のイベント" }, nextEvents: { en: "Next events", ja: "次のイベント" }, archiveUpdated: { en: "Archive 2024—2026", ja: "アーカイブ 2024—2026" },
  galleryLabel: { en: "Inside the action", ja: "イベントの舞台裏" }, galleryTitle: { en: "Moments that brought us together.", ja: "仲間とつながった瞬間。" }, galleryDescription: { en: "A moving snapshot of the workshops, competitions, late-game comebacks, and shared wins that shape our community.", ja: "ワークショップ、大会、逆転の瞬間、そして共に喜んだ勝利。私たちのコミュニティを形づくる思い出です。" }, galleryPrevious: { en: "Previous gallery photo", ja: "前のギャラリー写真" }, galleryNext: { en: "Next gallery photo", ja: "次のギャラリー写真" }, galleryPhoto: { en: "Event photo", ja: "イベント写真" },
  aboutLabel: { en: "About the club", ja: "クラブについて" }, aboutTitle: { en: "Technology is better when no one builds alone.", ja: "テクノロジーは、仲間と創ることでさらに良くなる。" }, aboutDescription: { en: "We connect students across disciplines to learn from one another, test ambitious ideas, and create opportunities that extend beyond the classroom.", ja: "分野を越えて学生をつなぎ、互いに学び、意欲的なアイデアを試し、教室の外へ広がる機会を創ります。" },
  studentLed: { en: "Student-led", ja: "学生主導" }, studentLedDetail: { en: "A community shaped by the people learning in it.", ja: "学ぶ学生自身が形づくるコミュニティです。" }, learnDoing: { en: "Learn by doing", ja: "実践から学ぶ" }, learnDoingDetail: { en: "Workshops, competitions, and projects over passive theory.", ja: "講義だけでなく、ワークショップ、大会、プロジェクトを重視します。" }, shareOpenly: { en: "Share openly", ja: "知識を共有する" }, shareOpenlyDetail: { en: "Peer-reviewed resources that help everyone move forward.", ja: "仲間が確認した教材で、全員の前進を支えます。" }, stayCurious: { en: "Stay curious", ja: "好奇心を持ち続ける" }, stayCuriousDetail: { en: "Space to test ideas across emerging technologies.", ja: "新しい技術を横断し、アイデアを試せる場所です。" },
  credentialsLabel: { en: "Verified achievement", ja: "実績認証" }, credentialsTitle: { en: "Trust every achievement.", ja: "すべての実績に、確かな信頼を。" }, credentialsDescription: { en: "Confirm club-issued certificates through our dedicated verification portal—quickly, securely, and transparently.", ja: "クラブが発行した証明書を専用ポータルで、迅速・安全・透明に確認できます。" }, openPortal: { en: "Open verification portal", ja: "認証ポータルを開く" }, instantChecks: { en: "Instant checks", ja: "即時確認" }, instantChecksDetail: { en: "Validate a credential in moments.", ja: "証明書をすぐに確認できます。" }, secureRecords: { en: "Secure records", ja: "安全な記録" }, secureRecordsDetail: { en: "Protected, dependable certificate data.", ja: "保護された信頼できる証明書データ。" }, shareConfidence: { en: "Share with confidence", ja: "安心して共有" }, shareConfidenceDetail: { en: "Give employers and institutions a trusted reference.", ja: "企業や教育機関に信頼できる情報を提供します。" },
  contactLabel: { en: "Keep in touch", ja: "つながりましょう" }, contactTitle: { en: "Have an idea for the club?", ja: "クラブで実現したいアイデアがありますか？" }, contactDescription: { en: "Propose a workshop, collaborate on an event, or share a resource through one of our official social channels.", ja: "ワークショップの提案、イベントでの協力、教材の共有は、公式SNSからご連絡ください。" }, contactNote: { en: "Messages are handled by the student club team.", ja: "メッセージは学生クラブチームが対応します。" }, officialChannel: { en: "Official channel", ja: "公式チャンネル" },
  footerTagline: { en: "Built by students, for what comes next.", ja: "学生が創る、次の未来のために。" }, backTop: { en: "Back to top", ja: "ページ上部へ戻る" }, rights: { en: "IT Club of LNBTI. All rights reserved.", ja: "IT Club of LNBTI. All rights reserved." },
  meetCommunity: { en: "Meet the community", ja: "コミュニティを知る" },
  clubCommunity: { en: "Community", ja: "コミュニティ" }, studentPowered: { en: "Student-powered", ja: "学生の力で運営" },
  clubEvents: { en: "Experiences", ja: "体験" }, yearRound: { en: "All year round", ja: "年間を通して開催" },
  clubChallenges: { en: "Challenges", ja: "チャレンジ" }, learnCompete: { en: "Learn & compete", ja: "学び、競い合う" },
  communityCreativity: { en: "COMMUNITY / CREATIVITY", ja: "コミュニティ / 創造性" }, since2024: { en: "Since 2024", ja: "2024年設立" }, ideasImpact: { en: "Ideas into impact", ja: "アイデアを成果へ" },
  clubExperienceTitle: { en: "A place to belong, experiment, and move forward.", ja: "つながり、試し、前へ進むための場所。" },
  clubExperienceDescription: { en: "The IT Club brings students together through experiences that build confidence, friendships, leadership, and career momentum.", ja: "IT Clubは、自信、友情、リーダーシップ、キャリアへの勢いを育む体験を通じて学生をつなぎます。" },
}

type LanguageContextType = { language: Language; toggleLanguage: () => void; t: (key: string) => string }
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  useEffect(() => { document.documentElement.lang = language; localStorage.setItem("itclub-language", language) }, [language])
  useEffect(() => { const saved = localStorage.getItem("itclub-language"); if (saved === "ja") setLanguage("ja") }, [])
  const value = useMemo(() => ({ language, toggleLanguage: () => setLanguage((current) => current === "en" ? "ja" : "en"), t: (key: string) => copy[key]?.[language] ?? key }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
