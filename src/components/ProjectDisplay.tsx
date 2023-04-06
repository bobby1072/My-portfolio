import { Grid } from "@mui/material";
import SmallProjectTab from "./SmallProjectTab";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import IApplication from "../common/IApplication";
interface IProjectDisplayProps {
  setProject: (app?: IApplication) => void;
}
export default function ProjectDisplay(props: IProjectDisplayProps) {
  const projects = useContext(AppContext);
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
          <SmallProjectTab project={x} setProject={props.setProject} />
        </Grid>
      ))}
    </Grid>
  );
}
