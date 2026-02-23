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
    // New Translations
    categoryGames: 'หมวดหมู่เกม',
    categoryItems: 'ประเภทสินค้า',
    allGames: 'เกมทั้งหมด',
    action: 'Action',
    rpg: 'RPG',
    fps: 'FPS',
    moba: 'MOBA',
    allTypes: 'ประเภททั้งหมด',
    typeAccount: 'บัญชี (Account)',
    typeItem: 'ไอเทม (Item)',
    typeBoost: 'บริการรับจ้างเล่น (Boosting)',
    marketInsight: 'ข้อมูลเชิงลึกของตลาด',
    suggestedPrice: 'ราคาประเมินสำหรับสินค้านี้',
    basedOnMarket: 'อิงจากสถิติราคาเฉลี่ยในตลาดปัจจุบัน',
    stock: 'จำนวนในสต็อก:',
    instantDelivery: 'จัดส่งทันที',
    // End New Translations
    oftenSearched: 'ค้นหาบ่อยใน Steam',
    topSellers: 'ผู้ขายยอดนิยม 90 วันล่าสุด — Steam',
    feedbacks: 'ความคิดเห็น',
    priceFrom: 'ราคาเริ่มต้น',
    upTo: 'ถึง',
    searchTitle: 'ค้นหาด้วยชื่อ',
    showFilters: 'แสดงตัวกรอง',
    alwaysShow: 'แสดงเสมอ',
    reset: 'รีเซ็ต',
    shownAccounts: 'แสดง ~ 351,942 สินค้า',
    default: 'ค่าเริ่มต้น',
    cheapFirst: 'ราคาถูกก่อน',
    expensiveFirst: 'ราคาแพงก่อน',
    newest: 'ใหม่ล่าสุด',
    oldest: 'เก่าสุด',
    saveSearch: 'บันทึกการค้นหา',
    steamAccounts: 'รายการสินค้า P2P',
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
    // New Translations
    categoryGames: 'Game Categories',
    categoryItems: 'Item Types',
    allGames: 'All Games',
    action: 'Action',
    rpg: 'RPG',
    fps: 'FPS',
    moba: 'MOBA',
    allTypes: 'All Types',
    typeAccount: 'Account',
    typeItem: 'In-Game Item',
    typeBoost: 'Boosting Service',
    marketInsight: 'Market Insight',
    suggestedPrice: 'Suggested Selling Price',
    basedOnMarket: 'Based on current market average statistics',
    stock: 'Stock:',
    instantDelivery: 'Instant Delivery',
    // End New Translations
    oftenSearched: 'Often searched in Steam',
    topSellers: 'Top sellers last 90 days — Steam',
    feedbacks: 'Feedbacks',
    priceFrom: 'Price from',
    upTo: 'up to',
    searchTitle: 'Search by title',
    showFilters: 'Show filters',
    alwaysShow: 'Always show',
    reset: 'Reset',
    shownAccounts: 'Shown ~ 351,942 listings',
    default: 'Default',
    cheapFirst: 'Cheap first',
    expensiveFirst: 'Expensive first',
    newest: 'Newest',
    oldest: 'Oldest',
    saveSearch: 'Save search',
    steamAccounts: 'P2P Listings',
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

const GAME_CATEGORIES = ['action', 'rpg', 'fps', 'moba'];
const ITEM_CATEGORIES = ['typeAccount', 'typeItem', 'typeBoost'];

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
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${p.active
                  ? 'bg-[#1a1a1a] border-emerald-500/50 text-emerald-400'
                  : 'bg-[#141414] border-white/5 text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </div>

        {/* Categories Panel */}
        <section className="bg-[#141414] border border-white/5 rounded-xl p-6">
          <div className="flex flex-col gap-6">

            {/* Game Categories */}
            <div>
              <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">{t.categoryGames}</h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-sm font-medium transition-colors">
                  {t.allGames}
                </button>
                {GAME_CATEGORIES.map((cat, idx) => (
                  <button key={idx} className="px-5 py-2 rounded-full bg-[#1a1a1a] border border-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                    {t[cat as keyof typeof t]}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5" />

            {/* Item Types */}
            <div>
              <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">{t.categoryItems}</h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-medium transition-colors">
                  {t.allTypes}
                </button>
                {ITEM_CATEGORIES.map((cat, idx) => (
                  <button key={idx} className="px-5 py-2 rounded-full bg-[#1a1a1a] border border-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                    {t[cat as keyof typeof t]}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Automated Pricing Suggestion Widget */}
        <section>
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="flex items-start gap-4 z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-blue-400" /> {t.marketInsight}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{t.basedOnMarket}</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a]/50 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 z-10 w-full sm:w-auto text-center sm:text-right">
              <p className="text-xs text-gray-400 mb-1">{t.suggestedPrice}</p>
              <div className="text-2xl font-bold text-white tracking-tight">
                $45.00 <span className="text-gray-500 font-medium text-lg">-</span> $65.00
              </div>
            </div>
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
        <div className="bg-[#141414] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors cursor-pointer group relative overflow-hidden">
          {/* Instant Delivery Badge */}
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            <Sparkles size={10} /> {t.instantDelivery}
          </div>

          <div className="flex justify-between items-start mb-3 mt-2">
            <h3 className="text-white font-medium flex items-center gap-2 group-hover:text-blue-400 transition-colors">
              <Monitor size={16} className="text-blue-400" /> Cs2 prime + inventory 25000r
            </h3>
            <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-md font-semibold text-sm">
              $ 202.95
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3 items-center">
            {/* Stock Badge */}
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded text-xs font-semibold flex items-center gap-1">
              <Box size={12} /> {t.stock} 45
            </span>
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
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded p-1 pr-3 border border-white/5">
              <img src="https://picsum.photos/seed/cs2/24/24" alt="CS2" className="w-6 h-6 rounded" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="text-[10px] text-purple-400 font-bold bg-purple-500/20 px-1 rounded">18,452</span>
              </div>
              <span className="text-xs font-medium text-gray-300 ml-1">CS2 Prime 23 lvl</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded p-1 pr-3 border border-white/5">
              <img src="https://picsum.photos/seed/beyond/24/24" alt="Beyond" className="w-6 h-6 rounded" referrerPolicy="no-referrer" />
              <span className="text-xs font-medium text-gray-300">Beyond: Two Souls</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded p-1 pr-3 border border-white/5">
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
