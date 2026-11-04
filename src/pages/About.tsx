import { Container, SectionHeader, TextLink } from "../components/ui";
import { useI18n } from "../i18n";
import { sectionHref } from "../router";

export function About() {
  const { about } = useI18n().t;
  return (
    <section id="about" className="border-t border-line/70">
      <Container className="py-20 sm:py-28">
        <SectionHeader title={about.title} intro={about.intro} />

        <div className="mt-16 grid gap-14 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-2xl font-extrabold leading-[1.4]">{about.who.title}</h3>
            <p className="mt-5 text-lg leading-9 text-muted">{about.who.text}</p>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold leading-[1.4]">{about.approach.title}</h3>
            <p className="mt-5 text-lg leading-9 text-muted">{about.approach.text}</p>
            <TextLink href={sectionHref("philosophy")} className="mt-6">
              {about.approach.link}
            </TextLink>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl font-extrabold leading-[1.4]">{about.values.title}</h3>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.items.map(([title, text]) => (
              <li key={title} className="border-t border-ink/15 pt-7">
                <span className="block size-1.5 rounded-full bg-gold" aria-hidden />
                <h4 className="mt-5 text-xl font-bold leading-8">{title}</h4>
                <p className="mt-3 leading-8 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
