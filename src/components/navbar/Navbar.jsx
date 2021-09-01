import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
//Icons
import icons from "../../utils/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    const navbar = document.getElementById("App");
    if (navbar.classList.contains("responsive")) {
      navbar.classList.remove("responsive");
      setOpen(false);
      return;
    } else {
      navbar.classList.add("responsive");
      setOpen(true);
      return;
    }
  };

  return (
    <div className="nav-container pressed">
      <Link className="nav-item flat" to={"/"}>
        <div className="nav-icon">{icons.nav.profile}</div>
      </Link>
      <Link className="nav-item flat" to={"/experience"}>
        <div className="nav-icon">{icons.nav.experience}</div>
      </Link>
      <Link className="nav-item flat" to={"/repositories"}>
        <div className="nav-icon">{icons.nav.repositories}</div>
      </Link>
      <Link className="nav-item flat" to={"/contact"}>
        <div className="nav-icon">{icons.nav.contact}</div>
      </Link>
      {/* <Link className="nav-item flat" to={"/arcade"}>
        <div className="nav-icon">{icons.nav.arcade}</div>
      </Link> */}
      <div className="nav-logo">
        {"<"}DGG{"/>"}
      </div>
      <div className="close" onClick={() => openNav()}>
        {open ? icons.nav.down : icons.nav.up}
      </div>
    </div>
  );
}
