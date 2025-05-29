import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '../../assets/Navbar.css';


const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="menu-bar">
        <MenuIcon fontSize="large" />
      </div>
      <div className="logo-bar">
        <img src="http://s3.amazonaws.com/tmopacman/dist/assets/images/logo_pacman.svg" alt="" />
      </div>
      <div className="profile-logo">
        <div>
        <NotificationsIcon fontSize="medium" /></div>
       <div> <AccountCircleIcon fontSize="medium" /></div>
      </div>
    </header>
  );
};

export default Navbar;
