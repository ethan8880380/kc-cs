"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border bg-muted/50">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-xs text-muted-foreground">{language}</span>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyCode}>
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">
            Docs
          </Link>
          <span>/</span>
          <span>Installation</span>
        </div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-xl text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </div>
      <Separator />
      
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Frameworks
        </h2>
        <p className="leading-7">
          shadcn/ui is designed to work with any React-based framework. Here are
          the officially supported frameworks:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Next.js", href: "/docs/installation/next" },
            { name: "Vite", href: "/docs/installation/vite" },
            { name: "Remix", href: "/docs/installation/remix" },
            { name: "Gatsby", href: "/docs/installation/gatsby" },
            { name: "Astro", href: "/docs/installation/astro" },
            { name: "Laravel", href: "/docs/installation/laravel" },
          ].map((framework) => (
            <Link
              key={framework.name}
              href={framework.href}
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">{framework.name}</span>
              <span className="text-muted-foreground">→</span>
            </Link>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <p className="leading-7">
          Run the following command to initialize shadcn/ui in your project:
        </p>
        <Tabs defaultValue="pnpm" className="w-full">
          <TabsList>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock code="pnpm dlx shadcn@latest init" />
          </TabsContent>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock code="npx shadcn@latest init" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="npx shadcn@latest init" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock code="bunx shadcn@latest init" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Add Components
        </h2>
        <p className="leading-7">
          You can add components to your project using the CLI:
        </p>
        <Tabs defaultValue="pnpm" className="w-full">
          <TabsList>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock code="pnpm dlx shadcn@latest add button" />
          </TabsContent>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock code="npx shadcn@latest add button" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="npx shadcn@latest add button" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock code="bunx shadcn@latest add button" />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex gap-4 pt-4">
        <Button asChild>
          <Link href="/docs/components">
            Browse Components
          </Link>
        </Button>
      </div>
    </div>
  )
}

