import React from "react";
import { Link } from "react-router-dom";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";
import difficultyStyle from "./SelectDifficultyPage.module.css";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";

function SelectDifficultyPage() {
  const { setDifficulty } = useContext(AppContext);

  function setEasyDifficulty() {
    setDifficulty("easy");
  }

  function setHardDifficulty() {
    setDifficulty("hard");
  }

  return (
    <div className={difficultyStyle.backgroundContainer}>
      <div className={difficultyStyle.container}>
        <span className={"backarrow"}>
          <BackArrow onClickUrl="/" />
        </span>

        <h1 className="greenInnerWhiteOuterTextBuff">Choose Difficulty!</h1>

        <WonkyContainerText
          onClickFunc={setEasyDifficulty}
          onClickUrl="/howtoplay"
          shapeId="1"
          text="Easy"
          shapeFill="#00AC87"
          sizeMultiplier="4"
          fontSize="30px"
        />

        <WonkyContainerText
          onClickFunc={setHardDifficulty}
          onClickUrl="/howtoplay"
          shapeId="2"
          text="Hard"
          shapeFill="#853AC8"
          sizeMultiplier="4"
          fontSize="30px"
        />
      </div>
    </div>
  );
}

export default SelectDifficultyPage;
