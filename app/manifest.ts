import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Lotus Kidney',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066cc',
    icons: [
      {
        src: '/LOTUS-LOGO.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

