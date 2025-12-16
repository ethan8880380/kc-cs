"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface NavItem {
  title: string
  href: string
  isNew?: boolean
}

interface NavSection {
  title: string
  items: NavItem[]
}

const sidebarNav: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Calendar", href: "/docs/components/calendar" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Collapsible", href: "/docs/components/collapsible" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Hover Card", href: "/docs/components/hover-card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Kbd", href: "/docs/components/kbd" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Scroll Area", href: "/docs/components/scroll-area" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sheet", href: "/docs/components/sheet" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Slider", href: "/docs/components/slider" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toggle", href: "/docs/components/toggle" },
      { title: "Toggle Group", href: "/docs/components/toggle-group" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {sidebarNav.map((section, index) => (
        <div key={section.title} className={cn("pb-4", index !== 0 && "pt-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                  pathname === item.href
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
                {item.isNew && (
                  <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-[10px]">
                    New
                  </Badge>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

