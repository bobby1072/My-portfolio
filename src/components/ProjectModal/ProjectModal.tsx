import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import IApplication from "../../common/IApplication";
import Constants from "../../common/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import OnlineStatus from "../Common/OnlineStatus";
import TechAndLangs from "./TechsAndLangs";
import { useEffect } from "react";
import ReactGA from "react-ga4";
interface IProjectModalProps {
  app: IApplication;
  setProjectFalse: () => void;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: 2,
  overflowY: "auto",
};

export default function ProjectModal(props: IProjectModalProps) {
  const { app, setProjectFalse } = props;
  useEffect(() => {
    ReactGA.event({
      category: "project reporting",
      action: "Click",
      label: `${app.name} clicked`,
    });
  }, [app.name]);
  return (
    <Modal
      open
      keepMounted
      onClose={setProjectFalse}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style} textAlign="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
          sx={{ mb: 1 }}
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
          {app.desktopApp && (
            <Grid item>
              <Typography variant="subtitle2" fontSize={15}>
                Supported platforms for download:{" "}
                {app.desktopApp.supportedVersions.join(", ")}
              </Typography>
            </Grid>
          )}
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
                    href={`${Constants.DownLoadLink}/${app.name.toLowerCase()}`}
                    download
                  >
                    Download
                  </Button>
                </Grid>
              )}
              {app.webApp && (
                <Grid item>
                  <Button variant="contained" href={app.webApp!.link}>
                    Go to
                  </Button>
                </Grid>
              )}
              {app.githubUrl && (
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    href={app.githubUrl!}
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
        </Grid>
      </Box>
    </Modal>
  );
}
