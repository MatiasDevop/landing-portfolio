import { HeroNav } from './hero-nav'
import { HeroCtaButton } from './hero-cta-button'

/**
 * Hero header: logo, nav, and primary CTA.
 * Composes nav and CTA; single place for header layout.
 */
export function HeroHeader() {
	return (
		<header
			className="absolute bg-(--portfolio-surface) box-border content-stretch flex flex-row items-center justify-between px-[100px] py-5 top-0 translate-x-[-50%] w-[1920px]"
			style={{ left: 'calc(50% + 0.5px)' }}
		>
			<div className="absolute border border-(--portfolio-border) border-solid inset-0 pointer-events-none" />
			<div className="font-['Clash_Grotesk:Semibold',sans-serif] leading-0 not-italic relative shrink-0 text-(--portfolio-foreground) text-[37px] text-center text-nowrap">
				<p className="block leading-[normal] whitespace-pre">SMIT.</p>
			</div>
			<HeroNav />
			<HeroCtaButton label="Contact Us" />
		</header>
	)
}
