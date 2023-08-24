import React from "react";
import './PagePixam2.css';
import {Link} from "react-router-dom";
import TopButton from "../../Components/TopButton/TopButton";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import Footer from "../../Components/Footer/Footer";

// -----------images logo's imported--------------------------------------------
import image_logo_assigment from "../../Images/pixam_logo_white3.png";
import image_logo_pixam2 from "../../Images/pixam_logo11.png";

// ----------- images wireframes-------------------------------------------------
import wireframes_pixam1 from "../../Images/wireframe10.jpg";
import wireframes_pixam2 from "../../Images/wireframe11.jpg";

// ----------- images mockups-------------------------------------------------
import startpagina_desktop_pixam2 from "../../Images/Startpagina-(desktop)3.jpg";
import afbeelding_detail_desktop_pixam2 from "../../Images/Afbeelding-details-(desktop)3.jpg";
import afbeelding_detail_desktop_pixam3 from "../../Images/Afbeelding-details-(desktop)5.jpg";
import contact_login_pixam2 from "../../Images/Contact-(desktop)2.jpg";
import login2 from "../../Images/Login-(desktop)2.jpg";
import login_wijzigen from "../../Images/My-Pixam-(desktop)2.jpg";
import mobile_all_pixam2 from "../../Images/Pixam-(mobile)-tout4.png";

// -----------other images imported------------------------------------
import image_fitness from "../../Images/fitness8.png";
import fontawesome_image from "../../Images/fontawesome2.jpg";



function PagePixam() {
    return (
        <>
            <Navbar2/>

            {/*------------PRT PIXAM INTRO-------------------------*/}

            <section className="Container-PagePixam2">

                <div className="part-assigment-Pixam">
                    <h1 className="title-PagePixam2">Pixam</h1>
                    <p>Pixam, a website which allows users to easily download
                        images in Full HD for free.
                    </p>
                    <div className="container-image-pixam2">
                        <img src={image_logo_assigment} alt="pixam-logo"
                             className="logo_pixam_assigment1"/>
                    </div>
                </div>

                {/*----------------------------------PROJECT-----------------------------------*/}

                <div className="part-Project">
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">Project</h1>
                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position">
                        As part of the frontend Developer training that I took at the
                        <a href="https://www.novi.nl" target="_blank"
                           className="hyperlink-text-Pixam">
                            Novi University
                        </a>
                        in Utrecht, I was asked to create a functional application that could
                        communicate with an API. This is how I was able to prove that I had
                        acquired the fundamental skills of a professional frontend developer.
                    </p>
                </div>

                {/*----------------------------------IDEA PHASE-----------------------------------*/}

                <div className="part-idea-phase">
                    <div className="container-ideaPase-pixam2">
                        <h className="text-on-background-PagePixam2" >Idea phase</h>
                    </div>

                    <div className="Problem-definition">
                        <h1 className="subtitle-PagePixam2" id="subtitle-position-problem">
                            Problem definition
                        </h1>
                        <p className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            Sometimes it can be hard to find high-quality images online to use for a web
                            application or video editing project, as producing these images requires more
                            photography and image editing skills. Since not everyone has these skills and
                            doesn’t have the means to generate high-quality illustration images, I thought
                            of developing an application that allows users to easily find and download free
                            full HD images online.
                        </p>

                        <h1 className="subtitle-PagePixam2" id="subtitle-position-problem">
                            Concept
                        </h1>
                        <p className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            The user must create an account to access the application. Then he can see an overview
                            of the different images available for download. The application includes a search
                            engine that allows users to search for images using a keyword. In addition,
                            there is also a filter that supports the user to display images that belong to a certain category.
                            When the user has found a desired image, he has the option to view and download it.
                            Furthermore, this application uses the unplash API through which the images are imported
                            to the application.
                        </p>
                    </div>
                </div>

                {/*----------------------------------USE CASE-----------------------------------*/}

                <div className="part-use-case">
                    <div className="use-case-container">
                        <h1 className="subtitle-PagePixam2" id="subtitle-position-problem">
                            Use case
                        </h1>
                        <p className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            A Use case helps you to think about what the system should (or can) do, but il helps you also to visualize
                            all the alternative scenarios that can occur when a user is trying to achieve his
                            goal. It allows you to define the fondation of your functional and non-functional requirements.
                        </p>
                    </div>

                    <div className="image-use-case">
                    </div>
                </div >

                <div className="part-requirement">
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        System requirements
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position">
                        In this stage of my project, I wrote down the system requirements. this allowed me to have a
                        clear picture of functionalities and content specifications that wanted to use in the
                        application. When determining the system requirements, I’ve looked at websites that are
                        close to my concept so that I can select relevant functionalities. This also helped me to
                        have a clear idea of the visual design of my application.
                    </p>
                </div>

                {/*----------------------------------BENCHMARK-----------------------------------*/}

                <div className="part-benchmark">
                    <div className="Benchmark-background">
                        <h className="text-on-background-PagePixam2" >Benchmarking</h>
                    </div>

                    <div className="benchmark-text-PagePixam2">
                        <h1 className="subtitle-PagePixam2" id="subtitle-position-problem">
                            Benchmark research
                        </h1>
                        <p className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            A Use case helps you to think about what the system should (or can) do, but il helps you also to visualize
                            all the alternative scenarios that can occur when a user is trying to achieve his
                            goal. It allows you to define the fondation of your functional and non-functional requirements.
                        </p>
                    </div>
                </div>

                {/*----------------------------------VISUAL DESIGN-----------------------------------*/}

                <div className="part-visual-design">
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Visual design
                    </h1>

                    <div className="container-color-scheme">
                        <h id="title-color-scheme-text">Color Scheme</h>

                        <p id="paragraphe-color-scheme-text">
                            To distinct the Pixam brand from the competition I've selected a new
                            color scheme and created a unique look.
                        </p>

                        <div className="selected-color-scheme">
                            <div className="div-color-scheme">
                                <div id="color-scheme-orange"></div>
                                <h>ORANGE</h>
                                <p>#FF7A00</p>
                            </div>

                            <div className="div-color-scheme">
                                <div id="color-scheme-bleu"></div>
                                <h>BLUE</h>
                                <p>#008BFF</p>
                            </div>

                            <div className="div-color-scheme">
                                <div id="color-scheme-green"></div>
                                <h>GREEN</h>
                                <p>#00BE6E</p>
                            </div>

                            <div className="div-color-scheme">
                                <div id="color-scheme-green-sky"></div>
                                <h>SKY GREEN</h>
                                <p>#EEF9F5</p>
                            </div>

                            <div className="div-color-scheme">
                                <div id="color-scheme-white"></div>
                                <h>WHITE</h>
                                <p>#FFFFFF</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/*----------------------------------LOGO-----------------------------------*/}

                <div className="part-logo-pixam">
                    <div className="content-logo-pixam2">
                        <h id="title-color-scheme-text">Logo Pixam</h>

                        <p id="paragraphe-color-scheme-text">
                            I also made a logo in order to give a brand identity to the website Pixam.
                            You can see what this logo looks like in the image below.
                        </p>
                        <img src={image_logo_pixam2} alt="pixam-assigment" className="image_pixam2_logo"/>
                    </div>
                </div>

                {/*----------------------------------TYPOGRAPHY-----------------------------------*/}

                <div className="part-typography">
                        <div className="content-typography-pixam2">
                            <h id="title-color-scheme-text">Typography</h>

                            <p id="paragraphe-color-scheme-text">
                                For the Pixam site I chose to use Poppins fonts because
                                it is an internationally versatile font which is readable.
                                The Poppins fonts can be found in the font library of
                                <a href="https://fonts.google.com/specimen/Poppins" target="_blank"
                                   className="hyperlink-text-Pixam">
                                    Google-fonts
                                </a>.
                            </p>

                            <p className="typography-text-1">
                                Whereas disregard and contempt
                            </p>

                            <h style={{fontSize: '12px',fontFamily: "Sora", fontWeight: 'bold'}}>
                                HEADLINES #1
                            </h>

                            <p className="typography-text-2">WHEREAS DISREGARD AND CONTEMPT</p>

                            <h style={{fontSize: '12px',fontFamily: "Sora", fontWeight: 'bold'}}>
                                HEADLINES #2
                            </h>

                            <p className="typography-text-3">
                                Whereas disregard and contempt
                            </p>

                            <h style={{fontSize: '12px',fontFamily: "Sora",
                                fontWeight: 'bold'}}>
                                HEADLINES #3
                            </h>

                            <p className="typography-text-4"
                               style={{
                                fontSize: '18px', color: '#8b8b8b', fontFamily: "Poppins",
                                textAlign: 'center', width: '60%', fontWeight:'normal',
                                marginTop: '40px'}}
                            >
                                Whereas disregard and contempt
                            </p>

                            <h style={{fontSize: '12px',fontFamily: "Sora", fontWeight: 'bold'}}>CONTENT FONTS #1</h>

                            <p className="typography-text-5" style={{
                                fontSize: '11px', color: 'black', fontFamily: "Poppins",
                                textAlign: 'center', width: '60%', marginTop: '40px'}} >
                                Whereas disregard and contempt
                            </p>

                            <h style={{fontSize: '12px',fontFamily: "Sora", fontWeight: 'bold'}}>
                                CONTENT FONTS #2
                            </h>
                        </div>
                </div>

                {/*----------------------------------PRT ICONS-----------------------------------*/}

                <div className="part-icons">
                    <div className="content-icons-pixam2">
                        <h id="title-color-scheme-text">Fontawesome</h>

                        <p id="paragraphe-color-scheme-text" style={{width:"80%"}}>
                            For the Pixam site I chose to use the
                            <a href="https://fonts.google.com/specimen/Poppins"
                               target="_blank"
                               className="hyperlink-text-Pixam">
                                Fontawesome
                            </a>icons. These icons are very popular and recognizable by users.
                            Another advantage of the Fontawesome icons is that some of them can be used for free.
                        </p>

                        <img src={fontawesome_image} alt="pixam-assigment"
                             className="image_fontawesome"/>
                    </div>
                </div>

                {/*----------------------------------WIREFRAMES-----------------------------------*/}

                <div className="part-wireframe">

                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Wireframes
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position"
                       style={{marginBottom:"50px"}}>
                        For the Pixam site, I created wireframes in order to have a visualization of
                        the layout of the site. These wareframes allowed me to have a frame of
                        reference when designing the mockups in the next step.
                    </p>

                    <div className="container-wireframe">
                        <img src={wireframes_pixam1} alt="pixam-assigment"
                             className="image_pixam_wireframes"/>
                        <img src={wireframes_pixam2} alt="pixam-assigment"
                             className="image_pixam_wireframes2"/>
                    </div>
                </div>

                {/*----------------------------------MOCKUPS-----------------------------------*/}

                <div className="part-Mockups">

                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Mockups
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position"
                       style={{marginBottom:"50px"}}>
                        After having created the wireframes of the website, I designed the mockups of
                        the Pixam site. To do this I used
                        <a href="https://www.figma.com/file/iXAKzAWkPxqFndjgW7H24O/Pixam-(Prototype)?node-id=7%3A187"
                           target="_blank"
                           className="hyperlink-text-Pixam">
                            Figma
                        </a>,
                        which is a platform for designing digital products such as interactive prototypes
                        and websites. When designing the models, I looked at the wireframes that I
                        designed in the previous step in order to continue to follow the thread of the design as
                        I determined beforehand. Besides that, I took a look at the color scheme of my style
                        guide so that I could easily color the different parts of my site. During this proces
                        I also took a look at the typography.
                    </p>
                </div>

                <div className="part-result-Pixam">
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Result
                    </h1>

                    <p className="paragraphe-result" id="paragraphe-project-position">
                        Here is the final result of the Pixam application. It’s an application
                        that allows users to easily find and download free full HD illustration
                        images online. As the project required, I implemented an API which allows
                        images to be imported into the Pixam website. I’ve used the
                        <a href="https://unsplash.com" target="_blank"
                           className="hyperlink-text-Pixam"> Unsplash </a>API.
                        After creating my API key in the Unsplash website, I made a Get-request
                        to retrieve the data (the images that users would like to download).
                    </p>

                    <p className="paragraphe-result" id="paragraphe-project-position" >
                        In the application I have also implemented the
                        <a href="https://www.npmjs.com/package/react-hook-form" target="_blank"
                           className="hyperlink-text-Pixam">
                            React-Hook-Form
                        </a>
                        library which support to communicate to the user in a use-friendly
                        way his mistakes made when filling out a form.
                    </p>

                    <p className="paragraphe-result" id="paragraphe-project-position" >
                        Since this project is entirely a Frontend project, I got a backend from
                        <a href="https://www.novi.nl" target="_blank"
                           className="hyperlink-text-Pixam">
                            Novi University
                        </a>
                        so that sending user registration and login data into the app can
                        be possible. This backend runs on a Heroku server. This server
                        automatically becomes inactive when no requests are made for a while.
                        The first request that takes the server out of 'sleep mode' will
                        therefore take a maximum of 30 seconds. After that, the response
                        time will be normal. Therefore, always perform a test request first.
                    </p>

                    <p className="paragraphe-result" id="paragraphe-project-position">
                        You can clone the Pixam GitHub project via this
                        <a href="https://github.com/IlungaDesign/The-Pixam-Website-2023-update-"
                           target="_blank" className="hyperlink-text-Pixam">
                            Link</a>. To clone it you must have an IDE such as
                        <a href="https://www.jetbrains.com/idea/download/?section=mac"
                           target="_blank" className="hyperlink-text-Pixam"> IntellIJ </a> or
                        <a href="https://www.jetbrains.com/webstorm/" target="_blank"
                           className="hyperlink-text-Pixam"> Webstorm
                        </a>.
                    </p>

                    <div className="container-result1-pixam">
                        <img src={startpagina_desktop_pixam2} alt="pixam-assigment"
                             className="image_startpagina_pixam_desktop"/>
                        <img src={afbeelding_detail_desktop_pixam2} alt="pixam-assigment"
                             className="image_afbeelding_detail_pixam"/>
                        <img src={afbeelding_detail_desktop_pixam3} alt="pixam-assigment"
                             className="image_afbeelding_detail_pixam"/>
                    </div>

                    <div className="container-result2-pixam">
                        <img src={contact_login_pixam2} alt="pixam-assigment"
                             className="image_contact_login_desktop"/>
                        <img src={login2} alt="pixam-assigment"
                             className="image_contact_login_desktop"/>
                        <img src={login_wijzigen} alt="pixam-assigment"
                             className="image_contact_login_desktop"/>
                    </div>

                    <div className="container-result3-pixam">
                        <img src={mobile_all_pixam2} alt="pixam-assigment"
                             className="image_startpagina_pixam_desktop2"
                        />
                    </div>

                    {/*----------------------------------CONTAINER OPTION FITNESSFRIEND-----------------------------------*/}

                    <div  className="container-option-fitnessfriend2">

                        <div className="container-text-view">
                            <h className="view-fitness-project">
                                View the FitnessFriend project
                            </h>
                        </div>

                        <Link to="/PageFitness" className="container-fitness-Pagepixam">
                                <img src={image_fitness} alt="pixam-assigment" style={{width:"70%"}}/>
                                <div className="container-fitness-Pagepixam2">
                                    <h style={{color:"white", fontFamily:"Sora",
                                        fontSize:"30px", marginLeft:"30px", marginTop:"25px", fontWeight:"bold"}}>Fitnessfriend</h>
                                    <p >
                                        This is the result of a project I did during my Multimedia Communication
                                        and Design studies at the University of The Hague.
                                    </p>

                                    <button className="button-project-fitness2">View project</button>
                                </div>

                        </Link>
                    </div>
                </div>

                <TopButton/>

            </section>

            <Footer/>

        </>
    );
}

export default PagePixam;
