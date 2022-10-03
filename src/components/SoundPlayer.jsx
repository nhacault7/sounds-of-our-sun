// Package Imports
import { useState, useEffect } from 'react'
// Translator Imports
import { translateDataToNote } from './../translators/note';
import { translateDataToVolume } from './../translators/volume';
import { transalateDataToPlayback } from '../translators/playback';

const SoundPlayer = (props) => {;
	const { Data, ControlledProperty, DataSelection, VolumeSelection, PlaybackSelection } = props;

	// const [note, setNote] = useState("");
	const [volume, setVolume] = useState(1);
	const [playback, setPlayback] = useState(1);
	// const [audio, setAudio] = useState();

	useEffect(() => {
		if (Data.length !== 0) {
			if (Data[118].Status !== 9) {
				let note;
				if (ControlledProperty === "Low" || ControlledProperty === "Mid" || ControlledProperty === "High") {
					note = (`Tremlo/${ControlledProperty}/${translateDataToNote(Data, ControlledProperty, DataSelection)}`);
				}
				else if (ControlledProperty === "Volume") {
					setVolume(translateDataToVolume(Data, VolumeSelection));
				}
				else if (ControlledProperty === "Playback") {
					setPlayback(transalateDataToPlayback(Data, PlaybackSelection));
				}

				const audio = (new Audio(note));
				audio.volume = volume;
				audio.playbackRate = playback;
				audio.loop = true;
				audio.play();
			}
			else {
				console.log("Looks Like There Is Something Wrong With The ACE Data")
			}
		}
		else {
			console.log("Data Empty");
		}
	}, [DataSelection]);

	return (
		// <div>
		// 	<button
		// 		id="audioBtn"
		// 		onClick={togglePlay}> {state.play ? "Play" : "Pause"}
		// 	</button>
		// </div>
		<></>
	)
}

export default SoundPlayer;