import "./contact.css";
import GSHeadshot from "../../resources/images/headshots_for_gs_profile.jpg";

function Contact() {
    function submitForm(e) {
        e.preventDefault();
        console.log(e);
    }

    return <div className="contact">
        <div className="contact-left">
            <img className="headshot" src={GSHeadshot}></img>
        </div>
        <div className="contact-center">
            <h4>Do you have a question or comment? Feel free to send me an email or fill in this contact form.</h4>
            <div className="contact-details">
                <div className="contact-email">Email: <a href="mailto:j_lennox.morrison@tamu.edu">j_lennox.morrison@tamu.edu</a></div>
                <div className="contact-linkedin">LinkedIn: <a href="https://www.linkedin.com/in/judanne-lennox-morrison-mup-07342849/">Click Here</a></div>
            </div>
        </div>
        <div className="contact-right">
            <form className="contact-form" onSubmit={(e) => submitForm(e)}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea rows="6" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
}

export default Contact;