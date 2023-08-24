import './Footer2.css';
import React from "react";

function Footer2() {
    return (
        <div className="Container-Footer2">

            <ul className="social-icons-music-footer">
                <li>
                    <a href="https://www.instagram.com/ilunga_official/"
                       target= "_blank" className="social-icons-music-a"
                    >
                        <i className="fa-brands fa-instagram" ></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/michael.ilunga.official/"
                       target= "_blank" className="social-icons-music-a"
                    >
                        <i className="fa-brands fa-facebook" ></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@ILUNGAmusic/videos"
                       target= "_blank" className="social-icons-music-a"
                    >
                        <i className="fa-brands fa-youtube" ></i>
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/track/7fhaw7pbTledKTVmidqqYM"
                       target="_blank" className="social-icons-music-a"
                    >
                        <i className="fa-brands fa-spotify" ></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@ilunga_official"
                       target="_blank" className="social-icons-music-a"
                    >
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/track/7fhaw7pbTledKTVmidqqYM"
                       target="_blank" className="social-icons-music-a"
                    >
                        <i className="fa-brands fa-itunes"></i>
                    </a>
                </li>
            </ul>

            <div className="text-footer2">
                <p>
                    Website developed by
                    <a> Micheal Ilunga</a>
                </p>

                <h id="no-bar-footer2">© 2023 NYOTA RECORDS</h>
                <h>All rights are reserved</h>
            </div>
        </div>
    );
}

export default Footer2;
