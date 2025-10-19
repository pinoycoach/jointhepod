import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JOIN THE POD</h3>
            <p>AI-powered workflows for creators.</p>
            <p className="tagline">What's YOUR POD?</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Napoleon Beltran</p>
            <p>GFA Nexus Philippines Chapter Leader</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Join the POD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
