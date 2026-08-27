export function GrokFace({ size = 28 }: { size?: number }) {
  return (
    <svg
      className="grok-face"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden
    >
      <rect width="32" height="32" rx="10" fill="#111" />
      <circle cx="11.2" cy="14" r="2.2" fill="#f4f4f5" />
      <circle cx="20.8" cy="14" r="2.2" fill="#f4f4f5" />
      <path
        d="M11 21.2c1.6 1.6 8.4 1.6 10 0"
        fill="none"
        stroke="#f4f4f5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
