import CategoryInfoStyle from "./categoryinfopage.module.css";
import React, { useContext, useEffect, useState } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import CategoryItemCircle from "../../components/circles/CategoryItemCircle";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png";
import { Link } from "react-router-dom";

function CategoryInfoPage() {
  let { index } = useParams();
  let indexNum = parseInt(index);

  const { allQuestions } = useContext(AppContext);


  return (
    <div className={CategoryInfoStyle.bgContainer}>
      <div className={CategoryInfoStyle.backarrow}>
        <BackArrow onClickUrl="/home" />
      </div>
      <div>
        <Link
          to={`/categoryinfo/${indexNum - 1}`}
          className={indexNum === 0 ? CategoryInfoStyle.disabled : ""}
        >
          <img
          className={CategoryInfoStyle.arrowLeft}
            src={arrowLeft}
            alt="Previous"
          />
        </Link>
      </div>
      <div className={CategoryInfoStyle.playItemContainer}>
        {allQuestions && allQuestions.length > 0 ? (
          <div className={CategoryInfoStyle.imgContainer}>
            <CategoryItemCircle 
              question={allQuestions[indexNum]}
              width="300px"
              isClickable={false}
            />
            <h1>{allQuestions[indexNum].answer}</h1>
            <div className={CategoryInfoStyle.descriptionContainer}>
              <p>{allQuestions[indexNum].description}</p>
            </div>
          </div>
        ) : (
          <p>No questions available.</p>
        )}
      </div>
      <div>
        {allQuestions && allQuestions.length > 0 ? (
          <Link
            to={`/categoryinfo/${indexNum + 1}`}
            className={
              indexNum === allQuestions.length - 1
                ? CategoryInfoStyle.disabled
                : ""
            }
          >
            <img className={CategoryInfoStyle.arrowRight} src={arrowRight} alt="Next" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default CategoryInfoPage;
