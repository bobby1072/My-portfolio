import { ITechLang } from "../../common/IApplication";
import { Grid, Paper, Typography } from "@mui/material";
interface ITechAndLangProps {
  languages: ITechLang[];
  techs: ITechLang[];
}
export default function TechAndLangs(props: ITechAndLangProps) {
  const { languages, techs } = props;
  const place = [];
  if (
    languages.find((x) => x.position === "Frontend") ||
    techs.find((x) => x.position === "Frontend")
  )
    place.push("Frontend");
  if (
    languages.find((x) => x.position === "Backend") ||
    techs.find((x) => x.position === "Backend")
  )
    place.push("Backend");
  if (
    languages.find((x) => x.position === "DB") ||
    techs.find((x) => x.position === "DB")
  )
    place.push("DB");
  return place.length > 0 ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={2}
    >
      {place.map((depth) => {
        const foundTechs = techs
          .filter((x) => x.position === depth)
          .map((x) => x.name)
          .join(", ");
        const foundLangs = languages
          .filter((x) => x.position === depth)
          .map((x) => x.name)
          .join(", ");
        return (
          <Grid item>
            <Paper sx={{ minHeight: "14vh", backgroundColor: "#e4e4e4" }}>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                direction="column"
                spacing={1}
                sx={{ padding: 1 }}
              >
                <Grid item>
                  <Typography variant="subtitle2" fontSize={20}>
                    {depth}
                  </Typography>
                </Grid>
                {foundTechs.length > 0 && (
                  <Grid item>
                    <Typography variant="subtitle2" fontSize={14}>
                      Technologies: {foundTechs}
                    </Typography>
                  </Grid>
                )}
                {foundLangs.length > 0 && (
                  <Grid item>
                    <Typography variant="subtitle2" fontSize={14}>
                      Languages: {foundLangs}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  ) : null;
}
