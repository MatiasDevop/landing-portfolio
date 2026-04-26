export const HERO_NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Service", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
] as const

/**
 * Hero navigation links. Data-driven; single responsibility for nav list.
 */
export function HeroNav() {
  return (
    <nav
      className="hidden text-[var(--portfolio-foreground)] lg:block"
      aria-label="Main navigation"
    >
      <ul className="flex flex-row items-center gap-10 text-lg">
        {HERO_NAV_LINKS.map(({ label, href }) => (
          <li key={label} className="relative shrink-0 list-none">
            <a
              href={href}
              className="block whitespace-pre text-white/78 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
