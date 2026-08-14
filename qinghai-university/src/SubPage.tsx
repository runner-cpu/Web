import { ArrowLeft } from 'lucide-react'

interface PageData {
  title: string
  description: string
  content: string
  highlights?: string[]
}

interface SubPageProps {
  page: PageData
  onBack: () => void
}

const SUB_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4'

export default function SubPage({ page, onBack }: SubPageProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#1B133C]">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          src={SUB_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[130%] object-cover object-top"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation bar */}
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 pt-4 md:pt-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-sm text-[#1B133C] text-sm font-medium hover:bg-white/90 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">返回首页</span>
            <span className="sm:hidden">返回</span>
          </button>

          <div className="bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-2.5 shadow-sm">
            <span className="font-['Instrument_Serif'] text-[#1B133C] text-lg italic">青海大学</span>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#1B133C]">
            <span className="bg-orange-500 rounded w-5 h-5 flex items-center justify-center text-white font-bold text-xs leading-none">
              青
            </span>
            青海大学 · {page.title}
          </div>

          {/* Heading */}
          <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white max-w-4xl">
            {page.title}
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85">
            {page.description}
          </p>

          {/* Content */}
          <div className="mt-8 max-w-2xl text-white/70 text-sm leading-relaxed">
            {page.content}
          </div>

          {/* Highlights */}
          {page.highlights && page.highlights.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {page.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-white/80 text-xs sm:text-sm border border-white/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}