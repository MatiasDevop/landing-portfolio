import svgPaths from "@/lib/imports/svg-u2dm5opmgk";
import imgImage5 from "@/assets/21939f8fbfefedaaa9c4760682483fe6022b1043.png";
import { imgImage6 } from "@/lib/imports/svg-uhqxr";
import { imgSrc } from "@/lib/img-src";

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <div className="relative shrink-0 size-[17px]" data-name="*">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p2608d400} fill="var(--fill-0, white)" id="*" />
        </svg>
      </div>
      <div className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[24px] text-center text-nowrap">
        <p className="block leading-[1.116] whitespace-pre">Our Latest Work</p>
      </div>
    </div>
  );
}

function Frame2147227234() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-[750px]">
      <Frame19 />
      <div
        className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[62px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.116]">
          Unveiling Thoughtful and Impactful Innovations
        </p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Mask group"
    >
      <div
        className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[636px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_24px] mask-size-[848px_588px] ml-0 mt-[-24px] w-[848px]"
        data-name="image 5"
        style={{
          backgroundImage: `url('${imgSrc(imgImage5)}')`,
          maskImage: `url('${imgImage6}')`,
        }}
      />
    </div>
  );
}

function Global() {
  return (
    <div className="relative shrink-0 size-6" data-name="global">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="global">
          <path
            d={svgPaths.pace200}
            id="Vector"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p168b3380}
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p2bfa5680}
            id="Vector_3"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p1920f500}
            id="Vector_4"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p219c3a80}
            id="Vector_5"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <g id="Vector_6" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Frame2147229267() {
  return (
    <div className="bg-[var(--portfolio-accent)] box-border content-stretch flex flex-row gap-[7px] items-center justify-center px-5 py-2.5 relative rounded-[50px] shrink-0">
      <Global />
      <div className="font-['Clash_Grotesk:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-accent-foreground)] text-[20px] text-left text-nowrap">
        <p className="block leading-[1.116] whitespace-pre">Live Website</p>
      </div>
    </div>
  );
}

function Frame2147229269() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="font-['Clash_Grotesk:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[18px] text-left text-nowrap uppercase">
        <p className="block leading-[1.116] whitespace-pre">Branding</p>
      </div>
      <Frame2147229267 />
    </div>
  );
}

function Frame2147229270() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-[768px]">
      <Frame2147229269 />
      <div className="font-['Clash_Grotesk:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[var(--portfolio-foreground)] text-[32px] text-left w-full">
        <p className="block leading-[1.116]">{`Lorem Ipsum is simply dummy text of the printing and `}</p>
      </div>
    </div>
  );
}

function OurWork() {
  return (
    <div
      className="backdrop-blur-[60.9px] backdrop-filter bg-[var(--portfolio-card-overlay)] box-border content-stretch flex flex-col gap-10 items-center justify-start pb-10 pt-0 px-0 relative rounded-[30px] shrink-0 w-[848px]"
      data-name="our work"
    >
      <div className="absolute border border-[var(--portfolio-border-muted)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <MaskGroup1 />
      <Frame2147229270 />
    </div>
  );
}

function Frame2147227231() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-[1720px]">
      {[...Array(4).keys()].map((_, i) => (
        <OurWork key={i} />
      ))}
    </div>
  );
}

function Frame2147227219() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] items-center justify-start p-0 relative shrink-0 w-[1720px]">
      <Frame2147227234 />
      <Frame2147227231 />
    </div>
  );
}

/** Our Latest Work section – portfolio grid. */
export function LatestWorkSection() {
  return <Frame2147227219 />;
}
