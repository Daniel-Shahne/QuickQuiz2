import React from "react";
import resultsPageStyle from "./resultspage.module.css";
import resultwonky1 from "./resultwonky1.png";
import resultwonky2 from "./resultwonky2.png";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";



function ResultsPage() {
  return (
    <div className={resultsPageStyle.resultsBGContainer}>
      <div className={resultsPageStyle.resultsFlexContainer}></div>
      <div className={resultsPageStyle.flexrow1}>
        <img src={resultwonky1} />
        <img src={resultwonky2} />
      </div>
      <div>
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
