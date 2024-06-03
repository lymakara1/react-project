import React from "react";
import "./Poster.css";

function Poster({ profile, name, descriptions }) {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <article className="glassmorhpism w-fit p-3 flex flex-col items-center gap-3">
        <img
          className="w-52 rounded-full"
          src={profile}
          alt="Profile Picture"
        />
        <h2 className="text-4xl font-bold text-white">{name}</h2>
        <p className="w-80 text-white">{descriptions}</p>
      </article>
    </div>
  );
}

export default Poster;
