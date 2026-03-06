/** Nav link label only; extend with href when wiring routing. */
export const HERO_NAV_LINKS = [
	'Home',
	'About Us',
	'Our Service',
	'Portfolio',
] as const

/**
 * Hero navigation links. Data-driven; single responsibility for nav list.
 */
export function HeroNav() {
	return (
		<nav
			className="box-border content-stretch flex flex-row font-['Clash_Grotesk:Regular',_sans-serif] gap-[55px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[var(--portfolio-foreground)] text-[20px] text-center text-nowrap"
			aria-label="Main navigation"
		>
			{HERO_NAV_LINKS.map((label) => (
				<div key={label} className="relative shrink-0">
					<p className="block leading-[normal] text-nowrap whitespace-pre">
						{label}
					</p>
				</div>
			))}
		</nav>
	)
}
