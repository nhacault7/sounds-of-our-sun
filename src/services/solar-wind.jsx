export const createSolarWindObject = (parsedData) => {
	let solarWindData = [];

	parsedData.forEach(line => {
		const seperatedData = line.split(" ");
		const filteredData = seperatedData.filter(entry => entry.length !== 0);
		
		solarWindData.push(
			{
				Status: `${filteredData[6]}`,
				Year: `${filteredData[0]}`,
				Month: `${filteredData[1]}`,
				Day: `${filteredData[2]}`,
				Time: `${filteredData[3]}`,
				Data: {
					ProtonDensity: `${filteredData[7]}`,
					BulkSpeed: `${filteredData[8]}`,
					IonTemperature: `${filteredData[9]}`,
				},
			}
		);
	});

	return solarWindData;
};