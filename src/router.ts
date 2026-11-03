import { useEffect, useState } from "react";

// Hash-based pages (#/about, #/blog/some-post) so the site works on GitHub Pages
// without server rewrites. Any other hash (#perspective) is an anchor on the home page.

export const pages = ["home", "about", "services", "blog", "contact"] as const;
export type Page = (typeof pages)[number];

export type Route = { page: Page; slug?: string; anchor?: string };

function parse(hash: string): Route {
  if (hash.startsWith("#/")) {
    const [page, slug] = hash.slice(2).split("/");
    if ((pages as readonly string[]).includes(page)) return { page: page as Page, slug: slug || undefined };
    return { page: "home" };
  }
  return { page: "home", anchor: hash.slice(1) || undefined };
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

export const pageHref = (page: Page, slug?: string) => (page === "home" ? "#/" : `#/${page}${slug ? `/${slug}` : ""}`);
