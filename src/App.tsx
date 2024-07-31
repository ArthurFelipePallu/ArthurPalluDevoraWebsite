import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/routes/Home";
import About from "./assets/routes/Home/About";
import Projects from "./assets/routes/Home/Projects";
import Games from "./assets/routes/Home/Games";
import LandPage from "./assets/routes/Home/LandPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<LandPage />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
