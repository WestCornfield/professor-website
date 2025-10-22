import cvPDF from "../../../resources/cv/CV_July2025_JudanneLennoxMorrison.pdf";
import "./welcome.css";
import Headshot from "../../../resources/images/headshot.jpg";

function Welcome() {
    return (<section className="welcome">
        <div className="welcome-left">
            <h2>Welcome</h2>
            <div className="welcome-contents">
                <div className="welcome-message">
                    I am an interdisciplinary and community engaged disaster scholar.
                    I hold a Ph.D. in Urban and Regional Sciences from the College of Architecture at Texas A&M University.
                    This website explains more about my research and teaching.
                </div>
                <div className="welcome-cv-link"><a href={cvPDF} download>You can download my CV as a PDF here</a></div>
            </div>
            
        </div>
        <div className="welcome-right">
            <img className="headshot" src={Headshot} />
        </div>
    </section>)
}

export default Welcome;