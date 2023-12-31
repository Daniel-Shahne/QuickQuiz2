import React, { useState } from "react";

import WonkyImageSvg1 from "../shapesForWonkyImages/WonkyImageSvg1";
import CategoryItemCircle from "../../../circles/CategoryItemCircle";

import wonkyImgCss from "./wonkyImg.module.css";

function WonkyContainerImage({
  question,
  svgSizeMultiplier,
  svgRotateDegree,
  imageSizeMultiplier,
}) {

  let standardImageWidth = 200;
  let imageSizeMultiplierNum = parseFloat(imageSizeMultiplier);
  const [calculatedImageWidth, setCalculatedImageWidth] = useState(
    standardImageWidth * imageSizeMultiplierNum
  );

  return (
    <span className={wonkyImgCss.wonkyImageContainer}>
      <WonkyImageSvg1
        sizeMultiplier={svgSizeMultiplier}
        rotateDegree={svgRotateDegree}
      />

      <span className={wonkyImgCss.categoryItemCircleOnSvg}>
        <CategoryItemCircle
          question={question}
          width={`${calculatedImageWidth}px`}
          isClickable={false}
        />
      </span>
    </span>
  );
}

export default WonkyContainerImage;
