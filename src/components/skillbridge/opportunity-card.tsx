import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { opportunities } from "./data";
export function OpportunityCard({ job }: { job: (typeof opportunities)[number] }) {
  return (
    <article className="opportunity-card flex h-full flex-col">
      <div className="mb-5 flex items-center justify-between">
        <div className={`company-logo ${job.tone}`}>{job.logo}</div>
        <span className={`tag ${job.type === "Internship" ? "tag-teal" : ""}`}>{job.type}</span>
      </div>
      <h3 className="text-[15px] font-semibold leading-6">{job.title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{job.company}</p>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin size={13} />
        {job.location}
      </p>
      <div className="mb-5 mt-4 flex flex-wrap gap-2">
        <span className="tag">{job.category}</span>
        <span className="tag">{job.experience}</span>
      </div>
      <div className="mt-auto flex items-center justify-between border-t pt-4">
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Clock3 size={12} />
          {job.time}
        </span>
        <Button asChild variant="link" className="h-auto p-0 text-xs">
          <Link to="/opportunities" search={{ q: job.title }}>
            View opportunity
            <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
