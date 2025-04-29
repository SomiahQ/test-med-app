import React from 'react';
import './Navbar.css'; // make sure your styles are linked correctly

function Navbar() {
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
          <li className="link"><a href="/home">Home</a></li>
          <li className="link"><a href="#">Appointments</a></li>
          <li className="link"><a href="#">Health Blog</a></li>
          <li className="link"><a href="#">Reviews</a></li>
          <li className="link">
            <a href="/signup">
              <button className="btn1">Sign up</button>
            </a>
          </li>
          <li className="link">
            <a href="/login">
              <button className="btn1">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
