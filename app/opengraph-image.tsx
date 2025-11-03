import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'FigrOut — Simplified ERP for Small Businesses'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #007C8A 0%, #005F6B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 400,
            height: 400,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 500,
            height: 500,
            background: 'rgba(215, 229, 232, 0.1)',
            borderRadius: '50%',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            marginBottom: 40,
          }}
        >
          <svg
            width="200"
            height="113"
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#d7e5e8" x="471.4" width="977.1" height="1080" rx="10.3" ry="10.3"/>
            <rect fill="#222" x="831.4" y="257.1" width="462.9" height="77.1" rx="10.3" ry="10.3"/>
            <rect fill="#222" x="831.4" y="366.4" width="462.9" height="77.1" rx="10.3" ry="10.3"/>
            <path fill="#007c8a" d="M1345.7,632.6c0,5.7-4.6,10.3-10.3,10.3h-545.1c-5.7,0-10.3,4.6-10.3,10.3v390.9c0,5.7-4.6,10.3-10.3,10.3h-262.3c-5.7,0-10.3-4.6-10.3-10.3V36c0-5.7,4.6-10.3,10.3-10.3h905.1c5.7,0,10.3,4.6,10.3,10.3v210.9c0,5.7-4.6,10.3-10.3,10.3h-622.3c-5.7,0-10.3,4.6-10.3,10.3v165.8c0,5.7,4.6,10.3,10.3,10.3h545.1c5.7,0,10.3,4.6,10.3,10.3v178.8Z"/>
          </svg>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          FigrOut
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: 30,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Simplified ERP for Small Businesses
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Your figures, figured out.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
