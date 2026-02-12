import Slider from "react-slick";

export default function HeroCarousel({ movies }) {

  const settings = {
    dots: true,          // show dots
    infinite: true,
    speed: 600,          // transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true
  };


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

          </div>

        </div>

      ))}

    </Slider>
  );
}
