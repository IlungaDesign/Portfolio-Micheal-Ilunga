import './Navbar2.css'
import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar2 = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header2'>
            <nav className='navbar2'>
                <NavLink to="/" id="button-go-back2">

                    <i className="fa-solid fa-chevron-left"></i>
                    <h style={{fontFamily:"Sora", fontSize:"13px"}}>
                        Go back to my Portfolio
                    </h>
                </NavLink>

                <NavLink to="/" id="button-go-back3">
                    <i className="fa-solid fa-chevron-left"></i>
                    <h style={{fontFamily:"Sora", fontSize:"13px"}}>
                        My Portfolio
                    </h>
                </NavLink>

                <div className='hamburger2' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#3f97fb' }} />)
                        : (<FaBars size={30} style={{ color: '#3f97fb' }} />)}
                </div>

                <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
                    <li className='nav-item2' >
                        <Link to="part-Project"
                              spy={true} smooth={true} offset={-90} duration={500}
                              onClick={closeMenu}>Project</Link>
                    </li>

                    <li className='nav-item2' >
                        <Link to="part-idea-phase"
                              spy={true} smooth={true} offset={-90} duration={500}
                              onClick={closeMenu}>
                            Idea/phase
                        </Link>
                    </li>

                    <li className='nav-item2'>
                        <Link to="part-use-case"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            Use/case
                        </Link>
                    </li>

                    <li className='nav-item2'>
                        <Link to="part-requirement"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            System/requirement
                        </Link>
                    </li>

                    <li className='nav-item2'>
                        <Link to="part-benchmark"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            Benchmarking
                        </Link>
                    </li>

                    <li className='nav-item2'>
                        <Link to="part-visual-design"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            Visual/design
                        </Link>
                    </li>

                    <li className='nav-item2'>
                        <Link to="part-wireframe"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            Wireframes
                        </Link>
                    </li>

                    <li className='nav-item2'>
                        <Link to="part-result-Pixam"
                              offset={-90} duration={500} spy={true} smooth={true}
                        >
                            Result
                        </Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar2
