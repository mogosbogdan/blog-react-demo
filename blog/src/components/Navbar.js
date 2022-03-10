import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const clearCookie = (name) => {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };

  const handleLogout = () => {
    clearCookie("email");
    navigate("/login");
    console.log("done cleaned");
  };

  const nav = ["home", "reviews", "about"];
  return (
    <div className="nav">
      <ul className="nav__container">
        {nav.map((item, index) => (
          <li key={index} className="nav__item">
            <a href={`/`} className="nav__link">
              {item}
            </a>
          </li>
        ))}
        <button className="nav__link logout" onClick={handleLogout}>
          logout
        </button>
      </ul>
    </div>
  );
}
