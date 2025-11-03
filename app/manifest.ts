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
        src: '/icon?<generated>',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon?<generated>',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
