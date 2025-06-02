// Import CSS styles
import "../../assets/Boxl3.css";
import "../../assets/Boxl2.css";

// Import Material UI icons
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";

// Import image and gauge chart component
import img from '../../assets/server-storage.png';
import Guagechart from "../guagechart/Guagechart";

// Functional component L3Box receives a `box` prop
const L3Box = ({ box }) => {
  // Boolean to check for smaller screen widths
  const datase = window.innerWidth <= 1004;
  console.log(datase); // for debugging screen size responsiveness

  // Array of data objects for each box option
  const data = [
    {
      icon: <MonetizationOnOutlinedIcon />,
      title: "COST",
      dollar: <AttachMoneyOutlinedIcon />,
      mainnumber: "24.0K",
      day: "/Day",
      rate: "Run Rate",
      no1: "$0.40",
      lastline1: "/Instance HR",
    },
    {
      icon: <TroubleshootOutlinedIcon fontSize="small" />,
      title: "MONITORING",
      mainnumber: "3.4M",
      day: "Requests",
      rate: "Last 5 hours 30 minutes",
      no1: "30.5K",
      lastline1: "TMNG",
      no2: "10.OK",
      lastline2: "SOCL",
      no3: "17.4K",
      lastline3: "REBL",
    },
    {
      icon: <WbCloudyOutlinedIcon />,
      title: "INVENTORY",
      mainnumber: "6.5K",
      day: "current",
      rate: "instances",
      no1: "153",
      lastline1: "LBs",
      no2: "57",
      lastline2: "ASG",
      no3: "132",
      lastline3: "S3",
      no4: "9000",
      lastline4: "EBS",
    },
    {
      icon: <TimelapseOutlinedIcon />,
      title: "UTILIZATION",
      mainnumber: "39",
      percentage: "%",
      rate: "Overall",
      no1: <Guagechart filledPercentage={25} />,
      lastline1: "CPU",
      no2: <Guagechart filledPercentage={50} />,
      lastline2: "I/O",
      no3: <Guagechart filledPercentage={75} />,
      lastline3: "DISK",
    },
    {
      icon: <VerifiedIcon />,
      title: "COMPLIANCE",
      mainnumber: "99.82",
      percentage: "%",
      day: "comilance",
      rate: "All Apps",
      no1: "98.4%",
      lastline1: "TMNG",
      no2: "98.1",
      lastline2: "REBL",
      no3: "96.7%",
      lastline3: "SOCL",
    },
    {
      icon: img,
      title: "STORAGE",
      mainnumber: "4.15",
      rate: "PB In Use",
      no1: "0.65",
      lastline1: "EBS",
      no2: "1.50",
      lastline2: "S3",
      no3: "0.65",
      lastline3: "Other",
      pb1: "PB",
      pb2: "PB",
      pb3: "PB",
    },
  ];

  // Retrieve the selected box data from the array
  const boxData = data[box - 1] || {};

  return (
    <div className="main-content-3">
      {/* Top section: icon and title */}
      <div className="top-content-3">
        {boxData.title === "STORAGE" ? (
          // For STORAGE, use image as icon
          <div className="icon">
            <img style={{ width: "1rem" }} src={boxData.icon} alt="" />
          </div>
        ) : (
          // Otherwise use MUI icon
          <div className="icon">{boxData.icon}</div>
        )}
        <div className="title">{boxData.title}</div>
      </div>

      {/* Middle section: main stats */}
      <div className="bottom-content-3">
        <span>{boxData.dollar}</span>
        <span>
          {boxData.mainnumber}
          <span style={{ fontWeight: "300", marginBottom: "5px" }}>
            {boxData.percentage}
          </span>
        </span>
        <div className="sign-text-con-3">
          <div>{boxData.day}</div>
          <div>{boxData.rate}</div>
        </div>
      </div>

      {/* Bottom section: additional breakdown */}
      <div className="bottom-main-content">
        <div className="box-data-content">
          {/* Render no1 and lastline1 */}
          <div>
            <div>
              {boxData.no1}
              <span>{boxData.pb1}</span>
            </div>
            <div className="lastline">{boxData.lastline1}</div>
          </div>

          {/* Render no2 and lastline2 if available */}
          {boxData.no2 && (
            <div>
              <div>
                {boxData.no2}
                <span>{boxData.pb2}</span>
              </div>
              <div className="lastline">{boxData.lastline2}</div>
            </div>
          )}

          {/* Render no3 and lastline3 if available */}
          {boxData.no3 && (
            <div>
              <div>
                {boxData.no3}
                <span>{boxData.pb3}</span>
              </div>
              <div className="lastline">{boxData.lastline3}</div>
            </div>
          )}

          {/* Render no4 and lastline4 if available */}
          {boxData.no4 && (
            <div>
              <div>{boxData.no4}</div>
              <div className="lastline">{boxData.lastline4}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default L3Box;
