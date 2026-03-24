import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/auth');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <img src="/images/dinedelightlogo.png" width="145" height="95" alt="DineDelight Logo" />
          </Link>
        </div>

        <div className="navbar-left">
          <ul className="nav-links">
            <li><NavLink to="/" className="nav-item">Home</NavLink></li>
            <li><NavLink to="/explore" className="nav-item">Explore Restaurants</NavLink></li>
            <li><NavLink to="/reservations" className="nav-item">Reserve Table</NavLink></li>
            <li><NavLink to="/contact" className="nav-item">Contact Us</NavLink></li>
            <li><NavLink to="/about" className="nav-item">About Us</NavLink></li>
            {user && <li><NavLink to="/dashboard" className="nav-item">Dashboard</NavLink></li>}
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="nav-auth">
            {user ? (
              <>
                <li><span className="nav-item">Welcome, {user.username}</span></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }} className="nav-item">Logout</a></li>
              </>
            ) : (
              <li><Link to="/auth" className="nav-item">Sign In / Sign Up</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
