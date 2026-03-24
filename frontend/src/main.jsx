import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import '../public/styles/index.css';
import '../public/styles/homestyle.css';
import '../public/styles/contactus.css';
import '../public/styles/reservation.css';
import '../public/styles/aboutus.css';
import '../public/styles/exploreRes.css';
import '../public/styles/privacypolicy.css';
import './auth-legacy.css';
import './legacy-responsive-fixes.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
