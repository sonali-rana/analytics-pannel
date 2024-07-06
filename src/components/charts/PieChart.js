import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { generateRandomData } from "../utils";

const PieChart = () => {
	const [chartData] = useState({
		labels: ["New Visitor", "Returning Visitor"],
		datasets: [
			{
				label: "My Data",
				data: generateRandomData(2),
				backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
				hoverOffset: 4,
			},
		],
	});

	return (
		<section style={{ width: "25%" }}>
			<Pie data={chartData} />
		</section>
	);
};

export default PieChart;
