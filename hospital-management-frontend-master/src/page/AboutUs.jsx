import "./AboutUs.css"; // Make sure this line is present for custom CSS

const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
      <h2 className="mb-4">Meet the Dream Team 💫</h2>

      <div className="row g-4">
        {/* Frontend Team Card */}
        <div className="col-md-4">
          <div className="card team-card">
            <div className="card-body">
              <h5 className="card-title">👨‍💻 Our Beloved Frontend Team</h5>
              <ul>
                <li><b>Aditya</b> – Frontend Developer & UI/UX Designer</li>
                <li><b>Amol</b> – Frontend Developer & UI/UX Designer</li>
              </ul>
              <p className="card-text">
                They’ve crafted each pixel with passion, ensuring the user
                experience is smooth and visually engaging.
              </p>
            </div>
          </div>
        </div>

        {/* Backend Team Card */}
        <div className="col-md-4">
          <div className="card team-card">
            <div className="card-body">
              <h5 className="card-title">🔧 Our Backend Wizards</h5>
              <ul>
                <li><b>Prajwal</b> – Backend Developer</li>
              </ul>
              <p>
                Known for his strategic debates and backend precision. (Still
                wondering if the “Debate magic” worked...)
              </p>
              <ul>
                <li><b>Aditya Deshpande</b> – Backend Developer</li>
              </ul>
              <p>
                Handles the APIs like a champ. If you’re wondering whether he
                got that personal number or not — only his logs know.
              </p>
            </div>
          </div>
        </div>

        {/* Integrator Card */}
        <div className="col-md-4">
          <div className="card team-card">
            <div className="card-body">
              <h5 className="card-title">🧩 The Integrator</h5>
              <ul>
                <li><b>Arsh</b> – Integration Engineer</li>
              </ul>
              <p>
                Held it all together — from frontend finesse to backend
                brilliance. Our real MVP for bringing it to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
