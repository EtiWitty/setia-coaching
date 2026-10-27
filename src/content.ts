// All site copy lives here. Each language has the same shape, so editing a
// section means updating both `en` and `fa` below. Every figure on the page
// points at an entry in `sources`.

export type Lang = "fa" | "en";

export type SourceId =
  | "gallupIran"
  | "gallupGlobal"
  | "gallupManagers"
  | "gallupBoss"
  | "google"
  | "theeboom"
  | "jones"
  | "rctMeta"
  | "campbell"
  | "microsoft"
  | "icf";

export const sourceLinks: Record<SourceId, string> = {
  gallupIran: "https://www.gallup.com/workplace/705698/state-global-workplace-iran-country-level-data.aspx",
  gallupGlobal: "https://www.gallup.com/workplace/697904/state-of-the-global-workplace-global-data.aspx",
  gallupManagers: "https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx",
  gallupBoss: "https://www.govexec.com/management/2015/04/half-american-workers-have-left-job-because-they-hated-their-boss/109183/",
  google: "https://rework.withgoogle.com/en/guides/managers-coach-managers-to-coach",
  theeboom: "https://research.vu.nl/en/publications/does-coaching-work-a-meta-analysis-on-the-effects-of-coaching-on-/",
  jones: "https://research.aston.ac.uk/en/publications/the-effectiveness-of-workplace-coaching-a-meta-analysis-of-learni/",
  rctMeta: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10272735/",
  campbell: "https://www.hachette.co.uk/titles/eric-schmidt/trillion-dollar-coach/9781473676008/",
  microsoft: "https://www.microsoft.com/en-us/worklab/5-questions-on-hybrid-managers-minds",
  icf: "https://coachingfederation.org/research/global-coaching-study",
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
      ["#coaching", "What is coaching"],
      ["#why", "Why leaders matter"],
      ["#evidence", "The evidence"],
      ["#leaders", "Who uses it"],
    ],
    cta: "Request a private briefing",
    menu: "Menu",
  },
  sourceLabel: "Source",
  hero: {
    title: "Business growth starts with the quality of your decisions.",
    text: "Setia helps leaders, founders and teams think more clearly, decide more deliberately and pursue their growth with greater confidence.",
    primary: "Book an introductory session",
    secondary: "What is coaching?",
  },
  perspective: {
    title: "Sometimes, changing the results means looking from a new angle.",
    text: "In business, the problem isn’t always not knowing the solution. Sometimes settled interpretations, automatic reactions or recurring patterns limit our choices. Coaching creates room to pause, re-examine what we take for granted, and see new possibilities for action.",
    items: [
      ["Seeing beyond first impressions", "Examining assumptions and discovering perspectives we have paid little attention to before."],
      ["Choosing instead of reacting", "Recognising emotions and behavioural patterns to respond more deliberately, especially in difficult moments."],
      ["Creating meaningful change", "Bringing the way we think, relate and act into closer alignment with our goals and values."],
    ],
  },
  audiences: {
    title: "Every challenge is a chance to see new possibilities.",
    text: "Sometimes a change in one decision, one conversation or the way we approach a challenge can open a different path ahead. Setia offers leaders and teams a space to examine issues more deeply and find new ways to move forward.",
    items: [
      ["Founders and business owners", "To work through hard decisions, partnership challenges, conflicts of interest and growth opportunities with a clearer, more considered view."],
      ["Leaders and managers", "To recognise leadership patterns, handle pressure and conflict more constructively, and build relationships grounded in trust and accountability."],
      ["Teams and organisations", "To better understand differing perspectives, strengthen constructive conversations and build closer alignment around shared goals."],
    ],
  },
  paths: {
    eyebrow: "Two kinds of leaders come to us",
    title: "Where are you today?",
    items: [
      {
        id: "authority",
        title: "From authority to influence",
        quote: "The best leaders aren’t made in classrooms. They’re made by how they lead.",
        body: "You already make the decisions. Coaching helps your people follow because they believe in where you are going, not only because they must.",
        points: [
          "A private thinking partner, one-to-one and fully confidential",
          "Practical: your real decisions, your real people, your schedule",
          "No classes, no exams, no theory",
        ],
        cta: "Request a private briefing",
      },
      {
        id: "team",
        title: "A leadership team that holds under pressure",
        quote: "You can’t change the conditions. You can change how your team leads in them.",
        body: "You want a top team that is aligned, decisive and still standing after a hard year. Coaching builds that, and shows you the progress.",
        points: [
          "Align your top team and make decisions faster",
          "Keep key leaders from burning out or leaving",
          "Measurable progress you can see and report",
        ],
        cta: "Assess my leadership team",
      },
    ],
  },
  coaching: {
    eyebrow: "What is leadership coaching?",
    title: "A private, structured conversation that helps a leader lead better.",
    body:
      "A trained coach meets a leader regularly, one-to-one. The coach doesn’t lecture or give orders. Through sharp questions, honest feedback and follow-up, the leader sees situations more clearly, makes better decisions and builds habits their team notices. Everything stays between the two of them.",
    compareTitle: "What coaching is not",
    compare: [
      ["Not a training course", "Courses teach the same content to everyone. Coaching works on your own decisions and challenges."],
      ["Not consulting", "A consultant solves the problem for you. A coach strengthens your own judgement, so the results stay."],
      ["Not psychotherapy", "Therapy deals with mental health and the past. Coaching is about work, results and what comes next."],
    ],
    mythsTitle: "Common beliefs, and the facts",
    myths: [
      ["“Coaching is for weak managers.”", "The opposite. The world’s most powerful CEOs have coaches, just like top athletes do."],
      ["“It’s just motivational talk.”", "Coaching is tied to concrete goals agreed at the start and reviewed at the end."],
      ["“You can’t measure it.”", "Goal progress, 360° feedback and team engagement can all be measured before and after."],
      ["“It takes too much time.”", "Usually one or two hours a month, scheduled around your calendar."],
    ],
  },
  why: {
    eyebrow: "Why leaders matter",
    title: "The numbers point to the same place: the person leading the team.",
    stats: [
      { value: "70%+", text: "of the difference in engagement between teams comes down to the manager.", source: "gallupManagers" as SourceId, sourceText: "Gallup" },
      { value: "1 in 2", text: "employees have left a job at some point to get away from their manager.", source: "gallupBoss" as SourceId, sourceText: "Gallup, US survey, 2015" },
      { value: "27% → 22%", text: "Engagement among managers worldwide fell five points in a single year.", source: "gallupGlobal" as SourceId, sourceText: "Gallup, 2026" },
      { value: "#1", text: "When Google studied its best managers, being a good coach came first.", source: "google" as SourceId, sourceText: "Google, Project Oxygen" },
    ],
  },
  evidence: {
    eyebrow: "Does coaching work?",
    title: "What independent research says",
    subtitle:
      "These are not claims by coaching companies. They are university studies that combined the results of many separate experiments.",
    studies: [
      {
        title: "Better results across the board",
        what: "Researchers in the Netherlands combined the results of earlier coaching studies in organizations.",
        found: "Coaching improved all five outcomes measured: performance, well-being, coping with pressure, attitude to work, and reaching goals.",
        source: "theeboom" as SourceId,
        sourceText: "Theeboom et al., Journal of Positive Psychology, 2014",
      },
      {
        title: "Stronger skills and results at work",
        what: "A UK team analysed 17 studies of workplace coaching.",
        found: "Coaching had clear positive effects on skills, attitudes and work results, with the strongest effect on results.",
        source: "jones" as SourceId,
        sourceText: "Jones et al., Journal of Occupational and Organizational Psychology, 2016",
      },
      {
        title: "Proven in controlled experiments",
        what: "A 2023 review brought together randomised experiments, where leaders were assigned to coaching or no coaching by chance.",
        found: "Executive coaching produced significant gains in confidence, resilience and psychological strength.",
        source: "rctMeta" as SourceId,
        sourceText: "Meta-analysis of randomised controlled trials, 2023",
      },
    ],
  },
  leaders: {
    eyebrow: "Who uses coaching",
    title: "The most powerful leaders in the world have coaches",
    items: [
      {
        title: "Steve Jobs, Larry Page and Eric Schmidt",
        body: "All worked with the same coach, Bill Campbell. Three former Google leaders wrote a book about him: Trillion Dollar Coach.",
        source: "campbell" as SourceId,
      },
      {
        title: "Google",
        body: "After finding that its best managers were good coaches, Google began teaching its managers to coach.",
        source: "google" as SourceId,
      },
      {
        title: "Microsoft",
        body: "Microsoft sets out what it expects of its managers in three words: Model, Coach, Care.",
        source: "microsoft" as SourceId,
      },
      {
        title: "A global profession",
        body: "About 123,000 professional coaches now work worldwide, in a field worth around $5.3 billion a year, with companies such as BetterUp built entirely around coaching.",
        source: "icf" as SourceId,
      },
    ],
  },
  privacy: {
    eyebrow: "Complete discretion",
    title: "What you say stays between you and your coach.",
    body:
      "Trust is what makes coaching work. Session content is never shared with anyone. When a company sponsors coaching for its leaders, it only sees what everyone agrees to at the start: attendance and progress on goals.",
    points: ["Confidential one-to-one sessions", "In person or online, on your schedule", "Persian or English"],
  },
  contact: {
    eyebrow: "First step",
    title: "Start with a private conversation",
    subtitle:
      "A free, confidential meeting to understand your situation and whether coaching is right for you or your team. No obligation.",
    fields: {
      name: "Full name",
      company: "Company",
      role: "Your role",
      email: "Email",
      phone: "Phone",
      interest: "I would like",
      message: "Anything you’d like us to know (optional)",
    },
    interests: [
      ["authority", "A private briefing for myself"],
      ["team", "An assessment of my leadership team"],
      ["", "Not sure yet, let’s talk"],
    ],
    submit: "Send request",
    success: "Thank you. Your email app has opened with your request. Just press send.",
  },
  sources: { title: "Sources" },
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
    links: [
      ["#coaching", "کوچینگ چیست"],
      ["#why", "چرا رهبران مهم‌اند"],
      ["#evidence", "شواهد علمی"],
      ["#leaders", "چه کسانی استفاده می‌کنند"],
    ],
    cta: "درخواست جلسه خصوصی",
    menu: "منو",
  },
  sourceLabel: "منبع",
  hero: {
    title: "رشد کسب‌وکار، از کیفیت تصمیم‌های شما آغاز می‌شود.",
    text: "Setia به رهبران، بنیان‌گذاران و تیم‌ها کمک می‌کند شفاف‌تر فکر کنند، آگاهانه‌تر تصمیم بگیرند و مسیر رشد خود را با اطمینان بیشتری دنبال کنند.",
    primary: "رزرو جلسه آشنایی",
    secondary: "کوچینگ چیست؟",
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
  audiences: {
    title: "هر چالش، فرصتی برای دیدن امکان‌های تازه است.",
    text: "گاهی تغییر در یک تصمیم، یک گفت‌وگو یا شیوه مواجهه با یک چالش می‌تواند مسیر متفاوتی پیش روی ما بگذارد. Setia فضایی فراهم می‌کند تا رهبران و تیم‌ها مسائل را عمیق‌تر بررسی کنند و راه‌های تازه‌ای برای حرکت به جلو بیابند.",
    items: [
      ["بنیان‌گذاران و صاحبان کسب‌وکار", "برای بررسی تصمیم‌های دشوار، چالش‌های شراکت، تعارض منافع و فرصت‌های رشد با نگاهی روشن‌تر و آگاهانه‌تر."],
      ["رهبران و مدیران", "برای شناخت الگوهای رهبری، مواجهه سازنده‌تر با فشار و تعارض، و ایجاد ارتباطاتی مبتنی بر اعتماد و مسئولیت‌پذیری."],
      ["تیم‌ها و سازمان‌ها", "برای درک بهتر تفاوت دیدگاه‌ها، تقویت گفت‌وگوهای سازنده و ایجاد هماهنگی بیشتر در مسیر اهداف مشترک."],
    ],
  },
  paths: {
    eyebrow: "دو گروه از رهبران به ما مراجعه می‌کنند",
    title: "امروز کجا ایستاده‌اید؟",
    items: [
      {
        id: "authority",
        title: "از اختیار تا نفوذ",
        quote: "بهترین رهبران در کلاس درس ساخته نمی‌شوند؛ با شیوه رهبری‌شان ساخته می‌شوند.",
        body: "تصمیم‌گیرنده شما هستید. کوچینگ کمک می‌کند افرادتان از سر باور به مسیری که تعیین کرده‌اید همراه شوند، نه فقط از سر اجبار.",
        points: [
          "یک هم‌فکر خصوصی؛ جلسات فردی و کاملاً محرمانه",
          "کاملاً کاربردی: تصمیم‌های واقعی، آدم‌های واقعی، در زمان‌بندی شما",
          "بدون کلاس، بدون امتحان، بدون تئوری",
        ],
        cta: "درخواست جلسه خصوصی",
      },
      {
        id: "team",
        title: "تیم رهبری‌ای که زیر فشار دوام می‌آورد",
        quote: "شرایط را نمی‌توانید تغییر دهید؛ اما شیوه رهبری تیم‌تان در این شرایط را می‌توانید.",
        body: "تیمی ارشد می‌خواهید که هم‌راستا باشد، سریع تصمیم بگیرد و پس از یک سال سخت هنوز پابرجا بماند. کوچینگ این تیم را می‌سازد و پیشرفت را به شما نشان می‌دهد.",
        points: [
          "هم‌راستا کردن تیم ارشد و تصمیم‌گیری سریع‌تر",
          "جلوگیری از فرسودگی و رفتن مدیران کلیدی",
          "پیشرفت قابل‌اندازه‌گیری که می‌توانید ببینید و گزارش کنید",
        ],
        cta: "ارزیابی تیم رهبری من",
      },
    ],
  },
  coaching: {
    eyebrow: "کوچینگ رهبری چیست؟",
    title: "گفت‌وگویی خصوصی و ساختاریافته که به رهبر کمک می‌کند بهتر رهبری کند.",
    body:
      "یک کوچ حرفه‌ای به‌طور منظم و به‌صورت فردی با رهبر دیدار می‌کند. کوچ سخنرانی نمی‌کند و دستور نمی‌دهد. با پرسش‌های دقیق، بازخورد صادقانه و پیگیری، رهبر موقعیت‌ها را روشن‌تر می‌بیند، تصمیم‌های بهتری می‌گیرد و عادت‌هایی می‌سازد که تیمش تغییر را حس می‌کند. همه‌چیز میان همین دو نفر می‌ماند.",
    compareTitle: "کوچینگ چه چیزی نیست",
    compare: [
      ["دوره آموزشی نیست", "دوره‌ها محتوای یکسانی به همه می‌آموزند. کوچینگ روی تصمیم‌ها و چالش‌های خود شما کار می‌کند."],
      ["مشاوره مدیریت نیست", "مشاور مسئله را برای شما حل می‌کند. کوچ قدرت قضاوت خود شما را تقویت می‌کند تا نتیجه ماندگار باشد."],
      ["روان‌درمانی نیست", "درمان به سلامت روان و گذشته می‌پردازد. کوچینگ درباره کار، نتیجه و قدم بعدی است."],
    ],
    mythsTitle: "باورهای رایج و واقعیت",
    myths: [
      ["«کوچینگ برای مدیران ضعیف است.»", "برعکس. قدرتمندترین مدیران جهان کوچ دارند؛ درست مثل ورزشکاران بزرگ."],
      ["«فقط حرف‌های انگیزشی است.»", "کوچینگ به اهداف مشخصی گره خورده که در ابتدا توافق و در پایان بررسی می‌شوند."],
      ["«نتیجه‌اش قابل‌اندازه‌گیری نیست.»", "پیشرفت اهداف، بازخورد ۳۶۰ درجه و انگیزه تیم را می‌توان قبل و بعد سنجید."],
      ["«وقت زیادی می‌گیرد.»", "معمولاً یک تا دو ساعت در ماه، هماهنگ با تقویم شما."],
    ],
  },
  why: {
    eyebrow: "چرا رهبران مهم‌اند",
    title: "اعداد همه به یک نقطه اشاره می‌کنند: کسی که تیم را رهبری می‌کند.",
    stats: [
      { value: "بیش از ۷۰٪", text: "از تفاوت انگیزه و تعهد میان تیم‌ها به مدیر آن تیم برمی‌گردد.", source: "gallupManagers", sourceText: "گالوپ" },
      { value: "۱ از ۲", text: "کارمند دست‌کم یک بار شغلش را ترک کرده تا از مدیرش دور شود.", source: "gallupBoss", sourceText: "گالوپ، نظرسنجی آمریکا، ۲۰۱۵" },
      { value: "۲۷٪ ← ۲۲٪", text: "انگیزه و تعهد مدیران در جهان تنها در یک سال پنج واحد کاهش یافت.", source: "gallupGlobal", sourceText: "گالوپ، ۲۰۲۶" },
      { value: "رتبه ۱", text: "وقتی گوگل بهترین مدیرانش را بررسی کرد، «کوچ خوب بودن» در رتبه اول قرار گرفت.", source: "google", sourceText: "گوگل، پروژه اکسیژن" },
    ],
  },
  evidence: {
    eyebrow: "آیا کوچینگ اثر دارد؟",
    title: "پژوهش‌های مستقل چه می‌گویند",
    subtitle:
      "این‌ها ادعای شرکت‌های کوچینگ نیستند. پژوهش‌های دانشگاهی‌اند که نتایج ده‌ها آزمایش جداگانه را کنار هم گذاشته‌اند.",
    studies: [
      {
        title: "نتایج بهتر در همه زمینه‌ها",
        what: "پژوهشگرانی در هلند نتایج پژوهش‌های پیشین درباره کوچینگ در سازمان‌ها را با هم ترکیب کردند.",
        found: "کوچینگ هر پنج شاخص سنجیده‌شده را بهبود داد: عملکرد، بهزیستی، کنار آمدن با فشار، نگرش به کار و دستیابی به اهداف.",
        source: "theeboom",
        sourceText: "Theeboom و همکاران، ۲۰۱۴",
      },
      {
        title: "مهارت‌ها و نتایج کاری قوی‌تر",
        what: "تیمی در بریتانیا ۱۷ پژوهش درباره کوچینگ در محیط کار را تحلیل کرد.",
        found: "کوچینگ اثر مثبت روشنی بر مهارت‌ها، نگرش‌ها و نتایج کاری داشت و بیشترین اثر روی نتایج بود.",
        source: "jones",
        sourceText: "Jones و همکاران، ۲۰۱۶",
      },
      {
        title: "اثبات‌شده در آزمایش‌های کنترل‌شده",
        what: "یک مرور در سال ۲۰۲۳ آزمایش‌هایی را گرد آورد که در آن‌ها مدیران به‌صورت تصادفی به گروه کوچینگ یا بدون کوچینگ تقسیم شده بودند.",
        found: "کوچینگ اجرایی افزایش معناداری در اعتمادبه‌نفس، تاب‌آوری و توان روانی مدیران ایجاد کرد.",
        source: "rctMeta",
        sourceText: "فراتحلیل کارآزمایی‌های تصادفی، ۲۰۲۳",
      },
    ],
  },
  leaders: {
    eyebrow: "چه کسانی از کوچینگ استفاده می‌کنند",
    title: "قدرتمندترین رهبران جهان کوچ دارند",
    items: [
      {
        title: "استیو جابز، لری پیج و اریک اشمیت",
        body: "همه با یک کوچ کار کرده‌اند: بیل کمبل. سه مدیر پیشین گوگل کتابی درباره او نوشته‌اند به نام «کوچ تریلیون‌دلاری».",
        source: "campbell",
      },
      {
        title: "گوگل",
        body: "گوگل پس از آنکه دریافت بهترین مدیرانش کوچ‌های خوبی هستند، کوچ‌کردن را به همه مدیرانش آموزش داد.",
        source: "google",
      },
      {
        title: "مایکروسافت",
        body: "مایکروسافت انتظاراتش از مدیران را در سه کلمه خلاصه کرده است: الگو باش، کوچ باش، اهمیت بده.",
        source: "microsoft",
      },
      {
        title: "حرفه‌ای جهانی",
        body: "امروز حدود ۱۲۳ هزار کوچ حرفه‌ای در جهان فعال‌اند، در صنعتی با ارزش سالانه حدود ۵٫۳ میلیارد دلار؛ با شرکت‌هایی مانند BetterUp که تماماً بر کوچینگ بنا شده‌اند.",
        source: "icf",
      },
    ],
  },
  privacy: {
    eyebrow: "رازداری کامل",
    title: "آنچه می‌گویید میان شما و کوچ‌تان می‌ماند.",
    body:
      "اعتماد، پایه اثربخشی کوچینگ است. محتوای جلسات هرگز با کسی به اشتراک گذاشته نمی‌شود. وقتی شرکتی کوچینگ مدیرانش را تأمین می‌کند، فقط آنچه همه از ابتدا بر آن توافق کرده‌اند را می‌بیند: حضور در جلسات و پیشرفت در اهداف.",
    points: ["جلسات فردی و محرمانه", "حضوری یا آنلاین، در زمان‌بندی شما", "به زبان فارسی یا انگلیسی"],
  },
  contact: {
    eyebrow: "قدم اول",
    title: "با یک گفت‌وگوی خصوصی شروع کنید",
    subtitle:
      "یک جلسه رایگان و محرمانه برای شناخت شرایط شما و اینکه آیا کوچینگ برای شما یا تیم‌تان مناسب است. بدون هیچ تعهدی.",
    fields: {
      name: "نام و نام خانوادگی",
      company: "نام شرکت",
      role: "سمت شما",
      email: "ایمیل",
      phone: "تلفن",
      interest: "مایلم",
      message: "اگر نکته‌ای هست که بخواهید بدانیم (اختیاری)",
    },
    interests: [
      ["authority", "یک جلسه خصوصی برای خودم"],
      ["team", "ارزیابی تیم رهبری‌ام"],
      ["", "هنوز مطمئن نیستم، گفت‌وگو کنیم"],
    ],
    submit: "ارسال درخواست",
    success: "سپاس. برنامه ایمیل شما با متن درخواست باز شد؛ فقط کافی است آن را ارسال کنید.",
  },
  sources: { title: "منابع" },
  footer: {
    about: "کوچینگ رهبری برای مدیران ارشد و تیم‌های رهبری.",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const content: Record<Lang, Content> = { en, fa };

// Full citations for the sources list at the bottom of the page.
export const sourceCitations: Record<SourceId, string> = {
  gallupIran: "Gallup — State of the Global Workplace: Iran country-level data (2026)",
  gallupGlobal: "Gallup — State of the Global Workplace: global data (2026)",
  gallupManagers: "Beck & Harter — Managers Account for 70% of Variance in Employee Engagement, Gallup",
  gallupBoss: "Gallup (2015), reported in Government Executive — Half of American workers have left a job because of their boss",
  google: "Google re:Work — Coach managers to coach (Project Oxygen)",
  theeboom: "Theeboom, Beersma & van Vianen (2014). Does coaching work? Journal of Positive Psychology, 9(1)",
  jones: "Jones, Woods & Guillaume (2016). The effectiveness of workplace coaching. Journal of Occupational and Organizational Psychology, 89(2)",
  rctMeta: "The effects of executive coaching on behaviors, attitudes, and personal characteristics: a meta-analysis of randomized control trial studies (2023)",
  campbell: "Schmidt, Rosenberg & Eagle (2019). Trillion Dollar Coach",
  microsoft: "Microsoft WorkLab — managers and the Model, Coach, Care framework",
  icf: "International Coaching Federation — 2025 Global Coaching Study",
};
