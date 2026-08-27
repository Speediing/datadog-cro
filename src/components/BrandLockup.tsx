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
      <span className="brand-mark" aria-hidden>
        C
      </span>
      <span>Cursor for Datadog</span>
    </div>
  );
}
