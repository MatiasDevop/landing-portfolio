export interface HeroCtaButtonProps {
  label: string
  href?: string
  variant?: "primary" | "secondary"
}

/**
 * Accent CTA button. Reused for "Get Started" and "Contact Us".
 * Single responsibility: one button; open for extension via props.
 */
export function HeroCtaButton({
  label,
  href,
  variant = "primary",
}: HeroCtaButtonProps) {
  const className = [
    "box-border inline-flex min-h-14 items-center justify-center rounded-[62px] px-8 py-3 text-[24px] font-['Clash_Grotesk:Medium',_sans-serif] leading-none transition focus-visible:outline-2 focus-visible:outline-offset-4",
    variant === "primary"
      ? "bg-[var(--portfolio-accent)] text-[var(--portfolio-accent-foreground)] focus-visible:outline-[var(--portfolio-foreground)]"
      : "border border-[var(--portfolio-border)] bg-transparent text-white/90 hover:border-white/30 hover:text-white focus-visible:outline-[var(--portfolio-accent)]",
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={className}>
        <span className="whitespace-nowrap">{label}</span>
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}
