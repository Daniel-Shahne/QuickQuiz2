import React from "react";
import howToPlayStyle from "./howtoplaypage.module.css";
import wonkyShape from "./howtoplay-wonkyshape.png";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";

function HowToPlayPage() {
  return (
    <div className="how-to-play-container">
      <h1>How to play</h1>
      <p>
        An image or description of a [category] will be displayed in the middle
        of the screen. Below it possible (solutions?) will be cycling. When the
        correct (solutions?) is shown, press your button faster than your
        opponent to score a point! If you press your button at the wrong answer
        however your button is locked for (duration), giving your opponent a
        much easier time to score points. So be careful! The game can be paused
        with the button in the top right corner, or you can return to the
        difficulty screen with the button in the top left corner.
      </p>
      <img src={wonkyShape} alt="" />
      <WonkyContainerText
        shapeId="1"
        text="Continue"
        shapeFill="#00AC87"
        sizeMultiplier="4"
        fontSize="30px"
        className={howToPlayStyle.wonkyShape}
      />
    </div>
  );
}

export default HowToPlayPage;
