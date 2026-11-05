// All site copy lives here. Each language has the same shape, so editing a
// section means updating both `en` and `fa` below.

import type { SectionId } from "./router";

export type Lang = "fa" | "en";

export type Link = { label: string; href: string };

export type Accent = "gold" | "teal" | "ink";

// One banner slide. The side visual is `image` if given, else the audience mark
// described by `visual` (1–3 circles in an accent colour), else the Setia illustration.
export type HeroSlide = {
  eyebrow?: string;
  title: string;
  text: string;
  primary?: Link;
  secondary?: Link;
  image?: { src: string; alt: string };
  visual?: { count: 1 | 2 | 3; accent: Accent };
};

const en = {
  meta: {
    title: "Setia | Leadership Coaching",
    langSwitch: "فا",
    langSwitchLabel: "Switch to Persian",
  },
  brand: { name: "Setia", tagline: "LEADERSHIP COACHING" },
  nav: {
    links: [
      ["perspective", "What is coaching?"],
      ["about", "About us"],
      ["services", "Services"],
      ["blog", "Blog"],
      ["contact", "Contact us"],
    ] as [SectionId, string][],
    cta: "Book a session",
    menu: "Menu",
  },
  hero: {
    // Banner slides. Add more objects to this list (and to the Persian one) to add slides.
    slides: [
      {
        title: "Business growth starts with the quality of your decisions.",
        text: "Setia helps leaders, founders and teams think more clearly, decide more deliberately and pursue their path of growth with greater confidence.",
        primary: { label: "Book an introductory session", href: "#contact" },
        image: { src: "./images/hero-growth.png", alt: "Illustration of people climbing steps toward a rising sun" },
      },
      {
        eyebrow: "Every challenge is a chance to see new possibilities.",
        title: "Founders and business owners",
        text: "To work through hard decisions, partnership challenges, conflicts of interest and growth opportunities with a clearer, more considered view.",
        visual: { count: 1, accent: "gold" },
      },
      {
        eyebrow: "Every challenge is a chance to see new possibilities.",
        title: "Leaders and managers",
        text: "To recognise leadership patterns, handle pressure and conflict more constructively, and build relationships grounded in trust and accountability.",
        visual: { count: 2, accent: "teal" },
      },
      {
        eyebrow: "Every challenge is a chance to see new possibilities.",
        title: "Teams and organisations",
        text: "To better understand differing perspectives, strengthen constructive conversations and build closer alignment around shared goals.",
        visual: { count: 3, accent: "ink" },
      },
    ] as HeroSlide[],
    controls: { previous: "Previous slide", next: "Next slide", slide: "Slide" },
  },
  perspective: {
    eyebrow: "What is coaching?",
    title: "Choosing coaching for your leaders or your team?",
    text: "You may not sit in the sessions yourself, but choosing well depends on you. This short guide explains what coaching is and what it gives your people and your organisation.",
    definition: {
      label: "In one sentence",
      text: "Coaching is a regular, confidential conversation that helps people see their situation more clearly, recognise their patterns of reaction, and choose and act more deliberately.",
    },
    people: {
      title: "What your people experience",
      items: [
        ["Seeing beyond initial interpretations", "Examining assumptions and discovering perspectives we have paid little attention to before."],
        ["Choosing instead of reacting automatically", "Recognising emotions and behavioural patterns to respond more deliberately, especially in difficult moments."],
        ["Creating meaningful change", "Bringing the way we think, connect with others and act into closer alignment with our goals and values."],
      ],
    },
    organisation: {
      title: "What your organisation gains",
      items: [
        ["More constructive conversations", "Teams that understand differing perspectives better and speak more openly about difficult issues."],
        ["More considered decisions", "Leaders who pause before reacting and weigh more options."],
        ["Progress you can follow", "Goals agreed at the start and reviewed along the way, while the sessions themselves stay confidential."],
      ],
    },
  },
  philosophy: {
    title: "Lasting change begins with how we see and approach things.",
    text: "At Setia, coaching is a chance to pause, understand more deeply and discover new possibilities. We believe that when we examine our interpretations, get to know our emotions and reactions better, and see the connection between our values, choices and behaviour, we can choose our path more deliberately.",
    items: [
      ["Awareness before change", "Recognising the patterns that shape our decisions, reactions and relationships."],
      ["Openness to new perspectives", "Curiosity about different interpretations and making room to see choices that weren’t visible before."],
      ["Inner alignment and deliberate action", "Bringing our decisions and behaviour closer to the values and goals that matter to us."],
    ],
    closing: "The aim isn’t to become flawless, but to grow our awareness and our capacity to choose in situations where we might once have reacted automatically.",
  },
  about: {
    title: "About Setia",
    intro: "Setia is a space for leaders, founders and teams to pause, see more deeply and choose more deliberately.",
    who: {
      title: "Who we are",
      text: "Setia was founded on the belief that the quality of a business’s growth depends on the quality of thinking, conversation and decision-making of the people who lead it. We work alongside leaders and teams so they can better understand their own interpretations and patterns and find new ways to move forward.",
    },
    approach: {
      title: "Our approach",
      text: "We don’t see coaching only as a tool for reaching performance goals. Lasting change happens when the way we see, feel and react comes into view as well. In Setia’s sessions, rather than offering ready-made answers, we create space to ask, examine and discover new possibilities.",
      link: "More about how we see change",
    },
    values: {
      title: "What matters to us",
      items: [
        ["Confidentiality", "What is shared in our sessions stays between us."],
        ["Curiosity", "We approach situations with questions and openness rather than judgement."],
        ["Respect", "We honour the experience, knowledge and path of every person and organisation."],
        ["Responsibility", "Your choices and actions remain yours; our role is to accompany you and help make the path clearer."],
      ],
    },
  },
  services: {
    title: "Services",
    intro: "Every engagement begins by understanding your situation. Setia’s services are shaped around your role, your challenges and your goals.",
    items: [
      {
        title: "Coaching for founders and business owners",
        text: "One-to-one support to work through hard decisions, partnership challenges, conflicts of interest and growth opportunities with a clearer view.",
        visual: { count: 1, accent: "gold" },
      },
      {
        title: "Coaching for leaders and managers",
        text: "One-to-one sessions to recognise leadership patterns, handle pressure and conflict more constructively, and build relationships grounded in trust.",
        visual: { count: 2, accent: "teal" },
      },
      {
        title: "Team coaching",
        text: "Structured conversations with teams to understand differing perspectives, strengthen constructive dialogue and build closer alignment around shared goals.",
        visual: { count: 3, accent: "ink" },
      },
    ] as { title: string; text: string; visual: { count: 1 | 2 | 3; accent: Accent } }[],
    process: {
      title: "How we work together",
      steps: [
        ["Introductory session", "A conversation to understand your situation, needs and expectations."],
        ["Defining the path", "Agreeing on topics, goals and the framework for working together."],
        ["Coaching sessions", "Regular sessions to examine, discover and practise new ways of acting."],
        ["Review and next steps", "Looking back at what has changed and agreeing on what comes next."],
      ],
    },
    note: "Coaching does not replace specialist advice, therapy or structural change in an organisation. It works alongside them, helping you decide and act more deliberately.",
  },
  blog: {
    title: "Blog",
    intro: "Notes, conversations and media on leadership, decision-making and lasting change.",
    filters: { all: "All", article: "Articles", video: "Videos", podcast: "Podcasts" },
    types: { article: "Article", video: "Video", podcast: "Podcast" },
    empty: "Our first articles and media will be published here soon.",
    readMore: "Read more",
    watch: "Watch",
    listen: "Listen",
    back: "Back to the blog",
    notFound: "This post could not be found.",
  },
  contact: {
    title: "Contact us",
    intro: "To book an introductory session or ask a question, fill in the form below or reach us directly.",
    details: { email: "Email", phone: "Phone", whatsapp: "WhatsApp", address: "Address", whatsappAction: "Chat on WhatsApp" },
    pending: "Setia’s contact details will be added to this page soon.",
    form: {
      title: "Send us a message",
      name: "Full name",
      company: "Company (optional)",
      email: "Email",
      phone: "Phone (optional)",
      topic: "Topic",
      topics: ["Introductory session", "Individual coaching", "Team coaching", "Other"],
      message: "Your message",
      submit: "Send message",
      success: "Thank you! Your email app has opened with your message. Just press send.",
    },
  },
  footer: {
    about: "Leadership coaching for leaders, founders and teams.",
    rights: "All rights reserved.",
  },
};

export type Content = typeof en;

const fa: Content = {
  meta: {
    title: "ستیا | کوچینگ رهبری",
    langSwitch: "EN",
    langSwitchLabel: "تغییر زبان به انگلیسی",
  },
  brand: { name: "ستیا", tagline: "کوچینگ رهبری" },
  nav: {
    links: [
      ["perspective", "کوچینگ چیست؟"],
      ["about", "درباره ما"],
      ["services", "خدمات"],
      ["blog", "وبلاگ"],
      ["contact", "تماس با ما"],
    ],
    cta: "رزرو جلسه آشنایی",
    menu: "منو",
  },
  hero: {
    slides: [
      {
        title: "رشد کسب‌وکار، از کیفیت تصمیم‌های شما آغاز می‌شود.",
        text: "ستیا به رهبران، بنیان‌گذاران و تیم‌ها کمک می‌کند شفاف‌تر فکر کنند، آگاهانه‌تر تصمیم بگیرند و مسیر رشد خود را با اطمینان بیشتری دنبال کنند.",
        primary: { label: "رزرو جلسه آشنایی", href: "#contact" },
        image: { src: "./images/hero-growth.png", alt: "تصویری از افرادی که پله‌ها را به سوی خورشید بالا می‌روند" },
      },
      {
        eyebrow: "هر چالش، فرصتی برای دیدن امکان‌های تازه است.",
        title: "بنیان‌گذاران و صاحبان کسب‌وکار",
        text: "برای بررسی تصمیم‌های دشوار، چالش‌های شراکت، تعارض منافع و فرصت‌های رشد با نگاهی روشن‌تر و آگاهانه‌تر.",
        visual: { count: 1, accent: "gold" },
      },
      {
        eyebrow: "هر چالش، فرصتی برای دیدن امکان‌های تازه است.",
        title: "رهبران و مدیران",
        text: "برای شناخت الگوهای رهبری، مواجهه سازنده‌تر با فشار و تعارض، و ایجاد ارتباطاتی مبتنی بر اعتماد و مسئولیت‌پذیری.",
        visual: { count: 2, accent: "teal" },
      },
      {
        eyebrow: "هر چالش، فرصتی برای دیدن امکان‌های تازه است.",
        title: "تیم‌ها و سازمان‌ها",
        text: "برای درک بهتر تفاوت دیدگاه‌ها، تقویت گفت‌وگوهای سازنده و ایجاد هماهنگی بیشتر در مسیر اهداف مشترک.",
        visual: { count: 3, accent: "ink" },
      },
    ],
    controls: { previous: "اسلاید قبلی", next: "اسلاید بعدی", slide: "اسلاید" },
  },
  perspective: {
    eyebrow: "کوچینگ چیست؟",
    title: "کوچینگ را برای مدیران یا تیم‌تان در نظر دارید؟",
    text: "شاید خودتان در جلسات کوچینگ شرکت نکنید، اما انتخاب درست به شما بستگی دارد. این راهنمای کوتاه کمک می‌کند بدانید کوچینگ چیست و چه چیزی به افراد و سازمان شما می‌دهد.",
    definition: {
      label: "در یک جمله",
      text: "کوچینگ گفت‌وگویی منظم و محرمانه است که به افراد کمک می‌کند موقعیت خود را روشن‌تر ببینند، الگوهای واکنش خود را بشناسند و آگاهانه‌تر انتخاب و عمل کنند.",
    },
    people: {
      title: "آنچه افراد شما تجربه می‌کنند",
      items: [
        ["دیدن فراتر از برداشت‌های اولیه", "بررسی فرضیات و کشف زاویه‌های دیدی که پیش از این کمتر به آن‌ها توجه کرده‌ایم."],
        ["انتخاب به‌جای واکنش خودکار", "شناخت احساسات و الگوهای رفتاری برای پاسخ‌دادن آگاهانه‌تر، به‌ویژه در موقعیت‌های دشوار."],
        ["ایجاد تغییر معنادار", "هم‌راستاتر کردن شیوه فکرکردن، ارتباط برقرارکردن و عمل‌کردن با اهداف و ارزش‌ها."],
      ],
    },
    organisation: {
      title: "آنچه سازمان شما از آن بهره می‌برد",
      items: [
        ["گفت‌وگوهای سازنده‌تر", "تیم‌هایی که تفاوت دیدگاه‌ها را بهتر درک می‌کنند و درباره مسائل دشوار صریح‌تر گفت‌وگو می‌کنند."],
        ["تصمیم‌های سنجیده‌تر", "مدیرانی که پیش از واکنش مکث می‌کنند و گزینه‌های بیشتری را در نظر می‌گیرند."],
        ["پیشرفت قابل‌پیگیری", "اهدافی که در ابتدا توافق و در طول مسیر مرور می‌شوند؛ در حالی که جلسات محرمانه می‌مانند."],
      ],
    },
  },
  philosophy: {
    title: "تغییر پایدار، از شیوه دیدن و مواجهه ما آغاز می‌شود.",
    text: "در ستیا، کوچینگ فرصتی برای مکث، شناخت عمیق‌تر و کشف امکان‌های تازه است. ما باور داریم وقتی برداشت‌های خود را بررسی می‌کنیم، احساسات و واکنش‌هایمان را بهتر می‌شناسیم و ارتباط میان ارزش‌ها، انتخاب‌ها و رفتارهایمان را می‌بینیم، می‌توانیم آگاهانه‌تر مسیر خود را انتخاب کنیم.",
    items: [
      ["آگاهی پیش از تغییر", "شناخت الگوهایی که بر تصمیم‌ها، واکنش‌ها و روابط ما اثر می‌گذارند."],
      ["گشودگی به دیدگاه‌های تازه", "کنجکاوی نسبت به برداشت‌های متفاوت و ایجاد فضایی برای دیدن انتخاب‌هایی که پیش‌تر آشکار نبودند."],
      ["هماهنگی درونی و اقدام آگاهانه", "نزدیک‌تر کردن تصمیم‌ها و رفتارها به ارزش‌ها و اهدافی که برای ما اهمیت دارند."],
    ],
    closing: "هدف، تبدیل‌شدن به فردی بی‌نقص نیست؛ بلکه افزایش آگاهی و ظرفیت انتخاب در موقعیت‌هایی است که پیش‌تر ممکن بود به‌صورت خودکار به آن‌ها واکنش نشان دهیم.",
  },
  about: {
    title: "درباره ستیا",
    intro: "ستیا فضایی برای رهبران، بنیان‌گذاران و تیم‌هاست تا مکث کنند، عمیق‌تر ببینند و آگاهانه‌تر انتخاب کنند.",
    who: {
      title: "ما چه کسانی هستیم",
      text: "ستیا با این باور شکل گرفته است که کیفیت رشد هر کسب‌وکار به کیفیت فکر، گفت‌وگو و تصمیم‌های کسانی وابسته است که آن را هدایت می‌کنند. ما در کنار رهبران و تیم‌ها کار می‌کنیم تا برداشت‌ها و الگوهای خود را بهتر بشناسند و راه‌های تازه‌ای برای حرکت به جلو بیابند.",
    },
    approach: {
      title: "رویکرد ما",
      text: "ما کوچینگ را فقط ابزاری برای رسیدن به اهداف عملکردی نمی‌دانیم. تغییر پایدار زمانی رخ می‌دهد که شیوه دیدن، احساس‌کردن و واکنش‌نشان‌دادن ما نیز دیده شود. در جلسات ستیا، به‌جای ارائه پاسخ‌های آماده، فضایی برای پرسیدن، بررسی‌کردن و کشف امکان‌های تازه فراهم می‌کنیم.",
      link: "بیشتر درباره نگاه ما به تغییر",
    },
    values: {
      title: "آنچه برای ما مهم است",
      items: [
        ["رازداری", "آنچه در جلسات مطرح می‌شود، میان ما و شما می‌ماند."],
        ["کنجکاوی", "به‌جای قضاوت، با پرسش و گشودگی به موقعیت‌ها نگاه می‌کنیم."],
        ["احترام", "تجربه، دانش و مسیر هر فرد و سازمان را محترم می‌شماریم."],
        ["مسئولیت‌پذیری", "انتخاب‌ها و اقدام‌ها از آنِ شماست؛ نقش ما همراهی و روشن‌تر کردن مسیر است."],
      ],
    },
  },
  services: {
    title: "خدمات",
    intro: "هر همکاری با شناخت موقعیت شما آغاز می‌شود. خدمات ستیا متناسب با نقش، چالش‌ها و اهداف شما شکل می‌گیرد.",
    items: [
      {
        title: "کوچینگ بنیان‌گذاران و صاحبان کسب‌وکار",
        text: "همراهی فردی برای بررسی تصمیم‌های دشوار، چالش‌های شراکت، تعارض منافع و فرصت‌های رشد با نگاهی روشن‌تر.",
        visual: { count: 1, accent: "gold" },
      },
      {
        title: "کوچینگ رهبران و مدیران",
        text: "جلسات فردی برای شناخت الگوهای رهبری، مواجهه سازنده‌تر با فشار و تعارض، و ساختن روابطی مبتنی بر اعتماد.",
        visual: { count: 2, accent: "teal" },
      },
      {
        title: "کوچینگ تیمی",
        text: "گفت‌وگوهای ساختاریافته با تیم‌ها برای درک تفاوت دیدگاه‌ها، تقویت گفت‌وگوی سازنده و هماهنگی بیشتر در مسیر اهداف مشترک.",
        visual: { count: 3, accent: "ink" },
      },
    ],
    process: {
      title: "مسیر همکاری",
      steps: [
        ["جلسه آشنایی", "گفت‌وگویی برای شناخت موقعیت، نیازها و انتظارات شما."],
        ["تعریف مسیر", "توافق بر موضوعات، اهداف و چارچوب همکاری."],
        ["جلسات کوچینگ", "جلسات منظم برای بررسی، کشف و تمرین شیوه‌های تازه."],
        ["مرور و جمع‌بندی", "بازنگری آنچه تغییر کرده و توافق بر قدم‌های بعدی."],
      ],
    },
    note: "کوچینگ جایگزین مشاوره تخصصی، درمان یا تغییرات ساختاری در سازمان نیست؛ بلکه در کنار آن‌ها به شما کمک می‌کند آگاهانه‌تر تصمیم بگیرید و عمل کنید.",
  },
  blog: {
    title: "وبلاگ",
    intro: "یادداشت‌ها، گفت‌وگوها و محتواهایی درباره رهبری، تصمیم‌گیری و تغییر پایدار.",
    filters: { all: "همه", article: "نوشته‌ها", video: "ویدیوها", podcast: "پادکست‌ها" },
    types: { article: "نوشته", video: "ویدیو", podcast: "پادکست" },
    empty: "نخستین نوشته‌ها و محتواهای ما به‌زودی در این بخش منتشر می‌شوند.",
    readMore: "ادامه مطلب",
    watch: "تماشا",
    listen: "شنیدن",
    back: "بازگشت به وبلاگ",
    notFound: "این مطلب پیدا نشد.",
  },
  contact: {
    title: "تماس با ما",
    intro: "برای رزرو جلسه آشنایی یا طرح پرسش، فرم زیر را تکمیل کنید یا از راه‌های ارتباطی ما استفاده کنید.",
    details: { email: "ایمیل", phone: "تلفن", whatsapp: "واتس‌اپ", address: "نشانی", whatsappAction: "گفت‌وگو در واتس‌اپ" },
    pending: "راه‌های ارتباطی ستیا به‌زودی در این صفحه قرار می‌گیرند.",
    form: {
      title: "پیام خود را بفرستید",
      name: "نام و نام خانوادگی",
      company: "نام شرکت (اختیاری)",
      email: "ایمیل",
      phone: "تلفن (اختیاری)",
      topic: "موضوع",
      topics: ["جلسه آشنایی", "کوچینگ فردی", "کوچینگ تیمی", "سایر"],
      message: "پیام شما",
      submit: "ارسال پیام",
      success: "سپاس! برنامه ایمیل شما با متن پیام باز شد؛ برای ارسال، فقط کافی است آن را بفرستید.",
    },
  },
  footer: {
    about: "کوچینگ رهبری برای رهبران، بنیان‌گذاران و تیم‌ها.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const content: Record<Lang, Content> = { en, fa };
