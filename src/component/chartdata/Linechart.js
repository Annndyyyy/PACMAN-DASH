import React, { useState, useEffect } from "react";
import "../../assets/Barchart.css";

// Import required Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Import the Line chart component from react-chartjs-2
import { Line } from "react-chartjs-2";

// Register chart components to use them
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Linechart = () => {
  // State to track the chart width based on window size
  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.95);

  // Data for the line chart
  const data = {
    labels: ["Aug 02", "Aug 03", "Aug 04", "Aug 05", "Aug 06"], // X-axis labels
    datasets: [
      {
        // Dataset for minimum instances
        data: [200, 180, 220, 160, 250],
        fill: true,
        backgroundColor: "#777",
        borderColor: "#367B6B", // Green line
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        // Dataset for mid instances (dashed line)
        data: [250, 280, 760, 300, 350],
        fill: true,
        backgroundColor: "#777",
        borderColor: "#ed0295", // Pink line
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
        borderDash: [5, 5], // Dashed line
      },
      {
        // Dataset for max instances
        data: [300, 350, 1000, 300, 400],
        fill: true,
        backgroundColor: "#777",
        borderColor: "#1495BB", // Blue line
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  // Update chart width on window resize
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.95);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Chart options configuration
  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true, // Start y-axis at zero
        grid: {
          drawBorder: false, // Hide y-axis border line
        },
        ticks: {
          stepSize: 200, // Set step size for y-axis
          callback: (value) => {
            // Format values over 1000 as "$Xk"
            if (value >= 1000) {
              return (
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(value / 1000) + "k"
              );
            }
            return value.toString();
          },
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || "";
            const value = context.parsed.y;
            return datasetLabel + ": " + value;
          },
        },
      },
      legend: {
        display: false, // Hide default chart legend
      },
    },
  };

  // Render chart and custom legend
  return (
    <>
      <div className="chart-container">
        <div className="title-graph">INSTANCES</div>
        <Line
          data={data}
          options={{ ...options, responsive: true, maintainAspectRatio: false }}
          width={chartWidth}
          height={250}
        />
      </div>

      {/* Custom legend */}
      <div className="legend-container">
        <div className="legend">
          <span className="line-color" style={{ background: "#1495BB" }}></span>
          <span className="legend-label">Max Instances</span>
        </div>
        <div className="legend">
          <span
            className="line-color"
            style={{
              background: "none",
              borderBottom: "2px dotted #ed0295",
              display: "inline-block",
            }}
          ></span>
          <span className="legend-label">Mid Instances</span>
        </div>
        <div className="legend">
          <span className="line-color" style={{ background: "#367B6B" }}></span>
          <span className="legend-label">Min Instances</span>
        </div>
      </div>
    </>
  );
};

export default Linechart;
