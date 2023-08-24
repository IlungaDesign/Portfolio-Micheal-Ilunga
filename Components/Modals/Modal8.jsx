import React from 'react';
import './Modal.css';

const Modal8 = ({ openh, onCloseh }) => {
    if (!openh) return null;
    return (
        <div onClick={onCloseh} className='overlay'>
            <div onClick={(e) => {e.stopPropagation();
            }} className='modalContainer'>

                <p className='closeBtn' onClick={onCloseh}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/8QdDTlY7WCM"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{color:"white", fontFamily:"Sora", marginLeft:"50px"}}
                    className="song-title-youtube">
                    K. Gabriel - Reason To Be (Produced and directed by ILUNGA)</h1>

            </div>
        </div>
    );
};

export default Modal8;
