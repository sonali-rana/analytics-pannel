import React from "react";

import LineChart from "./LineChart.js";
import BarChart from "./BarChart.js";
import PieChart from "./PieChart.js";

function MyChart() {
	return (
		<main>
			<LineChart />
			<div className='sub-charts'>
				<BarChart />
				<PieChart />
			</div>
		</main>
	);
}

export default MyChart;
