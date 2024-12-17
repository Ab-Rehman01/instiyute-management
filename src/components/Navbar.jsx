// src/components/Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'; // Make sure you import your CSS here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/add-course">Add Course</Link></li>
        <li><Link to="/admin/manage-teachers">Manage Teachers</Link></li>
        <li><Link to="/admin/manage-batches">Manage Batches</Link></li>
        <li><Link to="/admin/manage-sections">Manage Sections</Link></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};





// const styles = {
//   nav: {
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "10px",
//   },
//   ul: {
//     display: "flex",
//     listStyle: "none",
//     gap: "15px",
//   },
// };

export default Navbar;
