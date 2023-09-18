// Logic imports
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
// Style import
import selectInfoStyle from "./selectinfopage.module.css";
// Custom component import
import CategoryItemCircle from "../../components/circles/CategoryItemCircle";
import BackArrow from "../../components/BackArrow/BackArrow";

function SelectInfoPage() {
  const { allQuestions } = useContext(AppContext);

  return (
    <div className={selectInfoStyle.backgroundContainer}>
      <h1
        className={`${selectInfoStyle.textOverlayInfo} greenInnerWhiteOuterTextBuff`}
      >
        Which animal would you like to learn about?
      </h1>
      <span className={"backarrow"}>
        <BackArrow onClickUrl="/home" />
      </span>
      {allQuestions ? (
         <div className={selectInfoStyle.scrollContainer}>
        <div className={selectInfoStyle.gridContainer}>
          {allQuestions.map((q, index) => (
            <div className={selectInfoStyle.gridItem} key={index}>
              <div className={selectInfoStyle.flexItem} key={index}>
                <CategoryItemCircle
                  question={q}
                  width="280px"
                  isClickable={true}
                  onClickUrl={`/categoryinfo/${index}`}
                  key={index}
                />
              </div>
            </div>
          ))}
           </div>
        </div>
      ) : null}
      </div>
   
  );
}

export default SelectInfoPage;
