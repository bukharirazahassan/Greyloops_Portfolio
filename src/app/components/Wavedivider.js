export default function WaveDivider({
  variant = "solid",
  fill = "#020617",
  flip = false,
  className = "",
}) {
  if (variant === "line") {
    // Animated flowing gradient wave-line — used as a subtle "alive" seam
    // between two sections that already share the same background color
    // (a solid shape wouldn't be visible in that case).
    return (
      <div
        className={`relative w-full overflow-hidden leading-none ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
          className="h-10 w-[200%] animate-wave-flow sm:h-14"
        >
          <defs>
            <linearGradient id="waveLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="20%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#0EA5E9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C90,20 180,80 270,50 C360,20 450,80 540,50 C630,20 720,80 720,50
               C810,20 900,80 990,50 C1080,20 1170,80 1260,50 C1350,20 1440,80 1440,50
               C1530,20 1620,80 1710,50 C1800,20 1890,80 1980,50
               C2070,20 2160,80 2160,50
               C2250,20 2340,80 2430,50 C2520,20 2610,80 2700,50 C2790,20 2880,80 2880,50"
            fill="none"
            stroke="url(#waveLineGradient)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    );
  }

  // Solid curvy wave — used where a light section transitions into a
  // dark section. The area above the curve stays transparent (revealing
  // whatever background sits behind it), while the curve itself and
  // everything below it is filled solid, so it reads as a wavy top edge.
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="h-14 w-full sm:h-20 lg:h-24"
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}