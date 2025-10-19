import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-text">JOIN THE POD</span>
          </Link>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experiments">Experiments</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
