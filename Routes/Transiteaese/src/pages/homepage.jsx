import React, { useEffect } from "react";
import "../styles/HomePage.css";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>TransitEase</title>
      </Helmet>
      <header>
        <div className="logo">
          <img
            src="https://img.freepik.com/premium-vector/transport-design_25030-27703.jpg?w=740"
            className="logo-image"
            alt="TransitEase Logo"
          />
          <h1 className="logo-text">Transit-Ease</h1>
        </div>
        <div className="buttons-container">
          <a href="/signup">
            <button className="sign-up-button">Account</button>
          </a>
          <a href="/help">
            <button className="help-button">Help</button>
          </a>
        </div>
      </header>
      <section className="info-container">
        <div className="sub-info-container">
          <div className="info">
            <span id="typed"></span>
            <h1>Let Transitease be your passport to everywhere!</h1>
            <p>Secure your ride, climb in, and let's wander!</p>
            <div className="inputWithIcon">
              <input type="text" placeholder="Current Location" required />
              <ion-icon name="location"></ion-icon>
            </div>
            <div className="inputWithIcon">
              <input type="text" placeholder="Destination" required />
              <ion-icon name="navigate"></ion-icon>
            </div>
            <div className="book-div">
              <a href="/">
                <button className="book-now">Book Now!</button>
              </a>
            </div>
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/premium-vector/world-globe-road-tape_648765-6769.jpg?w=740"
              alt="crossroads"
            />
          </div>
          <div className="clearfix"></div>
        </div>
      </section>

      <div class="section2">
        <div class="features">
          <div class="tile access">
            <img
              src="https://thumbs.dreamstime.com/b/global-diversity-logo-23045317.jpg"
              alt="access icon"
            />
            <h3>Unified Transit Management</h3>
            <p>
              Effortlessly manage tickets for various transport modes through
              one interface, simplifying travel logistics and ticketing
              processes.
            </p>
          </div>
          <div class="tile security">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQL3ZEmyPEPX3P8LMDlXpmEIOgVcnKR1gusdGqsIdnqRWFfqnGc45hTWTTHZNSawAQ7c&usqp=CAU"
              alt="security icon"
            />
            <h3>Touchless Transactions</h3>
            <p>
              Ensure secure payments using smart cards or NFC-enabled devices,
              providing a convenient and hygienic travel experience without
              physical contact.
            </p>
          </div>
          <div class="tile real-time">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjQtH7u5yabvIH4EZtu_lf7O1yhfA1VjQIA&usqp=CAU"
              alt="real-time planning"
            />
            <h3>Real-Time Planning</h3>
            <p>
              Access up-to-date transit info and optimized routes, enhancing
              journey planning efficiency and reducing travel time through
              intelligent route suggestions.
            </p>
          </div>
          <div class="tile storage">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ48BE3xXJ94e_XGPO1NOIxON_5jQwp103PQ&usqp=CAU"
              alt="inclusivity icon"
            />
            <h3>Inclusive Accessibility</h3>
            <p>
              Ensure equal access for users with disabilities through tailored
              features and specialized assistance services, fostering an
              inclusive and accessible transportation environment for all
              passengers
            </p>
          </div>
        </div>
        <footer className="footer">
          <div className="logo">
            <img
              src="https://img.freepik.com/premium-vector/transport-design_25030-27703.jpg?w=740"
              className="logo-image"
              alt="TransitEase Logo"
            />
            <h1 className="logo-text">Transit-Ease</h1>
          </div>
          <div className="copyright">
            <p className="p-footer p-dark">Copyright - TransitEase</p>
          </div>

          <div className="links">
            <ul className="social-links">
              <li className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </li>
              <li class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </li>
              <li class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      {/* <Benefits /> */}
      {/* Include the Benefits component here */}
    </div>
  );
};

export default HomePage;
