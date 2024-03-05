import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThisLab } from './repos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="this" element={<ThisLab />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
