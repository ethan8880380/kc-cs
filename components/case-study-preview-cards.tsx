"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { caseStudies, type CaseStudy } from "@/lib/case-studies"

interface CaseStudyPreviewCardProps {
  study: CaseStudy
  className?: string
}

function CaseStudyPreviewCard({ study, className }: CaseStudyPreviewCardProps) {
  const href = study.comingSoon ? "/case-studies/coming-soon" : `/case-studies/${study.slug}`
  
  return (
    <Link href={href} className="group block">
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:border-foreground/20",
          study.comingSoon && "opacity-60 hover:opacity-80",
          className
        )}
      >
        {/* Thumbnail with gradient overlay */}
        <div className={cn("relative aspect-video overflow-hidden bg-linear-to-br", study.gradient)}>
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-full rounded-lg border bg-background/80 backdrop-blur-sm shadow-2xl overflow-hidden">
              <Image
                src={study.thumbnail}
                alt={study.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          {/* Coming Soon badge */}
          {study.comingSoon && (
            <Badge
              variant="secondary"
              className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
            >
              Coming Soon
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
            </div>
            {!study.comingSoon && (
              <p className="text-sm text-muted-foreground font-medium">{study.client}</p>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">{study.description}</p>

          {/* Tags - only show if not coming soon */}
          {!study.comingSoon && study.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {study.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
                  {tag}
                </Badge>
              ))}
              {study.tags.length > 3 && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                  +{study.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Stats - only show if not coming soon */}
          {!study.comingSoon && study.stats && (
            <div className="grid grid-cols-2 gap-3 pt-2 border-t">
              {study.stats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <p className="text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Meta info - only show if not coming soon */}
          {!study.comingSoon && (
            <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground border-t">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {study.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {study.teamSize}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export function CaseStudyPreviewCards() {
  const publishedStudies = caseStudies.filter((study) => !study.comingSoon)
  const comingSoonStudies = caseStudies.filter((study) => study.comingSoon)

  return (
    <div className="space-y-12">
      {/* Published case studies */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publishedStudies.map((study) => (
          <CaseStudyPreviewCard key={study.slug} study={study} />
        ))}
      </div>

      {/* Coming soon case studies */}
      {comingSoonStudies.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">Coming Soon</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonStudies.map((study) => (
              <CaseStudyPreviewCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
