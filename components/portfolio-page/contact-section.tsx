const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Service", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
] as const;

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="inline-flex min-h-11 items-center rounded-full border border-white/12 px-5 py-3 text-sm uppercase tracking-[0.24em] text-white/70 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function ContactFormField({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: "text" | "email";
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-sm uppercase tracking-[0.22em] text-white/55">
        {label}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={id === "email" ? "email" : "name"}
        placeholder={label}
        required
        className="min-h-14 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-5 text-base text-white placeholder:text-white/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
      />
    </label>
  );
}

function ContactForm() {
  return (
    <form
      className="space-y-5"
      action="#contact"
      method="post"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <ContactFormField id="full-name" label="Full Name" />
        <ContactFormField id="email" label="Email" type="email" />
      </div>
      <label className="flex flex-col gap-3">
        <span className="text-sm uppercase tracking-[0.22em] text-white/55">
          Message
        </span>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project"
          rows={6}
          required
          className="min-h-40 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-base text-white placeholder:text-white/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--portfolio-accent)] px-8 py-3 text-lg font-medium text-[var(--portfolio-accent-foreground)] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-foreground)]"
      >
        Submit
      </button>
    </form>
  );
}

function Footer() {
  return (
    <div className="flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between">
      <span>2026 Smit. All rights reserved.</span>
      <div className="flex flex-wrap gap-5">
        {footerLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        <a href="#" className="transition hover:text-white/80">
          Privacy Policy
        </a>
        <a href="#" className="transition hover:text-white/80">
          Terms &amp; Condition
        </a>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 sm:px-8 lg:px-12">
      <SocialLinks />
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_32px_120px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-10 lg:p-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Contact
            </p>
            <h2 className="mt-6 text-balance text-5xl font-medium leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              Whether you&apos;re building a new product, refining an existing
              experience, or shaping a sharper visual identity, I&apos;d love to
              hear what you&apos;re working on.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
