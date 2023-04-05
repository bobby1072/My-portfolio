export default interface IApplication {
  name: string;
  description: string;
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
