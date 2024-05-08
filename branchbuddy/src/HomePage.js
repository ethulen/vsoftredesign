import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header>
        <h1>Welcome to BranchBuddy</h1>
        <p>Your ultimate branch management solution</p>
      </header>
      <main>
        <section className="feature-section">
          <h2>Features</h2>
          <ul>
            <li>Efficient branch configuration</li>
            <li>Streamlined employee management</li>
            <li>Enhanced customer experience</li>
          </ul>
        </section>
        <section className="action-section">
          <h2>Get Started</h2>
          <p>Ready to revolutionize your branch operations?</p>
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 BranchBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
