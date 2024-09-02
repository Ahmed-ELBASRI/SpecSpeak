import React from "react";
import "./pageHeader.css";
import { Link } from "react-router-dom";
const PageHeader = ({ pageName, sortName }) => {
  return (
    <section className="section-top">
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div
            className="section-top-title wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <h1>{pageName}</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li> / {sortName ? sortName : pageName}</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
