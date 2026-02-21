import svgPaths from "@/lib/imports/svg-u2dm5opmgk";

const fontBody =
  "font-['Clash_Grotesk',sans-serif] leading-none not-italic text-(--portfolio-foreground)";
const fontHeading =
  "font-['Clash_Grotesk',sans-serif] leading-none not-italic text-(--portfolio-foreground) text-8xl md:text-[7rem] lg:text-[130px] text-left uppercase";
const inputStyle =
  "rounded-[30px] bg-(--portfolio-surface-muted) border-2 border-(--portfolio-border) px-5 py-[21px]";

/**
 * Accent asterisk icon used between social links.
 */
function AccentIcon() {
  return (
    <svg
      className="size-10 shrink-0"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
      aria-hidden
    >
      <path d={svgPaths.p25b9d700} fill="var(--portfolio-accent)" />
    </svg>
  );
}

/**
 * Social links row: INSTAGRAM, FACEBOOK, TWITTER with accent separators.
 */
function SocialLinks() {
  const links = ["INSTAGRAM", "FACEBOOK", "TWITTER"] as const;
  const linkClass = `${fontBody} shrink-0 text-left uppercase text-4xl sm:text-6xl md:text-8xl lg:text-[130px]`;
  return (
    <div className="flex w-full max-w-[1920px] flex-row flex-wrap items-center justify-start gap-6 p-0 md:gap-[60px] overflow-x-auto">
      {links.flatMap((label, i) => [
        <span
          key={label}
          className={
            i === links.length - 1
              ? `${linkClass} max-w-[444px]`
              : `${linkClass} text-nowrap`
          }
        >
          {label}
        </span>,
        <AccentIcon key={`icon-${label}`} />,
      ])}
    </div>
  );
}

interface ContactFormFieldProps {
  label: string;
}

/** Single-line contact form field (Full Name, Email). */
function ContactFormField({ label }: ContactFormFieldProps) {
  return (
    <div
      className={`min-h-px relative h-12 w-full min-w-0 flex-1 rounded-[30px] bg-(--portfolio-surface-muted) md:h-[62px]`}
    >
      <div className="relative size-full">
        <div
          className={`box-border flex flex-row gap-2.5 h-full items-start justify-start w-full ${inputStyle}`}
        >
          <span
            className={`${fontBody} shrink-0 text-center text-nowrap text-sm md:text-base leading-5`}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Message textarea field. */
function MessageField() {
  return (
    <div
      className={`box-border flex flex-row gap-2.5 h-[190px] items-start justify-start relative w-full min-w-0 ${inputStyle}`}
    >
      <span
        className={`${fontBody} shrink-0 text-base text-center text-nowrap leading-5`}
      >
        Message
      </span>
    </div>
  );
}

/** Primary submit button. */
function SubmitButton() {
  return (
    <div className="bg-(--portfolio-accent) flex w-full flex-row gap-2.5 items-center justify-center px-[30px] py-[15px] relative rounded-[62px] self-start max-w-xs">
      <span className="font-['Clash_Grotesk',sans-serif] font-medium leading-none not-italic relative shrink-0 text-(--portfolio-accent-foreground) text-2xl text-center text-nowrap">
        Submit
      </span>
    </div>
  );
}

/** Contact form: name + email row, message, submit. */
function ContactForm() {
  return (
    <div className="absolute left-[948px] right-[70px] top-[106px] flex flex-col gap-5 items-stretch justify-start p-0">
      <div className="flex w-full flex-row gap-5 items-stretch">
        <ContactFormField label="Full Name" />
        <ContactFormField label="Email" />
      </div>
      <MessageField />
      <SubmitButton />
    </div>
  );
}

/** Footer nav pills: About Us, Our Service, Portfolio. */
function FooterNav() {
  const items = ["About Us", "Our Service", "Portfolio"] as const;
  return (
    <div
      className={`bg-(--portfolio-surface-muted) flex flex-row gap-10 h-6 items-start justify-start rounded-[60px] shrink-0 px-4 py-1 ${fontBody} text-xl text-center text-nowrap`}
    >
      {items.map((item) => (
        <span
          key={item}
          className="block leading-normal text-nowrap whitespace-pre"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/** Footer legal links with vertical divider. */
function FooterLegal() {
  return (
    <div className="flex flex-row gap-5 items-start justify-start">
      <span
        className={`flex flex-col justify-center ${fontBody} text-lg text-center text-nowrap leading-5`}
      >
        Privacy Policy
      </span>
      <div className="flex h-5 w-0 shrink-0 items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="relative h-0 w-[21px]">
            <svg
              className="absolute bottom-0 left-0 right-0 -top-px block size-full"
              viewBox="0 0 21 1"
              fill="none"
              aria-hidden
            >
              <line
                stroke="var(--portfolio-foreground)"
                x2="21"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <span
        className={`flex flex-col justify-center ${fontBody} text-lg text-center text-nowrap leading-5`}
      >
        Terms & Condition
      </span>
    </div>
  );
}

/** Footer bar: copyright, nav, legal. */
function FooterBar() {
  return (
    <div className="absolute left-[78px] top-[556px] w-[1712px] flex flex-row items-start justify-between p-0">
      <span
        className={`flex flex-col justify-center ${fontBody} text-lg text-center text-nowrap leading-5`}
      >
        2026@Smit All rights reserved
      </span>
      <FooterNav />
      <FooterLegal />
    </div>
  );
}

/** Horizontal divider line above footer. */
function FooterDivider() {
  return (
    <div
      className="absolute contents top-[520px] translate-x-[-50%]"
      style={{ left: "calc(50% + 41px)" }}
    >
      <FooterBar />
      <div
        className="absolute h-0 top-[520px] translate-x-[-50%] w-[1920px]"
        style={{ left: "calc(50% + 41px)" }}
      >
        <div className="absolute inset-x-0 -top-px bottom-0">
          <svg
            className="block size-full"
            viewBox="0 0 1920 1"
            fill="none"
            aria-hidden
          >
            <line
              stroke="var(--portfolio-foreground)"
              strokeOpacity={0.1}
              x2="1920"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Decorative semicircle with accent icon (globe). */
function DecorativeIconGlobe() {
  return (
    <div className="h-[151px] w-[168px] relative shrink-0">
      <div className="absolute bottom-[-12.674%] left-0 right-[-0.173%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 169 171"
          aria-hidden
        >
          <g>
            <path
              clipRule="evenodd"
              d={svgPaths.pfc1ad00}
              fill="var(--portfolio-foreground)"
              fillRule="evenodd"
            />
            <g>
              <circle
                cx="68.001"
                cy="42"
                r="34"
                fill="var(--portfolio-accent)"
              />
              <path
                d={svgPaths.p13959d00}
                stroke="var(--portfolio-accent-foreground)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

/** Decorative semicircle with accent icon (gear). */
function DecorativeIconGear() {
  return (
    <div className="h-[140px] w-[151px] relative shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 151 140"
        aria-hidden
      >
        <g>
          <path
            clipRule="evenodd"
            d={svgPaths.p1d844b00}
            fill="var(--portfolio-foreground)"
            fillRule="evenodd"
          />
          <g>
            <circle
              cx="47.9573"
              cy="35.5383"
              r="30.3899"
              fill="var(--portfolio-accent)"
            />
            <g>
              <circle
                cx="48"
                cy="36"
                r="13.5"
                stroke="var(--portfolio-accent-foreground)"
              />
              <path
                d={svgPaths.p8b56a80}
                stroke="var(--portfolio-accent-foreground)"
              />
              <path
                d={svgPaths.pf525e00}
                stroke="var(--portfolio-accent-foreground)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

/** "Let's" heading line with globe graphic. */
function HeadingLineLets() {
  return (
    <div className="flex flex-row gap-[30px] items-end justify-center">
      <span className={`${fontHeading} shrink-0 text-nowrap`}>Let's</span>
      <DecorativeIconGlobe />
    </div>
  );
}

/** "Get IN" heading line with gear graphic. */
function HeadingLineGetIn() {
  return (
    <div className="flex flex-row gap-[30px] items-center justify-start w-full">
      <DecorativeIconGear />
      <span
        className={`${fontHeading} flex flex-col justify-end shrink-0 text-nowrap`}
      >
        Get IN
      </span>
    </div>
  );
}

/** Main contact heading: "Let's Get In TOUCH" with accent on TOUCH. */
function ContactHeading() {
  return (
    <div className="absolute left-[70px] top-7 w-[550px] flex flex-col gap-4 items-start justify-start">
      <HeadingLineLets />
      <HeadingLineGetIn />
      <div
        className={`font-['Clash_Grotesk',sans-serif] leading-none min-w-full not-italic shrink-0 text-(--portfolio-accent) text-8xl md:text-[7rem] lg:text-[130px] text-left uppercase`}
        style={{ width: "min-content" }}
      >
        TOUCH
      </div>
    </div>
  );
}

/** Dark card container for form + heading + footer. */
function ContactCard() {
  return (
    <div className="bg-(--portfolio-surface-muted) h-[615px] overflow-clip relative rounded-[60px] shrink-0 w-full max-w-[1860px]">
      <ContactForm />
      <FooterDivider />
      <ContactHeading />
    </div>
  );
}

/**
 * Contact / Get in Touch section: social links, form card, heading.
 */
export function ContactSection() {
  return (
    <div className="flex flex-col gap-[60px] items-center justify-start w-full">
      <SocialLinks />
      <ContactCard />
    </div>
  );
}
