// src/components/transportmodescomponents/TmpFeedCont.js
import React from "react";
import "../../css/transportmodes/transportmodes.css";

const TmpFeedCont = ({ feedItem }) => {
  return (
    <div className="tmp-feed-cont flex">
      <section className="tmp-feed-cont-image flex">
        <img src={feedItem.image_url} alt={feedItem.car_name} />
      </section>
      <section className="tmp-feed-cont-details flex-col">
        <h3>{feedItem.car_name}</h3>
        <span>Departure: {feedItem.departure}</span>
        <span>{feedItem.route}</span>
      </section>
      <section className="tmp-feed-cont-button flex">
        <button>Go</button>
      </section>
    </div>
  );
};

export default TmpFeedCont;
