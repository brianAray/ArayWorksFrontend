import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const NavbarButtonComponent = (props: any) => {
  return (
    <>
    <motion.div
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
    >
        <Link className={props.className} to={props.to} onClick={props.onClick}>{props.text}</Link>
    </motion.div>
    </>
  )
}

export default NavbarButtonComponent