import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/components"
      className="group inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <span className="mr-2 rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
        New
      </span>
      <Separator orientation="vertical" className="mx-2 h-4" />
      <span className="text-muted-foreground">
        Introducing the Registry Directory
      </span>
      <ArrowRight className="ml-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

