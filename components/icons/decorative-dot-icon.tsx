import type { IconProps } from './icon-props'

/**
 * Decorative circle with stroke (hero decorative shapes).
 * Import from @/src/components/icons.
 */
export function IconDecorativeDot({
	className = 'block size-full',
	'aria-hidden': ariaHidden = true,
}: IconProps) {
	return (
		<svg
			className={className}
			fill="none"
			preserveAspectRatio="none"
			viewBox="0 0 14 14"
			aria-hidden={ariaHidden}
		>
			<circle
				cx="7"
				cy="7"
				fill="var(--fill-0, #0A0A0C)"
				r="6.5"
				stroke="var(--stroke-0, #EBFF57)"
			/>
		</svg>
	)
}
