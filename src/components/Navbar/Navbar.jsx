import React from "react";
import { Link } from "react-router-dom";

function Navbar () {


    return (
        <div>

            
     <ul>
        <li><Link to='about'  spy={true} smooth={true} offset={-10} duration={500}>ABOUT</Link></li>
        <li> <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}>PROJECTS </Link></li>
        <li> <Link to='contact'  spy={true} smooth={true} offset={50} duration={500}>CONTACT </Link></li>
     </ul>



        </div>
    )
}


export default Navbar