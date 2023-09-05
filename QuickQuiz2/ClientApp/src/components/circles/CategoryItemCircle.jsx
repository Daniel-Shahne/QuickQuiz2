import React from "react";
import circleStyle from "./circle.module.css";
import {Link} from 'react-router-dom';

function CategoryItemCircle({ question, width, isClickable }) {
  let className = "";
  if (isClickable) {
    className = circleStyle.circleContainerIsClickable;
  } else {
    className = circleStyle.circleContainer;
  }
  return (
    <div>
      <Link className={circleStyle.linkContainer} to='/counter'>
        

                
        <h1>
          {question.answer}
        </h1>


        <img
          src={`/images/animals/${question.imagePath}`}
          alt=""
          className={className}
          style={{ width: `${width}` }}
        />

      </Link>
      
    </div>
  );
}

export default CategoryItemCircle;
