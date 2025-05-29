const RadialBarChart = ({ segmentData }) => {
  return (
    <div className="chart-container">
      <svg className="compliance-chart-svg" width="459" height="323">
        <g transform="translate(229.5, 161.5)">
          {segmentData.map((segment, index) => (
            <g key={index} className="arc">
              {}
              {}

              {}
              {}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default RadialBarChart;
