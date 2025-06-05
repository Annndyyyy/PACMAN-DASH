import React from "react";

const statusColors = {
  green: "#4CAF50",
  yellow: "#FFEB3B",
  red: "#F44336",
  gray: "#bbb"
};

const ringShadows = {
  green: "0 0 0 4px #d6f5d6, 0 0 0 8px #eaf7e6, 0 0 0 12px #eaf7e6, 0 0 0 16px #eaf7e6",
  red:   "0 0 0 4px #ffd6d6, 0 0 0 8px #ffeaea, 0 0 0 12px #ffeaea, 0 0 0 16px #ffeaea",
  yellow: "0 0 0 4px #fff9d6, 0 0 0 8px #fffde6, 0 0 0 12px #fffde6, 0 0 0 16px #fffde6",
  gray:  "0 0 0 4px #f5f5f5, 0 0 0 8px #eaeaea, 0 0 0 12px #f5f5f5, 0 0 0 16px #eaeaea"
};

// Example 6x8 grid (customize as needed)
export const statusGrid = [
  ["green", "green", "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "red",   "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "yellow"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
];

const MonitoringDotMatrix = ({ grid = statusGrid }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center", alignItems: "center", margin: "32px 0" }}>
    {grid.map((row, rowIdx) => (
      <div key={rowIdx} style={{ display: "flex", gap: 24 }}>
        {row.map((status, colIdx) => (
          <span
            key={colIdx}
            className="dot-matrix-dot"
            style={{
              display: "inline-block",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: statusColors[status] || statusColors.gray,
              boxShadow: ringShadows[status] || ringShadows.gray,
              border: "none"
            }}
          />
        ))}
      </div>
    ))}
  </div>
);

export default MonitoringDotMatrix; 