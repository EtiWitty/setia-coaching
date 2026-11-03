import { CtaBand } from "../components/CtaBand";
import { Container, PageHeader, TextLink } from "../components/ui";
import { useI18n } from "../i18n";

export function About() {
  const { about } = useI18n().t;
  return (
    <>
      <PageHeader title={about.title} intro={about.intro} />

      <section>
        <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-2xl font-extrabold leading-[1.4] sm:text-3xl">{about.who.title}</h2>
            <p className="mt-6 text-lg leading-9 text-muted">{about.who.text}</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold leading-[1.4] sm:text-3xl">{about.approach.title}</h2>
            <p className="mt-6 text-lg leading-9 text-muted">{about.approach.text}</p>
            <TextLink href="#philosophy" className="mt-8">
              {about.approach.link}
            </TextLink>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-ink-foreground">
        <Container className="py-20 sm:py-28">
          <h2 className="text-2xl font-extrabold leading-[1.4] sm:text-3xl">{about.values.title}</h2>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {about.values.items.map(([title, text]) => (
              <li key={title} className="border-t border-white/15 pt-7">
                <span className="block size-1.5 rounded-full bg-gold" aria-hidden />
                <h3 className="mt-5 text-xl font-bold leading-8">{title}</h3>
                <p className="mt-3 leading-8 text-ink-foreground/70">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
