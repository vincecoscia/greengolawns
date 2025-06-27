import { siteConfig } from './src/lib/site-config.ts';

export default {
  title: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
  description: `${siteConfig.company.tagline} for over ${siteConfig.company.yearsInBusiness} years. Mowing, landscaping, seasonal cleanups, and more. Licensed & insured. Free estimates.`,
  canonical: siteConfig.website.url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.website.url,
    site_name: siteConfig.company.name,
    title: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
    description: `${siteConfig.company.tagline} for over ${siteConfig.company.yearsInBusiness} years. Mowing, landscaping, seasonal cleanups, and more. Licensed & insured. Free estimates.`,
    images: [
      {
        url: `${siteConfig.website.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.company.name} - Professional Lawn Care Services`,
      },
    ],
  },
};