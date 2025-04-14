
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div style={styles.screen}>
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>CommandCue</h1>
          <p style={styles.subtitle}>Master every talk with your personal AI speaking strategist.</p>
          <div style={styles.actions}>
            <Link to="/cuecraft"><button style={styles.primary}>Get Started</button></Link>
            <Link to="/rehearse"><button style={styles.secondary}>Explore Features</button></Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img src="/ai-coach.png" alt="AI Coach" style={{ width: '250px' }} />
        </div>
      </div>
    </div>
  );
}

function CueCraftScreen() {
  const [fileName, setFileName] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div style={styles.screen}>
      <div style={styles.card}>
        <h2>CueCraft Module</h2>
        <p>Upload your slides or notes to generate an AI-enhanced speaking script tailored to your audience.</p>
        <input type="file" style={styles.input} onChange={handleFileUpload} />
        {fileName && <p>Uploaded: {fileName}</p>}
        <button style={styles.primary} onClick={() => alert('Generating script...')}>Generate Script</button>
      </div>
    </div>
  );
}

function RehearseScreen() {
  const [recording, setRecording] = useState(false);

  const toggleRecording = () => {
    setRecording(prev => !prev);
  };

  return (
    <div style={styles.screen}>
      <div style={styles.card}>
        <h2>Rehearse Mode</h2>
        <p>Practice your talk and receive real-time feedback on pacing, energy, and clarity.</p>
        <button style={styles.primary} onClick={toggleRecording}>
          {recording ? 'Stop Rehearsal' : 'Start Rehearsal'}
        </button>
        {recording && <p>Recording in progress...</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={styles.navBar}>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/cuecraft">CueCraft</Link>
        <Link style={styles.navLink} to="/rehearse">Rehearse</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cuecraft" element={<CueCraftScreen />} />
        <Route path="/rehearse" element={<RehearseScreen />} />
      </Routes>
    </Router>
  );
}

const styles = {
  screen: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f9fc',
    minHeight: '100vh'
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  heroText: {
    maxWidth: '600px',
  },
  heroImage: {
    marginTop: '2rem'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#0b2545',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginTop: '1rem',
    color: '#4a5f73'
  },
  actions: {
    marginTop: '1.5rem'
  },
  primary: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#00bfa6',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '1rem'
  },
  secondary: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#e6f2f0',
    color: '#00bfa6',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  card: {
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    maxWidth: '600px',
    margin: '2rem auto'
  },
  input: {
    marginTop: '1rem',
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem'
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    backgroundColor: '#0b2545',
    padding: '1rem 0'
  },
  navLink: {
    color: '#ffffff',
    fontSize: '1rem',
    textDecoration: 'none'
  }
};

export default App;
