import { ArrowLeft, Check, Crown, ExternalLink, Lock, Menu, Users, X } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_EMAIL } from "../config";
import { sourceCitations, sourceLinks, type SourceId } from "../content";
import { localDigits, useI18n } from "../i18n";

/* --------------------------------- Shared -------------------------------- */

const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-8 ${className}`}>{children}</div>
);

const Eyebrow = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <div className={`flex items-center gap-3 text-sm font-semibold ${light ? "text-gold" : "text-ink-soft"}`}>
    <span className="h-px w-8 shrink-0 bg-gold" />
    {children}
  </div>
);

const SectionHead = ({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) => (
  <div className="max-w-3xl">
    <Eyebrow light={light}>{eyebrow}</Eyebrow>
    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">{title}</h2>
    {subtitle && <p className={`mt-4 text-lg leading-8 ${light ? "text-ink-foreground/70" : "text-muted"}`}>{subtitle}</p>}
  </div>
);

// Arrow that points "forward" in both reading directions.
const Forward = ({ className = "" }: { className?: string }) => (
  <ArrowLeft className={`size-4 ltr:rotate-180 ${className}`} aria-hidden />
);

// Small citation link shown under every figure.
function SourceLink({ id, text, light = false }: { id: SourceId; text: string; light?: boolean }) {
  const { t } = useI18n();
  return (
    <a
      href={sourceLinks[id]}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-xs underline-offset-4 hover:underline ${light ? "text-ink-foreground/60" : "text-muted"}`}
    >
      {t.sourceLabel}: {text}
      <ExternalLink className="size-3" aria-hidden />
    </a>
  );
}

/* ---------------------------------- Nav ---------------------------------- */

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#top" className="flex min-w-0 items-baseline gap-2.5">
          <span className="text-xl font-extrabold tracking-tight">{t.brand.name}</span>
          <span className="hidden font-[Inter] text-[10px] tracking-[0.22em] text-muted sm:block">{t.brand.tagline}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {t.nav.links.map(([href, label]) => (
            <a key={href} href={href} className="py-1 transition-colors hover:text-ink">
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
            href="#contact"
            className="hidden h-10 items-center rounded-md bg-ink px-5 text-sm font-medium text-ink-foreground transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-md border border-line lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-background lg:hidden">
          <Container className="flex flex-col py-3">
            {[...t.nav.links, ["#contact", t.nav.cta]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-base">
                {label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  const c = h.card;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,var(--color-gold-soft),transparent_45%)] rtl:bg-[radial-gradient(circle_at_20%_10%,var(--color-gold-soft),transparent_45%)]" />
      <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.2] tracking-tight text-balance sm:text-5xl lg:text-6xl">{h.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{h.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 font-medium text-ink-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {h.primary}
              <Forward />
            </a>
            <a href="#evidence" className="inline-flex h-12 items-center rounded-md border border-ink/20 bg-white/60 px-6 font-medium transition hover:border-ink">
              {h.secondary}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {h.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 text-gold" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <figure className="rounded-2xl bg-ink p-6 text-ink-foreground shadow-2xl sm:p-8">
          <figcaption className="text-sm font-semibold leading-6 text-gold">{c.label}</figcaption>
          <ul className="mt-6 space-y-3">
            {c.names.map((name) => (
              <li key={name} className="border-b border-white/10 pb-3 text-2xl font-extrabold sm:text-3xl">
                {name}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <Crown className="size-5 shrink-0 text-gold" aria-hidden />
            <span className="text-lg font-bold text-gold">{c.coach}</span>
          </div>
          <p className="mt-2 text-sm leading-7 text-ink-foreground/75">{c.body}</p>
          <div className="mt-4">
            <SourceLink id={c.source} text={c.sourceText} light />
          </div>
        </figure>
      </Container>
    </section>
  );
}

/* ----------------------------------- Paths ------------------------------- */

const pathIcons = { authority: Crown, team: Users } as const;

export function Paths({ onChoose }: { onChoose: (id: string) => void }) {
  const { t } = useI18n();
  const p = t.paths;
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow={p.eyebrow} title={p.title} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {p.items.map((item) => {
            const Icon = pathIcons[item.id as keyof typeof pathIcons];
            return (
              <article key={item.id} className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-9">
                <Icon className="size-7 text-gold" aria-hidden />
                <h3 className="mt-5 text-2xl font-extrabold">{item.title}</h3>
                <blockquote className="mt-4 border-s-2 border-gold ps-4 text-lg font-medium leading-8">{item.quote}</blockquote>
                <p className="mt-4 leading-8 text-muted">{item.body}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 leading-7">
                      <Check className="mt-1.5 size-4 shrink-0 text-gold" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => onChoose(item.id)}
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 font-medium text-ink-foreground transition hover:shadow-lg sm:self-start"
                >
                  {item.cta}
                  <Forward />
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ What is coaching ------------------------- */

export function WhatIsCoaching() {
  const { t } = useI18n();
  const c = t.coaching;
  return (
    <section id="coaching" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow={c.eyebrow} title={c.title} />
            <p className="mt-6 text-lg leading-8 text-muted">{c.body}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">{c.compareTitle}</h3>
            <dl className="mt-5 divide-y divide-line rounded-xl border border-line bg-white">
              {c.compare.map(([term, desc]) => (
                <div key={term} className="p-5">
                  <dt className="font-semibold">{term}</dt>
                  <dd className="mt-1 leading-7 text-muted">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <h3 className="mt-16 text-lg font-bold">{c.mythsTitle}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {c.myths.map(([myth, fact]) => (
            <div key={myth} className="rounded-xl border border-line bg-white p-6">
              <div className="flex items-start gap-2.5 text-muted line-through decoration-gold/70">
                <X className="mt-1 size-4 shrink-0 text-gold no-underline" aria-hidden />
                {myth}
              </div>
              <div className="mt-3 flex items-start gap-2.5 font-medium leading-7">
                <Check className="mt-1.5 size-4 shrink-0 text-gold" aria-hidden />
                {fact}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Why leaders --------------------------- */

export function WhyLeaders() {
  const { t } = useI18n();
  const w = t.why;
  return (
    <section id="why" className="bg-ink py-20 text-ink-foreground sm:py-24">
      <Container>
        <SectionHead eyebrow={w.eyebrow} title={w.title} light />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {w.stats.map((s) => (
            <div key={s.value} className="flex flex-col bg-ink p-7">
              <div className="text-4xl font-extrabold text-gold">{s.value}</div>
              <p className="mt-4 flex-1 leading-7 text-ink-foreground/85">{s.text}</p>
              <div className="mt-5">
                <SourceLink id={s.source} text={s.sourceText} light />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- Evidence ----------------------------- */

export function Evidence() {
  const { t, lang } = useI18n();
  const e = t.evidence;
  return (
    <section id="evidence" className="py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {e.studies.map((s, i) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <div className="text-sm font-bold text-gold">{localDigits(String(i + 1).padStart(2, "0"), lang)}</div>
              <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 leading-7 text-muted">{s.what}</p>
              <p className="mt-4 flex-1 rounded-lg bg-surface p-4 font-medium leading-7">{s.found}</p>
              <div className="mt-5">
                <SourceLink id={s.source} text={s.sourceText} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- Leaders ------------------------------ */

export function Leaders() {
  const { t } = useI18n();
  const l = t.leaders;
  return (
    <section id="leaders" className="border-y border-line bg-surface py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow={l.eyebrow} title={l.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {l.items.map((item) => (
            <article key={item.title} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <h3 className="text-lg font-extrabold">{item.title}</h3>
              <p className="mt-3 flex-1 leading-8 text-muted">{item.body}</p>
              <div className="mt-4">
                <SourceLink id={item.source} text={sourceCitations[item.source].split(" — ")[0].split(" (")[0]} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- Privacy ------------------------------ */

export function Privacy() {
  const { t } = useI18n();
  const p = t.privacy;
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 rounded-3xl bg-ink p-8 text-ink-foreground sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <Eyebrow light>{p.eyebrow}</Eyebrow>
          <h2 className="mt-4 flex items-start gap-3 text-2xl font-extrabold leading-tight sm:text-3xl">
            <Lock className="mt-1.5 size-6 shrink-0 text-gold" aria-hidden />
            {p.title}
          </h2>
          <p className="mt-4 leading-8 text-ink-foreground/75">{p.body}</p>
        </div>
        <ul className="space-y-3">
          {p.points.map((pt) => (
            <li key={pt} className="flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3">
              <Check className="size-4 shrink-0 text-gold" aria-hidden />
              {pt}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------- Contact ------------------------------ */

export function Contact({ interest, setInterest }: { interest: string; setInterest: (id: string) => void }) {
  const { t } = useI18n();
  const c = t.contact;
  const f = c.fields;
  const [sent, setSent] = useState(false);

  // No backend yet: the form composes an email in the visitor's mail app.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const choice = c.interests.find(([id]) => id === interest)?.[1] ?? "";
    const lines = [
      [f.name, data.get("name")],
      [f.company, data.get("company")],
      [f.role, data.get("role")],
      [f.email, data.get("email")],
      [f.phone, data.get("phone")],
      [f.interest, choice],
      [f.message, data.get("message")],
    ].map(([k, v]) => `${k}: ${v ?? ""}`);
    const subject = `${t.nav.cta} — ${data.get("company")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  const input = "mt-2 h-12 w-full rounded-md border border-line bg-white px-4 outline-none transition focus:border-ink focus:ring-2 focus:ring-gold/40";

  return (
    <section id="contact" className="border-t border-line bg-surface py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-line bg-white p-6 sm:grid-cols-2 sm:p-8">
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-medium">{f.interest}</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {c.interests.map(([id, label]) => (
                <label
                  key={id}
                  className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-3 text-sm transition ${
                    interest === id ? "border-ink bg-gold-soft font-semibold" : "border-line hover:border-ink/40"
                  }`}
                >
                  <input type="radio" name="interest" value={id} checked={interest === id} onChange={() => setInterest(id)} className="accent-[var(--color-ink)]" />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="text-sm font-medium">
            {f.name}
            <input name="name" required autoComplete="name" className={input} />
          </label>
          <label className="text-sm font-medium">
            {f.company}
            <input name="company" required autoComplete="organization" className={input} />
          </label>
          <label className="text-sm font-medium">
            {f.role}
            <input name="role" autoComplete="organization-title" className={input} />
          </label>
          <label className="text-sm font-medium">
            {f.phone}
            <input name="phone" type="tel" required autoComplete="tel" dir="ltr" className={input} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            {f.email}
            <input name="email" type="email" autoComplete="email" dir="ltr" className={input} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            {f.message}
            <textarea name="message" rows={3} className={`${input} h-auto py-3`} />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ink px-6 font-medium text-ink-foreground transition hover:shadow-lg sm:w-auto"
            >
              {c.submit}
              <Forward />
            </button>
            {sent && (
              <p role="status" className="mt-4 rounded-md bg-gold-soft p-4 text-sm">
                {c.success}
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}

/* --------------------------------- Sources ------------------------------- */

export function Sources() {
  const { t } = useI18n();
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-sm font-bold">{t.sources.title}</h2>
        <ol className="mt-4 grid gap-2 text-xs leading-6 text-muted sm:grid-cols-2" dir="ltr">
          {(Object.keys(sourceLinks) as SourceId[]).map((id) => (
            <li key={id}>
              <a href={sourceLinks[id]} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-ink hover:underline">
                {sourceCitations[id]}
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
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
