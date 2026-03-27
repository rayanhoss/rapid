import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/project-data";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug("commercial-demolition-retail-strip");
  if (!project) return {};
  return {
    title: `${project.title} — Philadelphia PA | Rapid Renovation`,
    description: project.desc,
    alternates: { canonical: `https://www.rapidrenovationdemolition.com/projects/commercial-demolition-retail-strip` },
    openGraph: {
      title: `${project.title} — Philadelphia PA | Rapid Renovation`,
      description: project.desc,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.imageAlt }],
      url: `https://www.rapidrenovationdemolition.com/projects/commercial-demolition-retail-strip`,
    },
  };
}

export default function Page() {
  const project = getProjectBySlug("commercial-demolition-retail-strip");
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
