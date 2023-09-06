import React from "react";
import circleStyle from "./circle.module.css";
import {Link} from 'react-router-dom';
import { useState } from "react";

function CategoryItemCircle({ question, width, isClickable, onClickUrl = ''}) {

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  if (isClickable) {
    return (

      <div>
        <Link className={circleStyle.linkContainer} to={onClickUrl}>
          
  
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src={`/images/animals/${question.imagePath}`}
            alt=""
            className={circleStyle.circleContainerIsClickable}
            style={{ width: `${width}` }}
          />
  
            {isHovered && (
            <h1 onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              {question.answer}
            </h1>
            )}
  
        </Link>
        
      </div>
    );
  }
  else {
    return (
      <div>
        <img
            src={`/images/animals/${question.imagePath}`}
            alt=""
            className={circleStyle.circleContainer}
            style={{ width: `${width}` }}
          />
      </div>
    );
  }

}

export default CategoryItemCircle;
