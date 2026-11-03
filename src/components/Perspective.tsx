import { useI18n } from "../i18n";
import { Container } from "./ui";

// "What is coaching?" written for the person choosing coaching on behalf of others
// (an assistant, HR, a consultant): a one-line definition, then what people and the
// organisation get from it.

function BenefitList({ title, items, accent }: { title: string; items: string[][]; accent: string }) {
  return (
    <div className="border-t border-ink/15 pt-8">
      <h3 className="flex items-center gap-3 text-xl font-extrabold leading-8">
        <span className={`size-2 shrink-0 rounded-full ${accent}`} aria-hidden />
        {title}
      </h3>
      <ul className="mt-6 space-y-5">
        {items.map(([itemTitle, text]) => (
          <li key={itemTitle}>
            <div className="font-bold leading-8">{itemTitle}</div>
            <p className="mt-1 leading-8 text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </div>
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

        <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-2 lg:gap-16">
          <BenefitList title={s.people.title} items={s.people.items} accent="bg-gold" />
          <BenefitList title={s.organisation.title} items={s.organisation.items} accent="bg-teal" />
        </div>
      </Container>
    </section>
  );
}
