import React from "react";
import circleStyle from "./circle.module.css";

function CategoryItemCircle({ imagePath, width, isClickable }) {
  let className = "";
  if (isClickable) {
    className = circleStyle.circleContainerIsClickable;
  } else {
    className = circleStyle.circleContainer;
  }
  return (
    <div>
      <img
        src={`/images/animals/${imagePath}`}
        alt=""
        className={className}
        style={{ width: `${width}` }}
      />
    </div>
  );
}

export default CategoryItemCircle;
