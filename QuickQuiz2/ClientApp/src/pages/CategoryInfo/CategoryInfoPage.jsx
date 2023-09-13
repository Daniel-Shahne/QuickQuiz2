import CategoryInfoStyle from "./categoryinfopage.module.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import CategoryItemCircle from "../../components/circles/CategoryItemCircle";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import arrowLeft from "./arrowLeft.png"
import arrowRight from "./arrowRight.png"
import React, { useState } from 'react';


function CategoryInfoPage() {
  const { index } = useParams();
  const { allQuestions } = useContext(AppContext);

  const [animalIndex, setAnimalIndex] = useState(index);

  const nextAnimal = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const displayAnimalDetails = () => {
    const animal = animals[currentIndex];

  function nextIndex(){
    index++;
    console.log(index);
  }

  return (
    <div className={CategoryInfoStyle.bgContainer}>
      <div className={CategoryInfoStyle.backarrow}>
        <BackArrow onClickUrl="/home" />
      </div>
      <div><img src={arrowLeft}/></div>
      <div className={CategoryInfoStyle.playItemContainer}>
        {allQuestions ? (
            <div className={CategoryInfoStyle.imgContainer}>
          <CategoryItemCircle
            question={allQuestions[animalIndex]}
            width="300px"
            isClickable={false}
          />
          <h1>{allQuestions[index].answer}</h1>
          <div className={CategoryInfoStyle.descriptionContainer}>
          <p>{allQuestions[index].description}</p>
          </div>
          </div>
          
        ) : null}
      </div>
      <div><img src={arrowRight} onClick={nextIndex}/></div>
    </div>
  );
}

export default CategoryInfoPage;
