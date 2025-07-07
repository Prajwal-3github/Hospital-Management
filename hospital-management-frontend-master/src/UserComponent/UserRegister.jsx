// import React, { useState, useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";

// const UserRegister = () => {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     role: "",
//     age: "",
//     sex: "",
//     bloodGroup: "",
//     specialist: "",
//   });

//   useEffect(() => {
//     const currentURL = document.URL;
//     let role = "";
//     if (currentURL.includes("admin")) {
//       role = "admin";
//     } else if (currentURL.includes("patient")) {
//       role = "patient";
//     } else if (currentURL.includes("doctor")) {
//       role = "doctor";
//     }

//     setUser((prevUser) => ({ ...prevUser, role }));
//   }, []);

//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [contactError, setContactError] = useState("");
//   const [pincodeError, setPincodeError] = useState("");

//   const handleUserInput = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case "firstName":
//         setFirstNameError(/^[a-zA-Z]+$/.test(value) ? "" : "Only alphabets allowed");
//         break;
//       case "lastName":
//         setLastNameError(/^[a-zA-Z]+$/.test(value) ? "" : "Only alphabets allowed");
//         break;
//       case "emailId":
//         setEmailError(/\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format");
//         break;
//       case "password":
//         setPasswordError(
//           /(?=.*\d{3})(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)
//             ? ""
//             : "Min 8 chars, 1 uppercase, 3 digits, 1 special char"
//         );
//         break;
//       case "contact":
//         setContactError(/^\d{10}$/.test(value) ? "" : "Must be 10 digits");
//         break;
//       case "pincode":
//         setPincodeError(/^\d{6}$/.test(value) ? "" : "Must be 6 digits");
//         break;
//       default:
//         break;
//     }

//     setUser({ ...user, [name]: value });
//   };

//   const [genders, setGenders] = useState([]);
//   const [bloodGroup, setBloodGroup] = useState([]);
//   const [specialists, setSpecialists] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/user/gender").then((res) => setGenders(res.data.genders || []));
//     axios.get("http://localhost:8080/api/patient/bloodgroup/all").then((res) => setBloodGroup(res.data || []));
//     axios.get("http://localhost:8080/api/doctor/specialist/all").then((res) => setSpecialists(res.data || []));
//   }, []);

//   const saveUser = async (event) => {
//     event.preventDefault();

//     if (
//       firstNameError ||
//       lastNameError ||
//       emailError ||
//       passwordError ||
//       contactError ||
//       pincodeError ||
//       Object.values(user).some((value) => value === "")
//     ) {
//       toast.error("Form is not valid", { position: "top-center" });
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/api/user/register", user, {
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.status === 200) {
//         toast.success("Registered successfully!", { position: "top-center" });
//       } else {
//         toast.error("Something went wrong", { position: "top-center" });
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to register user", { position: "top-center" });
//     }
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div className="card form-card border-color text-color custom-bg" style={{ width: "50rem" }}>
//           <div className="card-header bg-color custom-bg-text text-center">
//             <h5 className="card-title">Register {user.role}</h5>
//           </div>
//           <div className="card-body">
//             <form className="row g-3" onSubmit={saveUser}>
//               {/* First Name */}
//               <div className="col-md-6 mb-3 text-color">
//                 <label className="form-label"><b>First Name</b></label>
//                 <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleUserInput} placeholder="Enter your first name" />
//                 {firstNameError && <div className="text-danger">{firstNameError}</div>}
//               </div>

//               {/* Last Name */}
//               <div className="col-md-6 mb-3 text-color">
//                 <label className="form-label"><b>Last Name</b></label>
//                 <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleUserInput} placeholder="Enter your last name" />
//                 {lastNameError && <div className="text-danger">{lastNameError}</div>}
//               </div>

//               {/* Email */}
//               <div className="col-md-6 mb-3 text-color">
//                 <label className="form-label"><b>Email</b></label>
//                 <input type="email" className="form-control" name="emailId" value={user.emailId} onChange={handleUserInput} placeholder="Enter your email" />
//                 {emailError && <div className="text-danger">{emailError}</div>}
//               </div>

//               {/* Password */}
//               <div className="col-md-6 mb-3">
//                 <label className="form-label"><b>Password</b></label>
//                 <input type="password" className="form-control" name="password" value={user.password} onChange={handleUserInput} placeholder="Choose a password" />
//                 {passwordError && <div className="text-danger">{passwordError}</div>}
//               </div>

//               {/* Gender */}
//               <div className="col-md-6 mb-3 text-color">
//                 <label className="form-label"><b>Gender</b></label>
//                 <select name="sex" onChange={handleUserInput} className="form-control" value={user.sex}>
//                   <option value="">Select Gender</option>
//                   {genders.map((g) => <option key={g} value={g}>{g}</option>)}
//                 </select>
//               </div>

//               {/* Blood Group */}
//               <div className="col-md-6 mb-3 text-color">
//                 <label className="form-label"><b>Blood Group</b></label>
//                 <select name="bloodGroup" onChange={handleUserInput} className="form-control" value={user.bloodGroup}>
//                   <option value="">Select Blood Group</option>
//                   {bloodGroup.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
//                 </select>
//               </div>

//               {/* Contact */}
//               <div className="col-md-6 mb-3">
//                 <label className="form-label"><b>Contact No</b></label>
//                 <input type="text" className="form-control" name="contact" value={user.contact} onChange={handleUserInput} placeholder="Enter your number" />
//                 {contactError && <div className="text-danger">{contactError}</div>}
//               </div>

//               {/* Age */}
//               <div className="col-md-6 mb-3">
//                 <label className="form-label"><b>Age</b></label>
//                 <input type="number" className="form-control" name="age" value={user.age} onChange={handleUserInput} placeholder="Enter your age" />
//               </div>

//               {/* Address */}
//               <div className="col-md-6 mb-3">
//                 <label className="form-label"><b>Address</b></label>
//                 <textarea name="street" className="form-control" rows="3" value={user.street} onChange={handleUserInput} placeholder="Enter address"></textarea>
//               </div>

//               {/* City */}
//               <div className="col-md-6 mb-3">
//                 <label className="form-label"><b>City</b></label>
//                 <input type="text" className="form-control" name="city" value={user.city} onChange={handleUserInput} placeholder="Enter city" />
//               </div>

//               {/* Pincode */}
//               <div className="col-md-6 mb-3">
//                 <label className="form-label"><b>Pincode</b></label>
//                 <input type="text" className="form-control" name="pincode" value={user.pincode} onChange={handleUserInput} placeholder="Enter pincode" />
//                 {pincodeError && <div className="text-danger">{pincodeError}</div>}
//               </div>

//               {/* Submit */}
//               <div className="d-flex aligns-items-center justify-content-center">
//                 <input type="submit" className="btn bg-color custom-bg-text" value="Register User" />
//               </div>

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;
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
    specialist: "", // only for doctors
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contactError, setContactError] = useState("");
  const [pincodeError, setPincodeError] = useState("");

  const [genders, setGenders] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const currentURL = document.URL;
    let role = "";
    if (currentURL.includes("admin")) role = "admin";
    else if (currentURL.includes("patient")) role = "patient";
    else if (currentURL.includes("doctor")) role = "doctor";
    setUser((prevUser) => ({ ...prevUser, role }));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/user/gender").then((res) => setGenders(res.data.genders || []));
    axios.get("http://localhost:8080/api/patient/bloodgroup/all").then((res) => setBloodGroup(res.data || []));
    axios.get("http://localhost:8080/api/doctor/specialist/all").then((res) => setSpecialists(res.data || []));
  }, []);

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstNameError(/^[a-zA-Z]+$/.test(value) ? "" : "Only alphabets allowed");
        break;
      case "lastName":
        setLastNameError(/^[a-zA-Z]+$/.test(value) ? "" : "Only alphabets allowed");
        break;
      case "emailId":
        setEmailError(/\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format");
        break;
      case "password":
        setPasswordError(
          /(?=.*\d{3})(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)
            ? ""
            : "Min 8 chars, 1 uppercase, 3 digits, 1 special char"
        );
        break;
      case "contact":
        setContactError(/^\d{10}$/.test(value) ? "" : "Must be 10 digits");
        break;
      case "pincode":
        setPincodeError(/^\d{6}$/.test(value) ? "" : "Must be 6 digits");
        break;
      default:
        break;
    }

    setUser({ ...user, [name]: value });
  };

  const saveUser = async (event) => {
    event.preventDefault();

    const {
      firstName, lastName, emailId, password, contact,
      street, city, pincode, age, sex, bloodGroup, role, specialist
    } = user;

    if (
      firstNameError || lastNameError || emailError ||
      passwordError || contactError || pincodeError
    ) {
      toast.error("Fix form validation errors", { position: "top-center" });
      return;
    }

    // Required fields depending on role
    if (
      !firstName || !lastName || !emailId || !password ||
      !contact || !street || !city || !pincode || !age ||
      !sex || !bloodGroup || !role ||
      (role === "doctor" && !specialist)
    ) {
      toast.error("Form is not valid", { position: "top-center" });
      return;
    }

    console.log("Registering user:", user);

    try {
      const response = await axios.post("http://localhost:8080/api/user/register", user, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Registered successfully!", { position: "top-center" });
      } else {
        toast.error("Something went wrong", { position: "top-center" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to register user", { position: "top-center" });
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div className="card form-card border-color text-color custom-bg" style={{ width: "50rem" }}>
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Register {user.role}</h5>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={saveUser}>
              {/* First Name */}
              <div className="col-md-6 mb-3 text-color">
                <label className="form-label"><b>First Name</b></label>
                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleUserInput} placeholder="Enter your first name" />
                {firstNameError && <div className="text-danger">{firstNameError}</div>}
              </div>

              {/* Last Name */}
              <div className="col-md-6 mb-3 text-color">
                <label className="form-label"><b>Last Name</b></label>
                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleUserInput} placeholder="Enter your last name" />
                {lastNameError && <div className="text-danger">{lastNameError}</div>}
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3 text-color">
                <label className="form-label"><b>Email</b></label>
                <input type="email" className="form-control" name="emailId" value={user.emailId} onChange={handleUserInput} placeholder="Enter your email" />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>

              {/* Password */}
              <div className="col-md-6 mb-3">
                <label className="form-label"><b>Password</b></label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={handleUserInput} placeholder="Choose a password" />
                {passwordError && <div className="text-danger">{passwordError}</div>}
              </div>

              {/* Gender */}
              <div className="col-md-6 mb-3 text-color">
                <label className="form-label"><b>Gender</b></label>
                <select name="sex" onChange={handleUserInput} className="form-control" value={user.sex}>
                  <option value="">Select Gender</option>
                  {genders.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              {/* Blood Group */}
              <div className="col-md-6 mb-3 text-color">
                <label className="form-label"><b>Blood Group</b></label>
                <select name="bloodGroup" onChange={handleUserInput} className="form-control" value={user.bloodGroup}>
                  <option value="">Select Blood Group</option>
                  {bloodGroup.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
                </select>
              </div>

              {/* Specialist (only for doctor) */}
              {user.role === "doctor" && (
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Specialist</b></label>
                  <select name="specialist" className="form-control" value={user.specialist} onChange={handleUserInput}>
                    <option value="">Select Specialist</option>
                    {specialists.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              )}

              {/* Contact */}
              <div className="col-md-6 mb-3">
                <label className="form-label"><b>Contact No</b></label>
                <input type="text" className="form-control" name="contact" value={user.contact} onChange={handleUserInput} placeholder="Enter your number" />
                {contactError && <div className="text-danger">{contactError}</div>}
              </div>

              {/* Age */}
              <div className="col-md-6 mb-3">
                <label className="form-label"><b>Age</b></label>
                <input type="number" className="form-control" name="age" value={user.age} onChange={handleUserInput} placeholder="Enter your age" />
              </div>

              {/* Address */}
              <div className="col-md-6 mb-3">
                <label className="form-label"><b>Address</b></label>
                <textarea name="street" className="form-control" rows="3" value={user.street} onChange={handleUserInput} placeholder="Enter address"></textarea>
              </div>

              {/* City */}
              <div className="col-md-6 mb-3">
                <label className="form-label"><b>City</b></label>
                <input type="text" className="form-control" name="city" value={user.city} onChange={handleUserInput} placeholder="Enter city" />
              </div>

              {/* Pincode */}
              <div className="col-md-6 mb-3">
                <label className="form-label"><b>Pincode</b></label>
                <input type="text" className="form-control" name="pincode" value={user.pincode} onChange={handleUserInput} placeholder="Enter pincode" />
                {pincodeError && <div className="text-danger">{pincodeError}</div>}
              </div>

              {/* Submit */}
              <div className="d-flex aligns-items-center justify-content-center">
                <input type="submit" className="btn bg-color custom-bg-text" value="Register User" />
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
