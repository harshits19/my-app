export const IntroSectionData = {
  sectionTitle: "Hello 👋.",
  mainImg: "/src/assets/images/introBg.svg",
  description1: `I'm **Harshit Gaur.** Full-stack Developer,`,
  description2: "I'm a tech enthusiast 👻, and i love designing websites.",
  socialLinks: {
    github: "https://github.com/harshits19",
    linkedin: "https://www.linkedin.com/in/harshitgaur19/",
    instagram: "https://www.instagram.com/_harshitz/",
    mail: "mailto:jai191912101@gmail.com",
  },
}
export const TechStackSectionData = {
  sectionTitle: "Here's what I do",
  mainImg: "/src/assets/images/techstack.svg",
  skillsDescription: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
    "⚡ Building responsive website front end using ReactJS",
    "⚡ Creating application backend in Node, Express & MongoDb",
    "⚡ Integration of third party services such as Firebase/ AWS",
  ],
}
export const ProjectSectionData = {
  movieApp: {
    title: "MoviesFlick",
    mainImg: "/src/assets/images/movieApp.png",
    description: [
      "The MoviesFlick app is inspired by **Netflix**, it provides the user with browsing and searching for movies and TV shows.",
      "Has features such as browsing movies and TV shows by **genre**, **searching** movies and TV shows by keyword, adding a movie or TV show to the **user-list** (watch later), and customizing the **user-profile.**",
      "Built using tech stacks like React, Javascript, Tailwind CSS, etc. The authentication of users is handled by **Firebase**. It utilizes the **TMDB API** for fetching movie and TV show data, as well as **RTK Query** handles state management in the whole environment of the app.",
    ],
    links: {
      github: "https://github.com/harshits19/movie-app",
      liveDemo: "https://moviesflick.netlify.app/",
    },
    stackUsed: ["JavaScript", "ReactJs", "Tailwind", "Firebase", "Redux"],
  },
  foodApp: {
    title: "FoodChimp",
    mainImg: "/src/assets/images/foodApp.png",
    description: [
      "The FoodChimp app provides a convenient platform that allows users to view, search for, and order food from their **nearby restaurants**. It draws its primary inspiration from **Swiggy.**",
      "The main features of the app include getting nearby restaurants based on the **GPS location** of the user and **dynamically switching the locations** of different cities.",
      "It is built using tech stacks like React,Redux Toolkit, Tailwind, and JavaScript. The handling of live API responses from Swiggy to fetch the restaurant's data is managed by **Async Thunks of RTK** for the entire app.",
      "The app uses many methodologies and practices behind-the-scenes, such as a **shimmer UI**, **lazy loading** of images, and **responsive design** for seamless transitions between devices.",
    ],
    links: {
      github: "https://github.com/harshits19/food-app-two",
      liveDemo: "https://foodchimp.netlify.app/",
    },
    stackUsed: ["HTML5", "JavaScript", "ReactJs", "Tailwind", "Redux"],
  },
  videoApp: {
    title: "WatchIt",
    mainImg: "/src/assets/images/videoApp.png",
    description: [
      "It's a React project based on the **YouTube** that aims to recreate some of the core features and functionalities of the popular **video-sharing platform.**",
      "The main goal is to provide users with a responsive and interactive platform for discovering, watching, and sharing videos.",
      "The Watchit app has many features, such as **viewing, discovering, and searching videos and channels**. Users can add or remove videos from their **watch later playlist**. It also features switching between **light and dark modes.**",
      "**State management** and fetching live data from **Youtube Data API v3** are done using the **Redux Toolkit.**",
    ],
    links: {
      github: "https://github.com/harshits19/video-app",
      liveDemo: "https://watchit-yt.netlify.app/",
    },
    stackUsed: ["HTML5", "CSS3", "JavaScript", "ReactJs", "Redux"],
  },
}

export const ProjectPageData = {
  movieApp: ProjectSectionData.movieApp,
  foodApp: ProjectSectionData.foodApp,
  videoApp: ProjectSectionData.videoApp,
  blogApp: {
    title: "Blog-App",
    mainImg: "",
    description: ["", "", ""],
    links: {
      github: "https://github.com/harshits19/blog-app",
      liveDemo: "",
    },
    stackUsed: ["HTML5", "CSS3", "JavaScript"],
  },
  foodApp2: {
    title: "FoodSimp",
    mainImg: "",
    description: ["", "", ""],
    links: {
      github: "https://github.com/harshits19/food-app",
      liveDemo: "",
    },
    stackUsed: ["HTML5", "CSS3", "JavaScript"],
  },
  newsApp: {
    title: "News-App",
    mainImg: "",
    description: ["", "", ""],
    links: {
      github: "https://github.com/harshits19/news-app",
      liveDemo: "",
    },
    stackUsed: ["HTML5", "CSS3", "JavaScript"],
  },
  loginApp: {
    title: "Login-App",
    mainImg: "",
    description: ["", "", ""],
    links: {
      github: "https://github.com/harshits19/login-app",
      liveDemo: "",
    },
    stackUsed: ["HTML5", "CSS3", "JavaScript"],
  },
  chatApp2: {
    title: "Realtime Chat-App",
    mainImg: "",
    description: ["", "", ""],
    links: {
      github: "https://github.com/harshits19/",
      liveDemo: "",
    },
    stackUsed: ["HTML5", "CSS3", "JavaScript"],
  },
}
