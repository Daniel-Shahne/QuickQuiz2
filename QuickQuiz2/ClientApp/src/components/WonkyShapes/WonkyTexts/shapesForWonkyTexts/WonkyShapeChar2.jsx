import React, { useState } from "react";

function WonkyShapeChar2({ shapeFill, sizeMultiplier }) {
  let sizeMultiplierNum = parseFloat(sizeMultiplier);

  const [calculatedWidth, setCalculatedWidth] = useState(
    48 * sizeMultiplierNum
  );
  const [calculatedHeight, setCalculatedHeight] = useState(
    55 * sizeMultiplierNum
  );

  return (
    <span>
      <svg
        width={calculatedWidth}
        height={calculatedHeight}
        viewBox="0 0 48 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_159_57)">
          <path d="M43 1L5 15.3407V46L43 21.2747V1Z" fill={shapeFill} />
          <path d="M43 1L5 15.3407V46L43 21.2747V1Z" stroke="#F5F5F5" />
        </g>
        <defs>
          <filter
            id="filter0_d_159_57"
            x="0.5"
            y="0.276855"
            width="47"
            height="54.645"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_159_57"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_159_57"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

export default WonkyShapeChar2;
