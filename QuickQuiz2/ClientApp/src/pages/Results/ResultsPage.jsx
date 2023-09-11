import React from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import resultsPageStyle from "./resultspage.module.css";
import resultwonky1 from "./resultwonky1.png";
import resultwonky2 from "./resultwonky2.png";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";

function ResultsPage() {
  return (
    <div className={resultsPageStyle.resultsBGContainer}>
      <span className={resultsPageStyle.backarrow}>
        <BackArrow onClickUrl="/home" />
      </span>

      <div className={resultsPageStyle.resultsFlexContainer}></div>
      <div className={resultsPageStyle.flexrow1}>
        <div className={resultsPageStyle.leftContainer}>
          <div>
            <h1>Player 1</h1>
            <h2>Score: 6</h2>
          </div>
          <img
            className={resultsPageStyle.resultsPageImage}
            src={resultwonky1}
            alt=""
          />
        </div>
        <div className={resultsPageStyle.rightContainer}>
          <div>
            <h1>Player 2</h1>
            <h2>Score: 4</h2>
          </div>

          <img
            className={resultsPageStyle.resultsPageImage}
            src={resultwonky2}
            alt=""
          />
        </div>
      </div>
      <div className={resultsPageStyle.btnContainer}>
        <WonkyContainerText
          onClickUrl="/selectdifficulty"
          shapeId="2"
          text="Play again"
          shapeFill="#853AC8"
          sizeMultiplier="4"
          fontSize="30px"
        />
      </div>
    </div>
  );
}

export default ResultsPage;
