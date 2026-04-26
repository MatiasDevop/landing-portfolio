import { HeroNav } from "./hero-nav";
import { HeroCtaButton } from "./hero-cta-button";

export function HeroHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-[var(--portfolio-border)] bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="shrink-0 text-3xl font-semibold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
        >
          SMIT.
        </a>
        <HeroNav />
        <div className="hidden lg:block">
          <HeroCtaButton label="Contact Us" href="#contact" />
        </div>
      </div>
    </header>
  );
}
