import ProjectPageClient from "./ProjectPageClient"
import { DATA } from "@/data/resume"
import type { Metadata } from "next"

// Generate slugs from project titles
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Generate static params for all projects
export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: generateSlug(project.title),
  }))
}

// Generate metadata for each project page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = DATA.projects.find((p) => generateSlug(p.title) === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Amir Aliu`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectPageClient params={params} />
}