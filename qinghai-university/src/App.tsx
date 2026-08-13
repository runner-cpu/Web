import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

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

const NAV_LINKS = ['关于我们', '院系设置', '科学研究', '校园生活', '招生就业']

const STATS = ['3万+ 在校生', '2200+ 教职工', '12个 学院', '7个 博士学位授权点', '高原特色研究']

function App() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

      {/* ---------- Transparent PNG overlay ---------- */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover pointer-events-none animate-train-bob"
        />
      </div>

      {/* ---------- Content layer ---------- */}
      <div
        className={`absolute inset-0 z-[2] flex flex-col ${
          activeVideo === 2 ? 'theme-dark' : ''
        }`}
      >
        {/* Nav */}
        <header className="flex items-center justify-between px-6 sm:px-10 md:px-12 pt-8">
          <span className="text-white italic text-xl sm:text-2xl font-serif">
            青海大学
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 liquid-glass rounded-full py-2 pl-6 pr-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 lg:px-4 py-2 font-sans text-white/90 text-sm transition-colors hover:text-white whitespace-nowrap"
              >
                {link}
              </a>
            ))}
            <span className="font-sans text-sm bg-white text-black rounded-full px-5 py-2 ml-1">
              报考咨询
            </span>
          </nav>

          {/* Mobile nav */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative md:hidden liquid-glass rounded-full p-3 text-white"
          >
            <X
              className={`absolute inset-0 m-auto h-6 w-6 transition-opacity duration-100 ${
                menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
            <Menu
              className={`h-6 w-6 transition-opacity duration-100 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
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
                  key={link}
                  href="#"
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl font-serif animate-mobile-link-in"
                >
                  {link}
                </a>
              ))}
              <span
                className="font-sans bg-white text-black rounded-full px-8 py-3 mt-6 animate-mobile-cta-in"
                style={{ animationDelay: '350ms' }}
              >
                报考咨询
              </span>
            </div>
          </div>
        )}

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div
            className={`liquid-glass rounded-full px-5 py-2 font-sans text-xs sm:text-sm hero-color ${
              activeVideo === 2 ? 'text-[#182C41]' : 'text-white/90'
            }`}
          >
            青海省唯一"双一流"建设高校 · 立足高原 · 面向全国
          </div>

          <h1
            className={`mt-8 max-w-4xl text-white leading-[1.1] tracking-tight font-serif hero-color ${
              activeVideo === 2 ? '!text-[#182C41]' : ''
            }`}
            style={{ fontSize: 'clamp(2.25rem, 8vw, 5.5rem)' }}
          >
            在离天空最近的地方
            <br />
            点亮知识的灯塔
          </h1>

          <p
            className={`mt-6 max-w-xl text-white/80 leading-relaxed font-sans text-base sm:text-lg hero-color ${
              activeVideo === 2 ? '!text-[#182C41]/80' : ''
            }`}
          >
            青海大学坐落于青藏高原的明珠——西宁，是一所以工、农、医、管四大学科
            为主干，多学科协调发展的综合性大学。建校六十余年来，为国家培养了大批
            扎根高原、服务西部的优秀人才。
          </p>

          {/* Email input */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className={`mt-10 liquid-glass rounded-full flex items-center max-w-[320px] sm:max-w-sm w-full pl-6 pr-2 py-2 ${
              activeVideo === 2 ? 'theme-dark-input' : ''
            }`}
          >
            <input
              type="email"
              placeholder="输入邮箱获取招生简章"
              className={`flex-1 bg-transparent border-none outline-none font-sans text-sm min-w-0 placeholder:text-white/60 focus:outline-none hero-color ${
                activeVideo === 2 ? 'text-[#182C41] placeholder:text-[#182C41]/55' : 'text-white'
              }`}
            />
            <button
              type="submit"
              className="font-sans text-sm bg-white text-black rounded-full px-5 py-2.5 ml-2 whitespace-nowrap"
            >
              立即获取
            </button>
          </form>

          {/* Video switcher */}
          <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {VIDEOS.map((video, index) => (
              <button
                key={video.label}
                type="button"
                onClick={() => switchVideo(index)}
                className={`font-sans text-xs sm:text-sm pb-2 video-switch-btn ${
                  index === activeVideo
                    ? 'video-switch-btn-active'
                    : 'video-switch-btn-inactive'
                }`}
              >
                {video.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spacer + bottom stats */}
        <div className="h-[11vh] shrink-0" aria-hidden="true" />
        <footer className="px-6 sm:px-10 md:px-12 pb-8 sm:pb-10">
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