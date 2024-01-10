import Hero from "./Hero";
import { Link } from "react-router-dom";
import placeholderImage from "../placeholder.png";

//TMDB API Key: b688f6e19d7f59bd7b738b2bedff0ad5
//Example link: https://api.themoviedb.org/3/movie/12?api_key=b688f6e19d7f59bd7b738b2bedff0ad5&language=en-US&append_to_response=star%20wars

const MovieCard = ({ movie }) => {
  const posterUrl =
    movie.poster_path == null
      ? placeholderImage
      : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const detailUrl = `/movies/${movie.id}`;
  const overview =
    movie.overview === "" ? "No description available" : movie.overview;

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <Link to={detailUrl}>
          <img
            src={posterUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={detailUrl}>{movie.original_title}</Link>
          </h5>
          <p className="card-text">{overview}</p>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `Your Search For: "${keyword}"`;
    
  const resultsHtml = searchResults.map((e, i) => {
    return <MovieCard key={i} movie={e} />;
  });

  return (
    <div>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </div>
  );
};

export default SearchView;
