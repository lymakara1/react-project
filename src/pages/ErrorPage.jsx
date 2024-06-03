import React from "react";
import errorImg from "../assets/error.png";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="m-auto w-80 p-5 flex flex-col items-center gap-3">
      <img src={errorImg} alt="Error Image" />
      <h2 className="text-4xl text-red-500">Page Error</h2>
      <Link className="hover:text-blue-700" to="/home">
        Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
