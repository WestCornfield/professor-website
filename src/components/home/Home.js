import Announcements from "./announcements/Announcements";
import Research from "./research/Research";
import Welcome from "./welcome/Welcome";
import "./home.css";

function Home() {
    return (<section className="home">
        <Welcome />
        <Announcements />
        <Research />
    </section>);
}

export default Home;