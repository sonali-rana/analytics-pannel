//function to generate random array data for charts
export const generateRandomData = (numPoints) => {
	const dataSet = new Array(numPoints)
		.fill(0)
		.map((val) => val + Math.floor(Math.random() * 70));

	return dataSet;
};
