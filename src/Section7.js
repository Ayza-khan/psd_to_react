import React from 'react';
// import 
function Section7() {
    const url=new URL("../public/assets/img/faq-illustration.png",import.meta.url);
    const url2=new URL("../public/assets/img/faq-end-illustration.png",import.meta.url);
    const url3=new URL("../public/assets/img/bottom-image1.png",import.meta.url);
    const url4=new URL("../public/assets/img/bottom-image_2.png",import.meta.url);
  return (
    <section className="faq__section mb-0 d-flex flex-column pt-5" id="faq">
      <div className="faq-illustration d-none d-lg-block">
      <img src={url} className="img-fluid" alt="faq-illusta" />
      </div>
      <div className="faq-end-illustration d-none d-lg-block">
        <img
          src={url2}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="bottom_image">
        <div className="container">
          <div
            className="wow animate__animated animate__fadeInLeft"
            data-wow-duration="2s"
          >
            <div className="div3 faq__heading text-center mb-4">
              <h1>FAQ</h1>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="row mx-0">
                <div className="col-12 col-lg-10 offset-lg-1">
                  <div className="accordion" id="accordionExample">
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How much for a Roll?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="">
                            <p>
                              Get rolls for <b>Free</b>, OR <b>0.2020 ETH </b>{" "}
                            </p>

                            <p>
                              {" "}
                              <b>FREE</b> mints are available only for "early
                              adopters" (simply pay for gas fees).
                            </p>

                            <p>
                              {" "}
                              For everyone else who misses the early-adopter
                              window, it'll cost <b> 0.2020</b> ETH in
                              commemoration of the year Captain Roll became an
                              icon. !
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How many Rollies can I mint?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            During whitelist/private sale: 1 token/wallet
                            maximum.
                          </p>
                          <p>During public sale: 2 Tokens/wallet maximum.</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          When are we Rollin'?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            {" "}
                            This will be announced soon; join the{" "}
                            <a href="/">discord</a> and get notified first…
                          </p>
                          <p>
                            {" "}
                            Become an <a href="/"> early supporter</a> to secure
                            your whitelist spots.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="faqthree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqthreee"
                          aria-expanded="false"
                          aria-controls="faqthreee"
                        >
                          So what exactly does being a "Rollie" get me?
                        </button>
                      </h2>
                      <div
                        id="faqthreee"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqthree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            {" "}
                            In addition to amazing art, think about “Captain
                            Roll” as a{" "}
                            <a href="/">
                              {" "}
                              launchpad NFT that gives you access to whitelist
                              opportunities{" "}
                            </a>
                            in the NFT space.
                          </p>

                          <p>
                            {" "}
                            If you love gas wars, have anxiety over NFT
                            availability, and paying full price,{" "}
                            <i> THIS PROJECT ISN'T FOR YOU!</i>
                          </p>

                          <p>
                            {" "}
                            If you prefer simple whitelist places, a positive
                            community, and extra value...... Salut! Welcome
                            aboard!
                          </p>

                          <p>
                            {" "}
                            Cap'n roll holders can access pre-sales of future
                            NFT projects.
                          </p>

                          <p>
                            {" "}
                            We keep our word and have confirmed the whitelist
                            for <u> a minimum of 6 projects (so far).</u>
                          </p>

                          <p>
                            {" "}
                            Our game should be a hit, too. Obviously, we ARE
                            biased... So don't take our word for it; just wait
                            for it! 🙂
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="faqfour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqfourr"
                          aria-expanded="false"
                          aria-controls="faqfourr"
                        >
                          How can I become an "Early Adopter"?
                        </button>
                      </h2>
                      <div
                        id="faqfourr"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqfour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p> It's easier than most projects! lol</p>
                          <p>
                            {" "}
                            We <b> don't</b> have ridiculous rules like "invite
                            16-and-a-half individuals in 12 days" or "jump
                            through 24 hoops"
                          </p>
                          <p>
                            {" "}
                            <u> But three easy steps:</u>
                          </p>
                          <b>
                            <p> 1) Follow us on Twitter</p>

                            <p> 2) Join our Discord</p>

                            <p>
                              {" "}
                              3) Enter your ETH wallet address where
                              appropriate.
                            </p>
                          </b>
                          <p> Boom! you're whitelisted, captain Poo?</p>
                          <p>
                            {" "}
                            Our whitelisting script, is optimized to track your
                            social following/interactions (on discord and
                            twitter)... this will eliminate bots and flippers.
                          </p>
                          This whitelisting approach will be the standard for
                          future NFT projects.
                          <p>
                            {" "}
                            We will whitelist you often, get used to it.😉{" "}
                            <b>
                              {" "}
                              Follow onscreen instructions to join our
                              whitelist.
                            </b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="faqfive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How does “The Captain” actually get us whitelist
                          spots?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqfive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            {" "}
                            A huge part of our time is spent on business
                            development and networking with other NFT
                            communities.
                          </p>
                          <p>
                            {" "}
                            We network with and investigate to see if for the
                            coming NFT projects match our community.
                          </p>
                          Trust us; our current lineup is not mere promises. We
                          will <b> PROVE</b> that we worth your trust as
                          <p> soon as out public mint ends.</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="faqsix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesixer"
                          aria-expanded="false"
                          aria-controls="collapsesixer"
                        >
                          Did someone say GAME?
                        </button>
                      </h2>
                      <div
                        id="collapsesixer"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqsix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Our game is developed to offer holders only massive
                            value. We've created mockups, but the community
                            makes the final decision.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="faqseven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseseven"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          How many whitelist opportunities are there?
                        </button>
                      </h2>
                      <div
                        id="collapseseven"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqseven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Our research and growth are constant. So, stay
                            tuned! We're just getting started :)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item  wow animate__animated animate__fadeInUp"
                      data-wow-duration="2s"
                    >
                      <h2 className="accordion-header" id="faqeight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseeight"
                          aria-expanded="false"
                          aria-controls="collapseeight"
                        >
                          How to purchase Cap'n roll NFT? New to NFTs?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseeight"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqeight"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p> No worries, here's how to get Rollies.</p>

                          <p>
                            {" "}
                            <b> 1.</b> Install{" "}
                            <a href="metamask.io" target="_blank">
                              {" "}
                              metamask.io{" "}
                            </a>
                            browser extension.
                          </p>

                          <p>
                            {" "}
                            <b> 2.</b> Click "Add funds" to buy Ethereum with a
                            debit card or Apple Pay{" "}
                            <b> directly within MetaMask. </b>You can also buy
                            Ethereum on <a href="/"> Coinbase</a> and{" "}
                            <a href="/">Binance</a>.
                          </p>

                          <p>
                            {" "}
                            <b> 3.</b> Look for minting time/date (discord
                            announcement).
                          </p>

                          <p>
                            {" "}
                            <b> 4.</b> If you're on our whitelist, you can
                            acquire a token for <b>FREE</b> (you'll still need
                            Ether to pay the gas fee).
                          </p>

                          <p>
                            {" "}
                            <b> To</b> mint, Open Cap'n roll website.
                          </p>

                          <p>
                            {" "}
                            <b> 5</b>. Click "MINT," Metamask will ask for a
                            connection.
                          </p>

                          <p>
                            {" "}
                            <b> 6.</b> Confirm transaction fees
                          </p>

                          <p>
                            {" "}
                            <b> 7.</b> Your NFTs will appear in your wallet and
                            on OpenSea after purchase.
                          </p>

                          <p>
                            {" "}
                            <strong>
                              {" "}
                              Hold Rollie NFT tokens for future whitelist
                              opportunities.
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="btm_img_1"
          src={url3}
          alt=""
        />
        <img
          className="btm_img_2"
          src={url4}
          alt=""
        />
      </div>
    </section>
  );
}
export default Section7;
