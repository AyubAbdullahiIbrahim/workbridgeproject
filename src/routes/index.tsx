import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  Building2,
  HeartHandshake,
  Check,
  Sprout,
  Globe,
  GraduationCap,
  UserRound,
  Award,
  Search,
  Network,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell, SectionHeading } from "@/components/skillbridge/site-shell";
import { opportunities, mentors, pageMeta } from "@/components/skillbridge/data";
import { OpportunityCard } from "@/components/skillbridge/opportunity-card";
import hero from "@/assets/skillbridge-collaboration.png.asset.json";
export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageMeta(
      "Your Skills Deserve an Opportunity",
      "Connect with employers, discover opportunities, build professional relationships, and turn your skills into a brighter future with SkillBridge.",
    ),
});
function Index() {
  return (
    <SiteShell>
      <section className="hero">
        <img
          className="hero-image"
          src={hero.url}
          alt="Diverse professionals collaborating around a laptop in a welcoming workspace"
        />
        <div className="site-container hero-content">
          <div className="eyebrow mb-5 rounded-full border border-primary/20 bg-background/70 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> BUILDING CONNECTIONS. CREATING
            POSSIBILITIES.
          </div>
          <h1>
            Your Skills Deserve
            <br />
            an <span className="text-primary">Opportunity.</span>
          </h1>
          <p className="hero-copy mt-5">
            Connect with employers, discover opportunities, build professional relationships, and
            turn your skills into a brighter future.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="navy">
              <Link to="/opportunities">
                Explore Opportunities
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/join">
                Join SkillBridge
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-primary" />
              Skills without borders
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-primary" />
              Connections that matter
            </span>
          </div>
        </div>
      </section>
      <section className="border-b bg-background">
        <div className="site-container relative grid grid-cols-2 gap-y-7 py-8 md:grid-cols-4">
          {[
            { icon: Users, number: "2,500+", label: "Professionals registered" },
            { icon: BriefcaseBusiness, number: "350+", label: "Opportunities available" },
            { icon: Building2, number: "120+", label: "Organizations connected" },
            { icon: HeartHandshake, number: "800+", label: "Mentorship connections" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-center gap-4 ${i > 0 ? "md:border-l" : ""}`}
            >
              <s.icon size={27} strokeWidth={1.5} className="text-primary" />
              <div>
                <p className="stat-number">{s.number}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
          <span className="absolute bottom-1.5 right-0 text-[9px] text-muted-foreground">
            Illustrative platform statistics · Demo data
          </span>
        </div>
      </section>
      <section className="section-space bg-muted/60">
        <div className="site-container">
          <SectionHeading
            eyebrow="YOUR NEXT CHAPTER STARTS HERE"
            title="Opportunities that move you forward"
            description="Find meaningful work, gain experience, and put your skills to work."
            to="/opportunities"
            label="View all opportunities"
          />
          <div className="mb-5 flex items-center gap-2 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Featured jobs & internships · Demonstration data
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {opportunities.map((job) => (
              <OpportunityCard job={job} key={job.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="A LITTLE GUIDANCE. A BIG DIFFERENCE."
            title="Meet your next mentor"
            description="Learn from people who have been where you want to go."
            to="/mentorship"
            label="Explore mentorship"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {mentors.map((m) => (
              <article key={m.name} className="opportunity-card">
                <div className="flex items-center gap-4">
                  <div className={`company-logo ${m.tone} h-14 w-14 rounded-full text-lg`}>
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{m.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{m.title}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="tag">{m.company}</span>
                  <Button asChild variant="link" className="h-auto p-0 text-xs">
                    <Link to="/mentorship" aria-label={`Meet ${m.name}`}>
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground">
            Example mentor profiles · Demonstration data
          </p>
        </div>
      </section>
      <section className="border-y bg-muted/60 py-12">
        <div className="site-container flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-lg">
            <span className="eyebrow mb-2">BETTER TOGETHER</span>
            <h2 className="section-heading">A network that opens doors.</h2>
            <p className="section-copy mt-3">
              Connect with professionals who share your interests, exchange ideas, and build
              relationships that help you grow.
            </p>
          </div>
          <Button asChild variant="navy" size="lg">
            <Link to="/network">
              <Users />
              Build Your Network
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="text-center">
            <span className="eyebrow mb-3">SMALL STEPS. REAL POSSIBILITIES.</span>
            <h2 className="section-heading">Your journey with SkillBridge</h2>
            <p className="section-copy mt-2">From the skills you have to the future you want.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5">
            {[
              {
                icon: UserRound,
                title: "Create your profile",
                copy: "Introduce yourself and your professional story.",
              },
              {
                icon: Award,
                title: "Showcase your skills",
                copy: "Share your experience and what makes you unique.",
              },
              {
                icon: Search,
                title: "Discover opportunities",
                copy: "Find roles that align with your ambitions.",
              },
              {
                icon: Network,
                title: "Make connections",
                copy: "Meet employers, professionals, and mentors.",
              },
              {
                icon: Sprout,
                title: "Grow your career",
                copy: "Build experience and take your next step.",
              },
            ].map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="step-number">
                  <step.icon size={21} />
                </div>
                <p className="mt-4 text-[10px] font-semibold text-primary">STEP 0{i + 1}</p>
                <h3 className="mt-2 text-xs font-semibold">{step.title}</h3>
                <p className="section-copy mt-2 text-[11px]">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t py-10">
        <div className="site-container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium text-muted-foreground">
              A shared vision. A stronger community.
            </p>
            <Button asChild variant="link" className="h-auto px-0 text-xs">
              <Link to="/organizations">
                Meet our partner organizations
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-7">
            <span className="partner">
              <Globe />
              Community Connect
            </span>
            <span className="partner">
              <Sprout />
              impact<span className="font-normal">hub</span>
            </span>
            <span className="partner">
              <GraduationCap />
              FutureWorks
            </span>
            <span className="partner">
              <Handshake />
              Open Horizons
            </span>
          </div>
          <p className="mt-5 text-[9px] text-muted-foreground">
            Illustrative partner organizations · Demo data
          </p>
        </div>
      </section>
      <section className="sdg-strip py-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-[10px] font-semibold text-primary">OPPORTUNITY WITH PURPOSE</p>
            <h2 className="mt-2 text-xl font-semibold">Building a more inclusive future.</h2>
            <p className="mt-3 text-xs leading-6 opacity-75">
              Aligned with the United Nations Sustainable Development Goals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { n: "8", title: "Decent Work", copy: "& Economic Growth" },
              { n: "10", title: "Reduced", copy: "Inequalities" },
              { n: "17", title: "Partnerships", copy: "for the Goals" },
            ].map((g) => (
              <div className="flex items-center gap-3" key={g.n}>
                <span className="sdg-icon">{g.n}</span>
                <div>
                  <p className="text-xs font-semibold">{g.title}</p>
                  <p className="mt-1 text-[10px] opacity-75">{g.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
