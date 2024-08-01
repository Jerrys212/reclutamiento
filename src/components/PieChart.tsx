import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Importar los elementos necesarios

import { ChartProps } from "../interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }: ChartProps) {
    return <Doughnut data={chartData} style={{}} />;
}

export default PieChart;
