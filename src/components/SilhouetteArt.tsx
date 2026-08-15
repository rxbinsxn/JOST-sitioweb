interface SilhouetteArtProps {
  variant: "footwear" | "apparel";
  className?: string;
}

/**
 * Stylized silhouette used on the world-selection screen and as a graceful
 * fallback for product photography before real images are uploaded.
 * Rendered as SVG so it scales cleanly and stays GPU-cheap under the
 * champagne backlight glow.
 */
export default function SilhouetteArt({ variant, className = "" }: SilhouetteArtProps) {
  if (variant === "footwear") {
    return (
      <svg
        viewBox="0 0 400 260"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shoeBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c1917" />
            <stop offset="55%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="shoeRim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8A96B" stopOpacity="0" />
            <stop offset="100%" stopColor="#E6D3A3" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M18 190 C 18 170, 40 168, 58 160 C 90 146, 120 108, 158 84 C 190 64, 226 54, 262 58 C 288 61, 300 78, 318 92 C 336 106, 362 108, 378 122 C 390 132, 390 150, 378 160 C 360 176, 320 182, 280 184 C 200 188, 100 188, 40 196 C 26 198, 18 196, 18 190 Z"
          fill="url(#shoeBody)"
          stroke="url(#shoeRim)"
          strokeWidth="1.5"
        />
        <path
          d="M158 84 C 190 64, 226 54, 262 58 C 288 61, 300 78, 318 92"
          stroke="#C8A96B"
          strokeOpacity="0.55"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M40 196 C 100 188, 200 188, 280 184 C 320 182, 360 176, 378 160"
          stroke="#C8A96B"
          strokeOpacity="0.35"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 260 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="apparelBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1917" />
          <stop offset="55%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="apparelRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6D3A3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C8A96B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M130 18 C 110 18, 96 30, 90 44 L 46 62 C 34 66, 28 78, 30 90 L 42 148 C 44 158, 54 164, 64 160 L 82 152 L 78 340 C 78 352, 88 360, 100 360 L 160 360 C 172 360, 182 352, 182 340 L 178 152 L 196 160 C 206 164, 216 158, 218 148 L 230 90 C 232 78, 226 66, 214 62 L 170 44 C 164 30, 150 18, 130 18 Z"
        fill="url(#apparelBody)"
        stroke="url(#apparelRim)"
        strokeWidth="1.5"
      />
      <path
        d="M90 44 C 96 56, 112 64, 130 64 C 148 64, 164 56, 170 44"
        stroke="#C8A96B"
        strokeOpacity="0.5"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
