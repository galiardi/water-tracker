import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ lecturas }) => {
  console.log(lecturas);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Consumo de agua mensual (m3)",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Andrea",
        data: [100, 200, 300, 400, 300, 200, 100],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Pablo",
        data: [300, 500, 200, 100, 300, 500, 200],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Rodrigo",
        data: [500, 200, 100, 300, 500, 200, 100],
        borderColor: "rgb(163, 162, 235)",
        backgroundColor: "rgba(163, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
