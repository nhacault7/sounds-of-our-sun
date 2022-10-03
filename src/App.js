// Component Imports
import SoundPlayer from './components/SoundPlayer';
// Service Imports
import { getSolarWindObject } from './services/ace-data';
// Package Imports
import { useEffect, useState } from 'react';
// Style Imports
import './App.css';

function App () {
  // Logic Code By Nicholas Hacault
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

  const [lowPitchSelection, setLowPitchSelection] = useState("");
  const [midPitchSelection, setMidPitchSelection] = useState("");
  const [highPitchSelection, setHighPitchSelection] = useState("");
  const [volIntensitySelection, setVolIntensitySelection] = useState(1);
  const [pitchOscSelection, setPitchOscSelection] = useState(1);

  const [lowPitchText, setLowPitchText] = useState("");
  const [midPitchText, setMidPitchText] = useState("");
  const [highPitchText, setHighPitchText] = useState("");
  const [volIntensityText, setVolIntensityText] = useState("");
  const [pitchOscText, setPitchOscText] = useState("");

  // Design Code By Patrick Hacault
  // Github: PatrickHacault
  let clicked = "";
  let element = "";

  const lowPitch = () => {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "none";

    clicked = "Low Pitch";
    element = "button1"
    buttonShow();
  }

  const middlePitch = () => {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "none";

    clicked = "Middle Pitch";
    element = "button2"
    buttonShow();
  }

  const highPitch = () => {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "none";

    clicked = "High Pitch";
    element = "button3"
    buttonShow();
  }

  const volIntensity = () => {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button5").style.display = "none";

    clicked = "Volume Intensity";
    element = "button4"
    buttonShow();
  }

  const pitchOsc = () => {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button1").style.display = "none";

    clicked = "Pitch Oscillation";
    element = "button5"
    buttonShow();
  }

  const option1 = () => {
    buttonHide();
    document.getElementById("button1").style.display = "block";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button3").style.display = "block";
    document.getElementById("button4").style.display = "block";
    document.getElementById("button5").style.display = "block";
    document.getElementById(element).innerHTML = clicked + ": Plasma Density"
    
    if (clicked === "Low Pitch") {
      setLowPitchSelection("ProtonDensity");
      setLowPitchText(solarWind[118].Data.ProtonDensity);
    } 
    else if (clicked === "Middle Pitch") {
      setMidPitchSelection("ProtonDensity");
      setMidPitchText(solarWind[118].Data.ProtonDensity);
    }
    else if (clicked === "High Pitch") {
      setHighPitchSelection("ProtonDensity");
      setHighPitchText(solarWind[118].Data.ProtonDensity);
    }
    else if (clicked === "Volume Intensity") {
      setVolIntensitySelection("ProtonDensity");
      setVolIntensityText(solarWind[118].Data.ProtonDensity);
    }
    else if (clicked === "Pitch Oscillation") {
      setPitchOscSelection("ProtonDensity");
      setPitchOscText(solarWind[118].Data.ProtonDensity);
    }
  }

  const option2 = () => {
    buttonHide();
    document.getElementById("button1").style.display = "block";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button3").style.display = "block";
    document.getElementById("button4").style.display = "block";
    document.getElementById("button5").style.display = "block";
    document.getElementById(element).innerHTML = clicked + ": Plasma Temperature"

    if (clicked === "Low Pitch") {
      setLowPitchSelection("IonTemperature");
      setLowPitchText(solarWind[118].Data.IonTemperature);
    } 
    else if (clicked === "Middle Pitch") {
      setMidPitchSelection("IonTemperature");
      setMidPitchText(solarWind[118].Data.IonTemperature);
    }
    else if (clicked === "High Pitch") {
      setHighPitchSelection("IonTemperature");
      setHighPitchText(solarWind[118].Data.IonTemperature);
    }
    else if (clicked === "Volume Intensity") {
      setVolIntensitySelection("IonTemperature");
      setVolIntensityText(solarWind[118].Data.IonTemperature);
    }
    else if (clicked === "Pitch Oscillation") {
      setPitchOscSelection("IonTemperature");
      setPitchOscText(solarWind[118].Data.IonTemperature);
    }
  }

  const option3 = () => {
    buttonHide();
    document.getElementById("button1").style.display = "block";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button3").style.display = "block";
    document.getElementById("button4").style.display = "block";
    document.getElementById("button5").style.display = "block";
    document.getElementById(element).innerHTML = clicked + ": Plasma Speed"

    if (clicked === "Low Pitch") {
      setLowPitchSelection("BulkSpeed");
      setLowPitchText(solarWind[118].Data.BulkSpeed);
    } 
    else if (clicked === "Middle Pitch") {
      setMidPitchSelection("BulkSpeed");
      setMidPitchText(solarWind[118].Data.BulkSpeed);
    }
    else if (clicked === "High Pitch") {
      setHighPitchSelection("BulkSpeed");
      setHighPitchText(solarWind[118].Data.BulkSpeed);
    }
    else if (clicked === "Volume Intensity") {
      setVolIntensitySelection("BulkSpeed");
      setVolIntensityText(solarWind[118].Data.BulkSpeed);
    }
    else if (clicked === "Pitch Oscillation") {
      setPitchOscSelection("BulkSpeed");
      setPitchOscText(solarWind[118].Data.BulkSpeed);
    }
  }

  const option4 = () => {
    buttonHide();
    document.getElementById("button1").style.display = "block";
    document.getElementById("button2").style.display = "block";
    document.getElementById("button3").style.display = "block";
    document.getElementById("button4").style.display = "block";
    document.getElementById("button5").style.display = "block";
    document.getElementById(element).innerHTML = clicked
  }

  const buttonShow = () => {
    document.getElementById("option1").style.display = "block";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option3").style.display = "block";
    document.getElementById("option4").style.display = "block";
  }

  const buttonHide = () => {
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
  }

  return (
    <>
      <div className="titleContainer">
        SOUNDS OF OUR SUN
      </div>
      <span className="dot"></span>
      <div className="mainContainer">
        <div id="container1">
          <div id="textBoxContainer">
            <div id="box">Low Pitch
              <SoundPlayer Data={solarWind} ControlledProperty={"Low"} DataSelection={lowPitchSelection} VolumeSelection={volIntensitySelection} PlaybackSelection={pitchOscSelection} />
            </div>
            <div id="box">Middle Pitch
              <SoundPlayer Data={solarWind} ControlledProperty={"Mid"} DataSelection={midPitchSelection} VolumeSelection={volIntensitySelection} PlaybackSelection={pitchOscSelection} />
            </div>
            <div id="box">High Pitch
              <SoundPlayer Data={solarWind} ControlledProperty={"High"} DataSelection={highPitchSelection} VolumeSelection={volIntensitySelection} PlaybackSelection={pitchOscSelection} />
            </div>
            <div id="box">Pitch Oscillation</div>
          </div>
          <div id="dataBoxContainer">
            <div className="dataBox" id="dataBox1">
              <p>{lowPitchText ? lowPitchText : "000"}</p>
            </div>
            <div className="dataBox" id="dataBox2">
              <p>{midPitchText ? midPitchText : "000"}</p>
            </div>
            <div className="dataBox" id="dataBox3">
              <p>{highPitchText ? highPitchText : "000"}</p>
            </div>
            <div className="dataBox" id="dataBox4">
              <p>{pitchOscText ? pitchOscText : "000"}</p>
            </div>
          </div>
          <div id="spacer2"></div>
          <div id="volumeGraphic">
            <div className="notch" id="notch1" style={{backgroundColor: "#ff2600"}}></div>
            <div className="notch" id="notch2" style={{backgroundColor: "#FF5D00"}}></div>
            <div className="notch" id="notch3" style={{backgroundColor: "#FF8B00"}}></div>
            <div className="notch" id="notch4" style={{backgroundColor: "#FF9B00"}}></div>
            <div className="notch" id="notch5" style={{backgroundColor: "#FFB200"}}></div>
            <div className="notch" id="notch6" style={{backgroundColor: "#FFC500"}}></div>
            <div className="notch" id="notch7" style={{backgroundColor: "#FFF700"}}></div>
            <div className="notch" id="notch8" style={{backgroundColor: "#FFFF00"}}></div>
            <div className="notch" id="notch9" style={{backgroundColor: "#F0FF00"}}></div>
            <div className="notch" id="notch10" style={{backgroundColor: "#ECFF00"}}></div>
            <div className="notch" id="notch11" style={{backgroundColor: "#D8FF00"}}></div>
            <div className="notch" id="notch12" style={{backgroundColor: "#C9FF00"}}></div>
            <div className="notch" id="notch13" style={{backgroundColor: "#B2FF00"}}></div>
            <div className="notch" id="notch14" style={{backgroundColor: "#97FF00"}}></div>
            <div className="notch" id="notch15" style={{backgroundColor: "#7CFF00"}}></div>
            <div className="notch" id="notch16" style={{backgroundColor: "#64FF00"}}></div>
            <div className="notch" id="notch17" style={{backgroundColor: "#46FF00"}}></div>
            <div className="notch" id="notch18" style={{backgroundColor: "#23FF00"}}></div>
          </div>
        </div>
      </div>
      <div className="selectorContainer">
        <button id="button1" onClick={lowPitch}>Low Pitch</button>
        <button id="button2" onClick={middlePitch}>Middle Pitch</button>
        <button id="button3" onClick={highPitch}>High Pitch</button>
        <button id="button4" onClick={volIntensity}>Volume Intensity</button>
        <button id="button5" onClick={pitchOsc}>Pitch Oscillation</button>
        <button id="option1" onClick={option1}>Plasma Density</button>
        <button id="option2" onClick={option2}>Plasma Temperature</button>
        <button id="option3" onClick={option3}>Plasma Speed</button>
        <button id="option4" onClick={option4}>None</button>
      </div>
    </>
  );
}

export default App;
