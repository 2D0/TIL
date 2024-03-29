import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThisLab, ArraysTIL } from './repos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="this" element={<ThisLab />} />
          <Route path="arrays" element={<ArraysTIL />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
