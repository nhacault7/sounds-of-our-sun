// Service Imports
import { getSolarWindObject } from './services/ace-data';
// Package Imports
import { useEffect, useState } from 'react';
// Style Imports
import './App.css';

function App () {
  const [solarWind, setSolarWind] = useState([]);
  
  useEffect(() => {
    getSolarWindObject(setSolarWind);
  }, []);

  return (
    <></>
  );
}

export default App;
