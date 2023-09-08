import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import homePageStyle from "./homepage.module.css";
import wonkyHeadingShape from "./wonky-heading-shape.png";
import WonkyContainerImage from "../../components/WonkyShapes/WonkyImages/WonkyContainerImage/WonkyContainerImage";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";
function HomePage() {
  const { difficulty } = useContext(AppContext);

  return (
    <div className={homePageStyle.bgContainer}>
    <div className={homePageStyle.gridContainer}>
      <div>Not</div>
      <div className={homePageStyle.heading}>
        <img src={wonkyHeadingShape} alt="" />
        <div className={homePageStyle.textOverlay}>
          <h1>Quick Quiz</h1>
          <h3>Think fast, Act faster!</h3>
        </div>
      </div>
      <div className={homePageStyle.slothContainer}>
        <WonkyContainerImage
          question={{ imagePath: "sloth.png" }}
          svgSizeMultiplier="2.8"
          svgRotateDegree="1"
          imageSizeMultiplier="0.9"
        />
      </div>
      <div
        className={`${homePageStyle.gridColSpan2} ${homePageStyle.gridRowSpan2}`}
      >
        <WonkyContainerImage
          question={{ imagePath: "quokka.png" }}
          svgSizeMultiplier="3"
          svgRotateDegree="0"
          imageSizeMultiplier="0.9"
        />
      </div>
      <div className={homePageStyle.btncontainer}>
      <Link to="/selectdifficulty">
        <div className={homePageStyle.playbtn}>
        <WonkyContainerText
            shapeId="1"
            text="Play"
            shapeFill="#853AC8"
            sizeMultiplier="4"
            fontSize="30px"
          />
        </div>
        </Link>
        <Link to="/game">
        <div className={homePageStyle.learnbtn}>
          <WonkyContainerText
            shapeId="2"
            text="Learn"
            shapeFill="#853AC8"
            sizeMultiplier="4"
            fontSize="30px"
          />
          </div>
          </Link>
      </div>
      <div className={homePageStyle.vovve}>
      <WonkyContainerImage
          question={{ imagePath: "donkey.png" }}
          svgSizeMultiplier="2.8"
          svgRotateDegree="30"
          imageSizeMultiplier="0.9"
        />
      </div>
    </div>
    </div>
  );
}

export default HomePage;
