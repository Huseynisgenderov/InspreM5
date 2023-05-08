import Body from "./component/Body";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import VisitUs from "./component/VisitUs";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Body/>
      <VisitUs/>
    </div>
  );
}

export default App;
