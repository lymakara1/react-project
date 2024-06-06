import React from "react";
import Poster from "./Poster";
import deepmind from "../../assets/deepmind.jpg";
import makaraImg from "../../assets/makara.jpg";
import orngImg from "../../assets/orng.jpg";
import kimtryImg from "../../assets/kimtry.jpg";
import sombathImg from "../../assets/sombath.jpg";
import vichetImg from "../../assets/vichet.jpg";

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
        className="flex justify-center items-center m-3 p-3 rounded-md bg-gradient-to-r from-[#D21CFF] to-[#ff711e] to-90%"
        style={{
          // backgroundImage: `url(${deepmind})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="rounded-md grid gap-5 place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {members.map((member, index) => {
            const { profile, name, descriptions } = member;
            return (
              <Poster
                key={index}
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
