// Public functions
export const transalateDataToPlayback = (data, type) => {
	const MAX_PLAYBACK = 2;
	const MIN_PLAYBACK = 0.1;

	const playbackStep = data[118].Data[`${type}Range`].Range / (MAX_PLAYBACK - MIN_PLAYBACK);
	const playbackValue = ((data[118].Data[type] / playbackStep).toFixed(3));
	return playbackValue; 
}