import React from 'react';
import './Modal.css';
import Music from "../../Links/Music/Music";

const Modal9 = ({ openi, onClosei }) => {
    if (!openi) return null;
    return (
        <div onClick={onClosei} className='overlay'>
            <div onClick={(e) => {e.stopPropagation();
            }} className='modalContainer'>

                <p className='closeBtn' onClick={onClosei}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/aHRkqZlyabk"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{color:"white", fontFamily:"Sora", marginLeft:"50px"}}
                    className="song-title-youtube">
                    WOMANIZA - Pop Da Booty Fasta (Produced and directed by ILUNGA)</h1>

            </div>
            <Music/>
        </div>
    );
};

export default Modal9;
