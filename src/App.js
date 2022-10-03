// Component Imports
import SoundPlayer from './components/SoundPlayer';
// Service Imports
import { getSolarWindObject } from './services/ace-data';
// Package Imports
import { useEffect, useState } from 'react';
// Style Imports
import './App.css';

function App () {
  const [solarWind, setSolarWind] = useState([]);

  const fetchData = () => {
    try {
      console.log("Fetching Solar Wind Data...");
      getSolarWindObject(setSolarWind);
    } catch (e) {
      console.log("Failed to Aquire Solar Wind Data");
      return;
    }
    console.log("Aquired Solar Wind Data");
  }

  useEffect(() => {
    fetchData();
    
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(intervalId)
  }, []);

  return (
    <>
      <SoundPlayer Data={solarWind} ControlledProperty={"Low"} DataSelection={""} VolumeSelection={""} PlaybackSelection={""} />
      <SoundPlayer Data={solarWind} ControlledProperty={"Mid"} DataSelection={""} VolumeSelection={""} PlaybackSelection={""} />
      <SoundPlayer Data={solarWind} ControlledProperty={"High"} DataSelection={""} VolumeSelection={""} PlaybackSelection={""} />
    </>
  );
}

export default App;
