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
            .st0 {
              fill: #231f20;
            }
            .st0, .st1, .st2 {
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 2px;
            }
            .st1 {
              fill: #007c8a;
            }
            .st2 {
              fill: none;
            }
          `}
        </style>
      </defs>
      <g id="ARC">
        <path className="st2" d="M1435.2,243c6,0,10.8-4.8,10.8-10.8"/>
      </g>
      <g id="LWPOLYLINE">
        <path className="st1" d="M1435.2,243h-653.4c-6,0-10.8,4.8-10.8,10.8v815.4c0,6-4.8,10.8-10.8,10.8h-275.4c-6,0-10.8-4.8-10.8-10.8V10.8c0-6,4.8-10.8,10.8-10.8h950.4c6,0,10.8,4.8,10.8,10.8v221.4"/>
      </g>
      <g id="LWPOLYLINE1" data-name="LWPOLYLINE">
        <polygon className="st0" points="879 330.7 879 438.7 771 438.7 771 648 879 648 879 756 1365 543.4 879 330.7"/>
      </g>
    </svg>
  );
}
