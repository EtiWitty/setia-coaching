// All site copy lives here. Each language has the same shape, so editing a
// section means updating both `en` and `fa` below.

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
    langSwitch: "فارسی",
    langSwitchLabel: "Switch to Persian",
  },
  brand: { name: "Setia", tagline: "LEADERSHIP COACHING" },
  nav: {
    cta: "Request a private briefing",
  },
  hero: {
    // Banner slides. Add more objects to this list (and to the Persian one) to add slides.
    slides: [
      {
        title: "Business growth starts with the quality of your decisions.",
        text: "Setia helps leaders, founders and teams think more clearly, decide more deliberately and pursue their path of growth with greater confidence.",
        primary: { label: "Book an introductory session", href: "#contact" },
        secondary: { label: "What is coaching?", href: "#perspective" },
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
    title: "Sometimes, changing the results means looking from a new angle.",
    text: "In business, the problem isn’t always not knowing the solution. Sometimes entrenched interpretations, automatic reactions or recurring patterns limit our choices. Coaching creates room to pause, re-examine what we take for granted, and see new possibilities for action.",
    items: [
      ["Seeing beyond initial interpretations", "Examining assumptions and discovering perspectives we have paid little attention to before."],
      ["Choosing instead of reacting automatically", "Recognising emotions and behavioural patterns to respond more deliberately, especially in difficult moments."],
      ["Creating meaningful change", "Bringing the way we think, connect with others and act into closer alignment with our goals and values."],
    ],
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
  footer: {
    about: "Leadership coaching for CEOs and leadership teams.",
    rights: "All rights reserved.",
  },
};

export type Content = typeof en;

const fa: Content = {
  meta: {
    title: "ستیا | کوچینگ رهبری",
    langSwitch: "English",
    langSwitchLabel: "تغییر زبان به انگلیسی",
  },
  brand: { name: "ستیا", tagline: "LEADERSHIP COACHING" },
  nav: {
    cta: "درخواست جلسه خصوصی",
  },
  hero: {
    slides: [
      {
        title: "رشد کسب‌وکار، از کیفیت تصمیم‌های شما آغاز می‌شود.",
        text: "ستیا به رهبران، بنیان‌گذاران و تیم‌ها کمک می‌کند شفاف‌تر فکر کنند، آگاهانه‌تر تصمیم بگیرند و مسیر رشد خود را با اطمینان بیشتری دنبال کنند.",
        primary: { label: "رزرو جلسه آشنایی", href: "#contact" },
        secondary: { label: "کوچینگ چیست؟", href: "#perspective" },
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
    title: "گاهی برای تغییر نتایج، لازم است از زاویه‌ای تازه نگاه کنیم.",
    text: "در کسب‌وکار، همیشه مسئله ندانستن راه‌حل نیست. گاهی برداشت‌های تثبیت‌شده، واکنش‌های خودکار یا الگوهای تکرارشونده، انتخاب‌های ما را محدود می‌کنند. کوچینگ فرصتی فراهم می‌کند تا مکث کنیم، آنچه را بدیهی می‌پنداریم دوباره بررسی کنیم و امکان‌های تازه‌ای برای اقدام ببینیم.",
    items: [
      ["دیدن فراتر از برداشت‌های اولیه", "بررسی فرضیات و کشف زاویه‌های دیدی که پیش از این کمتر به آن‌ها توجه کرده‌ایم."],
      ["انتخاب به‌جای واکنش خودکار", "شناخت احساسات و الگوهای رفتاری برای پاسخ‌دادن آگاهانه‌تر، به‌ویژه در موقعیت‌های دشوار."],
      ["ایجاد تغییر معنادار", "هم‌راستاتر کردن شیوه فکرکردن، ارتباط برقرارکردن و عمل‌کردن با اهداف و ارزش‌ها."],
    ],
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
  footer: {
    about: "کوچینگ رهبری برای مدیران ارشد و تیم‌های رهبری.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const content: Record<Lang, Content> = { en, fa };
