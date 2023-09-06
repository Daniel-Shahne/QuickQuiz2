import React, { useState } from "react";

function WonkyShapeChar1({ sizeMultiplier }) {
  let sizeMultiplierNum = parseFloat(sizeMultiplier);

  const [calculatedWidth, setCalculatedWidth] = useState(
    57 * sizeMultiplierNum
  );
  const [calculatedHeight, setCalculatedHeight] = useState(
    46 * sizeMultiplierNum
  );

  return (
    <span>
      <svg
        width={calculatedWidth}
        height={calculatedHeight}
        viewBox={`0 0 57 46`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_79_175)">
          <path d="M51 2L7.22283 9L6 25L48.5543 36L51 2Z" fill="#00AC87" />
          <path
            d="M51 2L7.22283 9L6 25L48.5543 36L51 2Z"
            stroke="#F5F5F5"
            stroke-width="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_79_175"
            x="0.939117"
            y="0.813232"
            width="55.1488"
            height="44.4553"
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
              result="effect1_dropShadow_79_175"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_79_175"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

export default WonkyShapeChar1;
