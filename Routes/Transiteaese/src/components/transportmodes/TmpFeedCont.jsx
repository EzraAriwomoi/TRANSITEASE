import "../../css/transportmodes/transportmodes.css";

const TmpFeedCont = () => {
  return (
    <div className="tmp-feed-cont flex">
      <section className="tmp-feed-cont-image flex">
        <img src="/bus1" />
      </section>
      <section className="tmp-feed-cont-details flex-col">
        <h3>CAR NAME</h3>
        <span>Departure: 11:00pm </span>
        <span>From Westlands to Wendani </span>
      </section>
      <section className="tmp-feed-cont-button flex">
        <button>Go</button>
      </section>
    </div>
  );
};

export default TmpFeedCont;
