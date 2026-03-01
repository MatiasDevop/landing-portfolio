import { IconDecorativeDot } from '@/src/components/icons'

export interface HeroDecorativeDotProps {
	/** Wrapper class, e.g. "flex-none rotate-[342.329deg]" */
	className?: string
}

/**
 * Single decorative dot used in hero decorative shapes.
 * Uses IconDecorativeDot from @/src/components/icons.
 */
export function HeroDecorativeDot({ className = 'flex-none' }: HeroDecorativeDotProps) {
	return (
		<div className={className} aria-hidden>
			<div className="relative size-3.5">
				<IconDecorativeDot />
			</div>
		</div>
	)
}
