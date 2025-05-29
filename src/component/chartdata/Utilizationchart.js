import React, { useState, useEffect } from "react";
import "../../assets/Barchart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const UtilizationChart = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.95);
  const data = {
    labels: [
      10, 8, 9, 11, 10, 8, 9, 10, 11, 10, 11, 10, 9, 8, 9, 11, 10,
      9, 8, 10, 12, 11
    ],
    datasets: [
      {
        label: "CPU",
        data: [
          10, 8, 9, 11, 10, 8, 9, 10, 11, 10, 11, 10, 9, 8, 9, 11,
          10, 9, 8, 10, 12, 11,
        ],
        fill: false,
        borderColor: "#e660be",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        display: false,
        grid: {
            drawBorder: false,
            display: false,
        },
        borderWidth:2,
        color:'black'
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        grid: {
            drawBorder: false,
            display: false,
        },
        ticks: {
          stepSize: 10,
          callback: (value) => {
            return value + "%     ";
          },
        },
        display: true,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
  };
  const data1 = {
    labels: [
        168, 115, 169, 116, 170, 117, 167, 114, 171, 118, 169, 116, 170,
        117, 167, 114, 168, 115, 171, 118, 169, 116, 170, 117
      ],
    datasets: [
      {
        label: "CPU",
        data: [
            168, 140, 180, 145, 160, 117, 167, 149, 171, 125, 169, 180, 150,
            137, 167, 144, 168, 155, 171, 188, 169, 126, 170, 167
          ],
        fill: false,
        borderColor: "#bced66",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "CPU",
        data:  [
            111, 135, 144, 139, 121, 137, 142, 119, 129, 140, 131, 148, 120,
            138, 125, 136, 144, 146, 130, 143, 139, 149, 140,145
          ],
        fill: false,
        borderColor: "#b080e8",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
  const options1 = {
    scales: {
      x: {
        display: false,
        grid: {
            drawBorder: false,
            display: false,
            color: 'black'
        },
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        grid: {
            drawBorder: false,
            display: false,
        },
        max: 400,
        ticks: {
          stepSize: 200,
          callback: (value) => {
            return value + "kb/s";
          },
        },
        display: true,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
  };
  const data2 = {
    labels: [
      50, 48, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50,
      48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52,
    ],
    datasets: [
      {
        label: "CPU",
        data: [
            29, 32, 28, 27, 30, 31, 26, 25, 30, 29, 32, 28, 27, 31, 26,
            26, 27, 28, 30, 29, 32, 28, 27, 31, 25,24,28,24,23,32
        ],  
        fill: false,
        borderColor: "#60d2e6",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "CPU",
        data: [
          50, 48, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52,
          50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52,
        ],
        fill: false,
        borderColor: "#e3e660",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };
  const options2 = {
    scales: {
      x: {
        display:false,
        grid: {
            drawBorder: false,
            display: false,
              
            
        },
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        grid: {
            drawBorder: false,
            display: false,
        },
        ticks: {
          stepSize: 50,
          callback: (value) => {
            return value + "MB ";
          },
        },
        display: true,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.95);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="chart-container">
        <div className="title-graph">CPU</div>
        <Line
          data={data}
          options={{ ...options, responsive: true, maintainAspectRatio: false }}
          width={chartWidth}
          height={80}
        />
      </div>
      <div className="chart-container">
        <div className="title-graph">I/O</div>
        <Line
          data={data1}
          options={{
            ...options1,
            responsive: true,
            maintainAspectRatio: false,
          }}
          width={chartWidth}
          height={80}
        />
      </div>
      <div className="chart-container">
        <div className="title-graph">DISK</div>
        <Line
          data={data2}
          options={{
            ...options2,
            responsive: true,
            maintainAspectRatio: false,
          }}
          width={chartWidth}
          height={80}
        />
      </div>
    </>
  );
};

export default UtilizationChart;

