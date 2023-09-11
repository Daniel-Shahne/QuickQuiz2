import React from "react";
import { Link } from "react-router-dom";
import backArrowStyle from "./backarrow.module.css";

function BackArrow({ onClickUrl = "" }) {
  return (
    <Link to={onClickUrl} className={backArrowStyle.backArrowLink}>
      <span>
        <svg
          width="81"
          height="78"
          viewBox="0 0 31 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 15.5456V27H26.4524L25.4872 16.4903C25.4326 15.8959 25.2815 15.3143 25.0398 14.7684C24.2106 12.8953 22.4082 11.6389 20.3639 11.509L12.3571 11L13.5 14.3368L12.3571 16.5346L2 9.5L17.0932 2L18 4L15.5 7L22.5971 7.80999C25.0249 8.08708 27.1818 9.48788 28.4222 11.5932C29.1278 12.7908 29.5 14.1555 29.5 15.5456Z"
            fill="#00AC87"
            stroke="#F5F5F5"
            stroke-width="2"
          />
        </svg>
      </span>
    </Link>
  );
}

export default BackArrow;
