import { Box, Button, Grid, Typography } from "@mui/material";
import IApplication from "../common/IApplication";
interface IProjectModalProps {
  app: IApplication;
  setProjectFalse: () => void;
}
export default function ProjectModal(props: IProjectModalProps) {
  const { app, setProjectFalse } = props;
  return (
    <div className="modal">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        sx={{ padding: 1, mb: 1 }}
      >
        <Grid item>
          <Box
            component="img"
            alt={app.name}
            src={app.image}
            sx={{ maxWidth: "50vh", maxHeight: "32vh" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" fontSize={25}>
            {app.name}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={1}
          >
            <Grid item>
              <Button variant="outlined" onClick={setProjectFalse}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
