import "./Header.scss";
import logo from "./logo.png";

const Header = () => {
    return (
        <header className="landing-header">
            <div>
                <a href="/">
                    {" "}
                    <img src={logo} className="logo" alt="logo" />{" "}
                </a>
            </div>
            <ul>
                <li>
                    <a href="#1">Comment ça marche?</a>
                </li>
                <li>
                    <a href="#2">Fonctionnalités</a>
                </li>
                <li>
                    <a href="#3">Tarifs</a>
                </li>
            </ul>

            <div>
                <button>S'identifier</button>
                <button>Essai gratuit</button>
            </div>
        </header>
    );
};

export default Header;
