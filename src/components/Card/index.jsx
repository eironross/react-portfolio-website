// React 17 does not need importing module anymore
import "./style.css"

function Card(props) {
  const { title, description, image, tech, link} = props


  return (
    <>
      <div class="card-wrap">
        <a href={link} class="project-link"><img src={image}/></a>
        <div class="card-title">
          <h3 class="text" style={tech == "Python" ? {color: "#7E2553"} : {color: "#1E40AF" }}>{tech}</h3>
          <h2 class="text">{title}</h2>
          <h4 class="text" >{description}</h4>
        </div>
      </div>
    </>
  )
}

export default Card;
