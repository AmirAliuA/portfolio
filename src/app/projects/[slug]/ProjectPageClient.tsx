"use client"

import { useState, useEffect } from "react"
import { DATA } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/image-modal"
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const foundProject = DATA.projects.find((p) => generateSlug(p.title) === params.slug)
  if (!foundProject) {
    notFound()
  }

  // Use `as any` to prevent type errors on optional properties
  const project = foundProject as any

  const allImages = []

  if (project.postImages && project.postImages.length > 0) {
    allImages.push(...project.postImages)
  } else if (project.image) {
    allImages.push({
      src: project.postImages,
      alt: project.title,
      caption: `${project.title} - Main Image`,
    })
  }

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index)
    setModalOpen(true)
  }

  // Fix for hydration issues - don't render interactive elements until client-side
  if (!mounted) {
    return (
      <div className="container py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{project.dates}</span>
              {project.active && <Badge className="ml-2 bg-green-500">Active</Badge>}
            </div>
          </div>

          {/* Static placeholder for media */}
          {(project.video || project.image || (project.images && project.images.length > 0)) && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              {project.video ? (
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Video loading...</span>
                </div>
              ) : allImages.length > 0 ? (
                <div className="relative h-full w-full">
                  <Image
                    src={allImages[0].src || "/placeholder.svg"}
                    alt={allImages[0].alt || project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              ) : null}
            </div>
          )}

          {/* Rest of content without interactive elements */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>About this project</h2>
            <p className="text-lg leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Project header */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{project.dates}</span>
            {project.active && <Badge className="ml-2 bg-green-500 hover:bg-green-600">Active</Badge>}
          </div>
        </div>

        {/* Hero media - video or first image */}
        {(project.video || project.image || (project.images && project.images.length > 0)) && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted group">
            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : allImages.length > 0 ? (
              <div
                className="relative h-full w-full cursor-pointer transition-transform hover:scale-105"
                onClick={() => openImageModal(0)}
              >
                <Image
                  src={allImages[0].src || "/placeholder.svg"}
                  alt={allImages[0].alt || project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    Click to view full size
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Project description */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>About this project</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Project Gallery - Multiple Images */}
        {allImages.length > 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Project Gallery</h2>
            <div className="space-y-8">
              {allImages.slice(1).map((img, index) => (
                <div key={index} className="space-y-3">
                  <div
                    className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted group cursor-pointer"
                    onClick={() => openImageModal(index + 1)}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt || `${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                        Click to view full size
                      </div>
                    </div>
                  </div>
                  {img.caption && <p className="text-sm text-muted-foreground text-center italic">{img.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link: { href: string; icon: React.ReactNode; type: string }, index: number) => (
                <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    {link.icon}
                    {link.type}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Additional project details */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Status</h3>
              <p className="text-muted-foreground">{project.active ? "Active Development" : "Completed"}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.dates}</p>
            </div>
          </div>
        </div>

        {/* Related projects */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.projects
              .filter((p) => p.title !== project.title)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.title}
                  href={`/projects/${generateSlug(relatedProject.title)}`}
                  className="block"
                >
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold mb-2">{relatedProject.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedProject.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {allImages.length > 0 && (
        <ImageModal
          images={allImages}
          currentIndex={selectedImageIndex}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={project.title}
        />
      )}
    </div>
  )
}