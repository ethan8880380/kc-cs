"use client"

import Link from "next/link"
import { Github, Menu, Search, Triangle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mainNav = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/docs/components" },
  { title: "Case Studies", href: "/case-studies" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
            <div className="flex h-6 w-6 items-center justify-center">
              <Triangle className="h-5 w-5 fill-current" />
            </div>
            <span className="hidden font-bold lg:inline-block">
              kc/ui
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm xl:gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  "text-foreground/80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <Link href="/" className="mr-4 flex items-center gap-2 md:hidden">
          <Triangle className="h-5 w-5 fill-current" />
          <span className="font-bold">kc/ui</span>
        </Link>
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              className="relative h-8 w-full justify-start rounded-md bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
            >
              <Search className="mr-2 h-4 w-4" />
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          <nav className="flex items-center gap-0.5">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/shadcn-ui/ui"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

