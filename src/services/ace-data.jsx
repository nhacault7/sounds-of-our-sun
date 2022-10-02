// Constant Variables
const BASE_URL = `https://services.swpc.noaa.gov/text`;
const SWEPAM_ENDPOINT = `/ace-swepam.txt`;
const EPAM_ENDPOINT = `ace-epam.txt`;

// Public functions
export const getSolarWindData = async () => {
  return await getDataRequest(SWEPAM_ENDPOINT);
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