import React from "react";

import WonkyImageSvg1 from "../shapesForWonkyImages/WonkyImageSvg1";
import CategoryItemCircle from "../../../circles/CategoryItemCircle";

import wonkyImgCss from "./wonkyImg.module.css";

function WonkyContainerImage({ sizeMultiplier, rotateDegree }) {
  let questionObj = {
    answer: "Elephant",
    imagePath: "elephant.png",
  };

  return (
    <span className={wonkyImgCss.wonkyImageContainer}>
      <WonkyImageSvg1
        sizeMultiplier={sizeMultiplier}
        rotateDegree={rotateDegree}
      />

      <CategoryItemCircle
        question={questionObj}
        width="100px"
        isClickable={false}
        className={wonkyImgCss.categoryItemCircleOnSvg}
        classForSvgMod={wonkyImgCss.categoryItemCircleOnSvg}
      />
    </span>
  );
}

export default WonkyContainerImage;
