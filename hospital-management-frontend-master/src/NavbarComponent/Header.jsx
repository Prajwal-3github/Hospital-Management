import { Link } from "react-router-dom";
import logo from "../images/h_logo.png";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-bg text-color shadow-sm px-4">
        <div className="container-fluid">
          {/* Logo + Title */}
          <div className="d-flex align-items-center">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
              alt="Hospital Logo"
            />
            <Link to="/" className="navbar-brand mb-0 h5">
              <i>
                <b className="text-color">Hospital Management System</b>
              </i>
            </Link>
          </div>

          {/* Toggle for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav items + Role Nav */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color hover-underline">About Us</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color hover-underline">Contact Us</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
