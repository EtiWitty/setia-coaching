// All site copy lives here. Each language has the same shape, so adding or
// editing a section means updating both `en` and `fa` below.

export type Lang = "fa" | "en";

const en = {
  meta: {
    title: "Setia | Business Coaching for Organizations",
    langSwitch: "فارسی",
    langSwitchLabel: "Switch to Persian",
  },
  brand: { name: "Setia", tagline: "BUSINESS COACHING" },
  nav: {
    links: [
      ["#coaching", "What is coaching"],
      ["#packages", "Packages"],
      ["#process", "How it works"],
      ["#results", "Results"],
      ["#faq", "FAQ"],
    ],
    cta: "Book a consultation",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Coaching programs for organizations",
    title: "Develop leaders who grow your business.",
    subtitle:
      "Structured coaching packages for managers, leadership teams and executives, with clear goals, confidential sessions and progress reported back to your organization.",
    primary: "View packages",
    secondary: "Book a free consultation",
    points: ["Persian and English", "Online or in person", "Start with a small pilot"],
    card: {
      title: "A coaching program at a glance",
      steps: [
        ["Goals agreed", "Coachee, manager and HR align on 2–3 business goals"],
        ["Coaching sessions", "Confidential one-to-one or team sessions"],
        ["Midpoint review", "Progress check with the sponsor"],
        ["Final report", "Measured change and next steps"],
      ],
    },
  },
  coaching: {
    eyebrow: "What is coaching?",
    title: "A structured conversation that turns potential into performance.",
    body:
      "Coaching is a partnership between a trained coach and a professional. The coach doesn’t give answers. Through focused questions, honest feedback and accountability, they help people see their situation clearly, choose better actions and build lasting habits. In a business setting, every coaching program is tied to goals the organization cares about.",
    compareTitle: "How coaching differs from other development",
    compare: [
      ["Training", "Teaches the same skills to a group. Coaching applies them to each person’s real work."],
      ["Mentoring", "An experienced person shares their own path. A coach helps people find their own."],
      ["Consulting", "The consultant solves the problem. A coach builds the client’s ability to solve it."],
      ["Therapy", "Therapy addresses mental health and the past. Coaching focuses on work, goals and the future."],
    ],
  },
  challenges: {
    eyebrow: "Why companies invest in coaching",
    title: "The challenges coaching is built to solve",
    items: [
      ["New managers without support", "Your best specialists get promoted and are left to learn managing people by trial and error."],
      ["Misaligned leadership teams", "Senior leaders pull in different directions, and decisions slow down."],
      ["Losing high performers", "Talented people leave when they can’t see growth or don’t feel invested in."],
      ["Growth and change", "Restructuring, scaling or new strategy demand new behaviors from leaders, fast."],
      ["Succession gaps", "No one is ready to step into critical roles when they open up."],
      ["Burnout and pressure", "Leaders carry heavy loads without a safe space to think and reset."],
    ],
  },
  packages: {
    eyebrow: "Coaching packages",
    title: "Packages for every level of your organization",
    subtitle:
      "Each package can be adjusted to your team size, goals and budget. Pricing is quoted after a free discovery call.",
    duration: "Duration",
    who: "For",
    includes: "Includes",
    cta: "Request a proposal",
    badge: "Best place to start",
    items: [
      {
        id: "managers",
        name: "Manager Essentials",
        summary: "Group coaching for new and mid-level managers to build core people-leadership skills.",
        who: "8–20 managers",
        duration: "3 months",
        features: [
          "6 group coaching sessions (90 min)",
          "2 one-to-one sessions per manager",
          "Before and after leadership self-assessment",
          "Practical tools: feedback, delegation, one-to-ones",
          "Summary report for HR",
        ],
        featured: true,
      },
      {
        id: "team",
        name: "Leadership Team",
        summary: "Team coaching for executive and senior teams that need alignment, trust and faster decisions.",
        who: "One team of 5–12",
        duration: "6 months",
        features: [
          "Team diagnostic and interviews",
          "Kick-off workshop (1 day)",
          "Monthly team coaching sessions",
          "3 one-to-one sessions per team member",
          "Team agreements and progress review",
        ],
        featured: false,
      },
      {
        id: "executive",
        name: "Executive Coaching",
        summary: "One-to-one coaching for CEOs, founders and C-level leaders facing high-stakes challenges.",
        who: "Individual leaders",
        duration: "6 months",
        features: [
          "12 one-to-one sessions (60–90 min)",
          "360° stakeholder interviews",
          "Three-way goal setting with the sponsor",
          "Messaging support between sessions",
          "Midpoint and final review",
        ],
        featured: false,
      },
      {
        id: "culture",
        name: "Coaching Culture",
        summary: "A company-wide program that teaches your managers to coach and makes coaching part of how you work.",
        who: "Whole organization",
        duration: "9–12 months",
        features: [
          "Pilot with one department first",
          "Coaching-skills training for managers",
          "Coaching for key leaders",
          "Internal coach development",
          "Quarterly impact reports",
        ],
        featured: false,
      },
    ],
    addonsTitle: "Add-ons",
    addons: [
      "360° feedback assessment",
      "Leadership style and strengths assessment",
      "Half-day workshops on topics you choose",
      "Career-transition coaching for departing employees",
      "Onboarding coaching for newly hired leaders",
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "From first call to measurable results",
    steps: [
      ["Discovery call", "A free 30-minute conversation about your challenges and goals."],
      ["Proposal", "We recommend a package, timeline and price fitted to your needs."],
      ["Coach matching", "Each participant chooses from coaches matched to their role and goals."],
      ["Goal setting", "The coachee, their manager and the coach agree on measurable goals."],
      ["Coaching", "Regular confidential sessions with practice between meetings."],
      ["Review and report", "We measure progress and agree on the next steps with you."],
    ],
  },
  results: {
    eyebrow: "Measurable results",
    title: "You see the progress. The conversations stay private.",
    body:
      "What is said in a coaching session stays between coach and coachee. That trust is what makes coaching work. What the organization receives is a clear picture of progress against the goals everyone agreed on at the start.",
    measuresTitle: "What we measure",
    measures: [
      ["Goal progress", "Progress on each agreed goal, rated by the coachee and their manager"],
      ["360° change", "Before and after feedback from colleagues"],
      ["Engagement", "Short pulse surveys of the leader’s team"],
      ["Sponsor rating", "How the manager and HR rate the program’s value"],
    ],
    privateTitle: "Kept confidential",
    private: ["Session content", "Personal reflections", "Anything the coachee doesn’t choose to share"],
    sharedTitle: "Shared with the organization",
    shared: ["Attendance", "Progress against goals", "Aggregate assessment results"],
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    items: [
      [
        "How long does a coaching program take?",
        "Most programs run 3 to 6 months. Real behavior change needs time to practice between sessions. Company-wide programs usually run 9 to 12 months.",
      ],
      [
        "Are sessions online or in person?",
        "Both. Most one-to-one sessions work well online. We recommend workshops and team kick-offs in person when possible.",
      ],
      [
        "Which languages do you coach in?",
        "Persian and English. Each participant chooses the language they are most comfortable in.",
      ],
      [
        "How do you choose coaches?",
        "Coaches are selected based on their training, business experience and fit with the participant’s role. Each participant can meet a coach before starting.",
      ],
      [
        "Can we start small?",
        "Yes. Many organizations start with a pilot for a few managers or one team, review the results, then scale up.",
      ],
      [
        "How much does it cost?",
        "It depends on the package, the number of participants and the duration. After a free discovery call we send a clear written proposal with a fixed price.",
      ],
    ],
  },
  contact: {
    eyebrow: "Get started",
    title: "Let’s talk about your team",
    subtitle:
      "Tell us a little about your organization. We’ll reply within two business days to schedule a free discovery call.",
    fields: {
      name: "Full name",
      company: "Company",
      role: "Your role",
      email: "Email",
      phone: "Phone (optional)",
      size: "Company size",
      interest: "Interested in",
      message: "What would you like coaching to help with?",
    },
    sizes: ["Under 50", "50–200", "200–1,000", "Over 1,000"],
    notSure: "Not sure yet",
    submit: "Send request",
    success: "Thank you! Your email app has opened with your request. Just press send.",
  },
  footer: {
    about: "Business coaching for managers, leadership teams and executives.",
    rights: "All rights reserved.",
  },
};

export type Content = typeof en;

const fa: Content = {
  meta: {
    title: "ستیا | کوچینگ سازمانی",
    langSwitch: "English",
    langSwitchLabel: "تغییر زبان به انگلیسی",
  },
  brand: { name: "ستیا", tagline: "BUSINESS COACHING" },
  nav: {
    links: [
      ["#coaching", "کوچینگ چیست"],
      ["#packages", "بسته‌ها"],
      ["#process", "فرایند"],
      ["#results", "نتایج"],
      ["#faq", "پرسش‌ها"],
    ],
    cta: "رزرو جلسه مشاوره",
    menu: "منو",
  },
  hero: {
    eyebrow: "برنامه‌های کوچینگ برای سازمان‌ها",
    title: "رهبرانی پرورش دهید که کسب‌وکارتان را رشد می‌دهند.",
    subtitle:
      "بسته‌های کوچینگ ساختاریافته برای مدیران، تیم‌های رهبری و مدیران ارشد؛ با اهداف روشن، جلسات محرمانه و گزارش پیشرفت به سازمان شما.",
    primary: "مشاهده بسته‌ها",
    secondary: "رزرو جلسه مشاوره رایگان",
    points: ["فارسی و انگلیسی", "حضوری یا آنلاین", "شروع با یک پایلوت کوچک"],
    card: {
      title: "یک برنامه کوچینگ در یک نگاه",
      steps: [
        ["توافق بر اهداف", "کوچی، مدیر او و منابع انسانی بر ۲ تا ۳ هدف کسب‌وکاری توافق می‌کنند"],
        ["جلسات کوچینگ", "جلسات محرمانه فردی یا تیمی"],
        ["بازبینی میانی", "بررسی پیشرفت با حامی سازمانی"],
        ["گزارش نهایی", "تغییرات اندازه‌گیری‌شده و گام‌های بعدی"],
      ],
    },
  },
  coaching: {
    eyebrow: "کوچینگ چیست؟",
    title: "گفت‌وگویی ساختاریافته که توانمندی را به عملکرد تبدیل می‌کند.",
    body:
      "کوچینگ همکاری میان یک کوچ آموزش‌دیده و یک فرد حرفه‌ای است. کوچ پاسخ آماده نمی‌دهد؛ با پرسش‌های هدفمند، بازخورد صادقانه و پیگیری مستمر کمک می‌کند فرد موقعیت خود را روشن‌تر ببیند، اقدام‌های بهتری انتخاب کند و عادت‌های ماندگار بسازد. در سازمان، هر برنامه کوچینگ به اهدافی گره می‌خورد که برای کسب‌وکار اهمیت دارند.",
    compareTitle: "تفاوت کوچینگ با سایر روش‌های توسعه",
    compare: [
      ["آموزش", "مهارت‌های یکسان را به یک گروه می‌آموزد؛ کوچینگ آن‌ها را در کار واقعی هر فرد به کار می‌گیرد."],
      ["منتورینگ", "فردی باتجربه مسیر خودش را منتقل می‌کند؛ کوچ کمک می‌کند هر کس مسیر خودش را پیدا کند."],
      ["مشاوره", "مشاور مسئله را حل می‌کند؛ کوچ توانایی حل مسئله را در خود فرد می‌سازد."],
      ["روان‌درمانی", "درمان به سلامت روان و گذشته می‌پردازد؛ کوچینگ بر کار، اهداف و آینده تمرکز دارد."],
    ],
  },
  challenges: {
    eyebrow: "چرا سازمان‌ها روی کوچینگ سرمایه‌گذاری می‌کنند",
    title: "چالش‌هایی که کوچینگ برای حل آن‌ها طراحی شده است",
    items: [
      ["مدیران تازه‌کار بدون پشتیبانی", "بهترین متخصصان شما ارتقا می‌گیرند و باید مدیریت افراد را با آزمون و خطا یاد بگیرند."],
      ["تیم رهبری ناهماهنگ", "مدیران ارشد در جهت‌های مختلف حرکت می‌کنند و تصمیم‌گیری کند می‌شود."],
      ["از دست دادن نیروهای کلیدی", "افراد مستعد وقتی مسیر رشدی نمی‌بینند یا احساس نمی‌کنند روی آن‌ها سرمایه‌گذاری شده، سازمان را ترک می‌کنند."],
      ["رشد و تغییر", "تغییر ساختار، توسعه یا استراتژی جدید، رفتارهای تازه‌ای را از مدیران می‌طلبد؛ آن هم سریع."],
      ["خلأ جانشینی", "وقتی جایگاه‌های کلیدی خالی می‌شوند، کسی برای تصدی آن‌ها آماده نیست."],
      ["فرسودگی و فشار کاری", "مدیران بار سنگینی به دوش می‌کشند، بدون فضایی امن برای فکر کردن و بازیابی."],
    ],
  },
  packages: {
    eyebrow: "بسته‌های کوچینگ",
    title: "بسته‌هایی برای همه سطوح سازمان شما",
    subtitle:
      "هر بسته بر اساس اندازه تیم، اهداف و بودجه شما قابل تنظیم است. قیمت پس از یک جلسه شناخت رایگان اعلام می‌شود.",
    duration: "مدت",
    who: "مخاطب",
    includes: "شامل",
    cta: "درخواست پیشنهاد",
    badge: "بهترین نقطه شروع",
    items: [
      {
        id: "managers",
        name: "مهارت‌های پایه مدیران",
        summary: "کوچینگ گروهی برای مدیران تازه‌کار و میانی، برای ساختن مهارت‌های اصلی رهبری افراد.",
        who: "۸ تا ۲۰ مدیر",
        duration: "۳ ماه",
        features: [
          "۶ جلسه کوچینگ گروهی (۹۰ دقیقه)",
          "۲ جلسه فردی برای هر مدیر",
          "خودارزیابی رهبری در ابتدا و انتهای دوره",
          "ابزارهای کاربردی: بازخورد، تفویض، جلسات فردی",
          "گزارش خلاصه برای منابع انسانی",
        ],
        featured: true,
      },
      {
        id: "team",
        name: "تیم رهبری",
        summary: "کوچینگ تیمی برای تیم‌های اجرایی و ارشد که به هم‌راستایی، اعتماد و تصمیم‌گیری سریع‌تر نیاز دارند.",
        who: "یک تیم ۵ تا ۱۲ نفره",
        duration: "۶ ماه",
        features: [
          "عارضه‌یابی تیم و مصاحبه‌ها",
          "کارگاه شروع (یک روزه)",
          "جلسات ماهانه کوچینگ تیمی",
          "۳ جلسه فردی برای هر عضو تیم",
          "توافق‌نامه‌های تیمی و بازبینی پیشرفت",
        ],
        featured: false,
      },
      {
        id: "executive",
        name: "کوچینگ مدیران ارشد",
        summary: "کوچینگ فردی برای مدیرعامل‌ها، بنیان‌گذاران و مدیران ارشد در مواجهه با چالش‌های حساس.",
        who: "مدیران ارشد به‌صورت فردی",
        duration: "۶ ماه",
        features: [
          "۱۲ جلسه فردی (۶۰ تا ۹۰ دقیقه)",
          "مصاحبه ۳۶۰ درجه با ذی‌نفعان",
          "تعیین هدف سه‌جانبه با حامی سازمانی",
          "پشتیبانی پیامی بین جلسات",
          "بازبینی میانی و نهایی",
        ],
        featured: false,
      },
      {
        id: "culture",
        name: "فرهنگ کوچینگ",
        summary: "برنامه‌ای سازمانی که به مدیران شما کوچ‌کردن را می‌آموزد و کوچینگ را بخشی از شیوه کار سازمان می‌کند.",
        who: "کل سازمان",
        duration: "۹ تا ۱۲ ماه",
        features: [
          "شروع با پایلوت در یک واحد",
          "آموزش مهارت‌های کوچینگ به مدیران",
          "کوچینگ برای مدیران کلیدی",
          "پرورش کوچ‌های داخلی",
          "گزارش‌های فصلی اثربخشی",
        ],
        featured: false,
      },
    ],
    addonsTitle: "خدمات تکمیلی",
    addons: [
      "ارزیابی بازخورد ۳۶۰ درجه",
      "ارزیابی سبک رهبری و نقاط قوت",
      "کارگاه‌های نیم‌روزه با موضوع دلخواه شما",
      "کوچینگ گذار شغلی برای کارکنان در حال جدایی",
      "کوچینگ ورود برای مدیران تازه‌استخدام",
    ],
  },
  process: {
    eyebrow: "فرایند همکاری",
    title: "از اولین تماس تا نتایج قابل‌اندازه‌گیری",
    steps: [
      ["جلسه شناخت", "گفت‌وگویی رایگان و ۳۰ دقیقه‌ای درباره چالش‌ها و اهداف شما."],
      ["پیشنهاد", "بسته، زمان‌بندی و قیمت متناسب با نیاز شما را پیشنهاد می‌کنیم."],
      ["انتخاب کوچ", "هر شرکت‌کننده از میان کوچ‌هایی متناسب با نقش و اهدافش انتخاب می‌کند."],
      ["تعیین اهداف", "کوچی، مدیر او و کوچ بر اهداف قابل‌اندازه‌گیری توافق می‌کنند."],
      ["کوچینگ", "جلسات منظم و محرمانه، همراه با تمرین در فاصله جلسات."],
      ["بازبینی و گزارش", "پیشرفت را می‌سنجیم و درباره گام‌های بعدی با شما توافق می‌کنیم."],
    ],
  },
  results: {
    eyebrow: "نتایج قابل‌اندازه‌گیری",
    title: "شما پیشرفت را می‌بینید؛ گفت‌وگوها محرمانه می‌مانند.",
    body:
      "آنچه در جلسه کوچینگ گفته می‌شود میان کوچ و کوچی می‌ماند؛ همین اعتماد است که کوچینگ را اثربخش می‌کند. آنچه سازمان دریافت می‌کند، تصویری روشن از پیشرفت در برابر اهدافی است که همه در ابتدا بر آن توافق کرده‌اند.",
    measuresTitle: "آنچه اندازه می‌گیریم",
    measures: [
      ["پیشرفت اهداف", "میزان پیشرفت در هر هدف، با ارزیابی کوچی و مدیر او"],
      ["تغییر ۳۶۰ درجه", "بازخورد همکاران در ابتدا و انتهای برنامه"],
      ["مشارکت تیم", "نظرسنجی‌های کوتاه از تیم هر مدیر"],
      ["ارزیابی حامی", "ارزیابی مدیر و منابع انسانی از ارزش برنامه"],
    ],
    privateTitle: "محرمانه می‌ماند",
    private: ["محتوای جلسات", "تأملات شخصی", "هر آنچه کوچی نخواهد به اشتراک بگذارد"],
    sharedTitle: "با سازمان به اشتراک گذاشته می‌شود",
    shared: ["حضور در جلسات", "پیشرفت در برابر اهداف", "نتایج تجمیعی ارزیابی‌ها"],
  },
  faq: {
    eyebrow: "پرسش‌ها",
    title: "پرسش‌های متداول",
    items: [
      [
        "یک برنامه کوچینگ چقدر طول می‌کشد؟",
        "بیشتر برنامه‌ها ۳ تا ۶ ماه طول می‌کشند؛ تغییر رفتار واقعی به زمان برای تمرین بین جلسات نیاز دارد. برنامه‌های سازمانی معمولاً ۹ تا ۱۲ ماه هستند.",
      ],
      [
        "جلسات آنلاین است یا حضوری؟",
        "هر دو. بیشتر جلسات فردی به‌صورت آنلاین به‌خوبی برگزار می‌شوند. کارگاه‌ها و جلسات شروع تیمی را در صورت امکان حضوری پیشنهاد می‌کنیم.",
      ],
      [
        "کوچینگ به چه زبانی انجام می‌شود؟",
        "فارسی و انگلیسی. هر شرکت‌کننده زبانی را که با آن راحت‌تر است انتخاب می‌کند.",
      ],
      [
        "کوچ‌ها چگونه انتخاب می‌شوند؟",
        "کوچ‌ها بر اساس آموزش، تجربه کسب‌وکاری و تناسب با نقش شرکت‌کننده انتخاب می‌شوند. هر شرکت‌کننده می‌تواند پیش از شروع با کوچ آشنا شود.",
      ],
      [
        "آیا می‌توانیم با مقیاس کوچک شروع کنیم؟",
        "بله. بسیاری از سازمان‌ها با یک پایلوت برای چند مدیر یا یک تیم شروع می‌کنند، نتایج را بررسی می‌کنند و سپس برنامه را گسترش می‌دهند.",
      ],
      [
        "هزینه آن چقدر است؟",
        "به بسته، تعداد شرکت‌کنندگان و مدت برنامه بستگی دارد. پس از جلسه شناخت رایگان، یک پیشنهاد کتبی شفاف با قیمت مشخص برایتان ارسال می‌کنیم.",
      ],
    ],
  },
  contact: {
    eyebrow: "شروع همکاری",
    title: "درباره تیم‌تان گفت‌وگو کنیم",
    subtitle:
      "کمی درباره سازمان‌تان بگویید. ظرف دو روز کاری برای هماهنگی جلسه شناخت رایگان با شما تماس می‌گیریم.",
    fields: {
      name: "نام و نام خانوادگی",
      company: "نام شرکت",
      role: "سمت شما",
      email: "ایمیل",
      phone: "تلفن (اختیاری)",
      size: "اندازه شرکت",
      interest: "بسته مورد نظر",
      message: "دوست دارید کوچینگ در چه زمینه‌ای کمک کند؟",
    },
    sizes: ["کمتر از ۵۰ نفر", "۵۰ تا ۲۰۰ نفر", "۲۰۰ تا ۱٬۰۰۰ نفر", "بیش از ۱٬۰۰۰ نفر"],
    notSure: "هنوز مطمئن نیستم",
    submit: "ارسال درخواست",
    success: "سپاس! برنامه ایمیل شما با متن درخواست باز شد؛ فقط کافی است آن را ارسال کنید.",
  },
  footer: {
    about: "کوچینگ سازمانی برای مدیران، تیم‌های رهبری و مدیران ارشد.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const content: Record<Lang, Content> = { en, fa };
