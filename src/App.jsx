import Nav from "./components/Nav/index.jsx";
import Header from "./components/Header/index.jsx";
import Section from "./components/Section/index.jsx";
import Card from "./components/Card/index.jsx";
import About from "./components/About/index.jsx";
import Footer from "./components/Footer/index.jsx";
import cards from "./description.js"

// TODO: Can you bundle imports? What are the import with @? How to implement them?


export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Section title="Projects" id="projects">
            {cards.map(({id, title, tech, description, image}) => {
                return (
                    <Card 
                        key={id}
                        tech={tech}
                        title={title}
                        description={description}
                        image={image}
                    />
                    
                )
            })}
      </Section>
      <Section title="About" id="about">
          <About />
      </Section>
      <Footer />
    </>
  );
}


