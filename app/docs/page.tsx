import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Internal Design System
        </h1>
        <p className="text-xl text-muted-foreground">
          Our internal design system — a collection of beautifully-designed, 
          accessible components we use across all our internal sites and applications.
        </p>
      </div>
      <Separator />
      <div className="space-y-4">
        <p className="leading-7">
          This design system serves as the single source of truth for our UI components. 
          It ensures consistency, accessibility, and a unified experience across all 
          internal projects.
        </p>
        <p className="leading-7">
          <strong>Why a shared design system?</strong>
        </p>
        <p className="leading-7">
          By maintaining a centralized collection of components, we reduce duplication, 
          speed up development, and ensure every internal site feels cohesive. Teams can 
          focus on building features rather than recreating common UI patterns.
        </p>
        <p className="leading-7">
          <strong>How to use these components?</strong>
        </p>
        <p className="leading-7">
          Browse the components section to find what you need. Each component comes with 
          examples, usage guidelines, and copy-ready code. Simply grab what you need 
          and integrate it into your project.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/docs/installation">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components">
            Components
          </Link>
        </Button>
      </div>
    </div>
  )
}

