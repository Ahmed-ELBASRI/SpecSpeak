import React from "react";
import "./title.css";
const Title = ({mainTitle, subTitle, subTitleSpan}) => {
  return (
    <div className="section-title">
      <h2>{mainTitle}</h2>
      <p>
        {subTitle}
        <span>{subTitleSpan}</span>
      </p>
    </div>
  );
};

export default Title;
