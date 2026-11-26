import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight, Menu, X, Network, Globe, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [
  { to: "/" as const, label: "Home" },
  { to: "/opportunities" as const, label: "Find Opportunities" },
  { to: "/network" as const, label: "Professional Network" },
  { to: "/mentorship" as const, label: "Mentorship" },
  { to: "/organizations" as const, label: "Organizations" },
  { to: "/about" as const, label: "About Us" },
];
const pageTitles: Record<string, string> = {
  "/": "Home",
  "/opportunities": "Find Opportunities",
  "/network": "Professional Network",
  "/mentorship": "Mentorship",
  "/organizations": "Organizations",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/join": "Create Account",
  "/login": "Login",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
};
function usePageTitle() {
  const { pathname } = useLocation();
  const known = pageTitles[pathname];
  if (known) return known;
  const words = pathname.replace(/[-/]+/g, " ").trim();
  if (!words) return "Home";
  return words
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
export function Brand({ name = "Skill" }: { name?: string }) {
  return (
    <Link to="/" className="brand-mark" aria-label={`${name}Bridge home`}>
      <span className="brand-icon">
        <Network size={25} />
      </span>
      <span>
        {name}<span className="text-primary">Bridge</span>
      </span>
    </Link>
  );
}
export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const pageTitle = usePageTitle();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
        <div className="site-container flex h-full items-center justify-between gap-6">
          <div className="header-brand-col flex min-w-0 items-center gap-3">
            <Brand name="Wrok" />
            <span className="page-title min-w-0 truncate">{pageTitle}</span>
          </div>
          <nav className="desktop-nav flex h-full items-center gap-6" aria-label="Main navigation">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="nav-link" activeOptions={{ exact: true }}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions flex items-center gap-3">
            <Button asChild variant="ghost" className="header-cta hidden sm:inline-flex">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="header-cta hidden sm:inline-flex">
              <Link to="/join">
                Get Started <ArrowUpRight />
              </Link>
            </Button>
            <Button
              className="nav-toggle"
              variant="ghost"
              size="icon"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 z-30 grid gap-1 border-b bg-background p-5 shadow-lg"
          >
            {links.map((link) => (
              <Button
                asChild
                variant="ghost"
                className="mobile-nav-link justify-start"
                key={link.to}
              >
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.to ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            <Button asChild variant="navy">
              <Link to="/join" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t bg-background">
        <div className="site-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="section-copy mt-4 max-w-xs">
              Connecting Skills, People and Opportunities.
            </p>
            <p className="section-copy mt-2 max-w-xs">
              Building bridges to a more inclusive professional future.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold">Explore</h3>
            <div className="grid gap-3 text-xs text-muted-foreground">
              <Link to="/opportunities">Find Opportunities</Link>
              <Link to="/network">Professional Network</Link>
              <Link to="/mentorship">Mentorship</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold">SkillBridge</h3>
            <div className="grid gap-3 text-xs text-muted-foreground">
              <Link to="/about">About Us</Link>
              <Link to="/organizations">Our Organizations</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold">A connected future</h3>
            <div className="flex gap-4 text-muted-foreground">
              <Link to="/network" aria-label="Professional community">
                <Network size={20} />
              </Link>
              <Link to="/organizations" aria-label="Global partnerships">
                <Globe size={20} />
              </Link>
              <Link to="/mentorship" aria-label="Mentoring community">
                <HeartHandshake size={20} />
              </Link>
            </div>
            <p className="section-copy mt-3">Opportunity belongs to everyone.</p>
          </div>
        </div>
        <div className="site-container flex flex-wrap justify-between gap-4 border-t py-5 text-[11px] text-muted-foreground">
          <span>© 2026 SkillBridge. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  to,
  label = "View all",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  to?: "/opportunities" | "/mentorship" | "/network" | "/organizations";
  label?: string;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="section-heading">{title}</h2>
        <p className="section-copy mt-2">{description}</p>
      </div>
      {to && (
        <Button asChild variant="link" className="h-auto px-0 text-xs">
          <Link to={to}>
            {label}
            <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
  );
}
