import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Force dynamic rendering for all case studies pages
export const dynamic = 'force-dynamic'

interface CaseStudiesLayoutProps {
  children: React.ReactNode
}

export default function CaseStudiesLayout({ children }: CaseStudiesLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8 md:py-12 w-full mx-auto">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

