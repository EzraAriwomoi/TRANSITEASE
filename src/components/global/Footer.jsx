import "../../css/global/global.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
