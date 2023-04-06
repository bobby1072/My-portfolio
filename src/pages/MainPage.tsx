import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import ProjectDisplay from "../components/ProjectDisplay";

export default function MainPage() {
  return (
    <div>
      <div className="App">
        <Box
          sx={{
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.9)",
            mb: 6,
          }}
        >
          <AppBar position="static" sx={{ padding: 2.5 }}>
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
        >
          <Grid item>
            <ProjectDisplay />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
