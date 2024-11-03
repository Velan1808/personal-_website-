import my_img from './velan-img.png';
import rest_api from './rest-api.png'
import project_1 from "./food-del-app.png"
import project_2 from  "./admin-panel.png"
import project_3 from  "./youtube-clone.png"
import project_4 from  "./e-commerce.png"
import project_5 from  "./todo-list.png"
import project_6 from  "./agency-web.png"

const assest = {
    my_img,
    rest_api
};

export const project_list =[
    {
         id : 1,
         image : project_1,
         project_name : "Food Delivery Website",
         technology : "React JS,Node.js, Express.js, MongoDB and JWT",
         description : "My food delivery website is a full-stack application featuring a user-friendly frontend and a robust backend. It streamlines the ordering process with essential features like menu browsing and order management.",
         github_link : "https://github.com/Velan1808/food-del-app.git",
         link : "https://food-del-app-cing.onrender.com"
    },
    {
        id : 2,
        image : project_2,
        project_name : "Admin-Panel",
        technology : "React JS,Node.js, Express.js and MongoDB",
        description : "The admin panel of my food delivery app allows administrators to efficiently manage the menu by adding, removing, and listing food items. It also provides real-time access to order details, ensuring smooth order processing and tracking..",
        github_link : "https://github.com/Velan1808/mern-food-del.git",
        link : "https://mern-food-del-1.onrender.com"
   },
   {
    id : 3,
    image : project_3,
    project_name : "Youtube Clone",
    technology : "HTML, CSS, Javascript & React JS",
    description :"Developed a YouTube replica with HTML, CSS, JavaScript, and React.js, utilizing YouTube API for content. Features include a navigable UI with categories, interactive home page videos, and detailed video pages with commands and recommended content.",
    github_link : "https://github.com/Velan1808/Youtube_Clone",
    link : "https://youtube-clone187.netlify.app/"
},
{
    id : 4,
    image : project_4,
    project_name : "E-Commerce Website",
    technology : "HTML, CSS, Javascript",
    description : "Crafted an HTML, CSS, and JavaScript-based e-commerce platform, delivering a user-friendly shopping experience with intuitive design and smooth functionality.",
    github_link : "https://github.com/Velan1808/E-commerce",
    link : "https://velan1808.github.io/E-commerce/"
},
{
    id : 5,
    image : project_5,
    project_name : "To_Do_List",
    technology : "HTML, CSS, Javascript",
    description : "Developed a to-do list app utilizing HTML, CSS, and JavaScript, featuring local storage integration for seamless note-taking and retrieval, enhancing productivity and organization.",
    github_link : "https://github.com/Velan1808/My-To-Do-List-Application",
    link : "https://todolist187.netlify.app/"
},
{
    id : 6,
    image : project_6,
    project_name : "Agency Website",
    technology : "HTML and CSS",
    description :"Crafted an agency website with HTML, CSS, and JavaScript, showcasing services, portfolio, and team, with a responsive design for optimal user experience." ,
    github_link :" https://github.com/Velan1808/Agency_website" ,
    link : "https://velan1808.github.io/Agency_website/"
}
      
]

export default assest;