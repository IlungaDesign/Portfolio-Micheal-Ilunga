import './UrbanVisionTrackList.css';
import React from "react";
import {Link} from "react-router-dom";
import Footer2 from "../../Components/Footer2/Footer2";
import disco_1stclass from "../../Images/cover_1stclass3.jpg";


function UrbanVisionTrackList() {


    return (
        <>

            <div className="tracklist-background">

                <div className="container-nav-tracklist">
                    <i className="fa-solid fa-chevron-left" style={{marginLeft: "100px"}}></i>
                    <Link to="/Music" className="goback-button-tracklist"
                          style={{fontSize:"14px"}}>
                        GO BACK
                    </Link>
                </div>

                <div className="container-tracklist-element">
                    <div className="container-CdCover-title">
                        <img src={disco_1stclass} alt="dreamgirl_cover1"
                             className="image-disc-dream2"/>

                        <ul className="info-cd-kort">
                            <li style={{fontFamily:"Poppins", fontSize:"30px"}}>1st Class</li>
                            <li style={{color:"#ff007e",fontFamily:"Poppins", fontSize:"25px"}}>Urban Vision</li>
                            <li style={{color:"#747474",fontFamily:"Poppins", fontSize:"12px",
                            paddingTop:"7px"}}>HIPHOP/ R&B - 2005 </li>
                        </ul>
                    </div>

                    <div className="container-tracklist-and-cover">
                        <div className="container-tracklist-and-cover">

                            <ul className="container-tracklist">
                                <h1 style={{fontFamily:"Poppins", fontSize:"30px",
                                    marginBottom:"20px", marginLeft:"5%",marginTop:"10px"}}>1st Class - Urban vision (Track list)</h1>

                                <li className="songs-elements">
                                    <div className="Tack-number">01.</div>
                                    <div className="Tack-title">Intro 1st Class (feat. J. BROWN)</div>
                                    <div className="Tack-minutes-second">1:26</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>02.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>
                                        Watch Your Girl / Remix (feat. TRANKILITO)
                                    </div>
                                    <div className="Tack-minutes-second"
                                         style={{backgroundColor: "white"}}>
                                        4:15
                                    </div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">03.</div>
                                    <div className="Tack-title">Oh Oh!</div>
                                    <div className="Tack-minutes-second">3:52</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>04.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>Show Me</div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>3:28</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">05.</div>
                                    <div className="Tack-title">You're The One</div>
                                    <div className="Tack-minutes-second">2:26</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>06.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>Really Love You</div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>4:37</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">07.</div>
                                    <div className="Tack-title">Let's Get It On</div>
                                    <div className="Tack-minutes-second">3:29</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>08.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>Blaze!</div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>3:58</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">09.</div>
                                    <div className="Tack-title">One More Chance</div>
                                    <div className="Tack-minutes-second">3:51</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>10.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>
                                        Nena Te Quiero (feat. JODY BERNAL)
                                    </div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>
                                        3:30
                                    </div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">11.</div>
                                    <div className="Tack-title">Show Me / Prt II</div>
                                    <div className="Tack-minutes-second">2:16</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>12.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>
                                        Watch Your Girl / Radio version
                                    </div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>3:24</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">13.</div>
                                    <div className="Tack-title">Back Stage (feat. DJ MBT & JOHN DE LA ROCHE) - Interlude</div>
                                    <div className="Tack-minutes-second">1:20</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>14</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>Friday Night</div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>4:15</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number">15.</div>
                                    <div className="Tack-title">A Girlfriend</div>
                                    <div className="Tack-minutes-second">2:34</div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" style={{backgroundColor: "white"}}>16.</div>
                                    <div className="Tack-title" style={{backgroundColor: "white"}}>
                                        Fly Style (feat. TRAKILITO) - Interlude
                                    </div>
                                    <div className="Tack-minutes-second" style={{backgroundColor: "white"}}>
                                        1.26
                                    </div>
                                </li>

                                <li className="songs-elements">
                                    <div className="Tack-number" >17.</div>
                                    <div className="Tack-title" >
                                        Watch Your Girl / Remix III (Prod. by R. Stone) Bonus
                                    </div>
                                    <div className="Tack-minutes-second" >2.53</div>
                                </li>

                                <li style={{fonFamily:"Poppins", fontSize:"13px", marginLeft:"40px",
                                    marginTop:"20px", fontWeight:"bold" }}>
                                    @2005 MANCHA NEGRA.
                                </li>

                                <li style={{fonFamily:"Poppins", fontSize:"13px", marginLeft:"40px",
                                    marginTop:"6px", marginBottom:"70px",fontWeight:"normal", color:"#747272" }}>
                                    @2005 MANCHA NEGRA.
                                </li>

                                <a href="https://youtube.com/playlist?list=PLNg3U4VQUWLHl2qyV3u3IDzkjQPo5Toen"
                                   target="_blank" className="button-Stream-download" style={{width:"600px"}}
                                >
                                    STREAM AND DOWNLOAD THE ALBUM
                                </a>

                            </ul>

                            <div className="CdCover-and-info">
                                <img src={disco_1stclass} alt="dreamgirl_cover1"
                                     className="image-disc-dream3"/>

                                <div className="section-cd-info">

                                    <h style={{fonFamily:"Poppins", fontSize:"20px", marginLeft:"20px",
                                        marginTop:"6px", fontWeight:"normal", color:"#ff007e"}}>Urban Vision's 1st Class album.</h>

                                    <p className="paragraphe-1stClass">
                                        The group URBAN VISION was composed of 2 musicians, MICHAEL ILUNGA (Lead singer)
                                        and SERGIO LOPES (rapper). This group existed from the year 2003 until 2006.</p>

                                    <p className="paragraphe-1stClass"> The 1st Class album is the only Album that the
                                        group Urban Vision has released. The Album was launched on April 24, 2005.
                                        The musical part of the Album was composed by ROBERT WALLACE, MICHEAL ILUNGA,
                                        RANDY STONE and JIMMY KING. The lyrics of the songs were composed by MICHAEL
                                        ILUNGA, SERGIO LOPES, JIMMY KING and TRANKILITO. The vocal recordings as well
                                        as the programming of the Beats were made at the Kees Tel Pro studio in
                                        Eindhoven (in Holland). Mixing and mastering was done by Kees Arjan Tel.
                                    </p>

                                    <p className="paragraphe-1stClass">The hit "Show Me" was for several weeks at
                                        the top of the Angolese chart in 2005. The artists who performed in the
                                        Album 1st class are MICHAEL ILUNGA/ SERGIO LOPES/ JODY BERNALD/
                                        JUNIOR BROWN/ TRANKILITO.
                                    </p>

                                    <p className="paragraphe-1stClass">@2005 MANCHA NEGRA.</p>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer2/>
        </>
    );
}

export default UrbanVisionTrackList;

