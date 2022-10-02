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
					ProtonDensityRange: {
						Low: 0.1,
						High: 10,
						Range: 10 - 0.1,
					},
					BulkSpeed: `${filteredData[8]}`,
					BulkSpeedRange: {
						Low: 350,
						High: 550,
						Range: 550 - 350,
					},
					IonTemperature: `${filteredData[9]}`,
					BulkSpeedRange: {
						Low: 1.0E+04,
						High: 1.0E+08,
						Range: 1.0E+08 - 1.0E+04,
					},
				},
			}
		);
	});

	return solarWindData;
};