import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-element">
      <nav className="footer-navbar">
        <Link className="nav-item" to={"/"}>
          UP
        </Link>
        <a
          className="nav-item"
          href="https://www.instagram.com/thebarer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="nav-icon"
            src="https://www.svgrepo.com/show/60283/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a
          className="nav-item"
          href="https://t.me/thebarer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="nav-icon"
            src="https://www.svgrepo.com/show/3109/telegram.svg"
            alt="Telegram"
          />
        </a>
        <a
          className="nav-item"
          href="https://vk.com/thebarer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="nav-icon"
            src="https://www.svgrepo.com/show/2182/vk.svg"
            alt="VK"
          />
        </a>
        <a
          className="nav-item"
          href="https://www.youtube.com/@TheBarer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="nav-icon"
            src="https://www.svgrepo.com/show/30365/youtube.svg"
            alt="youtube"
          />
        </a>
      </nav>
    </footer>
  );
}
