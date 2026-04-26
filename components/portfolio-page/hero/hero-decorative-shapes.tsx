import { IconDecorativeLineLeft, IconDecorativeLineRight } from '@/components/icons'
import { HeroDecorativeDot } from './hero-decorative-dot'

/** Left-side decorative line + dots + "UI/UX" label. */
function HeroDecorativeLineLeft() {
	const dotWrapperClass = 'flex-none rotate-[342.329deg]'
	return (
		<div className="absolute contents left-[250px] top-[217.002px]">
			<div className="absolute flex h-[169.268px] items-center justify-center left-[258.318px] top-[225.798px] w-[229px]">
				<div className="flex-none rotate-[342.329deg]">
					<div className="h-[112.5px] relative w-[204.5px]">
						<div className="absolute bottom-[-0.444%] left-[-0.244%] right-[-0.244%] top-[-0.444%]">
							<IconDecorativeLineLeft />
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[344.328px] top-[248.875px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[444.374px] top-[217.004px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[461.373px] top-[270.36px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[478.676px] top-[324.672px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[378.63px] top-[356.543px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[284.302px] top-[386.594px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[266.999px] top-[332.285px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[17.589px] items-center justify-center left-[250px] top-[278.926px] w-[17.589px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
		</div>
	)
}

/** Right-side decorative line + dots. */
function HeroDecorativeLineRight() {
	const dotWrapperClass = 'flex-none rotate-[10.792deg]'
	return (
		<div className="absolute contents left-[1448.52px] top-[224.562px]">
			<div className="absolute flex h-[159.498px] items-center justify-center left-[1456.71px] top-[232.75px] w-[275.578px]">
				<div className="flex-none rotate-[10.792deg]">
					<div className="h-[113px] relative w-[259px]">
						<div className="absolute bottom-[-0.442%] left-[-0.193%] right-[-0.193%] top-[-0.442%]">
							<IconDecorativeLineRight />
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1597.38px] top-[248.906px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1724.1px] top-[273.059px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1713.62px] top-[328.07px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1702.94px] top-[384.062px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1576.22px] top-[359.906px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1448.52px] top-[335.566px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1459.2px] top-[279.574px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
			<div className="absolute flex h-[16.374px] items-center justify-center left-[1469.68px] top-[224.563px] w-[16.374px]">
				<HeroDecorativeDot className={dotWrapperClass} />
			</div>
		</div>
	)
}

/**
 * Left decorative block: line + dots + "UI/UX" label.
 */
export function HeroDecorativeBlockLeft() {
	return (
		<div className="absolute contents left-[250px] top-[217.001px]">
			<HeroDecorativeLineLeft />
			<div className="absolute flex h-[92.421px] items-center justify-center left-[309.408px] top-[264.29px] w-[126.184px]">
				<div className="flex-none rotate-[342.33deg]">
					<div className="h-[61px] relative w-[113px]">
						<div className="absolute bottom-0 font-['Clash_Grotesk:Semibold',sans-serif] leading-0 left-[-10.619%] not-italic right-[-9.735%] text-(--portfolio-foreground) text-[49.188px] text-center text-nowrap top-0">
							<p className="block leading-[normal] whitespace-pre">UI/UX</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

/**
 * Right decorative block: line + dots + "Design" label.
 */
export function HeroDecorativeBlockRight() {
	return (
		<div className="absolute contents left-[1448.52px] top-[224.563px]">
			<HeroDecorativeLineRight />
			<div className="absolute flex h-[84.458px] items-center justify-center left-[1593.52px] top-[267.84px] translate-x-[-50%] w-[161.021px]">
				<div className="flex-none rotate-[10.792deg]">
					<div className="font-['Clash_Grotesk:Semibold',sans-serif] leading-0 not-italic relative text-(--portfolio-foreground) text-[49.188px] text-center text-nowrap">
						<p className="block leading-[normal] whitespace-pre">Design</p>
					</div>
				</div>
			</div>
		</div>
	)
}
