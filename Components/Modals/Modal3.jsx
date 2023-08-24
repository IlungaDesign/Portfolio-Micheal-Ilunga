import React from 'react';
import './Modal.css';

const Modal3 = ({ openc, onClosec }) => {
    if (!openc) return null;
    return (
        <div onClick={onClosec} className='overlay' style={{width:"100%", backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
            <div onClick={(e) => {e.stopPropagation();
            }} className='modalContainer'>

                <p className='closeBtn' onClick={onClosec}>
                    <i className="fa-solid fa-xmark"></i>
                </p>

                <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/6ScWzjwy1QQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                <h1 style={{ fontFamily:"Sora", marginLeft:"50px"}}
                    className="song-title-youtube">
                    ILUNGA - So Fine</h1>

            </div>
        </div>
    );
};

export default Modal3;
