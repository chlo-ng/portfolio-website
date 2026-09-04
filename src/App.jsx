// styles.css is imported by index.css (single Tailwind root), which main.jsx loads.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages + components
import Navbar from "./components/Navbar";
import SocialsBar from "./components/SocialsBar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { LenisProvider } from "./lenis/LenisProvider";

function App() {
  return (
    <Router>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Karla:ital,wght@0,200..800;1,200..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
      </style>
      <div className="pb-16 xl:pb-0">
        <LenisProvider>
          <Navbar />
          <SocialsBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </LenisProvider>
      </div>
    </Router>
  );
}

export default App;
