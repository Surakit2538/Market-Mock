import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Globe,
  ArrowUpRight,
  User,
} from 'lucide-react';
import Marketplace from './Marketplace';
import Auth from './Auth';

const translations = {
  TH: {
    home: 'หน้าแรก',
    sell: 'ขายบัญชี',
    mass: 'อัปโหลดจำนวนมาก',
    search: 'ค้นหา',
    loginSignup: 'เข้าสู่ระบบ / สมัครสมาชิก',
    subtitle: 'แพลตฟอร์มซื้อขายที่ปลอดภัยในราคาถูก',
    website: 'เข้าสู่เว็บไซต์',
    dev: 'ผู้พัฒนา: บริษัท GAME TEAM'
  },
  EN: {
    home: 'Home',
    sell: 'Sell account',
    mass: 'Mass upload',
    search: 'Search',
    loginSignup: 'Login / Signup',
    subtitle: 'a secure trading platform with low prices',
    website: 'Go to Website',
    dev: 'Developer: GAME TEAM Company'
  }
};

type Lang = 'TH' | 'EN';

export default function App() {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('EN');
  const [view, setView] = useState<'landing' | 'market' | 'auth'>('landing');

  const t = translations[lang];

  if (view === 'auth') {
    return <Auth onBack={() => setView('landing')} lang={lang} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] p-2 md:p-4 font-sans text-white flex flex-col selection:bg-white/20">
      {/* Main App Container */}
      <div className="relative flex-1 rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 flex flex-col min-h-[800px]">
        {/* --- Background Effects --- */}
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* --- Navigation --- */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-10 relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer w-32" onClick={() => setView('landing')}>
            <img src="https://picsum.photos/seed/logo/100/40" alt="Logo" className="h-8 object-contain" referrerPolicy="no-referrer" />
          </div>

          {/* Center Nav (Desktop) */}
          <div className="hidden lg:flex items-center bg-[#141414]/80 backdrop-blur-md rounded-full p-1.5 border border-white/10 absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center px-4 gap-6 text-sm font-medium text-gray-400">
              <a href="#" className="text-white">{t.home}</a>
              <a href="#" className="hover:text-white transition-colors">{t.sell}</a>
              <a href="#" className="hover:text-white transition-colors">{t.mass}</a>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Search className="w-4 h-4" />
                <span>{t.search}</span>
              </button>
            </div>
          </div>

          {/* Right Action */}
          <div className="w-auto flex justify-end items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{lang}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-[#141414] border border-white/10 rounded-lg overflow-hidden flex flex-col z-50">
                  <button onClick={() => { setLang('TH'); setLangOpen(false); }} className="px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors">ไทย</button>
                  <button onClick={() => { setLang('EN'); setLangOpen(false); }} className="px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors">English</button>
                </div>
              )}
            </div>
            <button 
              onClick={() => setView('auth')}
              className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{t.loginSignup}</span>
            </button>
          </div>
        </nav>

        {/* --- Main Content Area --- */}
        {view === 'landing' ? (
          <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 mt-10 md:mt-0">
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-center mb-6 max-w-4xl leading-[1.1]"
            >
              Market Gaming
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-center max-w-2xl text-base md:text-lg mb-12 font-medium"
            >
              {t.subtitle}
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#141414] border border-white/10 backdrop-blur-md flex items-center justify-center gap-2 hover:bg-white/10 transition-colors font-medium">
                Line Official <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </button>
              <button 
                onClick={() => setView('market')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
              >
                {t.website}
              </button>
            </motion.div>
          </main>
        ) : (
          <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
            <Marketplace lang={lang} />
          </div>
        )}

      </div>

      {/* --- Footer --- */}
      <div className="py-8 px-4 md:px-12 flex justify-center items-center opacity-60">
        <p className="text-sm font-medium tracking-wide">{t.dev}</p>
      </div>
    </div>
  );
}
