import React from "react";

import WonkyShapeText1 from "../shapesForWonkyTexts/WonkyShapeText1";
import WonkyShapeText2 from "../shapesForWonkyTexts/WonkyShapeText2";
import WonkyShapeChar1 from "../shapesForWonkyTexts/WonkyShapeChar1";
import WonkyShapeChar2 from "../shapesForWonkyTexts/WonkyShapeChar2";

import wonkyCss from "./wonkycontainertext.module.css";

function WonkyContainerText({
  onClickFunc,
  onClickUrl,
  shapeId,
  text,
  shapeFill,
  sizeMultiplier,
  fontSize,
}) {
  let ShapeComponent;
  switch (shapeId) {
    case "1":
      ShapeComponent = WonkyShapeText1;
      break;
    case "2":
      ShapeComponent = WonkyShapeText2;
      break;
    case "3":
      ShapeComponent = WonkyShapeChar1;
      break;
    case "4":
      ShapeComponent = WonkyShapeChar2;
      break;
    default:
      break;
  }

  return (
    <span>
      {ShapeComponent && (
        <span className={wonkyCss.wonkyContainerTextContainer}>
          <p
            className={wonkyCss.wonkyContainerTextText}
            style={{ fontSize: fontSize, pointerEvents: 'none' }}
          >
            {text}
          </p>
          <ShapeComponent
            onClickFunc={onClickFunc}
            onClickUrl={onClickUrl}
            shapeFill={shapeFill}
            sizeMultiplier={sizeMultiplier}
          />
        </span>
      )}
    </span>
  );
}

export default WonkyContainerText;
