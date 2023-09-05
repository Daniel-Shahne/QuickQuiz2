import React from "react";

import WonkyShapeText1 from "../shapesForWonkyTexts/WonkyShapeText1";
import WonkyShapeText2 from "../shapesForWonkyTexts/WonkyShapeText2";

function WonkyContainerText({ shapeId, text, shapeFill }) {
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
    <div>
      {ShapeComponent && (
        <div>
          <ShapeComponent shapeFill={shapeFill}>
            <p>{text}</p>
          </ShapeComponent>
        </div>
      )}
    </div>
  );
}

export default WonkyContainerText;
