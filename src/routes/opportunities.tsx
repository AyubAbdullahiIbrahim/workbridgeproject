import { createFileRoute } from "@tanstack/react-router";
import { ExplorePage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/opportunities")({
  validateSearch: (search: Record<string, unknown>): { q?: string } =>
    typeof search["q"] === "string" ? { q: search["q"] } : {},
  head: () =>
    pageMeta(
      "Find Opportunities",
      "Explore jobs and internships with SkillBridge. Search by role, location, category, and experience.",
    ),
  component: Opportunities,
});
function Opportunities() {
  const { q } = Route.useSearch();
  return <ExplorePage mode="opportunities" initialQuery={q ?? ""} />;
}
