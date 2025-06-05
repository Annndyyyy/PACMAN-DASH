import React, { useState, useEffect } from "react";
import L2Box from "./Boxes/L2Box";
import L3Box from "./Boxes/L3Box";
import L1Box from "./Boxes/L1Box";

function Layoutmain({ expanded, reduced ,expand,box, onCostOverlayChange, onShowFullCostDetails, onShowFullMonitoringDetails, onShowFullInventoryDetails, onShowFullStorageDetails, onShowFullUtilizationDetails, onShowFullComplianceDetails }) {
  const [isScreenSmallwidth, setIsScreenSmallWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmallWidth(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (expanded) {
    return <L1Box  expand={expand} onCostOverlayChange={onCostOverlayChange} onShowFullCostDetails={onShowFullCostDetails} onShowFullMonitoringDetails={onShowFullMonitoringDetails} onShowFullInventoryDetails={onShowFullInventoryDetails} onShowFullStorageDetails={onShowFullStorageDetails} onShowFullUtilizationDetails={onShowFullUtilizationDetails} onShowFullComplianceDetails={onShowFullComplianceDetails} />;
  } else if (reduced || isScreenSmallwidth) {
    return <L2Box expand={expand} box={box} />;
  } else{
    return <L3Box box={box}/>;
  }
}

export default Layoutmain;
