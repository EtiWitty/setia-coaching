import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { Accent, HeroSlide } from "../content";
import { localDigits, useI18n } from "../i18n";
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

// Full class names per accent, so Tailwind can see them.
const accentClasses: Record<Accent, { soft: string; shape: string; dot: string }> = {
  gold: { soft: "fill-gold", shape: "fill-gold stroke-gold", dot: "fill-ink" },
  teal: { soft: "fill-teal", shape: "fill-teal stroke-teal", dot: "fill-gold" },
  ink: { soft: "fill-ink", shape: "fill-ink stroke-ink", dot: "fill-gold" },
};

// Circle centres for one person, two people, or a group of three.
const audienceLayouts: Record<1 | 2 | 3, [number, number][]> = {
  1: [[220, 220]],
  2: [
    [176, 220],
    [264, 220],
  ],
  3: [
    [220, 172],
    [176, 250],
    [264, 250],
  ],
};

// Audience mark: 1–3 overlapping circles in the audience's accent colour.
export function AudienceIllustration({ count, accent }: NonNullable<HeroSlide["visual"]>) {
  const c = accentClasses[accent];
  const r = count === 1 ? 110 : 84;
  return (
    <svg viewBox="0 0 440 440" fill="none" className="h-auto w-full" aria-hidden>
      <circle cx="220" cy="220" r="210" className={c.soft} fillOpacity="0.08" />
      {audienceLayouts[count].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} className={c.shape} fillOpacity="0.1" strokeOpacity="0.55" strokeWidth="1.25" />
      ))}
      <circle cx="220" cy={count === 3 ? 224 : 220} r="7" className={c.dot} />
    </svg>
  );
}

function SlideVisual({ slide }: { slide: HeroSlide }) {
  if (slide.visual) return <AudienceIllustration {...slide.visual} />;
  return <HeroIllustration />;
}

// A slide's image fills the whole banner behind the text. In Persian it is mirrored so
// the busy side of the picture sits opposite the right-aligned text; a fade from the
// page colour on the text side keeps the copy readable.
function SlideBackground({ image, active }: { image: NonNullable<HeroSlide["image"]>; active: boolean }) {
  return (
    <div className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0"}`} aria-hidden={!active || undefined}>
      <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-[85%_100%] rtl:[transform:scaleX(-1)] lg:object-center" />
      <div className="absolute inset-0 bg-linear-to-b from-background from-25% via-background/75 via-50% to-transparent to-80% lg:from-0% lg:via-background/70 lg:via-50% lg:to-100% lg:ltr:bg-linear-to-r lg:rtl:bg-linear-to-l" />
    </div>
  );
}

function SlideText({ slide, heading }: { slide: HeroSlide; heading: "h1" | "h2" }) {
  const Heading = heading;
  return (
    <div className="max-w-3xl">
      {slide.eyebrow ? (
        <p className="flex items-center gap-3 text-sm font-semibold leading-7 text-ink-soft sm:text-base">
          <span className="h-0.5 w-12 shrink-0 bg-gold" aria-hidden />
          {slide.eyebrow}
        </p>
      ) : (
        <span className="block h-0.5 w-12 bg-gold" aria-hidden />
      )}
      <Heading className="mt-6 text-[2rem] font-extrabold leading-[1.35] tracking-tight text-balance sm:mt-8 sm:text-5xl sm:leading-[1.3] lg:text-[3.5rem]">
        {slide.title}
      </Heading>
      <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:mt-7 sm:text-xl sm:leading-10">{slide.text}</p>
      {(slide.primary || slide.secondary) && (
        <div className="mt-8 flex flex-col items-start gap-6 sm:mt-11 sm:flex-row sm:items-center sm:gap-9">
          {slide.primary && <ButtonLink href={slide.primary.href}>{slide.primary.label}</ButtonLink>}
          {slide.secondary && <TextLink href={slide.secondary.href}>{slide.secondary.label}</TextLink>}
        </div>
      )}
    </div>
  );
}

// Slide text beside its visual; a slide with an image shows it as the banner background instead.
function Slide({ slide, heading }: { slide: HeroSlide; heading: "h1" | "h2" }) {
  if (slide.image) return <SlideText slide={slide} heading={heading} />;
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <SlideText slide={slide} heading={heading} />
      <div className="slide-visual mx-auto w-full max-w-[8rem] lg:max-w-md">
        <SlideVisual slide={slide} />
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
      className={`hero-screen relative flex flex-col overflow-hidden border-b border-line/70 ${count > 1 ? "touch-pan-y" : ""}`}
      aria-roledescription={count > 1 ? "carousel" : undefined}
      onKeyDown={count > 1 ? onKeyDown : undefined}
      onPointerDown={count > 1 ? (e) => (swipeStart.current = e.clientX) : undefined}
      onPointerUp={count > 1 ? onPointerUp : undefined}
      onPointerCancel={() => (swipeStart.current = null)}
    >
      {slides.map((slide, i) => slide.image && <SlideBackground key={i} image={slide.image} active={i === index} />)}
      <Container className="relative flex flex-1 flex-col py-10 sm:py-24 lg:py-28">
        {/* All slides share one grid cell, so the banner keeps the height of the tallest
            slide and the page below doesn't jump when slides change. */}
        <div className="grid flex-1 items-start lg:items-center">
          {slides.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                className={`[grid-area:1/1] ${active ? (count > 1 ? "slide-in" : "") : "invisible"}`}
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
          <div className="mt-auto flex items-center gap-3 pt-8">
            <button
              onClick={() => go(-1)}
              aria-label={controls.previous}
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            >
              <ChevronLeft className="size-5 rtl:[transform:scaleX(-1)]" aria-hidden />
            </button>
            <div className="flex items-center">
              {slides.map((_, i) => (
                // The visible bar is small; the button around it is a full finger-sized target.
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`${controls.slide} ${position(i)}`}
                  aria-current={i === index}
                  className="group grid h-11 min-w-7 place-items-center px-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-ink" : "w-3 bg-ink/20 group-hover:bg-ink/40"}`}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label={controls.next}
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            >
              <ChevronRight className="size-5 rtl:[transform:scaleX(-1)]" aria-hidden />
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
