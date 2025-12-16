"use client"

import { componentDemos } from "@/components/component-demos"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ComponentDemoWrapperProps {
  slug: string
}

export function ComponentDemoWrapper({ slug }: ComponentDemoWrapperProps) {
  const DemoComponent = componentDemos[slug]

  if (!DemoComponent) {
    return (
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">Preview coming soon for this component.</p>
        <Button asChild variant="outline">
          <Link href="/docs/components">Back to Components</Link>
        </Button>
      </div>
    )
  }

  return <DemoComponent />
}

