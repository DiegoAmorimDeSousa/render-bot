import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotWidget from './BotWidget';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:botId" element={<BotWidget />} />
      </Routes>
    </Router>
  );
}

export default App;
