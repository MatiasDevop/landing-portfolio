import { IconColorIndicatorPill } from '@/src/components/icons'

/**
 * Hero color theme indicator (four-dot pill).
 * Uses IconColorIndicatorPill from @/src/components/icons.
 */
export function HeroColorIndicator() {
	return (
		<div
			className="absolute h-[42px] top-[214px] translate-x-[-50%] w-[150px]"
			style={{ left: 'calc(50% + 574.5px)' }}
			aria-hidden
		>
			<IconColorIndicatorPill />
		</div>
	)
}
