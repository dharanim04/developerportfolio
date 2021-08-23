
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm ",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Wordpress and some other cool libraries and frameworks"),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/dharanim04",
  linkedin: "https://www.linkedin.com/in/dharani-juturu/",
  gmail: "dharani.m04@gmail.com"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web applications"),
    // emoji("⚡ Progressive Web Applications using different frameworks"),
    emoji("⚡ Proven experience in designing, development, coding and unit testing of Web applications and Windows applications"),
    emoji("⚡ Deployment Extensive experience in application development using Microsoft.NET."),
    emoji("⚡ Developed CMS websites using WordPress")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design- HTML5,Css3,BootStrap4.0,Javascript,ReactJS",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming-C#.Net,Core Java,Python",
      progressPercentage: "60%"
    },
    {
      Stack: "Database-MS-SQL Server,MySql,Oracle",
      progressPercentage: "70%"
    },
    ,
    {
      Stack: "Testing- Selenium,TOSCA,Mocha chai ",
      progressPercentage: "50%"
    }
  ]
};

// // Your Achievement Section Include Your Certification Talks and More

// const achievementSection = {

//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle: "Achievements, Certifications and Some Cool Stuff that i have done !",
  
//   achivementsCards: [
//     {
//       title: "BootstrapCss",
//       subtitle: "From Codeacademy Bootstrap 4.0",
//       image: "",
//       footerLink: [
//         { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/0595479d03627a8cb816b069000e4d06" }
//       ]
//     },
//     {
//       title: "JavaScript",
//       subtitle: "From Codeacademy Javascript ES6",
//       image: "",
//       footerLink: [
//         { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/705dcb15de0da4dd9d9fc4f3274b430e" }
//       ]
//     },
//     {
//       title: "React JS",
//       subtitle: "From Codeacademy",
//       image: "",
//       footerLink: [
//         { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/af00e5032d0a68cc84879983f5d8333b" }
//       ]
//     },
//     {
//       title: "Automation Specialist Level 1",
//       subtitle: "From Tricentis Tosca 12.x",
//       image: "",
//       footerLink: [
//         { name: "Credential ID: COC0125447", url: "" }
//       ]
//     },
//     {
//       title: "Automation Specialist Level 2",
//       subtitle: "From Tricentis Tosca 12.x",
//       image: "",
//       footerLink: [
//         { name: "Credential ID: COC0126108", url: "" }
//       ]
//     },
//     {
//       title: "Automation Engineer Level-1",
//       subtitle: "From Tricentis Tosca 12.x",
//       image: "",
//       footerLink: [
//         { name: "Credential ID: COC0130720", url: "" }
//       ]
//     },
//     {
//       title: "Python Programming Language",
//       subtitle: "From TAFE NSW",
//       image: "",
//       footerLink: [
//         { name: "ICTPRG301, ICTPRG413", url: "" }
//       ]
//     },
//   ]
// };

// Blogs Section

const blogSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "With Love for Developing cool stuff, I have earned some certifications.",

  blogs: [
    {
      url:
        "https://www.codecademy.com/profiles/DharaniJuturu/certificates/0595479d03627a8cb816b069000e4d06",
      title: "CSS3-Bootstrap",
      description:
        "From Codeacademy Bootstrap 4.0",
    },
    {
      url:
        "https://www.codecademy.com/profiles/DharaniJuturu/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
      title: "JavaScript",
      description:
        "From Codeacademy Javascript ES6",
    },
    {
      url:
        "https://www.codecademy.com/profiles/DharaniJuturu/certificates/af00e5032d0a68cc84879983f5d8333b",
      title: "React JS",
      description:
        "From Codeacademy",
    },
    {
      url:
        "",
      title: "Automation Specialist Level 1",
      description:
        "From Tricentis Tosca 12.x",
    },
    {
      url:
        "",
      title: "Automation Specialist Level 2",
      description:
        "From Tricentis Tosca 12.x",
    },
    {
      url:
        "",
      title: "Automation Engineer Level-1",
      description:
        "From Tricentis Tosca 12.x",
    },
    {
      url:
        "",
      title: "Python Programming Language",
      description:
        "From TAFE NSW",
    },
  ],
};

// Your project displays Section Include Your worked projects and More

const myprojectDetails = {

  title: emoji("My Projects 💻 "),
  subtitle: "Designed 🎨 and developed projects ",
  
  myprojects: [
    {
      title: "As Web Developer",
      subtitle: "Heartfulness Institute Australia ",
      image: "images1/heartfulnessImg.JPG",
      footerLink: [
        { name: "Check here", url: "https://www.heartfulnessinstitute.org.au/" }
      ]
    },
    {
      title: "Task Manager",
      subtitle: "Javascript Project from Bootcamp",
      image:"images1/todoImage2.JPG" ,
      footerLink: [
        { name: "Check here", url: "https://jwd05-generation.github.io/Final-Project-Task-Planner/" }
      ]
    },
    {
      title: "Food Blog- pinchOfSalt",
      subtitle: "Technologies used: HTML5, Css3, Bootstap4.0 and JS",
      image: "images1/foodblog.JPG",
      footerLink: [
        { name: "Check here", url: "https://dharanim04.github.io/pinchOfSalt/" }
      ]
    },
    {
      title: "Vintage Cards",
      subtitle: "Technologies used: HTML5, Css3, Bootstap4.0",
      image: "images1/vintageCarsImg.JPG",
      footerLink: [
        { name: "Check here", url: "https://dharanim04.github.io/WebAssessmentVintageCars/" }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
//   display: true, // Set false to hide this section, defaults to true
// };


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "best contact by email",
  email_address: "dharani.m04@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, blogSection, myprojectDetails, contactInfo };
// achievementSection,
