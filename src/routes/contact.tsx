import { createFileRoute } from "@tanstack/react-router";
import { InformationPage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact",
      "Connect with the SkillBridge community and explore partnership opportunities.",
    ),
  component: Page,
});
function Page() {
  return <InformationPage kind="contact" />;
}
