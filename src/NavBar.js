// // import React from "react";

// // const Navbar = () => { return (
// //     <div class="topnav">
// //       <a class="active" href="#home">Home</a>
// //       <a href="#news">News</a>
// //       <a href="#contact">Contact</a>
// //       <a href="#about">About</a>
// //     </div>
// // ) }

// // export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <Link to="home">Click to view our home page</Link>
//       <br/>
//       <Link to="about">Click to view our about page</Link>
//       <br />
//       <Link to="contact">Click to view our contact page</Link>
//       <h1>OPEN LIBRARY SEARCH APP</h1>
//     </div>
//   );
// }

// export default Navbar;

import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function Navbar() {
  return (
    <div className="Navbar">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default Navbar;