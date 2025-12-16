import Link from "next/link"
import { ArrowRight, Github, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Announcement } from "@/components/announcement"

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:py-10">
      <Announcement />
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Build your component library
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          A set of beautifully-designed, accessible components and a code distribution
          platform. Works with your favorite frameworks. Open Source. Open Code.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg" className="h-11 px-8">
          <Link href="/docs">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="h-11 px-8" asChild>
          <Link href="https://github.com/shadcn-ui/ui" target="_blank">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2">
        <code className="text-sm">npx shadcn@latest init</code>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Copy className="h-3 w-3" />
          <span className="sr-only">Copy</span>
        </Button>
      </div>
    </section>
  )
}

