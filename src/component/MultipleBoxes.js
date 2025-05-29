import React, { useState } from "react";
import "../assets/Boxes.css";
import Layoutmain from "./Layoutmain";

function MultipleBoxes() {
  const [expandedBox, setExpandedBox] = useState(1);
  const [selectedColumn, setSelectedColumn] = useState(0);

  const handleClick = (boxIndex, columnIndex) => {
    setExpandedBox(boxIndex);
    setSelectedColumn(columnIndex);
  };
  const boxes = [
    { id: 1 },
    { id: 2},
    { id: 3,},
    { id: 4 },
    { id: 5},
    { id: 6,},
  ];
  const numColumns = 3;
  const boxesPerColumn = Math.ceil(boxes.length / numColumns);
  return (
    <div className="columns">
      {Array.from({ length: numColumns }).map((_, columnIndex) => (
        <div
          key={columnIndex}
          className={`column ${selectedColumn === columnIndex ? "large" : ""}`}
        >
          {boxes
            .slice(
              columnIndex * boxesPerColumn,
              (columnIndex + 1) * boxesPerColumn
            )
            .map((box) => (
              <div
                key={box.id}
                className={`box ${expandedBox === box.id ? "expanded" : ""} ${
                  (expandedBox === 2 && box.id === 1) ||
                  (expandedBox === 1 && box.id === 2) ||
                  (expandedBox === 4 && box.id === 3) ||
                  (expandedBox === 3 && box.id === 4) ||
                  (expandedBox === 6 && box.id === 5) ||
                  (expandedBox === 5 && box.id === 6)
                    ? "reduced"
                    : ""
                }`}
                onClick={() => handleClick(box.id, columnIndex)}
              >  <Layoutmain
              expanded={expandedBox === box.id}
              reduced={
                (expandedBox === 2 && box.id === 1) ||
                (expandedBox === 1 && box.id === 2) ||
                (expandedBox === 4 && box.id === 3) ||
                (expandedBox === 3 && box.id === 4) ||
                (expandedBox === 6 && box.id === 5) ||
                (expandedBox === 5 && box.id === 6)
              }
            expand={expandedBox}
            box={box.id}
            /></div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default MultipleBoxes;
