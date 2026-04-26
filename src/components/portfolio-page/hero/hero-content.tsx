import { HeroHeadline } from './hero-headline'
import { HeroCtaButton } from './hero-cta-button'

/**
 * Center hero content: headline + primary CTA.
 */
export function HeroContent() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 translate-x-[-50%] translate-y-[-50%] w-[1117px]"
      style={{ top: 'calc(50% + 77px)', left: 'calc(50% + 1px)' }}
    >
      <HeroHeadline />
      <HeroCtaButton label="Get Started" href="#contact" />
    </div>
  )
}
