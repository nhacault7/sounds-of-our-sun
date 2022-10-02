// Service Imports
import { createSolarWindObject } from './solar-wind';
// Constant Variables
const BASE_URL = `https://services.swpc.noaa.gov/text`;
const SWEPAM_ENDPOINT = `/ace-swepam.txt`;
const EPAM_ENDPOINT = `ace-epam.txt`;

// Public functions
export const getSolarWindObject = (setSolarWind) => {
	let solarPromise = new Promise(function(resolve, reject) {
		let request = getDataRequest(SWEPAM_ENDPOINT);

		if (request.length !== 0) {
			resolve(request);
		}
		else {
			reject("Failed to fetch data");
		}
	});

	solarPromise.then(
		function(data) {
			const parsedData = parseDataRequest(data);

			setSolarWind(createSolarWindObject(parsedData));
		},
		function(error) {
			console.log(error);
		}
	);
};

export const getProtonElectronData = async () => {
	return await getDataRequest(EPAM_ENDPOINT);
};

// Private Functions
const getDataRequest = async (endpoint) => {
	let request = await fetch(BASE_URL+endpoint);
	let response = await request.text();

	return response;
};

const parseDataRequest = (rawData) => {
	const rawDataArray = rawData.split("\n");
	const dataArray = rawDataArray.filter(line => !line.includes("#") && !line.includes(":"));
	
	return dataArray;
};