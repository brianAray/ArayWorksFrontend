import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarButtonComponent from './NavbarButtonComponent';

const variants = {
  open: { opacity: 1, y: "-30%" },
  closed: { opacity: 0, y: "-100%" },
}

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  let defaultClassName = "nav-link";

  let buttonInfo = [
    { className: "nav-link active", to: "/", onClick: setActiveLink, text: "Home" },
    { className: "nav-link", to: "/blog", onClick: setActiveLink, text: "Blog" },
    { className: "nav-link", to: "/art", onClick: setActiveLink, text: "Art" },
    { className: "nav-link", to: "/store", onClick: setActiveLink, text: "Store" },
  ];

  const [buttonData, setButtonData] = useState(buttonInfo);

  function setActiveLink(event: any) {
    let buttonDataCopy = buttonData;
    buttonDataCopy.forEach((item) => item.className = defaultClassName);
    let index: number = buttonDataCopy.findIndex((item) => item.text === event.target.text);
    buttonDataCopy[index].className = "nav-link active";
    setButtonData([...buttonDataCopy]);
  }

  let navbarButtons = buttonData.map((data: any) => (<NavbarButtonComponent key={data.text} {...data} />))

  return (
    <>
      {/* <motion.div 
        // animate={isOpen? "open" : "closed"}
        whileHover={{y: -100}}
        variants={variants}
        className='nav grid gap-5 nav-tabs nav-fill nav-justified justify-content-center fixed-bottom'>
            {navbarButtons}
      </motion.div> */}
      <div
        style={{ width: "100%", height: "50%" }}
        className="fixed-bottom"
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* {isOpen && ( */}
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className='nav grid gap-5 nav-pills nav-fill nav-justified justify-content-center fixed-bottom'>
            {navbarButtons}
          </motion.div>
        {/* )} */}

      </div>
    </>
  )
}

export default NavbarComponent
