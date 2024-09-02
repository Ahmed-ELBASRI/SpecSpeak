import React from "react";
import "./teams.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import ProfileCard from "../../Components/Shared/ProfileCard/ProfileCard";

import img1 from "../../assets/img/team/1.png";
import img2 from "../../assets/img/team/2.png";
import img3 from "../../assets/img/team/3.jpg";
import img4 from "../../assets/img/team/4.jpg";
import img5 from "../../assets/img/team/5.png";
import img6 from "../../assets/img/team/6.png";
import { ScrollRestoration } from "react-router-dom";
import TitleTwo from "../../Components/Shared/TitleTwo/TitleTwo";
const memberList = [
  {
    id: 1,
    name: "Mamun Hossan",
    image: img1,
    delay: "100",
    post: "CEO",
  },
  {
    id: 2,
    name: "Mamun Hossan",
    image: img2,
    delay: "200",
    post: "CEO",
  },
  {
    id: 3,
    name: "Mamun Hossan",
    image: img3,
    delay: "300",
    post: "CEO",
  },
  {
    id: 4,
    name: "Mamun Hossan",
    image: img4,
    delay: "400",
    post: "CEO",
  },
  {
    id: 5,
    name: "Mamun Hossan",
    image: img5,
    delay: "500",
    post: "CEO",
  },
  {
    id: 6,
    name: "Mamun Hossan",
    image: img6,
    delay: "600",
    post: "CEO",
  },
];
const Teams = () => {
  return (
    <>
      <PageHeader pageName={"Team Page"} />
      <section id="team" className="team_area section-padding">
        <div className="container">
          <TitleTwo title={"The Best Team"} />
          <div className="row text-center">
            {memberList.map(({ id, image, name, delay, post }) => (
              <ProfileCard
                key={id}
                image={image}
                name={name}
                delay={delay}
                post={post}
              />
            ))}
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Teams;
