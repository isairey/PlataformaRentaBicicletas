import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { img } from "../image/bicycle2.png";

import DropdownCust from "./DropDown/DropdownCust";
import DropdownCyc from "./DropDown/DropdownCyc";
import DropdownSta from "./DropDown/DropdownSta";
import DropdownSer from "./DropDown/DropdownSer";
import DropdownEmp from "./DropDown/DropdownEmp";
import DropdownTri from "./DropDown/DropdownTri";
// import image from "../image/bicycle2.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };
  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };
  const onMouseEnter5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };
  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };
  const onMouseLeave5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Cycle Rental
          <image src={img} />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Customer
            </Link>
            {dropdown && <DropdownCust />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Cycle
            </Link>
            {dropdown1 && <DropdownCyc />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Station
            </Link>
            {dropdown2 && <DropdownSta />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Service
            </Link>
            {dropdown3 && <DropdownSer />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Employee
            </Link>
            {dropdown4 && <DropdownEmp />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter5}
            onMouseLeave={onMouseLeave5}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Trip Details
            </Link>
            {dropdown5 && <DropdownTri />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
