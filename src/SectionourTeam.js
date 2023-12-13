import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

function SectionourTeam() {
  const url1 = new URL(
    "../public/assets/img/team-profiles/team-profile-1.svg",
    import.meta.url
  );
  const url2 = new URL(
    "../public/assets/img/team-profiles/team-profile-2.svg",
    import.meta.url
  );
  const url3 = new URL(
    "../public/assets/img/team-profiles/team-profile-3.svg",
    import.meta.url
  );
  const url4 = new URL(
    "../public/assets/img/team-profiles/team-profile-4.svg",
    import.meta.url
  );
  const url5 = new URL(
    "../public/assets/img/team-profiles/team-profile-5.svg",
    import.meta.url
  );
  const url6 = new URL(
    "../public/assets/img/team-profiles/team-profile-6.svg",
    import.meta.url
  );
  const url7 = new URL(
    "../public/assets/img/team-profiles/team-profile-7.svg",
    import.meta.url
  );
  const url8 = new URL(
    "../public/assets/img/team-profiles/team-profile-8.svg",
    import.meta.url
  );
  return (
    <>
      <section className="Our__Team">
        <div className="pt-5" id="team">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1
                className="hakuna text-center py-2 py-sm-2 wow animate__animated animate__flipInX"
                data-wow-duration="2s"
              >
                TEAM
              </h1>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row justify-content-evenly my-5">
              <div
                className="card_1 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-01-profile"
                  src={url1}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Tim
                </p>
                <div className="twitter text-center">
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">(Founder)</p>
                <p className="card__info">
                  Plan-maker with lots of NFT project experience, good at
                  establishing a talented team.
                </p>
              </div>
              <div
                className="card_2 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-01-profile"
                  src={url2}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Lucas
                </p>
                <div className="twitter text-center">
                  <a href="/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">(Co-Founder)</p>
                <p className="card__info">
                  Expert in Role-ology (knows how to roll a tight roll of
                  whitelist spots).
                </p>
              </div>
              <div
                className="card_3 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="3s"
              >
                <img
                  className="img-fluid team-03-profile"
                  src={url3}
                  alt=""
                />
                <div className="">
                  <p
                    className="card__heading wow animate__animated animate__flipInX"
                    data-wow-duration="4s"
                  >
                    Navindu
                  </p>
                  <div className="twitter text-center">
                    <a href="/">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                    </a>
                  </div>
                  <p className="card__heading2">(Artist)</p>
                </div>
                <p className="card__info">
                  Creates visuals from just thoughts. This is the person behind
                  Captain Roll's dashing features.
                </p>
              </div>
              <div
                className="card_4 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-03-profile"
                  src={url4}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Igor{" "}
                </p>
                <div className="twitter text-center">
                  <a href="/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">Blockchain/Web3 expert </p>
                <p className="card__info">
                  The Backend Engineer. Decentralized and proud whitelist spot
                  squares distributor.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row justify-content-center my-5">
              <div
                className="card_5 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-01-profile"
                  src={url5}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Vishal{" "}
                </p>
                <div className="twitter text-center">
                  <a href="/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">Developer - web2 & website </p>
                <p className="card__info">
                  Tech savvy. Python and PHP ninja, computer whisperer.
                </p>
              </div>
              <div
                className="card_1 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-01-profile"
                  src={url6}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Oliver
                </p>
                <div className="twitter text-center">
                  <a href="/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">Marketing Manager</p>
                <p className="card__info">
                  Probably why you found us. Spreads the message one roll at a
                  time.
                </p>
              </div>
              <div
                className="card_2 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-03-profile"
                  src={url7}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Bassel
                </p>
                <div className="twitter text-center">
                  <a href="/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">Community Manager </p>
                <p className="card__info">
                  Keeps things fun (and acceptable). We don't need buttholes in
                  our discord and twitter feeds.
                </p>
              </div>
              <div
                className="card_5 col-lg-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <img
                  className="img-fluid team-03-profile"
                  src={url8}
                  alt=""
                />
                <p
                  className="card__heading wow animate__animated animate__flipInX"
                  data-wow-duration="4s"
                >
                  Mary
                </p>
                <div className="twitter text-center">
                  <a href="/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="black"></FontAwesomeIcon>
                  </a>
                </div>
                <p className="card__heading2">Business Development</p>
                <p className="card__info">
                  Looking for collaborations? This is your girl. Send her a
                  concise proposal/suggestion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__roadmap">
        <div className="py-5">
          <div className="container" id="roadmap">
            <div
              className="row justify-content-center my-5 wow animate__animated animate__fadeInUp"
              data-wow-duration="2s"
            >
              <div className="col-lg-8">
                <h1 className="hakuna text-center pt-5">ROADMAP</h1>
              </div>
            </div>
            <div className="position_absolute">
              <div className="d-flex  align-items-center flex-wrap">
                <div className="col-lg-6 col-12">
                  <div className="bg-white card__roadmap">
                    <div className="container ps-5">
                      <h1 className="hakuna py-4">STAGE 1</h1>
                      <div className="d-flex mt-4">
                        <hr className="horizontal__line" />
                      </div>
                      <div className="d-flex flex-column justify-content-start">
                        <p className="card_r_info">
                          &bull; Build a solid community of "Early Adopters"
                        </p>
                        <p className="card_r_info">
                          &bull; Presale (free) & Public sale (0.2020 eth)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-8">
                      <img
                        className="img-fluid"
                        src={url1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position_absolute">
              <div className=" d-flex align-items-center flex-wrap py-3">
                <div className="col-lg-6 order-last order-md-first">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-8">
                      <img
                        className="img-fluid"
                        src={url2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-first order-md-last">
                  <div className="mt-5 bg-white card__roadmap2">
                    <div className="container ps-5">
                      <h1 className="hakuna py-4">STAGE 2</h1>
                      <div className="d-flex mt-4">
                        <hr className="horizontal__line" />
                      </div>
                      <div className="d-flex flex-column justify-content-start">
                        <p className="card_r_info2">
                          {" "}
                          Several projects have whitelist arrangements with us,
                          and we're currently talking with others.
                        </p>
                        <p className="card_r_info2">
                          {" "}
                          <strong>
                            {" "}
                            Our mechanism to ensure automatic access to
                            promising whitelists for Rollie holders is under
                            development.
                          </strong>
                        </p>
                        <p className="card_r_info2">
                          {" "}
                          Assertive coordination with other smart contract
                          developers. So, you don’t even need to take actions on
                          the other projects… you get an automatic whitelist, if
                          you hold a Rollie token…
                        </p>
                        <p className="card_r_info2">
                          {" "}
                          Again, we over-deliver rather than over-promise. We
                          know that this is just a “claim” (for now)… however,
                          very soon, we WILL prove it!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position_absolute my-3">
              <div className="d-flex align-items-center flex-wrap">
                <div className="col-lg-6 col-12 ">
                  <div className="bg-white card__roadmap">
                    <div className="container ps-5">
                      <h1 className="hakuna py-4">STAGE 3</h1>
                      <div className="d-flex mt-4">
                        <hr className="horizontal__line" />
                      </div>
                      <div className="d-flex flex-column justify-content-start">
                        <p className="card_r_info">
                          &bull; Rollies token holders will receive a steady
                          stream of whitelist spots with our partnerships.
                        </p>
                        <p className="card_r_info">
                          &bull; Start discussions and voting on game elements &
                          development in the community… in preparation for
                          launching the game for token holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-8">
                      <img
                        className="img-fluid"
                        src={url3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position_absolute my-2">
              <div className=" d-flex align-items-center flex-wrap py-3">
                <div className="col-lg-6 col-12 order-last order-md-first">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-8">
                      <img
                        className="img-fluid"
                        src={url4}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-first order-md-last">
                  <div className="mt-5 bg-white card__roadmap2">
                    <div className="container ps-5">
                      <h1 className="hakuna py-4">STAGE 4</h1>
                      <div className="d-flex mt-4">
                        <hr className="horizontal__line" />
                      </div>
                      <div className="d-flex flex-column justify-content-start">
                        <p className="card_r_info2 mb-2">Community input on:</p>
                        <p>
                          {" "}
                          &bull; Establishing a DAO and community wallet to fund
                          future projects.
                        </p>
                        <p> &bull; Possible staking (via DAO).</p>
                        <p>
                          {" "}
                          &bull; More community-driven play-to-earn games. Our
                          in-house developers bring flexibility, and our
                          community has the final say!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionourTeam;
