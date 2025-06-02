// Import required Material UI icons
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";

// Import CSS file and image asset
import "../../assets/Boxl2.css";
import img from "../../assets/server-storage.png";

// Functional component L2Box receives props: expand and box
const L2Box = ({ expand, box }) => {
  // Array of data for each box item
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
      icon: <VerifiedIcon />,
      title: "COMPLIANCE",
      dollar: "",
      mainnumber: "99.82",
      percentage: "%",
      day: "compliance",
      rate: "All Apps",
    },
    {
      icon: img, // image icon instead of component
      title: "STORAGE",
      dollar: "",
      mainnumber: "4.15",
      day: "",
      rate: "PB In Use",
    },
  ];

  // Get the selected box data based on box prop
  const selectedData = data[box - 1] || {};

  // Determine when to expand the content based on expand/box values
  const shouldRenderContent =
    (expand === 2 && box === 1) ||
    (expand === 1 && box === 2) ||
    (expand === 4 && box === 3) ||
    (expand === 3 && box === 4) ||
    (expand === 6 && box === 5) ||
    (expand === 5 && box === 6);

  return (
    <div>
      {/* Main container with conditional "expanded" class */}
      <div className={`main-content-2${shouldRenderContent ? " expanded" : ""}`}>
        {/* Top section showing icon and title */}
        <div className="top-content-2">
          {selectedData.title === "STORAGE" ? (
            // Show image if title is STORAGE
            <div className="icon">
              <img style={{ width: "1rem" }} src={selectedData.icon} alt="storage-icon" />
            </div>
          ) : (
            // Otherwise, show icon component
            <div className="icon">
              <span className="icon-Storage"></span> {selectedData.icon}
            </div>
          )}
          <div className="title">{selectedData.title}</div>
        </div>

        {/* Bottom section conditionally rendered when content is expanded */}
        {shouldRenderContent && (
          <div className="bottom-content-2">
            <span>{selectedData.dollar}</span>
            <span>
              {selectedData.mainnumber}{" "}
              <span style={{ fontWeight: 300, marginBottom: "5px" }}>
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
