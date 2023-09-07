import React from "react";
import { Link } from "react-router-dom";
import howToPlayStyle from "./howtoplaypage.module.css";
import wonkyShape from "./howtoplay-wonkyshape.png";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";

function HowToPlayPage() {
  return (
    <div className={howToPlayStyle.howToPlayContainer}>
      <div className={howToPlayStyle.howToPlayInnerContainer}>
        <h1>How to play</h1>
        <div className={howToPlayStyle.imageContainer}>
          <img src={wonkyShape} alt="" />
          <div className={howToPlayStyle.textOverlay}>
            <p>
              An image or description of a [category] will be displayed in the
              middle of the screen. Below it possible (solutions?) will be
              cycling.
            </p>
            <p>
              When the correct (solutions?) is shown, press your button faster
              than your opponent to score a point!
            </p>
            <p>
              If you press your button at the wrong answer however your button
              is locked for (duration), giving your opponent a much easier time
              to score points. So be careful!
            </p>
            <p>
              The game can be paused with the button in the top right corner, or
              you can return to the difficulty screen with the button in the top
              left corner.
            </p>
          </div>
        </div>
      </div>

      <Link to="/game">
        <div className={howToPlayStyle.wonkyShape}>
          <WonkyContainerText
            shapeId="1"
            text="Continue"
            shapeFill="#00AC87"
            sizeMultiplier="4"
            fontSize="30px"
          />
        </div>
      </Link>
    </div>
  );
}

export default HowToPlayPage;
