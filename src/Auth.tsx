import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Github, Facebook, Chrome, ArrowLeft } from 'lucide-react';

type AuthMode = 'signin' | 'signup';

export default function Auth({ onBack, lang }: { onBack: () => void, lang: 'TH' | 'EN' }) {
  const [mode, setMode] = useState<AuthMode>('signin');

  const t = {
    TH: {
      signIn: 'เข้าสู่ระบบ',
      signUp: 'สมัครสมาชิก',
      email: 'อีเมล',
      password: 'รหัสผ่าน',
      remember: 'จดจำฉันไว้',
      forgot: 'ลืมรหัสผ่าน?',
      noAccount: 'ยังไม่มีบัญชีใช่ไหม?',
      hasAccount: 'มีบัญชีอยู่แล้ว?',
      welcome: 'ยินดีต้อนรับสู่ Market Gaming',
      welcomeDesc: 'แพลตฟอร์มซื้อขายบัญชีเกมที่ปลอดภัยและราคาถูกที่สุด เข้าร่วมกับเราและเริ่มการซื้อขายได้เลยวันนี้',
      cardTitle: 'ค้นหาบัญชีที่ใช่สำหรับคุณ',
      cardDesc: 'เป็นหนึ่งในผู้เล่นที่ได้สัมผัสประสบการณ์การซื้อขายที่ง่ายที่สุด',
      back: 'กลับหน้าหลัก'
    },
    EN: {
      signIn: 'Sign in',
      signUp: 'Sign up',
      email: 'Email Address',
      password: 'Password',
      remember: 'Remember me',
      forgot: 'Forgot Password',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      welcome: 'Welcome to Market Gaming',
      welcomeDesc: 'The most secure and affordable gaming account trading platform. Join us and start trading today.',
      cardTitle: 'Get the right account for you',
      cardDesc: 'Be among the first to experience the easiest way to start run a business.',
      back: 'Back to Home'
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#050505] p-2 md:p-4 font-sans text-white flex flex-col selection:bg-white/20">
      <div className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 flex">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 z-50 flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </button>

        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 relative z-10">
          <div className="max-w-md w-full mx-auto">
            <div className="mb-12 flex justify-center lg:justify-start">
              <img src="https://picsum.photos/seed/logo/100/40" alt="Logo" className="h-10 object-contain" referrerPolicy="no-referrer" />
            </div>

            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-8">{mode === 'signin' ? t.signIn : t.signUp}</h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300">{t.email}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="email" 
                      placeholder="johndoe@gmail.com"
                      className="w-full bg-[#141414] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300">{t.password}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-[#141414] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                </div>

                {mode === 'signin' && (
                  <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-4 h-4 rounded border border-white/20 bg-[#141414] group-hover:border-white/40 flex items-center justify-center transition-colors">
                        {/* Check icon would go here when active */}
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{t.remember}</span>
                    </label>
                  </div>
                )}

                <button className="w-full bg-white text-black font-semibold rounded-xl py-3.5 hover:bg-gray-200 transition-colors mt-4">
                  {mode === 'signin' ? t.signIn : t.signUp}
                </button>
              </form>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
                <div className="text-gray-400">
                  {mode === 'signin' ? t.noAccount : t.hasAccount}{' '}
                  <button 
                    onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                    className="text-white font-medium hover:underline"
                  >
                    {mode === 'signin' ? t.signUp : t.signIn}
                  </button>
                </div>
                {mode === 'signin' && (
                  <button className="text-gray-400 hover:text-white transition-colors text-left sm:text-right">
                    {t.forgot}
                  </button>
                )}
              </div>

              <div className="mt-12 flex items-center gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#141414] border border-white/10 rounded-xl py-3 hover:bg-white/5 transition-colors">
                  <Chrome className="w-5 h-5" />
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#141414] border border-white/10 rounded-xl py-3 hover:bg-white/5 transition-colors">
                  <Github className="w-5 h-5" />
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#141414] border border-white/10 rounded-xl py-3 hover:bg-white/5 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-500" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Decorative Panel */}
        <div className="hidden lg:flex w-1/2 p-4">
          <div className="w-full h-full bg-[#111] rounded-[1.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-between">
            
            {/* Abstract Background Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-[80px]"></div>
            
            {/* Large Abstract Shape (like the 'A' in the screenshot, but generic) */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                <polygon points="50,10 90,90 10,90" opacity="0.5" />
                <polygon points="50,30 75,80 25,80" opacity="0.8" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center px-16 pt-32">
              <div className="mb-4">
                <span className="text-sm font-medium tracking-wider text-gray-400 uppercase">Market Gaming</span>
              </div>
              <h1 className="text-4xl font-semibold mb-6 leading-tight">
                {t.welcome}
              </h1>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                {t.welcomeDesc}
              </p>
              <div className="mt-8 text-sm font-medium text-gray-500">
                More than 17k people joined us, it's your turn
              </div>
            </div>

            {/* Bottom Card */}
            <div className="relative z-10 p-8 m-8 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl">
              <h3 className="text-xl font-semibold mb-3 max-w-xs">{t.cardTitle}</h3>
              <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
                {t.cardDesc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src="https://picsum.photos/seed/u1/32/32" className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" alt="User" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/u2/32/32" className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" alt="User" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/u3/32/32" className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" alt="User" referrerPolicy="no-referrer" />
                  <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-white/10 flex items-center justify-center text-[10px] font-medium text-white">
                    +2k
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
