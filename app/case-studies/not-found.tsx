import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudyNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Case Study Not Found</h1>
        <p className="text-muted-foreground max-w-md">
          The case study you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button asChild>
        <Link href="/case-studies" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>
      </Button>
    </div>
  )
}

