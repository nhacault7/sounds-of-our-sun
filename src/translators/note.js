// Note Lists
const LowNotes = [
	"A1.ogg",
	"ASharp1.ogg",
	"B1.ogg",
	"C1.ogg",
	"CSharp1.ogg",
	"D1.ogg",
	"DSharp1.ogg",
	"E1.ogg",
	"F1.ogg",
	"FSharp1.ogg",
	"G1.ogg",
	"GSharp1.ogg",
	"A2.ogg",
	"ASharp2.ogg",
	"B2.ogg",
	"C2.ogg",
	"CSharp2.ogg",
	"D2.ogg",
	"DSharp2.ogg",
	"E2.ogg",
	"F2.ogg",
	"FSharp2.ogg",
	"G2.ogg",
	"GSharp2.ogg",
	"A3.ogg",
	"ASharp3.ogg",
	"B3.ogg",
	"C3.ogg",
	"CSharp3.ogg",
];

const MidNotes = [
	"D3.ogg",
	"DSharp3.ogg",
	"E3.ogg",
	"F3.ogg",
	"FSharp3.ogg",
	"G3.ogg",
	"GSharp3.ogg",
	"A4.ogg",
	"ASharp4.ogg",
	"B4.ogg",
	"C4.ogg",
	"CSharp4.ogg",
	"D4.ogg",
	"DSharp4.ogg",
	"E4.ogg",
	"F4.ogg",
	"FSharp4.ogg",
	"G4.ogg",
	"GSharp4.ogg",
	"A5.ogg",
	"ASharp5.ogg",
	"B5.ogg",
	"C5.ogg",
	"CSharp5.ogg",
	"D5.ogg",
	"DSharp5.ogg",
	"E5.ogg",
	"F5.ogg",
	"FSharp5.ogg",
	"G5.ogg",
];

const HighNotes = [
	"GSharp5.ogg",
	"A6.ogg",
	"ASharp6.ogg",
	"B6.ogg",
	"C6.ogg",
	"CSharp6.ogg",
	"D6.ogg",
	"DSharp6.ogg",
	"E6.ogg",
	"F6.ogg",
	"FSharp6.ogg",
	"G6.ogg",
	"GSharp6.ogg",
	"A7.ogg",
	"ASharp7.ogg",
	"B7.ogg",
	"C7.ogg",
	"CSharp7.ogg",
	"D7.ogg",
	"DSharp7.ogg",
	"E7.ogg",
	"F7.ogg",
	"FSharp7.ogg",
	"G7.ogg",
	"GSharp7.ogg",
	"A8.ogg",
	"ASharp8.ogg",
];

// Public functions
export const translateDataToNote = (data, pitchRange, type) => {
	if (pitchRange === "Low") {
		const notesAvailable = 29;
		const noteStep = data[118].Data[`${type}Range`].Range / notesAvailable;

		let noteIndex = 0;
		if (type === "BulkSpeed") {
			noteIndex = ((data[118].Data[type] - 350) / noteStep).toFixed(0);
		}
		else if (type === "IonTemperature") {
			noteIndex = ((data[118].Data[type] - 1.0E+04) / noteStep).toFixed(0);
		}
		else if (type === "ProtonDensity") {
			noteIndex = ((data[118].Data[type] - 0.1) / noteStep).toFixed(0) - 1;
		}

		return LowNotes[noteIndex]; 
	} 
	else if (pitchRange === "Mid") {
		const notesAvailable = 30;
		const noteStep = data[118].Data[`${type}Range`].Range / notesAvailable;

		let noteIndex = 0;
		if (type === "BulkSpeed") {
			noteIndex = ((data[118].Data[type] - 350) / noteStep).toFixed(0);
		}
		else if (type === "IonTemperature") {
			noteIndex = ((data[118].Data[type] - 1.0E+04) / noteStep).toFixed(0);
		}
		else if (type === "ProtonDensity") {
			noteIndex = ((data[118].Data[type] - 0.1) / noteStep).toFixed(0) - 1;
		}

		return MidNotes[noteIndex]; 
	} 
	else if (pitchRange === "High") {
		const notesAvailable = 29;
		const noteStep = data[118].Data[`${type}Range`].Range / notesAvailable;

		let noteIndex = 0;
		if (type === "BulkSpeed") {
			noteIndex = ((data[118].Data[type] - 350) / noteStep).toFixed(0);
		}
		else if (type === "IonTemperature") {
			noteIndex = ((data[118].Data[type] - 1.0E+04) / noteStep).toFixed(0);
		}
		else if (type === "ProtonDensity") {
			noteIndex = ((data[118].Data[type] - 0.1) / noteStep).toFixed(0) - 1;
		}

		return HighNotes[noteIndex]; 
	}
}