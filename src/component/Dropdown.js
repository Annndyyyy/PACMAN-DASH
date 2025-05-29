import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../assets/Dropdown.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Dropdown = ({handleSelectItem,selectedItems}) => {
  const arr = [
    "App 1",
    "App 2",
    "App 3",
    "App 4",
    "App 5",
    "App 6",
    "App 7",
    "App 8",
    "App 9",
  ];
  const [searchText, setSearchText] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);


  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
  };
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
 

  const filteredArr = arr.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="main-box">
      <div className="input-box">
        <div className="icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <li>
        <div className="name-dot">
        <div className="box-dot" onClick={toggleList}>{!isListOpen ? <RemoveIcon/> : <AddIcon/>}</div>
          <div className="application">All applications</div>
        </div>
        {!isListOpen && (
          <ul className="dropdown-list">
            {filteredArr.map((item, index) => (
              <li className="dropdown-item" key={index} onClick={() => handleSelectItem(item)}>
                <div className="line"></div>
                <span className={`text ${selectedItems.includes(item)?'active':""}`}>{item}</span>
            
              </li>
            ))}
          </ul>
        )}
      </li>
    </div>
  );
};

export default Dropdown;
