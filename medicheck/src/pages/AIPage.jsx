import React from "react";
import "../styles/AIPage.css";
import { Sparkles, Mic, Send, User, Bot } from "lucide-react";

const AIPage = () => {
  return (
    <div className="ai-page">
      {/* Header Section */}
      <header className="ai-header">
        <div className="ai-logo">
          <Sparkles className="icon logo-icon" />
          <h1>Medi AI</h1>
        </div>
        <p className="ai-subtitle">Your 24x7 smart health companion</p>
      </header>

      {/* Chat Container */}
      <div className="ai-chat-container">
        <div className="chat-scrollable">
          <div className="chat-bubble ai">
            <Bot className="bubble-icon" />
            <p>
              Hi there! I'm your AI health assistant. Describe your symptoms,
              and I’ll do my best to guide you. 😊
            </p>
          </div>

          <div className="chat-bubble user">
            <User className="bubble-icon" />
            <p>I’ve been feeling dizzy and have a sore throat.</p>
          </div>

          <div className="chat-bubble ai">
            <Bot className="bubble-icon" />
            <p>
              That might be a sign of a viral infection or fatigue. Stay
              hydrated and get rest. Would you like me to suggest a nearby doctor?
            </p>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="ai-input-section">
        <input
          className="ai-input"
          type="text"
          placeholder="Describe your health issue..."
        />
        <button className="mic-button">
          <Mic className="icon" />
        </button>
        <button className="send-button">
          <Send className="icon" />
        </button>
      </div>

      {/* Footer */}
      <footer className="ai-footer">
        <p>© 2025 MediCheck AI. Designed for smart healthcare.</p>
      </footer>
    </div>
  );
};

export default AIPage;