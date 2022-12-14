import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="page-footer">
      <nav className="footer-navbar">
        <Link className="footer-nav-item" to={"/"}>
          UP
        </Link>
        <img
          className="footer-nav-item"
          src="https://www.svgrepo.com/show/60283/instagram.svg"
          alt="Instagram"
          onClick={() => navigate("/")}
        />
        <img
          className="footer-nav-item"
          src="https://www.svgrepo.com/show/3109/telegram.svg"
          alt="Telegram"
          onClick={() => navigate("/")}
        />
        <img
          className="footer-nav-item"
          src="https://www.svgrepo.com/show/2182/vk.svg"
          alt="VK"
          onClick={() => navigate("/")}
        />
        <img
          className="footer-nav-item"
          src="https://www.svgrepo.com/show/30365/youtube.svg"
          alt="youtube"
          onClick={() => navigate("/")}
        />
      </nav>
    </footer>
  );
}
