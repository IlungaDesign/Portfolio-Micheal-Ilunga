import React from "react";
import './PageFitness.css';
import {Link} from "react-router-dom";
import TopButton from "../../Components/TopButton/TopButton";
import NavbarFitness from "../../Components/NavbarFitness/NavbarFitness";
import Footer from "../../Components/Footer/Footer";

// -----------images logo's imported--------------------------------------------
import image_logo_fitness_blue from "../../Images/logo_fitnessfriend_blue1.png";
import logo_fitness_white from "../../Images/logo_fitnessfriend_white.png"

// ----------- images mockups-------------------------------------------------
import image_compo_fitness1 from "../../Images/fitnessfriend pics kompo3.png";
import image_compo_fitness2 from "../../Images/fitnessfriend pics kompo4.png";
import image_compo_fitness3 from "../../Images/fitnessfriend pics kompo5.png";

// -----------other images imported------------------------------------
import image_fitness_hand1 from "../../Images/image_hand_fitness4.jpg"
import image_many_screen_fit from "../../Images/many_screen_fitness.png"
import image_phone_xxx from "../../Images/image_phone_xxx2.png"
import pixam_1 from "../../Images/mockup_pixam10.jpg";
import fontawesome_image from "../../Images/fontawesome2.jpg";
import afbeelding_fitness from "../../Images/fitness9.png";


function PageFitness() {
    return (
        <>
            <NavbarFitness/>

            {/*------------PRT FITNESSFRIEND INTRO-------------------------*/}

            <section className="Container-fitness2">
                <div className="part-assigment-Pixam">
                    <h1 className="title-PagePixam2">FitnessFriend</h1>

                    <p>Fitnessfriend, a mobile App allowing fitness enthusiasts to
                        meet in order to go for a fitness session together in a gym of their choice.
                    </p>

                    <div className="container-image-fitness">

                        <img src={logo_fitness_white} alt="pixam-logo" className="logo_fitness_assigment1"/>

                        <img src={afbeelding_fitness} alt="pixam-assigment"
                             className="image_fitness_assigment1"
                        />

                    </div>
                </div>

                {/*----------------------------------PROJECT-----------------------------------*/}

                <div className="part-Project">
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">Project</h1>
                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position">
                        During my Multimedia Communication and Design course at
                        <a href="https://www.thuas.com" target="_blank"
                            // style={{color:"#3f97fb", textDecoration:"none"}}
                           className="hyperlink-text-Pixam"> The Hague University</a>,
                        I was asked as a student to develop a concept for a mobile App which has the potential
                        to be used by a specific target group.

                    </p>
                </div>

                {/*----------------------------------IDEA PHASE-----------------------------------*/}

                <div className="part-idea-phase">
                    <div className="container-ideaPase-fitness">
                        <h className="text-on-background-PagePixam2" >Idea phase</h>

                    </div>

                    <div className="Problem-definition">
                        <h1 className="subtitle-PagePixam2" id="subtitle-position-problem">
                           Concept
                        </h1>
                        <p className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            The question above question inspired me to develop a mobile application named FitnessFriend allowing
                            fitness enthusiasts to meet in order to do a fitness session together.
                        </p>

                        <h1 className="subtitle-PagePixam2" id="subtitle-position-problem">
                            How it works
                        </h1>
                        <p className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            With FitnessFriend, fitness enthusiasts can create a profile where they can insert personal information
                            and photos of themselves in order to be identified by a sports partner. He also has the possibility of
                            posting his requirements in relation to the kind of sports partner he would like to meet. When this is done,
                            he has the possibility to see the other users using the platform and can contact a sports partner by sending
                            a message. Other users of the mobile App can react to the request and thus in this way come into contact with
                            the fitness enthusiasts.

                            The fitness enthusiast can also visit the social media of his potential fitness partner, such as Instagram,
                            Facebook or Tik tok. They can also share nutrition program together.
                        </p>
                    </div>
                </div>

                {/*--------------------------------PLAN OF ACTION---------------------------------*/}

                <div className="part-plan-of-action">

                    <div className="container-content-planOfAaction">
                        <h1
                            className="subtitle-PagePixam2" id="subtitle-position-problem"
                        >
                            Plan of action
                        </h1>
                        <p style={{marginTop:"30px", width:"85%"}}
                            className="paragraphe-PagePixam2" id="paragraphe-problem-position">
                            After defining the project, I drew up an implementation plan in order to have a
                            clear picture of the process and the steps I had to follow to achieve my goal.
                            This implementation plan includes:
                        </p>

                        <ul style={{marginLeft:"40px", listStyleType:"none"}}>
                            <li className="paragraphe-fitness3">
                                <i className="fa-solid fa-circle-check" style={{fontSize:"30px", color:"#14b61d", letterSpacing:"10px"}}></i>
                                an overview of the activities, phases, by-products that were to be generated during the project,
                                as well as the methods and techniques that were to be used,
                            </li>

                            <li className="paragraphe-fitness3" >
                                <i className="fa-solid fa-circle-check" style={{fontSize:"30px", color:"#14b61d", letterSpacing:"10px"}}></i>
                                the requirements that guarantee the quality of the result of the project, as well as those of the by-products,
                            </li>

                            <li className="paragraphe-fitness3" >
                                <i className="fa-solid fa-circle-check" style={{fontSize:"30px", color:"#14b61d", letterSpacing:"10px"}}></i>
                                an overview of all actors and organizations that have an influence on the project. In this chapter
                                you can also see the role of each team member,
                            </li>

                            <li className="paragraphe-fitness3"  >
                                <i className="fa-solid fa-circle-check" style={{fontSize:"30px", color:"#14b61d", letterSpacing:"10px"}}></i>
                                a planning of the project with the different deadlines,
                            </li>

                            <li className="paragraphe-fitness3" >
                                <i className="fa-solid fa-circle-check" style={{fontSize:"30px", color:"#14b61d", letterSpacing:"10px"}}></i>
                                a description of the duration, the width and prerequisites of the project,
                            </li>

                            <li className="paragraphe-fitness3" >
                                <i className="fa-solid fa-circle-check" style={{fontSize:"30px", color:"#14b61d", letterSpacing:"10px"}}></i>
                                The cost of the project and all the risk factors.
                            </li>

                        </ul>
                    </div>

                    <div className="container-title-planOfAaction">

                        <img src={image_fitness_hand1} alt="fitness-image4"
                             className="image-fitness-hand"/>
                    </div>

                </div>

                {/*--------------------------------METHODE USED---------------------------------*/}

                <div className="part-methode-fitness">

                    <h1 className="methode-techniques-fitness">Methods used</h1>

                    <div className="container-content-methods">
                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle fa-3x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">The P6 Project method</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    <a href="http://p6-methode.nl/p6-methode2.htm"
                                       target="_blank" className="hyperlink-text-Pixam">
                                        P6 management method
                                    </a>of the Dutch
                                    <a href="http://www.roelgrit.nl"
                                       target="_blank" className="hyperlink-text-Pixam">
                                        Roel Grit.
                                    </a>
                                    This choice is based on the fact that this method gives the possibility
                                    of understanding a project as a whole. Each stage of the project contains
                                    specific activities. This provides a frame of reference during the
                                    realization of the project. The P6 method contains six phases.
                                </p>
                            </li>
                        </ul>

                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle fa-3x" style={{color:"#ff004e"}}></i>
                                <h1 className="title-methods-techniques">The Use Experience method</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    For the design of this mobile application I used the
                                    <a href="https://www.amazon.nl/-/en/Jesse-James-Garrett/dp/0735712026"
                                       target="_blank"
                                       className="hyperlink-text-Pixam">
                                        User Experience method
                                    </a>, created by the
                                    American designer
                                    <a href="https://jessejamesgarrett.com"
                                       target="_blank"
                                       className="hyperlink-text-Pixam">
                                        Jesse James Garrett.
                                    </a>
                                    This choice is based on the fact that this method allows me to develop an
                                    application that is suitable for a specific target group. This makes the
                                    app accessible to the target group. During the project I applied this method in
                                    the design phase of the P6 method.
                                </p>
                            </li>
                        </ul>

                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle fa-3x" style={{color:"#ffb400"}}></i>
                                <h1 className="title-methods-techniques">The Nel Verhoeven's method</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    I chose to do the various researches of the project according to the method
                                    of Dutchwoman Nel Verhoeven.
                                    <a href="https://www.nelverhoeven.nl" target="_blank"
                                       className="hyperlink-text-Pixam">
                                        Nel Verhoeven.
                                    </a>
                                    She is a well-known and reputable research consultant in the Netherlands.

                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                {/*--------------------------------TECHNIQUES USED---------------------------------*/}

                <div className="part-techniques-fitness">

                    <h1 className="methode-techniques-fitness">Techniques used</h1>

                    <div className="container-content-methods">
                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle-check fa-2x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">Semi-structured interview</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    This technique helps to determine the needs and wishes of the user.
                                    This technique was useful because it allowed me to have more freedom
                                    during the collection of information. This technique gives the possibility
                                    to ask open questions, which allows to obtain detailed answers and to
                                    collect a lot of information about the target group.
                                </p>
                            </li>
                        </ul>

                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle-check fa-2x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">Desk-research</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    This technique allowed me to identify the possible characteristics of
                                    real users of the application. This allowed me to concretely know the
                                    types of people I had to approach during the interview sessions.
                                </p>
                            </li>
                        </ul>

                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle-check fa-2x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">Benchmarking</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    This technique allowed me to determine the functionality, navigation and
                                    guide style of the application. This study was important because it allowed
                                    me to draw inspiration from applications that are comparable to my concept.
                                    This in order to find effective features that I could use in my application
                                    During this study, I also analyzed the weak points of these applications to
                                    have points to which I could refer to better position my application in
                                    the market.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="container-content-methods">
                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle-check fa-2x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">MoSCoW Method</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    I also used the MoSCoW method which allowed me to prioritize the requirements
                                    of the application. This method offers the possibility of grouping the
                                    requirements of an application according to their importance. This allows
                                    you to better understand the most important requirements and those that can
                                    be set aside so that the project is be feasible.
                                </p>
                            </li>
                        </ul>

                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle-check fa-2x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">Use Case</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    A Use case helps you also to visualize all the alternative scenarios that can
                                    occur when a user is trying to achieve his goal. It allows you to define the
                                    fondation of your functional and non-functional requirements.
                                </p>
                            </li>
                        </ul>

                        <ul style={{ listStyleType: "none"}}>
                            <li className="paragraphe-content-methods">
                                <i className="fa-solid fa-circle-check fa-2x" style={{color:"#3f97fb"}}></i>
                                <h1 className="title-methods-techniques">Usability test</h1></li>
                            <li>
                                <p className="paragraphe-methods-techniques">
                                    This technique allowed me to assess whether the prototype meets the usability
                                    criteria. This test makes it possible to experiment and evaluate the behavior
                                    of the user while browsing the application. During this test, I observed how
                                    the user could go through the different stages of the application and perform
                                    the different tasks. An interview was also held with the test participants to
                                    find out their opinions about the app. These results were then analyzed and
                                    mentioned in a report.

                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="part-requirement" style={{borderBottom:"1px solid #cbe2f8"}}>
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        System requirements
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position">
                        In this stage of my project, I wrote down the system requirements which allowed me
                        to have a clear picture of functionalities and content specifications that wanted
                        to use in the application. When determining the system requirements, I’ve looked
                        at websites that are close to my concept so that I can select relevant
                        functionalities. This also helped me to have a clear idea of the visual design
                        of my application.
                    </p>
                </div>

                {/*--------------------------------VISUAL DESIGN---------------------------------*/}

                <div className="part-visual-design" style={{height:"auto"}}>
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project" >
                        Visual design
                    </h1>

                    <div className="container-color-scheme" style={{height:"auto", background:"#fafafa"}}>
                        <h id="title-color-scheme-text">Color Scheme</h>

                        <p id="paragraphe-color-scheme-text">
                            To distinct the FitnessFriend brand from the competition I've selected a new
                            color scheme and created a unique look.
                        </p>

                        <div className="selected-color-scheme" style={{marginBottom:"40px"}}>
                            <div className="div-color-scheme">
                                <div id="color-scheme-orange" style={{backgroundColor:"#0285da"}}></div>
                                <h>BLUE</h>
                                <p>#0074c1</p>
                            </div>

                            <div className="div-color-scheme">
                                <div id="color-scheme-bleu" style={{backgroundColor:"#85d5ff"}}></div>
                                <h>SKY BLUE</h>
                                <p>#85d5ff</p>
                            </div>

                            <div className="div-color-scheme" >
                                <div id="color-scheme-green" style={{backgroundColor:"#fd0200"}}></div>
                                <h>RED</h>
                                <p>#fd0200</p>
                            </div>

                            <div className="div-color-scheme" >
                                <div id="color-scheme-green-sky" style={{backgroundColor:"#007c38"}}></div>
                                <h>GREEN</h>
                                <p>#007c38</p>
                            </div>

                            <div className="div-color-scheme">
                                <div id="color-scheme-white"></div>
                                <h>WHITE</h>
                                <p>#FFFFFF</p>
                            </div>
                        </div>

                        <img src={image_phone_xxx} alt="image-fitness-xxx" style={{width:"70%"}}
                        className="image-trois-phones"/>
                    </div>

                </div >

                {/*--------------------------------LOGO---------------------------------*/}

                <div className="part-logo-pixam">
                    <div className="content-logo-pixam2" style={{height:"54vh"}}>
                        <h id="title-color-scheme-text">Logo FitnessFriend</h>

                        <p id="paragraphe-color-scheme-text">
                            I also made a logo in order to give a brand identity to the App FitnessFriend.
                            You can see what this logo looks like in the image below.
                        </p>
                        <img src={image_logo_fitness_blue} alt="pixam-assigment"
                             className="image_fitness_logo_blue"
                             style={{width:"280px", marginTop:"60px"}}/>
                    </div>
                </div>

                {/*--------------------------------TYPOGRAPHY---------------------------------*/}

                <div className="part-typography">
                    <div className="content-typography-pixam2">
                        <h id="title-color-scheme-text">Typography</h>

                        <p id="paragraphe-color-scheme-text" >
                            In the Fitness Friend app, I used the Helvetica font which is is an internationally
                            versatile font which is readable..
                            I used this font in several colors and sizes to create a
                            contrast between the titles and the texts of the content.
                            In some places of the application, I used light colors on the fonts so that these
                            texts are put in back. And so the other more important texts can be noticed by the user.
                        </p>

                        <img src={image_many_screen_fit} alt="pixam-assigment" className="image_fitness_text-compile"
                            />
                    </div>
                </div>

                {/*--------------------------------FONTAWESOME---------------------------------*/}

                <div className="part-icons">
                    <div className="content-icons-pixam2">
                        <h id="title-color-scheme-text">Fontawesome</h>

                        <p id="paragraphe-color-scheme-text" style={{width:"45%"}}>
                            For the FitnessFriend App I chose to use the
                            <a href="https://fonts.google.com/specimen/Poppins"
                               target="_blank" className="hyperlink-text-Pixam">
                                Fontawesome
                            </a>
                            icons. These icons are very popular and recognizable by users.
                            Another advantage of the Fontawesome icons is that some of them
                            can be used for free.
                        </p>

                        <img src={fontawesome_image} alt="pixam-assigment"
                             className="image_fontawesome"/>
                    </div>
                </div>

                {/*------------------------------------------------------------------------------------*/}

                <div className="part-wireframe" style={{height:"35vh"}}>

                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Wireframes
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position"
                       style={{width:"70%", marginBottom:"50px"}}>
                        For the FitnessFriend App, I created wireframes in order to have a
                        visualization of the layout of the site. These wareframes allowed me
                        to have a frame of reference when designing the mockups in the next step.
                    </p>

                </div>

                {/*--------------------------------MOCKUPS---------------------------------*/}

                <div className="part-Mockups" style={{height:"45vh"}}>

                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Mockups
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position"
                       style={{width:"70%", marginBottom:"50px"}}>
                        After having created the wireframes of the website, I designed the mockups
                        of the Pixam site. To do this I used
                        <a href="https://www.figma.com/file/iXAKzAWkPxqFndjgW7H24O/Pixam-(Prototype)?node-id=7%3A187"
                           target="_blank"
                           className="hyperlink-text-Pixam"> Figma </a>,
                        which is a platform for designing digital products such as interactive prototypes and websites. When designing the models,
                        I looked at the wireframes that I designed in the previous step in order to continue to follow the thread of the design as
                        I determined beforehand. Besides that, I took a look at the color scheme of my style guide so that I could easily color the
                        different parts of my site. During this proces I also took a look at the typography.
                    </p>
                </div>

                {/*--------------------------------RESULT---------------------------------*/}

                <div className="part-result-fitness">
                    <h1 className="subtitle-PagePixam2" id="subtitle-position-project">
                        Result
                    </h1>

                    <p className="paragraphe-PagePixam2" id="paragraphe-project-position" >
                        Here below are the mockups that I designed for the FitnessFriend project.
                        It’s mobile App allowing fitness enthusiasts to meet in order to go for
                        a fitness session together in a gym of their choice.
                    </p>

                    <div className="container-result1-fitness">
                        <img src={image_compo_fitness1} alt="fitness-assigment"
                             style={{width:"90%"}}/>
                    </div>

                    <div className="container-result1-fitness">
                        <img src={image_compo_fitness2} alt="fitness-assigment"
                             style={{width:"90%"}}/>
                    </div>

                    <div className="container-result1-fitness">
                        <img src={image_compo_fitness3} alt="fitness-assigment"
                             style={{width:"90%"}}/>
                    </div>

                    {/*--------------------------------OPTION PIXAM----------------------------*/}

                    <div  className="container-option-fitnessfriend2">

                        <div className="container-text-view">
                            <h className="view-fitness-project">
                                View the Pixam project
                            </h>
                        </div>

                        <Link to="/PagePixam2" className="container-fitness-Pagepixam"
                        style={{background:"#534f54"}}>

                            <img src={pixam_1} alt="pixam-assigment"
                                 style={{width:"80%"}}/>
                            <div className="container-fitness-Pagepixam2"
                            style={{backgroundColor:"#69656a"}}>
                                <h style={{color:"white", fontFamily:"Sora",
                                    fontSize:"30px", marginLeft:"30px", marginTop:"25px",
                                    fontWeight:"bold"}}>
                                    Pixam
                                </h>
                                <p >
                                    I designed a website to close the end of my
                                    training Frontend development at the Novi
                                    University.
                                </p>

                                <button className="button-project-fitness2"
                                style={{backgroundColor:"#343235"}}>View project</button>
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

export default PageFitness;

