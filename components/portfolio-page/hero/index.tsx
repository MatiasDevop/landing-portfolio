import Image from "next/image";

import heroCardLeft from "@/assets/891fe860c52dcd7a3309affa6bbd1251b86eef34.png";
import heroCardRight from "@/assets/1002d28e5770af51c417b903605283e5627203e7.png";
import { HeroCtaButton } from "./hero-cta-button";
import { HeroHeader } from "./hero-header";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--portfolio-border)] bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-white/70 backdrop-blur">
      <span className="size-2 rounded-full bg-[var(--portfolio-accent)]" />
      Product Designer
    </div>
  );
}

function HeroVisuals() {
  return (
    <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:mx-0 lg:justify-end">
      <div className="absolute inset-x-10 top-10 h-64 rounded-full bg-[radial-gradient(circle,_rgba(235,255,87,0.24),_transparent_72%)] blur-3xl" />
      <div className="relative aspect-[4/5] w-full max-w-[22rem] rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-[#121214]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_55%)]" />
          <Image
            src={heroCardRight}
            alt="Featured portfolio preview"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 22rem, 70vw"
            priority
          />
        </div>
      </div>
      <div className="absolute -left-2 bottom-6 hidden w-44 -rotate-[10deg] rounded-[1.75rem] border-[10px] border-white bg-white p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[#ebeef3]">
          <Image
            src={heroCardLeft}
            alt="Secondary portfolio preview"
            fill
            className="object-cover"
            sizes="11rem"
          />
        </div>
      </div>
      <div className="absolute -right-4 top-14 hidden rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-accent)] px-6 py-3 text-lg font-medium text-[var(--portfolio-accent-foreground)] shadow-[0_18px_60px_rgba(235,255,87,0.22)] md:block">
        Available for projects
      </div>
      <div className="absolute left-4 top-8 hidden -rotate-[12deg] rounded-[1.5rem] border border-[rgba(235,255,87,0.75)] px-6 py-5 text-4xl font-medium text-white/90 lg:block">
        UI/UX
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative overflow-hidden bg-(--portfolio-surface) scroll-mt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%),linear-gradient(to_bottom,_rgba(255,255,255,0.04),_transparent_18%),radial-gradient(circle_at_bottom_left,_rgba(235,255,87,0.12),_transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
      <HeroHeader />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <HeroBadge />
            <h1 className="mt-8 text-balance text-5xl font-medium leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              I&apos;m SMIT, a UI/UX Designer
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/72 sm:text-xl">
              Specializing in user-centered design, intuitive interfaces, and
              meaningful digital experiences that feel polished, clear, and easy
              to use.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <HeroCtaButton label="Get Started" href="#contact" />
              <a
                href="#portfolio"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--portfolio-border)] px-6 py-3 text-base text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <HeroVisuals />
        </div>
      </div>
    </section>
  );
}

export { HeroNav, HERO_NAV_LINKS } from "./hero-nav";
export { HeroCtaButton } from "./hero-cta-button";
export { HeroPortfolioCard } from "./hero-portfolio-card";
export { HeroHeadline } from "./hero-headline";
