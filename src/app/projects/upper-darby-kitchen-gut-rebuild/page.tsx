import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/project-data";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug("upper-darby-kitchen-gut-rebuild");
  if (!project) return {};
  return {
    title: `${project.title} — Philadelphia PA | Rapid Renovation`,
    description: project.desc,
    alternates: { canonical: `https://www.rapidrenovationdemolition.com/projects/upper-darby-kitchen-gut-rebuild` },
    openGraph: {
      title: `${project.title} — Philadelphia PA | Rapid Renovation`,
      description: project.desc,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.imageAlt }],
      url: `https://www.rapidrenovationdemolition.com/projects/upper-darby-kitchen-gut-rebuild`,
    },
  };
}

export default function Page() {
  const project = getProjectBySlug("upper-darby-kitchen-gut-rebuild");
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
