import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = async (e) => {
    e.preventDefault();

    if (
      !loginRequest.emailId.trim() ||
      !loginRequest.password.trim() ||
      loginRequest.role === "0" ||
      loginRequest.role === ""
    ) {
      toast.warn("Please fill in all fields correctly");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Login failed:", errorText);
        toast.error("Invalid credentials or server error", {
          position: "top-center",
        });
        return;
      }

      const res = await response.json();
      console.log("Login success", res);

      if (res.role === "admin") {
        sessionStorage.setItem("active-admin", JSON.stringify(res));
      } else if (res.role === "patient") {
        sessionStorage.setItem("active-patient", JSON.stringify(res));
      } else if (res.role === "doctor") {
        sessionStorage.setItem("active-doctor", JSON.stringify(res));
      }

      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 1000,
      });

      setTimeout(() => {
        navigate("/home");
        window.location.reload(true);
      }, 1200);
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Network error or backend issue", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                  value={loginRequest.role}
                >
                  <option value="0">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>

              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={loginAction}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
