import IApplication from "../common/IApplication";
import DesktopAppServiceProvider from "../utils/DesktopAppServiceProvider";
import fishingSuitePhoto from "./images/fishingsuite.png";
import movieAssistantPhoto from "./images/movie-assistant.png";
export default abstract class Projects {
  public static ProjectArray: IApplication[] = [
    {
      name: "movie-assistant",
      image: movieAssistantPhoto,
      online: true,
      description:
        "An application used to help you find information about different types of media such as films and series.",
      desktopApp: {
        supportedVersions: ["Windows"],
        downloadRequest: DesktopAppServiceProvider.GetMovieAssistant,
      },
      githubUrl: "https://github.com/bobby1072/Movie-assistant",
    },
    {
      name: "the-fish-suite",
      image: fishingSuitePhoto,
      online: true,
      description:
        "This application is a suite application used by fisherman to log catches and later them. It also offers a service called the fish dictionary used to search for fish species",
      webApp: {
        link: "https://the-fishing-suite.herokuapp.com/",
      },
      githubUrl: "https://github.com/bobby1072/Fish-Logger-webpage/",
    },
  ];
}
