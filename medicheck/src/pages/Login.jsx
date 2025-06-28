// Login.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Login.css';
import logo from '../assets/logo.png';
import googleLogo from '../assets/google.png';
import appleLogo from '../assets/apple.png';

export default function Login() {
 const handleLogin = (e) => {
 e.preventDefault();
 console.log("Logging in...");
 };

 return (
 <div className="auth-container">
 <motion.div
 className="auth-box"
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -40 }}
 transition={{ duration: 0.6, ease: 'easeOut' }}
 >
 <div className="auth-logo-title">
 <img src={logo} alt="MediCheck Logo" className="logo" />
 <h1 className="apple-title">MediCheck Login</h1>
 </div>

 <form onSubmit={handleLogin}>
 <input type="email" placeholder="Email" className="apple-input" required />
 <input type="password" placeholder="Password" className="apple-input" required />
 <button type="submit" className="apple-button">Login</button>
 </form>

 <div className="social-login">
 <button className="social-button google">
 <img src={googleLogo} alt="Google" />
 Continue with Google
 </button>
 <button className="social-button apple">
 <img src={appleLogo} alt="Apple" />
 Continue with Apple
 </button>
 </div>

 <div className="auth-footer">
 <span>Don’t have an account? <Link to="/signup">Sign Up</Link></span>
 </div>
 </motion.div>
 </div>
 );
}
