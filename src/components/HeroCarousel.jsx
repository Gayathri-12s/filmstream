import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel({ movies }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)"
  };


  if (!movies || movies.length === 0) {
    return null;
  }


  return (

    <Slider {...settings}>

      {movies.map(movie => (

        <div key={movie.id} className="hero-slide">

          <img
            src={movie.banner || movie.thumbnail}
            className="hero-img"
            alt={movie.title}
          />

          <div className="hero-overlay">

            <h1>{movie.title}</h1>

            <p>{movie.description}</p>

            <div style={{ 
              display: "flex", 
              gap: "16px",
              marginTop: "30px" 
            }}>
              
              <button 
                className="btn btn-brand"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                ▶ Watch Now
              </button>

              <button 
                className="btn btn-soft"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                + My List
              </button>

            </div>

          </div>

        </div>

      ))}

    </Slider>
  );
}