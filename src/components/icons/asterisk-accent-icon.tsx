import type { IconProps } from './icon-props'

const SVG_PATH_ACCENT =
	'M19.5041 29.9422L13.5537 39.8844L3.96694 32.6012L11.1295 23.5838L10.7989 22.5434L0 19.6532L3.63636 7.86127L14.2149 12.4856L14.9862 11.6763L14.2149 0H26.0055L25.2342 11.6763L26.0055 12.4856L36.4738 7.97688L40 19.7688L29.2011 22.5434L28.8705 23.5838L36.0331 32.6012L26.4463 40L20.6061 29.9422H19.5041Z'

/**
 * Accent asterisk (40×40). Used between social links in contact.
 * Import from @/components/icons.
 */
export function IconAsteriskAccent({
	className = 'size-10 shrink-0',
	'aria-hidden': ariaHidden = true,
}: IconProps) {
	return (
		<svg
			className={className}
			fill="none"
			preserveAspectRatio="none"
			viewBox="0 0 40 40"
			aria-hidden={ariaHidden}
		>
			<path d={SVG_PATH_ACCENT} fill="var(--portfolio-accent)" />
		</svg>
	)
}
