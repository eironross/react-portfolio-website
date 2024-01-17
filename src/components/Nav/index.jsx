// React 17 does not need importing module anymore
import { useState } from "react"
import profileImage from "../../assets/img/profile-1.jpg";
import "./style.css";

function Nav() {

  //const [ show , setShow ] = useState(false)

  return (
    <nav className="main-nav">
      <div className="profile-img">
        <a href="#">
          <img src={profileImage} />
        </a>
        <p>ross.</p>
      </div>
      <div className="hamburger-links">
        <button type="button" className="hamburger" onClick={() => setShow(!show)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        </button>
        <div className="menu hidden-menu"> { /* Insert here the show menu. Hide the menu for awhile*/}
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Résumé</a></li>
          </ul>
          </div>
      </div>
      <div className="nav-links">
          <ul>
            <li className="link">
              <a href="#projects" >
                Projects
              </a>
            </li>
            <li className="link">
              <a href="#about" >
                About
              </a>
            </li>
            <li className="link">
              <a href="#" >
                Résumé
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;
