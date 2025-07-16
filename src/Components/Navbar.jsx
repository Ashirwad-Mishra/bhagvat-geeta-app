import React from 'react';
import './Navbar.css'; // Import the new CSS file

const Navbar = ({ currentPage, setCurrentPage }) => {
  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="navbar">
      <h2 className="navbar-header">Select a Chapter</h2>
      <div className="navbar-buttons">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            onClick={() => setCurrentPage(chapter)}
            // The 'active' class is added conditionally
            className={`nav-button ${currentPage === chapter ? 'active' : ''}`}
          >
            {chapter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;