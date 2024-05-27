// src/components/transportmodescomponents/TmpFeed.js
import React from "react";
import "../../css/transportmodes/transportmodes.css";
import TmpFeedCont from "./TmpFeedCont";

const TmpFeed = ({ feed = [] }) => {
  return (
    <div className="tmp-feed flex-col-start">
      {feed.map((item, index) => (
        <TmpFeedCont key={index} feedItem={item} />
      ))}
    </div>
  );
};

export default TmpFeed;
