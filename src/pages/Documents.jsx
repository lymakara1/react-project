import React, { useContext } from "react";
import { ShareText } from "../components/ShareText";

function Documents() {
  const { text, setText } = useContext(ShareText);
  setText("hello");
  return (
    <div className="m-3 p-3 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div>{text}</div>
      <div>Documents</div>
      <div className="text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
        magnam eligendi sint nulla ex quae, assumenda saepe delectus quo
        cupiditate, obcaecati vitae error architecto mollitia ea porro
        voluptatem. Nostrum aspernatur distinctio temporibus, eveniet dolores,
        repellat voluptatem animi quaerat eum exercitationem culpa dolore
        debitis dolor, ab quas! Eius nesciunt aut fuga?
      </div>
    </div>
  );
}

export default Documents;
