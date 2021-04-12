import React, { useEffect, useState } from "react";
import "../../assets/css/Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      return;
    };
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`nav  ${show && "nav__black"}`}>
        <img
          className="nav__avatar"
          src={"../../assets/images/netflix_profile_icon.png"}
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
