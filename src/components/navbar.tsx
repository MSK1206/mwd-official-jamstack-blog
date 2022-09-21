import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const hideToggle = () => {
    document.querySelector("#navbarNav")?.classList.remove("show");
    console.log("bootstrap Navbar collapse hide!!");
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid">
        <Link href="/">
          <a
            className="navbar-brand d-inline-flex align-items-center justify-content-center"
            onClick={hideToggle}
          >
            <Image
              src="/mwd.svg"
              alt="msk1206 logo"
              width="60"
              height="60"
              className="mwdlogo"
            />
            <h1 className="blandname">Matsushita Web Design</h1>
            <h1 className="blandname-mobile">MWD</h1>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a onClick={hideToggle}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/works">
                <a onClick={hideToggle}>Works</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/posts">
                <a onClick={hideToggle}>Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a onClick={hideToggle}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a onClick={hideToggle}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
