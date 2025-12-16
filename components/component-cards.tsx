import Link from "next/link"
import { cn } from "@/lib/utils"

const components = [
  { name: "Accordion", href: "/docs/components/accordion" },
  { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
  { name: "Alert", href: "/docs/components/alert" },
  { name: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
  { name: "Avatar", href: "/docs/components/avatar" },
  { name: "Badge", href: "/docs/components/badge" },
  { name: "Breadcrumb", href: "/docs/components/breadcrumb" },
  { name: "Button Group", href: "/docs/components/button-group" },
  { name: "Button", href: "/docs/components/button" },
  { name: "Calendar", href: "/docs/components/calendar" },
  { name: "Card", href: "/docs/components/card" },
  { name: "Carousel", href: "/docs/components/carousel" },
  { name: "Chart", href: "/docs/components/chart" },
  { name: "Checkbox", href: "/docs/components/checkbox" },
  { name: "Collapsible", href: "/docs/components/collapsible" },
  { name: "Combobox", href: "/docs/components/combobox" },
  { name: "Command", href: "/docs/components/command" },
  { name: "Context Menu", href: "/docs/components/context-menu" },
  { name: "Data Table", href: "/docs/components/data-table" },
  { name: "Date Picker", href: "/docs/components/date-picker" },
  { name: "Dialog", href: "/docs/components/dialog" },
  { name: "Drawer", href: "/docs/components/drawer" },
  { name: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
  { name: "Empty", href: "/docs/components/empty" },
  { name: "Field", href: "/docs/components/field" },
  { name: "Form", href: "/docs/components/form" },
  { name: "Hover Card", href: "/docs/components/hover-card" },
  { name: "Input Group", href: "/docs/components/input-group" },
  { name: "Input OTP", href: "/docs/components/input-otp" },
  { name: "Input", href: "/docs/components/input" },
  { name: "Item", href: "/docs/components/item" },
  { name: "Kbd", href: "/docs/components/kbd" },
  { name: "Label", href: "/docs/components/label" },
  { name: "Menubar", href: "/docs/components/menubar" },
  { name: "Native Select", href: "/docs/components/native-select" },
  { name: "Navigation Menu", href: "/docs/components/navigation-menu" },
  { name: "Pagination", href: "/docs/components/pagination" },
  { name: "Popover", href: "/docs/components/popover" },
  { name: "Progress", href: "/docs/components/progress" },
  { name: "Radio Group", href: "/docs/components/radio-group" },
  { name: "Resizable", href: "/docs/components/resizable" },
  { name: "Scroll Area", href: "/docs/components/scroll-area" },
  { name: "Select", href: "/docs/components/select" },
  { name: "Separator", href: "/docs/components/separator" },
  { name: "Sheet", href: "/docs/components/sheet" },
  { name: "Sidebar", href: "/docs/components/sidebar" },
  { name: "Skeleton", href: "/docs/components/skeleton" },
  { name: "Slider", href: "/docs/components/slider" },
  { name: "Sonner", href: "/docs/components/sonner" },
  { name: "Spinner", href: "/docs/components/spinner" },
  { name: "Switch", href: "/docs/components/switch" },
  { name: "Table", href: "/docs/components/table" },
  { name: "Tabs", href: "/docs/components/tabs" },
  { name: "Textarea", href: "/docs/components/textarea" },
  { name: "Toast", href: "/docs/components/toast" },
  { name: "Toggle Group", href: "/docs/components/toggle-group" },
  { name: "Toggle", href: "/docs/components/toggle" },
  { name: "Tooltip", href: "/docs/components/tooltip" },
  { name: "Typography", href: "/docs/components/typography" },
]

export function ComponentCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {components.map((component) => (
        <Link
          key={component.name}
          href={component.href}
          className={cn(
            "group relative rounded-lg border p-4 hover:bg-muted/50 transition-colors",
            "flex items-center justify-between"
          )}
        >
          <span className="text-sm font-medium">{component.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  )
}

