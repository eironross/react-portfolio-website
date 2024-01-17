// React 17 does not need importing module anymore
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-links">
            <div className="subheader">
              <p>Socials</p>
            </div>
            <ul>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Résumé</a>
              </li>
            </ul>
          </div>
          <div className="footer-name">
            <p>ross.</p>
          </div>
        </div>
        <div className="copyright">
          <h5>
            Copyright © Portfolio Website {new Date().getFullYear()} by Eiron
            Ross. All Rights Reserved.{" "}
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
