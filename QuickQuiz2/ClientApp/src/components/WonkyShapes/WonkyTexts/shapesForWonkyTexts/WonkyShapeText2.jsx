import React, { useState } from "react";
import { Link } from "react-router-dom";

function WonkyShapeText2({ shapeFill, sizeMultiplier, onClickUrl }) {
  let sizeMultiplierNum = parseFloat(sizeMultiplier);

  const [calculatedWidth, setCalculatedWidth] = useState(
    101 * sizeMultiplierNum
  );
  const [calculatedHeight, setCalculatedHeight] = useState(
    57 * sizeMultiplierNum
  );

  return (
    <span>
      <svg
        width={calculatedWidth}
        height={calculatedHeight}
        viewBox="0 0 104 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_67_199)">
          <Link to={onClickUrl}>
            <path d="M98 2L8.5 9L6 25L93 36L98 2Z" fill={shapeFill} />
            <path
              d="M98 2L8.5 9L6 25L93 36L98 2Z"
              stroke="white"
              stroke-width="2"
            />
          </Link>

        </g>
        <defs>
          <filter
            id="filter0_d_67_199"
            x="0.853027"
            y="0.905273"
            width="102.319"
            height="44.2097"
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
              result="effect1_dropShadow_67_199"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_67_199"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

export default WonkyShapeText2;
