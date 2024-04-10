import { AppBar, Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import ProjectDisplay from "../components/ProjectDisplay/ProjectDisplay";
import { useEffect, useState } from "react";
import IApplication from "../common/IApplication";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import StyledPaper from "../common/StyledPaper";
import ReactGA from "react-ga4";
export default function MainPage() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Landing page" });
  }, []);
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
              #### Hello! I'm Bobby Thompson, a dedicated software developer
              looking for his next career move with expertise in React
              TypeScript, backend Node.js and .NET. I bring extensive experience
              in working within Agile methodologies, adeptly navigating through
              various ceremonies such as Sprint Planning, Daily Stand-ups,
              Sprint Reviews, and Retrospectives. I'm skilled at working with
              diverse Scrum teams to deliver great results in fast-paced
              environments.
            </ReactMarkdown>
            <Divider />
            <ReactMarkdown>
              ###### All my webapp projects are hosted on Heroku. However some
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
