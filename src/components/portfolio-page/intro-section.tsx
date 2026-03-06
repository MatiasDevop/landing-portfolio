import img67169C724B33367B1Ed2Ed5DServices0411 from '@/assets/a29cb6a61a4b30953b062bad709f9d690e929efd.png'
import img66F5A97Dc6142Aa5D1E24Cc8TextImages011 from '@/assets/ea8d13a176bb05967485497ec15e92aafb4f4d8e.png'
import { imgSrc } from '@/lib/img-src'

function Frame2147227226() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Clash_Grotesk:Regular',_sans-serif] gap-5 items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center text-nowrap w-[1137px]">
      <div className="relative shrink-0">
        <p className="block leading-[1.116] text-nowrap whitespace-pre">
          UI/UX Designer with
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.116] text-nowrap whitespace-pre">
          2.5 years of experience
        </p>
      </div>
    </div>
  )
}

function Frame12() {
  return (
    <div className="bg-[var(--portfolio-card)] h-[66px] overflow-clip relative rounded-[57px] shrink-0 w-[125px]">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[66px] left-[-86px] top-0 w-[228px]"
        data-name="67169c724b33367b1ed2ed5d_services 04 (1) 1"
        style={{
          backgroundImage: `url('${imgSrc(img67169C724B33367B1Ed2Ed5DServices0411)}')`,
        }}
      />
    </div>
  )
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center text-nowrap">
        <p className="block leading-[1.116] whitespace-pre">
          and 30+ completed projects, specializing in
        </p>
      </div>
      <Frame12 />
    </div>
  )
}

function Frame13() {
  return (
    <div className="bg-[var(--portfolio-card)] h-[66px] overflow-clip relative rounded-[57px] shrink-0 w-[125px]">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[78px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[126px]"
        data-name="66f5a97dc6142aa5d1e24cc8_Text Images 01 1"
        style={{
          left: 'calc(50% + 0.5px)',
          backgroundImage: `url('${imgSrc(img66F5A97Dc6142Aa5D1E24Cc8TextImages011)}')`,
        }}
      />
    </div>
  )
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center text-nowrap">
        <p className="block leading-[1.116] whitespace-pre">
          Skilled in research,
        </p>
      </div>
      <Frame13 />
      <div className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center text-nowrap">
        <p className="block leading-[1.116] whitespace-pre">
          wireframing, prototyping,
        </p>
      </div>
    </div>
  )
}

function IntroFrame() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start p-0 relative shrink-0 w-[1280px]">
      <Frame2147227226 />
      <Frame15 />
      <div
        className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center"
        style={{ width: 'min-content' }}
      >
        <p className="block leading-[1.116]">
          ser-centric, problem-solving designs
        </p>
      </div>
      <Frame16 />
      <div
        className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center"
        style={{ width: 'min-content' }}
      >
        <p className="block leading-[1.116]">
          and visual design to craft intuitive and engaging user experiences.
        </p>
      </div>
    </div>
  )
}

export function IntroSection() {
  return <IntroFrame />
}
