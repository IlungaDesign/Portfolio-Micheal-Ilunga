import './EmptyPage.css';
import {Link} from "react-router-dom";

function EmptyPage() {
    return (
        <>
            <div className="empty-page">
                <h1>
                    This page will be filled with content very soon.
                </h1>

                <Link to="/" className="goBack-to-portfolio">
                    Go back to my Portfolio
                </Link>
            </div>
        </>
    );
}

export default EmptyPage;
