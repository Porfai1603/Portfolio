import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Activities from "./pages/Activities";
import Project from "./pages/Project";
import Bigfamily from "./pages/Bigfamily";
import NontriGameBad from "./pages/NontriGameBad";
import SportsFestival from "./pages/SportsFestival";
import NontriGameBas from "./pages/NontriGameBas";
import Teach from "./pages/Teach";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/bigfamily" element={<Bigfamily />} />
        <Route path="/nontrigamebad" element={<NontriGameBad />} />
        <Route path="/sportsfestival" element={<SportsFestival />} />
        <Route path="/nontrigamebas" element={<NontriGameBas />} />
        <Route path="/teach" element={<Teach />} />
      </Routes>
    </Router>
  );
}

export default App;
