import Link from "next/link"
import Image from "next/image"
import { notFound, redirect } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Users, Calendar, ExternalLink, CheckCircle2, XCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { caseStudies } from "@/lib/case-studies"
import { CaseStudyTableOfContents } from "@/components/case-study-toc"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all case studies (excluding coming soon ones)
export async function generateStaticParams() {
  return caseStudies
    .filter((study) => !study.comingSoon)
    .map((study) => ({
      slug: study.slug,
    }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  // Redirect coming soon studies to the coming soon page
  if (study.comingSoon) {
    redirect("/case-studies/coming-soon")
  }

  // Find adjacent case studies for navigation
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  // Build table of contents items from content groups (top-level only for cleaner nav)
  const tocItems = study.contentGroups?.map((group) => ({
    id: group.id,
    title: group.title,
  })) ?? []

  // Add default sections if no content groups
  const defaultTocItems = [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "The Challenge" },
    { id: "solution", title: "Our Solution" },
    { id: "tech-stack", title: "Technical Stack" },
    { id: "results", title: "Results" },
    { id: "testimonial", title: "Testimonial" },
  ]

  const finalTocItems = tocItems.length > 0 ? tocItems : defaultTocItems

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/case-studies" className="hover:text-foreground transition-colors">
          Case Studies
        </Link>
        <span>/</span>
        <span className="text-foreground">{study.title}</span>
      </div>

      {/* Hero Section - Full Width */}
      <div className="space-y-6">
        <div className="space-y-4">
          <Badge variant="outline">{study.industry}</Badge>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {study.description}
          </p>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground font-medium">{study.duration}</p>
              <p className="text-xs">Duration</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground font-medium">{study.teamSize}</p>
              <p className="text-xs">Team Size</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground font-medium">{study.client}</p>
              <p className="text-xs">Client</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className={`relative rounded-xl overflow-hidden bg-linear-to-br ${study.gradient} p-8`}>
        <div className="relative aspect-video rounded-lg border bg-background/80 backdrop-blur-sm shadow-2xl overflow-hidden">
          <Image
            src={study.thumbnail}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Stats */}
      {study.stats && (
        <>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-2">
            {study.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border bg-card p-6 space-y-2">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <Separator />

      {/* Main Content with Sidebar */}
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar - Table of Contents */}
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <div className="relative h-full">
            <ScrollArea className="h-full py-6 pr-6 lg:py-8">
              <CaseStudyTableOfContents items={finalTocItems} />
            </ScrollArea>
            {/* Gradient fade at bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="space-y-12 py-6 lg:py-8">
          {study.contentGroups && study.contentGroups.length > 0 ? (
            // Render structured content
            study.contentGroups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-20 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{group.title}</h2>
                </div>

                <div className="space-y-6">
                  {group.sections.map((section, sectionIndex) => (
                    <div key={section.id} id={section.id} className="scroll-mt-20">
                      <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {section.content}
                      </p>
                      {section.items && section.items.length > 0 && (
                        <ul className="space-y-2 ml-1 mb-4">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">›</span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.image && (
                        <figure className="mt-6 mb-4">
                          <div className="relative overflow-hidden rounded-lg border bg-muted/30">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              width={800}
                              height={500}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          {section.image.caption && (
                            <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
                              {section.image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                      {sectionIndex < group.sections.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            // Fallback to default content
            <>
              <section id="overview" className="scroll-mt-20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Project Overview</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {study.client} approached us with a complex set of requirements. They needed a modern,
                  scalable solution that could handle their growing user base while maintaining
                  exceptional performance and user experience.
                </p>
              </section>

              <section id="challenge" className="scroll-mt-20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">The Challenge</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The existing system was outdated and couldn&apos;t keep up with their business demands.
                  Key challenges included:
                </p>
                <ul className="space-y-2 ml-1">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">›</span>
                    <span className="text-muted-foreground">Legacy infrastructure that was difficult to maintain and scale</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">›</span>
                    <span className="text-muted-foreground">Poor user experience leading to low engagement</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">›</span>
                    <span className="text-muted-foreground">Lack of real-time capabilities and modern features</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">›</span>
                    <span className="text-muted-foreground">Security concerns with the existing architecture</span>
                  </li>
                </ul>
              </section>

              <section id="solution" className="scroll-mt-20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Our Solution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We designed and built a comprehensive solution from the ground up, leveraging
                  modern technologies and best practices. Our approach focused on creating a
                  maintainable, scalable architecture that would serve {study.client}&apos;s needs
                  both now and in the future.
                </p>
                
                {/* Accordion for solution details */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="architecture">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Modern Architecture
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Component-based architecture for maximum flexibility with real-time data 
                        synchronization across all devices and comprehensive testing suite.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="performance">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Performance Optimization
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Implemented performance optimization at every level of the stack, 
                        including caching strategies, lazy loading, and efficient data fetching.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              <section id="tech-stack" className="scroll-mt-20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Technical Stack</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We carefully selected technologies that would provide the best balance of
                  performance, developer experience, and long-term maintainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </section>

              <section id="results" className="scroll-mt-20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Results</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The project was delivered on time and exceeded all initial expectations.
                  {study.client} saw immediate improvements across all key metrics, and the
                  platform has continued to perform exceptionally as their business has grown.
                </p>
                
                {/* Two Column Comparison */}
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg border-l-4 border-l-green-500 bg-green-500/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <h4 className="font-semibold text-green-700 dark:text-green-400">Achieved Goals</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">›</span>
                        <span className="text-muted-foreground">Exceeded performance targets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">›</span>
                        <span className="text-muted-foreground">On-time delivery within budget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">›</span>
                        <span className="text-muted-foreground">High user satisfaction scores</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border-l-4 border-l-red-500 bg-red-500/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="h-5 w-5 text-red-500" />
                      <h4 className="font-semibold text-red-700 dark:text-red-400">Challenges Overcome</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">›</span>
                        <span className="text-muted-foreground">Legacy data migration complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">›</span>
                        <span className="text-muted-foreground">Integration with existing systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">›</span>
                        <span className="text-muted-foreground">Training team on new stack</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="testimonial" className="scroll-mt-20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Client Testimonial</h2>
                </div>
                <div className="rounded-lg border bg-muted/50 p-6 space-y-4">
                  <blockquote className="text-lg italic">
                    &quot;Placeholder quote.&quot;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <p className="font-medium">Name</p>
                      <p className="text-sm text-muted-foreground">Title, {study.client}</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Tech Stack - Always show */}
          {study.contentGroups && study.contentGroups.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Testimonial - Always show */}
          {study.contentGroups && study.contentGroups.length > 0 && (
            <section className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-6 space-y-4">
                <blockquote className="text-lg italic">
                  &quot;Placeholder quote.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="font-medium">Name</p>
                    <p className="text-sm text-muted-foreground">Title, {study.client}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          <Separator />

          {/* CTA */}
          <div className="rounded-lg border bg-card p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to start your project?</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/case-studies">
                  View All Case Studies
                </Link>
              </Button>
            </div>
          </div>

          <Separator />

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {prevStudy ? (
              <Button variant="ghost" asChild>
                <Link href={`/case-studies/${prevStudy.slug}`} className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {prevStudy.title}
                </Link>
              </Button>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/case-studies" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  All Case Studies
                </Link>
              </Button>
            )}
            {nextStudy ? (
              <Button variant="ghost" asChild>
                <Link href={`/case-studies/${nextStudy.slug}`} className="gap-2">
                  {nextStudy.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/case-studies" className="gap-2">
                  All Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
