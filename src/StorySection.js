import React from 'react';
function StorySection (){
    // const unqiueTitle = "My Title";
      const url= new URL("../public/assets/img/img__left.png",import.meta.url);
      const url2= new URL("../public/assets/img/img__right.png",import.meta.url);
      const url3= new URL("../public/assets/img/video-section-illustration.png",import.meta.url);
      return(
      <div className="video__container" id="about-us">
      <section className="intro__story__section ">
        <div className="img__container">     
          <div className=" container py-0 py-lg-5 my-2 col-lg-7 col-12 wow animate__animated animate__fadeInUp"
            data-wow-duration="2s">
            <h1 className="text-white text-center intro__before fw-bolder wow animate__animated animate__flipInX"
              data-wow-duration="4s" style={{fontFamily: 'Gaegu'  }}>Our Story</h1>
             
            <p className="text-white" style={{opacity: 1  }}> 2020 set the stage for the crypto boom and the NFT scene of 2021.
              This tough time produced the strongest heroes.</p>
  
            <p className="text-white" style={{opacity:1}}> Toilet paper shortage was a significant hallmark of 2020.</p>
  
            <p className="text-white" style={{opacity: 1}}> People rushed to stock up on little, fluffy, white squares. Rolls
              were considered precious items of trade and barter, like new cash.</p>
  
            <p className="text-white" style={{opacity: 1}}> These capeless heroes from 2020 resurface with new powers in 2022.
            </p>
  
            <p className="text-white" style={{opacity: 1}}> <strong> Cap'n Roll NFT collection is the easiest way to get whitelisted on  future projects.  </strong>
              Interestingly, his tiny white sheet resembles the "whitelist spot" collection he promises.
            </p>
  
            
            <div className="d-flex justify-content-center flex-wrap gap-4 pt-5 ">
              
              <div className="btn__container wow animate__animated animate__bounceInLeft" data-wow-duration="2s">
                <div className="border__div">
                </div>
                <button type="button" className="btn button__my">
                  <h1 className="mb-0 mb-lg-0">FREE</h1>
                  <p className="pt-1 pt-lg-0 mb-1">(for early adaptors)</p>
                </button>
              </div>
     
              <div className="btn__container wow animate__animated animate__bounceInRight" data-wow-duration="2s">
                <div className="border__div2">
                </div>
                <button type="button" className="btn button__my">
                  <h1 className="mb-0 mb-lg-0">0.2020 ETH</h1>
                  <p className="mb-1 pt-1 pt-lg-0">(for public sale)</p>
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center join__whislist">
              <a href="/">Join our whitelist here (free mint+gas) </a>
            </div>
  
          </div>
          <div className="div__left__img">
            <img className="img__left__div" src={url} height="400px" alt=""/>
          </div>
          <div className="div__right__img">
            <img className="img__right__div" src={url2} height="400px" alt=""/>
          </div>
        </div> 
      </section>
       
  
      <div className="container d-flex justify-content-center mb-5 mb-lg-2 wow animate__animated animate__fadeInUp"
        data-wow-duration="2s">
        <iframe src="https://player.vimeo.com/video/57399324?h=f767387874" width="850px" height="480px" frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="My Daily Tracker" id="1" />
      </div>
  
       <section className="utility__section">
        <div className="video-section-illustration d-none d-lg-block">
          <img src={url3} alt=""/>
        </div>
        <div className="container" id="utility">
          <div className="d-flex flex-column justify-content-center utility__text wow animate__animated animate__fadeInUp"
            data-wow-duration="2s">
            <h1 className=" wow animate__animated animate__flipInX pt-5" data-wow-duration="4s">Utilities (why buy this token)
            </h1>
            <p> Most NFT projects are, at best, quick flips and, at worst, sleazy rug pulls.</p>
  
            <p> By the time you figure out what's real and worth, it's too late, and you've missed the "whitelist
              opportunity."</p>
  
            <p> Cap'n Roll NFTs in the limited "Genesis Collection" literally have a shield equipped with the 💩 emoji to
              repel BS ventures and bring you to quality projects, complete with a clean white square where you add your
              name to the whitelist.</p>
  
            <p> The total supply of Rollies will be capped at 9,500, along with 500 shielded unique and rare Rolls from
              the Genesis Collection.</p>
  
            <p> <b> Cap'n Rollies NFT under-promises and over-delivers!</b></p>
  
            <p> That’s why we've initiated negotiated whitelists on <strong> 8 NFT projects</strong> <u> with real-world
                utility/applications </u>(6
              projects confirmed). </p>
  
            <p> We got your back as we work hard to bring you more projects. LFG.</p>
  
          </div>
        </div>
      </section>
    </div>
    );
  }  
  export default StorySection;