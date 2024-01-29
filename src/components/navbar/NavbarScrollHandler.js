import { useScrollTrigger } from "@mui/material";
import React, { useLayoutEffect } from "react";

const ScrollHandler = ({window, setIsScrolled, children}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  useLayoutEffect(()=> {
    setIsScrolled(!trigger);
  }, [trigger, setIsScrolled]);
  

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "#1c2a3eF6" : "transparent",
      color: trigger ? "white" : "black",
      transitionDuration: trigger ? "0.4s" : "0.5s",
      transitionProperty: "background-color, color",
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
