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
    <main className="bg-(--portfolio-bg) text-(--portfolio-foreground)">
      <HeroSection />
      <section id="about" aria-label="About Smit" className="scroll-mt-32">
        <IntroSection />
      </section>
      <section id="services" aria-label="Services" className="scroll-mt-32">
        <ServicesSection />
      </section>
      <section id="portfolio" aria-label="Latest work" className="scroll-mt-32">
        <LatestWorkSection />
      </section>
      <section id="contact" aria-label="Contact" className="scroll-mt-32">
        <ContactSection />
      </section>
    </main>
  );
}
