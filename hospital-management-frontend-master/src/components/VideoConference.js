import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VideoConference = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const doctor = sessionStorage.getItem("active-doctor");
    const patient = sessionStorage.getItem("active-patient");

    // 🔒 Check if neither is logged in
    if (!doctor && !patient) {
      alert("Please login to access video conferencing");
      navigate("/user/login");
      return;
    }

    if (!window.JitsiMeetExternalAPI) {
      alert("Jitsi Meet API script not loaded");
      return;
    }

    const domain = "meet.jit.si";
    const options = {
      roomName: roomId || "default-room",
      width: "100%",
      height: "100vh",
      parentNode: document.getElementById("jitsi-container"),
      configOverwrite: { startWithAudioMuted: true },
      interfaceConfigOverwrite: { DEFAULT_REMOTE_DISPLAY_NAME: "Guest" },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => {
      api.dispose();
    };
  }, [roomId]);

  return <div id="jitsi-container" style={{ width: "100%", height: "100vh" }}></div>;
};

export default VideoConference;
