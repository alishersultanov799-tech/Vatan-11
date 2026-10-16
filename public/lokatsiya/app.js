/**
 * 3D Dron Xaritasi — Yangi Uy Loyihasi & 5 km Infratuzilma Tahlili
 */

// Asosiy lokatsiya koordinatalari (Qurilayotgan uy / Loyiha markazi)
const HOME_COORDS = [69.335394, 41.202065]; // [lon, lat]

// 5 km radiusdagi barcha obyektlar ma'lumotlar bazasi
const POIS = [
  // --- METRO BEKATLARI ---
  {
    id: 'metro-7',
    category: 'metro',
    categoryName: 'Metro',
    name: '7-bekat — "Qo‘yliq" bekati',
    address: 'Yerusti halqa metro yo‘li, Qo‘yliq massivi',
    coords: [69.328333, 41.238611],
    distance: 4.1,
    carTime: '7 daq',
    walkTime: '45 daq',
    bearingText: 'Shimoli-g‘arb',
    desc: 'Yerusti halqa metrosining asosiy transport tuguni. To‘g‘ridan-to‘g‘ri Food City shattl-baslari va avtobuslar qatnaydi.',
    icon: 'train-track',
    color: '#38bdf8'
  },
  {
    id: 'metro-8',
    category: 'metro',
    categoryName: 'Metro',
    name: '8-bekat — "Matonat" bekati',
    address: 'Yerusti halqa yo‘li, Quruvchilar yo‘nalishi',
    coords: [69.309444, 41.236111],
    distance: 4.4,
    carTime: '8 daq',
    walkTime: '50 daq',
    bearingText: 'G‘arb-shimoli-g‘arb',
    desc: 'Quruvchilar va Qipchoq (Sergeli) tomon boruvchi yerusti metro bekati.',
    icon: 'train-track',
    color: '#38bdf8'
  },

  // --- KORZINKA VA SUPERMARKETLAR ---
  {
    id: 'korzinka-bektemir',
    category: 'supermarket',
    categoryName: 'Korzinka',
    name: 'Korzinka Bektemir',
    address: 'Bektemir tumani, Husayn Boyqaro ko‘chasi, 2-A',
    coords: [69.3420, 41.2235],
    distance: 2.5,
    carTime: '4 daq',
    walkTime: '28 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Eng yaqin to‘liq formatdagi Korzinka supermarketi (o‘z novvoyxonasi, go‘sht, pazandalik va oziq-ovqat mahsulotlari).',
    icon: 'shopping-cart',
    color: '#f59e0b'
  },
  {
    id: 'korzinka-compass',
    category: 'supermarket',
    categoryName: 'Korzinka',
    name: 'Korzinka Compass Mall',
    address: 'Compass Mall savdo markazi, 1-qavat',
    coords: [69.3330, 41.2395],
    distance: 4.2,
    carTime: '7 daq',
    walkTime: '48 daq',
    bearingText: 'Shimol',
    desc: 'Compass Mall ichidagi eng yirik gipermarketlardan biri.',
    icon: 'shopping-cart',
    color: '#f59e0b'
  },
  {
    id: 'korzinka-kuylyuk',
    category: 'supermarket',
    categoryName: 'Korzinka',
    name: 'Korzinka Qo‘yliq',
    address: 'Farg‘ona yo‘li ko‘chasi, Qo‘yliq metro yaqinida',
    coords: [69.3270, 41.2420],
    distance: 4.5,
    carTime: '8 daq',
    walkTime: '52 daq',
    bearingText: 'Shimoli-g‘arb',
    desc: 'Farg‘ona yo‘li shossesi bo‘yidagi qulay Korzinka filiali.',
    icon: 'shopping-cart',
    color: '#f59e0b'
  },
  {
    id: 'havas-bektemir',
    category: 'supermarket',
    categoryName: 'Supermarket',
    name: 'Havas Bektemir',
    address: 'Husayn Boyqaro ko‘chasi',
    coords: [69.3440, 41.2245],
    distance: 2.6,
    carTime: '5 daq',
    walkTime: '30 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Kunlik oziq-ovqat va ro‘zg‘or mahsulotlari uchun qulay diskounter do‘koni.',
    icon: 'shopping-bag',
    color: '#f59e0b'
  },

  // --- MAKTABLAR ---
  {
    id: 'maktab-50',
    category: 'school',
    categoryName: 'Maktab',
    name: '50-sonli umumta’lim maktabi',
    address: 'O‘rta Chirchiq tumani, Guliston / O‘choqli yondosh hududi',
    coords: [69.3250, 41.1850],
    distance: 2.1,
    carTime: '4 daq',
    walkTime: '24 daq',
    bearingText: 'Janubi-g‘arb',
    desc: 'Eng yaqin davlat umumta’lim maktabi. Zamonaviy sinfxonalar va sport zali mavjud.',
    icon: 'graduation-cap',
    color: '#10b981'
  },
  {
    id: 'maktab-290',
    category: 'school',
    categoryName: 'Maktab',
    name: '290-sonli umumta’lim maktabi',
    address: 'Bektemir tumani, Yuqori Chirchiq ko‘chasi, 52',
    coords: [69.3460, 41.2250],
    distance: 2.7,
    carTime: '5 daq',
    walkTime: '32 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Tuman markazidagi nufuzli maktablardan biri. DXM va bog‘cha yaqinida.',
    icon: 'graduation-cap',
    color: '#10b981'
  },
  {
    id: 'maktab-64',
    category: 'school',
    categoryName: 'Maktab',
    name: '64-sonli umumta’lim maktabi',
    address: 'O‘rta Chirchiq tumani',
    coords: [69.3400, 41.1780],
    distance: 2.7,
    carTime: '5 daq',
    walkTime: '32 daq',
    bearingText: 'Janub',
    desc: 'O‘rta Chirchiq tumanidagi umumta’lim maskani.',
    icon: 'graduation-cap',
    color: '#10b981'
  },
  {
    id: 'maktab-289',
    category: 'school',
    categoryName: 'Maktab',
    name: '289-sonli umumta’lim maktabi',
    address: 'Bektemir tumani, Bilol Nozim ko‘chasi, 46 (Hokimiyat yonida)',
    coords: [69.3490, 41.2290],
    distance: 3.2,
    carTime: '6 daq',
    walkTime: '38 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Bektemir tuman hokimiyati va bog‘cha bilan bir majmuada joylashgan yirik maktab.',
    icon: 'graduation-cap',
    color: '#10b981'
  },
  {
    id: 'maktab-291',
    category: 'school',
    categoryName: 'Maktab',
    name: '291-sonli umumta’lim maktabi',
    address: 'Bektemir tumani, Suvsoz-2 mavzesi',
    coords: [69.3550, 41.2380],
    distance: 4.3,
    carTime: '8 daq',
    walkTime: '50 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Suvsoz mavzesidagi keng qamrovli maktab.',
    icon: 'graduation-cap',
    color: '#10b981'
  },
  {
    id: 'maktab-213',
    category: 'school',
    categoryName: 'Maktab',
    name: '213-sonli umumta’lim maktabi',
    address: 'Mirobod tumani, Qo‘yliq-1 mavzesi',
    coords: [69.3220, 41.2450],
    distance: 4.9,
    carTime: '9 daq',
    walkTime: '56 daq',
    bearingText: 'Shimol-shimoli-g‘arb',
    desc: 'Qo‘yliq dahasidagi yirik rus va o‘zbek tili sinflariga ega maktab.',
    icon: 'graduation-cap',
    color: '#10b981'
  },

  // --- BOG'CHALAR (DMTT) ---
  {
    id: 'dmtt-572',
    category: 'kindergarten',
    categoryName: 'Bog‘cha',
    name: '572-sonli davlat bog‘chasi (DMTT)',
    address: 'Bektemir tumani, Husayn Boyqaro MFY, Yuqori Chirchiq 9',
    coords: [69.3410, 41.2240],
    distance: 2.5,
    carTime: '4 daq',
    walkTime: '28 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Eng yaqin davlat maktabgacha ta’lim tashkiloti. Keng hovli va zamonaviy guruhlar.',
    icon: 'baby',
    color: '#ec4899'
  },
  {
    id: 'dmtt-571',
    category: 'kindergarten',
    categoryName: 'Bog‘cha',
    name: '571-sonli davlat bog‘chasi (DMTT)',
    address: 'Bektemir tumani, Yuqori Chirchiq ko‘chasi, 52',
    coords: [69.3465, 41.2255],
    distance: 2.8,
    carTime: '5 daq',
    walkTime: '32 daq',
    bearingText: 'Shimoli-sharq',
    desc: '290-maktab va Davlat xizmatlari markaziga tutash zamonaviy bog‘cha.',
    icon: 'baby',
    color: '#ec4899'
  },
  {
    id: 'dmtt-583',
    category: 'kindergarten',
    categoryName: 'Bog‘cha',
    name: '583-sonli yangi zamonaviy DMTT',
    address: 'Bektemir MFY, Bilol Nozim ko‘chasi, 23-A',
    coords: [69.3480, 41.2300],
    distance: 3.3,
    carTime: '6 daq',
    walkTime: '39 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Yaqinda foydalanishga topshirilgan 390 o‘rinli eng zamonaviy innovatsion davlat bog‘chasi.',
    icon: 'baby',
    color: '#ec4899'
  },
  {
    id: 'dmtt-570',
    category: 'kindergarten',
    categoryName: 'Bog‘cha',
    name: '570-sonli davlat bog‘chasi',
    address: 'Bektemir tumani, Oltintopgan mavzesi, 58/1',
    coords: [69.3600, 41.2350],
    distance: 4.2,
    carTime: '8 daq',
    walkTime: '48 daq',
    bearingText: 'Sharq-shimoli-sharq',
    desc: 'Oltintopgan dahasidagi ko‘p guruhli davlat bolalar bog‘chasi.',
    icon: 'baby',
    color: '#ec4899'
  },

  // --- BOZORLAR VA SAVDO MARKAZLARI ---
  {
    id: 'bozor-foodcity',
    category: 'market',
    categoryName: 'Bozor',
    name: 'Food City (Yangi Qo‘yliq dehqon bozori)',
    address: 'Mehnatobod ko‘chasi / Bektemir',
    coords: [69.318989, 41.201202],
    distance: 1.4,
    carTime: '3 daq',
    walkTime: '16 daq',
    bearingText: 'G‘arb',
    desc: 'Toshkentning eng yirik va zamonaviy ulgurji hamda chakana meva-sabzavot, oziq-ovqat agromajmuasi.',
    icon: 'store',
    color: '#f97316'
  },
  {
    id: 'bozor-bektemir',
    category: 'market',
    categoryName: 'Bozor',
    name: 'Bektemir tumani bozori',
    address: 'Bektemir qo‘rg‘oni markazi',
    coords: [69.3450, 41.2260],
    distance: 2.8,
    carTime: '5 daq',
    walkTime: '33 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Aholi uchun har kungi sifatli go‘sht, sabzavot va xo‘jalik mollari bozori.',
    icon: 'store',
    color: '#f97316'
  },
  {
    id: 'mall-compass',
    category: 'market',
    categoryName: 'Savdo Markazi',
    name: 'Compass Mall (Savdo & Ko‘ngilochar SM)',
    address: 'Toshkent halqa yo‘li (THAY) va Farg‘ona yo‘li kesishmasi',
    coords: [69.3330, 41.2395],
    distance: 4.2,
    carTime: '7 daq',
    walkTime: '48 daq',
    bearingText: 'Shimol',
    desc: 'Kinoteatr, bolalar o‘yingohi, Korzinka, fudkort, kiyim brendlari va barcha qulayliklarga ega premium savdo markazi.',
    icon: 'shopping-bag',
    color: '#f97316'
  },
  {
    id: 'bozor-kuylyuk-old',
    category: 'market',
    categoryName: 'Bozor',
    name: 'Qo‘yliq dehqon va kiyim bozori',
    address: 'Qo‘yliq ko‘prigi yonida',
    coords: [69.329444, 41.239722],
    distance: 4.2,
    carTime: '7 daq',
    walkTime: '48 daq',
    bearingText: 'Shimol',
    desc: 'Tarixiy Qo‘yliq savdo hududi: arzon chakana savdo, kiyim-kechak va xo‘jalik mahsulotlari rastalari.',
    icon: 'store',
    color: '#f97316'
  },

  // --- MASJIDLAR ---
  {
    id: 'masjid-bektemir',
    category: 'mosque',
    categoryName: 'Masjid',
    name: 'Bektemir jome masjidi',
    address: 'Bektemir shox ko‘chasida',
    coords: [69.3440, 41.2265],
    distance: 2.8,
    carTime: '5 daq',
    walkTime: '34 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Yaqinda tubdan qayta qurilib, minglab namozxonlar uchun barcha sharoitlar yaratilgan muhtasham jome masjidi.',
    icon: 'moon',
    color: '#8b5cf6'
  },
  {
    id: 'masjid-boboxon',
    category: 'mosque',
    categoryName: 'Masjid',
    name: 'Boboxon ota jome masjidi',
    address: 'O‘rta Chirchiq tumani',
    coords: [69.3500, 41.1750],
    distance: 3.2,
    carTime: '6 daq',
    walkTime: '38 daq',
    bearingText: 'Janubi-sharq',
    desc: 'O‘rta Chirchiq tumanidagi tinch, shinam jome masjidi.',
    icon: 'moon',
    color: '#8b5cf6'
  },
  {
    id: 'masjid-kuylyukota',
    category: 'mosque',
    categoryName: 'Masjid',
    name: 'Qo‘yliq ota jome masjidi',
    address: 'Mirobod tumani, Farg‘ona yo‘li ko‘chasida',
    coords: [69.3280, 41.2410],
    distance: 4.4,
    carTime: '8 daq',
    walkTime: '50 daq',
    bearingText: 'Shimoli-g‘arb',
    desc: 'XVI asrga oid Shayx Hofiz Qo‘yliqiy qadamjosi o‘rnidagi tarixiy ziyoratgoh va jome masjid.',
    icon: 'moon',
    color: '#8b5cf6'
  },
  {
    id: 'masjid-burgalik',
    category: 'mosque',
    categoryName: 'Masjid',
    name: 'Burgalik jome masjidi',
    address: 'O‘rta Chirchiq tumani, Burgalik MFY',
    coords: [69.3200, 41.1620],
    distance: 4.6,
    carTime: '8 daq',
    walkTime: '52 daq',
    bearingText: 'Janub-janubi-g‘arb',
    desc: 'Burgalik mahallasidagi jome masjidi.',
    icon: 'moon',
    color: '#8b5cf6'
  },

  // --- SPORT MAJMUALARI ---
  {
    id: 'sport-bosm',
    category: 'sport',
    categoryName: 'Sport',
    name: 'Bektemir 2-sonli BO‘SM (Sport maktabi)',
    address: 'Husayn Boyqaro MFY, Yuqori Chirchiq ko‘chasi, 1-A',
    coords: [69.3415, 41.2245],
    distance: 2.5,
    carTime: '4 daq',
    walkTime: '29 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Bolalar va o‘smirlar sport maktabi (kurash, boks, futbol, gimnastika to‘garaklari).',
    icon: 'dumbbell',
    color: '#06b6d4'
  },
  {
    id: 'sport-premiyer',
    category: 'sport',
    categoryName: 'Sport',
    name: 'Premiyer Fitnes klubi',
    address: 'Bektemir shoh ko‘chasi, 191',
    coords: [69.3430, 41.2260],
    distance: 2.7,
    carTime: '5 daq',
    walkTime: '32 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Zamonaviy trenajyor zali, kardiomashg‘ulotlar va fitnes instruktorlari.',
    icon: 'dumbbell',
    color: '#06b6d4'
  },
  {
    id: 'sport-fitza',
    category: 'sport',
    categoryName: 'Sport',
    name: 'Fitza GYM sport zali',
    address: 'Bektemir markazida',
    coords: [69.3450, 41.2310],
    distance: 3.3,
    carTime: '6 daq',
    walkTime: '39 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Erkaklar va ayollar uchun qulay mashg‘ulot jadvaliga ega fitnes zali.',
    icon: 'dumbbell',
    color: '#06b6d4'
  },
  {
    id: 'sport-krasnitskiy',
    category: 'sport',
    categoryName: 'Sport',
    name: 'G.A. Krasnitskiy nomidagi sport stadioni',
    address: 'Bektemir tumani',
    coords: [69.3520, 41.2350],
    distance: 3.9,
    carTime: '7 daq',
    walkTime: '45 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Katta futbol maydoni va yengil atletika sport majmuasi.',
    icon: 'activity',
    color: '#06b6d4'
  },
  {
    id: 'sport-compass',
    category: 'sport',
    categoryName: 'Sport',
    name: 'Compass Gym / Chekhov Sport Club',
    address: 'Compass Mall savdo markazi hududida',
    coords: [69.3330, 41.2395],
    distance: 4.2,
    carTime: '7 daq',
    walkTime: '48 daq',
    bearingText: 'Shimol',
    desc: 'Premium toifadagi trenajyor va fitnes zali.',
    icon: 'dumbbell',
    color: '#06b6d4'
  },

  // --- TIBBIYOT VA DAVLAT IDORALARI ---
  {
    id: 'gov-dxm',
    category: 'medical',
    categoryName: 'Davlat Xizmati',
    name: 'Bektemir tumani Davlat Xizmatlari Markazi (DXM)',
    address: 'Bektemir tumani, Yuqori Chirchiq ko‘chasi, 52',
    coords: [69.3465, 41.2255],
    distance: 2.8,
    carTime: '5 daq',
    walkTime: '33 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Barcha turdagi davlat va FHDYO xizmatlari (pasport, kadastr, ro‘yxatdan o‘tkazish).',
    icon: 'landmark',
    color: '#14b8a6'
  },
  {
    id: 'med-poliklinika-69',
    category: 'medical',
    categoryName: 'Tibbiyot',
    name: '69-sonli oilaviy poliklinika',
    address: 'Bektemir tumani, Ohunguzar ko‘chasi',
    coords: [69.3420, 41.2280],
    distance: 2.9,
    carTime: '5 daq',
    walkTime: '34 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Hududiy birlamchi tibbiy xizmat, shifokorlar ko‘rigi va emlash xonalari.',
    icon: 'stethoscope',
    color: '#14b8a6'
  },
  {
    id: 'gov-hokimiyat',
    category: 'medical',
    categoryName: 'Ma’muriyat',
    name: 'Bektemir tuman hokimiyati va IIB',
    address: 'Bilol Nozim ko‘chasi, 46',
    coords: [69.3490, 41.2295],
    distance: 3.1,
    carTime: '6 daq',
    walkTime: '36 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Tuman ma’muriy markazi va jamoat xavfsizligi bo‘limi.',
    icon: 'shield',
    color: '#14b8a6'
  },
  {
    id: 'med-hospital-6',
    category: 'medical',
    categoryName: 'Tibbiyot',
    name: 'Bektemir tumani 6-son shahar klinik shifoxonasi',
    address: 'Bektemir tumani markazida',
    coords: [69.3470, 41.2320],
    distance: 3.5,
    carTime: '6 daq',
    walkTime: '40 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Statsionar davolash, tez tibbiy yordam va jarrohlik bo‘limlari.',
    icon: 'heart-pulse',
    color: '#14b8a6'
  },
  {
    id: 'med-poliklinika-markaz',
    category: 'medical',
    categoryName: 'Tibbiyot',
    name: 'Bektemir Markaziy ko‘p tarmoqli poliklinikasi',
    address: 'Suvsoz-2 mavzesi, 75',
    coords: [69.3540, 41.2370],
    distance: 4.2,
    carTime: '8 daq',
    walkTime: '48 daq',
    bearingText: 'Shimoli-sharq',
    desc: 'Tor doiradagi barcha mutaxassislar, laboratoriya va diagnostika markazi.',
    icon: 'stethoscope',
    color: '#14b8a6'
  },

  // --- JAMOOAT TRANSPORTI VA BEKATLAR ---
  {
    id: 'bus-sohibkor',
    category: 'transit',
    categoryName: 'Transport',
    name: 'Sohibkor ko‘chasi bekati',
    address: 'Sohibkor ko‘chasi',
    coords: [69.332821, 41.205538],
    distance: 1.9,
    carTime: '3 daq',
    walkTime: '15 daq',
    bearingText: 'Shimol',
    desc: '№10, 12, 93 avtobuslari va yo‘nalishli marshrutkalar bekati.',
    icon: 'bus',
    color: '#6366f1'
  },
  {
    id: 'bus-bektemir',
    category: 'transit',
    categoryName: 'Transport',
    name: 'Bektemir qo‘rg‘oni bekati',
    address: 'Bektemir shox ko‘chasida',
    coords: [69.349934, 41.214780],
    distance: 2.0,
    carTime: '3 daq',
    walkTime: '18 daq',
    bearingText: 'Sharq-shimoli-sharq',
    desc: 'Shahar va shahar atrofi (Chirchiq, Nurafshon yo‘nalishlari) avtobuslari bekat.',
    icon: 'bus',
    color: '#6366f1'
  },
  {
    id: 'bus-foodcity-gate',
    category: 'transit',
    categoryName: 'Transport',
    name: 'Food City darvoza bekati & Avtostansiya',
    address: 'Food City asosiy kirish darvozasi',
    coords: [69.318989, 41.201202],
    distance: 1.4,
    carTime: '3 daq',
    walkTime: '16 daq',
    bearingText: 'G‘arb',
    desc: '№10 (Olmazor metrosi), 12 (Janubiy vokzal), 39 (Do‘stlik), 110 (TTZ), 128, 130, 133, 184 avtobuslari so‘nggi bekat.',
    icon: 'bus',
    color: '#6366f1'
  }
];

// Kategoriya ma'lumotlari
const CATEGORIES = [
  { id: 'all', name: 'Barchasi', icon: 'layers' },
  { id: 'metro', name: 'Metro', icon: 'train-track' },
  { id: 'supermarket', name: 'Korzinka & Savdo', icon: 'shopping-cart' },
  { id: 'school', name: 'Maktablar', icon: 'graduation-cap' },
  { id: 'kindergarten', name: 'Bog‘chalar', icon: 'baby' },
  { id: 'market', name: 'Bozorlar & Mall', icon: 'store' },
  { id: 'mosque', name: 'Masjidlar', icon: 'moon' },
  { id: 'sport', name: 'Sport & Fitnes', icon: 'dumbbell' },
  { id: 'medical', name: 'Tibbiyot & DXM', icon: 'stethoscope' },
  { id: 'transit', name: 'Avtobuslar', icon: 'bus' }
];

// Global holat
let map = null;
let activeCategory = 'all';
let searchQuery = '';
let activePoiId = null;
let isOrbiting = false;
let isAutoTouring = false;
let orbitAnimationId = null;
let currentLayerType = 'satellite'; // 'satellite' yoki 'streets'
let showRadars = true;
const markersMap = new Map();

// --- 1. Dron Radar Doiralarini hisoblash (GeoJSON) ---
function createCircleGeoJSON(center, radiusInKm, points = 64) {
  const coords = [];
  const distanceX = radiusInKm / (111.320 * Math.cos(center[1] * Math.PI / 180));
  const distanceY = radiusInKm / 110.574;

  for (let i = 0; i < points; i++) {
    const theta = (i / points) * (2 * Math.PI);
    const x = distanceX * Math.cos(theta);
    const y = distanceY * Math.sin(theta);
    coords.push([center[0] + x, center[1] + y]);
  }
  coords.push(coords[0]); // yopish

  return {
    type: 'Feature',
    properties: { radius: radiusInKm },
    geometry: {
      type: 'Polygon',
      coordinates: [coords]
    }
  };
}

// 1 km dan 5 km gacha bo'lgan radar doiralari
function buildRadarGeoJSON() {
  const features = [];
  for (let r = 1; r <= 5; r++) {
    features.push(createCircleGeoJSON(HOME_COORDS, r));
  }
  return {
    type: 'FeatureCollection',
    features: features
  };
}

// --- 2. Xarita Ishga Tushirilishi ---
function initMap() {
  const satelliteStyle = {
    version: 8,
    sources: {
      'esri-imagery': {
        type: 'raster',
        tiles: [
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        ],
        tileSize: 256,
        attribution: '© Esri, Maxar, Earthstar Geographics'
      }
    },
    layers: [
      {
        id: 'esri-satellite-layer',
        type: 'raster',
        source: 'esri-imagery',
        minzoom: 0,
        maxzoom: 19
      }
    ]
  };

  map = new maplibregl.Map({
    container: 'map',
    style: satelliteStyle,
    center: HOME_COORDS,
    zoom: 14.5,
    pitch: 62, // 3D Dron kamerasi burchagi
    bearing: -25,
    antialias: true
  });

  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');

  map.on('load', () => {
    setupMapLayers();
    addHomeMarker();
    renderPoiMarkers();
    setupEventListeners();
  });

  map.on('rotate', updateHudTelemetry);
  map.on('pitch', updateHudTelemetry);
  map.on('zoom', updateHudTelemetry);
  map.on('move', updateHudTelemetry);
}

// Xarita qatlamlari: Radarlar va Lazer masofa chizig'i
function setupMapLayers() {
  // 1. Radar doiralari manbasi
  map.addSource('radar-circles', {
    type: 'geojson',
    data: buildRadarGeoJSON()
  });

  // Radar chiziqlari (Neon kontur)
  map.addLayer({
    id: 'radar-lines',
    type: 'line',
    source: 'radar-circles',
    paint: {
      'line-color': [
        'match',
        ['get', 'radius'],
        1, '#10b981',
        2, '#38bdf8',
        3, '#eab308',
        4, '#f97316',
        5, '#ef4444',
        '#38bdf8'
      ],
      'line-width': 2,
      'line-dasharray': [3, 2],
      'line-opacity': 0.8
    }
  });

  // Radar ichki shaffof qoplami
  map.addLayer({
    id: 'radar-fills',
    type: 'fill',
    source: 'radar-circles',
    paint: {
      'fill-color': [
        'match',
        ['get', 'radius'],
        1, '#10b981',
        2, '#38bdf8',
        3, '#eab308',
        4, '#f97316',
        5, '#ef4444',
        '#38bdf8'
      ],
      'fill-opacity': 0.04
    }
  });

  // 2. Dinamik lazer masofa chizig'i (Uy -> Tanlangan POI)
  map.addSource('laser-distance-line', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [HOME_COORDS, HOME_COORDS]
      }
    }
  });

  // Nur taratuvchi qalin chiziq
  map.addLayer({
    id: 'laser-glow',
    type: 'line',
    source: 'laser-distance-line',
    paint: {
      'line-color': '#38bdf8',
      'line-width': 8,
      'line-opacity': 0.4,
      'line-blur': 4
    }
  });

  // Asosiy lazer chizig'i
  map.addLayer({
    id: 'laser-core',
    type: 'line',
    source: 'laser-distance-line',
    paint: {
      'line-color': '#f8fafc',
      'line-width': 2.5,
      'line-dasharray': [2, 1]
    }
  });
}

// Qurilayotgan uy markaziy markeri (Pulsing Drone Beacon)
function addHomeMarker() {
  const el = document.createElement('div');
  el.className = 'drone-home-marker';
  el.innerHTML = `
    <div class="home-marker-pulse"></div>
    <div class="home-marker-core">🏗️</div>
    <div class="home-marker-label">UY QURILAYOTGAN JOY</div>
  `;

  el.addEventListener('click', () => {
    returnToHome();
  });

  new maplibregl.Marker({ element: el, anchor: 'center' })
    .setLngLat(HOME_COORDS)
    .addTo(map);
}

// Barcha POI markerlarini xaritaga joylashtirish
function renderPoiMarkers() {
  // Eski markerlarni tozalash
  markersMap.forEach(m => m.remove());
  markersMap.clear();

  POIS.forEach(poi => {
    const el = document.createElement('div');
    el.className = 'poi-map-marker';
    el.style.setProperty('--marker-bg', poi.color);
    el.innerHTML = getCategoryEmoji(poi.category);
    el.title = `${poi.name} (${poi.distance} km)`;

    el.addEventListener('click', () => {
      selectPoi(poi.id, true);
    });

    const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
      .setLngLat(poi.coords)
      .addTo(map);

    markersMap.set(poi.id, marker);
  });
}

function getCategoryEmoji(cat) {
  switch (cat) {
    case 'metro': return '🚇';
    case 'supermarket': return '🛒';
    case 'school': return '🏫';
    case 'kindergarten': return '👶';
    case 'market': return '🏬';
    case 'mosque': return '🕌';
    case 'sport': return '🏟️';
    case 'medical': return '🏥';
    case 'transit': return '🚌';
    default: return '📍';
  }
}

// --- 3. Dron Telemetriyasi va HUD yangilanishi ---
function updateHudTelemetry() {
  if (!map) return;

  // Taxminiy kamera balandligi
  const zoom = map.getZoom();
  const altMeters = Math.round(18000 * Math.pow(2, 14 - zoom));
  document.getElementById('hud-altitude').textContent = `${altMeters}m`;

  // Pitch (Gimbal)
  const pitch = Math.round(map.getPitch());
  document.getElementById('hud-pitch').textContent = `-${pitch}°`;

  // Bearing (Kompas yo'nalishi)
  const bearing = Math.round(map.getBearing());
  let compassText = 'SHIMOL';
  if (bearing >= -22 && bearing <= 22) compassText = '▲ SHIMOL';
  else if (bearing > 22 && bearing < 67) compassText = '▲ SHIMOLI-SHARQ';
  else if (bearing >= 67 && bearing <= 112) compassText = '▲ SHARQ';
  else if (bearing > 112 && bearing < 157) compassText = '▲ JANUBI-SHARQ';
  else if (bearing >= 157 || bearing <= -157) compassText = '▲ JANUB';
  else if (bearing < -22 && bearing > -67) compassText = '▲ SHIMOLI-G‘ARB';
  else if (bearing <= -67 && bearing >= -112) compassText = '▲ G‘ARB';
  else compassText = '▲ JANUBI-G‘ARB';

  document.getElementById('compass-marker').textContent = `${compassText} (${bearing >= 0 ? bearing : 360 + bearing}°)`;
}

// --- 4. Foydalanuvchi interfeysi (UI) va ro'yxatni chizish ---
function renderCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const count = cat.id === 'all' 
      ? POIS.length 
      : POIS.filter(p => p.category === cat.id).length;

    const btn = document.createElement('button');
    btn.className = `cat-tab ${cat.id === activeCategory ? 'active' : ''}`;
    btn.innerHTML = `
      <span>${cat.name}</span>
      <span class="cat-count">${count}</span>
    `;

    btn.addEventListener('click', () => {
      activeCategory = cat.id;
      renderCategories();
      renderPoiList();
      filterMarkersOnMap();
    });

    container.appendChild(btn);
  });
}

function filterMarkersOnMap() {
  POIS.forEach(poi => {
    const marker = markersMap.get(poi.id);
    if (!marker) return;

    const matchesCat = activeCategory === 'all' || poi.category === activeCategory;
    const matchesSearch = poi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          poi.address.toLowerCase().includes(searchQuery.toLowerCase());

    const isVisible = matchesCat && matchesSearch;
    marker.getElement().style.display = isVisible ? 'flex' : 'none';
  });
}

function renderPoiList() {
  const container = document.getElementById('poi-list');
  container.innerHTML = '';

  const filtered = POIS.filter(poi => {
    const matchesCat = activeCategory === 'all' || poi.category === activeCategory;
    const matchesSearch = poi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          poi.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Masofa bo'yicha saralash (eng yaqindan boshlab)
  filtered.sort((a, b) => a.distance - b.distance);

  document.getElementById('total-pois').textContent = `${filtered.length} ta`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-dim); font-size: 13px;">
        <i data-lucide="search-x" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
        <p>Bunday obyekt topilmadi</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filtered.forEach(poi => {
    const card = document.createElement('div');
    card.className = `poi-card ${poi.id === activePoiId ? 'active' : ''}`;
    card.style.setProperty('--card-color', poi.color);

    const isVeryClose = poi.distance <= 2.5;

    card.innerHTML = `
      <div class="poi-card-header">
        <span class="poi-category">${poi.categoryName}</span>
        <span class="poi-distance-badge ${isVeryClose ? 'close' : ''}">
          <i data-lucide="map-pin" style="width: 11px; height: 11px;"></i>
          ${poi.distance} km
        </span>
      </div>
      <div class="poi-name">${poi.name}</div>
      <div class="poi-address">${poi.address}</div>
      <div class="poi-meta">
        <div class="poi-meta-item">
          <i data-lucide="car"></i>
          <span>${poi.carTime}</span>
        </div>
        <div class="poi-meta-item">
          <i data-lucide="footprints"></i>
          <span>${poi.walkTime}</span>
        </div>
        <div class="poi-meta-item">
          <i data-lucide="compass"></i>
          <span>${poi.bearingText}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      selectPoi(poi.id, true);
    });

    container.appendChild(card);
  });

  lucide.createIcons();
}

// --- 5. Obyektni tanlash va Dron Kamerasi Parvozi ---
function selectPoi(id, shouldFly = true) {
  stopOrbitTour();
  stopAutoTour();

  const poi = POIS.find(p => p.id === id);
  if (!poi) return;

  activePoiId = id;

  // Kartochkalarni faollashtirish
  document.querySelectorAll('.poi-card').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.poi-map-marker').forEach(el => el.classList.remove('active'));

  const activeMarker = markersMap.get(id);
  if (activeMarker) {
    activeMarker.getElement().classList.add('active');
  }

  // Lazer masofa chizig'ini yangilash
  if (map.getSource('laser-distance-line')) {
    map.getSource('laser-distance-line').setData({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [HOME_COORDS, poi.coords]
      }
    });
  }

  // Dron HUD markaziy nishoni ma'lumotini yangilash
  document.querySelector('.target-title').textContent = poi.name.toUpperCase();
  document.querySelector('.target-dist').textContent = `MASOFA: ${poi.distance} KM • ${poi.carTime} (AVTO)`;

  // Pastki o'ngdagi Distance HUD kartochkasini ko'rsatish
  showDistanceHudCard(poi);

  // Dron kamerasi parvozi (Cinematic FlyTo)
  if (shouldFly) {
    // Hisoblash: Dron uydan obyektga qaragan burchak ostida uchib kelishi
    const dx = poi.coords[0] - HOME_COORDS[0];
    const dy = poi.coords[1] - HOME_COORDS[1];
    const bearing = (Math.atan2(dx, dy) * 180) / Math.PI;

    map.flyTo({
      center: poi.coords,
      zoom: 16.2,
      pitch: 65,
      bearing: bearing,
      duration: 2200,
      essential: true
    });
  }

  renderPoiList();
}

function showDistanceHudCard(poi) {
  const card = document.getElementById('distance-card');
  card.style.display = 'block';

  document.getElementById('card-cat').textContent = poi.categoryName;
  document.getElementById('card-cat').style.color = poi.color;
  document.getElementById('card-distance').textContent = `${poi.distance} km`;
  document.getElementById('card-name').textContent = poi.name;
  document.getElementById('card-address').textContent = poi.address;
  document.getElementById('card-car-time').textContent = poi.carTime;
  document.getElementById('card-walk-time').textContent = poi.walkTime;
  document.getElementById('card-bearing').textContent = poi.bearingText;

  document.getElementById('btn-fly-again').onclick = () => selectPoi(poi.id, true);
  document.getElementById('btn-open-yandex').onclick = () => {
    window.open(`https://yandex.com/maps/?ll=${poi.coords[0]}%2C${poi.coords[1]}&z=17`, '_blank');
  };

  lucide.createIcons();
}

// --- 6. Dron Parvoz Rejimlari (Camera Flight Modes) ---

// 1. Markazga (Uyga) Qaytish (RTH - Return to Home)
function returnToHome() {
  stopOrbitTour();
  stopAutoTour();
  activePoiId = null;

  // Lazer chizig'ini yashirish
  if (map.getSource('laser-distance-line')) {
    map.getSource('laser-distance-line').setData({
      type: 'Feature',
      geometry: { type: 'LineString', coordinates: [HOME_COORDS, HOME_COORDS] }
    });
  }

  document.getElementById('distance-card').style.display = 'none';
  document.querySelector('.target-title').textContent = 'LOYIHA MARKAZI';
  document.querySelector('.target-dist').textContent = 'RTH ASOSIY NUQTA';

  map.flyTo({
    center: HOME_COORDS,
    zoom: 15,
    pitch: 62,
    bearing: -25,
    duration: 2000,
    essential: true
  });

  renderPoiList();
}

// 2. 360° Dron Orbit Parvozi (Loyiha atrofida silliq aylanish)
function toggleOrbitTour() {
  if (isOrbiting) {
    stopOrbitTour();
  } else {
    startOrbitTour();
  }
}

function startOrbitTour() {
  stopAutoTour();
  isOrbiting = true;
  document.getElementById('btn-orbit-tour').classList.add('active');
  document.getElementById('orbit-text').textContent = 'Orbitni To‘xtatish';

  map.flyTo({
    center: HOME_COORDS,
    zoom: 15.5,
    pitch: 65,
    duration: 1000
  });

  function rotateCamera() {
    if (!isOrbiting) return;
    map.setBearing(map.getBearing() + 0.25);
    orbitAnimationId = requestAnimationFrame(rotateCamera);
  }

  setTimeout(() => {
    if (isOrbiting) rotateCamera();
  }, 1000);
}

function stopOrbitTour() {
  isOrbiting = false;
  if (orbitAnimationId) {
    cancelAnimationFrame(orbitAnimationId);
    orbitAnimationId = null;
  }
  document.getElementById('btn-orbit-tour').classList.remove('active');
  document.getElementById('orbit-text').textContent = '360° Orbit Parvozi';
}

// 3. Dron Ekskursiyasi (Barcha muhim obyektlar bo'ylab navbatma-navbat parvoz)
let autoTourIndex = 0;
let autoTourTimeout = null;

function toggleAutoTour() {
  if (isAutoTouring) {
    stopAutoTour();
  } else {
    startAutoTour();
  }
}

function startAutoTour() {
  stopOrbitTour();
  isAutoTouring = true;
  document.getElementById('btn-auto-tour').classList.add('active');
  document.getElementById('tour-text').textContent = 'Parvozni To‘xtatish';
  autoTourIndex = 0;

  // Har bir toifadan eng asosiy 8 ta obyektni tanlash
  const highlightPois = [
    'bozor-foodcity',
    'maktab-50',
    'korzinka-bektemir',
    'masjid-bektemir',
    'gov-dxm',
    'sport-bosm',
    'metro-7',
    'mall-compass'
  ];

  function flyNextStep() {
    if (!isAutoTouring) return;

    if (autoTourIndex >= highlightPois.length) {
      // Ekskursiya tugadi, uyga qaytish
      returnToHome();
      stopAutoTour();
      return;
    }

    const currentId = highlightPois[autoTourIndex];
    selectPoi(currentId, true);
    autoTourIndex++;

    autoTourTimeout = setTimeout(flyNextStep, 5500);
  }

  flyNextStep();
}

function stopAutoTour() {
  isAutoTouring = false;
  if (autoTourTimeout) {
    clearTimeout(autoTourTimeout);
    autoTourTimeout = null;
  }
  document.getElementById('btn-auto-tour').classList.remove('active');
  document.getElementById('tour-text').textContent = 'Dron Ekskursiyasi';
}

// 4. Xarita qatlamini almashtirish (Sun'iy yo'ldosh / Vektor)
function toggleMapLayer() {
  if (currentLayerType === 'satellite') {
    currentLayerType = 'streets';
    document.getElementById('layer-text').textContent = 'Oddiy Xarita';
    map.setStyle('https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json');
  } else {
    currentLayerType = 'satellite';
    document.getElementById('layer-text').textContent = 'Sun‘iy Yo‘ldosh';
    map.setStyle({
      version: 8,
      sources: {
        'esri-imagery': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256
        }
      },
      layers: [
        {
          id: 'esri-satellite-layer',
          type: 'raster',
          source: 'esri-imagery',
          minzoom: 0,
          maxzoom: 19
        }
      ]
    });
  }

  map.once('style.load', () => {
    setupMapLayers();
    if (activePoiId) {
      const poi = POIS.find(p => p.id === activePoiId);
      if (poi && map.getSource('laser-distance-line')) {
        map.getSource('laser-distance-line').setData({
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: [HOME_COORDS, poi.coords] }
        });
      }
    }
  });
}

// 5. Radar doiralarini yoqish/o'chirish
function toggleRadars() {
  showRadars = !showRadars;
  const opacityLine = showRadars ? 0.8 : 0;
  const opacityFill = showRadars ? 0.04 : 0;

  if (map.getLayer('radar-lines')) {
    map.setPaintProperty('radar-lines', 'line-opacity', opacityLine);
  }
  if (map.getLayer('radar-fills')) {
    map.setPaintProperty('radar-fills', 'fill-opacity', opacityFill);
  }

  document.getElementById('btn-toggle-radars').classList.toggle('active', showRadars);
}

// --- 7. Barcha tugmalar va hodisalar tinglovchisi ---
function setupEventListeners() {
  // 3D Dron Kadri
  document.getElementById('btn-drone-view').addEventListener('click', () => {
    stopOrbitTour();
    map.flyTo({ pitch: 65, zoom: 15.2, duration: 1500 });
  });

  // 90° Vertikal Dron (Top-down)
  document.getElementById('btn-top-view').addEventListener('click', () => {
    stopOrbitTour();
    map.flyTo({ pitch: 0, bearing: 0, zoom: 14, duration: 1500 });
  });

  // Orbit & Auto-tour
  document.getElementById('btn-orbit-tour').addEventListener('click', toggleOrbitTour);
  document.getElementById('btn-auto-tour').addEventListener('click', toggleAutoTour);
  document.getElementById('btn-rth').addEventListener('click', returnToHome);

  // Qatlamlar va Radarlar
  document.getElementById('btn-toggle-layer').addEventListener('click', toggleMapLayer);
  document.getElementById('btn-toggle-radars').addEventListener('click', toggleRadars);

  // Sidebar kollaps/ochish
  document.getElementById('toggle-sidebar').addEventListener('click', () => {
    document.body.classList.toggle('sidebar-collapsed');
    setTimeout(() => map.resize(), 350);
  });

  // Uncollapse tugmasi (mavjud bo'lmasa yaratish)
  let uncollapseBtn = document.querySelector('.uncollapse-btn');
  if (!uncollapseBtn) {
    uncollapseBtn = document.createElement('button');
    uncollapseBtn.className = 'uncollapse-btn';
    uncollapseBtn.innerHTML = '<i data-lucide="menu"></i>';
    uncollapseBtn.title = 'Katalogni ochish';
    document.body.appendChild(uncollapseBtn);
    uncollapseBtn.addEventListener('click', () => {
      document.body.classList.remove('sidebar-collapsed');
      setTimeout(() => map.resize(), 350);
    });
  }

  // Distance Card yopish
  document.getElementById('close-dist-card').addEventListener('click', () => {
    document.getElementById('distance-card').style.display = 'none';
  });

  // Qidiruv maydoni
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderPoiList();
    filterMarkersOnMap();
  });
}

// Boshlang'ich initsializatsiya
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderPoiList();
  initMap();
  lucide.createIcons();
});
