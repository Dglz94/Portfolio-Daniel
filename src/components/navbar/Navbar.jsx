import React, { useState } from "react";
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
      <div className="nav-item flat">
        <div className="nav-icon">{icons.nav.profile}</div>
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.nav.experience}</div>
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.nav.repositories}</div>
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.nav.contact}</div>
      </div>
      <div className="nav-logo">DGG</div>
      <div className="close" onClick={() => openNav()}>
        {open ? icons.nav.down : icons.nav.up}
      </div>
    </div>
  );
}
