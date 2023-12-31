import React from "react";
import howToPlayStyle from "./howtoplaypage.module.css";
import wonkyShape from "./howtoplay-wonkycontainer.png";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";
import BackArrow from "../../components/BackArrow/BackArrow";

function HowToPlayPage() {
  return (
    <div className={howToPlayStyle.howToPlayContainer}>

      <div className={"backarrow"}>

        <BackArrow onClickUrl="/selectdifficulty" />
      </div>

      <div className={howToPlayStyle.howToPlayInnerContainer}>
        
        <h1 className="greenInnerWhiteOuterTextBuff">How to play</h1>

        <div className={howToPlayStyle.imageContainer}>
          <img src={wonkyShape} alt="Background for how to play description" />
          <div className={howToPlayStyle.textOverlay}>
            <p>
              An image or description of an animal will be displayed in the
              middle of the screen. Below, a set of answers will be displayed
              one at a time.
            </p>
            <p>Player 1 has key A </p>
            <p> Player 2 has key L</p>
            <p>
              
              When the correct answer appears, press your key faster than your
              opponent to score a point!
            </p>
            <p>
              If you press your button at the wrong answer however your button
              will be locked for a short period of time, giving your opponent a
              much easier time to score points. So be careful!
            </p>
            <p>
              The game can be paused with the button in the top right corner, or
              you can return to the previous screen with the button in the top
              left corner.
            </p>
          </div>
        </div>
      </div>

      <div className={howToPlayStyle.wonkyShape}>
        <WonkyContainerText
          onClickUrl="/game"
          shapeId="1"
          text="Continue"
          shapeFill="#00AC87"
          sizeMultiplier="4"
          fontSize="30px"
        />
      </div>
    </div>
  );
}

export default HowToPlayPage;
