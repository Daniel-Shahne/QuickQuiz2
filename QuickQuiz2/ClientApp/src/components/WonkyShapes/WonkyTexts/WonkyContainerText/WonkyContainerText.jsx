import React from "react";

import WonkyShapeText1 from "../shapesForWonkyTexts/WonkyShapeText1";
import WonkyShapeText2 from "../shapesForWonkyTexts/WonkyShapeText2";

import wonkyCss from "./wonkycontainertext.module.css";

function WonkyContainerText({ shapeId, text, shapeFill, sizeMultiplier }) {
  let ShapeComponent;
  switch (shapeId) {
    case "1":
      ShapeComponent = WonkyShapeText1;
      break;
    case "2":
      ShapeComponent = WonkyShapeText2;
      break;
    default:
      break;
  }

  return (
    <span>
      {ShapeComponent && (
        <span className={wonkyCss.wonkyContainerTextContainer}>
          <p className={wonkyCss.wonkyContainerTextText}>{text}</p>
          <ShapeComponent
            shapeFill={shapeFill}
            sizeMultiplier={sizeMultiplier}
          />
        </span>
      )}
    </span>
  );
}

export default WonkyContainerText;
