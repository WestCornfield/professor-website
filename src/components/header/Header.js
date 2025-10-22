import "./header.css";

function Header() {
    const name = "Judanne Lennox-Morrison";

    return (<header className="header">
        <div className="header-name">{name}</div>
        <ul className="header-links">
            <li>
                <a href="research">Research</a>
            </li>
            <li>
                <a href="teaching">Teaching</a>
            </li>
            <li>
                <a href="contact">Contact</a>
            </li>
        </ul>
    </header>);
}

export default Header;