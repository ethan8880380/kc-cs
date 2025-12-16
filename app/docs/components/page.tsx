import Link from "next/link"
import { ArrowLeft, ArrowRight, Copy } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ComponentPreviewCards } from "@/components/component-preview-cards"

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <span>/</span>
        <span className="text-foreground">Components</span>
      </div>

      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Components
          </h1>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Copy className="h-3.5 w-3.5" />
            Copy Page
          </Button>
        </div>
        <p className="text-xl text-muted-foreground">
          Here you can find all the components available in the library. We are
          working on adding more components.
        </p>
      </div>

      <Separator />

      {/* Component Preview Cards */}
      <ComponentPreviewCards />

      <Separator className="my-8" />

      {/* Footer Note */}
      <p className="text-sm text-muted-foreground">
        Can&apos;t find what you need? Try the{" "}
        <Link
          href="/directory"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
        >
          registry directory
        </Link>{" "}
        for community-maintained components.
      </p>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Button variant="ghost" asChild>
          <Link href="/docs" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Legacy Docs
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/docs/components/accordion" className="gap-2">
            Accordion
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
