import React from 'react';
function Section6(){
    const url=new URL("../public/assets/img/game-section-illustration.png",import.meta.url)
    return(
    <section className="about__uss">
        <div className="game-section-illustration d-none d-lg-block">
        <img src={url} className="img-fluid" alt=""/>
        </div>
        <div className="position__sec6">
        <div className="bg__purple">
            <div className="container margin__mine fw-light text-white">
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
                If games like adventure capitalists or egg inc. captivate you, you're at the correct place. Cap'n rolls is
                an excellent PFP game with good rewards.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
                Cap'n roll is dark, profane, cool, and every man's fun escape.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
                Imagine cute cap'n rolls enjoying on the blockchain while you play with awesome characters.
            </p>
            </div>
        </div>
        </div>
    </section>
  );
}
export default Section6;