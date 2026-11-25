import { createFileRoute } from "@tanstack/react-router";
import { InformationPage } from "@/components/skillbridge/explore-page";
import { pageMeta } from "@/components/skillbridge/data";
export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Us",
      "Learn about SkillBridge and our commitment to connecting skills, people, and opportunities.",
    ),
  component: Page,
});
function Page() {
  return <InformationPage kind="about" />;
}
