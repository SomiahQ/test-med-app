import React, { useState } from 'react';
import './Navbar.css'; // make sure your styles are linked correctly
import { Link } from 'react-router-dom';

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="/">
            <span className="logo-stay">Stay</span>
            <span className="logo-h">H</span>ealthy
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="nav__icon">
          <i className="fas fa-bars"></i>
        </div>

        {/* Navigation Links */}
        <ul className="nav__links active">
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="#">Appointments</a></li>
          <li className="link">
            <Link to="/instant-consultation">Instant Consultation</Link>
          </li>
          <li className="link">
            <Link to="/review">Review</Link> {/* Link to review section */}
          </li>
          <li className="link">
            <a href="/signup">
              <button className="btn1">Sign up</button>
            </a>
          </li>
          <li className="link">
            <a href="/Login">
              <button className="btn1">Login</button>
            </a>
          </li>
          
          {/* Profile Dropdown */}
          <li className="link" onClick={toggleProfileDropdown}>
            <button className="btn1">Profile</button>
            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <Link to="/profile">View Profile</Link>
                <Link to="/logout">Logout</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
