import "./style.css"
import profileImage from "../../assets/img/profile.jpg"

export default function About() {
    return (
        <div className="about">
                <div className="image"> 
                    <img className="profile-picture" loading="lazy" src={profileImage} />
                </div>
                <div className="content about-me">
                    <h3>Hi, Everyone👋</h3>
                    <p>I started learning programming about 2 years ago and used python to automate my work using libraries such as Selenium and Pandas. I wanted to learn to code to upskill myself and be part of the growing tech industry.</p>
                    <p>Right now, I'm attending a bootcamp to study about the web development. There is this coolness of being a web developer wherein you can combine the creativity and technical aspects in developing web applications. </p>
                </div>
        </div>
    )
}