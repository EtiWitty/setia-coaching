import { Plus } from "lucide-react";
import { Container, SectionHeader } from "../components/ui";
import { useI18n } from "../i18n";

// Each answer opens with a short line that stands on its own, then explains.
export function Faq() {
  const { faq } = useI18n().t;
  return (
    <section id="faq" className="border-t border-line/70">
      <Container className="py-20 sm:py-28">
        <SectionHeader title={faq.title} intro={faq.intro} />
        <div className="mt-12 space-y-3 sm:mt-14">
          {faq.items.map(([question, short, answer], i) => (
            <details key={question} className="faq group rounded-2xl border border-line bg-white" open={i === 0}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 sm:px-8">
                <span className="text-lg font-bold leading-8 group-open:text-ink">{question}</span>
                <Plus className="size-5 shrink-0 text-gold transition-transform group-open:[transform:rotate(45deg)]" aria-hidden />
              </summary>
              <div className="px-6 pb-7 sm:px-8">
                <p className="text-lg font-semibold leading-8 text-ink">{short}</p>
                <p className="mt-3 max-w-3xl leading-8 text-muted">{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
