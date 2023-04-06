export default abstract class Constants {
  public static ProductionEnv: boolean = process.env.NODE_ENV === "production";
  public static DownLoadLink: string =
    "https://project-download-api.herokuapp.com";
  public static DownloadError: string = "Couldn't download app";
}
