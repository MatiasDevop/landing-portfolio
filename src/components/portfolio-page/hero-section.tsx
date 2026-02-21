import imgRectangle1 from "@/assets/f82869a80f906e1c6f7e3d916e35962fe320f428.png";
import imgImage4 from "@/assets/891fe860c52dcd7a3309affa6bbd1251b86eef34.png";
import imgImage3 from "@/assets/1002d28e5770af51c417b903605283e5627203e7.png";
import { imgSrc } from "@/src/lib/img-src";

function MaskGroup() {
  return (
    <div
      className="absolute contents left-[239px] top-[-101.941px]"
      data-name="Mask group"
    >
      <div
        className="absolute h-[1176.88px] left-[239px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1442px_1176.88px] opacity-[0.15] top-[-101.941px] w-[1442px]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1442 1176.9\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.4149e-15 58.844 -72.1 3.6032e-15 721 588.44)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
          maskImage: `url('${imgSrc(imgRectangle1)}')`,
        }}
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[var(--portfolio-card)] h-[297px] relative rounded-[30px] w-[282px]">
      <div className="h-[297px] overflow-clip relative w-[282px]">
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[340px] left-0 top-[-6px] w-[282px]"
          data-name="image 4"
          style={{ backgroundImage: `url('${imgSrc(imgImage4)}')` }}
        />
      </div>
      <div className="absolute border-[var(--portfolio-card)] border-[10px] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function Frame2147227221() {
  return (
    <div className="absolute h-[413px] left-[123px] top-[546px] w-[325px]">
      <div className="absolute flex h-[337.424px] items-center justify-center left-0 top-[76px] w-[324.952px]">
        <div className="flex-none rotate-[351.008deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[var(--portfolio-card)] h-[294px] relative rounded-[30px] w-[279px]">
      <div className="h-[294px] overflow-clip relative w-[279px]">
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[426px] left-[-53px] top-[-33px] w-[352px]"
          data-name="image 3"
          style={{ backgroundImage: `url('${imgSrc(imgImage3)}')` }}
        />
      </div>
      <div className="absolute border-[var(--portfolio-card)] border-[10px] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function Frame2147227220() {
  return (
    <div className="absolute h-[388px] left-[1449px] top-[661px] w-[304px]">
      <div className="absolute flex h-[317.541px] items-center justify-center left-0 top-0 w-[303.928px]">
        <div className="flex-none rotate-[5.078deg]">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[var(--portfolio-foreground)] text-center w-full">
      <div
        className="font-['Clash_Grotesk:Medium',_sans-serif] min-w-full relative shrink-0 text-[102px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[90.72%]">I'm SMIT, a UI/UX Designer</p>
      </div>
      <div className="font-['Clash_Grotesk:Regular',_sans-serif] relative shrink-0 text-[24px] w-[635px]">
        <p className="block leading-[normal]">
          Specializing in user-centered design, intuitive interfaces, and
          meaningful digital experiences.
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[var(--portfolio-accent)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-[15px] relative rounded-[62px] shrink-0">
      <div className="font-['Clash_Grotesk:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-accent-foreground)] text-[24px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 translate-x-[-50%] translate-y-[-50%] w-[1117px]"
      style={{ top: "calc(50% + 77px)", left: "calc(50% + 1px)" }}
    >
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Clash_Grotesk:Regular',_sans-serif] gap-[55px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[var(--portfolio-foreground)] text-[20px] text-center text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Home
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          About Us
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Our Service
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Portfolio
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[var(--portfolio-accent)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-[15px] relative rounded-[62px] shrink-0">
      <div className="font-['Clash_Grotesk:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-accent-foreground)] text-[24px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="absolute bg-[var(--portfolio-surface)] box-border content-stretch flex flex-row items-center justify-between px-[100px] py-5 top-0 translate-x-[-50%] w-[1920px]"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <div className="absolute border border-[var(--portfolio-border)] border-solid inset-0 pointer-events-none" />
      <div className="font-['Clash_Grotesk:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[37px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">SMIT.</p>
      </div>
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Group1() {
  const dot = () => (
    <div className="flex-none rotate-[342.329deg]">
      <div className="relative size-3.5">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #0A0A0C)"
            id="Ellipse 3414"
            r="6.5"
            stroke="var(--stroke-0, #EBFF57)"
          />
        </svg>
      </div>
    </div>
  );
  return (
    <div className="absolute contents left-[250px] top-[217.002px]">
      <div className="absolute flex h-[169.268px] items-center justify-center left-[258.318px] top-[225.798px] w-[229px]">
        <div className="flex-none rotate-[342.329deg]">
          <div className="h-[112.5px] relative w-[204.5px]">
            <div className="absolute bottom-[-0.444%] left-[-0.244%] right-[-0.244%] top-[-0.444%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 206 114"
              >
                <path
                  d="M1 113.5V1H205.5V113.5H1Z"
                  id="Vector 1"
                  stroke="var(--stroke-0, #EBFF57)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[344.328px] top-[248.875px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[444.374px] top-[217.004px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[461.373px] top-[270.36px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[478.676px] top-[324.672px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[378.63px] top-[356.543px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[284.302px] top-[386.594px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[266.999px] top-[332.285px] w-[17.589px]">
        {dot()}
      </div>
      <div className="absolute flex h-[17.589px] items-center justify-center left-[250px] top-[278.926px] w-[17.589px]">
        {dot()}
      </div>
    </div>
  );
}

function Bold() {
  return (
    <div className="h-[61px] relative w-[113px]" data-name="Bold.">
      <div className="absolute bottom-0 font-['Clash_Grotesk:Semibold',_sans-serif] leading-[0] left-[-10.619%] not-italic right-[-9.735%] text-[var(--portfolio-foreground)] text-[49.188px] text-center text-nowrap top-0">
        <p className="block leading-[normal] whitespace-pre">UI/UX</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[250px] top-[217.001px]">
      <Group1 />
      <div className="absolute flex h-[92.421px] items-center justify-center left-[309.408px] top-[264.29px] w-[126.184px]">
        <div className="flex-none rotate-[342.33deg]">
          <Bold />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  const dot = () => (
    <div className="flex-none rotate-[10.792deg]">
      <div className="relative size-3.5">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #0A0A0C)"
            id="Ellipse 3414"
            r="6.5"
            stroke="var(--stroke-0, #EBFF57)"
          />
        </svg>
      </div>
    </div>
  );
  return (
    <div className="absolute contents left-[1448.52px] top-[224.562px]">
      <div className="absolute flex h-[159.498px] items-center justify-center left-[1456.71px] top-[232.75px] w-[275.578px]">
        <div className="flex-none rotate-[10.792deg]">
          <div className="h-[113px] relative w-[259px]">
            <div className="absolute bottom-[-0.442%] left-[-0.193%] right-[-0.193%] top-[-0.442%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 261 115"
              >
                <path
                  d="M1 114V1H260V114H1Z"
                  id="Vector 1"
                  stroke="var(--stroke-0, #EBFF57)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1597.38px] top-[248.906px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1724.1px] top-[273.059px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1713.62px] top-[328.07px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1702.94px] top-[384.062px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1576.22px] top-[359.906px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1448.52px] top-[335.566px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1459.2px] top-[279.574px] w-[16.374px]">
        {dot()}
      </div>
      <div className="absolute flex h-[16.374px] items-center justify-center left-[1469.68px] top-[224.563px] w-[16.374px]">
        {dot()}
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[1448.52px] top-[224.563px]">
      <Group4 />
      <div className="absolute flex h-[84.458px] items-center justify-center left-[1593.52px] top-[267.84px] translate-x-[-50%] w-[161.021px]">
        <div className="flex-none rotate-[10.792deg]">
          <div className="font-['Clash_Grotesk:Semibold',_sans-serif] leading-[0] not-italic relative text-[var(--portfolio-foreground)] text-[49.188px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2147227222() {
  return (
    <div
      className="absolute h-[42px] top-[214px] translate-x-[-50%] w-[150px]"
      style={{ left: "calc(50% + 574.5px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 150 42"
      >
        <g id="Frame 2147227222">
          <rect fill="var(--fill-0, #0A0A0C)" height="42" rx="21" width="150" />
          <rect
            height="41"
            rx="20.5"
            stroke="var(--stroke-0, white)"
            strokeOpacity="0.15"
            width="149"
            x="0.5"
            y="0.5"
          />
          <circle
            cx="21"
            cy="21"
            fill="var(--fill-0, #EBFF57)"
            id="Ellipse 3422"
            r="13"
          />
          <circle
            cx="57"
            cy="21"
            fill="var(--fill-0, #57FFC7)"
            id="Ellipse 3423"
            opacity="0"
            r="13"
          />
          <circle
            cx="93"
            cy="21"
            fill="var(--fill-0, #5768FF)"
            id="Ellipse 3424"
            opacity="0"
            r="13"
          />
          <circle
            cx="129"
            cy="21"
            fill="var(--fill-0, #81FF57)"
            id="Ellipse 3425"
            opacity="0"
            r="13"
          />
        </g>
      </svg>
    </div>
  );
}

function HeroFrame() {
  return (
    <div className="bg-[var(--portfolio-surface)] h-[974px] relative shrink-0 w-full">
      <MaskGroup />
      <Frame2147227221 />
      <Frame2147227220 />
      <Frame7 />
      <Frame10 />
      <Group2 />
      <Group3 />
      <Frame2147227222 />
    </div>
  );
}

export function HeroSection() {
  return <HeroFrame />;
}
