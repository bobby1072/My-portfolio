export default abstract class Constants {
  public static ProductionEnv: boolean = process.env.NODE_ENV === "production";
  public static DownLoadLink: string = this.ProductionEnv
    ? "https://project-download-api.herokuapp.com"
    : "http://localhost:5000";
}
