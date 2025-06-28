import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import "../styles/Login.css";

export default function Signup() {
 const handleSignup = (e) => {
 e.preventDefault();
 const name = e.target.name.value;
 const email = e.target.email.value;
 const password = e.target.password.value;

 if (!name || !email || !password) {
 toast.error("All fields are required");
 return;
 }

 // Simulate signup
 toast.success("Account created successfully!");
 console.log("Signing up:", { name, email, password });
 };

 return (
 <div className="auth-container">
 <motion.div
 className="auth-box"
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -40 }}
 transition={{ duration: 0.6, ease: "easeOut" }}
> 
 <h1 className="apple-title">Create your MediCheck account</h1>
 <form onSubmit={handleSignup}>
 <input
 type="text"
 name="name"
 placeholder="Full Name"
 className="apple-input"
 />
 <input
 type="email"
 name="email"
 placeholder="Email"
 className="apple-input"
 />
 <input
 type="password"
 name="password"
 placeholder="Password"
 className="apple-input"
 />
 <button type="submit" className="apple-button">
 Create Account
 </button>
 </form>
 <div className="auth-footer">
 <span>Already have an account? <Link to="/">Sign In</Link></span>
 </div>
 </motion.div>
 </div>
);
}
