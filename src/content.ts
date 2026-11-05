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
    langSwitch: "فارسی",
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
        text: "Through executive and leadership coaching, Setia helps senior leaders, founders and leadership teams pause, see more clearly and choose more deliberately, so they can lead their business’s growth with greater confidence.",
        primary: { label: "Book an introductory session", href: "#contact" },
        image: { src: "./images/hero-growth.png", alt: "Illustration of people climbing steps toward a rising sun" },
      },
      {
        eyebrow: "Who does Setia work with?",
        title: "Founders and business owners",
        text: "When decisions are heavy and partnerships, interests and the future of the business are at stake: room to see clearly before you choose.",
        visual: { count: 1, accent: "gold" },
      },
      {
        eyebrow: "Who does Setia work with?",
        title: "Senior leaders and executives",
        text: "When pressure is high and the decisions are yours to make: to recognise your own leadership patterns and lead with relationships grounded in trust.",
        visual: { count: 2, accent: "teal" },
      },
      {
        eyebrow: "Who does Setia work with?",
        title: "Leadership teams",
        text: "When each member of the leadership team sees from their own angle: to truly hear one another, talk constructively and move together toward shared goals.",
        visual: { count: 3, accent: "ink" },
      },
    ] as HeroSlide[],
    controls: { previous: "Previous slide", next: "Next slide", slide: "Slide" },
  },
  perspective: {
    eyebrow: "What is executive coaching?",
    title: "Considering executive coaching for your leaders or leadership team?",
    text: "You may not sit in the sessions yourself, but choosing well depends on you. This short guide explains what coaching is and what it gives your people and your organisation.",
    definition: {
      label: "In one sentence",
      text: "An executive coach doesn’t hand leaders answers; they help them see their own more clearly. Executive coaching is a regular, confidential conversation with leaders, for pausing, noticing patterns and choosing more deliberately in decisions and in leadership.",
    },
    people: {
      title: "What your leaders experience",
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
    text: "At Setia, coaching begins with a pause: when we pause, we notice our interpretations, emotions and reactions; when we see them, we can choose more deliberately. Our approach comes down to three words: pause, see, choose.",
    items: [
      ["Pause", "A moment before reacting, to notice what is going on inside us: the emotion, the thought, the urge to respond."],
      ["See", "Seeing the interpretations, assumptions and patterns that shape our choices without our noticing."],
      ["Choose", "A choice aligned with our values and goals, instead of an automatic reaction."],
    ],
    closing: "The aim isn’t to become flawless, but to grow our awareness and our capacity to choose in situations where we might once have reacted automatically.",
  },
  about: {
    title: "About Setia",
    intro: "Setia offers executive and leadership coaching: a space for senior leaders, founders and leadership teams to pause, see more deeply and choose more deliberately.",
    who: {
      title: "Who we are",
      text: "Setia was founded on the belief that the quality of a business’s growth depends on the quality of thinking, conversation and decision-making of the people who lead it. We work alongside leaders and teams so they can better understand their own interpretations and patterns and find new ways to move forward.",
    },
    approach: {
      title: "Our approach",
      text: "At Setia, coaching isn’t only a tool for reaching performance goals; it’s a chance to see what lies behind our decisions and reactions. We don’t offer ready-made answers. We ask the questions that help you see your own answers more clearly.",
      link: "Our approach: pause, see, choose",
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
    intro: "No two paths are alike, so every engagement begins by understanding your situation, and is shaped around your role, your challenges and your goals.",
    items: [
      {
        title: "Executive coaching for founders and business owners",
        text: "One-to-one support to work through hard decisions, partnership challenges, conflicts of interest and growth opportunities with a clearer view.",
        visual: { count: 1, accent: "gold" },
      },
      {
        title: "Executive coaching for senior leaders",
        text: "One-to-one sessions for executives and senior managers: recognising leadership patterns, handling pressure and conflict more constructively, and leading with trust.",
        visual: { count: 2, accent: "teal" },
      },
      {
        title: "Leadership team coaching",
        text: "Structured conversations with leadership and management teams to understand differing perspectives, strengthen constructive dialogue and align around shared goals.",
        visual: { count: 3, accent: "ink" },
      },
    ] as { title: string; text: string; visual: { count: 1 | 2 | 3; accent: Accent } }[],
    process: {
      title: "How we work together",
      steps: [
        ["Introductory session", "A no-obligation conversation to understand your situation, needs and expectations."],
        ["Defining the path", "Agreeing on topics, goals and the framework for working together."],
        ["Coaching sessions", "Regular sessions to examine, discover and practise new ways of acting."],
        ["Review and next steps", "Looking back at what has changed and agreeing on what comes next."],
      ],
    },
    note: "Coaching does not replace specialist advice, therapy or structural change in an organisation. It works alongside them, helping you decide and act more deliberately.",
  },
  faq: {
    title: "Frequently asked questions",
    intro: "Questions leaders and leadership teams often ask before starting executive coaching.",
    // [question, short answer, explanation]
    items: [
      [
        "Who is executive coaching for?",
        "For leaders whose decisions shape a business or a team.",
        "Founders, CEOs, board members, senior executives and leadership teams; especially during growth, restructuring, succession or before strategic decisions.",
      ],
      [
        "Why does a leader sometimes end up in the same kind of situation again and again?",
        "Because experience without a pause turns into habit.",
        "Under pressure we tend to fall back on familiar reactions and interpretations, the ones that once worked. As long as these patterns stay out of sight, they quietly shape our decisions. Coaching makes room to pause and bring them into view.",
      ],
      [
        "How is executive coaching different from management consulting?",
        "A consultant gives you answers; a coach helps you see your own.",
        "Specialist consulting brings outside knowledge and solutions, and it is valuable in its place. Coaching relies on your own ability to see, think and choose, which is why its results stay with you after the sessions end.",
      ],
      [
        "Is executive coaching only for when something is wrong?",
        "No. Coaching is for when we want to see more clearly.",
        "Many leaders come to coaching during periods of growth, a change of role or a big decision, not only in a crisis. Wherever an important choice lies ahead, pausing and looking more closely is worth it.",
      ],
      [
        "How can the effect of coaching be seen?",
        "In the quality of decisions, conversations and relationships.",
        "At the start we agree on clear topics and goals, and we review them along the way. Change usually shows in how decisions are made, how pressure is handled and how people relate to each other.",
      ],
      [
        "Does what is said in the sessions stay confidential?",
        "Yes.",
        "Confidentiality is the foundation of trust in coaching. What is said in a session stays between you and your coach. When an organisation sponsors coaching for its leaders, we agree from the start what, such as attendance or overall goals, is shared with the organisation.",
      ],
      [
        "Are sessions in person or online?",
        "Either can work.",
        "We agree on the format that suits your situation in the introductory session.",
      ],
      [
        "How long does a coaching engagement last?",
        "It depends on your situation and goals.",
        "We decide the length of the path together in the introductory session, once we understand what you need.",
      ],
    ] as [string, string, string][],
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
    title: "Contact us",
    intro: "Sometimes one conversation is the start of seeing differently. To book an introductory session or ask a question, fill in the form below or reach us directly.",
    details: { email: "Email", phone: "Phone", whatsapp: "WhatsApp", address: "Address", whatsappAction: "Chat on WhatsApp" },
    pending: "Setia’s contact details will be added to this page soon.",
    form: {
      title: "Send us a message",
      name: "Full name",
      company: "Company (optional)",
      email: "Email",
      phone: "Phone (optional)",
      topic: "Topic",
      topics: ["Introductory session", "One-to-one executive coaching", "Leadership team coaching", "Other"],
      format: "Preferred format",
      formats: ["In person", "Online", "No preference"],
      message: "Your message",
      submit: "Send message",
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
        text: "ستیا با کوچینگ اجرایی و رهبری، به مدیران ارشد، بنیان‌گذاران و تیم‌های رهبری کمک می‌کند مکث کنند، روشن‌تر ببینند و آگاهانه‌تر انتخاب کنند؛ تا مسیر رشد کسب‌وکار را با اطمینان بیشتری پیش ببرند.",
        primary: { label: "رزرو جلسه آشنایی", href: "#contact" },
        image: { src: "./images/hero-growth.png", alt: "تصویری از افرادی که پله‌ها را به سوی خورشید بالا می‌روند" },
      },
      {
        eyebrow: "ستیا در کنار چه کسانی است؟",
        title: "بنیان‌گذاران و صاحبان کسب‌وکار",
        text: "وقتی تصمیم‌ها سنگین‌اند و پای شراکت، منافع و آینده کسب‌وکار در میان است؛ فضایی برای روشن‌تر دیدن، پیش از انتخاب.",
        visual: { count: 1, accent: "gold" },
      },
      {
        eyebrow: "ستیا در کنار چه کسانی است؟",
        title: "مدیران ارشد و رهبران",
        text: "وقتی فشار بالاست و تصمیم نهایی با شماست؛ برای شناخت الگوهای رهبری خود و رهبری‌ای مبتنی بر اعتماد.",
        visual: { count: 2, accent: "teal" },
      },
      {
        eyebrow: "ستیا در کنار چه کسانی است؟",
        title: "تیم‌های رهبری",
        text: "وقتی هر یک از اعضای تیم مدیریت از زاویه خودش می‌بیند؛ برای شنیدن واقعی یکدیگر، گفت‌وگوی سازنده و حرکتی هماهنگ به سوی اهداف مشترک.",
        visual: { count: 3, accent: "ink" },
      },
    ],
    controls: { previous: "اسلاید قبلی", next: "اسلاید بعدی", slide: "اسلاید" },
  },
  perspective: {
    eyebrow: "کوچینگ اجرایی چیست؟",
    title: "کوچینگ اجرایی را برای مدیران یا تیم رهبری‌تان در نظر دارید؟",
    text: "شاید خودتان در جلسات کوچینگ شرکت نکنید، اما انتخاب درست به شما بستگی دارد. این راهنمای کوتاه کمک می‌کند بدانید کوچینگ چیست و چه چیزی به افراد و سازمان شما می‌دهد.",
    definition: {
      label: "در یک جمله",
      text: "کوچ اجرایی پاسخ آماده نمی‌دهد؛ کمک می‌کند مدیر پاسخ خودش را روشن‌تر ببیند. کوچینگ اجرایی گفت‌وگویی منظم و محرمانه با مدیران و رهبران است برای مکث، دیدن الگوها و انتخاب آگاهانه‌تر در تصمیم‌ها و رهبری.",
    },
    people: {
      title: "آنچه مدیران شما تجربه می‌کنند",
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
    text: "در ستیا، کوچینگ با یک مکث آغاز می‌شود: وقتی مکث می‌کنیم، برداشت‌ها، احساسات و واکنش‌های خود را می‌بینیم؛ و وقتی ببینیم، می‌توانیم آگاهانه‌تر انتخاب کنیم. رویکرد ما در سه کلمه خلاصه می‌شود: مکث، دیدن، انتخاب.",
    items: [
      ["مکث", "لحظه‌ای پیش از واکنش، برای دیدن آنچه در ما می‌گذرد: احساس، فکر و میل به پاسخ‌دادن."],
      ["دیدن", "دیدن برداشت‌ها، فرضیات و الگوهایی که بی‌آنکه متوجه شویم، انتخاب‌های ما را شکل می‌دهند."],
      ["انتخاب", "انتخابی هم‌راستا با ارزش‌ها و اهداف‌مان؛ به‌جای واکنشی خودکار."],
    ],
    closing: "هدف، تبدیل‌شدن به فردی بی‌نقص نیست؛ بلکه افزایش آگاهی و ظرفیت انتخاب در موقعیت‌هایی است که پیش‌تر ممکن بود به‌صورت خودکار به آن‌ها واکنش نشان دهیم.",
  },
  about: {
    title: "درباره ستیا",
    intro: "ستیا در زمینه کوچینگ اجرایی و رهبری فعالیت می‌کند؛ فضایی برای مدیران ارشد، بنیان‌گذاران و تیم‌های رهبری تا مکث کنند، عمیق‌تر ببینند و آگاهانه‌تر انتخاب کنند.",
    who: {
      title: "ما چه کسانی هستیم",
      text: "ستیا با این باور شکل گرفته است که کیفیت رشد هر کسب‌وکار به کیفیت فکر، گفت‌وگو و تصمیم‌های کسانی وابسته است که آن را هدایت می‌کنند. ما در کنار رهبران و تیم‌ها کار می‌کنیم تا برداشت‌ها و الگوهای خود را بهتر بشناسند و راه‌های تازه‌ای برای حرکت به جلو بیابند.",
    },
    approach: {
      title: "رویکرد ما",
      text: "کوچینگ در ستیا فقط ابزاری برای رسیدن به اهداف عملکردی نیست؛ فرصتی است برای دیدن آنچه پشت تصمیم‌ها و واکنش‌های ماست. ما پاسخ آماده نمی‌دهیم؛ پرسش‌هایی مطرح می‌کنیم که کمک می‌کنند پاسخ خودتان را روشن‌تر ببینید.",
      link: "رویکرد ما: مکث، دیدن، انتخاب",
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
    intro: "هیچ دو مسیری شبیه هم نیست؛ برای همین هر همکاری با شناخت موقعیت شما آغاز می‌شود و متناسب با نقش، چالش‌ها و اهداف شما شکل می‌گیرد.",
    items: [
      {
        title: "کوچینگ اجرایی برای بنیان‌گذاران و صاحبان کسب‌وکار",
        text: "همراهی فردی برای بررسی تصمیم‌های دشوار، چالش‌های شراکت، تعارض منافع و فرصت‌های رشد با نگاهی روشن‌تر.",
        visual: { count: 1, accent: "gold" },
      },
      {
        title: "کوچینگ اجرایی برای مدیران ارشد",
        text: "جلسات فردی برای مدیران ارشد و اجرایی: شناخت الگوهای رهبری، مواجهه سازنده‌تر با فشار و تعارض، و رهبری مبتنی بر اعتماد.",
        visual: { count: 2, accent: "teal" },
      },
      {
        title: "کوچینگ تیم رهبری",
        text: "گفت‌وگوهای ساختاریافته با تیم‌های رهبری و مدیریت برای درک تفاوت دیدگاه‌ها، تقویت گفت‌وگوی سازنده و هم‌راستایی در مسیر اهداف مشترک.",
        visual: { count: 3, accent: "ink" },
      },
    ],
    process: {
      title: "مسیر همکاری",
      steps: [
        ["جلسه آشنایی", "گفت‌وگویی بی‌تعهد برای شناخت موقعیت، نیازها و انتظارات شما."],
        ["تعریف مسیر", "توافق بر موضوعات، اهداف و چارچوب همکاری."],
        ["جلسات کوچینگ", "جلسات منظم برای بررسی، کشف و تمرین شیوه‌های تازه."],
        ["مرور و جمع‌بندی", "بازنگری آنچه تغییر کرده و توافق بر قدم‌های بعدی."],
      ],
    },
    note: "کوچینگ جایگزین مشاوره تخصصی، درمان یا تغییرات ساختاری در سازمان نیست؛ بلکه در کنار آن‌ها به شما کمک می‌کند آگاهانه‌تر تصمیم بگیرید و عمل کنید.",
  },
  faq: {
    title: "پرسش‌های متداول",
    intro: "پرسش‌هایی که مدیران و تیم‌های رهبری اغلب پیش از آغاز کوچینگ اجرایی مطرح می‌کنند.",
    items: [
      [
        "کوچینگ اجرایی برای چه کسانی مناسب است؟",
        "برای مدیرانی که تصمیم‌هایشان بر یک کسب‌وکار یا تیم اثر می‌گذارد.",
        "بنیان‌گذاران، مدیران عامل، اعضای هیئت‌مدیره، مدیران ارشد و تیم‌های رهبری؛ به‌ویژه در دوره‌های رشد، تغییر ساختار، جانشینی یا پیش از تصمیم‌های راهبردی.",
      ],
      [
        "چرا یک مدیر گاهی بارها در موقعیت‌های مشابه قرار می‌گیرد؟",
        "چون تجربه بدون مکث، به عادت تبدیل می‌شود.",
        "زیر فشار، به واکنش‌ها و برداشت‌های آشنایی برمی‌گردیم که روزی جواب داده‌اند. تا وقتی این الگوها دیده نشوند، بی‌صدا تصمیم‌های ما را شکل می‌دهند. کوچینگ فضایی است برای مکث و دیدنِ همین الگوها.",
      ],
      [
        "کوچینگ اجرایی با مشاوره مدیریت چه تفاوتی دارد؟",
        "مشاور پاسخ می‌دهد؛ کوچ کمک می‌کند پاسخ خودتان را ببینید.",
        "مشاوره تخصصی، دانش و راه‌حل بیرونی ارائه می‌دهد و در جای خود ارزشمند است. کوچینگ بر توان دیدن، فکرکردن و انتخاب خود شما تکیه دارد؛ به همین دلیل نتیجه آن پس از پایان جلسات نیز با شما می‌ماند.",
      ],
      [
        "آیا کوچینگ اجرایی فقط برای زمانی است که مشکلی داریم؟",
        "نه؛ کوچینگ برای زمانی است که می‌خواهیم روشن‌تر ببینیم.",
        "بسیاری از رهبران در دوره‌های رشد، تغییر نقش یا پیش از تصمیم‌های بزرگ سراغ کوچینگ می‌آیند؛ نه فقط در بحران. هرجا انتخاب مهمی پیش رو باشد، مکث و دیدن دقیق‌تر ارزشمند است.",
      ],
      [
        "اثر کوچینگ را چطور می‌توان دید؟",
        "در کیفیت تصمیم‌ها، گفت‌وگوها و روابط.",
        "در آغاز همکاری، موضوعات و اهداف روشنی تعریف می‌کنیم و در طول مسیر آن‌ها را مرور می‌کنیم. تغییر معمولاً در شیوه تصمیم‌گیری، مواجهه با فشار و کیفیت ارتباط با دیگران دیده می‌شود.",
      ],
      [
        "آیا آنچه در جلسات گفته می‌شود محرمانه می‌ماند؟",
        "بله.",
        "رازداری، پایه اعتماد در کوچینگ است. محتوای جلسات میان شما و کوچ می‌ماند. اگر سازمانی هزینه کوچینگ مدیران خود را می‌پردازد، از ابتدا روشن می‌کنیم چه چیزی، مانند حضور یا اهداف کلی، با سازمان در میان گذاشته می‌شود.",
      ],
      [
        "جلسات حضوری است یا آنلاین؟",
        "هر دو شیوه ممکن است.",
        "شیوه مناسب را در جلسه آشنایی و بر اساس شرایط شما انتخاب می‌کنیم.",
      ],
      [
        "یک همکاری کوچینگ چقدر طول می‌کشد؟",
        "به موقعیت و اهداف شما بستگی دارد.",
        "طول مسیر را در جلسه آشنایی و پس از شناخت نیازهای شما، با هم تعیین می‌کنیم.",
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
    title: "تماس با ما",
    intro: "گاهی یک گفت‌وگو، آغاز دیدنی تازه است. برای رزرو جلسه آشنایی یا طرح پرسش، فرم زیر را تکمیل کنید یا از راه‌های ارتباطی ما استفاده کنید.",
    details: { email: "ایمیل", phone: "تلفن", whatsapp: "واتس‌اپ", address: "نشانی", whatsappAction: "گفت‌وگو در واتس‌اپ" },
    pending: "راه‌های ارتباطی ستیا به‌زودی در این صفحه قرار می‌گیرند.",
    form: {
      title: "پیام خود را بفرستید",
      name: "نام و نام خانوادگی",
      company: "نام شرکت (اختیاری)",
      email: "ایمیل",
      phone: "تلفن (اختیاری)",
      topic: "موضوع",
      topics: ["جلسه آشنایی", "کوچینگ اجرایی فردی", "کوچینگ تیم رهبری", "سایر"],
      format: "شیوه ترجیحی جلسه",
      formats: ["حضوری", "آنلاین", "فرقی نمی‌کند"],
      message: "پیام شما",
      submit: "ارسال پیام",
      success: "سپاس! برنامه ایمیل شما با متن پیام باز شد؛ برای ارسال، فقط کافی است آن را بفرستید.",
    },
  },
  footer: {
    about: "کوچینگ اجرایی و رهبری برای مدیران ارشد، بنیان‌گذاران و تیم‌های رهبری.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const content: Record<Lang, Content> = { en, fa };
