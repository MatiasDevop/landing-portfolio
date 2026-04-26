import imgRectangle1 from '@/assets/f82869a80f906e1c6f7e3d916e35962fe320f428.png'
import { imgSrc } from '@/lib/img-src'

/**
 * Hero radial gradient background with mask.
 * Single responsibility: background visual only.
 */
export function HeroBackgroundMask() {
	return (
		<div
			className="absolute contents left-[239px] top-[-101.941px]"
			aria-hidden
		>
			<div
				className="absolute h-[1176.88px] left-[239px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[1442px_1176.88px] opacity-[0.15] top-[-101.941px] w-[1442px]"
				style={{
					backgroundImage:
						"url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1442 1176.9\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4149e-15 58.844 -72.1 3.6032e-15 721 588.44)\\'> <stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
					maskImage: `url('${imgSrc(imgRectangle1)}')`,
				}}
			/>
		</div>
	)
}
