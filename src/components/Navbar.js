import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <div className={`nav  ${show && "nav__black"}`}>
        <img
          className="nav__avatar"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Navbar;