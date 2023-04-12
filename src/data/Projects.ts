import IApplication from "../common/IApplication";
import fishingSuitePhoto from "./images/fishingsuite.png";
import movieAssistantPhoto from "./images/movie-assistant.png";
import pokedexImage from "./images/pokedex.png";
export default abstract class Projects {
  public static ProjectArray: IApplication[] = [
    {
      name: "Movie-Assistant",
      image: movieAssistantPhoto,
      techStack: [
        { name: "React", position: "Frontend" },
        { name: "Electron", position: "Frontend" },
      ],
      languages: [{ name: "Typescript", position: "Frontend" }],
      online: true,
      description:
        "An application used to help you find information about different types of media such as films and series.",
      desktopApp: {
        supportedVersions: ["Windows"],
      },
      githubUrl: "https://github.com/bobby1072/Movie-assistant",
    },
    {
      desktopApp: {
        supportedVersions: ["Windows"],
      },
      name: "The-Fish-Suite",
      image: fishingSuitePhoto,
      techStack: [
        { name: "React", position: "Frontend" },
        { name: "Express", position: "Backend" },
        { name: "MongoDB", position: "DB" },
      ],
      languages: [
        { name: "Typescript", position: "Backend" },
        { name: "Javascript", position: "Frontend" },
      ],
      online: true,
      description:
        "This application is a suite application used by fisherman to log catches and later them. It also offers a service called the fish dictionary used to search for fish species",
      webApp: {
        link: "https://the-fishing-suite.herokuapp.com/",
      },
      githubUrl: "https://github.com/bobby1072/Fish-Logger-webpage/",
    },
    {
      name: "Pokedex",
      techStack: [{ name: "React", position: "Frontend" }],
      languages: [{ name: "Typescript", position: "Frontend" }],
      online: true,
      description:
        "This app is simply my go at making a pokedex with typescript react",
      webApp: {
        link: "https://typescript-pokedex.herokuapp.com/",
      },
      githubUrl: "https://github.com/bobby1072/PokeDex",
      image: pokedexImage,
    },
  ];
}
