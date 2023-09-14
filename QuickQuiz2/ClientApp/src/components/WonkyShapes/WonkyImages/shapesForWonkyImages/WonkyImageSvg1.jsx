import React, { useEffect, useState } from "react";

function WonkyImageSvg1({ sizeMultiplier, rotateDegree }) {
  let sizeMultiplierNum = parseFloat(sizeMultiplier);

  const [calculatedWidth, setCalculatedWidth] = useState(
    117 * sizeMultiplierNum
  );
  const [calculatedHeight, setCalculatedHeight] = useState(
    133 * sizeMultiplierNum
  );
  return (
    <span>
      <svg
        width={calculatedWidth}
        height={calculatedHeight}
        viewBox="0 0 117 133"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotateDegree}deg)` }}
      >
        <g filter="url(#filter0_d_67_203)">
          <path d="M111 3L6 37.7691V128L111 78.495V3Z" fill="#88E975" />
          <path
            d="M111 3L6 37.7691V128L111 78.495V3Z"
            stroke="white"
            strokeWidth="4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_67_203"
            x="0"
            y="0.230957"
            width="117"
            height="138.923"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_67_203"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_67_203"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

export default WonkyImageSvg1;
