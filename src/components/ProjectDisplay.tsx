import { Grid } from "@mui/material";
import Projects from "../data/Projects";
import SmallProjectTab from "./SmallProjectTab";

export default function ProjectDisplay() {
  const projects = Projects.ProjectArray;
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={6}
    >
      {projects.map((x) => (
        <Grid item>
          <SmallProjectTab project={x} />
        </Grid>
      ))}
    </Grid>
  );
}
