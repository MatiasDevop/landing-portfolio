export interface HeroCtaButtonProps {
	label: string
}

/**
 * Accent CTA button. Reused for "Get Started" and "Contact Us".
 * Single responsibility: one button; open for extension via props.
 */
export function HeroCtaButton({ label }: HeroCtaButtonProps) {
	return (
		<div
			className="bg-[var(--portfolio-accent)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-[15px] relative rounded-[62px] shrink-0"
			role="button"
			tabIndex={0}
			aria-label={label}
		>
			<div className="font-['Clash_Grotesk:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-accent-foreground)] text-[24px] text-center text-nowrap">
				<p className="block leading-[normal] whitespace-pre">{label}</p>
			</div>
		</div>
	)
}
