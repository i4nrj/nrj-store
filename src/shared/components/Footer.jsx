import {
  ElectricBolt,
  GitHub,
  Google,
  Telegram,
} from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div className="footer">
      <div style={{ marginRight: "10%", marginLeft: "10%", paddingTop: 20 }}>
        <Grid item container>
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-footer"
          >
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <Button className="footer-button" disabled>
                  NRJ
                  <ElectricBolt />
                  Store
                </Button>
              </Typography>
              <Typography
                variant="body2"
                className="footer-text"
                gutterBottom
                sx={{ fontSize: "16px" }}
              >
                In the darkest night always be the light
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-footer"
            sx={{ borderRight: "1px solid", borderLeft: "1px solid" }}
          >
            <Grid item xs>
              <Typography variant="body2" className="footer-text" gutterBottom>
                ABOUT US
              </Typography>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  className="footer-text"
                  gutterBottom
                >
                  Contacts
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  className="footer-text"
                  gutterBottom
                >
                  Support
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  className="footer-text"
                  gutterBottom
                >
                  Showcase
                </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-footer"
          >
            <Grid item>
              <Typography variant="body2" className="footer-text" gutterBottom>
                JOIN US ON
              </Typography>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  className="item-text"
                  gutterBottom
                  sx={{ display: "flex", justifyContent: "center", gap: 2 }}
                >
                  <Telegram />
                  <GitHub />
                  <Google />
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "#0e1018",
        }}
      >
        <Grid item container>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Typography variant="body2" className="copyright-text" gutterBottom>
              Designed & Maintained by Ivan Frolov
            </Typography>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Typography variant="body2" className="copyright-text" gutterBottom>
              Copyright © 2024 i4nrj
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
