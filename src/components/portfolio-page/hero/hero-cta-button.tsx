export interface HeroCtaButtonProps {
  label: string
  href?: string
}

/**
 * Accent CTA button. Reused for "Get Started" and "Contact Us".
 * Single responsibility: one button; open for extension via props.
 */
export function HeroCtaButton({ label, href }: HeroCtaButtonProps) {
  const className =
    "bg-[var(--portfolio-accent)] box-border inline-flex min-h-11 flex-row items-center justify-center rounded-[62px] px-[30px] py-[15px] text-[24px] font-['Clash_Grotesk:Medium',_sans-serif] leading-[normal] text-[var(--portfolio-accent-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-foreground)]";

  if (href) {
    return (
      <a href={href} className={className}>
        <span className="whitespace-pre">{label}</span>
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      <span className="whitespace-pre">{label}</span>
    </button>
  );
}
