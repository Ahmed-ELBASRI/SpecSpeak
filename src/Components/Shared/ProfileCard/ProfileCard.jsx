import React from "react";
import "./profileCard.css";
import { Link } from "react-router-dom";
import { TfiFacebook, TfiLinkedin, TfiTwitter } from "react-icons/tfi";

const ProfileCard = ({ image, name, post, delay }) => {
  return (
    <div
      className="col-lg-4 col-sm-6 col-xs-12"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-offset="0"
      data-aos-duration="1000"
    >
      <div className="our-team">
        <div className="single-team">
          <img src={image} className="img-fluid" alt="" />
          <h3>{name}</h3>
          <p>{post}</p>
        </div>
        <ul className="social">
          <li>
            <Link to={""} className="facebook ">
              <TfiFacebook />
            </Link>
          </li>
          <li>
            <Link to={""} className="twitter">
              <TfiTwitter />
            </Link>
          </li>
          <li>
            <Link to={""} className="linkedin">
              <TfiLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
