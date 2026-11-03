import type { Lang } from "./content";

// Weblog and media entries, newest first. An "article" has its text in `body`
// (one string per paragraph) and opens on its own page; a "video" or "podcast"
// links out to `url`.
//
// Example:
// {
//   slug: "pausing-before-deciding",
//   type: "article",
//   date: "2026-11-10",
//   title: { fa: "…", en: "…" },
//   summary: { fa: "…", en: "…" },
//   body: { fa: ["…", "…"], en: ["…", "…"] },
// },

export type PostType = "article" | "video" | "podcast";

export type Post = {
  slug: string;
  type: PostType;
  date: string; // YYYY-MM-DD
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  body?: Record<Lang, string[]>;
  url?: string;
};

// PLACEHOLDERS: these three articles stand in until real posts are ready.
export const posts: Post[] = [
  {
    slug: "the-pause-before-a-decision",
    type: "article",
    date: "2026-11-01",
    title: { fa: "مکث، پیش از تصمیم", en: "The pause before a decision" },
    summary: {
      fa: "چرا گاهی مهم‌ترین قدم پیش از یک تصمیم دشوار، چند لحظه توقف است؟",
      en: "Why the most important step before a hard decision is sometimes a moment of stillness.",
    },
    body: {
      fa: [
        "در فشار روزمره کسب‌وکار، سرعت اغلب یک امتیاز به نظر می‌رسد. اما بسیاری از تصمیم‌هایی که بعدها از آن‌ها پشیمان می‌شویم، نه از کمبود اطلاعات، بلکه از واکنشی سریع به یک موقعیت تنش‌زا آغاز شده‌اند.",
        "مکث به معنای تعلل نیست. مکث فرصتی است تا ببینیم در این لحظه چه احساسی داریم، چه چیزی را بدیهی فرض کرده‌ایم و آیا گزینه‌هایی هست که هنوز به آن‌ها فکر نکرده‌ایم.",
        "گاهی چند نفس آرام یا یک پرسش ساده مانند «اگر از زاویه دیگری نگاه کنم، چه می‌بینم؟» کافی است تا فاصله‌ای میان محرک و پاسخ ایجاد شود؛ فاصله‌ای که در آن، انتخاب آگاهانه ممکن می‌شود.",
      ],
      en: [
        "Under the everyday pressure of business, speed often looks like an advantage. Yet many decisions we later regret did not start with a lack of information, but with a quick reaction to a tense situation.",
        "Pausing is not hesitation. It is a chance to notice what we are feeling right now, what we are taking for granted, and whether there are options we have not yet considered.",
        "Sometimes a few calm breaths, or a simple question such as “What would I see if I looked from another angle?”, is enough to create space between a trigger and a response: a space in which a deliberate choice becomes possible.",
      ],
    },
  },
  {
    slug: "when-interpretations-feel-like-facts",
    type: "article",
    date: "2026-10-20",
    title: { fa: "وقتی برداشت‌ها شبیه واقعیت به نظر می‌رسند", en: "When interpretations feel like facts" },
    summary: {
      fa: "برداشت ما از یک موقعیت، آنچه را می‌بینیم و انتخاب‌هایی را که پیش رویمان است شکل می‌دهد.",
      en: "How we interpret a situation shapes what we notice and the choices we see in front of us.",
    },
    body: {
      fa: [
        "دو مدیر در یک جلسه، یک جمله یکسان را می‌شنوند. یکی آن را نشانه بی‌اعتمادی می‌داند و دیگری فرصتی برای شفاف‌سازی. هر دو با اطمینان از «واقعیت» حرف می‌زنند، اما در حقیقت از برداشت خود سخن می‌گویند.",
        "برداشت‌ها بخش طبیعی تجربه انسانی‌اند و بدون آن‌ها نمی‌توانیم به دنیا معنا دهیم. دشواری از جایی آغاز می‌شود که آن‌قدر به برداشت خود دل می‌بندیم که آن را با خود واقعیت یکی می‌گیریم.",
        "پرسیدن از خود که «از کجا می‌دانم که این‌طور است؟» یا «چه توضیح دیگری ممکن است؟» می‌تواند امکان‌هایی را آشکار کند که پیش‌تر دیده نمی‌شدند؛ در گفت‌وگو با همکاران، در تصمیم‌گیری و در رابطه با خودمان.",
      ],
      en: [
        "Two managers in the same meeting hear the same sentence. One takes it as a sign of distrust, the other as a chance to clarify. Both speak confidently about “what happened”, but each is really describing their own interpretation.",
        "Interpretations are a natural part of human experience; without them we could not make sense of the world. The difficulty starts when we hold on to an interpretation so tightly that we mistake it for reality itself.",
        "Asking ourselves “How do I know this is so?” or “What other explanation is possible?” can reveal possibilities that were not visible before: in conversations with colleagues, in decisions, and in how we relate to ourselves.",
      ],
    },
  },
  {
    slug: "difficult-conversations-in-teams",
    type: "article",
    date: "2026-10-05",
    title: { fa: "گفت‌وگوهای دشوار در تیم", en: "Difficult conversations in teams" },
    summary: {
      fa: "اختلاف نظر در تیم اجتناب‌ناپذیر است؛ آنچه تفاوت می‌سازد، شیوه گفت‌وگو درباره آن است.",
      en: "Disagreement in a team is inevitable; what makes the difference is how we talk about it.",
    },
    body: {
      fa: [
        "بسیاری از تیم‌ها از گفت‌وگوهای دشوار پرهیز می‌کنند، به این امید که مسئله خودبه‌خود حل شود. اما موضوعات ناگفته معمولاً از بین نمی‌روند؛ فقط به شکل دیگری، در کندی تصمیم‌ها یا فاصله میان افراد، خود را نشان می‌دهند.",
        "گفت‌وگوی سازنده با کنجکاوی آغاز می‌شود: تلاش برای فهمیدن اینکه دیگری چه می‌بیند و چرا، پیش از آنکه برای قانع‌کردن او بکوشیم.",
        "وقتی اعضای تیم احساس کنند دیدگاهشان شنیده می‌شود، حتی اگر در نهایت با آن موافقت نشود، اعتماد و مسئولیت‌پذیری در تیم تقویت می‌شود و هماهنگی در مسیر اهداف مشترک آسان‌تر می‌شود.",
      ],
      en: [
        "Many teams avoid difficult conversations, hoping the issue will resolve itself. But unspoken issues rarely disappear; they show up in other ways, in slower decisions or growing distance between people.",
        "A constructive conversation begins with curiosity: trying to understand what the other person sees, and why, before trying to persuade them.",
        "When team members feel their perspective is heard, even if it is not ultimately agreed with, trust and accountability grow, and aligning around shared goals becomes easier.",
      ],
    },
  },
];
