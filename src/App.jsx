import "./App.css";

const App = () => {
  const movies = [
    { name: "Harry Potter", purchased: true },
    { name: "The Lord of the Rings", purchased: false },
    { name: "The Hobbit", purchased: true },
  ];
  return (
    <>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li
            key={index}
            className={movie.purchased ? "completed" : "not-completed"}
          >
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
