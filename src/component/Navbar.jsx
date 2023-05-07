import "./navbar.scss";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="brand">
          <span className="logo">
            <a href="#"><img src={logo} alt="" /></a>
          </span>
          <span className="caption">
            <a href="#">InspireM5</a>
          </span>
        </div>
        <button className="hamburger-but"></button>
        <div className="collapse">
          <ul className="navList">
            <li class="nav-item">
              <a class="nav-link " href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Contacts
              </a>
            </li>
          </ul>
          <div class="navbar-buttons">
            <a class="btn" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
