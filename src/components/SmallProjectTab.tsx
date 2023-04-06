import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import IApplication from "../common/IApplication";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
interface ISmallProjectTabProps {
  project: IApplication;
  setProject: (app?: IApplication) => void;
}
export default function SmallProjectTab(props: ISmallProjectTabProps) {
  const { project, setProject } = props;
  return (
    <div
      onClick={() => {
        setProject(project);
      }}
    >
      <Paper
        sx={{
          backgroundColor: "#F4F4F4",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          padding: 2,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ minHeight: "45vh", minWidth: "40vh" }}
        >
          {project.image && (
            <Grid item>
              <Box
                component="img"
                alt={project.name}
                src={project.image}
                sx={{ maxWidth: "50vh", maxHeight: "32vh" }}
              />
            </Grid>
          )}
          <Grid item>
            <Typography variant="h5" fontSize={30}>
              {project.name}
            </Typography>
          </Grid>
          <Grid item>
            {project.online ? (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <CheckCircleIcon color="success" />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" fontSize={20}>
                    Online
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <CancelIcon color="error" />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" fontSize={20}>
                    Offline
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item>
            <Button variant="outlined">View</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
