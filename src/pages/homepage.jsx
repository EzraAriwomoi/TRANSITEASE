import React, { useEffect } from "react";
import "../css/homecss/home.css";
import InfoCont from "../components/homecomponents/InfoCont";
import Features from "../components/homecomponents/Features";
//import { Helmet } from "react-helmet";

// import Benefits from "../components/Benefits";

const HomePage = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "module";
    script1.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.noModule = true;
    script2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  useEffect(() => {
    // Log the title when the component mounts
    console.log("Title:", document.title);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <InfoCont />
      <div class="section2">
        {" "}
        <Features />
      </div>

      {/* <Benefits /> */}
      {/* Include the Benefits component here */}
    </div>
  );
};

export default HomePage;
