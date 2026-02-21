import { HeroSection } from "./hero-section";
import { IntroSection } from "./intro-section";
import { ServicesSection } from "./services-section";
import { LatestWorkSection } from "./latest-work-section";
import { ContactSection } from "./contact-section";

/**
 * Main portfolio page layout: hero, intro, services, latest work, contact.
 * Composes section components for maintainability and alignment with project rules.
 */
export function PortfolioPage() {
  return (
    <div className="bg-[var(--portfolio-bg)] relative size-full">
      <div className="absolute box-border content-stretch flex flex-col gap-40 items-center justify-start left-[-5px] p-0 top-0 w-[1925px] bg-[var(--portfolio-bg)]">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <LatestWorkSection />
        <ContactSection />
      </div>
    </div>
  );
}
