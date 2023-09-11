import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wonkyShapeStyle from "./wonkyshape.module.css";

function WonkyShapeText1({ shapeFill, sizeMultiplier, onClickUrl }) {
  let sizeMultiplierNum = parseFloat(sizeMultiplier);

  const [calculatedWidth, setCalculatedWidth] = useState(
    101 * sizeMultiplierNum
  );
  const [calculatedHeight, setCalculatedHeight] = useState(
    57 * sizeMultiplierNum
  );

  function handleClick() {
    console.log("clicked!");
  }

  return (
    <span>
      <svg
        width={calculatedWidth}
        height={calculatedHeight}
        viewBox="0 0 101 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_77_416)">
          <Link to={onClickUrl} className={wonkyShapeStyle.wonkyLink}>
            <path d="M96 2L5 16.5V47.5L96 22.5V2Z" fill={shapeFill} />
            <path
              d="M96 2L5 16.5V47.5L96 22.5V2Z"
              stroke="white"
              stroke-width="2"
            />
          </Link>
        </g>
        <defs>
          <filter
            id="filter0_d_77_416"
            x="0"
            y="0.828125"
            width="101"
            height="55.9836"
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
              result="effect1_dropShadow_77_416"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_77_416"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

export default WonkyShapeText1;
