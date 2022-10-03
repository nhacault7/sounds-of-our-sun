// Public functions
export const translateDataToVolume = (data, type) => {
	const MAX_VOLUME = 1;
	const MIN_VOLUME = 0.1;

	const volumeStep = data[118].Data[`${type}Range`].Range / (MAX_VOLUME - MIN_VOLUME);
	const volumeValue = ((data[118].Data[type] / volumeStep).toFixed(3));
	return volumeValue; 
}