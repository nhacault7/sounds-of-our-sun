// Constant Variables
const BASE_URL = `https://services.swpc.noaa.gov/text`;
const SWEPAM_ENDPOINT = `/ace-swepam.txt`;
const EPAM_ENDPOINT = `ace-epam.txt`;

// Public functions
export const getSolarWindData = async () => {
  const data = await getDataRequest(SWEPAM_ENDPOINT)
	const parsedData = parseDataRequest(data);

	return parsedData;
}

export const getProtonElectronData = async () => {
	return await getDataRequest(EPAM_ENDPOINT);
}

// Private Functions
const getDataRequest = async (endpoint) => {
	const request = await fetch(
		BASE_URL +
		endpoint
	);
	
	return await request.text();
}

const parseDataRequest = (rawData) => {
	const rawDataArray = rawData.split("\n");
	const dataArray = rawDataArray.filter(line => !line.includes("#") && !line.includes(":"));

	return dataArray;
}