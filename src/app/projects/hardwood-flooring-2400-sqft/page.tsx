import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/project-data";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug("hardwood-flooring-2400-sqft");
  if (!project) return {};
  return {
    title: `${project.title} — Philadelphia PA | Rapid Renovation`,
    description: project.desc,
    alternates: { canonical: `https://www.rapidrenovationdemolition.com/projects/hardwood-flooring-2400-sqft` },
    openGraph: {
      title: `${project.title} — Philadelphia PA | Rapid Renovation`,
      description: project.desc,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.imageAlt }],
      url: `https://www.rapidrenovationdemolition.com/projects/hardwood-flooring-2400-sqft`,
    },
  };
}

export default function Page() {
  const project = getProjectBySlug("hardwood-flooring-2400-sqft");
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
