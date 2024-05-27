import "../../css/global/global.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
        <a href="/signuppage">
          <button className="sign-up-button">Account</button>
        </a>
        <a href="/">
          <button className="help-button">Home</button>
        </a>
        <a href="/transportmodespage">
          <button className="help-button">Transport Modes</button>
        </a>
        <a href="/ticketingpage">
          <button className="help-button">Ticketing Page</button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
