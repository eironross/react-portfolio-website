import apiImage from "./assets/img/background-1.jpg"
import blogImage from "./assets/img/background-3.jpg"
import downloaderImage from "./assets/img/background-4.jpg"


const cards = [
    {   
        id: 1,
        title: "Blog App",
        tech: "Python",
        description: "Created a blogsite using Flask as my capstone project. To understand the full-stack development.I have used the SQLite for the database and used the SQLAlchemy for the ORM.",
        image: blogImage
    },
    {   
        id: 2,
        title: "API Resume",
        tech: "Python",
        description: "Created an API version of my Resume using FastAPI. To understand the concepts of REST API, Requests & Response and JSON.",
        image: apiImage
    },
    {   
        id: 3,
        title: "Web Scraper",
        tech: "Python",
        description: "Developed a program that will scrape data from IEMOP Website using Selenium. ",
        image: downloaderImage
    }
]

export default cards;









