import { createFileRoute } from "@tanstack/react-router";
import { InformationPage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta(
      "Privacy Policy",
      "Read the current privacy information for the SkillBridge demonstration platform.",
    ),
  component: Page,
});
function Page() {
  return <InformationPage kind="privacy" />;
}
