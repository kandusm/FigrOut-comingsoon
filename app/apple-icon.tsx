import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#d7e5e8" x="471.4" width="977.1" height="1080" rx="10.3" ry="10.3"/>
          <rect fill="#222" x="831.4" y="257.1" width="462.9" height="77.1" rx="10.3" ry="10.3"/>
          <rect fill="#222" x="831.4" y="366.4" width="462.9" height="77.1" rx="10.3" ry="10.3"/>
          <path fill="#007c8a" d="M1345.7,632.6c0,5.7-4.6,10.3-10.3,10.3h-545.1c-5.7,0-10.3,4.6-10.3,10.3v390.9c0,5.7-4.6,10.3-10.3,10.3h-262.3c-5.7,0-10.3-4.6-10.3-10.3V36c0-5.7,4.6-10.3,10.3-10.3h905.1c5.7,0,10.3,4.6,10.3,10.3v210.9c0,5.7-4.6,10.3-10.3,10.3h-622.3c-5.7,0-10.3,4.6-10.3,10.3v165.8c0,5.7,4.6,10.3,10.3,10.3h545.1c5.7,0,10.3,4.6,10.3,10.3v178.8Z"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
