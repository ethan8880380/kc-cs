import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/components/ui/scroll-area"

// Force dynamic rendering for all docs pages
export const dynamic = 'force-dynamic'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <div className="mx-auto px-6 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <div className="relative h-full">
              <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                <SidebarNav />
              </ScrollArea>
              {/* Gradient fade at bottom */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-background to-transparent" />
            </div>
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
            <div className="mx-auto w-full min-w-0">
              {children}
            </div>
          </main>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

