import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/project-data";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug("drywall-paint-full-home");
  if (!project) return {};
  return {
    title: `${project.title} — Philadelphia PA | Rapid Renovation`,
    description: project.desc,
    alternates: { canonical: `https://www.rapidrenovationdemolition.com/projects/drywall-paint-full-home` },
    openGraph: {
      title: `${project.title} — Philadelphia PA | Rapid Renovation`,
      description: project.desc,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.imageAlt }],
      url: `https://www.rapidrenovationdemolition.com/projects/drywall-paint-full-home`,
    },
  };
}

export default function Page() {
  const project = getProjectBySlug("drywall-paint-full-home");
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
