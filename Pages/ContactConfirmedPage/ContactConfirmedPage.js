import React from "react";
import './ContactConfirmedPage.css';
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import Footer2 from "../../Components/Footer2/Footer2";

function ContactConfirmedPage ({authorized}) {
    if (!authorized) {
        return <Redirect to="/ContactMusic" />;

    }
    return (
        <>
            <nav className="nav-ContactConfirmedPage">
            </nav>

            <div className="ContactConfirmedPage-container2">
                <h1>Thank you for getting in touch.</h1>
                <p>
                    We appreciate you're contacting us.
                    We'll get in touch with you soon.
                </p>
                <Link to="/Music" className="goback-to-music">
                    GO TO THE ILUNGA'S WEBSITE
                </Link>

            </div>

            <Footer2/>

        </>
    );
}

export default ContactConfirmedPage;
