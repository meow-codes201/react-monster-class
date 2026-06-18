import { useState } from "react";

function StateinObj() {
  const [movie, setMovie] = useState({
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    rating: 8.7,
  });

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => setMovie({ ...movie, rating: movie.rating + 1 })}>
        Increase Rating
      </button>
    </>
  );
}
export default StateinObj;
