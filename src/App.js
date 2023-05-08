import Body from "./component/Body";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import OurTeam from "./component/OurTeam";
import VisitUs from "./component/VisitUs";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Body />
      <OurTeam />
      <VisitUs />
    </div>
  );
}

export default App;
