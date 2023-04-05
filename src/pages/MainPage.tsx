import { AppBar, Grid, Toolbar, Menu, MenuItem } from "@mui/material";
import ProjectDisplay from "../components/ProjectDisplay";

export default function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 0.1 }}
        >
          <Grid item>
            <AppBar position="static">
              <Toolbar>
                <Menu
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={true}
                  id="menu-appbar"
                >
                  <MenuItem>Portfolio</MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item>
            <ProjectDisplay />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}
