import { createFileRoute } from "@tanstack/react-router";
import { InformationPage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta(
      "Terms of Service",
      "Read the current terms information for the SkillBridge demonstration platform.",
    ),
  component: Page,
});
function Page() {
  return <InformationPage kind="terms" />;
}
