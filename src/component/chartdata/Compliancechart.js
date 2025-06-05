import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { complianceTableData } from "../Tables/Table";
import "../../assets/Barchart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Compliancechart = () => {
  const labels = complianceTableData.map(row => row.category);
  const complianceValues = complianceTableData.map(row => row.compliance);
  const nonComplianceValues = complianceTableData.map(row => 100 - row.compliance);

  const data = {
    labels,
    datasets: [
      {
        label: "Compliance",
        data: complianceValues,
        backgroundColor: "#ED0295",
        stack: "Stack 0",
      },
      {
        label: "Non-Compliance",
        data: nonComplianceValues,
        backgroundColor: "#CDCDCD",
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: "#777",
          font: { size: 14, weight: 700, family: "Montserrat" },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "#777",
          font: { size: 14, weight: 700, family: "Montserrat" },
          callback: value => `${value}%`,
        },
        grid: { drawBorder: false },
      },
    },
    barPercentage: 0.7,
    categoryPercentage: 0.6,
  };

  return (
    <div className="chart-container" style={{ height: 350, width: "100%" }}>
      <Bar data={data} options={options} height={350} />
    </div>
  );
};

export default Compliancechart; 