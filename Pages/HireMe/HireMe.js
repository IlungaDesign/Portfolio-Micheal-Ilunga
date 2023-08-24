import './HireMe.css';
import mike_hireMe_pic from "../../Images/mike_pic8.jpg";

function HireMe() {
    return (
        <>

            <div className="div-hire-me">

                <div className="testA">
                    <img src={mike_hireMe_pic} alt="mike_welcome"
                         className="mike_hireMe_pic1"/>

                    <ul className="icon_social_media_hireMe">
                        <li>
                            <a href="https://dribbble.com/ILUNGA2023"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-solid fa-basketball"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/micheal-ilunga-45b277288"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61550189609725"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/ilunga_design/"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/ILUNGA_DESIGN"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.producthunt.com/@ilunga_design"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-product-hunt"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.whatsapp.com"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-square-whatsapp"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/channel/UCg-brhaCM45uFnTRrxIYUQw"
                               target="_blank" className='icon-social-hover'>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className="testB">
                    <h1 id="title-hireMe">
                        Let's work together
                    </h1>
                    <p id="paragraphe-hireMe">
                        What can I do to make your project great and help
                        you achieve your goals?
                        Send me an email to
                         <a href="mailto:michael.ict.info@gmail.com"
                           className="email-HireMe"> michael.ict.info@gmail.com
                        </a> or call me.
                    </p>

                    <a href='https://www.whatsapp.com'
                       target="_blank" id="whatsapp-number-hireMe">
                        <i className="fa-brands fa-whatsapp fa-1x"
                           style={{ fontSize: '20px', fontWeight :'bold' }}></i>
                        +31685533124
                    </a>
                </ul>

            </div>
        </>
    );
}

export default HireMe;
