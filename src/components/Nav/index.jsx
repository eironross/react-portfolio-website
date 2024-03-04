// React 17 does not need importing module anymore
import "./style.css";

function Nav() {

  //const [ show , setShow ] = useState(false)

  return (
    <nav className="main-nav">
      <div className="profile-img">
        <p>eiron<br/>ross.</p>
      </div>
      
      <div className="nav-links">
          <ul>
            <li className="link">
              <a href="#projects" >
                Projects.
              </a>
            </li>
            <li className="link">
              <a href="#about" >
                About.
              </a>
            </li>
            <li className="link">
              <a href="https://github.com/eironross" target="_blank" >
              Github.
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;
