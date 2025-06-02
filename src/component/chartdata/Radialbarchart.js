const RadialBarChart = ({ segmentData }) => {
  return (
    <div className="chart-container">
      {/* SVG container with fixed width and height */}
      <svg className="compliance-chart-svg" width="459" height="323">
        {/* Group element translated to the center of the SVG */}
        <g transform="translate(229.5, 161.5)">
          {/* Iterate over segmentData array to render each segment */}
          {segmentData.map((segment, index) => (
            <g key={index} className="arc">
              {/* Label text positioned based on segment.textX and segment.textY */}
              <text
                opacity="1"
                textAnchor="end"
                y={segment.textY}
                x={segment.textX}
                style={segment.textStyle}
              >
                {segment.label}
              </text>
              {/* Percentage text shown next to the label */}
              <text
                opacity="1"
                y={segment.textY}
                x={segment.textX + 10}
                style={segment.textStyle}
              >
                {segment.percentage}%
              </text>

              {/* First arc path representing part of the radial segment */}
              <path d={segment.arcPath} fill={segment.fillColor} />
              {/* Second arc path representing an overlay or complementary segment */}
              <path d={segment.secondArcPath} fill={segment.secondFillColor} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default RadialBarChart;
