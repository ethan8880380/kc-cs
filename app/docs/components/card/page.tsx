"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Copy, ChevronRight, BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

export default function CardPage() {
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
        <span className="text-foreground">Card</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-xl text-muted-foreground">
          Displays a card with header, content, and footer.
        </p>
      </div>

      <Separator />

      {/* Preview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add card" />
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"`} />
        <CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`} />
      </div>

      {/* Examples */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Examples</h2>

        {/* Notifications */}
        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Notifications</h3>
          <ComponentPreview code={`import { BellRing, Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const notifications = [
  { title: "Your call has been confirmed.", description: "1 hour ago" },
  { title: "You have a new message!", description: "1 hour ago" },
  { title: "Your subscription is expiring soon!", description: "2 hours ago" },
]

export function CardDemo() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
            <p className="text-sm text-muted-foreground">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}`}>
            <Card className="w-[380px]">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                  <Switch />
                </div>
                <div>
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
              </CardFooter>
            </Card>
          </ComponentPreview>
        </div>
      </div>

      <Separator />

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Button variant="ghost" asChild>
          <Link href="/docs/components/calendar" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Calendar
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/docs/components/carousel" className="gap-2">
            Carousel
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
