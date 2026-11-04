import { useEffect, useState } from "react";

// The site is one scrolling page; each section has an id and the nav links to it
// with a plain hash (#services). The only separate view is a full blog article,
// at #/blog/<slug>. Older page links (#/about, #/contact) map to their section.

export const sections = ["perspective", "about", "philosophy", "services", "blog", "contact"] as const;
export type SectionId = (typeof sections)[number];

export type Route = { article?: string; anchor?: string };

function parse(hash: string): Route {
  if (hash.startsWith("#/")) {
    const [page, slug] = hash.slice(2).split("/");
    if (page === "blog" && slug) return { article: slug };
    return { anchor: page || undefined };
  }
  return { anchor: hash.slice(1) || undefined };
}

export function useRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export const sectionHref = (id: SectionId | "top") => `#${id}`;
export const articleHref = (slug: string) => `#/blog/${slug}`;

// Which section is currently on screen, for highlighting its nav link.
export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId | null>(null);
  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const pick = () => {
      // The last section whose top has passed a line a third of the way down the screen.
      const line = window.innerHeight / 3;
      let current: SectionId | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [enabled]);
  return active;
}
