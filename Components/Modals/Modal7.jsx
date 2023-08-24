import React from 'react';
import './Modal.css';

const Modal7 = ({ openg, onCloseg }) => {
    if (!openg) return null;
    return (
        <div onClick={onCloseg} className='overlay'>
            <div onClick={(e) => {e.stopPropagation();
            }} className='modalContainer'>

                <p className='closeBtn' onClick={onCloseg}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/_5h2rW9zQDI"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{color:"white", fontFamily:"Sora", marginLeft:"50px"}}
                    className="song-title-youtube">
                    Dream Girl (Making of the video)</h1>

            </div>
        </div>
    );
};

export default Modal7;
