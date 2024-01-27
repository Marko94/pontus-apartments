import { useScrollTrigger } from "@mui/material";
import React, { useLayoutEffect } from "react";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  useLayoutEffect(()=> {
    props.setIsScrolled(!trigger);
  }, [trigger, props.setIsScrolled]);
  

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#1c2a3eF6" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.2s" : "0.3s",
      boxShadow: "none",
      padding: "10px 0px",
      minHeight: "95px",
      height: "95px"
    },
  });
};

const NavbarScrollHandler = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default NavbarScrollHandler;
