import { AudienceIllustration } from "../components/Hero";
import { Container, SectionHeader } from "../components/ui";
import { localDigits, useI18n } from "../i18n";

export function Services() {
  const { t, lang } = useI18n();
  const s = t.services;
  return (
    <section id="services" className="bg-surface">
      <Container className="py-20 sm:py-28">
        <SectionHeader title={s.title} intro={s.intro} />

        <ul className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3">
          {s.items.map((item) => (
            <li key={item.title} className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-8">
              <div className="size-24">
                <AudienceIllustration {...item.visual} />
              </div>
              <h3 className="mt-6 text-xl font-bold leading-8">{item.title}</h3>
              <p className="mt-3 leading-8 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl font-extrabold leading-[1.4]">{s.process.title}</h3>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.steps.map(([title, text], i) => (
              <li key={title} className="border-t border-ink/15 pt-7">
                <span className="text-sm font-bold text-gold">{localDigits(String(i + 1).padStart(2, "0"), lang)}</span>
                <h4 className="mt-4 text-xl font-bold leading-8">{title}</h4>
                <p className="mt-3 leading-8 text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-14 max-w-3xl border-s-2 border-gold ps-6 leading-8 text-muted">{s.note}</p>
        </div>
      </Container>
    </section>
  );
}
