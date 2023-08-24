import './Footer.css';

function Footer() {
    return (
        <div className="Container-Footer">
            <div className="text-footer-1">
                <h id="no-bar" style={{color:"#0b3f88", fontSize:"12px"}}>© 2023 Micheal Ilunga Portfolio</h>
                <h style={{color:"#0b3f88", fontSize:"12px"}}>All rights are reserved</h>
            </div>
            <div className="text-footer-2">
                <h style={{color:"#0b3f88", fontSize:"12px"}}>This portfolio is build
                    in <a href="https://legacy.reactjs.org"
                          target="_blank"
                          style={{color:"#3f97fb", fontSize:"12px"}}
                    >
                        React.js
                </a> by Micheal Ilunga</h>
            </div>
        </div>
    );
}

export default Footer;
