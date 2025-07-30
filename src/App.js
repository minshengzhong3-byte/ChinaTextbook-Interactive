import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChapterList from './components/ChapterList';
import ChapterContent from './components/ChapterContent';
import Exercise from './components/Exercise';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>五年级数学学习平台</h1>
          <nav>
            <button>进度</button>
            <button>错题本</button>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ChapterList />} />
            <Route path="/chapter/:id" element={<ChapterContent />} />
            <Route path="/exercise/:id" element={<Exercise />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;