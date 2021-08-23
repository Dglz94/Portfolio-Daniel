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
      <div className="close" onClick={() => openNav()}>
        {open ? icons.down : icons.up}
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.profile}</div>
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.profile}</div>
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.profile}</div>
      </div>
      <div className="nav-item flat">
        <div className="nav-icon">{icons.profile}</div>
      </div>
      <div className="nav-logo">DGG</div>
    </div>
  );
}
