import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { localDigits, useI18n } from "../i18n";
import { pageHref, type Route } from "../router";
import { Container } from "./ui";

/* ---------------------------------- Nav ---------------------------------- */

export function Nav({ route }: { route: Route }) {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [route.page, route.slug]);

  const link = (active: boolean) =>
    `transition-colors hover:text-ink ${active ? "font-semibold text-ink" : "text-muted"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href={pageHref("home")} className="flex min-h-11 min-w-0 items-center gap-2.5">
          <span className="text-xl font-extrabold tracking-tight">{t.brand.name}</span>
          <span className={`hidden text-muted sm:block ${lang === "fa" ? "text-xs" : "font-[Inter] text-[10px] tracking-[0.22em]"}`}>
            {t.brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          <a href={t.nav.coaching.href} className={link(false)}>
            {t.nav.coaching.label}
          </a>
          {t.nav.links.map(([page, label]) => (
            <a key={page} href={pageHref(page)} aria-current={route.page === page ? "page" : undefined} className={link(route.page === page)}>
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
            href={pageHref("contact")}
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
            <a href={t.nav.coaching.href} onClick={() => setOpen(false)} className={`py-3 text-base ${link(false)}`}>
              {t.nav.coaching.label}
            </a>
            {t.nav.links.map(([page, label]) => (
              <a key={page} href={pageHref(page)} aria-current={route.page === page ? "page" : undefined} className={`py-3 text-base ${link(route.page === page)}`}>
                {label}
              </a>
            ))}
            <a href={pageHref("contact")} className="mt-2 mb-2 inline-flex h-12 items-center justify-center rounded-md bg-ink px-5 font-medium text-ink-foreground sm:hidden">
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
          {t.nav.links.map(([page, label]) => (
            <a key={page} href={pageHref(page)} className="inline-flex min-h-11 items-center hover:text-ink">
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
