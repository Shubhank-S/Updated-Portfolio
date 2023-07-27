import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Project";
import Navbar from "./components/Navbar/Navbar";

// import Experience from "./Pages/Experience";
// import ProjectDisplay from "./Pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          {/* <Route path="/project/:id" element={<ProjectDisplay />} /> */}
          {/* <Route path="/experience" element={<Experience />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
