import { useState } from 'react';
import { matchesGraphData } from '../graphData';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph({ id }: { id: number }) {
  const graphData = matchesGraphData.find((match) => match.id === id);
  console.log(graphData);
  if (!graphData) return null;

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Team Runs Comparison',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const [graph, setGraph] = useState({
    labels: new Array(50).fill(0).map((_, i) => i + 1),
    datasets: [
      {
        label: 'Team 1',
        data: graphData.data.map((d) => d.team1),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Team 2',
        data: graphData.data.map((d) => d.team2),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  });

  return (
    <>
      <section className="flex justify-center">
        <div className="min-w-[300px] w-[700px] max-w-[1000px]">
          <Line data={graph} options={options} />
        </div>
      </section>
    </>
  );
}
