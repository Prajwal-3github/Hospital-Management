// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import AboutUs from "./page/AboutUs";
// import ContactUs from "./page/ContactUs";
// import Header from "./NavbarComponent/Header";
// import HomePage from "./page/HomePage";
// import UserRegister from "./UserComponent/UserRegister";
// import UserLoginForm from "./UserComponent/UserLoginForm";
// import AddAppointment from "./AppointmentComponent/AddAppointment";
// import ViewMyAppointment from "./AppointmentComponent/ViewMyAppointment";
// import ViewAllAppointment from "./AppointmentComponent/ViewAllAppointment";
// import AssignAppointment from "./AppointmentComponent/AssignAppointment";
// import ViewAllDoctor from "./UserComponent/ViewAllDoctor";
// import ViewAllPatient from "./UserComponent/ViewAllPatient";
// import ViewDoctorAppointment from "./AppointmentComponent/ViewDoctorAppointment";
// import TreatAppointment from "./AppointmentComponent/TreatAppointment";
// import DoctorRegister from "./UserComponent/DoctorRegister";
// import VideoConference from './components/VideoConference';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/home/all/hotel/location" element={<HomePage />} />
//         <Route path="contact" element={<ContactUs />} />
//         <Route path="about" element={<AboutUs />} />
//         <Route path="user/doctor/register" element={<DoctorRegister />} />
//         <Route path="user/patient/register" element={<UserRegister />} />
//         <Route path="user/admin/register" element={<UserRegister />} />
//         <Route path="/user/login" element={<UserLoginForm />} />
//         <Route path="/patient/appointment/take" element={<AddAppointment />} />
//         <Route path="/patient/appointments/" element={<ViewMyAppointment />} />
//         <Route path="/user/doctor/all" element={<ViewAllDoctor />} />
//         <Route path="/user/patient/all" element={<ViewAllPatient />} />
//         <Route path="/patient/appointments/" element={<ViewMyAppointment />} />
//         <Route
//           path="/doctor/appointment/all"
//           element={<ViewDoctorAppointment />}
//         />
//         <Route
//           path="/admin/appointments/all"
//           element={<ViewAllAppointment />}
//         />
//         <Route
//           path="/admin/appointment/:appointmentId/assign"
//           element={<AssignAppointment />}
//         />
//         <Route
//           path="/doctor/appointment/:appointmentId/update"
//           element={<TreatAppointment />}
//         />
//        <Route path="/video/:roomId" element={<VideoConference />} />

//       </Routes>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import AdminHeader from "./NavbarComponent/AdminHeader";
import HomePage from "./page/HomePage";
import UserRegister from "./UserComponent/UserRegister";
import UserLoginForm from "./UserComponent/UserLoginForm";
import AddAppointment from "./AppointmentComponent/AddAppointment";
import ViewMyAppointment from "./AppointmentComponent/ViewMyAppointment";
import ViewAllAppointment from "./AppointmentComponent/ViewAllAppointment";
import AssignAppointment from "./AppointmentComponent/AssignAppointment";
import ViewAllDoctor from "./UserComponent/ViewAllDoctor";
import ViewAllPatient from "./UserComponent/ViewAllPatient";
import ViewDoctorAppointment from "./AppointmentComponent/ViewDoctorAppointment";
import TreatAppointment from "./AppointmentComponent/TreatAppointment";
import DoctorRegister from "./UserComponent/DoctorRegister";
import VideoConference from './components/VideoConference';

import { useEffect, useState } from "react";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const admin = sessionStorage.getItem("active-admin");
    setIsAdminLoggedIn(!!admin); // true if logged in
  }, []);

  return (
    <div>
      {/* 🔁 Dynamically load the correct header */}
      {isAdminLoggedIn ? (
        <AdminHeader setIsLoggedIn={setIsAdminLoggedIn} />
      ) : (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/hotel/location" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="user/doctor/register" element={<DoctorRegister />} />
        <Route path="user/patient/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/patient/appointment/take" element={<AddAppointment />} />
        <Route path="/patient/appointments/" element={<ViewMyAppointment />} />
        <Route path="/user/doctor/all" element={<ViewAllDoctor />} />
        <Route path="/user/patient/all" element={<ViewAllPatient />} />
        <Route path="/patient/appointments/" element={<ViewMyAppointment />} />
        <Route
          path="/doctor/appointment/all"
          element={<ViewDoctorAppointment />}
        />
        <Route
          path="/admin/appointments/all"
          element={<ViewAllAppointment />}
        />
        <Route
          path="/admin/appointment/:appointmentId/assign"
          element={<AssignAppointment />}
        />
        <Route
          path="/doctor/appointment/:appointmentId/update"
          element={<TreatAppointment />}
        />
        <Route path="/video/:roomId" element={<VideoConference />} />
      </Routes>
    </div>
  );
}

export default App;
