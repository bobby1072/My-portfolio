import { AppBar, Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import ProjectDisplay from "../components/ProjectDisplay/ProjectDisplay";
import { useState } from "react";
import IApplication from "../common/IApplication";
import ProjectModal from "../components/ProjectModal/ProjectModal";

export default function MainPage() {
  const [project, setProject] = useState<IApplication>();
  return (
    <div className="App">
      <Box
        sx={{
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.9)",
          mb: 3,
        }}
      >
        <AppBar position="static" sx={{ padding: 2.5, alignItems: "center" }}>
          <Toolbar>
            <Typography variant="h3">My portfolio</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 4 }}
        spacing={3}
      >
        <Grid item sx={{ width: "80%" }}>
          <Paper
            sx={{
              padding: 3,
              minHeight: "6vh",
              backgroundColor: "#F4F4F4",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography variant="subtitle2" fontSize={20}>
              This portfolio is intended to be a hub for all of my different
              projects that I create.
            </Typography>
            <Typography variant="subtitle2" fontSize={20}>
              All my webapp projects are hosted on Heroku. However some apps do
              have desktop versions{" "}
              {"(currently there are only windows versions)"}.
            </Typography>
            <Typography variant="subtitle2" fontSize={16} sx={{ mt: 8 }}>
              By Bobby Thompson
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <ProjectDisplay
            setProject={(app?: IApplication) => {
              setProject(app);
            }}
          />
        </Grid>
      </Grid>
      {project && (
        <div>
          <ProjectModal
            app={project}
            setProjectFalse={() => setProject(undefined)}
          />
        </div>
      )}
    </div>
  );
}
