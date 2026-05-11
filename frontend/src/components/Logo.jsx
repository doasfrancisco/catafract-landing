export default function Logo({ className = 'h-7 w-7' }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="#0e0e15" stroke="rgba(255,255,255,0.1)" />
        <path
          d="M9 11 L16 7 L23 11 L23 21 L16 25 L9 21 Z"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M16 7 L16 25 M9 11 L23 21 M23 11 L9 21"
          stroke="url(#logoGrad)"
          strokeWidth="0.6"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
