"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface ComponentPreviewProps {
  children: React.ReactNode
  code?: string
  className?: string
}

function highlightCode(code: string) {
  const lines = code.split("\n")
  
  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = []
    let keyIndex = 0
    
    // Simple tokenization approach
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

export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false)

  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={cn("relative rounded-lg border overflow-hidden", className)}>
      {/* Preview Section */}
      <div className="p-8 bg-background">
        <div className="flex min-h-[200px] items-center justify-center">
          {children}
        </div>
      </div>
      
      {/* Code Section */}
      {code && (
        <div className="relative bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={copyCode}
            className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy code</span>
          </Button>
          <div className="overflow-x-auto p-4 pt-6">
            <pre className="font-mono text-sm leading-6 table w-full">
              <code>{highlightCode(code)}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

