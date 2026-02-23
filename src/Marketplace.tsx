import { useState } from 'react';
import { 
  FileText, HelpCircle, Settings, TrendingUp, DollarSign, 
  Sparkles, Flag, ThumbsUp, Code, List, Wallet, Search,
  ChevronRight, ChevronLeft, AlertCircle, CheckCircle2,
  Heart, Filter, X, Monitor, Gamepad2, Box, Hexagon,
  Clock, ShieldAlert, AlertTriangle
} from 'lucide-react';

const translations = {
  TH: {
    rules: 'กฎและการรับประกัน',
    advices: 'คำแนะนำและคู่มือ',
    marketSettings: 'การตั้งค่าตลาด',
    accountUpgrades: 'อัปเกรดบัญชี',
    currency: 'อัตราแลกเปลี่ยนสกุลเงิน',
    newFeatures: 'ฟีเจอร์ใหม่',
    reportBug: 'รายงานข้อผิดพลาด',
    suggestIdea: 'เสนอไอเดีย',
    apiAccess: 'การเข้าถึง API',
    steamSorter: 'ตัวเรียงมูลค่าไอเทม Steam',
    topUp: 'เติมเงิน Steam',
    findMail: 'ค้นหาเจ้าของอีเมล',
    proxyProblem: 'ปัญหาเกี่ยวกับบริการพร็อกซี',
    proxyDesc: 'เรากำลังพบปัญหาเกี่ยวกับบริการพร็อกซี การตรวจสอบบัญชีอาจทำงานไม่ถูกต้อง โปรดอย่าสร้างปัญหาที่เกี่ยวข้องกับการตรวจสอบบัญชี',
    oftenSearched: 'ค้นหาบ่อยใน Steam',
    topSellers: 'ผู้ขายยอดนิยม 90 วันล่าสุด — Steam',
    feedbacks: 'ความคิดเห็น',
    priceFrom: 'ราคาเริ่มต้น',
    upTo: 'ถึง',
    searchTitle: 'ค้นหาด้วยชื่อ',
    showFilters: 'แสดงตัวกรอง',
    alwaysShow: 'แสดงเสมอ',
    reset: 'รีเซ็ต',
    shownAccounts: 'แสดง ~ 351,942 บัญชี',
    default: 'ค่าเริ่มต้น',
    cheapFirst: 'ราคาถูกก่อน',
    expensiveFirst: 'ราคาแพงก่อน',
    newest: 'ใหม่ล่าสุด',
    oldest: 'เก่าสุด',
    saveSearch: 'บันทึกการค้นหา',
    steamAccounts: 'ขายบัญชี Steam',
    warranty: 'รับประกัน 24 ชั่วโมง',
    played: 'เล่นรวม 4.10 ชม. ใน 2 สัปดาห์',
    lastSeen: 'พบล่าสุดเมื่อ 12 ก.พ. 2026',
    lastTransaction: 'วันที่ทำธุรกรรมล่าสุด 12 ก.พ. 2026',
    games: '+ 27 เกม'
  },
  EN: {
    rules: 'Rules and guarantee',
    advices: 'Advices & Guides',
    marketSettings: 'Market settings',
    accountUpgrades: 'Account Upgrades',
    currency: 'Currency Exchange Rates',
    newFeatures: 'New features',
    reportBug: 'Report a bug',
    suggestIdea: 'Suggest an idea',
    apiAccess: 'API Access',
    steamSorter: 'Steam item value sorter',
    topUp: 'Top up steam balance',
    findMail: 'Find out whose mail',
    proxyProblem: 'Problems with proxy service',
    proxyDesc: 'We are observing problems with proxy service, account validation may not work properly. Do not create issues related to account validation issues',
    oftenSearched: 'Often searched in Steam',
    topSellers: 'Top sellers last 90 days — Steam',
    feedbacks: 'Feedbacks',
    priceFrom: 'Price from',
    upTo: 'up to',
    searchTitle: 'Search by title',
    showFilters: 'Show filters',
    alwaysShow: 'Always show',
    reset: 'Reset',
    shownAccounts: 'Shown ~ 351,942 accounts',
    default: 'Default',
    cheapFirst: 'Cheap first',
    expensiveFirst: 'Expensive first',
    newest: 'Newest',
    oldest: 'Oldest',
    saveSearch: 'Save search',
    steamAccounts: 'Продажа аккаунтов Steam',
    warranty: '24 hours warranty',
    played: '4.10 hrs. total played for 2 weeks',
    lastSeen: 'Last seen on Feb 12, 2026',
    lastTransaction: 'Last transaction date Feb 12, 2026',
    games: '+ 27 games'
  }
};

const PLATFORMS = [
  { id: 'steam', icon: Monitor, active: true },
  { id: 'telegram', icon: Hexagon },
  { id: 'fortnite', icon: Box },
  { id: 'riot', icon: Gamepad2 },
  { id: 'ea', icon: Monitor },
  { id: 'epic', icon: Hexagon },
  { id: 'minecraft', icon: Box },
  { id: 'supercell', icon: Gamepad2 },
  { id: 'roblox', icon: Monitor },
  { id: 'wot', icon: Hexagon },
  { id: 'valorant', icon: Box },
];

const OFTEN_SEARCHED = [
  'Euro Truck Simulator 2', 'Arma Reforger', 'CS2 Prime', 'GTA 5', 'PUBG'
];

const TOP_SELLERS = [
  { name: 'scarly', feedbacks: 100, rating: 100, avatar: 'https://picsum.photos/seed/1/40/40' },
  { name: 'MAX_PAYNE', feedbacks: 19, rating: 100, avatar: 'https://picsum.photos/seed/2/40/40' },
  { name: 'Zlatan', feedbacks: 17, rating: 99, avatar: 'https://picsum.photos/seed/3/40/40' },
  { name: 'Kwerity', feedbacks: 16, rating: 100, avatar: 'https://picsum.photos/seed/4/40/40' },
  { name: 'Pa6oTsrra', feedbacks: 14, rating: 99, avatar: 'https://picsum.photos/seed/5/40/40' },
];

export default function Marketplace({ lang }: { lang: 'TH' | 'EN' }) {
  const t = translations[lang];

  const SIDEBAR_ITEMS = [
    { icon: FileText, label: t.rules },
    { icon: HelpCircle, label: t.advices },
    { icon: Settings, label: t.marketSettings },
    { icon: TrendingUp, label: t.accountUpgrades },
    { icon: DollarSign, label: t.currency },
    { divider: true },
    { icon: Sparkles, label: t.newFeatures },
    { icon: Flag, label: t.reportBug },
    { icon: ThumbsUp, label: t.suggestIdea },
    { icon: Code, label: t.apiAccess },
    { divider: true },
    { icon: List, label: t.steamSorter },
    { icon: Wallet, label: t.topUp },
    { icon: Search, label: t.findMail },
  ];

  return (
    <div className="flex flex-1 overflow-hidden bg-[#0a0a0a] text-gray-300">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 overflow-y-auto border-r border-white/5 p-4 hidden lg:block">
        <nav className="space-y-1">
          {SIDEBAR_ITEMS.map((item, idx) => {
            if (item.divider) {
              return <div key={idx} className="h-px bg-white/5 my-4 mx-2" />;
            }
            const Icon = item.icon!;
            return (
              <a
                key={idx}
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
              >
                <Icon size={18} className="text-gray-500" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
        
        {/* Alert Banner */}
        <div className="bg-[#141414] border border-white/5 rounded-xl p-5">
          <h3 className="font-semibold text-white mb-1">{t.proxyProblem}</h3>
          <p className="text-sm text-gray-400">
            {t.proxyDesc}
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={idx}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                  p.active 
                    ? 'bg-[#1a1a1a] border-emerald-500/50 text-emerald-400' 
                    : 'bg-[#141414] border-white/5 text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </div>

        {/* Often Searched */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Monitor size={20} className="text-blue-400" /> {t.oftenSearched}
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {OFTEN_SEARCHED.map((game, idx) => (
              <button key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141414] border border-white/5 hover:bg-white/10 transition-colors whitespace-nowrap text-sm font-medium">
                <img src={`https://picsum.photos/seed/${game}/20/20`} alt={game} className="w-5 h-5 rounded object-cover" referrerPolicy="no-referrer" />
                {game}
              </button>
            ))}
          </div>
        </section>

        {/* Top Sellers */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Monitor size={20} className="text-blue-400" /> {t.topSellers}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TOP_SELLERS.map((seller, idx) => (
              <div key={idx} className="bg-[#141414] border border-white/5 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/5 transition-colors cursor-pointer">
                <img src={seller.avatar} alt={seller.name} className="w-12 h-12 rounded-full mb-3" referrerPolicy="no-referrer" />
                <h4 className="font-medium text-white text-sm mb-1">{seller.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{t.feedbacks}: {seller.feedbacks}</p>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 size={12} /> {seller.rating} %
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="bg-[#141414] border border-white/5 rounded-xl p-4 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center bg-[#0a0a0a] rounded-lg border border-white/5 px-3 py-2 flex-1 md:max-w-xs">
              <span className="text-gray-500 text-sm mr-2">{t.priceFrom}</span>
              <span className="text-gray-600 mr-2">$</span>
              <input type="text" className="bg-transparent outline-none text-white w-full text-sm" />
            </div>
            <div className="flex items-center bg-[#0a0a0a] rounded-lg border border-white/5 px-3 py-2 flex-1 md:max-w-xs">
              <span className="text-gray-500 text-sm mr-2">{t.upTo}</span>
              <span className="text-gray-600 mr-2">$</span>
              <input type="text" className="bg-transparent outline-none text-white w-full text-sm" />
            </div>
            <div className="flex items-center bg-[#0a0a0a] rounded-lg border border-white/5 px-3 py-2 flex-1">
              <input type="text" placeholder={t.searchTitle} className="bg-transparent outline-none text-white w-full text-sm" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
              {t.showFilters} <ChevronDownIcon />
            </button>
            <span className="text-sm font-medium text-white">{t.alwaysShow}</span>
            <div className="flex-1"></div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {t.reset} <X size={16} />
            </button>
            <div className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm font-medium text-gray-400">
              {t.shownAccounts}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium">{t.default}</button>
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors">{t.cheapFirst}</button>
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors">{t.expensiveFirst}</button>
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">{t.newest} <ChevronDownIcon /></button>
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">{t.oldest} <ChevronDownIcon /></button>
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 ml-auto">
              <Heart size={16} /> {t.saveSearch}
            </button>
          </div>
        </section>

        {/* Product List Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Monitor size={20} className="text-blue-400" /> {t.steamAccounts}
          </h2>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded bg-emerald-500 text-white flex items-center justify-center text-sm font-medium">1</button>
            <button className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-sm font-medium">2</button>
            <button className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-sm font-medium">3</button>
            <button className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-sm font-medium">4</button>
            <button className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-sm font-medium">5</button>
            <button className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-sm font-medium">6</button>
            <ChevronRight size={16} className="mx-1" />
            <span className="text-sm font-medium mx-1">8799</span>
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-[#141414] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-white font-medium flex items-center gap-2 group-hover:text-blue-400 transition-colors">
              <Monitor size={16} className="text-blue-400" /> Cs2 prime + inventory 25000r
            </h3>
            <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-md font-semibold text-sm">
              $ 202.95
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-[#1a1a1a] rounded text-xs font-medium text-gray-400">SDA</span>
            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded text-xs font-medium flex items-center gap-1">
              <Clock size={12} /> {t.lastSeen}
            </span>
            <span className="px-3 py-1 bg-[#1a1a1a] rounded text-xs font-medium text-gray-400">{t.warranty}</span>
            <span className="px-3 py-1 bg-[#1a1a1a] rounded text-xs font-medium text-gray-400">{t.played}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded text-xs font-medium flex items-center gap-1">
              <AlertTriangle size={12} /> {t.lastTransaction}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded p-1 pr-3">
              <img src="https://picsum.photos/seed/cs2/24/24" alt="CS2" className="w-6 h-6 rounded" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="text-[10px] text-purple-400 font-bold bg-purple-500/20 px-1 rounded">18,452</span>
              </div>
              <span className="text-xs font-medium text-gray-300 ml-1">CS2 Prime 23 lvl</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded p-1 pr-3">
              <img src="https://picsum.photos/seed/beyond/24/24" alt="Beyond" className="w-6 h-6 rounded" referrerPolicy="no-referrer" />
              <span className="text-xs font-medium text-gray-300">Beyond: Two Souls</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded p-1 pr-3">
              <img src="https://picsum.photos/seed/soundpad/24/24" alt="Soundpad" className="w-6 h-6 rounded" referrerPolicy="no-referrer" />
              <span className="text-xs font-medium text-gray-300">Soundpad</span>
            </div>
            <div className="px-3 py-1.5 bg-[#1a1a1a] rounded text-xs font-medium text-gray-400">
              {t.games}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
