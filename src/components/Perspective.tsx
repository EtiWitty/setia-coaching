import { localDigits, useI18n } from "../i18n";
import type { Lang } from "../content";
import { Container, SectionIntro } from "./ui";

type PerspectiveProps = {
  title: string;
  text: string;
  items: string[][]; // [title, description] pairs
  lang: Lang;
};

// Headline, short introduction and a row of numbered benefit items.
export function PerspectiveLayout({ title, text, items, lang }: PerspectiveProps) {
  return (
    <section id="perspective" className="bg-surface">
      <Container className="py-24 sm:py-32">
        <SectionIntro title={title} text={text} />

        <ol className="mt-16 grid gap-10 sm:mt-20 md:grid-cols-3 md:gap-12">
          {items.map(([itemTitle, description], i) => (
            <li key={itemTitle} className="border-t border-ink/15 pt-7">
              <span className="text-sm font-bold text-gold">{localDigits(String(i + 1).padStart(2, "0"), lang)}</span>
              <h3 className="mt-4 text-xl font-bold leading-8">{itemTitle}</h3>
              <p className="mt-3 leading-8 text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Perspective() {
  const { t, lang } = useI18n();
  return <PerspectiveLayout {...t.perspective} lang={lang} />;
}
