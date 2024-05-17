import { Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div className="footer">
      <div style={{marginRight: '10%', marginLeft: '10%', paddingTop: 20, borderBottom: '1px solid'}}>
        <Grid item container >
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-info"
            
          >
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                LOGO
              </Typography>
              <Typography variant="body2" className="item-text" gutterBottom>
                SOLOGAN
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-price"
          >
            <Grid item xs>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  WEEBLE THEMES
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  PRE-SALE FAQS
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  SUBMIT A TICKET
                </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-price"
          >
            <Grid item xs>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  SERVICES
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  THEME TWEAK
                </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-price"
          >
            <Grid item xs>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  SHOWCASE
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  WIDGETKIT
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  SUPPORT
                </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            className="grid-container-price"
          >
            <Grid item xs>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  ABOUT US
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  CONTACT US
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  AFFILATES
                </Typography>
              </a>
              <a href={""} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" className="item-text" gutterBottom>
                  RESOURCES
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
