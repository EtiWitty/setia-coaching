import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

// Shared building blocks used across sections.

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-8 ${className}`}>{children}</div>
);

// Arrow that points "forward" in both reading directions.
export const Forward = ({ className = "" }: { className?: string }) => (
  <ArrowLeft className={`size-4 ltr:rotate-180 ${className}`} aria-hidden />
);

export function ButtonLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex h-13 items-center justify-center gap-2.5 rounded-md bg-ink px-7 text-base font-semibold text-ink-foreground transition-colors hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${className}`}
    >
      {children}
      <Forward />
    </a>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center text-base font-medium text-ink underline decoration-gold decoration-2 underline-offset-[10px] transition-colors hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${className}`}
    >
      {children}
    </a>
  );
}

// Section headline with a short introduction underneath.
// `inverted` is for dark backgrounds.
export function SectionIntro({ title, text, inverted = false }: { title: string; text: string; inverted?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-extrabold leading-[1.4] tracking-tight text-balance sm:text-4xl sm:leading-[1.35]">{title}</h2>
      <p className={`mt-7 text-lg leading-9 ${inverted ? "text-ink-foreground/75" : "text-muted"}`}>{text}</p>
    </div>
  );
}
