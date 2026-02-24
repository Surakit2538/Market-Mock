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
    strategy: 'Strategy',
    sports: 'Sports',
    simulation: 'Simulation',
    etc: 'อื่นๆ (Etc)',
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
    strategy: 'Strategy',
    sports: 'Sports',
    simulation: 'Simulation',
    etc: 'Others',
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

const GAME_CATEGORIES = ['minecraft', 'roblox', 'streaming'];
const ITEM_CATEGORIES = ['typeAccount', 'typeItem', 'typeBoost'];

const MOCK_PRODUCTS = {
  minecraft: [
    { id: 1, title: 'Minecraft Premium Account (Full Access)', price: 15.99, stock: 12, type: 'SDA', games: ['Minecraft', 'Hypixel'] },
    { id: 2, title: 'Minecraft OptiFine Cape Account', price: 29.50, stock: 3, type: 'SDA', games: ['Minecraft', 'Optifine'] },
    { id: 3, title: 'Hypixel MVP+ Account Level 100+', price: 45.00, stock: 1, type: 'SDA', games: ['Minecraft', 'Hypixel'] },
  ],
  roblox: [
    { id: 4, title: 'Roblox Account with 10k Robux', price: 35.00, stock: 5, type: 'SDA', games: ['Roblox', 'Blox Fruits'] },
    { id: 5, title: 'Blox Fruits Max Level + Kitsune', price: 22.99, stock: 8, type: 'SDA', games: ['Roblox', 'Blox Fruits'] },
    { id: 6, title: 'Adopt Me Golden Unicorn Pet', price: 12.50, stock: 15, type: 'SDA', games: ['Roblox', 'Adopt Me'] },
  ],
  streaming: [
    { id: 7, title: 'Netflix Premium 1 Month Shared', price: 4.99, stock: 50, type: 'SDA', games: ['Netflix', 'Streaming'] },
    { id: 8, title: 'Spotify Premium Family Invite', price: 3.50, stock: 20, type: 'SDA', games: ['Spotify', 'Streaming'] },
    { id: 9, title: 'Disney+ 3 Months Private Account', price: 10.00, stock: 10, type: 'SDA', games: ['Disney+', 'Streaming'] },
  ]
};

export default function Marketplace({ lang }: { lang: 'TH' | 'EN' }) {
  const t = translations[lang];
  const [selectedGame, setSelectedGame] = useState('minecraft');

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

        {/* Categories Panel */}
        <section className="bg-[#141414] border border-white/5 rounded-xl p-5">
          <div className="flex flex-col gap-5">

            {/* Game Categories (Circular Cards - Scrollable Single Row) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-300">{t.categoryGames}</h2>
              </div>

              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x pt-2">
                {GAME_CATEGORIES.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGame(cat)}
                    className={`flex flex-col items-center gap-2 group outline-none shrink-0 snap-center w-[64px] sm:w-[80px] ${selectedGame === cat ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                  >
                    <div className={`w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden border-2 transition-all duration-300 bg-[#1a1a1a] shadow-lg relative group-active:scale-95 ${selectedGame === cat ? 'border-blue-500' : 'border-transparent group-hover:border-blue-500/50'}`}>
                      <div className={`absolute inset-0 transition-colors z-10 ${selectedGame === cat ? 'bg-transparent' : 'bg-black/40 group-hover:bg-black/20'}`} />
                      <img
                        src={
                          cat === 'minecraft' ? 'https://picsum.photos/seed/minecraft/100/100' :
                            cat === 'roblox' ? 'https://picsum.photos/seed/roblox/100/100' :
                              'https://picsum.photos/seed/streaming/100/100'
                        }
                        alt={cat}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className={`text-[11px] sm:text-xs font-semibold text-center leading-tight transition-colors ${selectedGame === cat ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                      {t[cat as keyof typeof t]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5" />

            {/* Item Types */}
            <div>
              <h2 className="text-sm font-semibold text-gray-300 mb-2">{t.categoryItems}</h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-1.5 rounded-full bg-[#0c1f17] text-emerald-400 border border-emerald-500/30 text-xs font-medium transition-colors">
                  {t.allTypes}
                </button>
                {ITEM_CATEGORIES.map((cat, idx) => (
                  <button key={idx} className="px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-gray-300 hover:bg-white/5 transition-colors text-xs font-medium">
                    {t[cat as keyof typeof t]}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Automated Pricing Suggestion Widget */}
        <section>
          <div className="bg-[#101017] border border-[#2a2a3c] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

            <div className="flex items-start gap-4 z-10">
              <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center shrink-0">
                <TrendingUp className="text-blue-400" size={20} />
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-semibold text-white flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-400" /> {t.marketInsight}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{t.basedOnMarket}</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 rounded-lg px-5 py-3 z-10 w-full sm:w-auto text-center sm:text-right">
              <p className="text-[10px] text-gray-400 mb-1">{t.suggestedPrice}</p>
              <div className="text-xl font-bold text-white tracking-tight flex items-baseline justify-center sm:justify-end gap-1.5">
                $45.00 <span className="text-gray-500 font-medium text-sm">-</span> $65.00
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-[#101017] border border-[#2a2a3c] rounded-xl p-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center bg-[#0a0a0a] rounded flex-1 md:max-w-[200px]">
              <div className="px-4 text-xs font-semibold text-gray-500 whitespace-nowrap border-r border-white/5 h-full flex items-center bg-[#141414] rounded-l">
                {t.priceFrom} <span className="ml-2 text-white/40">$</span>
              </div>
              <input type="text" className="bg-transparent outline-none text-white w-full text-sm px-3 py-2" />
            </div>

            <div className="flex items-center bg-[#0a0a0a] rounded flex-1 md:max-w-[200px]">
              <div className="px-4 text-xs font-semibold text-gray-500 whitespace-nowrap border-r border-white/5 h-full flex items-center bg-[#141414] rounded-l">
                {t.upTo} <span className="ml-2 text-white/40">$</span>
              </div>
              <input type="text" className="bg-transparent outline-none text-white w-full text-sm px-3 py-2" />
            </div>

            <div className="flex items-center bg-[#0a0a0a] rounded flex-1">
              <input type="text" placeholder={t.searchTitle} className="bg-transparent outline-none text-white w-full text-sm px-4 py-2" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1a2e] border border-white/5 text-xs font-medium text-gray-300 hover:text-white transition-colors">
                {t.showFilters} <ChevronDownIcon />
              </button>
              <span className="text-xs font-medium text-gray-400">{t.alwaysShow}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors">
                {t.reset} <X size={14} />
              </button>
              <div className="px-3 py-1.5 rounded bg-[#1a1a2e] border border-white/5 text-xs font-medium text-gray-400">
                {t.shownAccounts}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 mt-2">
            <button className="px-4 py-1.5 rounded text-emerald-400 text-xs font-medium transition-colors border border-emerald-500/30 bg-[#0c1f17]">{t.default}</button>
            <button className="px-4 py-1.5 rounded bg-[#141414] border border-white/5 text-gray-400 hover:text-gray-300 transition-colors text-xs font-medium">{t.cheapFirst}</button>
            <button className="px-4 py-1.5 rounded bg-[#141414] border border-white/5 text-gray-400 hover:text-gray-300 transition-colors text-xs font-medium">{t.expensiveFirst}</button>
            <button className="px-4 py-1.5 rounded bg-[#141414] border border-white/5 text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-2 text-xs font-medium">{t.newest} <ChevronDownIcon /></button>
            <button className="px-4 py-1.5 rounded bg-[#141414] border border-white/5 text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-2 text-xs font-medium">{t.oldest} <ChevronDownIcon /></button>

            <button className="px-4 py-1.5 rounded border border-white/5 text-gray-400 hover:text-white transition-colors flex items-center gap-2 ml-auto text-xs font-medium">
              <Heart size={14} className="text-gray-500" /> {t.saveSearch}
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

        {/* P2P Listing Product Cards */}
        {MOCK_PRODUCTS[selectedGame as keyof typeof MOCK_PRODUCTS].map((product) => (
          <div key={product.id} className="bg-[#101017] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors cursor-pointer group relative overflow-hidden flex flex-col gap-3">
            {/* Instant Delivery Badge */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <Sparkles size={10} /> {t.instantDelivery}
            </div>

            <div className="flex justify-between items-start mt-2">
              <h3 className="text-white font-medium flex items-center gap-2 text-[15px] group-hover:text-blue-400 transition-colors">
                <Monitor size={16} className="text-blue-400" /> {product.title}
              </h3>
              <div className="bg-[#0c1f17] border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-md font-bold text-sm shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                $ {product.price.toFixed(2)}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {/* Stock Badge */}
              <span className="px-2 py-0.5 bg-[#102a1e] border border-blue-500/20 text-blue-400 rounded text-[10px] font-semibold flex items-center gap-1">
                <Box size={10} /> {t.stock} {product.stock}
              </span>
              <span className="px-2 py-0.5 bg-[#141414] border border-white/5 rounded text-[10px] font-medium text-gray-400">{product.type}</span>
              <span className="px-2 py-0.5 bg-[#2a1616] border border-red-500/20 text-red-400 rounded text-[10px] font-medium flex items-center gap-1">
                <Clock size={10} /> {t.lastSeen}
              </span>
              <span className="px-2 py-0.5 bg-[#141414] border border-white/5 rounded text-[10px] font-medium text-gray-400">{t.warranty}</span>
              <span className="px-2 py-0.5 bg-[#141414] border border-white/5 rounded text-[10px] font-medium text-gray-400">{t.played}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-[#2a1616] border border-red-500/20 text-red-400 rounded text-[10px] font-medium flex items-center gap-1">
                <AlertTriangle size={10} /> {t.lastTransaction}
              </span>
            </div>

            {/* Games inside product */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-1 scrollbar-hide">
              {product.games.map((g, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-[#141414] rounded-md p-1 pr-2 border border-white/5">
                  <img src={`https://picsum.photos/seed/${g}/20/20`} alt={g} className="w-5 h-5 rounded" referrerPolicy="no-referrer" />
                  <span className="text-[10px] font-medium text-gray-300 ml-0.5">{g}</span>
                </div>
              ))}
              <div className="px-2 py-1 bg-[#141414] rounded-md text-[10px] font-medium text-gray-400 border border-white/5">
                {t.games}
              </div>
            </div>
          </div>
        ))}

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
