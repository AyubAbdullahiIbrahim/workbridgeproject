export const opportunities = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "TechForward",
    location: "Nairobi, Kenya",
    category: "Technology",
    type: "Full-time",
    experience: "Mid-level",
    logo: "tf",
    tone: "teal",
    time: "2 days ago",
    description:
      "Build accessible, thoughtful digital experiences with a collaborative product team. Experience with React, HTML, and CSS is welcomed.",
  },
  {
    id: "community-officer",
    title: "Community Development Officer",
    company: "Community Connect",
    location: "Kampala, Uganda",
    category: "Community Development",
    type: "Full-time",
    experience: "Entry-level",
    logo: "C",
    tone: "warm",
    time: "3 days ago",
    description:
      "Work alongside local communities to coordinate inclusive programs and strengthen access to professional opportunities.",
  },
  {
    id: "marketing-intern",
    title: "Marketing & Communications Intern",
    company: "Impact Hub",
    location: "Remote",
    category: "Business",
    type: "Internship",
    experience: "Entry-level",
    logo: "ih",
    tone: "violet",
    time: "1 day ago",
    description:
      "Gain practical experience creating community stories, supporting campaigns, and collaborating with a mission-driven organization.",
  },
];
export const mentors = [
  {
    name: "Amina Hassan",
    initials: "AH",
    title: "Senior Product Designer",
    company: "Technology & Design",
    location: "Nairobi, Kenya",
    tone: "teal",
    bio: "Supporting emerging designers as they build portfolios and take their next career step.",
  },
  {
    name: "David Okello",
    initials: "DO",
    title: "Business Development Lead",
    company: "Business & Leadership",
    location: "Kampala, Uganda",
    tone: "warm",
    bio: "Helping professionals strengthen their networks, leadership skills, and confidence.",
  },
  {
    name: "Sarah Mwangi",
    initials: "SM",
    title: "Software Engineer",
    company: "Software & Technology",
    location: "Remote",
    tone: "violet",
    bio: "Guiding early-career developers through practical projects and career transitions.",
  },
];
export const pageMeta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | SkillBridge` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | SkillBridge` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
