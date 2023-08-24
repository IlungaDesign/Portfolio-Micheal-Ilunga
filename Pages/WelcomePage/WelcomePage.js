import React from "react";
import './WelcomePage.css';
import Navbar from "../../Components/Navbar/Navbar";
import PersonalProjects from "../PersonalProjects/PersonalProjects";
import Skills2 from "../Skills2/Skills2";
import Footer from "../../Components/Footer/Footer";
import mike_welcome_pic from "../../Images/mike5.png";



function WelcomePage() {
    return (
        <>
            <Navbar/>

            <section className="container-welcome">
                <div className="container-welcome-2">
                    <div className="container-welcome-3">
                        <h1 id="welcome-title">
                            Hi, I'm Micheal Ilunga: <br/>
                            A Frontend Developer <br/>
                            and UI/UX Designer
                        </h1>

                        <h1 id="welcome-title2">
                            Hi, I'm Micheal Ilunga: A Frontend Developer
                            and UI/UX Designer
                        </h1>

                        <p id="welcome-text">
                            I'm pleased to present my portfolio which I designed
                            and coded to allow you to discover all the knowledge and skills
                            that I have acquired in programming and interaction design.
                        </p>
                        <a href="mailto:michael.ict.info@gmail.com" id="welcome-let-talk">
                                    Let's chat
                        </a>
                    </div>

                    <img src={mike_welcome_pic} alt="mike_welcome"
                         className="mike_welcome_pic1"/>
                </div>
            </section>

            <PersonalProjects/>

            <Skills2/>

            <Footer/>
        </>
    );
}

export default WelcomePage;
