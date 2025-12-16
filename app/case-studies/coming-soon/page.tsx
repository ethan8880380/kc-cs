import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Clock className="h-10 w-10 text-muted-foreground" />
      </div>
      
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Coming Soon</h1>
        <p className="text-muted-foreground max-w-md">
          This case study is currently being written. Check back soon for the full story
          of how we tackled this project.
        </p>
      </div>

      <Button variant="outline" asChild>
        <Link href="/case-studies" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>
      </Button>
    </div>
  )
}

