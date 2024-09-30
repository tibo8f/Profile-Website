import projectMobile from "../assets/projects/phone.jpg";
import projectRobot from "../assets/projects/Robot.png";
import projectPortfolioWeb from "../assets/projects/portfolioWeb.jpeg";
import projectDatabase from "../assets/projects/database.webp";
import projectProjectManagement from "../assets/projects/projectManagement.jpeg";
import projectMachineLearning from "../assets/projects/machineLearning.jpeg";
import projectObjectOrientedGame from "../assets/projects/objectOrientedGame.jpeg";

export const NAV_LINKS = [
  { href: '#about', key: 'aboutMe', label: 'About Me' },
  { href: '#experience', key: 'experience', label: 'Experience' },
  { href: '#education', key: 'education', label: 'Education' },
  { href: '#technologies', key: 'technologies', label: 'Technologies' },
  { href: '#projects', key: 'projects', label: 'Projects' },
];

export const HERO_CONTENT = `I am seeking a 6-week internship followed by a final thesis project (TFE) from January 6th to May 31st, 2025.`;
export const ABOUT_TEXT = `As a second-year master's student in computer science at ECAM, I am passionate about automation, logic, and science. I also place great importance on human relations, as demonstrated by my choice to manage the integrative projects of first-year students and my role as a master's delegate. Finally, I have a strong interest in entrepreneurship, which I pursue through the creation of an online course and a YouTube community centered around bass guitar.`;

export const EXPERIENCES = [
  {
    year: "3 Avril 2023 - 12 Mai 2023",
    role: "Internship",
    title:"Process Automation Project",
    company: '<a href="https://www.reply.com/sprint-reply/en/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 hover:underline">Sprint Reply Belgium</a>',
    description: `Completed a process automation project (RPA) using BluePrism during an observation internship. Focused on automating repetitive tasks to improve efficiency. The project automated error handling.`,
    technologies: ["BluePrism"],
  },
  {
    year: "September 2020 - Present",
    role: "Entrepreneur",
    title: "Online Music Courses & YouTube Community",
    company: "Self-employed",
    description: `Created <a href="https://thibaut-s-site-58a7.thinkific.com" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">online courses</a> on bass guitar, and built a <a href="https://www.youtube.com/@ThibautBasse" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">YouTube</a> community around bass lessons. Delivered private lessons.`,
    technologies: ["Thinkific", "YouTube"],
  },
  {
    year: "September 2018 - June 2024",
    role: "Student Job",
    title: "Server",
    company: `
    <a href="https://auboncoeur3.be" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-sky-300">Au Bon Coeur 3</a>, 
    <a href="https://brugmann.com" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-sky-300">Le Brugmann</a>, 
    <a href="https://sina-pasta.com" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-sky-300">Sina</a>
  `,    description: `Worked as a server at various restaurants, including the gourmet restaurant Le Brugmann, where I was a server assistant.`,
    technologies: [],
  },
];

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Master",
    company: "ECAM",
    description: `Industrial engineer with a specialization in computer science.`,
    technologies: ["React.js", "Next.js", "Rust"],
  },
  {
    year: "2019 - 2023",
    role: "Bachelor",
    company: "ECAM",
    description: `Industrial engineer with a specialization in electrical engineering: computer science and electronics.`,
    technologies: ["HTML", "CSS", "Javascript", "mySQL", "SQL", "Python", "C#", "C++", "Arduino", "Altium"],
  },
  {
    year: "2018 - 2019",
    role: "First year",
    company: "Université Libre de Bruxelles (ULB)",
    description: `Civil engineer from the École Polytechnique de Bruxelles.`,
    technologies: ["Python"],
  },
  {
    year: "2012 - 2018",
    role: "Secondary education",
    company: "Lycée Henriette Dachsbeck",
    description: `Obtaining the CESS with a focus on Mathematics and Sciences. Received the prize for the student most involved in the school.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Profile Website",
    image: projectPortfolioWeb,
    description:
      "This web site! A personal portfolio website showcasing my projects and experience.",
    technologies: ["React", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Construction of a Robot",
    image: projectRobot,
    description:
      "Developed a robot from scratch for the national EUROBOT competition, achieving 3rd place. This project included 3D design, mechanical construction, electronics and programming.",
    technologies: ["C++", "Arduino", "Fusion 360", "3D Printing"],
  },
  {
    title: "E-commerce Website And Mobile Application",
    image: projectMobile,
    description:
      "An online marketplace application similar to Vinted. Development of the website and a mobile application, both sharing a common API and database. User registration, creation, deletion, and modification of items.",
    technologies: ["React Native","React", "NodeJs", "Prisma", "HTML", "CSS"],
  },
  {
    title: "Database Management Experience",
    image: projectDatabase,
    description:
      "Gained experience interacting with both SQL and NoSQL databases through command-line operations. Performed tasks such as querying, updating, and managing data.",
    technologies: ["SQL", "NoSQL"],
  },
  {
    title: "Object-Oriented Game Development",
    image: projectObjectOrientedGame,
    description:
      "Developed a video game using Python, following object-oriented programming principles. Implemented game mechanics and character interactions.",
    technologies: ["Python"],
  },
  {
    title: "Movie Revenue Prediction Using Machine Learning",
    image: projectMachineLearning,
    description:
      "Developed a machine learning model to predict movie revenue based on various features like budget, runtime, genre, and director.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Project Management",
    image: projectProjectManagement,
    description:
      "Volunteered to take on the role of team manager for a first-year integrative project. Through this experience, I learned how to manage a team and adapt my communication style to fit the needs of each team member.",    
    technologies: [],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "tibo8f@gmail.com",
};
