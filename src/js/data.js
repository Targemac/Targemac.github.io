// require fs = "fs";

const data = {
  personal_details: {
    dev_name: "Targema Charles",
    dob: "05-March-1996",
    age: "26",
    gender: "Male",
    lanugage: "English",
    status: "single",
  },
  photo: "../assets/img/tc.jpg",
  personal_summary:
    "I am an enthusiastic Full-Stack Web Developer, with 2 years of experience in front-end and back-end web development. I have a good understanding of the Software Development Life Cycle, I strive for perfection and of course, I am a great team player. I look forward to putting my knowledge to work with the rest of the team.",
  email: "",
  phone: "+2348097866451",
  address: "Abuja, Nigeria",
  education: [
    "National Youth Service Corps (NYSC), (2021 to 2022)",
    "B.Eng. Electrical Electronics Engineering (2015 to 2020), Afe Babalola University, Ekiti State",
  ],
  socials: [
    { id: 1, socialName: "Github", socialLink: "https://github.com/Targemac" },
    {
      id: 2,
      socialName: "LinkedIn",
      socialLink: "https://www.linkedin.com/in/charles-targema-b5bab1162/",
    },
    { id: 3, socialName: "Twitter", socialLink: "" },
    { id: 4, socialName: "Instagram", socialLink: "" },
    { id: 5, socialName: "Instagram", socialLink: "" },
  ],
  tech_skills: [
    { id: 1, skillName: "front-end", list: ["HTML5", "CSS", "Javascript"] },
    { id: 2, skillName: "back-end", list: ["NodeJS", "PHP", "Python"] },
    { id: 3, skillName: "framework", list: ["ReactJS"] },
    { id: 4, skillName: "database", list: ["MySQL", "MongoDB"] },
    { id: 5, skillName: "version_mgt", list: ["Git/Github"] },
    { id: 6, skillName: "cloud", list: ["AWS"] },
  ],
  prof_certification: [
    { cert_name: "Member Nigerian Society of Engineers, NSE", cert_link: "" },
    {
      cert_name:
        " Skills Edge Consulting Ltd, Abuja (2021): Project Management, Customer Service & Human Relations",
      cert_link: "",
    },
    {
      cert_name:
        "HiiT PLC, Abuja: Cisco Certified Network Associate (CCNA), 2021",
      cert_link: "",
    },
    { cert_name: "HSE Training Institute: HSE 1, 2 & 3, 2021", cert_link: "" },
  ],
  online_certification: [],
  work_experience: [],
  projects_done: [
    {
      title: "User Management System",
      description:
        " A simple implementation of a CRUD operation for a user management system",
      link: "https://github.com/Targemac/NODE-EXPRESS-API",
      img: "",
      tech_used: ["ReactJS", "NodejS", "ExpressJS", "MongoDB"],
    },
    {
      title: "weather app",
      description:
        " A simple implementation of a weather application using the free weather api",
      link: "",
      img: "",
      tech_used: ["ReactJS", "NodejS", "ExpressJS", "weatherAPI"],
    },
    {
      title: "Landing Page (Phoenix Store)",
      description: " A simple landing page",
      link: "",
      img: "",
      tech_used: ["ReactJS", "NodejS", "ExpressJS"],
    },
    {
      title: "Node Express API",
      description: "",
      link: "https://github.com/Targemac/NODE-EXPRESS-API",
      img: "",
      tech_used: ["ReactJS", "NodejS", "ExpressJS", "UUID", "POSTMAN API"],
    },
    {
      title: "movie search app",
      description: " A simple search engine for all your favourite movies",
      link: "",
      img: "",
      tech_used: ["ReactJS", "NodejS", "ExpressJS", "movieDB API"],
    },
    {
      title: "Book Store (CRUD Operation)",
      description: " A simple book store",
      link: "",
      img: "",
      tech_used: ["ReactJS", "NodejS", "ExpressJS", "MySQL"],
    },
    {
      title: "digital clock",
      description:
        "Designed and implemented a digital clock that can be embedded or used as a standalone in a website with HTML, CSS & JavaScript",
      link: "https://github.com/Targemac/Digital-Clock",
      img: "",
      tech_used: ["html", "css", "javascript"],
    },
    {
      title: "twitter bot",
      description:
        " Designed and implemented a random predefined tweet generator.",
      link: "https://github.com/Targemac/Twitter-Bot",
      img: "",
      tech_used: ["Twitter API", "NodeJS", "ExpressJS", "Lo-dash"],
    },
    {
      title: "portfolio site",
      description: "Designed and implemented my portfolio website.",
      link: "",
      img: "..//assets/img/cv.png",
      tech_used: [
        "ReactJS",
        "NodejS",
        "ExpressJS",
        "movieDB API",
        "github pages",
      ],
    },
  ],
};

export default data;
// JSON.stringify(data);
