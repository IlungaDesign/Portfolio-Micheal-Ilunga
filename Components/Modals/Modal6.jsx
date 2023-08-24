import React from 'react';
import './Modal.css';

const Modal6 = ({ openf, onClosef }) => {
    if (!openf) return null;
    return (
        <div onClick={onClosef} className='overlay'>
            <div onClick={(e) => {e.stopPropagation();
            }} className='modalContainer'>

                <p className='closeBtn' onClick={onClosef}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/DjR0moLBKLY"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{color:"white", fontFamily:"Sora", marginLeft:"50px"}}
                    className="song-title-youtube">
                    So Fine (Making of the video)</h1>

            </div>
        </div>
    );
};

export default Modal6;
