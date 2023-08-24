import React, { useState } from 'react'
// import logo from './images/logo.png'

import {Link} from 'react-scroll';

import './TopButton.css'
// import {NavLink} from "react-router-dom";
// import {NavLink} from "react-router-dom";

const TopButton = () => {

    return (
        <div>
             <Link to="title-PagePixam2" className="TopButton"
                              offset={-90} duration={500} spy={true} smooth={true} >
                            <i className="fa-solid fa-circle-up fa-3x"></i>

             </Link>

        </div>
    )
}

export default TopButton
