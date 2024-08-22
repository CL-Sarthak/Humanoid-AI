import React, { Suspense, useRef } from "react";
import { useChat } from "../hooks/useChat";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Preload } from '@react-three/drei';
import './Home.css';

const Avatar2 = React.lazy(() => import('./Avatar2.jsx'));

export const Home = ({ hidden, ...props }) => {
  const input = useRef();
  const { chat, loading } = useChat();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const sendMessage = () => {
    const text = input.current.value;
    if (!loading && text.trim()) {
      chat(text);
      input.current.value = "";
    }
  };

  const handleLogin = () => {
    instance.loginPopup().catch(e => console.error(e));
  };

  const handleLogout = () => {
    instance.logoutPopup().catch(e => console.error(e));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-brand">cirruslabs</div>
        <ul className="navbar-nav">
          <li><a href="/">Solutions</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">Company</a></li>
        </ul>
        <div className="navbar-contact">
          <span>CALL US: (877)431-0767 | INDIA | CANADA | MIDDLE EAST | USA</span>
        </div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="auth-button" aria-label="Logout">Logout</button>
        ) : (
          <button onClick={handleLogin} className="auth-button" aria-label="Login">Login</button>
        )}
      </nav>

      {isAuthenticated ? (
        <header className="hero">
          <div className="hero-content">
            <h1>Digital Transformation, <span className="highlight">Simplified</span></h1>
            <p>Are you ready to step into a world of transformation? Let's embark on a journey that's as human as it is inspiring. Your journey is our journey.</p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="hero-image">
            <Suspense fallback={<div>Loading Avatar...</div>}>
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} intensity={1} />
                <Avatar2 position={[0, -43, -8]} scale={27} />
                <OrbitControls />
                <Environment preset="sunset" />
                <Preload all />
              </Canvas>
            </Suspense>

            <div className="chat-input move-down">
              <div className="flex items-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
                <input
                  className="chat-input-field"
                  placeholder="Type a message..."
                  ref={input}
                  onKeyDown={handleKeyDown}
                  aria-label="Chat input"
                />
                <button
                  onClick={sendMessage}
                  className="chat-input-button"
                  aria-label="Send message"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </header>
        
      ) : (
        <header className="hero">
          <div className="hero-content">
            <h1>Welcome to CirrusLabs</h1>
            <p>Please sign in to explore our solutions and interact with our chatbot.</p>
            <button onClick={handleLogin} className="auth-button" aria-label="Sign in">Sign In</button>
          </div>
        </header>
      )}

      <div className="chat-button">
        <button>Chat with Sonya</button>
      </div>

      <section className="info-section">
        <h2>Who is CirrusLabs?</h2>
        <p>Our tagline, "Digital Transformation Simplified," isn't just a phrase; it's our commitment to making complex processes easy to understand and implement. Your journey is our journey, and together, we'll navigate the digital landscape, breaking down barriers and delivering results.</p>
        <button className="learn-more-btn">Learn more</button>
        <div className="info-media">
          <img src="/src/components/who.png" alt="Who is CirrusLabs?" />
        </div>
      </section>

      <section className="solutions-section">
        <h2>Explore Our Solutions</h2>
        <p>Our expertise spans advanced AI applications to sophisticated SAP integrations to efficient GRC platforms and more. To fully understand how our solutions can benefit your business, we encourage you to watch our video overview. Dive deeper into our solutions and discover ways to accelerate your success.</p>
        <div className="solutions-media">
          <img src="/src/components/expert.png" alt="Explore Our Solutions" />
        </div>
      </section>
    </div>
  );
};

export default Home;
