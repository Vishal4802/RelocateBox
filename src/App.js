import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About/about";
import Home from "./Home/home";
import Career from "./Career/career";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="nav">
          <div className="logo">
            <h2>RelocateBox</h2>
          </div>
          <div className="nav-links">
            <Link to = '/'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/career'>Careers</Link>
          </div>
        </div>
      <Routes>
          <Route index element={<Home />} />
          <Route path="career" element={<Career />} />
          <Route path="about" element={<About />} />
      </Routes>
      <section className='footer'>
        <div>
          <p><b>Call:</b> +91-9384028345</p>
          <p><b>Email:</b> admin@relocatebox.online</p>
        </div>
        <p>Copyright © 2023 All rights reserved | Website developed by Vishal Sharma</p>
      </section>
    </BrowserRouter>
  );
}

export default App;
