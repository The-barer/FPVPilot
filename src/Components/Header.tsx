import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/img/drone_logo.png";

export default function Header() {
  const activateLink = (event: any) => {
    document
      .querySelectorAll(".nav-item")
      .forEach((navItem) => navItem.classList.remove("active"));
    event.target.classList.add("active");
  };
  const [logostyle, setLogostyle] = useState("");
  const url = useLocation();

  useEffect(() => {
    if (url.pathname === "/") {
      setLogostyle("home");
    } else {
      setLogostyle("");
    }
  }, [url]);

  return (
    <header className="header-element">
      <Link className={"nav-logo " + logostyle} to={"/"}>
        <img className="drone-logo" src={logo} alt="drone logo" />
      </Link>
      <nav className="header-navbar">
        <Link className="nav-item " to={"/about"} onClick={activateLink}>
          ABOUT
        </Link>
        <Link className="nav-item" to={"/video"} onClick={activateLink}>
          VIDEO
        </Link>
        <Link className="nav-item" to={"/drones"} onClick={activateLink}>
          DRONES
        </Link>
        <Link className="nav-item" to={"/price"} onClick={activateLink}>
          PRICE
        </Link>
        <Link className="nav-item" to={"/contact"} onClick={activateLink}>
          CONTACT
        </Link>
        <Link className="nav-item" to={"?search"} onClick={activateLink}>
          SEARCH
        </Link>
      </nav>
    </header>
  );
}
