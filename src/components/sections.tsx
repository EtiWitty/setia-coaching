import { Menu, X } from "lucide-react";
import { useState } from "react";
import { localDigits, useI18n } from "../i18n";
import { sectionHref, useActiveSection, type Route, type SectionId } from "../router";
import { Container } from "./ui";

/* ---------------------------------- Nav ---------------------------------- */

// Stays at the top of the screen while scrolling; each link jumps to its section
// on the page, and the section in view is highlighted.
export function Nav({ route }: { route: Route }) {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const onPage = !route.article;
  const visible = useActiveSection(onPage);
  // The philosophy section belongs to "About us".
  const active: SectionId | null = visible === "philosophy" ? "about" : visible;

  const link = (isActive: boolean) =>
    `transition-colors hover:text-ink ${isActive ? "font-semibold text-ink" : "text-muted"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href={sectionHref("top")} onClick={() => setOpen(false)} className="flex min-h-11 min-w-0 items-center gap-2.5">
          <span className="text-xl font-extrabold tracking-tight">{t.brand.name}</span>
          <span className={`hidden text-muted sm:block ${lang === "fa" ? "text-xs" : "font-[Inter] text-[10px] tracking-[0.22em]"}`}>
            {t.brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {t.nav.links.map(([id, label]) => (
            <a key={id} href={sectionHref(id)} aria-current={active === id ? "location" : undefined} className={link(active === id)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            aria-label={t.meta.langSwitchLabel}
            className="h-10 rounded-md border border-line px-3 text-sm font-medium transition-colors hover:border-ink"
            lang={lang === "fa" ? "en" : "fa"}
          >
            {t.meta.langSwitch}
          </button>
          <a
            href={sectionHref("contact")}
            className="hidden h-10 items-center rounded-md bg-ink px-5 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-soft sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-md border border-line lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-background lg:hidden">
          <Container className="flex flex-col py-3">
            {t.nav.links.map(([id, label]) => (
              <a
                key={id}
                href={sectionHref(id)}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "location" : undefined}
                className={`py-3 text-base ${link(active === id)}`}
              >
                {label}
              </a>
            ))}
            <a
              href={sectionHref("contact")}
              onClick={() => setOpen(false)}
              className="mt-2 mb-2 inline-flex h-12 items-center justify-center rounded-md bg-ink px-5 font-medium text-ink-foreground sm:hidden"
            >
              {t.nav.cta}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}

/* ---------------------------------- Footer ------------------------------- */

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col gap-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="text-base font-extrabold text-ink">{t.brand.name}</span>
          <span className="ms-3">{t.footer.about}</span>
        </div>
        <nav className="flex flex-wrap gap-x-6">
          {t.nav.links.map(([id, label]) => (
            <a key={id} href={sectionHref(id)} className="inline-flex min-h-11 items-center hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div>
          © {localDigits(new Date().getFullYear(), lang)} {t.brand.name}. {t.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
