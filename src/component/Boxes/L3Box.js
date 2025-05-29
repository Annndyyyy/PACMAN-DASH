import React from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import "../../assets/Boxl2.css";
import img from '../../assets/server-storage.png';

const L2Box = ({ expand, box }) => {
  const data = [
    {
      icon: <MonetizationOnOutlinedIcon />,
      title: "COST",
      dollar: <AttachMoneyOutlinedIcon />,
      mainnumber: "24.0K",
      day: "/Day",
      rate: "Run Rate",
    },
    {
      icon: <TroubleshootOutlinedIcon fontSize="small" />,
      title: "MONITORING",
      dollar: "",
      mainnumber: "3.4M",
      day: "Requests",
      rate: "Last 5 hours 30 minutes",
    },
    {
      icon: <WbCloudyOutlinedIcon />,
      title: "INVENTORY",
      dollar: "",
      mainnumber: "6.5K",
      day: "current",
      rate: "instances",
    },
    {
      icon: <TimelapseOutlinedIcon />,
      title: "UTILIZATION",
      dollar: "",
      mainnumber: "39",
      percentage: "%",
      day: "",
      rate: "Overall",
    },
    {
      icon: img,
      title: "STORAGE",
      dollar: "",
      mainnumber: "4.15",
      day: "",
      rate: "PB In Use",
    },
  ];

  const selectedData = data[box - 1] || {};
  const shouldRenderContent =
    (expand === 2 && box === 1) ||
    (expand === 1 && box === 2) ||
    (expand === 4 && box === 3) ||
    (expand === 3 && box === 4) ||
    (expand === 6 && box === 5); // Note: 6 is still used here if expand logic is unchanged

  return (
    <div>
      <div className={`main-content-2${shouldRenderContent ? " expanded" : ""}`}>
        <div className="top-content-2">
          {selectedData.title === "STORAGE" ? (
            <div className="icon">
              <img style={{ width: "1rem" }} src={selectedData.icon} alt="" />
            </div>
          ) : (
            <div className="icon">
              <span className="icon-Storage"></span> {selectedData.icon}
            </div>
          )}
          <div className="title">{selectedData.title}</div>
        </div>

        {shouldRenderContent && (
          <div className="bottom-content-2">
            <span>{selectedData.dollar}</span>
            <span>
              {selectedData.mainnumber}{" "}
              <span style={{ fontWeight: "300", marginBottom: "5px" }}>
                {selectedData.percentage}
              </span>
            </span>
            <div className="sign-text-con-2">
              <div>{selectedData.day}</div>
              <div>{selectedData.rate}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default L2Box;
