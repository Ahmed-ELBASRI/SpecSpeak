import React, { useState } from "react";
import "./lightBox.css";
import { TfiClose } from "react-icons/tfi";

const Lightbox = ({ setLightboxOpen, url }) => {
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <div className="lightbox">
      <div className="lightbox__content lightbox__content-video">
        <button className="close_button" onClick={closeLightbox}>
          <i>
            <TfiClose />
          </i>
        </button>
        <iframe src={url}></iframe>
        {/* <iframe width="560" height="315" src="?si=YTDk68YDlvoRGxCO&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </div>
    </div>
  );
};

export default Lightbox;
