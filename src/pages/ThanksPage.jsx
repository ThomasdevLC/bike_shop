import rider from "../assets/images/rider.jpg";
const ThanksPage = () => {
  return (
    <div className="thankspage">
      <p className="thankspage__text">
        You can <br /> ride now
      </p>
      <div className="thankspage__image">
        <img src={rider} alt="rider picture" />
      </div>
    </div>
  );
};

export default ThanksPage;
