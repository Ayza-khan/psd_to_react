import React from 'react';
function Silhoute_image (){
    const url1= new URL("../public/assets/img/silhouettes/01.jpg",import.meta.url);
    const url2= new URL("../public/assets/img/silhouettes/02.jpg",import.meta.url);
    const url3= new URL("../public/assets/img/silhouettes/03.jpg",import.meta.url);
    const url4= new URL("../public/assets/img/silhouettes/04.jpg",import.meta.url);
    const url5= new URL("../public/assets/img/silhouettes/05.jpg",import.meta.url);
    const url6= new URL("../public/assets/img/silhouettes/06.jpg",import.meta.url);
    const url7= new URL("../public/assets/img/silhouettes/07.jpg",import.meta.url);
    const url8= new URL("../public/assets/img/silhouettes/08.jpg",import.meta.url);
    const url9 =new URL("../public/assets/img/put-design.png", import.meta.url);
    return(
        <>
        <div className="container-fluid bg-white">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url1} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url2} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url3} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url4} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url5} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url6} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img src={url7} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
      <div className="col-12 col-sm-2">
        <div className="inner__silhot  wow animate__animated animate__fadeInUp" data-wow-duration="3s">
          <img url={url8} className="img-fluid" alt="silhourte"/>
        </div>
      </div>
    </div>
  </div>

  <section className="game__section">
    <div className="position_sec5 my-5">
      <div className="container">
        <div className="">
          <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
            The Cap’n will be unrolling the details soon… so far we have 6 confirmed projects with whitelists to our
            community memebers.
          </p>
          <div className="">
            <h1 className="wow animate__animated animate__flipInX mt-2" data-wow-duration="3s">About the Game</h1>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
              Cap'n roll play-to-earn game is a treat for our "Rollies." You will have access to this online holder-only
              game being developed.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">

              In the spirit of the decentralized web, based on the Captain's commands, our community will have a say on
              several game elements.
            </p>
            <p className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
              Rollies value community and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section className="sec__img">
    <div className="container d-flex justify-content-center">
      <img className="img__sec img-fluid wow animate__animated animate__fadeInUp" data-wow-duration="2s"
        src={url9}  alt="put-design"/>
    </div>
  </section>
        </>
    );
}
export default Silhoute_image;