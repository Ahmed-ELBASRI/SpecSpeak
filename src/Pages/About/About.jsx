import React from "react";
import "./about.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const aboutUs = [
  {
    id: 1,
    title: "Vision & Mission",
    desc: `<p>
        Our vision is to revolutionize how developers and teams interact with API documentation by leveraging AI technology to provide intuitive and accurate natural language descriptions. We aim to simplify and enhance the understanding and usability of API specifications, making the process seamless and efficient.
      </p>`,
  },
  {
    id: 2,
    title: "Who We Are",
    desc: `<p>
    At SpecSpeak, we are a team of innovators passionate about bridging the gap between technical documentation and user-friendly communication. Our mission is to empower developers and businesses by transforming complex API documentation into easily understandable language, streamlining workflows, and enhancing productivity.
  </p>
  <p>
                Our cutting-edge platform harnesses the power of AI to analyze OpenAPI files and provide clear, concise descriptions of available APIs. We believe in fostering a collaborative environment where technology and human expertise come together to drive progress.
              </p>
              <p>
                Join us on our journey as we continue to innovate and develop tools that enhance the way you work with APIs, making the complex simple and the technical accessible.
              </p>
  `,
  },
  {
    id: 3,
    title: "Join Our Team",
    desc: ` <p>
    Become part of a dynamic team dedicated to transforming the tech industry. Whether you work remotely or from one of our hubs, we offer exciting opportunities to grow and contribute. We host regular virtual events and activities to keep our team connected. If you're passionate about AI and innovation, we'd love to hear from you.
    Email us at <u><a href="mailto:example@specspeak.com">example@specspeak.com</a></u>.
  </p>`,
  },
  {
    id: 4,
    title: "Get in Touch",
    desc: ` <p>
    We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out. Contact us at <u><a href="mailto:support@specspeak.com">support@specspeak.com</a></u> and we'll be happy to help.
  </p>`,
  },
];

const About = () => {
  return (
    <>
      <PageHeader pageName="About Us" />
      {/* -------- about start */}
      <section className="about-page section-padding">
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            {aboutUs.map(({ id, title, desc }) => {
              return (
                <div key={id} className="ap-content">
                  <h1>{title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* -------- about End */}
      <ScrollRestoration/>
    </>
  );
};

export default About;
