import React from 'react';
import './Modal.css';

const Modal5 = ({ opene, onClosee }) => {
    if (!opene) return null;
    return (
        <div onClick={onClosee} className='overlay'>
            <div onClick={(e) => {e.stopPropagation();
            }} className='modalContainer'>

                <p className='closeBtn' onClick={onClosee}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/hwbTD_uzE-E"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{color:"white", fontFamily:"Sora", marginLeft:"50px"}}
                    className="song-title-youtube">
                    S. LOPES records My African Sound</h1>

            </div>
        </div>
    );
};

export default Modal5;
