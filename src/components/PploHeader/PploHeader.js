import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import { ReactComponent as Logo } from "../../poppulo-logo.svg";
import logo from './logo.gif';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
  NavLink 
} from "react-router-dom";
import PploHeaderCss from "./PploHeaderCss";

export default function PploHeader() {
  const classes = PploHeaderCss();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarStyling}>
        <Toolbar >
            <NavLink exact to="/" activeClassName="active"><img src={logo} /></NavLink>

          <div>
            <ul className={classes.topMenu}>
              <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
               <li><NavLink  to="/comms" activeClassName="active">Comms</NavLink></li>
              <li> <NavLink  to="/mobile" activeClassName="active">Mobile</NavLink></li>
               <li><NavLink to="/people" activeClassName="active">People</NavLink></li>
              <li> <NavLink to="/reports" activeClassName="active">Reports</NavLink></li>
           </ul>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
             <HelpIcon/>
             <span className={classes.floatRight}>Help</span>
             <ArrowDropDownIcon />
            </IconButton>
            <IconButton color="inherit">
            <SettingsIcon />
            <span className={classes.floatRight}>Account Name</span>
            <ArrowDropDownIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              <span onClick={handleProfileMenuOpen} className={classes.floatRight}>Username</span>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
