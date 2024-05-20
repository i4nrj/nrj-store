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
// import { useGetUserInfo } from "../data/useGetDataGrid";
import { useNrjStore } from "../../store";

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
  return "$" + num?.toFixed(2)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export const GridItem = ({ item }) => {
  // const userData = useGetUserInfo();
  const favorites = useNrjStore((s) => s.favorites);
  const setFavorites = useNrjStore((s) => s.setFavorites);
  const purchases = useNrjStore((s) => s.purchases);
  const setPurchases = useNrjStore((s) => s.setPurchases);

  const isFavorite = favorites.find((i) => {
    if (i == item.id) {
      return true;
    }
  });

  const isAddToCart = purchases.find((c) => {
    if (c == item.id) {
      return true;
    }
  });

  const handleSetFavorite = (item) => {
    setFavorites([...favorites, item]);
  };

  const handleRemoveFavorite = (item) => {
    const result = favorites.filter((f) => f !== item);
    setFavorites(result);
  };

  const handleSetPurchases = (item) => {
    setPurchases([...purchases, item]);
  };

  const handleRemovePurchase = (item) => {
    const result = purchases.filter((p) => p !== item);
    setPurchases(result);
  };

  return (
    <Item className="item">
      <Grid item style={{ paddingBottom: 5, fontSize: "16px" }}>
        <span>{item.title}</span>
      </Grid>

      <div style={{ width: 384, height: 384, marginLeft: 5, marginRight: 5 }}>
        <Img src={item.img} />
      </div>
      <Grid item container>
        <Grid
          item
          xs
          container
          direction="column"
          className="grid-container-info"
        >
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
            <Button
              className={isFavorite ? "grid-button-disabled" : "grid-button"}
              disable={isFavorite}
              onClick={
                isFavorite
                  ? () => handleRemoveFavorite(item.id)
                  : () => handleSetFavorite(item.id)
              }
            >
              <Tooltip
                title={isFavorite ? "Remove from favorite" : "Add to favorite"}
              >
                <Favorite fontSize="medium" />
              </Tooltip>
            </Button>
            <Button
              className={isAddToCart ? "grid-button-disabled" : "grid-button"}
              disable={isAddToCart}
              onClick={
                isAddToCart
                  ? () => handleRemovePurchase(item.id)
                  : () => handleSetPurchases(item.id)
              }
            >
              <Tooltip title={isAddToCart ? "Remove from cart" : "Add to cart"}>
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
