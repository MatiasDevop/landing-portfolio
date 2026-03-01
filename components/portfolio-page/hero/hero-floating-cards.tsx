import imgImage4 from '@/assets/891fe860c52dcd7a3309affa6bbd1251b86eef34.png'
import imgImage3 from '@/assets/1002d28e5770af51c417b903605283e5627203e7.png'
import { HeroPortfolioCard } from './hero-portfolio-card'

/**
 * Left floating portfolio card (rotated).
 */
export function HeroFloatingCardLeft() {
	return (
		<div className="absolute h-[413px] left-[123px] top-[546px] w-[325px]">
			<div className="absolute flex h-[337.424px] items-center justify-center left-0 top-[76px] w-[324.952px]">
				<div className="flex-none rotate-[351.008deg]">
					<HeroPortfolioCard image={imgImage4} />
				</div>
			</div>
		</div>
	)
}

/**
 * Right floating portfolio card (rotated).
 */
export function HeroFloatingCardRight() {
	return (
		<div className="absolute h-[388px] left-[1449px] top-[661px] w-[304px]">
			<div className="absolute flex h-[317.541px] items-center justify-center left-0 top-0 w-[303.928px]">
				<div className="flex-none rotate-[5.078deg]">
					<HeroPortfolioCard
						image={imgImage3}
						containerClassName="h-[294px] w-[279px]"
						imageClassName="h-[426px] left-[-53px] top-[-33px] w-[352px]"
					/>
				</div>
			</div>
		</div>
	)
}
