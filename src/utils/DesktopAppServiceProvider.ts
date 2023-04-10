import axios from "axios";
import Constants from "../common/Constants";
import FileDownload from "js-file-download";
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
        FileDownload(response.data, `${projectLink}.exe`);
      });
    return req;
  }
  public static GetMovieAssistant(): Promise<any> {
    return DesktopAppServiceProvider._getRequest("movie-assistant");
  }
}
