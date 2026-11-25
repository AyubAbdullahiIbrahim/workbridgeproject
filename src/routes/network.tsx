import { createFileRoute } from "@tanstack/react-router";
import { ExplorePage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/network")({
  head: () =>
    pageMeta(
      "Professional Network",
      "Discover professionals and build meaningful relationships in an inclusive SkillBridge community.",
    ),
  component: Page,
});
function Page() {
  return <ExplorePage mode="network" />;
}
