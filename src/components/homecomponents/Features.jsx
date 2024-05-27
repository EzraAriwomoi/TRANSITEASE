import "../../css/homecss/home.css";

const Features = () => {
  return (
    <div class="features">
      <div class="tile access">
        <img
          src="https://thumbs.dreamstime.com/b/global-diversity-logo-23045317.jpg"
          alt="access icon"
        />
        <h3>Unified Transit Management</h3>
        <p>
          Effortlessly manage tickets for various transport modes through one
          interface, simplifying travel logistics and ticketing processes.
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
          providing a convenient and hygienic travel experience without physical
          contact.
        </p>
      </div>
      <div class="tile real-time">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjQtH7u5yabvIH4EZtu_lf7O1yhfA1VjQIA&usqp=CAU"
          alt="real-time planning"
        />
        <h3>Real-Time Planning</h3>
        <p>
          Access up-to-date transit info and optimized routes, enhancing journey
          planning efficiency and reducing travel time through intelligent route
          suggestions.
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
          features and specialized assistance services, fostering an inclusive
          and accessible transportation environment for all passengers
        </p>
      </div>
    </div>
  );
};

export default Features;
