import { localDigits, useI18n } from "../i18n";
import { Container } from "./ui";

/* ---------------------------------- Nav ---------------------------------- */

export function Nav() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#top" className="flex min-w-0 items-baseline gap-2.5">
          <span className="text-xl font-extrabold tracking-tight">{t.brand.name}</span>
          <span className="hidden font-[Inter] text-[10px] tracking-[0.22em] text-muted sm:block">{t.brand.tagline}</span>
        </a>

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
            href="#contact"
            className="hidden h-10 items-center rounded-md bg-ink px-5 text-sm font-medium text-ink-foreground transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </Container>
    </header>
  );
}

/* ---------------------------------- Footer ------------------------------- */

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <div>
          <span className="text-base font-extrabold text-ink">{t.brand.name}</span>
          <span className="ms-3">{t.footer.about}</span>
        </div>
        <div>
          © {localDigits(new Date().getFullYear(), lang)} {t.brand.name}. {t.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
