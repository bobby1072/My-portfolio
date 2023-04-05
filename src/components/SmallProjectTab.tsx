import { Grid, Paper, Typography } from "@mui/material";
import IApplication from "../common/IApplication";
interface ISmallProjectTabProps {
  project: IApplication;
}
export default function SmallProjectTab(props: ISmallProjectTabProps) {
  const { project } = props;
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 2.5 }}
      >
        <Grid item>
          <Typography variant="h5" fontSize={30}>
            {project.name}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
