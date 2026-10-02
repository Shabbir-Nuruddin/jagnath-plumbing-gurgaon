import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "Jagnath";
export const HOURS: Hours = null;
export const FLAP_IDLE = "";
export const SCENE: Scene = "leak";
export const VISIT_IMG = "/img/p9.jpg";
export const VISIT_ALT = "Jagnath Plumbing Services shop counter at Subhash Chowk";
export const FALLBACK_IMG = "/img/p10.jpg";
export const ORDER: SectionKey[] = ["work", "reviews", "feature", "map", "visit"];

export const PHONE = "+919667890822";
export const PHONE_DISPLAY = "96678 90822";
export const WA = "919667890822";
export const SHOP = { lat: 28.4309242, lon: 77.0389168 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["s38", "sohna", "s47", "s50", "medi", "s39", "s46", "s40", "s31", "s57"]);
export const DEFAULT_AREA = "s47";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "Comes immediately on call and quickly detects the issue.",
  "Service fee was nominal",
  "Perfect work clean and very cheap",
  "Best plumbing services in Gurgaon.",
  "I really found someone who is honest, good at work, no high figh work suggestions… explained us the problem and rectified the issue. Very affordable too",
];

export const RATINGS = [
  { stars: 5, count: 101 },
  { stars: 4, count: 0 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 2 },
];

export const STATUSES = ["SUBHASH CHOWK", "ISSUE FOUND", "EXPLAINED", "NO UPSELL"];

export const FEATURE: Feature = {
  kind: "timeline",
  layout: "stack",
  title: { en: "No big bill for a small problem.", hi: "छोटी समस्या पर बड़ा बिल नहीं।" },
  body: {
    en: "The fear with any plumber is being sold a renovation for a dripping tap. Jagnath's customers describe the opposite, in four steps.",
    hi: "हर प्लंबर से डर यही होता है कि टपकती टोंटी पर पूरा रेनोवेशन बेच देगा। Jagnath के ग्राहक उल्टा बताते हैं, चार कदमों में।",
  },
  steps: [
    { label: { en: "He comes when you call", hi: "कॉल पर आते हैं" }, body: { en: "“Comes immediately on call,” one customer writes.", hi: "एक ग्राहक लिखते हैं कि कॉल करते ही आ जाते हैं।" } },
    { label: { en: "He finds the actual fault", hi: "असली ख़राबी ढूँढते हैं" }, body: { en: "“Quickly detects the issue.”", hi: "जल्दी समस्या पकड़ लेते हैं, ग्राहक के शब्दों में।" } },
    { label: { en: "He explains it to you", hi: "आपको समझाते हैं" }, body: { en: "“Explained us the problem,” then fixed it, one customer writes.", hi: "एक ग्राहक लिखते हैं कि पहले समस्या समझाई, फिर ठीक की।" } },
    { label: { en: "He fixes only that", hi: "सिर्फ़ वही ठीक करते हैं" }, body: { en: "“No high figh work suggestions.” And the fee stays small.", hi: "बेवजह के बड़े काम का सुझाव नहीं। और फ़ीस छोटी रहती है।" } },
  ],
  quote: REVIEWS[4],
  img: "/img/p1.jpg",
  imgCaption: { en: "The counter at Subhash Chowk, Sohna Road.", hi: "सुभाष चौक, सोहना रोड पर दुकान।" },
};

const en = {
  banner: "Concept preview made for Jagnath Plumbing Services by LocalLift. Not live yet.",
  brandSub: "Plumbing, Subhash Chowk",
  live: "Open 24 hours on Sohna Road",
  shopLabel: "Jagnath, Subhash Chowk",
  call: "Call Jagnath Plumbing",
  callShort: "Call now",
  whatsapp: "WhatsApp",
  waHello: "Hi, I need a plumber. Can you come and check?",
  heroTitle: ["An honest plumber", "on Sohna Road."],
  heroProof: "4.9 stars from 103 Google reviews. Subhash Chowk, Sector 38. Open 24 hours.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "Fast to arrive.", body: "From the counter at Subhash Chowk to Sectors 38 to 50.", quote: REVIEWS[0] },
    { title: "Clean work.", body: "WCs, shower panels, health faucets and underground lines.", quote: REVIEWS[2] },
    { title: "A small fee.", body: "The word customers use most after 'work' is affordable.", quote: REVIEWS[1] },
  ],
  googleReview: "Google review",
  distTitle: "How far is Subhash Chowk?",
  distBody: "Pick your area. Straight-line distance from the shop on Badshahpur Sohna Road.",
  distUnit: "km from the shop",
  distAsk: "Ask on WhatsApp",
  distWa: (area: string) => `Hi, I'm in ${area}. Can you send a plumber?`,
  workTitle: "From under the floor to the shower wall.",
  workBody: "Every photo here is from Jagnath Plumbing's own Google listing.",
  services: [
    { img: "/img/p2.jpg", title: "Exterior and shaft lines", body: "Outside walls and shafts, re-run and sealed." },
    { img: "/img/p5.jpg", title: "Underground joints", body: "Buried supply lines dug out and rejoined." },
    { img: "/img/p3.jpg", title: "Wall-hung WCs", body: "Frames, cisterns and pans fitted." },
    { img: "/img/p6.jpg", title: "Shower panels", body: "Panels and rain showers mounted and sealed." },
    { img: "/img/p10.jpg", title: "Wall mixers", body: "Hot and cold mixers set level in tile." },
    { img: "/img/p11.jpg", title: "Water softeners", body: "Rooftop softeners plumbed in." },
  ],
  revTitle: "103 reviews. 101 of them five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Plumbing work", n: 14 },
    { label: "Work", n: 11 },
    { label: "Affordability", n: 3 },
    { label: "Polite staff", n: 3 },
  ],
  stars: "stars",
  visitTitle: "At Subhash Chowk.",
  address: "Subhash Chowk, 4 Badshahpur Sohna Rd, Islampur Village, Sector 38, Gurugram",
  hours: "Open 24 hours, 7 days",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for Jagnath Plumbing Services, Gurugram. Photos and reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा जगनाथ प्लंबिंग सर्विसेज़ के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबिंग, सुभाष चौक",
  live: "सोहना रोड पर 24 घंटे खुला",
  shopLabel: "जगनाथ, सुभाष चौक",
  call: "जगनाथ प्लंबिंग को कॉल करें",
  callShort: "अभी कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते, मुझे प्लंबर चाहिए। क्या आकर देख सकते हैं?",
  heroTitle: ["सोहना रोड पर", "ईमानदार प्लंबर।"],
  heroProof: "103 गूगल रिव्यू में 4.9 स्टार। सुभाष चौक, सेक्टर 38। 24 घंटे खुला।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "जल्दी पहुँचते हैं।", body: "सुभाष चौक की दुकान से सेक्टर 38 से 50 तक।", quote: REVIEWS[0] },
    { title: "साफ़ काम।", body: "WC, शावर पैनल, हेल्थ फ़ॉसेट और ज़मीन के नीचे की लाइन।", quote: REVIEWS[2] },
    { title: "कम फ़ीस।", body: "'काम' के बाद ग्राहक सबसे ज़्यादा 'किफ़ायती' लिखते हैं।", quote: REVIEWS[1] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "सुभाष चौक कितनी दूर है?",
  distBody: "अपना इलाका चुनें। बादशाहपुर सोहना रोड की दुकान से सीधी दूरी।",
  distUnit: "किमी दुकान से",
  distAsk: "व्हाट्सऐप पर पूछें",
  distWa: (area: string) => `नमस्ते, मैं ${area} में हूँ। क्या प्लंबर भेज सकते हैं?`,
  workTitle: "फ़र्श के नीचे से शावर की दीवार तक।",
  workBody: "यहाँ की हर फ़ोटो जगनाथ प्लंबिंग की अपनी गूगल लिस्टिंग से है।",
  services: [
    { img: "/img/p2.jpg", title: "बाहरी दीवार और शाफ़्ट लाइन", body: "बाहर की दीवार और शाफ़्ट की लाइन, नई और सील।" },
    { img: "/img/p5.jpg", title: "ज़मीन के नीचे के जोड़", body: "दबी हुई लाइन खोदकर फिर से जोड़ी।" },
    { img: "/img/p3.jpg", title: "वॉल-हंग WC", body: "फ़्रेम, सिस्टर्न और पैन फ़िट।" },
    { img: "/img/p6.jpg", title: "शावर पैनल", body: "पैनल और रेन शावर लगाए और सील किए।" },
    { img: "/img/p10.jpg", title: "वॉल मिक्सर", body: "टाइल में बराबर लगे गरम-ठंडे मिक्सर।" },
    { img: "/img/p11.jpg", title: "वॉटर सॉफ़्टनर", body: "छत पर सॉफ़्टनर की प्लंबिंग।" },
  ],
  revTitle: "103 रिव्यू। 101 पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "प्लंबिंग का काम", n: 14 },
    { label: "काम", n: 11 },
    { label: "किफ़ायती", n: 3 },
    { label: "विनम्र स्टाफ़", n: 3 },
  ],
  stars: "स्टार",
  visitTitle: "सुभाष चौक पर।",
  address: "सुभाष चौक, 4 बादशाहपुर सोहना रोड, इस्लामपुर गाँव, सेक्टर 38, गुरुग्राम",
  hours: "24 घंटे, सातों दिन खुला",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा जगनाथ प्लंबिंग सर्विसेज़, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
