import {
  ArrowLeft,
  BatteryLow,
  Check,
  Compass,
  Eye,
  GitBranch,
  Lock,
  Menu,
  Minus,
  Plus,
  TrendingUp,
  UserMinus,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_EMAIL } from "../config";
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

const SectionHead = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <div className="max-w-3xl">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-lg leading-8 text-muted">{subtitle}</p>}
  </div>
);

// Arrow that points "forward" in both reading directions.
const Forward = ({ className = "" }: { className?: string }) => (
  <ArrowLeft className={`size-4 ltr:rotate-180 ${className}`} aria-hidden />
);

/* ---------------------------------- Nav ---------------------------------- */

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const toggleLang = () => setLang(lang === "fa" ? "en" : "fa");

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
            onClick={toggleLang}
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
  const { t, lang } = useI18n();
  const h = t.hero;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,var(--color-gold-soft),transparent_45%)] rtl:bg-[radial-gradient(circle_at_20%_10%,var(--color-gold-soft),transparent_45%)]" />
      <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{h.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 font-medium text-ink-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {h.primary}
              <Forward />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-ink/20 bg-white/60 px-6 font-medium transition hover:border-ink"
            >
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

        <div className="rounded-2xl bg-ink p-6 text-ink-foreground shadow-2xl sm:p-8">
          <div className="text-sm font-semibold text-gold">{h.card.title}</div>
          <ol className="mt-6 space-y-5">
            {h.card.steps.map(([title, desc], i) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/50 text-sm font-bold text-gold">
                  {localDigits(i + 1, lang)}
                </span>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-ink-foreground/70">{desc}</div>
                </div>
              </li>
            ))}
          </ol>
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
    <section id="coaching" className="border-y border-line bg-surface py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow={c.eyebrow} title={c.title} />
          <p className="mt-6 text-lg leading-8 text-muted">{c.body}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">{c.compareTitle}</h3>
          <dl className="mt-5 divide-y divide-line rounded-xl border border-line bg-white">
            {c.compare.map(([term, desc]) => (
              <div key={term} className="grid gap-1 p-5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="font-semibold">{term}</dt>
                <dd className="leading-7 text-muted">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Challenges ----------------------------- */

const challengeIcons = [UserPlus, Compass, UserMinus, TrendingUp, GitBranch, BatteryLow];

export function Challenges() {
  const { t } = useI18n();
  const c = t.challenges;
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow={c.eyebrow} title={c.title} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map(([title, desc], i) => {
            const Icon = challengeIcons[i];
            return (
              <div key={title} className="bg-background p-7">
                <Icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-muted">{desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Packages ------------------------------ */

export function Packages({ onChoose }: { onChoose: (id: string) => void }) {
  const { t } = useI18n();
  const p = t.packages;
  return (
    <section id="packages" className="bg-ink py-20 text-ink-foreground sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow light>{p.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{p.title}</h2>
          <p className="mt-4 text-lg leading-8 text-ink-foreground/70">{p.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {p.items.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl p-6 ${
                pkg.featured ? "bg-ink-foreground text-ink ring-2 ring-gold" : "bg-ink-soft"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 start-6 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-extrabold">{pkg.name}</h3>
              <p className={`mt-3 leading-7 ${pkg.featured ? "text-muted" : "text-ink-foreground/70"}`}>{pkg.summary}</p>

              <dl className={`mt-5 grid grid-cols-2 gap-3 border-y py-4 text-sm ${pkg.featured ? "border-line" : "border-white/10"}`}>
                <div>
                  <dt className={pkg.featured ? "text-muted" : "text-ink-foreground/60"}>{p.who}</dt>
                  <dd className="mt-1 font-semibold">{pkg.who}</dd>
                </div>
                <div>
                  <dt className={pkg.featured ? "text-muted" : "text-ink-foreground/60"}>{p.duration}</dt>
                  <dd className="mt-1 font-semibold">{pkg.duration}</dd>
                </div>
              </dl>

              <div className={`mt-5 text-sm font-semibold ${pkg.featured ? "text-ink" : "text-gold"}`}>{p.includes}</div>
              <ul className="mt-3 flex-1 space-y-2.5 text-sm leading-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => onChoose(pkg.id)}
                className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md font-medium transition ${
                  pkg.featured ? "bg-ink text-ink-foreground hover:shadow-lg" : "border border-white/25 hover:border-gold hover:text-gold"
                }`}
              >
                {p.cta}
                <Forward />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 p-6 sm:p-8">
          <h3 className="font-bold text-gold">{p.addonsTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.addons.map((a) => (
              <li key={a} className="rounded-full border border-white/15 px-4 py-2 text-sm text-ink-foreground/85">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- Process ------------------------------ */

export function Process() {
  const { t, lang } = useI18n();
  const p = t.process;
  return (
    <section id="process" className="py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow={p.eyebrow} title={p.title} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.steps.map(([title, desc], i) => (
            <li key={title} className="rounded-xl border border-line bg-white p-6">
              <div className="text-3xl font-extrabold text-gold">{localDigits(String(i + 1).padStart(2, "0"), lang)}</div>
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-muted">{desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------------------------- Results ------------------------------ */

export function Results() {
  const { t } = useI18n();
  const r = t.results;
  return (
    <section id="results" className="border-y border-line bg-surface py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow={r.eyebrow} title={r.title} subtitle={r.body} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-lg font-bold">{r.measuresTitle}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {r.measures.map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-line bg-white p-5">
                  <div className="font-semibold">{title}</div>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <PrivacyList icon={<Lock className="size-5" />} title={r.privateTitle} items={r.private} dark />
            <PrivacyList icon={<Eye className="size-5" />} title={r.sharedTitle} items={r.shared} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PrivacyList({ icon, title, items, dark = false }: { icon: ReactNode; title: string; items: string[]; dark?: boolean }) {
  return (
    <div className={`rounded-xl p-6 ${dark ? "bg-ink text-ink-foreground" : "border border-line bg-white"}`}>
      <div className={`flex items-center gap-2 font-bold ${dark ? "text-gold" : ""}`}>
        {icon}
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------ FAQ -------------------------------- */

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="divide-y divide-line border-y border-line">
          {t.faq.items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start text-lg font-semibold"
                >
                  {q}
                  {isOpen ? <Minus className="size-5 shrink-0 text-gold" /> : <Plus className="size-5 shrink-0 text-gold" />}
                </button>
                {isOpen && <p className="pb-6 leading-8 text-muted">{a}</p>}
              </div>
            );
          })}
        </div>
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
    const pkgName = t.packages.items.find((p) => p.id === interest)?.name ?? c.notSure;
    const lines = [
      [f.name, data.get("name")],
      [f.company, data.get("company")],
      [f.role, data.get("role")],
      [f.email, data.get("email")],
      [f.phone, data.get("phone")],
      [f.size, data.get("size")],
      [f.interest, pkgName],
      [f.message, data.get("message")],
    ].map(([k, v]) => `${k}: ${v ?? ""}`);
    const subject = `${t.nav.cta} — ${data.get("company")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  const input = "mt-2 h-12 w-full rounded-md border border-line bg-white px-4 outline-none transition focus:border-ink focus:ring-2 focus:ring-gold/40";

  return (
    <section id="contact" className="bg-ink py-20 text-ink-foreground sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{c.title}</h2>
          <p className="mt-4 text-lg leading-8 text-ink-foreground/70">{c.subtitle}</p>
          <div className="mt-8 flex items-center gap-3 text-ink-foreground/80">
            <Users className="size-5 text-gold" aria-hidden />
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-[Inter] underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-background p-6 text-ink sm:grid-cols-2 sm:p-8">
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
            {f.email}
            <input name="email" type="email" required autoComplete="email" dir="ltr" className={input} />
          </label>
          <label className="text-sm font-medium">
            {f.phone}
            <input name="phone" type="tel" autoComplete="tel" dir="ltr" className={input} />
          </label>
          <label className="text-sm font-medium">
            {f.size}
            <select name="size" className={input}>
              {c.sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            {f.interest}
            <select value={interest} onChange={(e) => setInterest(e.target.value)} className={input}>
              <option value="">{c.notSure}</option>
              {t.packages.items.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            {f.message}
            <textarea name="message" rows={4} className={`${input} h-auto py-3`} />
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

/* ---------------------------------- Footer ------------------------------- */

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="py-10">
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
