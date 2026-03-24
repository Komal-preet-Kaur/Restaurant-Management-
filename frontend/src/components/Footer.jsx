import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/images/dinedelightlogo.png" alt="Delish Logo" />
            <span>DineDelight</span>
          </div>
          <div className="footer-address">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="footer-social">
            <a href="#"><img src="/images/telegram.png" alt="Telegram" /></a>
            <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/whatsapp.png" alt="WhatsApp" /></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>LINKS</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Meet our team</a></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Explore More</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>CONNECT WITH US</h3>
          <p>Subscribe and receive our offers and updates in your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="button">
              <img src="/images/email.png" alt="Send" />
            </button>
          </div>
          <p>Contact Us : 9042788200</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
