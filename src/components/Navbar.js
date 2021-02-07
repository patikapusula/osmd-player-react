import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/about">
          <button className="btn">About</button>
        </Link>
      </div>
    </>
  );
}
