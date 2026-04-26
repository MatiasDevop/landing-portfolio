import { ArrowUpRight, LayoutTemplate, MonitorSmartphone, Palette, Shapes } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description:
      "Conversion-focused interface design for marketing sites, portfolios, and product experiences.",
    icon: LayoutTemplate,
  },
  {
    title: "Application Design",
    description:
      "Product UI systems for web apps with clear flows, scalable components, and practical UX thinking.",
    icon: MonitorSmartphone,
  },
  {
    title: "Graphic Design",
    description:
      "Visual assets, launch graphics, and supporting brand collateral that stay consistent across touchpoints.",
    icon: Palette,
  },
  {
    title: "Logo Design",
    description:
      "Simple, recognizable brand marks built to work across digital products and presentation surfaces.",
    icon: Shapes,
  },
] as const;

function ServicesCta() {
  return (
    <a
      href="#contact"
      className="group inline-flex h-44 w-44 shrink-0 flex-col items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-center text-white transition hover:border-[var(--portfolio-accent)] hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
    >
      <span className="mb-3 inline-flex size-16 items-center justify-center rounded-full border border-white/20 bg-black/30">
        <ArrowUpRight className="size-8 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <span className="max-w-[9rem] text-sm uppercase tracking-[0.24em] text-white/70">
        Explore More Services
      </span>
    </a>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
}: (typeof services)[number]) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] text-[var(--portfolio-accent)]">
        <Icon className="size-7" />
      </div>
      <h3 className="mt-8 text-2xl font-medium text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-white/66">{description}</p>
    </article>
  );
}

export function ServicesSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">
            Our Service
          </p>
          <h2 className="mt-5 text-balance text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            Innovative solutions tailored to your vision
          </h2>
        </div>
        <ServicesCta />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
