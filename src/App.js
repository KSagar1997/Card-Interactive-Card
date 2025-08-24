import "./styles.css";
import InteractiveCard from "./components/InteractiveCard";

function App() {
  // Here
  return (
    <InteractiveCard
      type="flip"
      frontContent={<h2 className="text-white text-xl">Hello World</h2>}
      backContent={<p className="text-white">This is the back!</p>}
    />
  );
}

export default App;
