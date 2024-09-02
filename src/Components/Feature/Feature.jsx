// import React, { useEffect } from "react";
import "./feature.css";
import { TfiServer, TfiStar, TfiTimer } from "react-icons/tfi";

const featureList = [
  {
    id: 1,
    title: "1,000+ APIs",
    desc: "Analyzed and described in natural language",
    icon: <TfiServer />,
    delay: "100",
  },
  {
    id: 2,
    title: "4.9/5 Ratings",
    desc: "Trusted by developers and teams worldwide",
    icon: <TfiStar />,
    delay: "200",
  },
  {
    id: 3,
    title: "Instant Insights",
    desc: "Less time on understanding API documentation",
    icon: <TfiTimer />,
    delay: "300",
  },
];

const Feature = () => {
  return (
    <section className="top-feature">
      <div className="container">
        <div className="row text-center">
          {featureList.map(({ id, title, desc, delay, icon }) => {
            return (
              <div
                key={id}
                className="col-lg-4 col-sm-4 col-xs-12"
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="single_tf">
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Feature;
