import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Content, type Lang } from "./content";

type I18n = { lang: Lang; t: Content; setLang: (lang: Lang) => void };

const I18nContext = createContext<I18n | null>(null);

// Language comes from ?lang=en|fa, then the visitor's last choice, then Persian.
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "fa") return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fa") return saved;
  } catch {
    // Storage can be blocked; fall through to the default.
  }
  return "fa";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = content[lang].meta.title;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, [lang]);

  return <I18nContext.Provider value={{ lang, t: content[lang], setLang }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

// Persian digits for numbers rendered from code (step numbers etc.).
export function localDigits(n: number | string, lang: Lang) {
  const s = String(n);
  return lang === "fa" ? s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]) : s;
}
