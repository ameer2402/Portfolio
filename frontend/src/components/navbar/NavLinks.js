import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav}>
        <Link to="//leetcode.com/u/ameerkhan2002/" target='_blank' className='nav-link'>
          <SiLeetcode /> 
        </Link>
      </li>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/mohammed-ameerkhan-22368626a/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/ameer2402/" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:ameerkhan20241a0497@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
