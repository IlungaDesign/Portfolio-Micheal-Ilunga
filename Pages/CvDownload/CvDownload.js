import React from "react";
import './CvDownload.css';
import {NavLink} from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

// -----------PDF FILES-----------------------------------
import cv_english2 from "../../Assets/CV van Micheal Ilunga (2023 EN).pdf";
import cv_french from "../../Assets/CV van Micheal Ilunga (2023 FR) .pdf";
import cv_dutch from "../../Assets/CV van Micheal Ilunga (2023 NL) .pdf";


function EmptyPage() {
    return (
        <>
            <nav className="nav-CvDownload">
                <NavLink to="/" className ="button-GoBback-cv">
                    <i  className="fa-solid fa-chevron-left"></i>
                    <h >  Go back to my Portfolio</h>
                </NavLink>
            </nav>

            <div className="CvDownload-container">
                <h1>You can download my curriculum vitae in French, Dutch and English.
                    Choose the language which is suitable for you.
                </h1>

                <div className="button-CvDownload-container">

                    <a href={cv_english2}
                       target="_blank"
                       className="button-CvDownload">
                       Download Cv English
                    </a>

                    <a href={cv_french}
                       target="_blank"
                       className="button-CvDownload">
                       Download Cv Dutch
                    </a>

                    <a href={cv_dutch}
                       target="_blank"
                       className="button-CvDownload">
                       Download Cv French
                    </a>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default EmptyPage;
