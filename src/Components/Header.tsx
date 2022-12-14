import { Link } from "react-router-dom";

export default function Header() {
  const activateLink = (event: any) => {
    document
      .querySelectorAll(".navbar-item")
      .forEach((navItem) => navItem.classList.remove("active"));
    event.target.classList.add("active");
  };
  return (
    <header className="header-placement">
      <nav className="header-navbar page-header">
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
      </nav>
    </header>
  );
}
