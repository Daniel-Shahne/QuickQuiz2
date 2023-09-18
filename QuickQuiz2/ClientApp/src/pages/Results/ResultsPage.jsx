import React from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import resultsPageStyle from "./resultspage.module.css";
import resultwonky1 from "./resultwonky1.png";
import resultwonky2 from "./resultwonky2.png";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";
import { useLocation } from "react-router-dom";
import NotFoundPage from "../NotFound/NotFoundPage";
import goldmedal from "./goldmedal2.png";
import silvermedal from "./silvermedal2.png";
import bronzemedal from "./bronzemedal2.png";

function ResultsPage() {
  const { state } = useLocation();


  let player1Medal =
    state && state.player1Points !== undefined
      ? state.player1Points >= 2
        ? goldmedal
        : state.player1Points >= 1
        ? silvermedal
        : bronzemedal
      : null;

  let player2Medal =
    state && state.player2Points !== undefined
      ? state.player2Points >= 2
        ? goldmedal
        : state.player2Points >= 1
        ? silvermedal
        : bronzemedal
      : null;

  return (
    <div>
      {state ? (
        <div className={resultsPageStyle.resultsBGContainer}>
          <span className={"backarrow"}>
            <BackArrow onClickUrl="/home" />
          </span>
          <div className={resultsPageStyle.resultsFlexContainer}></div>
          <div className={resultsPageStyle.flexrow1}>
            <div className={resultsPageStyle.leftContainer}>
              <div className="greenInnerWhiteOuterTextBuff">
                <h1>Player 1</h1>
                <h2 className="greenInnerWhiteOuterTextSkinny">
                  Score: {state.player1Points}
                </h2>
                <img
                  className={resultsPageStyle.medal}
                  src={player1Medal}
                  alt="Player reward medal"
                />
              </div>
              <img
                className={resultsPageStyle.resultsPageImage}
                src={resultwonky1}
                alt=""
              />
            </div>
            <div className={resultsPageStyle.rightContainer}>
              <div className="greenInnerWhiteOuterTextBuff">
                <h1>Player 2</h1>
                <h2 className="greenInnerWhiteOuterTextSkinny">
                  Score: {state.player2Points}
                </h2>
                <img
                  className={resultsPageStyle.medal}
                  src={player2Medal}
                  alt="Player reward medal"
                />
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
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
}

export default ResultsPage;
