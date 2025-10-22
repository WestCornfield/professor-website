import "./announcements.css";

function Announcements() {
    const links = [{
        title: "ASA DDRIG Announcement on ASA Website",
        href: "https://www.asanet.org/academic-professional-resources/asa-grants-and-fellowships/asa-doctoral-dissertation-research-improvement-grants-asa-ddrig/2025-asa-ddrig-recipients/"
    },
    {
        title: "TAMU HRRC Announcement on LinkedIn",
        href: "https://www.linkedin.com/posts/hazard-reduction-recovery-center_congratulations-to-judanne-lennox-morrison-activity-7339072519045361664-6DA1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAo1GFcB695wATcm9IbDaKQWu1CRriKq8Fk"
    },
    {
        title: "CONVERGE Webinar",
        href: "https://converge.colorado.edu/webinars/examining-rural-places-disability-and-underserved-populations-in-disaster/"
    }];

    return (
        <div className="announcements">
            <h2>Announcements</h2> 
            <ul>
                {links.map((link) => {
                    return <li><a href={link.href}>{link.title}</a></li>
                })}
            </ul>
        </div>);
}

export default Announcements;