import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import IApplication from "../../common/IApplication";
import OnlineStatus from "../Common/OnlineStatus";
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
            <OnlineStatus online={project.online} />
          </Grid>
          <Grid item>
            <Button variant="outlined">View</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
