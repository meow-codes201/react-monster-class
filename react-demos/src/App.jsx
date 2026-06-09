import "./App.css";
import Person from "./Person";
import Products from "./Products";
function App() {
  return (
    <>
      <Person name="John Doe" age={40} />

      <Products name="Laptop" price={1200} />
    </>
  );
}

export default App;
