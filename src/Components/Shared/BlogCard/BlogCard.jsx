import React from "react";
import "./blogCard.css";
import { FaCalendar, FaLongArrowAltRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ image, heading, author, date, tags, cardTwo }) => {
  return (
    <div className="arti_single">
      <div className={` ${cardTwo ? "arti_img_two" : "arti_img"}`}>
        <img src={image} className="img-fluid" alt="Blog image" />
        <Link to={"/single_blog"}>{tags}</Link>
      </div>
      <div className={`arti_content ac_two`}>
        <span>
          <i>
            <FaUser />
          </i>
          {author}
        </span>
        <span>
          <i>
            <FaCalendar />
          </i>
          {date}
        </span>
        <h3>
          <Link to={"/single_blog"}>{heading}</Link>
        </h3>
      </div>
      <Link className="arti_btn" href="/single_blog">
        Read More{" "}
        <i>
          <FaLongArrowAltRight />
        </i>
      </Link>
    </div>
  );
};

export default BlogCard;
