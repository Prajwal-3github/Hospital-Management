// import Carousel from "./Carousel";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Footer from "./Footer";
// import DoctorCard from "../UserComponent/DoctorCard";
// //import background from "../images/stethoscope-doctor-md-medical-health-hospital.jpg";

// const HomePage = () => {
//   const [allDoctor, setAllDoctor] = useState([]);

//   const retrieveAllDoctor = async () => {
//     const response = await axios.get("http://localhost:8080/api/doctor/all");
//     console.log(response.data);
//     return response.data;
//   };

//   useEffect(() => {
//     const getAllDoctor = async () => {
//       const allDoctor = await retrieveAllDoctor();
//       if (allDoctor) {
//         setAllDoctor(allDoctor);
//       }
//     };

//     getAllDoctor();
//   }, []);

//   return (
//     // <div style={{ backgroundImage: `url(${background})`, height: '150vh',
//     // backgroundPosition: 'center',
//     // backgroundRepeat: 'no-repeat',
//     // backgroundSize: 'cover',
//     //   }}>
//     <div className="container-fluid mb-2">
//       <Carousel />
//       <div className="mt-2 mb-5">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="row row-cols-1 row-cols-md-5 g-3">
//               {allDoctor.map((doctor) => {
//                 return <DoctorCard item={doctor} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <Footer />
//     </div>
//     // </div>
//   );
// };

// export default HomePage;


import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import DoctorCard from "../UserComponent/DoctorCard";

const HomePage = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  // ✅ Check login state once component loads
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const user = sessionStorage.getItem("active-user");
  //   const admin = sessionStorage.getItem("active-admin");
  //   if (user || admin) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const retrieveAllDoctor = async () => {
  //   const response = await axios.get("http://localhost:8080/api/doctor/all");
  //   return response.data;
  // };
  useEffect(() => {
  const patient = sessionStorage.getItem("active-patient");
  const doctor = sessionStorage.getItem("active-doctor");
  const admin = sessionStorage.getItem("active-admin");

  if (patient || doctor || admin) {
    setIsLoggedIn(true);
  }
}, []);
const retrieveAllDoctor = async () => {
  const response = await axios.get("http://localhost:8080/api/doctor/all");
  return response.data;
};


  useEffect(() => {
    const getAllDoctor = async () => {
      const doctors = await retrieveAllDoctor();
      if (doctors) setAllDoctor(doctors);
    };
    getAllDoctor();
  }, []);

  return (
    <div className="container-fluid mb-2">
      <Carousel />

      {/* ✅ Hero Section - Hide if logged in */}
      {!isLoggedIn && (
        <div className="text-center my-4">
          <h1 className="text-color">Welcome to Our Hospital</h1>
          <p className="lead">We care for your health — Book your appointment now!</p>
          <a href="/user/login">
            <button className="btn bg-color custom-bg-text px-4 py-2 mt-2">
              Login to Continue
            </button>
          </a>
        </div>
      )}

      {/* Why Choose Us */}
      <div className="container my-5">
        <h3 className="text-center text-color mb-4">Why Choose Us</h3>
        <div className="row text-center">
          {[
            ["Expert Doctors", "Highly qualified professionals across every specialization."],
            ["Easy Appointments", "Schedule with ease through our digital interface."],
            ["24x7 Support", "Emergency and support services available round the clock."],
            ["Patient Privacy", "Your data is secure and confidential with us."]
          ].map(([title, desc], index) => (
            <div className="col-md-3" key={index}>
              <div className="card p-3 rounded-card h-100">
                <h5 className="text-color">{title}</h5>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Doctors Heading */}
      <div className="container text-center my-4">
        <h3 className="text-color">Our Doctors</h3>
        <p>Meet our expert medical team ready to serve you with care and dedication.</p>
      </div>

      {/* Doctors List */}
      <div className="mt-2 mb-5">
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {allDoctor.map((doctor) => (
            <DoctorCard key={doctor.id} item={doctor} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container my-5">
        <h3 className="text-center text-color mb-4">What Our Patients Say</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {[
            ["The doctors are very friendly and the system is so smooth.", "Riya Sharma"],
            ["Booking appointments online saved me so much time.", "Aman Verma"]
          ].map(([text, name], index) => (
            <div className="col" key={index}>
              <div className="card p-3 h-100 shadow-sm">
                <p>"{text}"</p>
                <b>– {name}</b>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
