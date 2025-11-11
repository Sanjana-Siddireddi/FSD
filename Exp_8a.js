
App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
 return (
 <Router>
 <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "30px" }}>
 <h2>React Router Example</h2>
 {/* Navigation Menu */}
 <nav style={{ marginBottom: "20px" }}>
 <Link to="/" style={{ margin: "10px" }}>Home</Link>
 <Link to="/about" style={{ margin: "10px" }}>About</Link>
 <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
 </nav>
 {/* Define Routes */}
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 </Routes>
 </div>
 </Router>
 );
}
export default App;
Home.js
import React from "react";
function Home() {
 return (
 <div>
 <h2>Welcome to the Home Page</h2>
 <p>This is the landing page of your React Router demo app.</p>
 </div>
 );
}
export default Home;

------------About-----------
import React from "react";
function About() {
 return (
 <div>
 <h2>About Page</h2>
 <p>This page provides information about our React Router example.</p>
 </div>
 );
}
export default About;

------home-----
import React from "react";
function Home() {
 return (
 <div>
 <h2>Welcome to the Home Page</h2>
 <p>This is the landing page of your React Router demo app.</p>
 </div>
 );
}
export default Home;

-------Contact------
import React from "react";
function Contact() {
 return (
 <div>
 <h2>Contact Page</h2>
 <p>You can contact us at <b>sasi.ac.in</b></p>
 </div>
 );
}
export default Contact;
