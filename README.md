<!-- # Software Developer Folio ⚡️ [![GitHub](https://img.shields.io/github/license/saadpasta/developer-portfolio?color=blue)](https://github.com/saadpasta/developerFolio/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/saadpasta/developerFolio)](https://github.com/saadpasta/developerFolio/stargazers)  [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/86c52691ca3c46e4bf887d704c196824)](https://www.codacy.com/manual/saadpasta/developerFolio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=saadpasta/developerFolio&amp;utm_campaign=Badge_Grade)
 -->
## A clean, beautiful and responsive portfolio template for Developers!


<!-- <p align="center"> 
  <kbd>
<img src="https://user-images.githubusercontent.com/48270786/78817321-9e1c7b00-79f0-11ea-9070-d87563f3d151.gif"></img>
  </kbd>
</p> -->


Just change `src/portfolio.js` to get your personal portfolio . Feel free to use it as-is or customize it as much as you want..
<!-- 
But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).


If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an [pull request](https://github.com/saadpasta/developerFolio/pulls). -->


## Sections 
✔️ Summary and About me\
✔️ Skills \
✔️ My Projects\
✔️ Achievements And Certifications 🏆\
✔️ Contact me

To view a live example, **[click here](https://saadpasta.github.io/)**


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands 

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -p 3000:3000 developerfolio:latest
```


## How To Use 🔧

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/dharanim04/developerFolio.git

# Go into the repository
$ cd developerFolio

# Install dependencies
$ npm install

```
## Github Setup For Open Source Projects

### Generate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) `Make sure you don't select any scope just generate a simple token`

Copy the token and open Chrome Developer Console to convert your token to base64 so github do not revert your token when you push your token to git

```bash
# Open your Chrome Developer Console console paste the token inside btoa
$ btoa("YOUR GITHUB TOKEN")
```

Copy your converted token and paste it in `/src/portfolio.js`

```javascript
  const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */
  
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};
```


## Change and customize every section according to your need.

### To Change website content go to `/src/portfolio.js` & modify it as per your need.

#### Using Emojis

For adding emoji 😃 into the texts in Portfolio.js, use the `emoji()` function and pass the text you need as an argument. This would help in keeping Emojis compatible across different browsers and platforms.

```javascript
/* Change this file to get your Personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Saad",
  subTitle: emoji("A passionate Software Developer 🚀"),
  resumeLink: ""
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/dharanim04",
  linkedin: "https://www.linkedin.com/in/dharani-juturu/",
  gmail: "dharani.m04@gmail.com"
};


const skillsSection = { .... }

const techStack = { .... }

const openSource = { .... } 

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

#### Adding Twitter Timeline to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username..

## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)

## Deployment 📦 
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY. 

You could also deploy it directly with Netlify by linking your own repo.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)



## License 📄

This project is licensed under the GPL-3.0 License - see the [LICENSE](./LICENSE) file for details




## For the Future 
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/saadpasta/developerFolio/pulls).

- Connect with LinkedIn to get Summary, Skills, Education and Experience

- Move to Gatsby

- Enable Dark Mode

- Add More Sections and Move to Multi Page


<!-- ## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)): -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

# developerPortfolio
