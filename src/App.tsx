
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/routes/Home'
import About from './assets/routes/Home/About';
import Projects from './assets/routes/Home/Projects';
import Games from './assets/routes/Home/Games';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
            <Route path="about" element={<About />}/>
            <Route path="games" element={<Games />}/>
            <Route path="projects" element={<Projects />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
 
}
