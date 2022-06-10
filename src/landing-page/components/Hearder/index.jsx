import "./Header.scss"

const Header = () => {
    return <header>
        <div>
            Logo
        </div>
        <ul>
            <li><a href="#1">Comment ça marche?</a></li>
            <li><a href="#2">Fonctionnalités</a></li>
            <li><a href="#3">Tarifs</a></li>
        </ul>

        <div>
            <button>S'identifier</button>
            <button>Essai gratuit</button>
        </div>
    </header>
}

export default Header;