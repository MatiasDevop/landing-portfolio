import type { IconProps } from './icon-props'

/**
 * Left decorative stroke path (206×114). Hero decorative block left.
 * Import from @/components/icons.
 */
export function IconDecorativeLineLeft({
	className = 'block size-full',
	'aria-hidden': ariaHidden = true,
}: IconProps) {
	return (
		<svg
			className={className}
			fill="none"
			preserveAspectRatio="none"
			viewBox="0 0 206 114"
			aria-hidden={ariaHidden}
		>
			<path
				d="M1 113.5V1H205.5V113.5H1Z"
				stroke="var(--stroke-0, #EBFF57)"
			/>
		</svg>
	)
}
