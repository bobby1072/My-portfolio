export default interface IApplication {
  image?: any;
  techStack: ITechLang[];
  languages: ITechLang[];
  name: string;
  description: string;
  online: boolean;
  githubUrl?: string;
  desktopApp?: IDesktopApp;
  webApp?: IWebApp;
}

export interface ITechLang {
  name: string;
  position: "Frontend" | "Backend" | "DB";
}

export interface IWebApp {
  link: string;
}

export interface IDesktopApp {
  supportedVersions: ["Windows"] | ["Windows", "Mac"];
}
