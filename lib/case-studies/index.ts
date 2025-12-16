// Types
export type { CaseStudy, ContentGroup, ContentSection } from "./types"

// Individual case studies
export { commercialAnalyticsHub } from "./commercial-analytics-hub"
export { ecommercePlatform } from "./ecommerce-platform"
export { healthcarePortal } from "./healthcare-portal"
export { saasAnalytics } from "./saas-analytics"
export { educationPlatform } from "./education-platform"
export { logisticsTracker } from "./logistics-tracker"

// Combined array - order determines display order
import { commercialAnalyticsHub } from "./commercial-analytics-hub"
import { ecommercePlatform } from "./ecommerce-platform"
import { healthcarePortal } from "./healthcare-portal"
import { saasAnalytics } from "./saas-analytics"
import { educationPlatform } from "./education-platform"
import { logisticsTracker } from "./logistics-tracker"
import type { CaseStudy } from "./types"

export const caseStudies: CaseStudy[] = [
  commercialAnalyticsHub,
  ecommercePlatform,
  healthcarePortal,
  saasAnalytics,
  educationPlatform,
  logisticsTracker,
]

