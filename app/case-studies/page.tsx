import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CaseStudyPreviewCards } from "@/components/case-study-preview-cards"

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8 w-full mx-auto">
      {/* Page Header */}
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore our portfolio of successful projects. Each case study showcases 
          real-world challenges, innovative solutions, and measurable results.
        </p>
      </div>

      <Separator />

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <p className="text-4xl font-bold">50+</p>
          <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-4xl font-bold">98%</p>
          <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-4xl font-bold">12</p>
          <p className="text-sm text-muted-foreground mt-1">Industries Served</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-4xl font-bold">$2M+</p>
          <p className="text-sm text-muted-foreground mt-1">Client Revenue Generated</p>
        </div>
      </div>

      <Separator />

      {/* Case Study Cards */}
      <CaseStudyPreviewCards />

      <Separator className="my-8" />

      {/* Footer Note */}
      <p className="text-sm text-muted-foreground">
        Interested in working with us?{" "}
        <Link
          href="/contact"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
        >
          Get in touch
        </Link>{" "}
        to discuss your next project.
      </p>
    </div>
  )
}

