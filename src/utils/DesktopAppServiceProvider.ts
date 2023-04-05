import axios from "axios";
import Constants from "../common/Constants";

export default abstract class DesktopAppServiceProvider {
  private static _httpClient = axios.create({
    baseURL: Constants.DownLoadLink,
  });
  private static async _getRequest(
    projectLink: "movie-assistant"
  ): Promise<any> {
    const req = await this._httpClient.get(`${projectLink}/`);
    return req.data;
  }
  public static GetMovieAssistant(): Promise<any> {
    return this._getRequest("movie-assistant");
  }
}
