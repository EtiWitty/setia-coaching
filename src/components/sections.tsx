import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { localDigits, useI18n } from "../i18n";
import { sectionHref, useActiveSection, type Route, type SectionId } from "../router";
import { Container } from "./ui";

/* ---------------------------------- Nav ---------------------------------- */

// Setia's mark (as in the site icon) with the name and, underneath, the tagline.
export function Logo({ compact = false }: { compact?: boolean }) {
  const { t, lang } = useI18n();
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className="size-9 shrink-0 sm:size-10" aria-hidden>
        <rect width="64" height="64" rx="14" className="fill-ink" />
        <path d="M19 41 L32 19 L45 41" fill="none" className="stroke-gold" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="45.5" r="3.5" className="fill-gold" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{t.brand.name}</span>
        {!compact && (
          <span className={`mt-1.5 text-muted ${lang === "fa" ? "text-[0.6875rem] font-medium" : "font-[Inter] text-[0.5625rem] font-semibold tracking-[0.2em]"}`}>
            {t.brand.tagline}
          </span>
        )}
      </span>
    </span>
  );
}

// Small language toggle: a globe and the other language's short name.
function LanguageToggle({ className = "" }: { className?: string }) {
  const { t, lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "fa" ? "en" : "fa")}
      aria-label={t.meta.langSwitchLabel}
      lang={lang === "fa" ? "en" : "fa"}
      className={`inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-semibold text-muted transition-colors hover:bg-ink/5 hover:text-ink ${className}`}
    >
      <Globe className="size-4" aria-hidden />
      {t.meta.langSwitch}
    </button>
  );
}

// Stays at the top of the screen while scrolling; each link jumps to its section
// on the page, and the section in view is underlined in gold.
export function Nav({ route }: { route: Route }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const onPage = !route.article;
  const visible = useActiveSection(onPage);
  // The philosophy section belongs to "About us".
  const active: SectionId | null = visible === "philosophy" ? "about" : visible;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <a href={sectionHref("top")} onClick={() => setOpen(false)} className="min-h-11 shrink-0 content-center" aria-label={t.brand.name}>
          <Logo />
        </a>

        <nav className="hidden h-full items-center gap-6 text-[0.9375rem] whitespace-nowrap lg:flex xl:gap-7">
          {t.nav.links.map(([id, label]) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={sectionHref(id)}
                aria-current={isActive ? "location" : undefined}
                className={`relative flex h-full items-center transition-colors hover:text-ink ${isActive ? "font-semibold text-ink" : "text-muted"}`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gold transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <span className="mx-2 hidden h-6 w-px bg-line sm:block" aria-hidden />
          <a
            href={sectionHref("contact")}
            className="hidden h-11 items-center rounded-md bg-ink px-5 text-sm font-semibold whitespace-nowrap text-ink-foreground transition-colors hover:bg-ink-soft sm:inline-flex"
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
        // Floats over the page, so opening the menu doesn't push the content down.
        <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-y border-line bg-background shadow-xl shadow-ink/10 lg:hidden">
          <Container className="flex flex-col py-3">
            {t.nav.links.map(([id, label]) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={sectionHref(id)}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center gap-3 py-3 text-base transition-colors ${isActive ? "font-semibold text-ink" : "text-muted"}`}
                >
                  <span className={`h-4 w-0.5 rounded-full ${isActive ? "bg-gold" : "bg-transparent"}`} aria-hidden />
                  {label}
                </a>
              );
            })}
            <a
              href={sectionHref("contact")}
              onClick={() => setOpen(false)}
              className="mt-2 mb-2 inline-flex h-12 items-center justify-center rounded-md bg-ink px-5 font-semibold text-ink-foreground sm:hidden"
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

// Logo and description beside the section links, with the copyright on its own
// line underneath. On phones everything stacks and the links form two columns.
export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-line">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <Logo compact />
            <p className="mt-4 text-sm leading-7 text-muted">{t.footer.about}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 text-sm sm:flex sm:flex-wrap sm:gap-x-8 lg:justify-end">
            {t.nav.links.map(([id, label]) => (
              <a key={id} href={sectionHref(id)} className="inline-flex min-h-11 items-center whitespace-nowrap text-muted transition-colors hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © {localDigits(new Date().getFullYear(), lang)} {t.brand.name}. {t.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
