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

export const posts: Post[] = [];
