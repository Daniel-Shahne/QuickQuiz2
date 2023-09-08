import React from "react";
import resultsPageStyle from "./resultspage.module.css";

function ResultsPage() {
  return (
    <div className={resultsPageStyle.resultsBGContainer}>
      <div className={resultsPageStyle.resultsGridContainer}>
        <div>Player 1 result</div>
        <div>Play again button</div>
        <div>Return to menu button</div>
        <div>Player 2 result</div>
      </div>
    </div>
  );
}

export default ResultsPage;
