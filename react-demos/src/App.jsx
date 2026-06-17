import "./App.css";
import ProfileCard from "./ProfileCard";
import StyleCard from "./StyleCard";
import IconComponent from "./IconComponent";
function App() {
  return (
    <>
      <StyleCard message="Hello, World!" />
      <ProfileCard name="Iron Man" />
      <IconComponent />
    </>
  );
}

export default App;
