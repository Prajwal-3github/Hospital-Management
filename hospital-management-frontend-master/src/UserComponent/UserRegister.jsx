import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const UserRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
    bloodGroup: "",
    specialist: "",
  });

  if (document.URL.indexOf("admin") !== -1) {
    user.role = "admin";
  } else if (document.URL.indexOf("patient") !== -1) {
    user.role = "patient";
  } else if (document.URL.indexOf("doctor") !== -1) {
    user.role = "doctor";
  }

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contactError, setContactError] = useState("");
  const [pincodeError, setPincodeError] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      if (!/^[a-zA-Z]+$/.test(value)) {
        setFirstNameError("Invalid first name. Only alphabets are allowed.");
      } else {
        setFirstNameError("");
      }
    } else if (name === "lastName") {
      if (!/^[a-zA-Z]+$/.test(value)) {
        setLastNameError("Invalid last name. Only alphabets are allowed.");
      } else {
        setLastNameError("");
      }
    } else if (name === "emailId") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setEmailError("Invalid email id. Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    } else if (name === "password") {
      if (
        !/(?=.*\d{3})(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)
      ) {
        setPasswordError(
          "Invalid password. Password should be at least 8 characters long, contain at least 1 special character, 1 uppercase letter, and 3 numerical digits."
        );
      } else {
        setPasswordError("");
      }
    } else if (name === "contact") {
      if (!/^\d{10}$/.test(value)) {
        setContactError(
          "Invalid contact number. Contact number should be exactly 10 digits."
        );
      } else {
        setContactError("");
      }
    } else if (name === "pincode") {
      if (!/^\d{6}$/.test(value)) {
        setPincodeError(
          "Invalid pincode. Pincode should be exactly 6 digits."
        );
      } else {
        setPincodeError("");
      }
    }

    setUser({ ...user, [name]: value });
  };

  const [genders, setGenders] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const retrieveAllGenders = async () => {
      const response = await axios.get("http://localhost:8080/api/user/gender");
      return response.data;
    };

    const retrieveAllBloodGroups = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/patient/bloodgroup/all"
      );
      return response.data;
    };

    const retrieveAllSpecialist = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/doctor/specialist/all"
      );
      return response.data;
    };

    const getAllGenders = async () => {
      const allGenders = await retrieveAllGenders();
      if (allGenders) {
        setGenders(allGenders.genders);
      }
    };

    const getAllBloodGroup = async () => {
      const allBloodGroups = await retrieveAllBloodGroups();
      if (allBloodGroups) {
        setBloodGroup(allBloodGroups);
      }
    };

    const getAllSpecialist = async () => {
      const allSpecialist = await retrieveAllSpecialist();
      if (allSpecialist) {
        setSpecialists(allSpecialist);
      }
    };

    getAllGenders();
    getAllBloodGroup();
    getAllSpecialist();
  }, []);

  const saveUser = async (event) => {
    event.preventDefault();
  
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      contactError ||
      pincodeError ||
      Object.values(user).some((value) => value === "")
    ) {
      toast.error("Form is not valid.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("response", response.data);
      } else {
        toast.error("An error occurred. Please try again later.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  
  

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "50rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Register {user.role}</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b> First Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                  placeholder="Enter your first name"
                />
                {firstNameError && (
                  <div className="text-danger">{firstNameError}</div>
                )}
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="description" className="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                  placeholder="Enter your last name"
                />
                {lastNameError && (
                  <div className="text-danger">{lastNameError}</div>
                )}
              </div>
              <div className="col-md-6 mb-3 text-color">
                <b>
                  <label className="form-label">Email Id</label>
                </b>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                  placeholder="Enter your email address"
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="quantity" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                  placeholder="Choose your password"
                />
                {passwordError && (
                  <div className="text-danger">{passwordError}</div>
                )}
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="sex" className="form-label">
                  <b>User Gender</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="sex"
                >
                  <option value="0">Select Gender</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3 text-color">
                <label htmlFor="bloodGroup" className="form-label">
                  <b>Blood Group</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="bloodGroup"
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroup.map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Contact No</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={user.contact}
                  placeholder="Enter your contact number"
                />
                {contactError && (
                  <div className="text-danger">{contactError}</div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="contact" className="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={user.age}
                  placeholder="Enter your age"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="description" className="form-label">
                  <b> Address</b>
                </label>
                <textarea
                  className="form-control"
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                  placeholder="Enter your address"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                  placeholder="Enter your city name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="pincode" className="form-label">
                  <b>Pincode</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                  placeholder="Enter your pincode"
                />
                {pincodeError && (
                  <div className="text-danger">{pincodeError}</div>
                )}
              </div>
              <div className="d-flex aligns-items-center justify-content-center">
                <input
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  value="Register User"
                  disabled={
                    firstNameError ||
                    lastNameError ||
                    emailError ||
                    passwordError ||
                    contactError ||
                    pincodeError ||
                    Object.values(user).some((value) => value === "")
                  }
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
