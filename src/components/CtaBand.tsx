import { useI18n } from "../i18n";
import { pageHref } from "../router";
import { ButtonLink, Container } from "./ui";

// Closing invitation at the end of inner pages, linking to the contact page.
export function CtaBand() {
  const { cta } = useI18n().t;
  return (
    <section className="bg-surface">
      <Container className="flex flex-col items-start gap-8 py-20 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-[1.4] sm:text-3xl">{cta.title}</h2>
          <p className="mt-4 text-lg leading-9 text-muted">{cta.text}</p>
        </div>
        <ButtonLink href={pageHref("contact")} className="shrink-0">
          {cta.button}
        </ButtonLink>
      </Container>
    </section>
  );
}
