import { createFileRoute } from "@tanstack/react-router";
import { InformationPage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/join")({
  head: () =>
    pageMeta(
      "Join SkillBridge",
      "Explore membership for professionals, employers, mentors, and organizations on SkillBridge.",
    ),
  component: Page,
});
function Page() {
  return <InformationPage kind="join" />;
}
