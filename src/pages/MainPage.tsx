import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
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
          mb: 6,
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
        sx={{ padding: 3 }}
      >
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
