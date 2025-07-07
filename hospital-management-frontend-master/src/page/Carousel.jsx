import carousel1 from "../images/snip5.png";
import carousel2 from "../images/snip3.png";
import carousel3 from "../images/hospital_slider.png";
import carousel4 from "../images/360_F_645689490_Fzwptjq0YLCW8JZpC6lASo1KJcAgzZPj.jpg";
import carousel5 from "../images/health-care-social-media-post-template_544391-490.avif";
import carousel6 from "../images/medical-center-template-design_23-2150148026.avif";

const Carousel = () => {
  const slides = [
    { src: carousel1, alt: "Slide 1" },
    { src: carousel2, alt: "Slide 2" },
    { src: carousel3, alt: "Slide 3" },
    { src: carousel4, alt: "Slide 4" },
    { src: carousel5, alt: "Slide 5" },
    { src: carousel6, alt: "Slide 6" },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2500"
      style={{ maxHeight: "400px", overflow: "hidden" }}
    >
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img
              src={slide.src}
              className="d-block w-100"
              alt={slide.alt}
              style={{
                height: "400px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
