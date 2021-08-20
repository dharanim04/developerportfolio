
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Dharani J",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Wordpress and some other cool libraries and frameworks"),
  resumeLink: "https://drive.google.com/open?id=1OiR1hj5U0lBj1jKGv3Wa1tSVTwO37blq"
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
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
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
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};





// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that i have done !",
  
  achivementsCards: [
    {
      title: "Javascript Project from Bootcamp",
      subtitle: "Task Manager ",
      image:"images1/todoImage1.png" ,
      footerLink: [
        { name: "Check here", url: "https://jwd05-generation.github.io/Final-Project-Task-Planner/" }
      ]
    },
    {
      title: "Learn Bootstrap Course",
      subtitle: "From Codeacademy Bootstrap 4.0",
      image: "",
      footerLink: [
        { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/0595479d03627a8cb816b069000e4d06" }
      ]
    },
    {
      title: "Learn JavaScript Course",
      subtitle: "From Codeacademy Javascript ES6",
      image: "",
      footerLink: [
        { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/705dcb15de0da4dd9d9fc4f3274b430e" }
      ]
    },
    {
      title: "Learn React Course",
      subtitle: "From Codeacademy",
      image: "",
      footerLink: [
        { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/af00e5032d0a68cc84879983f5d8333b" }
      ]
    },
  ]
};






const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "best contact by email",
  email_address: "dharani.m04@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, achievementSection, contactInfo };
