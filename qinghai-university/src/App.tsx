import { useEffect, useRef, useState } from 'react'
import {
  Menu,
  X,
  BookOpen,
  Building2,
  FlaskConical,
  GraduationCap,
  TreePine,
  ArrowRight,
} from 'lucide-react'
import SubPage from './SubPage'

const VIDEOS = [
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    label: '金色高原',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    label: '碧波湖畔',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    label: '祁连林海',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    label: '宁静黎明',
  },
]

const NAV_LINKS = [
  { label: '关于我们', url: 'https://www.qhu.edu.cn/xxgk/xxjj.htm' },
  { label: '院系设置', url: 'https://www.qhu.edu.cn/yxsz.htm' },
  { label: '科学研究', url: 'https://www.qhu.edu.cn/kxyj/kxyj.htm' },
  { label: '校园文化', url: 'https://www.qhu.edu.cn/whqhu/whqhu.htm' },
  { label: '招生就业', url: 'https://www.qhu.edu.cn/zsjy/zsjy.htm' },
]

const STATS = ['3万+ 在校生', '2200+ 教职工', '12个 学院', '7个 博士学位授权点', '高原特色研究']

const MODULES = [
  {
    id: 'about',
    icon: BookOpen,
    title: '学校概况',
    desc: '办学历史与成就',
    page: {
      title: '学校概况',
      description:
        '青海大学坐落于青藏高原的明珠——西宁，是一所以工、农、医、管四大学科为主干，多学科协调发展的综合性大学。',
      content:
        '青海大学始建于1958年，经过六十余年的发展，已成为青海省唯一一所"双一流"建设高校。学校秉承"志比昆仑，学竞江河"的校训，扎根高原，服务西部，为国家培养了大批优秀人才。',
      highlights: ['双一流建设高校', '省部共建高校', '中西部高校综合实力提升工程'],
    },
  },
  {
    id: 'departments',
    icon: Building2,
    title: '院系设置',
    desc: '学院及研究所',
    page: {
      title: '院系设置',
      description:
        '学校设有15个学院、1个研究院，涵盖工、农、医、管、经、法、理、文等多个学科门类。',
      content:
        '下设机械工程学院、水利电力学院、土木工程学院、计算机技术与应用学院、化工学院、医学院、农牧学院、财经学院、马克思主义学院、继续教育学院等。拥有博士学位授权一级学科7个，硕士学位授权一级学科26个。',
      highlights: ['7个博士学位授权点', '26个硕士学位授权点', '15个学院'],
    },
  },
  {
    id: 'research',
    icon: FlaskConical,
    title: '科学研究',
    desc: '高原特色科研',
    page: {
      title: '科学研究',
      description:
        '依托青藏高原独特资源，开展高原医学、生态保护、盐湖化工等特色研究。',
      content:
        '学校拥有国家重点实验室1个，省部级重点实验室和工程研究中心30余个。近年来，承担国家级科研项目200余项，在高原医学、生态保护、盐湖资源开发、新能源等领域取得了一系列重要研究成果。',
      highlights: ['国家重点实验室', '30+省部级科研平台', '200+国家级项目'],
    },
  },
  {
    id: 'campus',
    icon: TreePine,
    title: '校园文化',
    desc: '校园生活与文化',
    page: {
      title: '校园文化',
      description:
        '以"志比昆仑，学竞江河"为校训，营造积极向上、多元包容的校园文化氛围。',
      content:
        '学校拥有各类学生社团100余个，涵盖学术科技、文化体育、志愿服务等多个领域。每年举办校园文化艺术节、体育运动会、科技文化节等大型活动，丰富学生的课余生活，培养学生的综合素质。',
      highlights: ['100+学生社团', '校园文化艺术节', '创新创业教育'],
    },
  },
  {
    id: 'admissions',
    icon: GraduationCap,
    title: '招生就业',
    desc: '招生政策与就业',
    page: {
      title: '招生就业',
      description:
        '面向全国招收本科生、硕士研究生和博士研究生，毕业生就业率保持在较高水平。',
      content:
        '学校面向全国31个省（自治区、直辖市）招生，涵盖工、农、医、管等多个学科门类。毕业生就业率连续多年保持在90%以上，深受用人单位好评。学校设有就业指导中心，为学生提供全方位的就业服务与指导。',
      highlights: ['全国31省市招生', '90%+就业率', '全方位就业指导服务'],
    },
  },
]

function App() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<string | null>(null)
  const cooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const switchVideo = (index: number) => {
    if (index === activeVideo || isTransitioning) return
    setActiveVideo(index)
    setIsTransitioning(true)
    cooldownRef.current = setTimeout(() => setIsTransitioning(false), 1000)
  }

  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearTimeout(cooldownRef.current)
    }
  }, [])

  // Subpage view
  if (currentPage) {
    const module = MODULES.find((m) => m.id === currentPage)
    if (module) {
      return <SubPage page={module.page} onBack={() => setCurrentPage(null)} />
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ---------- Background video layer ---------- */}
      <div className="absolute inset-0 z-0">
        {VIDEOS.map((video, index) => (
          <video
            key={video.url}
            src={video.url}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
              index === activeVideo ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* ---------- Dark gradient overlay for readability ---------- */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/50 pointer-events-none" />

      {/* ---------- Transparent PNG overlay ---------- */}
      <div className="absolute inset-0 z-[2]">
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover pointer-events-none animate-train-bob"
        />
      </div>

      {/* ---------- Content layer ---------- */}
      <div
        className={`absolute inset-0 z-[3] flex flex-col ${
          activeVideo === 2 ? 'theme-dark' : ''
        }`}
      >
        {/* Nav */}
        <header className="flex items-center justify-between px-6 sm:px-10 md:px-12 pt-8">
          <span className="text-white italic text-xl sm:text-2xl font-serif drop-shadow-lg">
            青海大学
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 liquid-glass rounded-full py-2 pl-6 pr-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 lg:px-4 py-2 font-sans text-white/90 text-sm transition-colors hover:text-white whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setCurrentPage('admissions')}
              className="font-sans text-sm bg-white text-black rounded-full px-5 py-2 ml-1 hover:bg-white/90 transition-colors cursor-pointer"
            >
              报考咨询
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative md:hidden liquid-glass rounded-full p-3 text-white cursor-pointer"
          >
            <X
              className={`absolute inset-0 m-auto h-6 w-6 transition-all duration-300 ${
                menuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-75 pointer-events-none'
              }`}
            />
            <Menu
              className={`h-6 w-6 transition-all duration-300 ${
                menuOpen
                  ? 'opacity-0 rotate-90 scale-75'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />
          </button>
        </header>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-mobile-fade-in" />
            <div className="relative h-full flex flex-col items-center justify-center gap-5 px-8 animate-mobile-panel-in">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl font-serif animate-mobile-link-in"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  setCurrentPage('admissions')
                }}
                className="font-sans bg-white text-black rounded-full px-8 py-3 mt-6 animate-mobile-cta-in cursor-pointer"
                style={{ animationDelay: '350ms' }}
              >
                报考咨询
              </button>
            </div>
          </div>
        )}

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Badge */}
          <div className="liquid-glass rounded-full px-5 py-2 font-sans text-xs sm:text-sm text-white/90">
            青海省唯一"双一流"建设高校 · 立足高原 · 面向全国
          </div>

          {/* Heading */}
          <h1
            className="mt-8 max-w-4xl text-white leading-[1.1] tracking-tight font-serif drop-shadow-2xl"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 5.5rem)' }}
          >
            在离天空最近的地方
            <br />
            点亮知识的灯塔
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-white/85 leading-relaxed font-sans text-base sm:text-lg drop-shadow-lg">
            青海大学坐落于青藏高原的明珠——西宁，是一所以工、农、医、管四大学科
            为主干，多学科协调发展的综合性大学。
          </p>

          {/* Interactive module cards */}
          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4 flex-wrap max-w-3xl">
            {MODULES.map((mod) => {
              const Icon = mod.icon
              return (
                <button
                  key={mod.id}
                  onClick={() => setCurrentPage(mod.id)}
                  className="group flex flex-col items-center gap-1.5 liquid-glass rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 min-w-[100px] sm:min-w-[120px] transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 group-hover:text-white" />
                  <span className="text-white/80 group-hover:text-white text-xs sm:text-sm font-sans font-medium whitespace-nowrap">
                    {mod.title}
                  </span>
                  <span className="text-white/50 group-hover:text-white/70 text-[10px] sm:text-xs font-sans">
                    {mod.desc}
                  </span>
                </button>
              )
            })}
          </div>

          {/* 招生简章 button */}
          <button
            onClick={() => setCurrentPage('admissions')}
            className="mt-8 font-sans text-sm bg-white text-black rounded-full px-8 py-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 font-medium cursor-pointer"
          >
            <span className="flex items-center gap-2">
              获取招生简章
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          {/* Video switcher */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {VIDEOS.map((video, index) => (
              <button
                key={video.label}
                type="button"
                onClick={() => switchVideo(index)}
                className={`font-sans text-xs sm:text-sm pb-2 transition-all duration-300 cursor-pointer ${
                  index === activeVideo
                    ? 'text-white font-medium border-b-2 border-white drop-shadow-lg'
                    : 'text-white/50 hover:text-white/80 border-b-2 border-transparent'
                }`}
              >
                {video.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spacer + bottom stats */}
        <div className="h-[8vh] shrink-0" aria-hidden="true" />
        <footer className="px-6 sm:px-10 md:px-12 pb-6 sm:pb-8">
          <div className="hidden md:flex items-center justify-center gap-3 font-sans text-white/70 text-xs sm:text-sm flex-wrap">
            {STATS.map((stat, index) => (
              <span key={stat} className="flex items-center gap-3">
                {index > 0 && <span className="text-white/30">|</span>}
                {stat}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </section>
  )
}

export default App