import './Manifesto.css';

// -----------images icons imported-----------------------------
import momi2 from "../../Images/icon_statistics5 copy.png"
import momi3 from "../../Images/icon_best5.png"
import momi from "../../Images/icon_hat5.png"


function Manifesto() {
    return (
        <>
            <section className="section-manifesto">
                <h id="title-section-manifesto">Manifesto</h>
                <div className="element-manifesto2">

                    <ul className="test1">
                        <li className="item-manifesto">
                            <img src={momi} alt="pixam-voorblad" className="image-icon"/>
                        </li>
                        <li className="item-manifesto">
                            <h1>Do your research</h1>
                        </li >
                        <li className="item-manifesto">
                            <p className="paragraphe-manifesto">
                                First understand your clients business model then
                                understand its users. What are the pain points
                                users have and how can you solve them, while pushing
                                company’s business goals.
                            </p>
                        </li>
                    </ul>
                    <ul className="test2">
                        <li className="item-manifesto">
                            <img src={momi2} alt="pixam-voorblad"
                                 className="image-icon"/>
                        </li>
                        <li className="item-manifesto">
                            <h1>Don´t trust just yourself</h1>
                        </li >
                        <li className="item-manifesto">
                            <p className="paragraphe-manifesto">
                                Prototyping and user-testing is important to proof your
                                designs and test them under almost real conditions.
                                Listen to people. Don´t stick to features you like,
                                if they don't get them.
                            </p>
                        </li>
                    </ul>
                    <ul className="test3">
                        <li className="item-manifesto">
                            <img src={momi3} alt="pixam-voorblad" className="image-icon"/>
                        </li>
                        <li className="item-manifesto">
                            <h1>Learn from the best</h1>
                        </li >
                        <li className="item-manifesto">
                            <p className="paragraphe-manifesto">
                                Benchmarking is a must for every product or project as it
                                helps finding best practices and getting inspired. But don´t
                                just copy your heroes. Find your own way and tell your own story!
                            </p>
                        </li>
                    </ul>

                </div>

            </section>
        </>
    );
}

export default Manifesto;
