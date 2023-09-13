import CategoryInfoStyle from "./categoryinfopage.module.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";
import CategoryItemCircle from "../../components/circles/CategoryItemCircle";
import { AppContext } from "../../context/AppContext";

function CategoryInfoPage(){


    return(
        <div className={CategoryInfoStyle.bgContainer}>
            <div className={CategoryInfoStyle.backarrow}>
            <BackArrow onClickUrl="/home"/>
            <div className={CategoryInfoStyle.playItemContainer}>
            </div>
        </div>
        </div>

    );

}

export default CategoryInfoPage;