import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js"; // Importar los elementos necesarios

import { ChartProps } from "../interfaces";

// Registrar los elementos y la escala necesarios
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function BarChart({ chartData }: ChartProps) {
    return <Bar data={chartData} />;
}

export default BarChart;
