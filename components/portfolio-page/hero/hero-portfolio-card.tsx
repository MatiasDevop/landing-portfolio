import { imgSrc } from '@/src/lib/img-src'

export interface HeroPortfolioCardProps {
	image: string | { src: string; height?: number; width?: number }
	containerClassName?: string
	imageClassName?: string
}

/**
 * Reusable hero portfolio card with image and border.
 * Single responsibility: display one card; open for extension via class overrides.
 */
export function HeroPortfolioCard({
	image,
	containerClassName = 'h-[297px] w-[282px]',
	imageClassName = 'h-[340px] left-0 top-[-6px] w-[282px]',
}: HeroPortfolioCardProps) {
	return (
		<div
			className={`bg-[var(--portfolio-card)] relative rounded-[30px] ${containerClassName}`}
		>
			<div className={`overflow-clip relative ${containerClassName}`}>
				<div
					className={`absolute bg-center bg-cover bg-no-repeat ${imageClassName}`}
					style={{ backgroundImage: `url('${imgSrc(image)}')` }}
					aria-hidden
				/>
			</div>
			<div className="absolute border-[var(--portfolio-card)] border-[10px] border-solid inset-0 pointer-events-none rounded-[30px]" />
		</div>
	)
}
