import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, MapPin, ArrowRight, Users, Building2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteShell } from "./site-shell";
import { opportunities, mentors } from "./data";
import { OpportunityCard } from "./opportunity-card";
export function ExplorePage({
  mode,
  initialQuery = "",
}: {
  mode: "opportunities" | "network" | "mentorship" | "organizations";
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("All categories");
  const [location, setLocation] = useState("All locations");
  const [experience, setExperience] = useState("All experience levels");
  const titles = {
    opportunities: "Find your next opportunity.",
    network: "Your people. Your possibilities.",
    mentorship: "Experience worth sharing.",
    organizations: "Stronger partnerships. Greater impact.",
  };
  const descriptions = {
    opportunities:
      "Discover meaningful jobs and internships that connect your skills to your next chapter.",
    network: "Discover professionals, shared interests, and fresh perspectives.",
    mentorship: "Meet professionals who can help you navigate your career journey.",
    organizations: "Meet organizations working toward a more inclusive professional future.",
  };
  const filtered = opportunities.filter(
    (j) =>
      `${j.title} ${j.company}`.toLowerCase().includes(query.toLowerCase()) &&
      (category === "All categories" || j.category === category) &&
      (location === "All locations" || j.location === location) &&
      (experience === "All experience levels" || j.experience === experience),
  );
  const people = mentors.filter((m) =>
    `${m.name} ${m.title} ${m.company}`.toLowerCase().includes(query.toLowerCase()),
  );
  const orgs = [
    {
      name: "Community Connect",
      logo: "C",
      mission: "Strengthening local communities through inclusive programs and work experience.",
    },
    {
      name: "Impact Hub",
      logo: "ih",
      mission: "Connecting innovators and professionals to create positive social change.",
    },
    {
      name: "FutureWorks",
      logo: "fw",
      mission: "Bridging education and employment with practical professional development.",
    },
    {
      name: "Open Horizons",
      logo: "oh",
      mission: "Opening pathways to employment for displaced people and local communities.",
    },
  ].filter((o) => o.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <SiteShell>
      <section className="border-b bg-muted py-14">
        <div className="site-container">
          <span className="eyebrow mb-4">CONNECTING SKILLS, PEOPLE AND OPPORTUNITIES</span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight">{titles[mode]}</h1>
          <p className="section-copy mt-4 max-w-2xl">{descriptions[mode]}</p>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="mb-7 rounded-md border border-primary/20 bg-success-soft px-4 py-3 text-xs leading-6 text-success">
            Demonstration directory · All listings and profiles below are examples. Applications,
            connections, and mentorship requests will be available after account services are
            connected.
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            <label className="relative min-w-60 flex-1">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={17} />
              <Input
                aria-label={mode === "opportunities" ? "Search by job title" : "Search directory"}
                placeholder={
                  mode === "opportunities"
                    ? "Search job title or organization"
                    : "Search names or specialties"
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-11 pl-10"
              />
            </label>
            {mode === "opportunities" && (
              <>
                {[
                  {
                    label: "Category",
                    value: category,
                    set: setCategory,
                    values: [
                      "All categories",
                      "Technology",
                      "Education",
                      "Healthcare",
                      "Business",
                      "Engineering",
                      "Administration",
                      "Community Development",
                      "Other",
                    ],
                  },
                  {
                    label: "Location",
                    value: location,
                    set: setLocation,
                    values: ["All locations", "Nairobi, Kenya", "Kampala, Uganda", "Remote"],
                  },
                  {
                    label: "Experience level",
                    value: experience,
                    set: setExperience,
                    values: ["All experience levels", "Entry-level", "Mid-level", "Senior"],
                  },
                ].map((f) => (
                  <select
                    key={f.label}
                    aria-label={f.label}
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    className="h-11 rounded-md border border-input bg-background px-3 text-xs"
                  >
                    {f.values.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                ))}
              </>
            )}
          </div>
          {mode === "opportunities" ? (
            <>
              <p className="mb-4 text-xs text-muted-foreground">
                {filtered.length} example {filtered.length === 1 ? "opportunity" : "opportunities"}
              </p>
              <div className="grid gap-5 md:grid-cols-3">
                {filtered.map((job) => (
                  <div key={job.id}>
                    <OpportunityCard job={job} />
                    <details className="mt-3 rounded-md border p-4 text-xs">
                      <summary className="cursor-pointer font-medium">Role overview</summary>
                      <p className="mt-3 leading-6 text-muted-foreground">{job.description}</p>
                    </details>
                  </div>
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="py-16 text-center">
                  <Search className="mx-auto mb-4 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">No matching opportunities</h2>
                  <p className="section-copy mt-2">Try another title, location, or category.</p>
                  <Button
                    variant="outline"
                    className="mt-5"
                    onClick={() => {
                      setQuery("");
                      setCategory("All categories");
                      setLocation("All locations");
                      setExperience("All experience levels");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </>
          ) : mode === "organizations" ? (
            <div className="grid gap-5 md:grid-cols-2">
              {orgs.map((o) => (
                <article className="opportunity-card" key={o.name}>
                  <div className="flex items-center gap-4">
                    <span className="company-logo teal">{o.logo}</span>
                    <h2 className="font-semibold">{o.name}</h2>
                  </div>
                  <p className="section-copy mt-4">{o.mission}</p>
                  <details className="mt-5 border-t pt-4 text-xs">
                    <summary className="cursor-pointer font-medium">Partnership focus</summary>
                    <p className="mt-3 leading-6 text-muted-foreground">
                      Employment access, local work experience, training programs, and community
                      collaboration.
                    </p>
                  </details>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {people.map((m) => (
                <article className="opportunity-card" key={m.name}>
                  <div className={`company-logo ${m.tone} mb-5 h-16 w-16 rounded-full`}>
                    {m.initials}
                  </div>
                  <h2 className="font-semibold">{m.name}</h2>
                  <p className="section-copy mt-1">{m.title}</p>
                  <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin size={14} />
                    {m.location}
                  </p>
                  <p className="section-copy mt-4">{m.bio}</p>
                  <details className="mt-5 border-t pt-4 text-xs">
                    <summary className="cursor-pointer font-medium">
                      {mode === "mentorship" ? "Mentorship interests" : "Professional interests"}
                    </summary>
                    <p className="mt-3 leading-6 text-muted-foreground">
                      {m.company} · Career development · Inclusive professional communities
                    </p>
                  </details>
                </article>
              ))}
            </div>
          )}
          {mode !== "opportunities" &&
            (mode === "organizations" ? orgs.length : people.length) === 0 && (
              <p className="py-12 text-center text-muted-foreground">
                No matching profiles. Try a different name or specialty.
              </p>
            )}
          {mode === "mentorship" && (
            <div className="mt-12 border-t pt-8">
              <h2 className="section-heading">Training & professional development</h2>
              <p className="section-copy mt-3">
                Upcoming workshops and events will appear here when organizations begin publishing
                programs. No events are currently scheduled.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
export function InformationPage({
  kind,
}: {
  kind: "about" | "contact" | "privacy" | "terms" | "login" | "join";
}) {
  const content = {
    about: {
      title: "Opportunity belongs to everyone.",
      subtitle: "About SkillBridge",
      body: "SkillBridge connects skilled individuals, refugees, graduates, job seekers, employers, mentors, NGOs, and local communities. Our mission is to reduce employment inequalities by making skills visible, professional relationships accessible, and meaningful opportunities easier to discover.",
    },
    contact: {
      title: "Let’s build bridges together.",
      subtitle: "Contact SkillBridge",
      body: "We welcome professionals, employers, mentors, and organizations who share our vision. Direct contact details have not yet been provided. In the meantime, explore our community and partnership directories.",
    },
    privacy: {
      title: "Your privacy matters.",
      subtitle: "Privacy Policy · Draft",
      body: "SkillBridge is currently in its demonstration stage. The sample directory does not contain real member records, and account registration is not yet enabled. A complete privacy policy covering account data, profile visibility, retention, and your rights will be published before personal data is collected.",
    },
    terms: {
      title: "A community built on respect.",
      subtitle: "Terms of Service · Draft",
      body: "SkillBridge’s current demonstration pages are for exploration only. Example opportunities do not accept real applications. Members will be expected to share accurate professional information, respect others, and use the platform lawfully. Complete terms will be provided before registration launches.",
    },
    login: {
      title: "Welcome back to SkillBridge.",
      subtitle: "Account access · Next stage",
      body: "Sign-in is not enabled yet. This first stage introduces SkillBridge and its demonstration directories. Secure registration, login, password reset, and personalized dashboards are the next stage of development.",
    },
    join: {
      title: "Your next chapter starts here.",
      subtitle: "Join SkillBridge · Next stage",
      body: "SkillBridge will welcome professionals, employers, mentors, and organization administrators. Account registration is not enabled yet. Explore the demonstration directories while secure account services and professional profiles are prepared.",
    },
  };
  const c = content[kind];
  return (
    <SiteShell>
      <section className="min-h-[560px] bg-muted py-20">
        <div className="site-container">
          <span className="eyebrow mb-5">{c.subtitle}</span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight">{c.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{c.body}</p>
          {kind === "about" && (
            <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Skills without borders",
                  copy: "Inclusive pathways for every professional.",
                },
                {
                  icon: HeartHandshake,
                  title: "Relationships that matter",
                  copy: "Connect with guidance, experience, and community.",
                },
                {
                  icon: Building2,
                  title: "Shared opportunity",
                  copy: "Supporting SDGs 8, 10, and 17 through collaboration.",
                },
              ].map((i) => (
                <div key={i.title}>
                  <i.icon className="mb-4 text-primary" />
                  <h2 className="text-sm font-semibold">{i.title}</h2>
                  <p className="section-copy mt-2">{i.copy}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="navy">
              <Link to="/opportunities">
                Explore Opportunities
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/organizations">Meet Organizations</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
