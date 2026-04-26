/**
 * Hero headline and subtitle.
 * Single responsibility: main copy only.
 */
export function HeroHeadline() {
	return (
		<div className="box-border content-stretch flex flex-col gap-5 items-center justify-start leading-0 not-italic p-0 relative shrink-0 text-(--portfolio-foreground) text-center w-full">
			<div
				className="font-['Clash_Grotesk:Medium',sans-serif] min-w-full relative shrink-0 text-[102px]"
				style={{ width: 'min-content' }}
			>
				<p className="block leading-[90.72%]">I&apos;m SMIT, a UI/UX Designer</p>
			</div>
			<div className="font-['Clash_Grotesk:Regular',sans-serif] relative shrink-0 text-[24px] w-[635px]">
				<p className="block leading-[normal]">
					Specializing in user-centered design, intuitive interfaces, and
					meaningful digital experiences.
				</p>
			</div>
		</div>
	)
}
