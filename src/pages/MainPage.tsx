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
        <AppBar position="static" sx={{ padding: 2.5, alignItems: "center" }}>
          <Toolbar>
            <Typography variant="h1" fontSize={90}>
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
              ##### Hello! I'm Bobby Thompson, a dedicated software developer
              specializing in React TypeScript and backend Node.js. With a
              background in .NET/ASP.NET, I'm well-versed in both front and
              backend web development. My true passion lies in creating robust
              backend solutions using TypeScript and Node.js, particularly in
              the realm of healthcare technology. I thrive on crafting seamless
              user experiences using React TypeScript and believe in the power
              of a strong backend to drive application success. I bring a
              holistic perspective to development, with experience in DevOps
              practices like containers and pipelines. Let's collaborate and
              shape the future of healthcare technology together.
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
