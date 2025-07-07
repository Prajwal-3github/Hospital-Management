// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminHeader = () => {
//   let navigate = useNavigate();

//   const user = JSON.parse(sessionStorage.getItem("active-admin"));
//   console.log(user);

//   const adminLogout = () => {
//     toast.success("logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-admin");
//     // window.location.reload(true);
//     navigate("/home");
//   };

//   return (
//     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li className="nav-item">
//         <Link
//           to="/user/patient/all"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">View Patients</b>
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link
//           to="user/doctor/all"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">View Doctors</b>
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link
//           to="admin/appointments/all"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Check All Appointments</b>
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link
//           to="/user/doctor/register"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Register Doctor</b>
//         </Link>
//       </li>
//       <li className="nav-item">
//   <Link
//     to="/user/admin/register"
//     className="nav-link active"
//     aria-current="page"
//   >
//     <b className="text-color">Register Admin</b>
//   </Link>
// </li>


//       <li className="nav-item">
//         <Link
//           to=""
//           class="nav-link active"
//           aria-current="page"
//           onClick={adminLogout}
//         >
//           <b className="text-color">Logout</b>
//         </Link>
//         <ToastContainer />
//       </li>
//     </ul>
//   );
// };

// export default AdminHeader;
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));

  const adminLogout = () => {
    toast.success("Logged out!", {
      position: "top-center",
      autoClose: 1000,
    });

    sessionStorage.removeItem("active-admin");
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-color" to="/home">
          <b>Hospital Management</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <Link to="/user/patient/all" className="nav-link active">
                <b className="text-color">View Patients</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/user/doctor/all" className="nav-link active">
                <b className="text-color">View Doctors</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/appointments/all" className="nav-link active">
                <b className="text-color">Check All Appointments</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/user/doctor/register" className="nav-link active">
                <b className="text-color">Register Doctor</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/user/admin/register" className="nav-link active">
                <b className="text-color">Register Admin</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="#" className="nav-link active" onClick={adminLogout}>
                <b className="text-color">Logout</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default AdminHeader;
