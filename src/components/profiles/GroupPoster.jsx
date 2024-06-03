import React from "react";
import Poster from "./Poster";
import deepmind from "../../assets/deepmind.jpg";
import makaraImg from "../../assets/avatar.png";
import orngImg from "../../assets/avatar.png";
import kimtryImg from "../../assets/avatar.png";
import sombathImg from "../../assets/avatar.png";
import vichetImg from "../../assets/avatar.png";

function GroupPoster() {
  const members = [
    {
      profile: makaraImg,
      name: "Ly Makara",
      descriptions:
        "I am a student in ITC. I am currently a year three student majoring in Computer Science.",
    },
    {
      profile: orngImg,
      name: "Kheang Ouyorng",
      descriptions:
        "I am a student in ITC. I am currently a year three student majoring in Computer Science.",
    },
    {
      profile: kimtryImg,
      name: "Leng Kimtry",
      descriptions:
        "I am a student in ITC. I am currently a year three student majoring in Computer Science.",
    },
    {
      profile: sombathImg,
      name: "Khem Soksombath",
      descriptions:
        "I am a student in ITC. I am currently a year three student majoring in Computer Science.",
    },
    {
      profile: vichetImg,
      name: "Long Sovichet",
      descriptions:
        "I am a student in ITC. I am currently a year three student majoring in Computer Science.",
    },
  ];

  return (
    <React.Fragment>
      <div
        className="flex justify-center items-center m-3 p-3 rounded-md"
        style={{
          backgroundImage: `url(${deepmind})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" m-3 rounded-md p-3 grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center">
          {members.map((n) => {
            const { profile, name, descriptions } = n;
            return (
              <Poster
                profile={profile}
                name={name}
                descriptions={descriptions}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default GroupPoster;
