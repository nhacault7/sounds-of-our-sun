// Package Imports
import { useState } from 'react'
// Translator Imports
import { translateDataToNote } from './../translators/note';
import { translateDataToVolume } from './../translators/volume';
import { transalateDataToPlayback } from '../translators/playback';

const SoundPlayer = (props) => {;
	const { Data, ControlledProperty, DataSelection, VolumeSelection, PlaybackSelection } = props;

	const [state, setState] = useState({
		play: true
	});
	const [note, setNote] = useState("Tremlo/Low/A1.ogg");
	const [volume, setVolume] = useState(1);
	const [playback, setPlayback] = useState(1);
	const [audio, setAudio] = useState(new Audio(note));

	const togglePlay = () => {
		if (Data.length !== 0) {
			if (Data[118].Status !== 9) {
				if (ControlledProperty === "Low" || ControlledProperty === "Mid" || ControlledProperty === "High") {
					setNote(`Tremlo/${ControlledProperty}/${translateDataToNote(Data, ControlledProperty, DataSelection)}`);
					console.log(note);
				}
				else if (ControlledProperty === "Volume") {
					setVolume(translateDataToVolume(Data, VolumeSelection));
				}
				else if (ControlledProperty === "Playback") {
					setPlayback(transalateDataToPlayback(Data, PlaybackSelection));
				}
			}
		}		

		setState({
			play: !state.play
		});

		audio.src = note;
		audio.volume = volume;
		audio.playbackRate = playback;
		audio.loop = true;
		state.play ? audio.play() : audio.pause();
	};

	return (
		<div>
			<button
				id="audioBtn"
				onClick={togglePlay}> {state.play ? "Play" : "Pause"}
			</button>
		</div>
	)
}

export default SoundPlayer;