import type { IconProps } from './icon-props'

/**
 * Four-dot color theme indicator pill (150×42). Hero color indicator.
 * Import from @/src/components/icons.
 */
export function IconColorIndicatorPill({
	className = 'block size-full',
	'aria-hidden': ariaHidden = true,
}: IconProps) {
	return (
		<svg
			className={className}
			fill="none"
			preserveAspectRatio="none"
			viewBox="0 0 150 42"
			aria-hidden={ariaHidden}
		>
			<g aria-hidden>
				<rect
					fill="var(--fill-0, #0A0A0C)"
					height="42"
					rx="21"
					width="150"
				/>
				<rect
					height="41"
					rx="20.5"
					stroke="var(--stroke-0, white)"
					strokeOpacity="0.15"
					width="149"
					x="0.5"
					y="0.5"
				/>
				<circle cx="21" cy="21" fill="var(--fill-0, #EBFF57)" r="13" />
				<circle
					cx="57"
					cy="21"
					fill="var(--fill-0, #57FFC7)"
					opacity="0"
					r="13"
				/>
				<circle
					cx="93"
					cy="21"
					fill="var(--fill-0, #5768FF)"
					opacity="0"
					r="13"
				/>
				<circle
					cx="129"
					cy="21"
					fill="var(--fill-0, #81FF57)"
					opacity="0"
					r="13"
				/>
			</g>
		</svg>
	)
}
