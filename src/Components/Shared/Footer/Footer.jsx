import React from "react";
import "./footer.css";
import logo from "../../../assets/img/pec.png";
import { Link } from "react-router-dom";

const useFullLink = [
  {
    id: 1,
    title: "Features",
    links: [
      "Upload OpenAPI Files",
      "API Selection",
      "Automated API Descriptions",
      "Correction Prompts",
      "Workflow Integration",
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      "About Us",
      "Knowledge Base",
      "Community",
      "API Documentation",
      "Contact Support",
    ],
  },
];
const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <a href="index.html">
                <img src={logo} alt="" />
              </a>
              <p>
                SpecSpeak is an AI-powered tool that transforms your OpenAPI
                specifications into clear, natural language descriptions,
                enhancing understanding and accuracy in just moments!
              </p>
            </div>
          </div>
          {useFullLink.map(({ id, links, title }) => {
            return (
              <div key={id} className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>{title}</h4>
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link to={""}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Connect With Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <u>Chat Now</u>
                  </a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>&copy; 2024. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
