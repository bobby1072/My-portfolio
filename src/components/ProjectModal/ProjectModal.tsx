import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import IApplication from "../../common/IApplication";
import { useMutation } from "react-query";
import { useState } from "react";
import Constants from "../../common/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import OnlineStatus from "../Common/OnlineStatus";
import TechAndLangs from "./TechsAndLangs";
interface IProjectModalProps {
  app: IApplication;
  setProjectFalse: () => void;
}
export default function ProjectModal(props: IProjectModalProps) {
  const { app, setProjectFalse } = props;
  const [error, setError] = useState<string>();
  const { mutate: mutateDownloader, isLoading: downloadLoading } = useMutation(
    async () => await app.desktopApp?.downloadRequest(),
    {
      onSuccess: (data) => {
        setError(undefined);
      },
      onError: (error) => {
        if (error instanceof Error) setError(error.message);
        else setError(Constants.DownloadError);
      },
    }
  );
  return (
    <div className="modal">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={3}
        sx={{ padding: 2, mb: 1 }}
      >
        <Grid item>
          <Box
            component="img"
            alt={app.name}
            src={app.image}
            sx={{ maxWidth: "50vh", maxHeight: "32vh" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" fontSize={25}>
            {app.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" fontSize={18}>
            {app.description}
          </Typography>
        </Grid>
        <Grid item>
          <OnlineStatus online={app.online} />
        </Grid>
        <Grid item>
          <TechAndLangs languages={app.languages} techs={app.techStack} />
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={1}
          >
            <Grid item>
              <Button variant="outlined" onClick={setProjectFalse}>
                Cancel
              </Button>
            </Grid>
            {app.desktopApp && (
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    mutateDownloader();
                  }}
                  disabled={downloadLoading}
                >
                  Download
                </Button>
              </Grid>
            )}
            {app.webApp && (
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    window.location.href = app.webApp!.link;
                  }}
                >
                  Go to
                </Button>
              </Grid>
            )}
            {app.githubUrl && (
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    window.location.href = app.githubUrl!;
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                  }}
                >
                  <IconButton
                    size="medium"
                    sx={{
                      padding: 0,
                      "& svg": {
                        fontSize: "1.5rem",
                        color: "#ffffff",
                      },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
        {downloadLoading && (
          <div>
            <Grid item>
              <Typography variant="subtitle2" fontSize={19}>
                Downloading...
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" fontSize={14}>
                *May take a while*
              </Typography>
            </Grid>
          </div>
        )}
        {error && (
          <Grid item>
            <Typography variant="subtitle2" fontSize={19} color="error">
              {error}
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
