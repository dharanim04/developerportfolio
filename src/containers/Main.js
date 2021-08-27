import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
// import Projects from "./projects/Projects";
// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
import MyprojectDetails from "./myprojectDisplayed/MyprojectDetails";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <Greeting />
          <Skills />
          <StackProgress />
          <MyprojectDetails />
          <Blogs />
          {/* <Achievement /> */}
          <Contact />
         
          <Footer />
          <Top />
        </div>
      </div>
    );
  }
}
