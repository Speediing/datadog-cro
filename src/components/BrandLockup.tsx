export function BrandLockup({
  size = "md",
  invert = false,
}: {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}) {
  return (
    <div
      className={`brand-lockup brand-lockup-${size}${invert ? " is-invert" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          invert
            ? "/brand/dd_horizontal_white_clear.png"
            : "/brand/dd_horizontal_purple_clear.png"
        }
        alt="Datadog"
        className="brand-dd"
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}
