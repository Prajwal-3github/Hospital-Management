// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const ViewMyAppointment = () => {
//   let navigate = useNavigate();
//   const [allAppointments, setAllAppointments] = useState([]);

//   const patient = JSON.parse(sessionStorage.getItem("active-patient"));

//   useEffect(() => {
//     const getAllAppointments = async () => {
//       const allAppointments = await retrieveAllAppointments();
//       if (allAppointments) {
//         setAllAppointments(allAppointments);
//       }
//     };

//     getAllAppointments();
//   }, []);

//   const retrieveAllAppointments = async () => {
//     const response = await axios.get(
//       "http://localhost:8080/api/appointment/patient/id?patientId=" + patient.id
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   const cancelAppointment = (appointmentId) => {
//     console.log(appointmentId);
//     console.log("ghittinh api ** ");
//     fetch("http://localhost:8080/api/appointment/patient/update", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         appointmentId: appointmentId,
//         status: "Cancel",
//       }),
//     }).then((result) => {
//       console.log(result);
//       result.json().then((res) => {
//         console.log(res);
//         navigate("/patient/appointments");
//         console.log(res);
//         toast.success(res, {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//     });

//     window.location.reload(true);
//   };

//   return (
//     <div className="mt-3">
//       <div
//         className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
//         style={{
//           height: "45rem",
//         }}
//       >
//         <div className="card-header custom-bg-text text-center bg-color">
//           <h2>All Appointments</h2>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table table-hover text-color text-center">
//               <thead className="table-bordered border-color bg-color custom-bg-text">
//                 <tr>
//                   <th scope="col">Patient Name</th>
//                   <th scope="col">Patient Contact</th>
//                   <th scope="col">Problem</th>
//                   <th scope="col">Doctor Name</th>
//                   <th scope="col">Precription</th>
//                   <th scope="col">Appointment Take Date</th>
//                   <th scope="col">Appointment Date</th>
//                   <th scope="col">Appointment Status</th>
//                   <th scope="col">Appointment Price</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allAppointments.map((a) => {
//                   return (
//                     <tr>
//                       <td>
//                         <b>{a.patientName}</b>
//                       </td>

//                       <td>
//                         <b>{a.patientContact}</b>
//                       </td>
//                       <td>
//                         <b>{a.problem}</b>
//                       </td>
//                       <td>
//                         <b>{a.doctorName}</b>
//                       </td>
//                       <td>
//                         <b>{a.prescription}</b>
//                       </td>
//                       <td>
//                         <b>{a.date}</b>
//                       </td>
//                       <td>
//                         <b>{a.appointmentDate}</b>
//                       </td>
//                       <td>
//                         <b>{a.status}</b>
//                       </td>
//                       <td>
//                         <b>{a.price}</b>
//                       </td>
//                       <td>
//                         {(() => {
//                           if (a.status === "Not Assigned to Doctor") {
//                             return (
//                               <button
//                                 onClick={() => cancelAppointment(a.id)}
//                                 className="btn btn-sm bg-color custom-bg-text"
//                               >
//                                 Cancel
//                               </button>
//                             );
//                           }
//                         })()}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewMyAppointment;
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ViewMyAppointment = () => {
  let navigate = useNavigate();
  const [allAppointments, setAllAppointments] = useState([]);
  const [meetingUrl, setMeetingUrl] = useState("");

  const patient = JSON.parse(sessionStorage.getItem("active-patient"));

  useEffect(() => {
    const getAllAppointments = async () => {
      const allAppointments = await retrieveAllAppointments();
      if (allAppointments) {
        setAllAppointments(allAppointments);
      }
    };

    getAllAppointments();
  }, []);

  const retrieveAllAppointments = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/appointment/patient/id?patientId=" + patient.id
    );
    console.log(response.data);
    return response.data;
  };

  // const cancelAppointment = (appointmentId) => {
  //   fetch("http://localhost:8080/api/appointment/patient/update", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       appointmentId: appointmentId,
  //       status: "Cancel",
  //     }),
  //   }).then((result) => {
  //     result.json().then((res) => {
  //       toast.success(res, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       navigate("/patient/appointments");
  //       window.location.reload(true);
  //     });
  //   });
  // };
  const cancelAppointment = async (appointmentId) => {
  try {
    const response = await fetch("http://localhost:8080/api/appointment/patient/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        appointmentId: appointmentId,
        status: "Cancel",
      }),
    });

    const res = await response.json();

    if (response.ok) {
      toast.success(res, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Navigate after slight delay to allow toast to show
      setTimeout(() => {
        navigate("/patient/appointments");
      }, 1200);
    } else {
      toast.error("Failed to cancel appointment");
    }
  } catch (error) {
    console.error("Cancel Error:", error);
    toast.error("Something went wrong while cancelling.");
  }
};


  const startVideoCall = async (doctorId, patientId) => {
    try {
      const res = await axios.get("http://localhost:8080/api/meeting/generate", {
        params: {
          doctorId,
          patientId,
        },
      });
      setMeetingUrl(res.data);
    } catch (err) {
      console.error("Meeting link generation failed", err);
      toast.error("Unable to start video call", { position: "top-center" });
    }
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
        style={{ height: "45rem" }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>All Appointments</h2>
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Patient Contact</th>
                  <th scope="col">Problem</th>
                  <th scope="col">Doctor Name</th>
                  <th scope="col">Precription</th>
                  <th scope="col">Appointment Take Date</th>
                  <th scope="col">Appointment Date</th>
                  <th scope="col">Appointment Status</th>
                  <th scope="col">Appointment Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allAppointments.map((a) => (
                  <tr key={a.id}>
                    <td><b>{a.patientName}</b></td>
                    <td><b>{a.patientContact}</b></td>
                    <td><b>{a.problem}</b></td>
                    <td><b>{a.doctorName}</b></td>
                    <td><b>{a.prescription}</b></td>
                    <td><b>{a.date}</b></td>
                    <td><b>{a.appointmentDate}</b></td>
                    <td><b>{a.status}</b></td>
                    <td><b>{a.price}</b></td>
                    <td>
                      {a.status === "Not Assigned to Doctor" && (
                        <button
                          onClick={() => cancelAppointment(a.id)}
                          className="btn btn-sm bg-color custom-bg-text me-2"
                        >
                          Cancel
                        </button>
                      )}
                      {a.status === "Assigned to Doctor" && a.doctorId && (
                        <button
                          onClick={() => startVideoCall(a.doctorId, patient.id)}
                          className="btn btn-sm btn-success"
                        >
                          Video Call
                        </button>
                      )}
                    </td>
                    <td><Link
  to={`/video/${a.id}-${a.patientName.replace(/\s/g, "")}-${a.doctorName.replace(/\s/g, "")}`}
  className="btn btn-sm bg-success text-white"
>
  Join VC
</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Meeting Iframe Section */}
          {meetingUrl && (
            <div className="container mt-4">
              <h5 className="text-center mb-3 text-color">Live Video Call</h5>
              <iframe
                src={meetingUrl}
                width="100%"
                height="500"
                allow="camera; microphone"
                title="Video Consultation"
                style={{ border: "1px solid #ccc", borderRadius: "10px" }}
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ViewMyAppointment;
