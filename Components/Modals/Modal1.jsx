import React from 'react';
import './Modal.css';

const Modal1 = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay' style={{width:"100%", backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
            <div onClick={(e) => {e.stopPropagation();
                }} className='modalContainer'>

                <p className='closeBtn' onClick={onClose}>
                        <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" src="https://www.youtube.com/embed/ESJlcZWTtHA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{ fontFamily:"Sora", marginLeft:"50px"}}
                className="song-title-youtube">
                    ILUNGA - My African Sound feat. S. Lopes</h1>

            </div>
        </div>
    );
};

export default Modal1;
