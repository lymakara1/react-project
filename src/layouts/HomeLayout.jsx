import React, { useContext } from "react";
import DisplayCanvas from "../components/DisplayCanvas";
import Customization from "../components/Customization";
import InputField from "../components/InputField";

function HomeLayout() {
  return (
    <div className="b bg-slate-400 m-3 p-3 rounded-md">
      <DisplayCanvas />
      <InputField />
      <Customization />
    </div>
  );
}

export default HomeLayout;
