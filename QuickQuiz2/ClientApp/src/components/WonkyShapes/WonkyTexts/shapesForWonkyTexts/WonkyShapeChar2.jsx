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
    <svg
      width={calculatedWidth}
      height={calculatedHeight}
      viewBox="0 0 48 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_79_173)">
        <path d="M43 2L5 16.3407V47L43 22.2747V2Z" fill={shapeFill} />
        <path
          d="M43 2L5 16.3407V47L43 22.2747V2Z"
          stroke="#F5F5F5"
          stroke-width="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_79_173"
          x="0"
          y="0.553711"
          width="48"
          height="56.29"
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
            result="effect1_dropShadow_79_173"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_79_173"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default WonkyShapeChar2;
