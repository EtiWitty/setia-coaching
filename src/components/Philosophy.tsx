import { useI18n } from "../i18n";
import { Container, SectionIntro } from "./ui";

type PhilosophyProps = {
  title: string;
  text: string;
  items: string[][]; // [title, description] pairs
  closing: string;
};

// Abstract metaphor: three separate outlines drawing toward one shared point.
function AlignmentMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" className={className} aria-hidden>
      <circle cx="96" cy="100" r="64" stroke="currentColor" strokeOpacity="0.22" />
      <circle cx="144" cy="100" r="64" stroke="currentColor" strokeOpacity="0.22" />
      <circle cx="120" cy="142" r="64" stroke="currentColor" strokeOpacity="0.22" />
      <circle cx="120" cy="114" r="5" className="fill-gold" />
    </svg>
  );
}

export function PhilosophyLayout({ title, text, items, closing }: PhilosophyProps) {
  return (
    <section id="philosophy" className="bg-ink text-ink-foreground">
      <Container className="py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <SectionIntro title={title} text={text} inverted />
          <AlignmentMark className="mx-auto hidden size-60 text-ink-foreground lg:block" />
        </div>

        <ol className="mt-16 grid gap-10 sm:mt-20 md:grid-cols-3 md:gap-12">
          {items.map(([itemTitle, description]) => (
            <li key={itemTitle} className="border-t border-white/15 pt-7">
              <span className="block size-1.5 rounded-full bg-gold" aria-hidden />
              <h3 className="mt-5 text-xl font-bold leading-8">{itemTitle}</h3>
              <p className="mt-3 leading-8 text-ink-foreground/70">{description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-20 max-w-3xl border-s-2 border-gold ps-6 text-xl font-medium leading-10 text-ink-foreground/90 sm:mt-24 sm:text-2xl sm:leading-[2.75rem]">
          {closing}
        </p>
      </Container>
    </section>
  );
}

export function Philosophy() {
  const { t } = useI18n();
  return <PhilosophyLayout {...t.philosophy} />;
}
