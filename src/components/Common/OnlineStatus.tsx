import { Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
interface IOnlineStatusProps {
  online: boolean;
}
export default function OnlineStatus(props: IOnlineStatusProps) {
  const { online } = props;
  return online ? (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <CheckCircleIcon color="success" />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" fontSize={20}>
          Online
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <CancelIcon color="error" />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" fontSize={20}>
          Offline
        </Typography>
      </Grid>
    </Grid>
  );
}
