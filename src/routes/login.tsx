import { createFileRoute } from "@tanstack/react-router";
import { InformationPage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/login")({
  head: () =>
    pageMeta("Account Access", "Account access and secure sign-in information for SkillBridge."),
  component: Page,
});
function Page() {
  return <InformationPage kind="login" />;
}
