import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { generateRandomData } from "../utils";

const BarChart = () => {
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
				label: "My Data",
				data: generateRandomData(10),
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
				fill: "start",
			},
		],
	});

	return (
		<section style={{ width: "50%" }}>
			<Bar
				data={chartData}
				// options={{
				// 	plugins: {
				// 		title: {
				// 			display: true,
				// 			text: "Users Gained between 2016-2020",
				// 		},
				// 	},
				// }}
				// className='bar-chart'
			/>
		</section>
	);
};

export default BarChart;
