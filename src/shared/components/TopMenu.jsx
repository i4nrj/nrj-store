import { Badge, Button, InputAdornment, TextField } from "@mui/material";
import "./../ui/discription.scss";
import {
  ElectricBolt,
  FavoriteBorder,
  Person,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { useNrjStore } from "../../store";

export const TopMenu = () => {
  const favorites = useNrjStore((s) => s.favorites);
  const purchases = useNrjStore((s) => s.purchases);

  return (
    <>
      <div className="top-div-logo">
        <Button className="logo-button" disabled>
          NRJ
          <ElectricBolt />
          Store
        </Button>
      </div>
      <div className="top-div-search">
        <TextField
          placeholder="Store search..."
          className="input-search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
      <div className="top-div-buttons">
        <Button className="top-button">
          <Badge
            badgeContent={favorites.length}
            className="top-badge"
            color="primary"
          >
            <FavoriteBorder sx={{ paddingRight: "5px" }} />
            Favorite
          </Badge>
        </Button>

        <Button className="top-button">
          <Badge
            badgeContent={purchases.length}
            className="top-badge"
            color="primary"
          >
            <ShoppingCart sx={{ paddingRight: "5px" }} />
            Cart
          </Badge>
        </Button>
        <Button className="top-button">
          <Badge>
            <Person sx={{ paddingRight: "5px" }} />
            Login
          </Badge>
        </Button>
      </div>
    </>
  );
};
