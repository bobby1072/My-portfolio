import axios from "axios";
import Constants from "../common/Constants";

export default abstract class DesktopAppServiceProvider {
  private static _httpClient = axios.create({
    baseURL: Constants.DownLoadLink,
  });
  private static async _getRequest(
    projectLink: "movie-assistant"
  ): Promise<any> {
    const req = this._httpClient
      .get(`${projectLink}/`, { responseType: "arraybuffer" })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/octet-stream",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${projectLink}.exe`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    await req;
    return req;
  }
  public static GetMovieAssistant(): Promise<any> {
    return DesktopAppServiceProvider._getRequest("movie-assistant");
  }
}
