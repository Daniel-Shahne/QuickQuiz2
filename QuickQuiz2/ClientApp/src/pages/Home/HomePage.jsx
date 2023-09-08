import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import homePageStyle from "./homepage.module.css";
import wonkyHeadingShape from "./wonky-heading-shape.png";
import WonkyContainerImage from "../../components/WonkyShapes/WonkyImages/WonkyContainerImage/WonkyContainerImage";

function HomePage() {
  const { difficulty } = useContext(AppContext);

  return (
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
          svgSizeMultiplier="2.2"
          svgRotateDegree="1"
          imageSizeMultiplier="0.8"
        />
      </div>
      <div
        className={`${homePageStyle.gridColSpan2} ${homePageStyle.gridRowSpan2}`}
      >
        Quokka
      </div>
      <div className={homePageStyle.playBtn}>Play</div>
      <div className={homePageStyle.learnBtn}>Learn</div>
      <div className={homePageStyle.vovve}>Vovve</div>
    </div>
  );
}

export default HomePage;
