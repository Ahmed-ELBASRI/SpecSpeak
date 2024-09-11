import React from "react";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="home" className="home_bg">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
            <div className="about_me_content">
              <h1 className="cd-headline clip">
                Explore, Understand & Enhance Your <br></br>{" "}
                <span className="cd-words-wrapper">
                  <TypeAnimation
                    sequence={[
                      "API Specifications",
                      1000,
                      "API Insights",
                      1000,
                      "API Documentation",
                      1000,
                      "API Descriptions",
                      1000,
                      "API Interactions",
                      1000,
                      "API Knowledge",
                      1000,
                    ]}
                    wrapper="b"
                    speed={10}
                    deletionSpeed={0}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p>
                SpecSpeak is an AI-powered tool that transforms your OpenAPI
                specifications into clear, natural language descriptions,
                enhancing understanding and accuracy in just moments!
              </p>
            </div>
            <div className="home_btn">
              <Link to="/fileupload" className="home_one">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
