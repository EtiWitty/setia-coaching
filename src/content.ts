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
    title: "Setia | Executive and Leadership Coaching",
    langSwitch: "فارسی",
    langSwitchLabel: "Switch to Persian",
  },
  brand: { name: "Setia", tagline: "EXECUTIVE & LEADERSHIP COACHING" },
  nav: {
    links: [
      ["perspective", "What is coaching?"],
      ["about", "About us"],
      ["services", "Services"],
      ["blog", "Blog"],
      ["contact", "Contact us"],
    ] as [SectionId, string][],
    cta: "Request a session",
    menu: "Menu",
  },
  hero: {
    // Banner slides. Add more objects to this list (and to the Persian one) to add slides.
    slides: [
      {
        title: "Better decisions light the way to growth",
        text: "Through executive and leadership coaching, Setia works alongside senior leaders, founders and leadership teams so they can act more deliberately in complex decisions, difficult conversations and the growth of their business.",
        primary: { label: "Request an introductory session", href: "#contact" },
        image: { src: "./images/hero-growth.png", alt: "Illustration of people climbing steps toward a rising sun" },
      },
      {
        eyebrow: "Coaching for founders",
        title: "Founders and business owners",
        text: "When hard decisions, partnerships, conflicts of interest or the future of the business are at stake: room to see the options and choose more deliberately.",
        visual: { count: 1, accent: "gold" },
      },
      {
        eyebrow: "Coaching for leaders",
        title: "Senior leaders and executives",
        text: "To strengthen your leadership style, handle pressure and conflict, and build more effective relationships with your team and key stakeholders.",
        visual: { count: 2, accent: "teal" },
      },
      {
        eyebrow: "Coaching for leadership teams",
        title: "Leadership teams",
        text: "To hear one another more accurately, hold more constructive conversations and align more closely around shared goals.",
        visual: { count: 3, accent: "ink" },
      },
    ] as HeroSlide[],
    controls: { previous: "Previous slide", next: "Next slide", slide: "Slide" },
  },
  perspective: {
    eyebrow: "What is executive coaching?",
    title: "Is executive coaching right for you or your leadership team?",
    text: "If you want to raise the quality of decision-making, conversation and leadership in your organisation, executive coaching can be a good place to start. It helps leaders and leadership teams see complex situations more accurately and make more effective choices.",
    definition: {
      label: "In brief",
      text: "Executive coaching is a professional, purposeful and confidential conversation. Instead of offering a ready-made prescription, the coach uses questions, reflection and structured support to help a leader or team see the issue from new angles and find the solution that fits their situation.",
    },
    people: {
      title: "What leaders experience in coaching",
      items: [
        ["Seeing beyond first impressions", "Examining assumptions, recognising blind spots and noticing aspects of an issue that are often overlooked under pressure or when decisions are made quickly."],
        ["Choosing instead of reacting automatically", "Recognising patterns of thought and behaviour, to respond more deliberately in sensitive, high-pressure situations."],
        ["Change aligned with goals and values", "Bringing the way you think, connect and act closer to what matters to you, your team and your organisation."],
      ],
    },
    organisation: {
      title: "What the organisation gains from coaching",
      items: [
        ["More constructive conversations", "Teams that can talk about disagreements and difficult topics more openly and effectively."],
        ["More considered decisions", "Leaders who examine the issue and the options in front of them more carefully before reacting."],
        ["Progress you can follow", "Clear goals are set at the start and reviewed along the way, while the content of the sessions stays confidential."],
      ],
    },
  },
  philosophy: {
    title: "Lasting change begins with how we see and approach things",
    text: "At Setia, coaching begins by creating a brief space between a situation and our response. That space helps us notice our interpretations, emotions and behavioural patterns, and make choices that fit our goals and values better.",
    items: [
      ["Pause", "Before reacting, a chance to notice what is going on in our mind and feelings."],
      ["See", "Recognising the interpretations, assumptions and patterns that shape our decisions without our noticing."],
      ["Choose", "Acting on our goals and values, not simply reacting to the pressure of the moment."],
    ],
    closing: "The aim isn’t to become flawless; it is to grow our awareness and our capacity to choose in the situations that affect us, our team and our business the most.",
  },
  about: {
    title: "About Setia",
    intro: "Setia works in executive and leadership coaching, giving senior leaders, founders and leadership teams a professional space to pause, look more deeply at the issue and decide on their next step.",
    who: {
      title: "Who we are",
      text: "We believe the quality of a business’s growth depends on the quality of thinking, conversation and decision-making of the people who lead it. At Setia, we stand alongside leaders and teams so they can better understand the patterns that shape their decisions and working relationships, and move forward with greater capacity.",
    },
    approach: {
      title: "Our approach",
      text: "Coaching at Setia isn’t focused only on reaching a short-term goal. We also pay attention to what lies behind decisions, reactions and working relationships, because lasting change takes shape when a person or team sees the issue with greater awareness and takes responsibility for their actions.",
      link: "Our approach: pause, see, choose",
    },
    values: {
      title: "Our values",
      items: [
        ["Confidentiality", "The content of the sessions is confidential, and before we begin we agree clearly on how information will be shared."],
        ["Curiosity", "We approach situations with questions and openness rather than quick judgement."],
        ["Respect", "We honour the experience, knowledge, role and path of every person and organisation."],
        ["Responsibility", "Decisions and actions are yours; our role is to help make the path clearer."],
      ],
    },
  },
  services: {
    title: "Executive and leadership coaching services",
    intro: "Every business and every leadership team has its own issues and its own path. Working with Setia begins with a clear understanding of your situation, roles, challenges and goals.",
    items: [
      {
        title: "Executive coaching for founders and business owners",
        text: "One-to-one support to work through hard decisions, partnership challenges, conflicts of interest, changes of role and growth opportunities.",
        visual: { count: 1, accent: "gold" },
      },
      {
        title: "Executive coaching for senior leaders",
        text: "One-to-one sessions to develop your leadership style, handle pressure and conflict, improve the quality of your decisions and build more effective relationships with your team.",
        visual: { count: 2, accent: "teal" },
      },
      {
        title: "Leadership team coaching",
        text: "Structured conversations to understand differing perspectives, build trust, strengthen collaboration and align around shared goals.",
        visual: { count: 3, accent: "ink" },
      },
    ] as { title: string; text: string; visual: { count: 1 | 2 | 3; accent: Accent } }[],
    process: {
      title: "How we work together",
      steps: [
        ["Introductory session", "An initial conversation to understand the situation, the needs and what both sides expect from working together."],
        ["Defining the path", "Agreeing on topics, goals, the session framework and how progress will be reviewed."],
        ["Coaching sessions", "Regular sessions to examine issues, explore options and practise more effective ways of acting."],
        ["Review and next steps", "Reviewing the path, looking at what has changed and agreeing on the next steps."],
      ],
    },
    note: "Coaching does not replace specialist consulting, psychotherapy or structural change in an organisation; alongside them, it can improve the quality of decisions and action.",
  },
  faq: {
    title: "Frequently asked questions",
    intro: "Questions leaders and leadership teams often ask before starting executive coaching.",
    // [question, answer]
    items: [
      [
        "Who is executive coaching for?",
        "For founders, CEOs, board members, senior executives and leadership teams; especially during growth, restructuring, a change of role, succession or before strategic decisions.",
      ],
      [
        "Why does a leader sometimes react the same way in similar situations?",
        "Under pressure, we often fall back on patterns that were once familiar or effective. Coaching helps bring these patterns into view so that, instead of reacting automatically, we can make a more deliberate choice.",
      ],
      [
        "How is executive coaching different from management consulting?",
        "Management consulting usually involves specialist analysis and recommendations. In coaching, the focus is on the leader’s or team’s own ability to see the issue, recognise the options and reach a decision that fits their situation. The two can complement each other.",
      ],
      [
        "Is coaching only for times of crisis?",
        "No. Many leaders use coaching during growth, a change of role, team development or before important decisions, not only when they face a crisis.",
      ],
      [
        "How can the effect of coaching be assessed?",
        "At the start of the engagement, specific topics and goals are defined and then reviewed along the way. The effect of coaching usually shows in the quality of decisions, conversations, handling pressure and working relationships.",
      ],
      [
        "Does what is said in the sessions stay confidential?",
        "Yes. Confidentiality is the foundation of our work. In organisational engagements, we also agree from the start which information, such as attendance or overall goals, can be shared and what stays confidential.",
      ],
      [
        "Are sessions in person or online?",
        "Both are possible. The right format is decided in the introductory session, based on your circumstances.",
      ],
      [
        "How long does a coaching engagement usually last?",
        "It depends on your topic, goals and circumstances. After the introductory session, we agree clearly on a suitable timeframe.",
      ],
    ] as [string, string][],
  },
  blog: {
    title: "Blog",
    intro: "Notes for a pause: on leadership, decision-making and lasting change.",
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
    title: "Let’s start the conversation here",
    intro: "To request an introductory session, ask a question or explore working together, fill in the form below. We will get back to you as soon as we can.",
    details: { email: "Email", phone: "Phone", whatsapp: "WhatsApp", address: "Address", whatsappAction: "Chat on WhatsApp" },
    pending: "Setia’s contact details will be added to this page soon.",
    form: {
      title: "Request an introductory session",
      name: "Full name",
      company: "Company (optional)",
      email: "Email",
      phone: "Phone (optional)",
      topic: "Topic",
      topics: ["Introductory session", "One-to-one executive coaching", "Leadership team coaching", "Other"],
      format: "Preferred format",
      formats: ["In person", "Online", "No preference"],
      message: "Your message",
      submit: "Send request",
      success: "Thank you! Your email app has opened with your message. Just press send.",
    },
  },
  footer: {
    about: "Executive and leadership coaching for senior leaders, founders and leadership teams.",
    rights: "All rights reserved.",
  },
};

export type Content = typeof en;

const fa: Content = {
  meta: {
    title: "ستیا | کوچینگ اجرایی و رهبری",
    langSwitch: "EN",
    langSwitchLabel: "تغییر زبان به انگلیسی",
  },
  brand: { name: "ستیا", tagline: "کوچینگ اجرایی و رهبری" },
  nav: {
    links: [
      ["perspective", "کوچینگ چیست؟"],
      ["about", "درباره ما"],
      ["services", "خدمات"],
      ["blog", "وبلاگ"],
      ["contact", "تماس با ما"],
    ],
    cta: "درخواست جلسه آشنایی",
    menu: "منو",
  },
  hero: {
    slides: [
      {
        title: "تصمیم‌های بهتر، مسیر رشد را روشن‌تر می‌کنند",
        text: "ستیا با کوچینگ اجرایی و رهبری، همراه مدیران ارشد، بنیان‌گذاران و تیم‌های رهبری است تا در تصمیم‌های پیچیده، گفت‌وگوهای دشوار و مسیر رشد کسب‌وکار، آگاهانه‌تر عمل کنند.",
        primary: { label: "درخواست جلسه آشنایی", href: "#contact" },
        image: { src: "./images/hero-growth.png", alt: "تصویری از افرادی که پله‌ها را به سوی خورشید بالا می‌روند" },
      },
      {
        eyebrow: "کوچینگ برای بنیان‌گذاران",
        title: "بنیان‌گذاران و صاحبان کسب‌وکار",
        text: "وقتی پای تصمیم‌های دشوار، شراکت، تعارض منافع یا آینده کسب‌وکار در میان است؛ فضایی برای دیدن گزینه‌ها و انتخاب آگاهانه‌تر.",
        visual: { count: 1, accent: "gold" },
      },
      {
        eyebrow: "کوچینگ برای رهبران",
        title: "مدیران ارشد و رهبران",
        text: "برای تقویت سبک رهبری، مدیریت فشار و تعارض، و ساختن رابطه‌ای مؤثرتر با تیم و ذی‌نفعان کلیدی.",
        visual: { count: 2, accent: "teal" },
      },
      {
        eyebrow: "کوچینگ برای تیم‌های رهبری",
        title: "تیم‌های رهبری",
        text: "برای شنیدن دقیق‌تر یکدیگر، گفت‌وگوهای سازنده‌تر و هم‌راستایی بیشتر در مسیر اهداف مشترک.",
        visual: { count: 3, accent: "ink" },
      },
    ],
    controls: { previous: "اسلاید قبلی", next: "اسلاید بعدی", slide: "اسلاید" },
  },
  perspective: {
    eyebrow: "کوچینگ اجرایی چیست؟",
    title: "آیا کوچینگ اجرایی برای شما یا تیم رهبری‌تان مناسب است؟",
    text: "اگر می‌خواهید کیفیت تصمیم‌گیری، گفت‌وگو و رهبری در سازمانتان را ارتقا دهید، کوچینگ اجرایی می‌تواند نقطه شروع مناسبی باشد. این مسیر به مدیران و تیم‌های رهبری کمک می‌کند موقعیت‌های پیچیده را دقیق‌تر ببینند و انتخاب‌های مؤثرتری داشته باشند.",
    definition: {
      label: "تعریف کوتاه",
      text: "کوچینگ اجرایی یک گفت‌وگوی حرفه‌ای، هدفمند و محرمانه است. کوچ به‌جای ارائه نسخه آماده، با پرسش، بازتاب و همراهی ساختارمند کمک می‌کند مدیر یا تیم، مسئله را از زاویه‌های تازه ببیند و راه‌حل متناسب با موقعیت خود را پیدا کند.",
    },
    people: {
      title: "آنچه مدیران در کوچینگ تجربه می‌کنند",
      items: [
        ["دیدن فراتر از برداشت اولیه", "بررسی فرض‌ها، شناخت نقاط کور و دیدن جنبه‌هایی از مسئله که معمولاً زیر فشار یا سرعت تصمیم‌گیری نادیده می‌مانند."],
        ["انتخاب به‌جای واکنش خودکار", "شناخت الگوهای فکری و رفتاری، برای پاسخ‌دادن آگاهانه‌تر در موقعیت‌های حساس و پرفشار."],
        ["تغییر هم‌راستا با هدف‌ها و ارزش‌ها", "نزدیک‌تر کردن شیوه فکرکردن، ارتباط برقرارکردن و عمل‌کردن به آنچه برای فرد، تیم و سازمان اهمیت دارد."],
      ],
    },
    organisation: {
      title: "آنچه سازمان از کوچینگ بهره می‌برد",
      items: [
        ["گفت‌وگوهای سازنده‌تر", "تیم‌هایی که می‌توانند درباره اختلاف‌نظرها و موضوعات دشوار، شفاف‌تر و مؤثرتر گفت‌وگو کنند."],
        ["تصمیم‌های سنجیده‌تر", "مدیرانی که پیش از واکنش، مسئله و گزینه‌های پیش‌رو را دقیق‌تر بررسی می‌کنند."],
        ["پیشرفت قابل پیگیری", "هدف‌های روشن در آغاز همکاری تعریف و در طول مسیر مرور می‌شوند؛ در عین حال، محتوای جلسات محرمانه باقی می‌ماند."],
      ],
    },
  },
  philosophy: {
    title: "تغییر پایدار، از شیوه دیدن و مواجهه ما آغاز می‌شود",
    text: "در ستیا، کوچینگ با ایجاد فاصله‌ای کوتاه میان موقعیت و واکنش آغاز می‌شود. این فاصله کمک می‌کند برداشت‌ها، احساسات و الگوهای رفتاری خود را بهتر ببینیم و انتخابی متناسب‌تر با هدف‌ها و ارزش‌هایمان داشته باشیم.",
    items: [
      ["مکث", "پیش از واکنش، فرصتی برای توجه به آنچه در ذهن و احساس ما می‌گذرد."],
      ["دیدن", "شناخت برداشت‌ها، فرض‌ها و الگوهایی که بی‌آنکه متوجه باشیم، بر تصمیم‌های ما اثر می‌گذارند."],
      ["انتخاب", "عمل‌کردن بر اساس هدف‌ها و ارزش‌ها؛ نه صرفاً واکنش نشان‌دادن به فشار موقعیت."],
    ],
    closing: "هدف، بی‌نقص‌شدن نیست؛ هدف، افزایش آگاهی و ظرفیت انتخاب در موقعیت‌هایی است که بیشترین اثر را بر ما، تیم و کسب‌وکارمان دارند.",
  },
  about: {
    title: "درباره ستیا",
    intro: "ستیا در حوزه کوچینگ اجرایی و رهبری فعالیت می‌کند و برای مدیران ارشد، بنیان‌گذاران و تیم‌های رهبری فضایی حرفه‌ای فراهم می‌کند تا درنگ کنند، مسئله را عمیق‌تر ببینند و برای گام بعدی خود تصمیم بگیرند.",
    who: {
      title: "ما چه کسانی هستیم",
      text: "ما باور داریم کیفیت رشد هر کسب‌وکار، به کیفیت فکرکردن، گفت‌وگوکردن و تصمیم‌گرفتن کسانی وابسته است که آن را هدایت می‌کنند. در ستیا، کنار رهبران و تیم‌ها می‌ایستیم تا الگوهای اثرگذار بر تصمیم‌ها و روابط کاری خود را بهتر بشناسند و با ظرفیت بیشتری پیش بروند.",
    },
    approach: {
      title: "رویکرد ما",
      text: "کوچینگ در ستیا فقط بر رسیدن به یک هدف کوتاه‌مدت تمرکز ندارد. ما به آنچه پشت تصمیم‌ها، واکنش‌ها و روابط کاری جریان دارد نیز توجه می‌کنیم؛ زیرا تغییر پایدار زمانی شکل می‌گیرد که فرد یا تیم، مسئله را با آگاهی بیشتری ببیند و برای عمل خود مسئولیت بپذیرد.",
      link: "رویکرد ما: مکث، دیدن، انتخاب",
    },
    values: {
      title: "ارزش‌ها",
      items: [
        ["رازداری", "محتوای جلسات محرمانه است و پیش از آغاز همکاری، چارچوب اشتراک‌گذاری اطلاعات به‌صورت شفاف توافق می‌شود."],
        ["کنجکاوی", "به‌جای قضاوت سریع، با پرسش و گشودگی به موقعیت‌ها نگاه می‌کنیم."],
        ["احترام", "تجربه، دانش، نقش و مسیر هر فرد و سازمان را محترم می‌شماریم."],
        ["مسئولیت‌پذیری", "تصمیم و اقدام از آنِ شماست؛ نقش ما کمک به شفاف‌ترشدن مسیر است."],
      ],
    },
  },
  services: {
    title: "خدمات کوچینگ اجرایی و رهبری",
    intro: "هر کسب‌وکار و هر تیم رهبری، مسئله و مسیر متفاوتی دارد. همکاری با ستیا با شناخت دقیق موقعیت، نقش‌ها، چالش‌ها و هدف‌های شما آغاز می‌شود.",
    items: [
      {
        title: "کوچینگ اجرایی برای بنیان‌گذاران و صاحبان کسب‌وکار",
        text: "همراهی فردی برای بررسی تصمیم‌های دشوار، چالش‌های شراکت، تعارض منافع، تغییر نقش و فرصت‌های رشد.",
        visual: { count: 1, accent: "gold" },
      },
      {
        title: "کوچینگ اجرایی برای مدیران ارشد",
        text: "جلسات فردی برای توسعه سبک رهبری، مدیریت فشار و تعارض، بهبود کیفیت تصمیم‌گیری و ایجاد رابطه‌ای اثربخش‌تر با تیم.",
        visual: { count: 2, accent: "teal" },
      },
      {
        title: "کوچینگ تیم رهبری",
        text: "گفت‌وگوهای ساختارمند برای شناخت تفاوت دیدگاه‌ها، افزایش اعتماد، تقویت همکاری و هم‌راستایی در مسیر هدف‌های مشترک.",
        visual: { count: 3, accent: "ink" },
      },
    ],
    process: {
      title: "مسیر همکاری",
      steps: [
        ["جلسه آشنایی", "گفت‌وگوی اولیه برای شناخت موقعیت، نیازها و انتظارهای دو طرف از همکاری."],
        ["تعریف مسیر", "توافق بر موضوع‌ها، هدف‌ها، چارچوب جلسات و شیوه ارزیابی پیشرفت."],
        ["جلسات کوچینگ", "جلسات منظم برای بررسی مسئله‌ها، کشف گزینه‌ها و تمرین شیوه‌های مؤثرتر عمل‌کردن."],
        ["مرور و جمع‌بندی", "بازنگری مسیر، بررسی آنچه تغییر کرده و توافق بر گام‌های بعدی."],
      ],
    },
    note: "کوچینگ جایگزین مشاوره تخصصی، روان‌درمانی یا تغییرات ساختاری در سازمان نیست؛ بلکه می‌تواند در کنار آن‌ها، کیفیت تصمیم‌گیری و عمل‌کردن را ارتقا دهد.",
  },
  faq: {
    title: "پرسش‌های متداول",
    intro: "پرسش‌هایی که مدیران و تیم‌های رهبری اغلب پیش از آغاز کوچینگ اجرایی مطرح می‌کنند.",
    items: [
      [
        "کوچینگ اجرایی برای چه کسانی مناسب است؟",
        "برای بنیان‌گذاران، مدیران عامل، اعضای هیئت‌مدیره، مدیران ارشد و تیم‌های رهبری؛ به‌ویژه در دوره‌های رشد، تغییر ساختار، تغییر نقش، جانشینی یا پیش از تصمیم‌های راهبردی.",
      ],
      [
        "چرا یک مدیر گاهی در موقعیت‌های مشابه، واکنش‌های مشابهی نشان می‌دهد؟",
        "زیر فشار، اغلب به الگوهایی برمی‌گردیم که پیش‌تر برایمان آشنا یا کارآمد بوده‌اند. کوچینگ کمک می‌کند این الگوها دیده شوند تا به‌جای واکنش خودکار، انتخاب آگاهانه‌تری داشته باشیم.",
      ],
      [
        "کوچینگ اجرایی چه تفاوتی با مشاوره مدیریت دارد؟",
        "مشاوره مدیریت معمولاً با تحلیل تخصصی و ارائه راهکار همراه است. در کوچینگ، تمرکز بر توان مدیر یا تیم برای دیدن مسئله، شناخت گزینه‌ها و رسیدن به تصمیم متناسب با موقعیت خود است. این دو می‌توانند مکمل یکدیگر باشند.",
      ],
      [
        "آیا کوچینگ فقط برای زمان بحران است؟",
        "خیر. بسیاری از مدیران از کوچینگ در دوره‌های رشد، تغییر نقش، توسعه تیم یا پیش از تصمیم‌های مهم استفاده می‌کنند؛ نه فقط زمانی که با بحران روبه‌رو هستند.",
      ],
      [
        "اثر کوچینگ را چگونه می‌توان ارزیابی کرد؟",
        "در آغاز همکاری، موضوع‌ها و هدف‌های مشخصی تعریف می‌شوند و در طول مسیر مرور می‌شوند. اثر کوچینگ معمولاً در کیفیت تصمیم‌گیری، گفت‌وگوها، مدیریت فشار و روابط کاری قابل مشاهده است.",
      ],
      [
        "آیا آنچه در جلسات گفته می‌شود محرمانه می‌ماند؟",
        "بله. رازداری پایه همکاری ماست. در همکاری‌های سازمانی نیز از ابتدا مشخص می‌کنیم چه اطلاعاتی، مانند حضور در جلسات یا هدف‌های کلی، قابل اشتراک‌گذاری است و چه اطلاعاتی محرمانه باقی می‌ماند.",
      ],
      [
        "جلسات حضوری‌اند یا آنلاین؟",
        "هر دو امکان‌پذیرند. شیوه مناسب همکاری در جلسه آشنایی و بر اساس شرایط شما تعیین می‌شود.",
      ],
      [
        "یک همکاری کوچینگ معمولاً چقدر طول می‌کشد؟",
        "مدت همکاری به موضوع، هدف‌ها و شرایط شما بستگی دارد. پس از جلسه آشنایی، چارچوب زمانی مناسب به‌صورت شفاف توافق می‌شود.",
      ],
    ],
  },
  blog: {
    title: "وبلاگ",
    intro: "یادداشت‌هایی برای مکث؛ درباره رهبری، تصمیم‌گیری و تغییر پایدار.",
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
    title: "گفت‌وگو را از اینجا آغاز کنیم",
    intro: "برای درخواست جلسه آشنایی، طرح پرسش یا بررسی امکان همکاری، فرم زیر را تکمیل کنید. در اولین فرصت با شما تماس می‌گیریم.",
    details: { email: "ایمیل", phone: "تلفن", whatsapp: "واتس‌اپ", address: "نشانی", whatsappAction: "گفت‌وگو در واتس‌اپ" },
    pending: "راه‌های ارتباطی ستیا به‌زودی در این صفحه قرار می‌گیرند.",
    form: {
      title: "درخواست جلسه آشنایی",
      name: "نام و نام خانوادگی",
      company: "نام شرکت (اختیاری)",
      email: "ایمیل",
      phone: "تلفن (اختیاری)",
      topic: "موضوع",
      topics: ["جلسه آشنایی", "کوچینگ اجرایی فردی", "کوچینگ تیم رهبری", "سایر"],
      format: "شیوه ترجیحی جلسه",
      formats: ["حضوری", "آنلاین", "فرقی نمی‌کند"],
      message: "پیام شما",
      submit: "ارسال درخواست",
      success: "سپاس! برنامه ایمیل شما با متن پیام باز شد؛ برای ارسال، فقط کافی است آن را بفرستید.",
    },
  },
  footer: {
    about: "کوچینگ اجرایی و رهبری برای مدیران ارشد، بنیان‌گذاران و تیم‌های رهبری.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const content: Record<Lang, Content> = { en, fa };
