"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Copy, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      const keywordMatch = line.slice(i).match(/^(import|export|from|function|return|const|let|var)(?=\s|$|{|\()/)
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
             !line.slice(i).match(/^(import|export|from|function|return|const|let|var)(?=\s|$|{|\()/) &&
             !line.slice(i).match(/^<\/?[A-Za-z]/) &&
             !line.slice(i).match(/^["']/) &&
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
      <div className="flex min-h-[200px] w-full items-center justify-center p-10 bg-background">
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

export default function AccordionPage() {
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
        <span className="text-foreground">Accordion</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Accordion</h1>
        <p className="text-xl text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      <Separator />

      {/* Preview */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Preview</h2>
        <ComponentPreview code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent>
          Our flagship product combines cutting-edge technology
          with sleek design. Built with premium materials,
          it offers unparalleled performance and reliability.

          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          We offer worldwide shipping with tracking included.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent>
          30-day money back guarantee on all purchases.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}>
          <Accordion type="single" collapsible className="w-full max-w-md" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our flagship product combines cutting-edge technology
                  with sleek design. Built with premium materials,
                  it offers unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent>
                We offer worldwide shipping with tracking included.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent>
                30-day money back guarantee on all purchases.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx shadcn@latest add accordion" />
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`} />
        <CodeBlock code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`} />
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
          <Link href="/docs/components/alert-dialog" className="gap-2">
            Alert Dialog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

