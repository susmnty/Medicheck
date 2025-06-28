import React, { useState } from "react";
import {
  Home, FileText, ShoppingCart, Settings,
  Stethoscope, HeartPulse, User, PlusCircle, ClipboardList, Menu
} from "lucide-react";
import "../styles/Dashboard.css";

const Card = ({ title, description, icon }) => (
  <div className="card">
    <div className="card-header">
      {icon}
      <span>{title}</span>
    </div>
    <p className="card-desc">{description}</p>
  </div>
);

const Button = ({ children, className = "", icon }) => (
  <button className={`btn ${className}`}>
    {icon}
    {children}
  </button>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="logo">
          <HeartPulse className="icon" />
          {sidebarOpen && <span>MediCheck</span>}
        </div>
        <nav>
          <div><Home className="icon" /> {sidebarOpen && "Home"}</div>
          <div><ClipboardList className="icon" /> {sidebarOpen && "Symptoms Check"}</div>
          <div><Stethoscope className="icon" /> {sidebarOpen && "Consult Doctor"}</div>
          <div><FileText className="icon" /> {sidebarOpen && "Reports"}</div>
          <div><ShoppingCart className="icon" /> {sidebarOpen && "Cart"}</div>
          <div><Settings className="icon" /> {sidebarOpen && "Settings"}</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="menu-btn">
            <Menu />
          </button>
          <h1 className="welcome">Welcome, User</h1>
          <div className="actions">
            <Button icon={<HeartPulse className="icon" />}>Ask AI</Button>
            <button className="icon-btn"><ShoppingCart className="icon" /></button>
            <button className="icon-btn"><User className="icon" /></button>
          </div>
        </div>

        <div className="cards">
          <Card title="Symptoms Checker" description="Get accurate suggestions based on your health condition." icon={<ClipboardList className="icon" />} />
          <Card title="Consult Doctor" description="Connect with certified healthcare professionals instantly." icon={<Stethoscope className="icon" />} />
          <Card title="Health Reports" description="Manage your medical history, records, and test reports." icon={<FileText className="icon" />} />
          <Card title="More Services" description="Lab tests, AI chatbot, and more coming soon." icon={<PlusCircle className="icon" />} />
        </div>

        <p className="footer">© 2025 MediCheck. All Rights Reserved.</p>

      </main>
    </div>
  );
};

export default Dashboard;
