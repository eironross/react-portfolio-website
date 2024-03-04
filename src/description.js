import apiImage from "./assets/img/api.png"
import bondleImage from "./assets/img/bondle.png"
import rmsImage from "./assets/img/report-1.png"
import downloaderImage from "./assets/img/market-data-img.png"


const cards = [
    {
        id: 1,
        title: "Reporting Management System",
        tech: "NodeJS",
        description: "Developing a reporting application to load, create and update documents. Using NodeJS and PostgreSQL",
        image: rmsImage,
        link: "https://github.com/eironross/reporting-management-system" 
    },
    {   
        id: 2,
        title: "API Resume",
        tech: "Python",
        description: "Created an API version of my Resume using FastAPI. To understand the concepts of REST API, Requests & Response and JSON.",
        image: apiImage,
        link: "https://github.com/eironross/api-resume"
    },
    {   
        id: 3,
        title: "Market Data Web Scraper",
        tech: "Python",
        description: "Create a module for web scraping data. When executed the script fetch data from a website then creates csv files based from the response of the website",
        image: downloaderImage,
        link: "https://github.com/eironross/market-data-scraper"
    },
    {   
        id: 4,
        title: "bondle. - Static Website",
        tech: "HTML, CSS & JS",
        description: "I created a Notion inspired website to demonstrate my skills in web design. To learn more about layouting, & CSS",
        image: bondleImage,
        link: "https://eironross.github.io/bondle-site"
    },
    
]

export default cards;









