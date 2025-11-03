interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width, height }: LogoProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FigrOut Logo"
    >
      <defs>
        <style>
          {`
            .logo-bg {
              fill: #d7e5e8;
            }
            .logo-bg, .logo-dark, .logo-primary {
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: .7px;
            }
            .logo-dark {
              fill: #222;
            }
            .logo-primary {
              fill: #007c8a;
            }
          `}
        </style>
      </defs>
      <rect className="logo-bg" x="471.4" width="977.1" height="1080" rx="10.3" ry="10.3"/>
      <rect className="logo-dark" x="831.4" y="257.1" width="462.9" height="77.1" rx="10.3" ry="10.3"/>
      <rect className="logo-dark" x="831.4" y="366.4" width="462.9" height="77.1" rx="10.3" ry="10.3"/>
      <path className="logo-primary" d="M1345.7,632.6c0,5.7-4.6,10.3-10.3,10.3h-545.1c-5.7,0-10.3,4.6-10.3,10.3v390.9c0,5.7-4.6,10.3-10.3,10.3h-262.3c-5.7,0-10.3-4.6-10.3-10.3V36c0-5.7,4.6-10.3,10.3-10.3h905.1c5.7,0,10.3,4.6,10.3,10.3v210.9c0,5.7-4.6,10.3-10.3,10.3h-622.3c-5.7,0-10.3,4.6-10.3,10.3v165.8c0,5.7,4.6,10.3,10.3,10.3h545.1c5.7,0,10.3,4.6,10.3,10.3v178.8Z"/>
    </svg>
  );
}
