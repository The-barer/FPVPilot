import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../Assets/img/drone_logo.png'

export default function Header() {
    const activateLink = (event: any) => {
        document
            .querySelectorAll(".navbar-item")
            .forEach((navItem) => navItem.classList.remove("active"));
        event.target.classList.add("active");
    };
    const [logostyle, setLogostyle] = useState('');
    const url = useLocation()
    
    
    useEffect(() => {
        if (url.pathname === '/') {
            setLogostyle('home')
            window.addEventListener("scroll", handleScroll)
        } else {
            setLogostyle('')
        }
    }, [url])

    const handleScroll = (event: any) => {
        console.log('scrollTop: ', window.scrollY, logostyle);
        setLogostyle('')
        window.removeEventListener("scroll", handleScroll)
    }
    return (
        <header className="header-placement">
            <nav className="header-navbar">
                <Link className="navbar-item " to={"/about"} onClick={activateLink}>
                    ABOUT
                </Link>
                <Link className="navbar-item" to={"/video"} onClick={activateLink}>
                    VIDEO
                </Link>
                <Link className="navbar-item" to={"/drones"} onClick={activateLink}>
                    DRONES
                </Link>
                <Link className="navbar-item" to={"/price"} onClick={activateLink}>
                    PRICE
                </Link>
                <Link className="navbar-item" to={"/contact"} onClick={activateLink}>
                    CONTACT
                </Link>
                <Link className="navbar-item" to={"/"} onClick={activateLink}>
                    SEARCH
                </Link>
                <Link className={'navbar-logo ' + logostyle} to={"/"} >
                    <img className="drone-logo" src={logo} alt='drone logo' />
                </Link>
            </nav>
        </header>
    );
}
