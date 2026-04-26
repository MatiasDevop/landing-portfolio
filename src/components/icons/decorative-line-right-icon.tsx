import type { IconProps } from './icon-props'

/**
 * Right decorative stroke path (261×115). Hero decorative block right.
 * Import from @/components/icons.
 */
export function IconDecorativeLineRight({
	className = 'block size-full',
	'aria-hidden': ariaHidden = true,
}: IconProps) {
	return (
		<svg
			className={className}
			fill="none"
			preserveAspectRatio="none"
			viewBox="0 0 261 115"
			aria-hidden={ariaHidden}
		>
			<path
				d="M1 114V1H260V114H1Z"
				stroke="var(--stroke-0, #EBFF57)"
			/>
		</svg>
	)
}
