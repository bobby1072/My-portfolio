import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import IApplication from "../common/IApplication";
interface ISmallProjectTabProps {
  project: IApplication;
}
export default function SmallProjectTab(props: ISmallProjectTabProps) {
  const { project } = props;
  const theme = useTheme();
  return (
    <Paper
      sx={{
        backgroundColor: "#F4F4F4",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: 2.5 }}
          >
            {project.image && (
              <Grid item>
                <Box
                  component="img"
                  alt={project.name}
                  src={project.image}
                  sx={{ maxWidth: "44vh", maxHeight: "25vh" }}
                />
              </Grid>
            )}
            <Grid item>
              <Typography variant="h5" fontSize={30}>
                {project.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" fontSize={20}>
                {project.online ? "Online" : "Offline"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: theme.spacing(4),
            backgroundColor: theme.palette.primary.main,
          }}
        />
      </Grid>
    </Paper>
  );
}
