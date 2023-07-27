import josh5 from "../assets/images/josh5.webp";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <img src={josh5} alt="Your alt text" className="background-image" />
      <div className="landingpage__container">
        <div className="landingpage__container__top">
          <p className="landingpage__container__top__brand">ASPHALT</p>
          <p className="landingpage__container__top__catch">RIDE THE WORLD</p>
        </div>
        <div className="landingpage__container__bottom">
          <p className="landingpage__container__bottom__city">PARIS</p>
          <p className="landingpage__container__bottom__time">17:05</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
