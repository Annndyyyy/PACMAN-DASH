import '../../assets/Storagechart.css'

const Monitoringchart = () => {
  // Configuration for grid layout
  const numSVGsPerRow = 9;
  const numRows = 5;
  const numSVGsInSixthRow = 3;

  // Determine circle color based on position
  const getStatusColor = (rowIndex, svgIndex) => {
    if (rowIndex === 0 && svgIndex === 5) {
      return "#FF0000";
    } else if (rowIndex === 2 && svgIndex === numSVGsPerRow - 1) {
      return "#FFFF00"; 
    } else {
      return "#70C530"; 
    }
  };

  return (
    <div className="main-circle">
      {/* Render rows */}
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "0.1rem",
            marginLeft: "0.2rem",
          }}
        >
          {/* Render SVGs in each row */}
          {rowIndex === numRows - 1
            ? Array.from({ length: numSVGsInSixthRow }, (_, svgIndex) => (
                // Special case for last row (fewer circles)
                <svg key={svgIndex} height="50" width="50" style={{ margin: "5px" }}>
                  {/* Inner solid circle */}
                  <circle cx="25" cy="25" r="10" fill={getStatusColor(rowIndex, svgIndex)} />
                  {/* Three outer rings with decreasing opacity */}
                  <circle cx="25" cy="25" r="14" stroke={getStatusColor(rowIndex, svgIndex)} strokeWidth="1" fill="transparent" opacity="0.6" />
                  <circle cx="25" cy="25" r="18" stroke={getStatusColor(rowIndex, svgIndex)} strokeWidth="1" fill="transparent" opacity="0.4" />
                  <circle cx="25" cy="25" r="22" stroke={getStatusColor(rowIndex, svgIndex)} strokeWidth="1" fill="transparent" opacity="0.2" />
                </svg>
              ))
            : Array.from({ length: numSVGsPerRow }, (_, svgIndex) => (
                <svg key={svgIndex} height="50" width="50" style={{ margin: "5px" }}>
                  <circle cx="25" cy="25" r="10" fill={getStatusColor(rowIndex, svgIndex)} />
                  <circle cx="25" cy="25" r="14" stroke={getStatusColor(rowIndex, svgIndex)} strokeWidth="1" fill="transparent" opacity="0.6" />
                  <circle cx="25" cy="25" r="18" stroke={getStatusColor(rowIndex, svgIndex)} strokeWidth="1" fill="transparent" opacity="0.4" />
                  <circle cx="25" cy="25" r="22" stroke={getStatusColor(rowIndex, svgIndex)} strokeWidth="1" fill="transparent" opacity="0.2" />
                </svg>
              ))}
        </div>
      ))}
    </div>
  );
};

export default Monitoringchart;
