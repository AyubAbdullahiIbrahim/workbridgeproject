import { createFileRoute } from "@tanstack/react-router";
import { ExplorePage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/mentorship")({
  head: () =>
    pageMeta(
      "Mentorship",
      "Meet experienced professionals and explore career guidance with SkillBridge.",
    ),
  component: Page,
});
function Page() {
  return <ExplorePage mode="mentorship" />;
}
