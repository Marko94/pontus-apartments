import React from "react";
import { useScrollTrigger } from "@mui/material";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#1c2a3eF6" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.2s" : "0.3s",
      boxShadow: "none",
      padding: "10px 0px",
      minHeight: "65px",
      height: "65px"
    },

  });
};

const NavbarScrollHandler = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default NavbarScrollHandler;
