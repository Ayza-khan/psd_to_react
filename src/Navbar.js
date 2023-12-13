import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  const caption_rol = new URL(
    "./captain-logo.gif",
    import.meta.url
  );
  return (
    <section className="navbar__section">
      <nav className="navbar navbar-expand-lg navbar-light py-1">
        <div className="container-fluid mx-md-5 mx-lg-5 mx-0">
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/StorySection">
                  Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Utility
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Game
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/ ">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Roadmap
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-flex">
              <li className="nav-item">
                <a className="nav-link2" aria-current="page" href="/">
                <FontAwesomeIcon icon={faDiscord} color="black" className="mx-2">  </FontAwesomeIcon>
                  {/* <i className="fa-brands fa-discord"></i> */}
                </a>
                <a className="nav-link2" href="/">
                <FontAwesomeIcon icon={faTwitter} color="black" className="mx-2"></FontAwesomeIcon>
                  {/* <i className="fa-brands fa-twitter"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center flex-column align-items-center banner__content">
        <p
          className="banner__captain mb-0 wow animate__animated animate__fadeInUp"
          data-wow-duration="2s"
        >
          <strong>captain</strong>
        </p>
        <h1
          className="roller__text mb-0 wow animate__animated animate__fadeInUp"
          data-wow-duration="2s"
        >
          roll
        </h1>
        <p
          className="paragraph__banner wow animate__animated animate__fadeInUp"
          data-wow-duration="2s"
        >
          Cap’n rolls is a unique collection of, 10000 heroes randomly generated
          NFTs on the Ethereum blockchain. We call our heroes “Rollies” coz they
          like to roll…
        </p>
      </div>
      <div className="">
        <a href="/">
          <img className="header-logo" src={ caption_rol } alt="caption-rol" />
        </a>
      </div>
    </section>
    //intro to story section
  );
}
export default Navbar;
