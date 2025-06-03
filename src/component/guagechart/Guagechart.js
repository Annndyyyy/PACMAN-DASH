import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

function Guagechart({ filledPercentage }) {
  // Prepare data for the doughnut chart
  const data = {
    // Note: 'label' should be 'labels' (array of labels for the chart)
    // labels: ['Yes', 'No'], 
    datasets: [
      {
        label: 'POLL',
        data: [filledPercentage, 100 - filledPercentage], // filled vs remaining percentage
        backgroundColor: ["#FF0087", "rgb(205, 205, 205)"], // fixed missing closing bracket
        circumference: 180, // half circle
        rotation: 270, // start from bottom (270deg)
        cutout: "80%", // hollow center size
      },
    ],
  };

  // Options to customize the chart appearance and behavior
  const option = {
    // responsive: true,
    // maintainAspectRatio: false,
    // plugins: {
    //   legend: {
    //     display: false, // hide legend
    //   },
    //   tooltip: {
    //     enabled: false, // disable tooltips
    //   },
    // },
  };

  return (
    <div style={{ width: "50px" }}>
      {/* Render Doughnut chart */}
      <Doughnut data={data} options={option} />
    </div>
  );
}

export default Guagechart;
