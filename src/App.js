import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DynamicPage from './components/DynamicPage';
const testData = require('./testData.json');

function App() {
  const [pageDetails, setPageDetails] = useState(testData.profile.sections);

  useEffect(() => {
    console.log('Test Data', pageDetails);
  }, []);
  return (
    <div className="App">
      <DynamicPage steps={pageDetails} />
    </div>
  );
}

export default App;
