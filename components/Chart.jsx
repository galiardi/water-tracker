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

export const Chart = ({ datasetsData, labels, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  // labels: array of months corresponding to consumption periods.
  // record.date: date of measure.

  const data = {
    labels,
    datasets: [
      {
        label: "Andrea",
        data: datasetsData.Andrea,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Pablo",
        data: datasetsData.Pablo,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Rodrigo",
        data: datasetsData.Rodrigo,
        borderColor: "rgb(163, 162, 235)",
        backgroundColor: "rgba(163, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <main>
        <Line options={options} data={data} />
      </main>

      <style jsx>{`
        main {
          background-color: white;
          border-radius: 0 0 0.25rem 0.25rem;
        }
      `}</style>
    </>
  );
};
