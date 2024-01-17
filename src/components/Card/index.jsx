// React 17 does not need importing module anymore
import "./style.css"

function Card(props) {
  const { title, description, image, tech } = props


  return (
    <>
      <div className="card">
        <div className="link-image">
            <img 
              src={image} 
              loading="lazy"
             />
        </div>
        <div className="card-wrapper">
          <div className="card-body">
            <h4 className="tech-title" style={tech == "Python" ? {color: "#7E2553"} : {color: "#1E40AF" }}>{tech}</h4>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
          </div>
          <div className="github-link">
              <a href="#">Read More →</a>
          </div>
          
        </div>
      </div>
      <div className="break">
          <hr/>
      </div>
    </>
    
  );
}

export default Card;


{/* <a href="#" className="card-link">
          Code
      </a> */}