import { useI18n } from "../i18n";
import { ButtonLink, Container, TextLink } from "./ui";

type Link = { label: string; href: string };

type HeroProps = {
  title: string;
  text: string;
  primary: Link;
  secondary?: Link;
};

// Minimal hero: headline, short paragraph, one primary action and an optional text link.
export function HeroLayout({ title, text, primary, secondary }: HeroProps) {
  return (
    <section id="top" className="border-b border-line/70">
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="block h-0.5 w-12 bg-gold" aria-hidden />
          <h1 className="mt-8 text-[2.25rem] font-extrabold leading-[1.35] tracking-tight text-balance sm:text-5xl sm:leading-[1.3] lg:text-[3.75rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-muted sm:text-xl sm:leading-10">{text}</p>
          <div className="mt-11 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            {secondary && <TextLink href={secondary.href}>{secondary.label}</TextLink>}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Hero() {
  const { hero } = useI18n().t;
  return (
    <HeroLayout
      title={hero.title}
      text={hero.text}
      primary={{ label: hero.primary, href: "#contact" }}
      secondary={{ label: hero.secondary, href: "#perspective" }}
    />
  );
}
