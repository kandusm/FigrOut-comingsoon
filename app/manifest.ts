import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FigrOut',
    short_name: 'FigrOut',
    description: 'Simplified ERP and accounting software for small business and contractors',
    start_url: '/',
    display: 'standalone',
    background_color: '#007C8A',
    theme_color: '#007C8A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
