import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 2000,
    });

    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="text-color ms-5 me-5 mt-3">
      <h2 className="mb-4">📞 Contact Us</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <h5>💼 Office Address</h5>
          <p>IIIT Lucknow, CG City, Lucknow, Uttar Pradesh</p>

          <h5>📧 Email</h5>
          <p>support@dentalcare.com</p>

          <h5>📱 Phone</h5>
          <p>+91 9876543210</p>

          <h5>🕒 Working Hours</h5>
          <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h5>Send us a Message</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={contactForm.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn bg-color custom-bg-text">
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
