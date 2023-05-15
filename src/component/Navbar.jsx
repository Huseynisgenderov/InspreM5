import { useState } from "react";
import { useEffect } from "react";
//scss
import "./navbar.scss";
//img
import logo from "../assets/logo.png";
//swal
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="brand">
          <span className="logo">
            <a href="#me">
              <img src={logo} alt="" />
            </a>
          </span>
          <span className="caption">
            <a href="#me">InspireM5</a>
          </span>
        </div>
        <button className="hamburger-but" onClick={toggleMenu}>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`collapse ${isOpen ? "open" : ""}`}>
          <ul className="navList">
            <li class="nav-item">
              <a class="nav-link " href="#me">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#me">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#me">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#me">
                Contacts
              </a>
            </li>
          </ul>
          <div
            class="navbar-buttons"
            onClick={function () {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Səhifə onepage-dir keçid mövcud deyil",
              });
            }}
          >
            <a class="btn" href="#me">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
