import CategoryInfoStyle from "./categoryinfopage.module.css";
import React, { useContext, useEffect, useState } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import CategoryItemCircle from "../../components/circles/CategoryItemCircle";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png";

function CategoryInfoPage() {
  let { index } = useParams();

  const { allQuestions } = useContext(AppContext);

  // Define a state variable to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(parseInt(index));

  function nextIndex() {
    if (currentIndex < allQuestions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }

  function prevIndex() {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }

  useEffect(() => {
    if (allQuestions) {
      setCurrentIndex((prevIndex) =>
        prevIndex >= allQuestions.length - 1 ? prevIndex : prevIndex + 1
      );
    }
  }, [allQuestions]);

  const isAtBeginning = currentIndex === 0;
  const isAtEnd = currentIndex === allQuestions.length - 1;

  return (
    <div className={CategoryInfoStyle.bgContainer}>
      <div className={CategoryInfoStyle.backarrow}>
        <BackArrow onClickUrl="/home" />
      </div>
      <div>
        <img
          src={arrowLeft}
          onClick={prevIndex}
          className={isAtBeginning ? CategoryInfoStyle.disabled : ""}
          alt="Previous"
        />
      </div>
      <div className={CategoryInfoStyle.playItemContainer}>
        {allQuestions && allQuestions.length > 0 ? (
          <div className={CategoryInfoStyle.imgContainer}>
            <CategoryItemCircle
              question={allQuestions[currentIndex]}
              width="300px"
              isClickable={false}
            />
            <h1>{allQuestions[currentIndex].answer}</h1>
            <div className={CategoryInfoStyle.descriptionContainer}>
              <p>{allQuestions[currentIndex].description}</p>
            </div>
          </div>
        ) : (
          <p>No questions available.</p>
        )}
      </div>
      <div>
        <img
          src={arrowRight}
          onClick={nextIndex}
          className={isAtEnd ? CategoryInfoStyle.disabled : ""}
          alt="Next"
        />
      </div>
    </div>
  );
}

export default CategoryInfoPage;
