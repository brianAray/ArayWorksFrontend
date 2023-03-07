import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import NavbarButtonComponent from "./NavbarButtonComponent";

const variants = {
  open: {
    opacity: 1,
    y: "-40%",
  },
  closed: {
    opacity: 0,
    y: "-100%",
  },
};

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  let defaultClassName = "nav-link";

  let buttonInfo = [
    {
      className: "nav-link active",
      to: "/",
      onClick: setActiveLink,
      text: "Home",
    },
    {
      className: "nav-link",
      to: "/blog",
      onClick: setActiveLink,
      text: "Blog",
    },
    {
      className: "nav-link",
      to: "/art",
      onClick: setActiveLink,
      text: "Art",
    },
    {
      className: "nav-link",
      to: "/store",
      onClick: setActiveLink,
      text: "Store",
    },
  ];

  const [buttonData, setButtonData] = useState(buttonInfo);

  function setActiveLink(event: any) {
    let buttonDataCopy = buttonData;
    buttonDataCopy.forEach((item) => (item.className = defaultClassName));
    let index: number = buttonDataCopy.findIndex(
      (item) => item.text === event.target.text
    );
    buttonDataCopy[index].className = "nav-link active";
    setButtonData([...buttonDataCopy]);
  }

  let navbarButtons = buttonData.map((data: any) => (
    <NavbarButtonComponent key={data.text} {...data} isHovering={isOpen} />
  ));


  // modal

  // Trigger for opening modal
  // repurpose the isOpen check
  // Modal backdrop


  return (
    <div
      style={
        !isOpen
          ? {
              transition: "0.2s",
              marginLeft: "10%",
              marginRight: "10%",
              height: "20%",
            }
          : {
              transition: "0.2s",
              marginLeft: "10%",
              marginRight: "10%",
              height: "20%",
              background: "silver",
            }
      }
      className="fixed-bottom"
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="nav grid gap-5 nav-pills nav-fill nav-justified justify-content-center fixed-bottom"
      >
        {navbarButtons}{" "}
      </motion.div>
    </div>
  );
};

export default NavbarComponent;
