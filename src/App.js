import Body from "./component/Body";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Body/>
    </div>
  );
}

export default App;
