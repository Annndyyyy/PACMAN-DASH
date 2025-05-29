import React from "react";
import "../../assets/Boxl1.css";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Barchart from "../chartdata/Barchart";
import Linechart from "../chartdata/Linechart";
import Utilizationchart from "../chartdata/Utilizationchart";
import Monitoringchart from "../chartdata/Monitoringchart";
import Storagechart from "../chartdata/Storagechart";
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import img from '../../assets/server-storage.png';

const Box1 = ({ expand }) => {
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
      icon: <TroubleshootOutlinedIcon fontSize="small" />,
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
      icon: img,
      title: "STORAGE",
      dollar: "",
      mainnumber: "4.15",
      day: "",
      rate: "PB In Use",
      bar: <Storagechart />,
    },
  ];

  const selectedData = data[expand - 1] || {};

  return (
    <div className={`main-content${expand ? " expanded" : ""}`}>
      <div className="box-container">
        <div className="top-content">
          {selectedData.title === "STORAGE" ? (
            <div className="icon">
              <img style={{ width: "1rem" }} src={selectedData.icon} alt="" />
            </div>
          ) : (
            <div className="icon">{selectedData.icon}</div>
          )}
          <div className="title">{selectedData.title}</div>
        </div>
        <div className="bar-data">{selectedData.bar}</div>

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
      </div>
    </div>
  );
};

export default Box1;
