import { Link } from "react-router-dom";


export default function Header() {
    return <header className="page-header fixed-top">
        <nav className="header-navbar">
                <Link className="navbar-item" to={'/'}>About</Link>
                <Link className="navbar-item" to={'/'}>Video</Link>
                <Link className="navbar-item" to={'/'}>Drones</Link>
                <Link className="navbar-item" to={'/'}>Price</Link>
                <Link className="navbar-item" to={'/'}>Contact</Link>
                <Link className="navbar-item" to={'/'}>Search</Link>
        </nav>
    </header>
}