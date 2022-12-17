
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer-element">
      <nav className="footer-navbar">
        <button className="nav-item" onClick={scrollToTop}>
          UP
        </button>
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
