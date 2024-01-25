import { AppBar, Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import ProjectDisplay from "../components/ProjectDisplay/ProjectDisplay";
import { useState } from "react";
import IApplication from "../common/IApplication";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import StyledPaper from "../common/StyledPaper";
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
        <AppBar position="static" sx={{ padding: 4, alignItems: "center" }}>
          <Toolbar>
            <Typography variant="h1" fontSize={55}>
              My portfolio
            </Typography>
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
          <StyledPaper
            sx={{
              padding: 3,
              minHeight: "6vh",
            }}
          >
            <ReactMarkdown>
              ##### Hello! I'm Bobby Thompson, a dedicated young software
              developer with expertise in React TypeScript and backend Node.js.
              I possess comprehensive skills in both front and backend web
              development. My primary focus centers around developing resilient
              backend solutions using ASP .NET, with a particular emphasis on
              healthcare technology. I am passionate about creating seamless
              user experiences through React TypeScript and firmly believe in
              the pivotal role a robust backend plays in ensuring the success of
              applications. My approach to development is holistic,
              incorporating hands-on experience in DevOps practices such as
              containers and pipelines.
            </ReactMarkdown>
            <Divider />
            <ReactMarkdown>
              ##### All my webapp projects are hosted on Heroku. However some
              apps do have desktop versions (currently there are only windows
              versions).
            </ReactMarkdown>
          </StyledPaper>
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
