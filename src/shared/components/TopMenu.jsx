import { Button, InputAdornment, TextField } from "@mui/material";
import "./../ui/discription.scss";
import {
  ElectricBolt,
  FavoriteBorder,
  Person,
  Search,
  ShoppingCart,
} from "@mui/icons-material";

export const TopMenu = () => {
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
          <FavoriteBorder fontSize="" sx={{ paddingRight: "5px" }} />
          Favorite
        </Button>
        <Button className="top-button">
          <ShoppingCart fontSize="" sx={{ paddingRight: "5px" }} />
          Cart
        </Button>
        <Button className="top-button">
          <Person fontSize="" sx={{ paddingRight: "5px" }} />
          Login
        </Button>
      </div>
    </>
  );
};
