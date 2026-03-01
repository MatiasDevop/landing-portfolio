import { HeroBackgroundMask } from "./hero-background-mask";
import {
  HeroFloatingCardLeft,
  HeroFloatingCardRight,
} from "./hero-floating-cards";
import { HeroContent } from "./hero-content";
import { HeroHeader } from "./hero-header";
import {
  HeroDecorativeBlockLeft,
  HeroDecorativeBlockRight,
} from "./hero-decorative-shapes";
import { HeroColorIndicator } from "./hero-color-indicator";

/**
 * Hero section: header, headline, CTA, floating cards, and decorative shapes.
 * Composes sub-components; dependency inversion via composition.
 */
export function HeroSection() {
  return (
    <div className="bg-(--portfolio-surface) h-[974px] relative shrink-0 w-full">
      <HeroBackgroundMask />
      <HeroFloatingCardLeft />
      <HeroFloatingCardRight />
      <HeroContent />
      <HeroHeader />
      <HeroDecorativeBlockLeft />
      <HeroDecorativeBlockRight />
      <HeroColorIndicator />
    </div>
  );
}

export { HeroNav, HERO_NAV_LINKS } from "./hero-nav";
export { HeroCtaButton } from "./hero-cta-button";
export { HeroPortfolioCard } from "./hero-portfolio-card";
export { HeroHeadline } from "./hero-headline";
