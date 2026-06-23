export const locales = ["en", "te"] as const;
export type Locale = (typeof locales)[number];

export type LocalizedText = {
  en: string;
  te: string;
};

export type PartialLocalizedText = {
  en: string;
  te?: string;
};

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  te: "తెలుగు"
};

export const siteMeta = {
  name: "Seetayya Foundation",
  legalName: "Seetayya Foundation",
  registrationNumber: "440-2019",
  foundedYear: "2019",
  futureDomain: "https://seetayyafoundation.org",
  githubPagesUrl: "https://praveenbommalibits.github.io/seetayya",
  serviceLine: {
    en: "Food, shelter, and care for elders, orphaned people, differently abled children, and people in need.",
    te: "వృద్ధులు, అనాధలు, దివ్యాంగ పిల్లలు, అవసరంలో ఉన్నవారికి ఆహారం, ఆశ్రయం, సంరక్షణ."
  },
  dharmaLine: {
    en: "Service is our dharma",
    te: "సేవే మన ధర్మం"
  }
} as const;

export const contactInfo = {
  email: "seetayyafoundation1@gmail.com",
  phones: ["+91 9490596331", "+91 7386374850"],
  address: {
    en: [
      "Seetayya Foundation",
      "Near Sompeta 3 km",
      "Mandapalli village",
      "Kanchili zone",
      "Pincode 532292",
      "Srikakulam District",
      "Andhra Pradesh"
    ],
    te: [
      "సీతయ్య ఫౌండేషన్",
      "సోంపేటకు 3 కి.మీ. సమీపంలో",
      "మండపల్లి గ్రామం",
      "కంచిలి మండలం",
      "పిన్‌కోడ్ 532292",
      "శ్రీకాకుళం జిల్లా",
      "ఆంధ్రప్రదేశ్"
    ]
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/seetayyafoundationsompeta/"
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/seetayyafoundation19/"
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@seetayyafoundation-sompeta?si=Ri2rTSdmxSYl829E"
    },
    {
      label: "X",
      href: "https://x.com/SF_NGOsompeta?t=kcX7ceQBtr610twUQDGq6g&s=09"
    }
  ]
} as const;

export const trustRegistry = {
  registration: {
    label: { en: "Foundation registration", te: "ఫౌండేషన్ నమోదు" },
    value: { en: "440-2019", te: "440-2019" }
  },
  csr: {
    label: { en: "CSR registration number", te: "CSR నమోదు సంఖ్య" },
    value: { en: "CSR00059810", te: "CSR00059810" }
  },
  ngoDarpan: {
    label: { en: "NGO Darpan ID", te: "NGO Darpan ID" },
    value: { en: "Not found in available scans", te: "అందుబాటులో ఉన్న స్కాన్‌లలో కనిపించలేదు" }
  },
  pan: {
    label: { en: "PAN on official receipts", te: "అధికారిక రసీదులపై PAN" },
    value: { en: "AAYTS9135N", te: "AAYTS9135N" }
  },
  fcra: {
    label: { en: "Foreign / NRI donations", te: "విదేశీ / NRI దానాలు" },
    value: { en: "Gated until FCRA is confirmed", te: "FCRA ధృవీకరణ వరకు నిలిపివేయబడింది" }
  }
} satisfies Record<string, { label: LocalizedText; value: LocalizedText }>;

export const csrInfo = {
  eyebrow: { en: "CSR partnership", te: "CSR భాగస్వామ్యం" },
  title: {
    en: "Partner with Seetayya Foundation through CSR",
    te: "CSR ద్వారా సీతయ్య ఫౌండేషన్‌తో భాగస్వామ్యం కావండి"
  },
  body: {
    en: "Companies can sponsor daily meals, elder care, health camps, and the planned rehabilitation center, or engage employees through structured volunteering. CSR registration number: CSR00059810.",
    te: "కంపెనీలు నిత్య భోజనం, వృద్ధుల సంరక్షణ, ఆరోగ్య శిబిరాలు, ప్రతిపాదిత పునరావాస కేంద్రానికి sponsorship ఇవ్వవచ్చు లేదా structured volunteering ద్వారా ఉద్యోగులను భాగస్వామ్యం చేయవచ్చు. CSR నమోదు సంఖ్య: CSR00059810."
  },
  registrationNumber: trustRegistry.csr.value,
  projects: [
    { en: "Daily meals and groceries", te: "నిత్య భోజనం మరియు సరుకులు" },
    { en: "Elder care and medicines", te: "వృద్ధుల సంరక్షణ మరియు ఔషధాలు" },
    { en: "Rehabilitation center support", te: "పునరావాస కేంద్ర సహాయం" },
    { en: "Health camps and awareness", te: "ఆరోగ్య శిబిరాలు మరియు అవగాహన" },
    { en: "Employee volunteering", te: "ఉద్యోగుల స్వచ్ఛంద సేవ" }
  ],
  cta: { en: "Explore CSR options", te: "CSR ఎంపికలు చూడండి" }
} satisfies {
  eyebrow: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  registrationNumber: LocalizedText;
  projects: LocalizedText[];
  cta: LocalizedText;
};

export const ui = {
  skip: {
    en: "Skip to content",
    te: "ప్రధాన విషయానికి వెళ్లండి"
  },
  menu: {
    en: "Menu",
    te: "మెను"
  },
  donate: {
    en: "Donate",
    te: "దానం"
  },
  donateNow: {
    en: "Donate now",
    te: "ఇప్పుడే దానం చేయండి"
  },
  sponsorDay: {
    en: "Sponsor a day",
    te: "ఒక రోజు స్పాన్సర్ చేయండి"
  },
  language: {
    en: "Language",
    te: "భాష"
  },
  admin: {
    en: "Content Admin",
    te: "కంటెంట్ అడ్మిన్"
  },
  viewAllEvents: {
    en: "View all events",
    te: "అన్ని కార్యక్రమాలు చూడండి"
  },
  readStory: {
    en: "Read story",
    te: "కథ చదవండి"
  },
  learnMore: {
    en: "Learn more",
    te: "మరింత తెలుసుకోండి"
  },
  contactFoundation: {
    en: "Contact the foundation",
    te: "ఫౌండేషన్‌ను సంప్రదించండి"
  }
} satisfies Record<string, LocalizedText>;

export const navItems = [
  { path: "/about", label: { en: "About", te: "మా గురించి" } },
  { path: "/programs", label: { en: "Programs", te: "సేవలు" } },
  { path: "/impact", label: { en: "Impact", te: "ప్రభావం" } },
  { path: "/events", label: { en: "Events", te: "కార్యక్రమాలు" } },
  { path: "/csr-partnerships", label: { en: "CSR", te: "CSR" } },
  { path: "/volunteer", label: { en: "Volunteer", te: "స్వచ్ఛంద సేవ" } },
  { path: "/contact", label: { en: "Contact", te: "సంప్రదించండి" } }
] as const;

export const footerLinks = [
  { path: "/csr-partnerships", label: { en: "CSR Partnerships", te: "CSR భాగస్వామ్యం" } },
  { path: "/volunteer", label: { en: "Volunteer", te: "స్వచ్ఛంద సేవ" } },
  { path: "/sponsor-a-day", label: { en: "Sponsor a Day", te: "అన్నదానం" } },
  { path: "/media", label: { en: "Media / Gallery", te: "మీడియా / గ్యాలరీ" } },
  { path: "/transparency", label: { en: "Transparency", te: "పారదర్శకత" } },
  { path: "/privacy-policy", label: { en: "Privacy Policy", te: "గోప్యతా విధానం" } },
  { path: "/terms-condition", label: { en: "Terms", te: "నిబంధనలు" } },
  { path: "/refund-cancellation", label: { en: "Refund & Cancellation", te: "రిఫండ్ & రద్దు" } },
  { path: "/admin", label: { en: "Content Admin", te: "కంటెంట్ అడ్మిన్" }, global: true }
] as const;

export const pageMeta = {
  home: {
    title: {
      en: "Seetayya Foundation | Food, shelter, and care",
      te: "సీతయ్య ఫౌండేషన్ | ఆహారం, ఆశ్రయం, సంరక్షణ"
    },
    description: {
      en: "Seetayya Foundation supports elders, orphaned people, differently abled children, and people in need through daily food, shelter, medical care, and community service.",
      te: "సీతయ్య ఫౌండేషన్ వృద్ధులు, అనాధలు, దివ్యాంగ పిల్లలు, అవసరంలో ఉన్నవారికి నిత్య ఆహారం, ఆశ్రయం, వైద్య సహాయం, సామాజిక సేవ అందిస్తుంది."
    }
  },
  about: {
    title: {
      en: "About Seetayya Foundation",
      te: "సీతయ్య ఫౌండేషన్ గురించి"
    },
    description: {
      en: "Learn the founders' story, mission, registration, and service values behind Seetayya Foundation.",
      te: "సీతయ్య ఫౌండేషన్ స్థాపకుల కథ, లక్ష్యం, నమోదు వివరాలు, సేవా విలువలను తెలుసుకోండి."
    }
  },
  programs: {
    title: {
      en: "Programs",
      te: "సేవా కార్యక్రమాలు"
    },
    description: {
      en: "Explore old-age home care, daily annadanam, health camps, and the planned rehabilitation project.",
      te: "వృద్ధాశ్రమ సంరక్షణ, నిత్య అన్నదానం, ఆరోగ్య శిబిరాలు, ప్రతిపాదిత పునరావాస ప్రాజెక్ట్ గురించి తెలుసుకోండి."
    }
  },
  impact: {
    title: {
      en: "Impact and Stories",
      te: "ప్రభావం మరియు కథలు"
    },
    description: {
      en: "Human stories and outcomes from Seetayya Foundation's service work.",
      te: "సీతయ్య ఫౌండేషన్ సేవా కార్యక్రమాల ద్వారా ఏర్పడిన మానవ కథలు మరియు ఫలితాలు."
    }
  },
  events: {
    title: {
      en: "Events",
      te: "కార్యక్రమాలు"
    },
    description: {
      en: "Recent Seetayya Foundation events, health camps, awareness programmes, service activities, and celebrations.",
      te: "సీతయ్య ఫౌండేషన్ ఇటీవలి కార్యక్రమాలు, ఆరోగ్య శిబిరాలు, అవగాహన సదస్సులు, సేవా వేడుకలు."
    }
  },
  sponsor: {
    title: {
      en: "Sponsor a Day",
      te: "ఒక రోజు అన్నదానం"
    },
    description: {
      en: "Sponsor daily food, medicines, and care at Seetayya Foundation.",
      te: "సీతయ్య ఫౌండేషన్‌లో ఒక రోజు ఆహారం, ఔషధాలు, సంరక్షణకు సహకరించండి."
    }
  },
  donate: {
    title: {
      en: "Donate",
      te: "దానం"
    },
    description: {
      en: "Support Seetayya Foundation through impact-tied donation options and verified payment channels.",
      te: "ప్రభావంతో అనుసంధానించిన దానం ఎంపికలు, ధృవీకరించిన చెల్లింపు మార్గాల ద్వారా సీతయ్య ఫౌండేషన్‌కు సహాయం చేయండి."
    }
  },
  media: {
    title: {
      en: "Media and Gallery",
      te: "మీడియా మరియు గ్యాలరీ"
    },
    description: {
      en: "Authentic photos from foundation care, events, and service programmes.",
      te: "ఫౌండేషన్ సంరక్షణ, కార్యక్రమాలు, సేవా కార్యక్రమాల నిజమైన చిత్రాలు."
    }
  },
  transparency: {
    title: {
      en: "Transparency",
      te: "పారదర్శకత"
    },
    description: {
      en: "Registration details, tax-status notes, CSR certificate, Form 10AC documents, and annual-report placeholders.",
      te: "నమోదు వివరాలు, పన్ను స్థితి గమనికలు, CSR సర్టిఫికేట్, ఫారం 10AC పత్రాలు, వార్షిక నివేదిక స్థాన సూచనలు."
    }
  },
  contact: {
    title: {
      en: "Contact",
      te: "సంప్రదించండి"
    },
    description: {
      en: "Contact Seetayya Foundation for donations, sponsor-day service, volunteering, visits, and foundation support.",
      te: "దానాలు, అన్నదానం, స్వచ్ఛంద సేవ, సందర్శనలు, సహాయం కోసం సీతయ్య ఫౌండేషన్‌ను సంప్రదించండి."
    }
  },
  csr: {
    title: {
      en: "CSR Partnerships",
      te: "CSR భాగస్వామ్యాలు"
    },
    description: {
      en: "Partner with Seetayya Foundation through CSR project sponsorship, in-kind support, employee volunteering, payroll giving, and impact reporting.",
      te: "CSR ప్రాజెక్ట్ స్పాన్సర్‌షిప్, వస్తు సహాయం, ఉద్యోగుల స్వచ్ఛంద సేవ, పేరోల్ గివింగ్, ప్రభావ నివేదికల ద్వారా సీతయ్య ఫౌండేషన్‌తో భాగస్వామ్యం కావండి."
    }
  },
  volunteer: {
    title: {
      en: "Volunteer with Seetayya Foundation",
      te: "సీతయ్య ఫౌండేషన్‌తో స్వచ్ఛంద సేవ"
    },
    description: {
      en: "Volunteer on-site, remotely, or through your workplace while continuing your regular job and schedule.",
      te: "మీ సాధారణ ఉద్యోగం మరియు షెడ్యూల్ కొనసాగిస్తూ onsite, remote లేదా workplace ద్వారా స్వచ్ఛంద సేవ చేయండి."
    }
  }
} satisfies Record<string, { title: LocalizedText; description: LocalizedText }>;

export const csrSponsorshipTracks = [
  {
    title: { en: "Adopt a service project", te: "ఒక సేవా ప్రాజెక్ట్‌ను దత్తత తీసుకోండి" },
    eyebrow: { en: "CSR grants", te: "CSR గ్రాంట్లు" },
    text: {
      en: "Support a defined project such as daily meals, elder-care medicines, health camps, or the rehabilitation center with quarterly updates.",
      te: "నిత్య భోజనం, వృద్ధుల ఔషధాలు, ఆరోగ్య శిబిరాలు లేదా పునరావాస కేంద్రం వంటి స్పష్టమైన ప్రాజెక్ట్‌కు త్రైమాసిక నవీకరణలతో సహాయం చేయండి."
    },
    items: [
      { en: "Meals and groceries", te: "భోజనం మరియు సరుకులు" },
      { en: "Medicines and resident care", te: "ఔషధాలు మరియు నివాసుల సంరక్షణ" },
      { en: "Rehabilitation infrastructure", te: "పునరావాస మౌలిక సదుపాయాలు" }
    ]
  },
  {
    title: { en: "Corporate donations and in-kind support", te: "కార్పొరేట్ దానాలు మరియు వస్తు సహాయం" },
    eyebrow: { en: "Flexible sponsorship", te: "సౌకర్యవంతమైన స్పాన్సర్‌షిప్" },
    text: {
      en: "Contribute funds, supplies, equipment, health-camp material, groceries, bedding, or other verified needs.",
      te: "నిధులు, సరఫరాలు, పరికరాలు, ఆరోగ్య శిబిర సామగ్రి, సరుకులు, బెడ్డింగ్ లేదా ఇతర ధృవీకరించిన అవసరాలకు సహాయం చేయండి."
    },
    items: [
      { en: "One-time or annual support", te: "ఒకసారి లేదా వార్షిక సహాయం" },
      { en: "Office-led collection drives", te: "ఆఫీస్ ఆధారిత కలెక్షన్ డ్రైవ్‌లు" },
      { en: "Verified needs list", te: "ధృవీకరించిన అవసరాల జాబితా" }
    ]
  },
  {
    title: { en: "Employee volunteering days", te: "ఉద్యోగుల స్వచ్ఛంద సేవా దినాలు" },
    eyebrow: { en: "Employee engagement", te: "ఉద్యోగుల భాగస్వామ్యం" },
    text: {
      en: "Bring teams for structured service days or remote skill support that fits their normal work schedules.",
      te: "సాధారణ పని షెడ్యూల్‌కు సరిపోయే structured service days లేదా remote skill support కోసం టీమ్‌లను తీసుకురండి."
    },
    items: [
      { en: "On-site service visits", te: "On-site సేవా సందర్శనలు" },
      { en: "Remote digital support", te: "Remote డిజిటల్ సహాయం" },
      { en: "Health-camp support roles", te: "ఆరోగ్య శిబిర సహాయక పాత్రలు" }
    ]
  },
  {
    title: { en: "Payroll and matched giving", te: "పేరోల్ మరియు matched giving" },
    eyebrow: { en: "Monthly giving", te: "నెలవారీ దానం" },
    text: {
      en: "Enable employees to give monthly, with optional company matching for meals, medicines, and resident care.",
      te: "భోజనం, ఔషధాలు, నివాసుల సంరక్షణ కోసం ఉద్యోగుల నెలవారీ దానాన్ని enable చేసి, కంపెనీ matching support ఇవ్వవచ్చు."
    },
    items: [
      { en: "Monthly employee giving", te: "ఉద్యోగుల నెలవారీ దానం" },
      { en: "Company match option", te: "కంపెనీ match option" },
      { en: "Receipt and impact updates", te: "రసీదు మరియు ప్రభావ నవీకరణలు" }
    ]
  }
] satisfies Array<{
  title: LocalizedText;
  eyebrow: LocalizedText;
  text: LocalizedText;
  items: LocalizedText[];
}>;

export const csrProcess = [
  {
    title: { en: "Choose the CSR focus", te: "CSR దృష్టిని ఎంచుకోండి" },
    text: { en: "Meals, elder care, health camps, infrastructure, rehabilitation, or employee volunteering.", te: "భోజనం, వృద్ధ సంరక్షణ, ఆరోగ్య శిబిరాలు, మౌలిక సదుపాయాలు, పునరావాసం లేదా ఉద్యోగుల స్వచ్ఛంద సేవ." }
  },
  {
    title: { en: "Scope budget and schedule", te: "బడ్జెట్ మరియు షెడ్యూల్ నిర్ణయించండి" },
    text: { en: "The foundation confirms needs, timeline, volunteer roles, and reporting expectations.", te: "ఫౌండేషన్ అవసరాలు, టైమ్‌లైన్, volunteer roles, reporting expectations ధృవీకరిస్తుంది." }
  },
  {
    title: { en: "Implement with dignity", te: "గౌరవంతో అమలు చేయండి" },
    text: { en: "Visits, donations, and volunteering are coordinated without disrupting resident care.", te: "నివాసుల సంరక్షణకు అంతరాయం లేకుండా సందర్శనలు, దానాలు, స్వచ్ఛంద సేవ సమన్వయం చేస్తాం." }
  },
  {
    title: { en: "Share impact updates", te: "ప్రభావ నవీకరణలు పంచండి" },
    text: { en: "Partners receive photos, usage notes, and simple outcome reports after the activity is documented.", te: "కార్యక్రమం documentation పూర్తైన తర్వాత భాగస్వాములకు ఫోటోలు, వినియోగ గమనికలు, సరళమైన outcome reports అందుతాయి." }
  }
] satisfies Array<{ title: LocalizedText; text: LocalizedText }>;

export const volunteerTracks = [
  {
    title: { en: "Weekend or evening volunteering", te: "వారాంతం లేదా సాయంత్రం స్వచ్ఛంద సేవ" },
    commitment: { en: "2-4 hours when available", te: "అవకాశం ఉన్నప్పుడు 2-4 గంటలు" },
    text: {
      en: "For people with regular jobs who want to serve without disturbing work. Help with visits, meal service, reading, companionship, and event support.",
      te: "సాధారణ ఉద్యోగం కొనసాగిస్తూ సేవ చేయాలనుకునేవారికి. సందర్శనలు, భోజన సేవ, చదవడం, ఆప్యాయ సంభాషణ, కార్యక్రమ సహాయంలో పాల్గొనండి."
    }
  },
  {
    title: { en: "Remote skill volunteering", te: "Remote skill volunteering" },
    commitment: { en: "Flexible, task-based", te: "సౌకర్యవంతమైన task-based సేవ" },
    text: {
      en: "Support from home with translation, design, content writing, social media, spreadsheets, donor follow-up drafts, or basic technology help.",
      te: "ఇంటి నుంచే translation, design, content writing, social media, spreadsheets, donor follow-up drafts లేదా basic technology సహాయం చేయండి."
    }
  },
  {
    title: { en: "Corporate employee volunteering", te: "కార్పొరేట్ ఉద్యోగుల స్వచ్ఛంద సేవ" },
    commitment: { en: "Half-day, full-day, or monthly", te: "అర రోజు, పూర్తి రోజు లేదా నెలవారీ" },
    text: {
      en: "Structured group activities for teams: service visits, grocery kits, health-camp assistance, digital documentation, and fundraising support.",
      te: "టీమ్‌ల కోసం structured group activities: సేవా సందర్శనలు, grocery kits, health-camp assistance, digital documentation, fundraising support."
    }
  },
  {
    title: { en: "Health camp and event support", te: "ఆరోగ్య శిబిరం మరియు కార్యక్రమ సహాయం" },
    commitment: { en: "Activity-based", te: "కార్యక్రమ ఆధారితం" },
    text: {
      en: "Help with registration desks, queue guidance, basic logistics, photo documentation with consent, and post-event reporting.",
      te: "Registration desks, queue guidance, basic logistics, consent తో photo documentation, post-event reporting లో సహాయం చేయండి."
    }
  }
] satisfies Array<{
  title: LocalizedText;
  commitment: LocalizedText;
  text: LocalizedText;
}>;

export const stats = [
  { value: { en: "2019", te: "2019" }, label: { en: "Founded for service", te: "సేవ కోసం ప్రారంభం" } },
  { value: { en: "2", te: "2" }, label: { en: "Buildings constructed", te: "నిర్మించిన భవనాలు" } },
  { value: { en: "4+ years", te: "4+ సంవత్సరాలు" }, label: { en: "Old-age-home services", te: "వృద్ధాశ్రమ సేవలు" } },
  { value: { en: "Reg: 440-2019", te: "నమోదు: 440-2019" }, label: { en: "Foundation registration", te: "ఫౌండేషన్ నమోదు" } }
] as const;

export const programs = [
  {
    id: "vanaprastha",
    title: { en: "Vanaprastha Ashramam", te: "వానప్రస్థ ఆశ్రమం" },
    eyebrow: { en: "Old-age home", te: "వృద్ధాశ్రమం" },
    image: "/uploads/events/residents-care.jpg",
    summary: {
      en: "A peaceful service home for elderly and orphaned people who need food, shelter, care, and family-like support.",
      te: "ఆహారం, ఆశ్రయం, సంరక్షణ, కుటుంబంలాంటి తోడ్పాటు అవసరమైన వృద్ధులు, అనాధలకు ప్రశాంత సేవా గృహం."
    },
    details: {
      en: "The old site says the foundation has continued old-age-home services for more than four years. Residents receive daily care, a calm environment, and emotional support.",
      te: "పాత వెబ్‌సైట్ ప్రకారం ఫౌండేషన్ నాలుగు సంవత్సరాలకు పైగా వృద్ధాశ్రమ సేవలను కొనసాగిస్తోంది. నివాసులకు నిత్య సంరక్షణ, ప్రశాంత వాతావరణం, ఆప్యాయత లభిస్తోంది."
    }
  },
  {
    id: "nityannadana",
    title: { en: "Nityannadana Nilayam", te: "నిత్యాన్నదాన నిలయం" },
    eyebrow: { en: "Daily food service", te: "నిత్య అన్నదానం" },
    image: "/uploads/events/donate-us-photo.jpg",
    summary: {
      en: "Daily food support connected to the foundation's service home and community care work.",
      te: "ఫౌండేషన్ సేవా గృహం మరియు సామాజిక సేవకు అనుసంధానమైన నిత్య ఆహార సహాయం."
    },
    details: {
      en: "The founders built Seetayya Foundation Nityannadana Nilayam with donations and donor support so food service remains central to the mission.",
      te: "ఆహార సేవ ఫౌండేషన్ ధ్యేయంలో ప్రధానంగా ఉండేందుకు దాతల సహకారంతో సీతయ్య ఫౌండేషన్ నిత్యాన్నదాన నిలయం నిర్మించబడింది."
    }
  },
  {
    id: "health-camps",
    title: { en: "Health Camps and Awareness", te: "ఆరోగ్య శిబిరాలు మరియు అవగాహన" },
    eyebrow: { en: "Community health", te: "సామాజిక ఆరోగ్యం" },
    image: "/uploads/events/blood-camp.jpg",
    summary: {
      en: "Blood donation camps, medical camps, eye care, yoga, and legal-awareness sessions listed across the old site.",
      te: "పాత వెబ్‌సైట్‌లో ఉన్న రక్తదాన శిబిరాలు, వైద్య శిబిరాలు, కంటి సంరక్షణ, యోగా, న్యాయ అవగాహన కార్యక్రమాలు."
    },
    details: {
      en: "Activities include a Mega Blood Donation Camp with Helping Hands, free medical camps, eye checkups, Yoga Day celebrations, and legal awareness for elderly people's rights.",
      te: "కార్యక్రమాలలో Helping Hands తో మెగా రక్తదాన శిబిరం, ఉచిత వైద్య శిబిరాలు, కంటి పరీక్షలు, యోగా దినోత్సవం, వయోవృద్ధుల హక్కులపై న్యాయ అవగాహన ఉన్నాయి."
    }
  },
  {
    id: "rehabilitation",
    title: { en: "Rehabilitation Project", te: "పునరావాస ప్రాజెక్ట్" },
    eyebrow: { en: "Differently abled children", te: "దివ్యాంగ పిల్లలు" },
    image: "/uploads/events/founders.jpg",
    summary: {
      en: "A planned special school and rehabilitation center for mentally challenged and differently abled children.",
      te: "మానసిక వికలాంగులు, దివ్యాంగ పిల్లల కోసం ప్రతిపాదిత ప్రత్యేక పాఠశాల మరియు పునరావాస కేంద్రం."
    },
    details: {
      en: "The old project page requests donor participation for a new building with special facilities for differently abled children in the foundation premises.",
      te: "ఫౌండేషన్ ప్రాంగణంలో దివ్యాంగ పిల్లల కోసం ప్రత్యేక సదుపాయాలతో కొత్త భవన నిర్మాణానికి దాతల సహకారం కోరుతూ పాత ప్రాజెక్ట్ పేజీ ప్రచురించబడింది."
    }
  }
] as const;

export const serviceAreas = [
  {
    title: { en: "Medical and eye care camps", te: "వైద్య మరియు కంటి సంరక్షణ శిబిరాలు" },
    text: {
      en: "Free medical camps, eye checkups, and free eye-operation support with Sompeta Aarogyavaram doctors are mentioned in old-site content.",
      te: "సోంపేట ఆరోగ్యవరం వైద్యుల సహకారంతో ఉచిత వైద్య శిబిరాలు, కంటి పరీక్షలు, ఉచిత కంటి ఆపరేషన్ సహాయం పాత కంటెంట్‌లో ఉన్నాయి."
    }
  },
  {
    title: { en: "Drinking water distribution", te: "తాగునీటి పంపిణీ" },
    text: {
      en: "The Vision & Mission page mentions drinking-water service programmes in areas facing water problems.",
      te: "తాగునీటి సమస్యలున్న ప్రాంతాల్లో తాగునీటి సేవా కార్యక్రమాలు నిర్వహించినట్లు Vision & Mission పేజీ పేర్కొంటుంది."
    }
  },
  {
    title: { en: "Cow care and medical support", te: "గోమాత సంరక్షణ మరియు వైద్య సహాయం" },
    text: {
      en: "Old content includes cow care, paralysis-victim support, and medical-assistance efforts for kidney-disease needs.",
      te: "పాత కంటెంట్‌లో గోమాత సంరక్షణ, పక్షవాతం బాధితులకు సహాయం, కిడ్నీ వ్యాధి బాధితులకు వైద్య సహాయం ఉన్నాయి."
    }
  },
  {
    title: { en: "Self-employment programs", te: "స్వయం ఉపాధి కార్యక్రమాలు" },
    text: {
      en: "Future service activities include self-employment programmes for young women.",
      te: "భవిష్యత్ సేవా కార్యక్రమాలలో యువతుల కోసం స్వయం ఉపాధి కార్యక్రమాలు ఉన్నాయి."
    }
  }
] as const;

export const categoryLabels: Record<string, LocalizedText> = {
  "Community Event": { en: "Community Event", te: "సామాజిక కార్యక్రమం" },
  "Health Camp": { en: "Health Camp", te: "ఆరోగ్య శిబిరం" },
  Wellness: { en: "Wellness", te: "ఆరోగ్య సాధన" },
  Awareness: { en: "Awareness", te: "అవగాహన" },
  "Daily Care": { en: "Daily Care", te: "నిత్య సంరక్షణ" },
  Activities: { en: "Activities", te: "సేవా కార్యక్రమాలు" }
};

export const impactTiers = [
  {
    amount: 500,
    title: { en: "Meals for an elder", te: "ఒక వృద్ధుడికి భోజనం" },
    impact: {
      en: "A day of meals for one elder.",
      te: "ఒక వృద్ధునికి ఒక రోజు భోజనం."
    }
  },
  {
    amount: 1500,
    title: { en: "Food and medicines", te: "ఆహారం మరియు ఔషధాలు" },
    impact: {
      en: "A week of food plus basic medicines for one resident.",
      te: "ఒక నివాసికి వారం రోజుల ఆహారం మరియు ప్రాథమిక ఔషధాలు."
    }
  },
  {
    amount: 5000,
    title: { en: "Sponsor a full day", te: "ఒక పూర్తి రోజు సేవ" },
    impact: {
      en: "A full day of care for the whole home.",
      te: "మొత్తం ఆశ్రమానికి ఒక రోజు సంరక్షణ."
    },
    featured: true
  },
  {
    amount: 12000,
    title: { en: "Rehabilitation support", te: "పునరావాస సహాయం" },
    impact: {
      en: "Estimated monthly support for one differently abled child through the rehabilitation project.",
      te: "పునరావాస ప్రాజెక్ట్ ద్వారా ఒక దివ్యాంగ చిన్నారికి అంచనా నెలవారీ సహాయం."
    }
  }
] as const;

export const impactStories = [
  {
    slug: "founders-story",
    title: { en: "A home built from hard-earned savings", te: "కష్టార్జితంతో నిర్మించిన సేవా గృహం" },
    image: "/uploads/events/founders.jpg",
    category: { en: "Founders' story", te: "స్థాపకుల కథ" },
    summary: {
      en: "Gulla Ramesh and Gulla Mohanarao, sons of late Sri Gulla Seetayya garu, bought land in Sompeta and donated part of it for service to elders and orphaned people.",
      te: "దివంగత శ్రీ గుళ్ల సీతయ్య గారి కుమారులు గుళ్ల రమేష్, గుళ్ల మోహనరావు సోంపేటలో భూమి కొనుగోలు చేసి, వృద్ధులు మరియు అనాధల సేవ కోసం దానిలో భాగాన్ని దానం చేశారు."
    },
    body: {
      en: [
        "The foundation began from a family decision to turn hard-earned savings into lasting service. While running their business in Sompeta village, the brothers chose to dedicate land and support to people who needed shelter, food, and dignity.",
        "With the help of donations and donor support, two buildings were constructed: Seetayya Foundation Vanaprastha Ashramam and Seetayya Foundation Nityannadana Nilayam."
      ],
      te: [
        "కష్టార్జిత సంపాదనను నిలకడైన సేవగా మార్చాలనే కుటుంబ నిర్ణయం నుంచే ఫౌండేషన్ ప్రారంభమైంది. సోంపేట గ్రామంలో వ్యాపారం చేస్తూ, ఆశ్రయం, ఆహారం, గౌరవం అవసరమైన వారికి భూమి మరియు సహాయాన్ని అంకితం చేయాలని సోదరులు నిర్ణయించారు.",
        "దాతల సహకారంతో సీతయ్య ఫౌండేషన్ వానప్రస్థ ఆశ్రమం మరియు సీతయ్య ఫౌండేషన్ నిత్యాన్నదాన నిలయం అనే రెండు భవనాలు నిర్మించబడ్డాయి."
      ]
    }
  },
  {
    slug: "daily-care",
    title: { en: "Daily care with a family feeling", te: "కుటుంబంలాంటి నిత్య సంరక్షణ" },
    image: "/uploads/events/residents-care.jpg",
    category: { en: "Old-age home care", te: "వృద్ధాశ్రమ సంరక్షణ" },
    summary: {
      en: "Residents receive food, shelter, a peaceful environment, and emotional support through the old-age-home service.",
      te: "వృద్ధాశ్రమ సేవ ద్వారా నివాసులు ఆహారం, ఆశ్రయం, ప్రశాంత వాతావరణం, ఆప్యాయమైన తోడ్పాటు పొందుతున్నారు."
    },
    body: {
      en: [
        "The old About page says elderly and orphaned people staying at Seetayya Foundation are able to spend their time in a peaceful environment and find a family-like place of care.",
        "The foundation continues seeking support so daily food, shelter, and basic care can remain dependable."
      ],
      te: [
        "సీతయ్య ఫౌండేషన్‌లో ఆశ్రయం పొందుతున్న వృద్ధులు, అనాధలు ప్రశాంత వాతావరణంలో జీవిస్తూ కుటుంబంలాంటి సంరక్షణను పొందుతున్నారని పాత About పేజీ చెబుతుంది.",
        "నిత్య ఆహారం, ఆశ్రయం, ప్రాథమిక సంరక్షణ నిరంతరంగా కొనసాగేందుకు ఫౌండేషన్ దాతల సహకారాన్ని కోరుతోంది."
      ]
    }
  },
  {
    slug: "rehabilitation-vision",
    title: { en: "A rehabilitation vision for children", te: "పిల్లల పునరావాసం కోసం ఒక దృష్టి" },
    image: "/uploads/events/yoga-day.jpg",
    category: { en: "Future project", te: "భవిష్యత్ ప్రాజెక్ట్" },
    summary: {
      en: "The foundation is planning a special school and rehabilitation center for differently abled children in the foundation premises.",
      te: "ఫౌండేషన్ ప్రాంగణంలో దివ్యాంగ పిల్లల కోసం ప్రత్యేక పాఠశాల మరియు పునరావాస కేంద్రాన్ని ఫౌండేషన్ ప్రతిపాదిస్తోంది."
    },
    body: {
      en: [
        "The old project page describes a need for dedicated support as elderly people, orphaned people, mentally challenged people, and differently abled people continue reaching the ashram.",
        "The new project asks donors to participate in constructing a center with special facilities for differently abled children."
      ],
      te: [
        "వృద్ధులు, అనాధలు, మానసిక వికలాంగులు, దివ్యాంగులు ఆశ్రమానికి చేరుతున్నందున ప్రత్యేక సహాయం అవసరమని పాత ప్రాజెక్ట్ పేజీ వివరిస్తుంది.",
        "దివ్యాంగ పిల్లల కోసం ప్రత్యేక సదుపాయాలతో కూడిన కేంద్రం నిర్మాణంలో దాతలు భాగస్వామ్యం కావాలని ఈ ప్రాజెక్ట్ కోరుతోంది."
      ]
    }
  }
] as const;

export const transparencyNotes = {
  registration: {
    en: "Registered charitable foundation. Registration number: 440-2019.",
    te: "నమోదైన సేవా ఫౌండేషన్. నమోదు సంఖ్య: 440-2019."
  },
  tax: {
    en: "Income Tax Form 10AC scans list Section 12A registration number AAYTS9135NE20219 and Section 80G registration number AAYTS9135NF20217. The 80G approval scan shows approval dated 08-02-2022 for AY 2022-23 to AY 2026-27. Donation tax benefits are subject to applicable law and receipt requirements.",
    te: "Income Tax Form 10AC స్కాన్‌లలో Section 12A నమోదు సంఖ్య AAYTS9135NE20219 మరియు Section 80G నమోదు సంఖ్య AAYTS9135NF20217 ఉంది. 80G approval scan లో 08-02-2022 approval date మరియు AY 2022-23 నుండి AY 2026-27 వరకు చూపబడింది. Donation tax benefits వర్తించే చట్టం మరియు receipt requirements కు లోబడి ఉంటాయి."
  },
  fcra: {
    en: "Foreign contributions are not accepted through this static donation flow unless FCRA registration and the required designated SBI New Delhi account are confirmed.",
    te: "FCRA నమోదు మరియు అవసరమైన SBI న్యూ ఢిల్లీ నిర్దిష్ట ఖాతా ధృవీకరించబడే వరకు ఈ static donation flow ద్వారా విదేశీ విరాళాలు స్వీకరించబడవు."
  },
  reports: {
    en: "Annual reports and audited financials are prepared as placeholder slots until the foundation uploads final public PDFs.",
    te: "ఫౌండేషన్ తుది పబ్లిక్ PDFలను అప్‌లోడ్ చేసే వరకు వార్షిక నివేదికలు మరియు ఆడిటెడ్ ఫైనాన్షియల్స్ కోసం స్థాన సూచనలు ఉంచబడ్డాయి."
  }
} satisfies Record<string, LocalizedText>;

export const legalPages = {
  "privacy-policy": {
    title: { en: "Privacy Policy", te: "గోప్యతా విధానం" },
    description: {
      en: "DPDP-aware privacy policy for Seetayya Foundation website visitors, donors, and contacts.",
      te: "సీతయ్య ఫౌండేషన్ వెబ్‌సైట్ సందర్శకులు, దాతలు, సంప్రదింపుల కోసం DPDP-సంబంధిత గోప్యతా విధానం."
    },
    sections: [
      {
        heading: { en: "What we collect", te: "మేము సేకరించే సమాచారం" },
        body: {
          en: [
            "This static website collects only the information a visitor chooses to share through donation, sponsor-day, or contact actions: name, email, phone, message, donation amount, receipt details, and consent choices.",
            "Payment information is handled by the selected hosted payment gateway, such as Razorpay Payment Pages or the existing verified donation form. This static website does not store card, UPI, or netbanking credentials."
          ],
          te: [
            "ఈ static website లో దాతలు లేదా సందర్శకులు స్వయంగా పంచుకునే పేరు, ఇమెయిల్, ఫోన్, సందేశం, దానం మొత్తం, రసీదు వివరాలు, సమ్మతి ఎంపికలు మాత్రమే సేకరించబడతాయి.",
            "చెల్లింపు సమాచారం Razorpay Payment Pages వంటి hosted payment gateway లేదా ప్రస్తుత ధృవీకరించిన donation form ద్వారా నిర్వహించబడుతుంది. ఈ static website కార్డు, UPI, netbanking వివరాలను నిల్వ చేయదు."
          ]
        }
      },
      {
        heading: { en: "Why we use it", te: "దానిని ఎందుకు ఉపయోగిస్తాం" },
        body: {
          en: [
            "Information is used to respond to messages, process donations, issue receipts, coordinate sponsor-day requests, prevent misuse, and maintain legally required donation records.",
            "No third-party trackers are added by default. Any future analytics or marketing tools should be disclosed here before use."
          ],
          te: [
            "సందేశాలకు స్పందించడం, దానాలు ప్రాసెస్ చేయడం, రసీదులు జారీ చేయడం, అన్నదానం అభ్యర్థనలు సమన్వయం చేయడం, దుర్వినియోగం నివారించడం, చట్టపరంగా అవసరమైన donation records నిర్వహించడం కోసం సమాచారం ఉపయోగిస్తాం.",
            "డిఫాల్ట్‌గా third-party trackers జోడించబడలేదు. భవిష్యత్‌లో analytics లేదా marketing tools ఉపయోగిస్తే ముందుగా ఇక్కడ వెల్లడించాలి."
          ]
        }
      },
      {
        heading: { en: "Consent and rights", te: "సమ్మతి మరియు హక్కులు" },
        body: {
          en: [
            "Donation and contact forms include a consent checkbox. Donors may contact the foundation to correct receipt information or ask questions about how their data is used.",
            "For privacy requests, email seetayyafoundation1@gmail.com or call the foundation phone numbers listed on the Contact page."
          ],
          te: [
            "Donation మరియు contact forms లో consent checkbox ఉంటుంది. రసీదు వివరాలు సరిచేయడానికి లేదా తమ డేటా వినియోగంపై ప్రశ్నలు అడగడానికి దాతలు ఫౌండేషన్‌ను సంప్రదించవచ్చు.",
            "గోప్యతా అభ్యర్థనల కోసం seetayyafoundation1@gmail.com కు ఇమెయిల్ చేయండి లేదా Contact పేజీలో ఉన్న ఫోన్ నంబర్లకు కాల్ చేయండి."
          ]
        }
      }
    ]
  },
  "terms-condition": {
    title: { en: "Terms", te: "నిబంధనలు" },
    description: {
      en: "Terms and conditions for Seetayya Foundation website usage and donations.",
      te: "సీతయ్య ఫౌండేషన్ వెబ్‌సైట్ వినియోగం మరియు దానాల కోసం నిబంధనలు."
    },
    sections: [
      {
        heading: { en: "Using this website", te: "ఈ వెబ్‌సైట్ వినియోగం" },
        body: {
          en: [
            "By using this website, visitors agree to use the content for lawful, respectful, personal, and informational purposes.",
            "Foundation photos, certificate scans, logo, and written content may not be republished or used to imply endorsement without written permission."
          ],
          te: [
            "ఈ వెబ్‌సైట్‌ను ఉపయోగించడం ద్వారా సందర్శకులు కంటెంట్‌ను చట్టబద్ధమైన, గౌరవప్రదమైన, వ్యక్తిగత మరియు సమాచార ప్రయోజనాలకే ఉపయోగించేందుకు అంగీకరిస్తారు.",
            "ఫౌండేషన్ ఫోటోలు, certificate scans, logo, written content ను లిఖిత అనుమతి లేకుండా తిరిగి ప్రచురించకూడదు లేదా endorsement సూచించడానికి ఉపయోగించకూడదు."
          ]
        }
      },
      {
        heading: { en: "Donation information", te: "దానం సమాచారం" },
        body: {
          en: [
            "Visitors should provide authentic and correct information while donating. The foundation may contact donors to verify receipt details.",
            "Tax-deduction statements are displayed only after the relevant registration numbers and eligibility text are confirmed in site configuration."
          ],
          te: [
            "దానం చేస్తూ సరైన, నిజమైన సమాచారాన్ని ఇవ్వాలి. రసీదు వివరాలను ధృవీకరించడానికి ఫౌండేషన్ దాతలను సంప్రదించవచ్చు.",
            "సంబంధిత నమోదు సంఖ్యలు మరియు eligibility text site configuration లో ధృవీకరించిన తర్వాతే tax-deduction statements చూపబడతాయి."
          ]
        }
      },
      {
        heading: { en: "External links", te: "బాహ్య లింకులు" },
        body: {
          en: [
            "The website may link to payment gateways, maps, social platforms, or other services. Those services have their own terms and privacy practices.",
            "The foundation tries to keep information accurate but does not warrant that every page is always complete or uninterrupted."
          ],
          te: [
            "ఈ వెబ్‌సైట్ payment gateways, maps, social platforms లేదా ఇతర సేవలకు లింక్ ఇవ్వవచ్చు. ఆ సేవలకు వారి స్వంత నిబంధనలు మరియు privacy practices ఉంటాయి.",
            "సమాచారం ఖచ్చితంగా ఉండేందుకు ఫౌండేషన్ ప్రయత్నిస్తుంది, కానీ ప్రతి పేజీ ఎప్పుడూ పూర్తిగా లేదా అంతరాయం లేకుండా ఉంటుందని హామీ ఇవ్వదు."
          ]
        }
      }
    ]
  },
  "refund-cancellation": {
    title: { en: "Refund & Cancellation", te: "రిఫండ్ మరియు రద్దు" },
    description: {
      en: "Refund and cancellation information for Seetayya Foundation donations.",
      te: "సీతయ్య ఫౌండేషన్ దానాల కోసం రిఫండ్ మరియు రద్దు సమాచారం."
    },
    sections: [
      {
        heading: { en: "Donation corrections", te: "దానం వివరాల సవరణ" },
        body: {
          en: [
            "If a donor made an error in amount, purpose, contact details, or receipt information, they should email seetayyafoundation1@gmail.com within 7 working days.",
            "The foundation will try to correct the parameter whenever possible, based on payment-gateway and accounting constraints."
          ],
          te: [
            "దాత మొత్తం, ప్రయోజనం, contact details లేదా receipt information లో పొరపాటు చేసినట్లయితే, 7 working days లో seetayyafoundation1@gmail.com కు ఇమెయిల్ చేయాలి.",
            "payment-gateway మరియు accounting పరిమితుల ప్రకారం సాధ్యమైనంతవరకు ఫౌండేషన్ ఆ వివరాలను సరిచేయడానికి ప్రయత్నిస్తుంది."
          ]
        }
      },
      {
        heading: { en: "Refunds", te: "రిఫండ్లు" },
        body: {
          en: [
            "Accepted online donations are generally not refunded after payment-gateway confirmation, unless there is a fraud notification, duplicate payment, or clear processing error.",
            "All refund requests are reviewed by the foundation team. Gateway charges and bank timelines may apply."
          ],
          te: [
            "payment-gateway confirmation తర్వాత స్వీకరించిన online donations సాధారణంగా refund చేయబడవు, fraud notification, duplicate payment లేదా స్పష్టమైన processing error ఉన్నప్పుడు తప్ప.",
            "ప్రతి refund request ను ఫౌండేషన్ బృందం పరిశీలిస్తుంది. Gateway charges మరియు bank timelines వర్తించవచ్చు."
          ]
        }
      },
      {
        heading: { en: "Receipts", te: "రసీదులు" },
        body: {
          en: [
            "Donation receipts are sent after reconciliation. If 80G eligibility is confirmed, tax documentation such as Form 10BE follows the legally required annual filing process.",
            "Until the foundation confirms public 80G details in configuration, this website does not promise donor tax deductions."
          ],
          te: [
            "reconciliation తర్వాత donation receipts పంపబడతాయి. 80G eligibility ధృవీకరించినట్లయితే, Form 10BE వంటి tax documentation చట్టపరమైన annual filing process తరువాత పంపబడుతుంది.",
            "ఫౌండేషన్ public 80G వివరాలను configuration లో ధృవీకరించే వరకు, ఈ వెబ్‌సైట్ donor tax deductions ను హామీ ఇవ్వదు."
          ]
        }
      }
    ]
  }
} satisfies Record<string, {
  title: LocalizedText;
  description: LocalizedText;
  sections: Array<{ heading: LocalizedText; body: Record<Locale, string[]> }>;
}>;
