"use client"

import * as React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, ChevronRight, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ComponentDemoWrapper } from "./demo-wrapper"

// Map of component slugs to display names
const componentNames: Record<string, string> = {
  "accordion": "Accordion",
  "alert-dialog": "Alert Dialog",
  "alert": "Alert",
  "aspect-ratio": "Aspect Ratio",
  "avatar": "Avatar",
  "badge": "Badge",
  "breadcrumb": "Breadcrumb",
  "button": "Button",
  "button-group": "Button Group",
  "calendar": "Calendar",
  "card": "Card",
  "carousel": "Carousel",
  "chart": "Chart",
  "checkbox": "Checkbox",
  "collapsible": "Collapsible",
  "combobox": "Combobox",
  "command": "Command",
  "context-menu": "Context Menu",
  "data-table": "Data Table",
  "date-picker": "Date Picker",
  "dialog": "Dialog",
  "drawer": "Drawer",
  "dropdown-menu": "Dropdown Menu",
  "empty": "Empty",
  "field": "Field",
  "form": "Form",
  "hover-card": "Hover Card",
  "input-group": "Input Group",
  "input-otp": "Input OTP",
  "input": "Input",
  "item": "Item",
  "kbd": "Kbd",
  "label": "Label",
  "menubar": "Menubar",
  "native-select": "Native Select",
  "navigation-menu": "Navigation Menu",
  "pagination": "Pagination",
  "popover": "Popover",
  "progress": "Progress",
  "radio-group": "Radio Group",
  "resizable": "Resizable",
  "scroll-area": "Scroll Area",
  "select": "Select",
  "separator": "Separator",
  "sheet": "Sheet",
  "sidebar": "Sidebar",
  "skeleton": "Skeleton",
  "slider": "Slider",
  "sonner": "Sonner",
  "spinner": "Spinner",
  "switch": "Switch",
  "table": "Table",
  "tabs": "Tabs",
  "textarea": "Textarea",
  "toast": "Toast",
  "toggle-group": "Toggle Group",
  "toggle": "Toggle",
  "tooltip": "Tooltip",
  "typography": "Typography",
}

const componentDescriptions: Record<string, string> = {
  "accordion": "A vertically stacked set of interactive headings that each reveal a section of content.",
  "alert": "Displays a callout for user attention.",
  "alert-dialog": "A modal dialog that interrupts the user with important content and expects a response.",
  "avatar": "An image element with a fallback for representing the user.",
  "badge": "Displays a badge or a component that looks like a badge.",
  "button": "Displays a button or a component that looks like a button.",
  "calendar": "A date field component that allows users to enter and edit date.",
  "card": "Displays a card with header, content, and footer.",
  "checkbox": "A control that allows the user to toggle between checked and not checked.",
  "collapsible": "An interactive component which expands/collapses a panel.",
  "dialog": "A window overlaid on either the primary window or another dialog window.",
  "dropdown-menu": "Displays a menu to the user — such as a set of actions or functions.",
  "hover-card": "For sighted users to preview content available behind a link.",
  "input": "Displays a form input field or a component that looks like an input field.",
  "kbd": "Displays keyboard input or a shortcut key.",
  "label": "Renders an accessible label associated with controls.",
  "popover": "Displays rich content in a portal, triggered by a button.",
  "progress": "Displays an indicator showing the completion progress of a task.",
  "radio-group": "A set of checkable buttons where only one can be checked at a time.",
  "scroll-area": "Augments native scroll functionality for custom, cross-browser styling.",
  "select": "Displays a list of options for the user to pick from.",
  "separator": "Visually or semantically separates content.",
  "sheet": "Extends the Dialog component to display content that complements the main content of the screen.",
  "skeleton": "Used to show a placeholder while content is loading.",
  "slider": "An input where the user selects a value from within a given range.",
  "spinner": "Displays a loading spinner.",
  "switch": "A control that allows the user to toggle between checked and not checked.",
  "table": "A responsive table component.",
  "tabs": "A set of layered sections of content that display one panel at a time.",
  "textarea": "Displays a form textarea or a component that looks like a textarea.",
  "toggle": "A two-state button that can be either on or off.",
  "toggle-group": "A set of two-state buttons that can be toggled on or off.",
  "tooltip": "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
}

function highlightCode(code: string) {
  const lines = code.split("\n")
  
  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = []
    let keyIndex = 0
    
    let i = 0
    while (i < line.length) {
      // Check for comments first
      if (line.slice(i).match(/^\s*\/\//)) {
        tokens.push(
          <span key={keyIndex++} className="text-zinc-400 dark:text-zinc-500">
            {line.slice(i)}
          </span>
        )
        break
      }
      
      // Check for import/export/function keywords
      const keywordMatch = line.slice(i).match(/^(import|export|from|function|return|const|let|var|interface|type|extends|typeof|as|default)(?=\s|$|{|\(|<|,)/)
      if (keywordMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-pink-600 dark:text-pink-400">
            {keywordMatch[1]}
          </span>
        )
        i += keywordMatch[1].length
        continue
      }
      
      // Check for JSX component tags (PascalCase)
      const jsxComponentMatch = line.slice(i).match(/^<(\/?)([A-Z][a-zA-Z]*)/)
      if (jsxComponentMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-zinc-500 dark:text-zinc-400">{"<"}{jsxComponentMatch[1]}</span>
        )
        tokens.push(
          <span key={keyIndex++} className="text-emerald-600 dark:text-emerald-400">{jsxComponentMatch[2]}</span>
        )
        i += jsxComponentMatch[0].length
        continue
      }
      
      // Check for closing angle bracket
      const closingBracketMatch = line.slice(i).match(/^(\/>|>)/)
      if (closingBracketMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-zinc-500 dark:text-zinc-400">{closingBracketMatch[1]}</span>
        )
        i += closingBracketMatch[1].length
        continue
      }
      
      // Check for strings (double quotes)
      const doubleQuoteMatch = line.slice(i).match(/^"([^"]*)"/)
      if (doubleQuoteMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-amber-600 dark:text-amber-300">{doubleQuoteMatch[0]}</span>
        )
        i += doubleQuoteMatch[0].length
        continue
      }
      
      // Check for strings (single quotes)
      const singleQuoteMatch = line.slice(i).match(/^'([^']*)'/)
      if (singleQuoteMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-amber-600 dark:text-amber-300">{singleQuoteMatch[0]}</span>
        )
        i += singleQuoteMatch[0].length
        continue
      }

      // Check for template literals
      const templateMatch = line.slice(i).match(/^`([^`]*)`/)
      if (templateMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-amber-600 dark:text-amber-300">{templateMatch[0]}</span>
        )
        i += templateMatch[0].length
        continue
      }
      
      // Check for attribute names (word followed by =)
      const attrMatch = line.slice(i).match(/^([a-zA-Z][a-zA-Z0-9]*)=/)
      if (attrMatch) {
        tokens.push(
          <span key={keyIndex++} className="text-sky-600 dark:text-sky-300">{attrMatch[1]}</span>
        )
        tokens.push(
          <span key={keyIndex++} className="text-zinc-500 dark:text-zinc-400">=</span>
        )
        i += attrMatch[0].length
        continue
      }
      
      // Check for curly braces
      if (line[i] === "{" || line[i] === "}") {
        tokens.push(
          <span key={keyIndex++} className="text-pink-600 dark:text-pink-400">{line[i]}</span>
        )
        i++
        continue
      }
      
      // Check for parentheses
      if (line[i] === "(" || line[i] === ")") {
        tokens.push(
          <span key={keyIndex++} className="text-zinc-500 dark:text-zinc-400">{line[i]}</span>
        )
        i++
        continue
      }
      
      // Default: group consecutive plain characters
      let plainText = ""
      while (i < line.length && 
             !line.slice(i).match(/^(import|export|from|function|return|const|let|var|interface|type|extends|typeof|as|default)(?=\s|$|{|\(|<|,)/) &&
             !line.slice(i).match(/^<\/?[A-Za-z]/) &&
             !line.slice(i).match(/^["'`]/) &&
             !line.slice(i).match(/^[a-zA-Z][a-zA-Z0-9]*=/) &&
             !line.slice(i).match(/^[{}()]/) &&
             !line.slice(i).match(/^\/>|^>/) &&
             !line.slice(i).match(/^\s*\/\//)) {
        plainText += line[i]
        i++
      }
      if (plainText) {
        tokens.push(
          <span key={keyIndex++} className="text-zinc-800 dark:text-zinc-100">{plainText}</span>
        )
      }
    }
    
    return (
      <div key={lineIndex} className="table-row">
        <span className="table-cell pr-4 text-right text-zinc-400 dark:text-zinc-500 select-none w-8">
          {lineIndex + 1}
        </span>
        <span className="table-cell">{tokens}</span>
      </div>
    )
  })
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={copyCode}
        className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 h-8 w-8"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <div className="overflow-x-auto p-4 pt-6">
        <pre className="font-mono text-sm leading-6 table w-full">
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </div>
  )
}

function ComponentPreview({ children, code }: { children: React.ReactNode; code: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      {/* Preview Section */}
      <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
        {children}
      </div>
      
      {/* Code Section */}
      <div className="relative bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={copyCode}
          className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 h-8 w-8"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <div className="overflow-x-auto p-4 pt-6">
          <pre className="font-mono text-sm leading-6 table w-full">
            <code>{highlightCode(code)}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default function ComponentPage() {
  const params = useParams()
  const slug = params.slug as string
  const componentName = componentNames[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
  const description = componentDescriptions[slug] || `A beautifully designed ${componentName.toLowerCase()} component built with Radix UI and Tailwind CSS.`

  const importCode = `import { ${componentName.replace(/\s/g, "")} } from "@/components/ui/${slug}"`

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/docs/components" className="hover:text-foreground transition-colors">
          Components
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{componentName}</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{componentName}</h1>
        <p className="text-xl text-muted-foreground">{description}</p>
      </div>

      <Separator />

      {/* Preview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={importCode}>
          <ComponentDemoWrapper slug={slug} />
        </ComponentPreview>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code={`npx shadcn@latest add ${slug}`} />
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={importCode} />
      </div>

      <Separator />

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Button variant="ghost" asChild>
          <Link href="/docs/components" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Components
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/docs/components" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
