import { Check, Link2, Share2, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n";
import { pageHref } from "../router";
import { ButtonLink, Container } from "./ui";

// "What is coaching?" written for the person choosing coaching on behalf of others
// (an assistant, HR, a consultant): a one-line definition, what people and the
// organisation get, what coaching is not, and questions to ask before choosing.

function BenefitPanel({ title, items, accent }: { title: string; items: string[][]; accent: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-9">
      <span className={`absolute inset-x-0 top-0 h-1 ${accent}`} aria-hidden />
      <h3 className="text-xl font-extrabold leading-8">{title}</h3>
      <ul className="mt-7 space-y-6">
        {items.map(([itemTitle, text]) => (
          <li key={itemTitle} className="flex gap-4">
            <span className={`mt-2.5 size-2 shrink-0 rounded-full ${accent}`} aria-hidden />
            <div>
              <div className="font-bold leading-8">{itemTitle}</div>
              <p className="mt-1 leading-8 text-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Shares a link to this section: the phone's share sheet where available, otherwise copies it.
function ShareButton({ label, copiedLabel }: { label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#perspective`;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Share sheet dismissed or clipboard blocked: nothing to do.
    }
  };
  return (
    <button
      onClick={share}
      className="inline-flex h-13 items-center justify-center gap-2.5 rounded-md border border-ink/20 px-6 font-semibold transition-colors hover:border-ink"
    >
      {copied ? <Link2 className="size-4" aria-hidden /> : <Share2 className="size-4" aria-hidden />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}

export function Perspective() {
  const { perspective: s } = useI18n().t;
  return (
    <section id="perspective" className="bg-surface">
      <Container className="py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-semibold text-ink-soft sm:text-base">
              <span className="h-0.5 w-12 shrink-0 bg-gold" aria-hidden />
              {s.eyebrow}
            </p>
            <h2 className="mt-6 text-3xl font-extrabold leading-[1.4] tracking-tight text-balance sm:text-4xl sm:leading-[1.35]">{s.title}</h2>
            <p className="mt-7 text-lg leading-9 text-muted">{s.text}</p>
          </div>
          <figure className="rounded-2xl bg-ink p-8 text-ink-foreground sm:p-10">
            <figcaption className="text-sm font-semibold text-gold">{s.definition.label}</figcaption>
            <blockquote className="mt-5 text-xl font-bold leading-10 sm:text-2xl sm:leading-[2.75rem]">{s.definition.text}</blockquote>
          </figure>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-2">
          <BenefitPanel title={s.people.title} items={s.people.items} accent="bg-gold" />
          <BenefitPanel title={s.organisation.title} items={s.organisation.items} accent="bg-teal" />
        </div>

        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl font-extrabold leading-8">{s.isNot.title}</h3>
          <ul className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {s.isNot.items.map(([itemTitle, text]) => (
              <li key={itemTitle} className="border-t border-ink/15 pt-6">
                <div className="flex items-center gap-2.5 font-bold leading-8">
                  <span className="grid size-6 place-items-center rounded-full bg-ink/8 text-ink-soft" aria-hidden>
                    <X className="size-3.5" />
                  </span>
                  {itemTitle}
                </div>
                <p className="mt-2 leading-8 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-white p-7 sm:mt-20 sm:p-10">
          <h3 className="text-xl font-extrabold leading-8 sm:text-2xl">{s.checklist.title}</h3>
          <ol className="mt-8 grid gap-x-10 gap-y-5 lg:grid-cols-2">
            {s.checklist.items.map((question) => (
              <li key={question} className="flex gap-3.5 leading-8">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-md border-2 border-gold text-gold" aria-hidden>
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {question}
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <ShareButton label={s.checklist.share} copiedLabel={s.checklist.copied} />
            <ButtonLink href={pageHref("contact")}>{s.checklist.cta}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
