import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../placeholder.png";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b688f6e19d7f59bd7b738b2bedff0ad5&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      //TODO: what to do if posterPath is null
      const posterPath =
        movieDetails.poster_path === null
          ? placeholderImage
          : `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      const overview =
        movieDetails.overview === ""
          ? "No description available."
          : movieDetails.overview;

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-3">
            <Link to="/search">Return to searches</Link>
          </div>
          <div className="container my-3">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="Failed to Load"
                  className="img-fluid shadow rounded"
                  placeholder="./placeholder.png"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
