export default interface IApplication {
  image?: any;
  techStack: string[];
  languages: string[];
  name: string;
  description: string;
  online: boolean;
  githubUrl?: string;
  desktopApp?: IDesktopApp;
  webApp?: IWebApp;
}

export interface IWebApp {
  link: string;
}

export interface IDesktopApp {
  downloadRequest: () => any;
  supportedVersions: ["Windows"] | ["Windows", "Mac"];
}
