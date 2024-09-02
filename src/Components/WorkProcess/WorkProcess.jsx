import React, { useState } from "react";
import "./workProcess.css";
import { FaPlay } from "react-icons/fa";
import videoBg from "../../assets/img/video-bg.jpg"; // Make sure this is the correct path to your video background image
import Title from "../Shared/Title/Title";
import Lightbox from "../LightBox/LightBox";

const processList = [
  {
    id: "01",
    title: "Upload OpenAPI File",
    desc: `Start by uploading your OpenAPI file specification to our platform. This file will define the APIs you want to analyze.`,
    delay: "100",
  },
  {
    id: "02",
    title: "Select APIs",
    desc: `Browse through the listed APIs provided by your OpenAPI file. Select one or multiple APIs you want to analyze.`,
    delay: "200",
  },
  {
    id: "03",
    title: "Generate Descriptions",
    desc: `Submit your selected APIs to our GPT-powered engine. Receive natural language descriptions and correct any inaccuracies as needed.`,
    delay: "300",
  },
];

const WorkProcess = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section className="hiw_area section-padding">
      <div className="container">
        <Title
          mainTitle={"How It Works"}
          subTitle={"Streamline your API interaction with our intuitive platform"}
          subTitleSpan={" and let AI describe your APIs effortlessly"}
        />
        <div className="row">
          {processList.map(({ id, title, desc, delay }) => {
            return (
              <div
                key={id}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="single_hiw">
                  <div className="sh_title">{id}</div>
                  <div className="single_hiw_content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div
            className="col-lg-12 vp_top"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            {/* <div className="video_promotion">
              <img src={videoBg} className="img-fluid" alt="" />
              <div
                className="video-play"
                onClick={openLightbox}
              >
                <i>
                  <FaPlay />
                </i>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/OUFcCoTx8zM" // Replace with your video URL
        />
      )}
    </section>
  );
};

export default WorkProcess;
