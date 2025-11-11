import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
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
          padding: '4px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1435.2,243c6,0,10.8-4.8,10.8-10.8"
          />
          <path
            fill="#007c8a"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1435.2,243h-653.4c-6,0-10.8,4.8-10.8,10.8v815.4c0,6-4.8,10.8-10.8,10.8h-275.4c-6,0-10.8-4.8-10.8-10.8V10.8c0-6,4.8-10.8,10.8-10.8h950.4c6,0,10.8,4.8,10.8,10.8v221.4"
          />
          <polygon
            fill="#231f20"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="879 330.7 879 438.7 771 438.7 771 648 879 648 879 756 1365 543.4 879 330.7"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
