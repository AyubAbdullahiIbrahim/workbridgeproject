import { createFileRoute } from "@tanstack/react-router";
import { ExplorePage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/organizations")({
  head: () =>
    pageMeta(
      "Organizations",
      "Discover organizations supporting local experience, inclusive employment, and professional partnerships.",
    ),
  component: Page,
});
function Page() {
  return <ExplorePage mode="organizations" />;
}
