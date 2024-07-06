import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { generateRandomData } from "../utils";

const LineChart = () => {
	const [chartData] = useState({
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Users",
				data: generateRandomData(30),
				backgroundColor: "rgb(54, 162, 235,0.2)",
				borderColor: "rgb(54, 162, 235, 1)",
				borderWidth: 1,
				fill: "start",
			},
		],
	});

	generateRandomData(30);

	return (
		<section style={{ height: "50%" }}>
			<Line
				data={chartData}
				options={{
					aspectRatio: 4,
				}}
			/>
		</section>
	);
};

export default LineChart;
