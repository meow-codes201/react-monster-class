import { useState } from "react";
function ArrayOfObjState() {
  const [movie, setMovie] = useState([
    { id: 1, title: "Spider Man", rating: 5 },
    { id: 2, title: "Iron Man", rating: 6 },
  ]);

  const addMovie = () => {
    const newId = movie[movie.length - 1].id;
    setMovie([...movie, { id: newId + 1, title: "John Wick", rating: 8 }]);
  };

  return (
    <>
      {movie.map((m) => (
        <h1>
          {m.id} {m.title} - {m.rating}
        </h1>
      ))}

      <button onClick={addMovie}>add movie</button>
    </>
  );
}
export default ArrayOfObjState;
