import React, { useState, useContext, useEffect, useCallback } from "react";

import {
  SwipeableDrawer,
  Avatar,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MaterialLink
} from "@material-ui/core";

import {
  AccountCircle,
  Feedback,
  Info,
  FreeBreakfast,
  People,
  Settings
} from "@material-ui/icons";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

import { GlobalContext } from "./GlobalState";
import "./darkMode.css";
import moon from "../images/moon-solid.svg";
import sun from "../images/sun-solid.svg";

const SwipeMenu = () => {
  const [{ menuOpen, themeSelectValue }, dispatch] = useContext(GlobalContext);

  const setMenuOpen = data => {
    dispatch({ type: "setMenuOpen", snippet: data });
  };

  const setThemeSelectValue = useCallback(
    data => {
      dispatch({ type: "setThemeSelectValue", snippet: data });
    },
    [dispatch]
  );

  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (themeSelectValue === "Dark") {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  }, [themeSelectValue]);

  const changeTheme = theme => {
    setThemeSelectValue(theme);
    localStorage.setItem("selectedTheme", theme);
  };

  const handleThemeToggle = () => {
    if (!isNight) {
      changeTheme("Dark");
      setIsNight(false);
    } else {
      changeTheme("Default");
      setIsNight(true);
    }
  };

  return (
    <SwipeableDrawer
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      onOpen={() => setMenuOpen(true)}
    >
      <div style={{ width: "300px" }}>
        <div
          style={{
            margin: "35px",
            position: "relative",
            width: "30px",
            height: "30px"
          }}
        >
          <AnimatePresence>
            <motion.img
              key={isNight ? sun : moon}
              initial={{ scale: 0 }}
              animate={{ scale: 1.5, rotate: "360deg" }}
              exit={{ scale: 0 }}
              // transition={{ duration: 0.5 }}
              src={isNight ? sun : moon}
              onClick={() => handleThemeToggle()}
              className="dayNightToggleBtn"
              alt="sun moon icon"
            />
          </AnimatePresence>
        </div>

        <Divider />

        <List
          component="nav"
          className={"pinkLists"}
          onClick={() => setMenuOpen(false)}
        >
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            component={MaterialLink}
            target="blank"
            href="https://pollywoodwale.com/"
          >
            <ListItemIcon>
              <svg
                width="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="website"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill=" #FFFFFF"
              >
                <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Pollywood Wale" />
          </ListItem>
            </ListItem>
          <ListItem
            button
            component={MaterialLink}
            target="blank"
            href="https://desiworldradio.com/"
          >
            <ListItemIcon>
              <svg
                width="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="website"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill=" #FFFFFF"
              >
                <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Desi World Radio" />
          </ListItem>
            </ListItem>
          <ListItem button component={Link} to="/contributors">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Creator" />
          </ListItem>
          <ListItem
            button
            component={MaterialLink}
            target="blank"
            href="https://instagram.com/sidhujashanjot"
          >
            <ListItemIcon>
              <svg
                width="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#FFFFFF"
              >
                <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button component={Link} to="/privacy">
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Privacy & Policy" />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default SwipeMenu;
