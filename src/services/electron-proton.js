export const createProtonElectronObject = (parsedData) => {
	let protonElectronData = [];

	parsedData.forEach(line => {
		const seperatedData = line.split(" ");
		const filteredData = seperatedData.filter(entry => entry.length !== 0);
		
		protonElectronData.push(
			{
				Status: {
					Electron: `${filteredData[6]}`,
					Proton: `${filteredData[9]}`,
				},
				Year: `${filteredData[0]}`,
				Month: `${filteredData[1]}`,
				Day: `${filteredData[2]}`,
				Time: `${filteredData[3]}`,
				Data: {
					Electron: {
						"38-53": `${filteredData[7]}`,
						"175-315": `${filteredData[8]}`,
					},
					Proton: {
						"47-68": `${filteredData[10]}`,
						"115-195": `${filteredData[11]}`,
						"310-580": `${filteredData[12]}`,
						"795-1193": `${filteredData[13]}`, 
						"1060-1900": `${filteredData[14]}`,
					},
				},
			}
		);
	});

	return protonElectronData;
};