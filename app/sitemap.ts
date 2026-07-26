import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://uninexa.org',
      lastModified: new Date(),
    },
    {
      url: 'https://uninexa.org/',
      lastModified: new Date(),
    },
    {
      url: 'https://uninexa.org/#how-it-works',
      lastModified: new Date(),
    },
    {
      url: 'https://uninexa.org/#why-uninexa',
      lastModified: new Date(),
    },
    {
      url: 'https://uninexa.org/#for-students',
      lastModified: new Date(),
    },
  ]
}