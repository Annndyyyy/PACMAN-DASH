// Importing CSS styles for the component
import "../../assets/Boxl1.css";

// Importing MUI icons
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';

// Importing chart components
import Barchart from "../chartdata/Barchart";
import Linechart from "../chartdata/Linechart";
import Utilizationchart from "../chartdata/Utilizationchart";
import Radialmain from "../chartdata/Radialmain";
import Monitoringchart from "../chartdata/Monitoringchart";
import Storagechart from "../chartdata/Storagechart";

// Importing static image for STORAGE section
import img from '../../assets/server-storage.png';

import React from "react";

// Box1 component takes `expand` prop to control which box data to show
const Box1 = ({ expand, onCostOverlayChange, onShowFullMonitoringDetails, onShowFullCostDetails, onShowFullInventoryDetails, onShowFullStorageDetails, onShowFullUtilizationDetails, onShowFullComplianceDetails }) => {
  // Array containing the data for all six boxes
  const data = [
    {
      icon: <MonetizationOnOutlinedIcon />,
      title: "COST",
      dollar: <AttachMoneyOutlinedIcon />,
      mainnumber: "24.0K",
      day: "/Day",
      rate: "Run Rate",
      bar: <Barchart />,
    },
    {
      icon: <TroubleshootOutlinedIcon fontSize="small"/>,
      title: "MONITORING",
      dollar: "",
      mainnumber: "3.4M",
      day: "Requests",
      rate: "Last 5 hours 30 minutes",
      bar: <Monitoringchart />,
    },
    {
      icon: <WbCloudyOutlinedIcon />,
      title: "INVENTORY",
      dollar: "",
      mainnumber: "6.5K",
      day: "current",
      rate: "instances",
      bar: <Linechart />,
    },
    {
      icon: <TimelapseOutlinedIcon />,
      title: "UTILIZATION",
      dollar: "",
      mainnumber: "39",
      percentage: "%",
      day: "",
      rate: "Overall",
      bar: <Utilizationchart />,
    },
    {
      icon: <VerifiedIcon />,
      title: "COMPLIANCE",
      dollar: "",
      mainnumber: "",
      day: "",
      rate: "",
      bar: <Radialmain />,
    },
    {
      icon: img, // Image used as icon
      title: "STORAGE",
      dollar: "",
      mainnumber: "4.15",
      day: "",
      rate: "PB In Use",
      bar: <Storagechart />,
    },
  ];

  // Select data based on `expand` prop
  const selectedData = data[expand - 1] || {};

  return (
    // Main container with conditional class based on `expand`
    <div
      className={`main-content${expand ? " expanded" : ""}`}
      onClick={
        selectedData.title === "COST" && expand && onShowFullCostDetails
          ? onShowFullCostDetails
          : selectedData.title === "MONITORING" && expand && onShowFullMonitoringDetails
          ? onShowFullMonitoringDetails
          : selectedData.title === "INVENTORY" && expand && onShowFullInventoryDetails
          ? onShowFullInventoryDetails
          : selectedData.title === "STORAGE" && expand && onShowFullStorageDetails
          ? onShowFullStorageDetails
          : selectedData.title === "UTILIZATION" && expand && onShowFullUtilizationDetails
          ? onShowFullUtilizationDetails
          : selectedData.title === "COMPLIANCE" && expand && onShowFullComplianceDetails
          ? onShowFullComplianceDetails
          : undefined
      }
      style={
        (selectedData.title === "COST" && expand && onShowFullCostDetails) ||
        (selectedData.title === "MONITORING" && expand && onShowFullMonitoringDetails) ||
        (selectedData.title === "INVENTORY" && expand && onShowFullInventoryDetails) ||
        (selectedData.title === "STORAGE" && expand && onShowFullStorageDetails) ||
        (selectedData.title === "UTILIZATION" && expand && onShowFullUtilizationDetails) ||
        (selectedData.title === "COMPLIANCE" && expand && onShowFullComplianceDetails)
          ? { cursor: "pointer" }
          : { cursor: "default" }
      }
    >
      <div className="box-container">
        {/* Top section with icon and title */}
        <div className="top-content">
          {
            // If STORAGE, use <img>, else use icon component
            selectedData.title === "STORAGE" ? (
              <div className="icon">
                <img style={{ width: "1rem" }} src={selectedData.icon} alt="" />
              </div>
            ) : (
              <div className="icon">{selectedData.icon}</div>
            )
          }
          <div className="title">{selectedData.title}</div>
        </div>

        {/* Chart display */}
        <div className="bar-data">{selectedData.bar}</div>

        {/* Special layout for COMPLIANCE */}
        {selectedData.title === "COMPLIANCE" ? (
          <div className="sign-text-con-1">
            <div>
              <div className="last-no">200,000</div>
              <div className="last-text">Scanned</div>
            </div>
            <div>
              <div className="last-no">25</div>
              <div className="last-text">issues found</div>
            </div>
            <div>
              <div className="last-no">
                0.001
                <span style={{ fontSize: "20px", fontWeight: "400" }}>%</span>
              </div>
              <div className="last-text">items with issues</div>
            </div>
          </div>
        ) : (
          // Default layout for other types
          <div className="bottom-content">
            <span>{selectedData.dollar}</span>
            <span>
              {selectedData.mainnumber}{" "}
              <span style={{ fontWeight: "300", marginBottom: "5px" }}>
                {selectedData.percentage}
              </span>{" "}
            </span>
            <div className="sign-text-con">
              <div>{selectedData.day}</div>
              <div>{selectedData.rate}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the component for use in other parts of the app
export default Box1;
