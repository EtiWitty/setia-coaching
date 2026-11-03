import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { HeroSlide } from "../content";
import { localDigits, useI18n } from "../i18n";
import { AudienceCards } from "./AudienceCards";
import { ButtonLink, Container, TextLink } from "./ui";

type Controls = { previous: string; next: string; slide: string };

// Abstract Setia illustration: two viewpoints meeting in a shared space, with
// a few perspectives orbiting around them.
function HeroIllustration() {
  return (
    <svg viewBox="0 0 440 440" fill="none" className="h-auto w-full" aria-hidden>
      <circle cx="220" cy="220" r="210" className="fill-gold-soft" fillOpacity="0.55" />
      <circle cx="220" cy="220" r="168" className="stroke-ink" strokeOpacity="0.14" strokeDasharray="2 7" strokeLinecap="round" />
      <circle cx="172" cy="220" r="96" className="stroke-ink" strokeOpacity="0.28" strokeWidth="1.25" />
      <circle cx="268" cy="220" r="96" className="stroke-ink" strokeOpacity="0.28" strokeWidth="1.25" />
      <path d="M220 141.1a96 96 0 0 1 0 157.8a96 96 0 0 1 0-157.8Z" className="fill-ink" fillOpacity="0.06" />
      <circle cx="220" cy="220" r="8" className="fill-gold" />
      <circle cx="220" cy="52" r="5" className="fill-ink" fillOpacity="0.7" />
      <circle cx="365.5" cy="304" r="5" className="fill-teal" />
      <circle cx="74.5" cy="304" r="5" className="fill-gold" />
    </svg>
  );
}

function SlideVisual({ image }: { image?: HeroSlide["image"] }) {
  if (image) {
    return <img src={image.src} alt={image.alt} className="aspect-square w-full rounded-3xl object-cover" />;
  }
  return <HeroIllustration />;
}

function SlideText({ slide, heading }: { slide: HeroSlide; heading: "h1" | "h2" }) {
  const Heading = heading;
  return (
    <div className="max-w-3xl">
      <span className="block h-0.5 w-12 bg-gold" aria-hidden />
      <Heading className="mt-8 text-[2.25rem] font-extrabold leading-[1.35] tracking-tight text-balance sm:text-5xl sm:leading-[1.3] lg:text-[3.5rem]">
        {slide.title}
      </Heading>
      <p className="mt-7 max-w-2xl text-lg leading-9 text-muted sm:text-xl sm:leading-10">{slide.text}</p>
      {(slide.primary || slide.secondary) && (
        <div className="mt-11 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9">
          {slide.primary && <ButtonLink href={slide.primary.href}>{slide.primary.label}</ButtonLink>}
          {slide.secondary && <TextLink href={slide.secondary.href}>{slide.secondary.label}</TextLink>}
        </div>
      )}
    </div>
  );
}

// Text beside a visual, or, for a slide with items, text above a row of audience blocks.
function Slide({ slide, heading }: { slide: HeroSlide; heading: "h1" | "h2" }) {
  if (slide.items) {
    return (
      <div>
        <SlideText slide={slide} heading={heading} />
        <AudienceCards items={slide.items} className="mt-12 sm:mt-14" />
      </div>
    );
  }
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <SlideText slide={slide} heading={heading} />
      <div className="mx-auto hidden w-full max-w-md lg:block">
        <SlideVisual image={slide.image} />
      </div>
    </div>
  );
}

// Banner that shows one slide at a time. With a single slide, no controls are shown.
export function HeroBanner({ slides, controls }: { slides: HeroSlide[]; controls: Controls }) {
  const { lang } = useI18n();
  const [index, setIndex] = useState(0);
  const swipeStart = useRef<number | null>(null);
  const count = slides.length;
  const rtl = lang === "fa";

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  // Arrow keys follow reading direction: the "forward" key is Left in Persian.
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
  };

  const onPointerUp = (e: PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) < 50) return;
    go((dx < 0) !== rtl ? 1 : -1);
  };

  const position = (i: number) => `${localDigits(i + 1, lang)} / ${localDigits(count, lang)}`;

  return (
    <section
      id="top"
      className="overflow-hidden border-b border-line/70"
      aria-roledescription={count > 1 ? "carousel" : undefined}
      onKeyDown={count > 1 ? onKeyDown : undefined}
      onPointerDown={count > 1 ? (e) => (swipeStart.current = e.clientX) : undefined}
      onPointerUp={count > 1 ? onPointerUp : undefined}
    >
      <Container className="py-24 sm:py-32 lg:py-36">
        {/* All slides share one grid cell, so on large screens the banner keeps the height
            of the tallest slide. On small screens only the current slide takes up space. */}
        <div className="grid items-center">
          {slides.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                className={`[grid-area:1/1] ${active ? (count > 1 ? "slide-in" : "") : "hidden lg:invisible lg:block"}`}
                role={count > 1 ? "group" : undefined}
                aria-roledescription={count > 1 ? "slide" : undefined}
                aria-label={count > 1 ? position(i) : undefined}
                aria-hidden={!active || undefined}
                inert={!active || undefined}
              >
                <Slide slide={slide} heading={i === 0 ? "h1" : "h2"} />
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <div className="mt-14 flex items-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label={controls.previous}
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            >
              <ChevronLeft className="size-5 rtl:rotate-180" aria-hidden />
            </button>
            <div className="flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`${controls.slide} ${position(i)}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-ink" : "w-3 bg-ink/20 hover:bg-ink/40"}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label={controls.next}
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            >
              <ChevronRight className="size-5 rtl:rotate-180" aria-hidden />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

export function Hero() {
  const { hero } = useI18n().t;
  return <HeroBanner slides={hero.slides} controls={hero.controls} />;
}
