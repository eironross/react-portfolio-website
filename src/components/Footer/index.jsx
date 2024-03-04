// React 17 does not need importing module anymore
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-links">
            <div className="subheader">
              <p>Thanks for viewing my webpage!</p>
            </div>
            <ul>
              <li>
                <a href="mailto:eironflores27@gmail.com">eironflores27@gmail.com</a>
              </li>
              <li>
                <p>Feel free to reach out!</p>
              </li>
              <li>
                <p>Made in PH © {new Date().getFullYear()} Eiron Ross </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
