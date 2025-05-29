import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "../assets/Topbar.css";
import Dropdown from "./Dropdown";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Topbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleIconClick = () => {
    setIsDropdownVisible((prevIsVisible) => !prevIsVisible);
  };
  const handleSelectItem = (item) => {
    setSelectedItems([item]); 
  };
const isAllApplicationsSelected = selectedItems.length === 0;
  return (
    <>
      {isDropdownVisible && (
        <div className="overlay" onClick={handleIconClick}></div>
      )}
      <div className={`top-bar ${isDropdownVisible ? "overlay-active" : ""}`}>
        <div className="left-content">
          <div>
            <FilterAltIcon onClick={handleIconClick} />
            {isDropdownVisible && (
              <div className="dropdown">
                <Dropdown handleSelectItem={handleSelectItem} selectedItems={selectedItems}/>
              </div>
            )}
          </div>
          <span className={`all-applications ${isAllApplicationsSelected ? "" : "selected"}`}>
            ALL APPLICATIONS
            {selectedItems.length > 0 && (
              <span className="arrow">
                <ArrowForwardIosIcon fontSize="middle" />
              </span>
            )}
          </span>
          <span className="select-name">{selectedItems}</span>
        </div>
        <div className="right-content">
          <div className="custom-line "></div>
          <div>
            {" "}
            <span>APPLICATION STATUS</span>
            <span>:</span>{" "}
          </div>
          <div className="top-name">
            <span className="number">43</span>PRODUCTION
          </div>
          <div className="top-name">
            <span className="number">7</span>BUILD
          </div>
          <div className="intake">
            {" "}
            <span className="number">5</span>INTAKE
          </div>
          <div className="security">
            <span>Security</span>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
