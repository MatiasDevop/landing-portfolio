import Image, { type StaticImageData } from "next/image";

import servicesPreview from "@/assets/a29cb6a61a4b30953b062bad709f9d690e929efd.png";
import detailPreview from "@/assets/ea8d13a176bb05967485497ec15e92aafb4f4d8e.png";

function InlineImage({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <span className={`relative inline-flex h-14 w-24 overflow-hidden rounded-full border border-white/10 bg-white ${className ?? ""}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="6rem" />
    </span>
  );
}

export function IntroSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl justify-center px-6 py-24 sm:px-8 lg:px-12">
      <div className="max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-white/45">
          About Smit
        </p>
        <div className="mt-8 space-y-5 text-balance text-3xl font-medium leading-[1.12] text-white sm:text-4xl lg:text-6xl">
          <p className="flex flex-wrap items-center justify-center gap-4">
            <span>UI/UX Designer with 2.5 years of experience</span>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-4">
            <span>and 30+ completed projects, specializing in</span>
            <InlineImage src={servicesPreview} alt="Project collage preview" />
          </p>
          <p>user-centric, problem-solving designs.</p>
          <p className="flex flex-wrap items-center justify-center gap-4">
            <span>Skilled in research,</span>
            <InlineImage src={detailPreview} alt="Detail process preview" className="w-20" />
            <span>wireframing, prototyping,</span>
          </p>
          <p>
            and visual design to craft intuitive and engaging user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
