import Image, { type StaticImageData } from "next/image";
import { Globe } from "lucide-react";

import workImagePrimary from "@/assets/21939f8fbfefedaaa9c4760682483fe6022b1043.png";
import workImageSecondary from "@/assets/1002d28e5770af51c417b903605283e5627203e7.png";
import workImageTertiary from "@/assets/891fe860c52dcd7a3309affa6bbd1251b86eef34.png";
import workImageDetail from "@/assets/f82869a80f906e1c6f7e3d916e35962fe320f428.png";

const projects: Array<{
  title: string;
  category: string;
  image: StaticImageData;
}> = [
  {
    title: "Packaging and brand design direction for a premium delivery concept.",
    category: "Branding",
    image: workImagePrimary,
  },
  {
    title: "Editorial product visuals for a modern fashion and culture experience.",
    category: "Visual Design",
    image: workImageSecondary,
  },
  {
    title: "Launch-ready portfolio storytelling with strong art direction and motion cues.",
    category: "Portfolio",
    image: workImageTertiary,
  },
  {
    title: "Interface concept work focused on composition, contrast, and product framing.",
    category: "UI Concept",
    image: workImageDetail,
  },
] as const;

function ProjectCard({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: StaticImageData;
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-[1.03]"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),rgba(0,0,0,0.04))]" />
      </div>
      <div className="space-y-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm uppercase tracking-[0.24em] text-white/50">
            {category}
          </span>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--portfolio-accent)] px-5 py-2.5 text-sm font-medium text-[var(--portfolio-accent-foreground)] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-foreground)]"
          >
            <Globe className="size-4" />
            Live Website
          </a>
        </div>
        <h3 className="text-balance text-2xl font-medium leading-snug text-white">
          {title}
        </h3>
      </div>
    </article>
  );
}

export function LatestWorkSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-white/45">
          Our Latest Work
        </p>
        <h2 className="mt-5 text-balance text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          Unveiling thoughtful and impactful innovations
        </h2>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
