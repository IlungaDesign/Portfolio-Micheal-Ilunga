import './PersonalProjects.css';
import {Link} from "react-router-dom";

// -----------images imported-----------------------------
import pixam_1 from "../../Images/mockup_pixam10.jpg";
import fitness1 from "../../Images/fitness10.png"


function PersonalProjects() {
    return (
        <>
            <section className="Pixam-section">

                <h1>Personal projects</h1>

                <Link to="/PagePixam2" className="Pixam-element">

                    <div className="container-info-Pixam">
                        <div className="container-info-Pixam2">
                            <h>Pixam</h>
                            <p >I designed a website to close the end of
                                my training Frontend Developer at the
                                Novi University.</p>
                            <Link to="/PagePixam2" className="button-info-pixam">View Project</Link>
                        </div>

                    </div>

                    <div className='container-image-Pixam'>
                        <img src={pixam_1} alt="pixam-voorblad"
                             className="image-pixam1"/>
                    </div>

                </Link>
            </section>

            <section className="Pixam-section" id="fitness-section">

                <Link to="/PageFitness" className="Pixam-element">

                    <div className="container-info-Pixam" id="container-info-fitness">
                        <div className="container-info-Pixam2">
                            <h>FitnessFriend</h>
                            <p >
                                This is the result of a project I did during my
                                Multimedia Communication and Design studies at
                                the University of The Hague.
                            </p>
                            <Link to="/PageFitness"
                                  className="button-info-pixam" id="button-info-fitness">
                                View Project
                            </Link>
                        </div>

                    </div>

                    <div className='container-image-Pixam' id="container-image-fitness">
                        <img src={fitness1} alt="fitness-voorblad"
                             className="image-pixam1"/>
                    </div>

                </Link>
            </section>
        </>
    );
}

export default PersonalProjects;
