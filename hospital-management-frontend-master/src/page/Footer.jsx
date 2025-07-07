import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-color">
        <div className="container-fluid p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color">
                  Hospital Management System
                </h5>
                <p>
                  The hospital management system helps register complete patient
                  information. It captures and stores the medical history,
                  treatment required, details of their previous visits,
                  upcoming appointments, reports, insurance details and more. It
                  eliminates the need to re-enter details on every visit.
                </p>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-4">About Us</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link to="/about" className="text-color">Who We Are</Link></li>
                  <li><Link to="/contact" className="text-color">Contact</Link></li>
                  <li><Link to="/home" className="text-color">Home</Link></li>
                  <li><Link to="/user/login" className="text-color">Login</Link></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-4">Contact Us</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="tel:+911234567890" className="text-color">+91-1234567890</a></li>
                  <li><a href="mailto:hospital@example.com" className="text-color">hospital@example.com</a></li>
                  <li><span className="text-color">Ballia, India</span></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-4">Careers</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-color">Jobs</a></li>
                  <li><a href="#!" className="text-color">Internships</a></li>
                  <li><a href="#!" className="text-color">Collaborate</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-4">Quick Links</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link to="/home" className="text-color">Dashboard</Link></li>
                  <li><Link to="/user/doctor/all" className="text-color">Doctors</Link></li>
                  <li><Link to="/user/patient/all" className="text-color">Patients</Link></li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="mb-4" />

          <section>
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3 text-color">Register for free</span>
              <Link to="/user/patient/register">
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                >
                  Sign up!
                </button>
              </Link>
            </p>
          </section>

          <hr className="mb-4" />
        </div>

        <div className="text-center pb-3">
          <b>TEAM A5P</b>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
