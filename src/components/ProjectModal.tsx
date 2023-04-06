import { Box, Button, Grid, Typography } from "@mui/material";
import IApplication from "../common/IApplication";
import { useMutation } from "react-query";
import { useState } from "react";
import Constants from "../common/Constants";
interface IProjectModalProps {
  app: IApplication;
  setProjectFalse: () => void;
}
export default function ProjectModal(props: IProjectModalProps) {
  const { app, setProjectFalse } = props;
  const [error, setError] = useState<string>();
  const { mutate, isLoading } = useMutation(
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
        sx={{ padding: 1, mb: 1 }}
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
                    mutate();
                  }}
                  disabled={isLoading}
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
          </Grid>
        </Grid>
        {isLoading && (
          <div>
            <Grid item>
              <Typography variant="subtitle2" fontSize={19}>
                Loading...
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
        )}{" "}
      </Grid>
    </div>
  );
}
