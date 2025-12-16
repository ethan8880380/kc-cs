export interface ContentSection {
  id: string
  title: string
  content: string
  items?: string[]
  image?: {
    src: string
    alt: string
    caption?: string
  }
}

export interface ContentGroup {
  id: string
  title: string
  sections: ContentSection[]
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  description: string
  industry: string
  duration: string
  teamSize: string
  tags: string[]
  thumbnail: string
  gradient: string
  comingSoon?: boolean
  stats?: {
    label: string
    value: string
  }[]
  contentGroups?: ContentGroup[]
}

