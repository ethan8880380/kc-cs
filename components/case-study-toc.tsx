"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
}

interface CaseStudyTableOfContentsProps {
  items: TocItem[]
  className?: string
}

export function CaseStudyTableOfContents({ items, className }: CaseStudyTableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-80px 0% -80% 0%",
        threshold: 0,
      }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveId(id)
    }
  }

  return (
    <nav className={cn("space-y-1", className)}>
      <p className="text-sm font-medium text-muted-foreground mb-4">On this page</p>
      <div className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={cn(
              "block py-1 text-sm transition-colors",
              activeId === item.id
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  )
}
