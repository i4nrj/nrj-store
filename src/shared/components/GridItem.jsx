import { Favorite, ShoppingCart } from "@mui/icons-material";
import {
  Button,
  Grid,
  Paper,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "5px",
});

function currencyFormat(num) {
  return '$' +num?.toFixed(2)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") ;
}

export const GridItem = ({ item }) => {
  return (
    <Item className="item">
      <Grid item style={{paddingBottom:5, fontSize: '16px'}}>
        <span>{item.title}</span>
      </Grid>

      <div style={{ width: 384, height: 384, marginLeft: 5, marginRight: 5 }}>
        <Img src={item.img} />
      </div>
      <Grid item container>
        <Grid item xs container direction="column" className="grid-container-info">
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" className="item-text" gutterBottom>
              Height: {item.height} mm
            </Typography>
            <Typography variant="body2" className="item-text" gutterBottom>
              Width: {item.width} mm
            </Typography>
            <Typography variant="body2" className="item-text">
              ID: {item.id}
            </Typography>
          </Grid>
        </Grid>
        <Grid item className="grid-container-price">
          <Typography variant="subtitle1" component="div">
            {currencyFormat(item.price)}
          </Typography>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <Button className="grid-button">
              <Tooltip title="В избранное">
                <Favorite fontSize="medium" />
              </Tooltip>
            </Button>
            <Button className="grid-button">
              <Tooltip title="В корзину">
                <ShoppingCart />
              </Tooltip>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Item>
  );
};

GridItem.propTypes = {
  item: PropTypes.object,
};
