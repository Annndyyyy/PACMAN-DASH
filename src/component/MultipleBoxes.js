import React, { useState } from "react";
import "../assets/Boxes.css";
import Layoutmain from "./Layoutmain";
import FullCostDetails from "./FullCostDetails";
import FullInventoryDetails from "./FullInventoryDetails";
import FullStorageDetails from "./FullStorageDetails";
import FullUtilizationDetails from "./FullUtilizationDetails";
import FullComplianceDetails from "./FullComplianceDetails";
import FullMonitoringDetails from "./FullMonitoringDetails";

function MultipleBoxes() {
  const [expandedBox, setExpandedBox] = useState(1);
  const [selectedColumn, setSelectedColumn] = useState(0);
  const [costOverlayOpen, setCostOverlayOpen] = useState(false);
  const [showFullCostDetails, setShowFullCostDetails] = useState(false);
  const [showFullInventoryDetails, setShowFullInventoryDetails] = useState(false);
  const [showFullStorageDetails, setShowFullStorageDetails] = useState(false);
  const [showFullUtilizationDetails, setShowFullUtilizationDetails] = useState(false);
  const [showFullComplianceDetails, setShowFullComplianceDetails] = useState(false);
  const [showFullMonitoringDetails, setShowFullMonitoringDetails] = useState(false);

  const handleClick = (boxIndex, columnIndex) => {
    setExpandedBox(boxIndex);
    setSelectedColumn(columnIndex);
  };

  const handleShowFullCostDetails = () => {
    setShowFullCostDetails(true);
  };
  const handleShowFullInventoryDetails = () => {
    setShowFullInventoryDetails(true);
  };
  const handleShowFullStorageDetails = () => {
    setShowFullStorageDetails(true);
  };
  const handleShowFullUtilizationDetails = () => {
    setShowFullUtilizationDetails(true);
  };
  const handleShowFullComplianceDetails = () => {
    setShowFullComplianceDetails(true);
  };
  const handleShowFullMonitoringDetails = () => {
    setShowFullMonitoringDetails(true);
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

  if (showFullCostDetails) {
    return <FullCostDetails onClose={() => setShowFullCostDetails(false)} />;
  }
  if (showFullInventoryDetails) {
    return <FullInventoryDetails onClose={() => setShowFullInventoryDetails(false)} />;
  }
  if (showFullStorageDetails) {
    return <FullStorageDetails onClose={() => setShowFullStorageDetails(false)} />;
  }
  if (showFullUtilizationDetails) {
    return <FullUtilizationDetails onClose={() => setShowFullUtilizationDetails(false)} />;
  }
  if (showFullComplianceDetails) {
    return <FullComplianceDetails onClose={() => setShowFullComplianceDetails(false)} />;
  }
  if (showFullMonitoringDetails) {
    return <FullMonitoringDetails onClose={() => setShowFullMonitoringDetails(false)} />;
  }

  if (costOverlayOpen) {
    return (
      <div className="columns">
        <div className="column large">
          <div className="box expanded">
            <Layoutmain
              expanded={true}
              reduced={false}
              expand={1}
              box={1}
              onCostOverlayChange={setCostOverlayOpen}
              onShowFullCostDetails={handleShowFullCostDetails}
            />
          </div>
        </div>
      </div>
    );
  }

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
              >
                <Layoutmain
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
                  onCostOverlayChange={setCostOverlayOpen}
                  onShowFullCostDetails={box.id === 1 ? handleShowFullCostDetails : undefined}
                  onShowFullMonitoringDetails={box.id === 2 ? handleShowFullMonitoringDetails : undefined}
                  onShowFullInventoryDetails={box.id === 3 ? handleShowFullInventoryDetails : undefined}
                  onShowFullStorageDetails={box.id === 6 ? handleShowFullStorageDetails : undefined}
                  onShowFullUtilizationDetails={box.id === 4 ? handleShowFullUtilizationDetails : undefined}
                  onShowFullComplianceDetails={box.id === 5 ? handleShowFullComplianceDetails : undefined}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default MultipleBoxes;
