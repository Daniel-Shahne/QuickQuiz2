import React from "react";
import notfoundstyle from "./notfound.module.css";
import BackArrow from "../../components/BackArrow/BackArrow";
import dog from "./dog.png";
function NotFoundPage() {
  return (
    <div className={notfoundstyle.notfoundcontainer}>
      <span className={notfoundstyle.backarrow}>
        <BackArrow onClickUrl="/home" />
        {/* <Music /> */}
      </span>
      <div className={notfoundstyle.notFoundFlexContainer}>
        <h1 className="greenInnerWhiteOuterTextBuff">Page not found...</h1>
        <img
          className={notfoundstyle.imageContainer}
          src={dog}
          alt="Picture of spinning confused dog throwing side-eye"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
