/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Scientist Anand",
  title: "Hi all, I'm Anand",
  subTitle: emoji(
    "My expertise lies in integrating AI technologies, such as machine learning, deep learning, and natural \
    language processing, into software architectures to create adaptive, efficient, and forward-thinking \
    solutions. \
   I have a proven track record of delivering high-performance applications, harnessing the capabilities of AI \
    algorithms to optimize processes, and drive transformative changes in various industries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hashsharma",
  linkedin: "https://in.linkedin.com/in/anand-v-7ab22321b",
  gmail: "mranandsoft@gmail.com",
  facebook: "https://www.facebook.com/maxanand2014",
  medium: "https://medium.com/@mranand",
  stackoverflow: "https://stackoverflow.com/users/23052403/mr-anand",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crafting Tomorrow's Solutions: AI & ML Developer Extraordinaire",
  skills: [
    emoji(
      "⚡ Proficient in developing machine learning models for various applications, including natural language processing (NLP), computer vision, and recommendation systems."
    ),
    emoji("⚡ Experience with popular machine learning frameworks and libraries such as TensorFlow, Keras, PyTorch, and scikit-learn."),
    emoji(
      "⚡ Familiarity with cloud computing platforms (such as AWS, Azure, or Google Cloud) for building and deploying machine learning solutions."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      iconPath: require("./assets/images/python.png")
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-database",
      iconPath: require("./assets/images/pytorch.png")
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fas fa-database",
      iconPath: require("./assets/images/aws.png")
    },
    {
      skillName: "LLM",
      fontAwesomeClassname: "fas fa-database",
      iconPath: require("./assets/images/llm.png")
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-database",
      iconPath: require("./assets/images/hugging-face.png")
    },
    {
      skillName: "Artificial Intelligence",
      fontAwesomeClassname: "fa-solid fa-microchip-ai fa-fw",
      iconPath: require("./assets/images/artifcial-intelligence.png")
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      iconPath: require("./assets/images/sql-database.png")
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-aws",
      iconPath: require("./assets/images/GitHub.png")
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-aws",
      iconPath: require("./assets/images/linux.png")
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-aws",
      iconPath: require("./assets/images/django.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-aws",
      iconPath: require("./assets/images/javascript.png")
    },
 
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rgpv Bhopal",
      logo: require("./assets/images/rgpv_bhopal.png"),
      subHeader: "Bachelor in Computer Science Engineering",
      duration: "September 2016 - December 2020",
      desc: "Participated in the research of database management.",
      descBullets: [
        "Conducted comprehensive research on optimizing query performance in relational databases, focusing on indexing strategies and query optimization techniques.",
        "Collaborated within a team to explore the impact of normalization and denormalization on database efficiency, presenting findings that contributed to enhancing database design methodologies."
      ]
    },
    {
      schoolName: "Kendriya Vidyalaya Sangathan",
      logo: require("./assets/images/kvs-logo.png"),
      subHeader: "Final year of high school",
      duration: "April 2015 - July 2016",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["During the 12th grade, I explored various facets of computer science, delving into programming languages and algorithms.",
    "Engaging in projects involving web development and basic application programming provided practical insights into software development.",
  "Additionally, participation in coding competitions and collaborative projects enhanced problem-solving skills, fostering a deeper understanding of computer science concepts."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer I",
      company: "Ful.io",
      companylogo: require("./assets/images/ful-io.png"),
      date: "December 2022 – March 2024",
      desc: "Ful.io is making data more accessible to the world.  AI-Powered Startup Specializing in Data Scraping, Lead Generations, Technology Intelligence, Delivering Valuable Insights for Informed Business Decisions. We track over a thousand web technologies across millions of websites",
      descBullets: [
        "Engineered advanced AI-backed background processes for superior lead generation using LLMs.",
        "Successfully addressed customer CR’s, using Machine Learning providing detailed website information, page counts, and resolving broken links with a remarkable accuracy rate of 90%."
      ]
    },
    {
      role: "Software Engineer",
      company: "UBQ Technologies",
      companylogo: require("./assets/images/ubq-tech.png"),
      date: "January 2021 – November 2022",
      desc: " It has a product medics, it is a unique cloud-based platform that is designed to integrate the complete Healthcare ecosystem, works on AI generated health information which makes healthcare delivery seamless and efficient.",
      descBullets: [
        " Implemented AI-generated health information features to enhance the efficiency and seamlessness of healthcare delivery.",
        "Collaborated with cross-functional teams to ensure the successful integration of AI technologies into the platform using LLMs.",
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/paper-quiz.png"),
      projectName: "paper quiz: The Perfect Exam",
      projectDesc: "📚 All-in-One Quiz App: Paper Quiz covers a wide range of exams, making it your one-stop destination for exam preparation.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.paper.quiz"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pixel-cafe.png"),
      projectName: "Pixel Cafe: The Photo Editor",
      projectDesc: "Pixel Cafe! This Awesome tool is designed to help you edit and enhance your photos with a single click. Whether you are a professional photographer",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.bludev.pixelcafe"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "International Mathematical Olympiad",
      subtitle:
        "I clinched the prestigious 3rd position in the International Mathematical Olympiad (IMO), showcasing problem-solving prowess and mathematical ingenuity on a global platform. This achievement reflects dedication, analytical skills, and a passion for mathematical challenges, marking a significant milestone in my academic journey.",
      image: require("./assets/images/IMOLogo.png"),
      imageAlt: "",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9399798035",
  email_address: "mranandsoft@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
