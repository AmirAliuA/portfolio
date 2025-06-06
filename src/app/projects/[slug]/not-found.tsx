import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container py-12 max-w-4xl mx-auto text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    </div>
  )
}