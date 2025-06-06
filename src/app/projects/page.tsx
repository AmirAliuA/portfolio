"use client"

import { useState, useEffect } from "react"
import { DATA } from "@/data/resume"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Generate slugs from project titles
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Define project categories based on the projects
const getProjectCategory = (project: (typeof DATA.projects)[0]): string => {
  const title = project.title.toLowerCase()
  const description = project.description.toLowerCase()
  const technologies = project.technologies.join(" ").toLowerCase()

  if (technologies.includes("python") || technologies.includes("c++") || technologies.includes("c#") || technologies.includes("java")) {
    return "Desktop Applications"
  }
  if (technologies.includes("nextjs") || technologies.includes("next.js") || technologies.includes("react")) {
    return "Web Applications"
  }
  if (technologies.includes("react native") || technologies.includes("react expo") || technologies.includes("flutter")) {
    return "Mobile Applications"
  }
  if (technologies.includes("game") || technologies.includes("unity") || technologies.includes("unreal")) {
    return "Games"
  }
  if (technologies.includes("browser extension")) {
    return "Browser Extensions"
  }

  return "Web Applications" // Default category
}

// Get all unique categories
const getAllCategories = () => {
  if (!Array.isArray(DATA.projects)) return [];
  const categories = DATA.projects.map(getProjectCategory);
  return Array.from(new Set(categories)).sort();
}

export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  const allCategories = getAllCategories()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
  }

  // Filter projects based on selected categories
  const filteredProjects =
    selectedCategories.length === 0
      ? DATA.projects
      : DATA.projects.filter((project) => selectedCategories.includes(getProjectCategory(project)))

  return (
    <div className="container py-12 max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-3xl mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 dark:from-white/5 dark:via-transparent dark:to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl text-foreground">Projects</h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                A collection of my work in web development, cybersecurity, and other tech areas.
              </p>
            </div>
          </div>

          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 dark:ring-white/10" />
        </div>

        {/* Category Filter - Only render after mount */}
        {/*{mounted && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
              {selectedCategories.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-muted-foreground">
                  Clear filters
                </Button>
              )}
            </div>*/}

            {/* Show active filters */}
            {/*{selectedCategories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedCategories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                    <button onClick={() => toggleCategory(category)} className="ml-1 hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}*/}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              href={`/projects/${generateSlug(project.title)}`}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>

        {/* No results message */}
        {mounted && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected categories.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Show all projects
            </Button>
          </div>
        )}

        {/* Results count */}
        {mounted && (
          <div className="text-center text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {DATA.projects.length} projects
          </div>
        )}
      </div>
    </div>
  )
}