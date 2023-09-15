import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import homePageStyle from "./homepage.module.css";
import wonkyHeadingShape from "./wonky-heading-shape.png";
import WonkyContainerImage from "../../components/WonkyShapes/WonkyImages/WonkyContainerImage/WonkyContainerImage";
import WonkyContainerText from "../../components/WonkyShapes/WonkyTexts/WonkyContainerText/WonkyContainerText";

function HomePage() {
  const { difficulty } = useContext(AppContext);
  const [hasPlayerClickedStart, sethasPlayerClickedStart] = useState(false);

  return (
    <div className={homePageStyle.bgContainer}>
      <div className={homePageStyle.gridContainer}>
        <div className={homePageStyle.orangutanContainer}>
          <WonkyContainerImage
            question={{ imagePath: "orangutan.png" }}
            svgSizeMultiplier="3.3"
            svgRotateDegree="30"
            imageSizeMultiplier="1.1"
          />
        </div>
        <div className={homePageStyle.heading}>
          <img src={wonkyHeadingShape} alt="" />
          <div
            className={`${homePageStyle.textOverlay} greenInnerWhiteOuterTextBuff`}
          >
            <h1>QUICK QUIZ</h1>
            <h3 className="greenInnerWhiteOuterTextSkinny">
              Think fast, Act faster!
            </h3>
          </div>
        </div>
        <div className={homePageStyle.slothContainer}>
          <WonkyContainerImage
            question={{ imagePath: "sloth.png" }}
            svgSizeMultiplier="3.3"
            svgRotateDegree="1"
            imageSizeMultiplier="1.1"
          />
        </div>
        <div
          className={`${homePageStyle.gridRowSpan2} ${homePageStyle.quokkaContainer}`}
        >
          <WonkyContainerImage
            question={{ imagePath: "quokka.png" }}
            svgSizeMultiplier="3.3"
            svgRotateDegree="0"
            imageSizeMultiplier="1.1"
          />
        </div>
        <div className={homePageStyle.btncontainer}>
          <div className={homePageStyle.playbtn}>
            <WonkyContainerText
              onClickUrl="/selectdifficulty"
              shapeId="1"
              text="Play"
              shapeFill="#853AC8"
              sizeMultiplier="4"
              fontSize="30px"
            />
          </div>
          <div className={homePageStyle.learnbtn}>
            <WonkyContainerText
              onClickUrl="/selectinfo"
              shapeId="2"
              text="Learn"
              shapeFill="#853AC8"
              sizeMultiplier="4"
              fontSize="30px"
            />
          </div>
        </div>

        <div className={homePageStyle.vovve}>
          <WonkyContainerImage
            question={{ imagePath: "donkey.png" }}
            svgSizeMultiplier="3.3"
            svgRotateDegree="30"
            imageSizeMultiplier="1.1"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
