
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Muhammad Kashaf",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks"),
  resumeLink: "https://drive.google.com/open?id=1OiR1hj5U0lBj1jKGv3Wa1tSVTwO37blq"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/muhammadkashaf",
  linkedin: "https://www.linkedin.com/in/kashaf-a-511a9a126/",
  gmail: "kashafahmed72@gmail.com",
  facebook: "https://www.facebook.com/kashafahmed2000"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
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
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};





// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [


    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};






const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+92-3145040651",
  email_address: "kashafahmed72@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, achievementSection, contactInfo };
