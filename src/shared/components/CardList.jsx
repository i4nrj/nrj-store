import { Box, Grid } from "@mui/material";
import "./../ui/discription.scss";
import { GridItem } from "./GridItem";
import { useGetDataGrid } from "../data/useGetDataGrid";

export const CardList = () => {
  const dataGrid = useGetDataGrid();
  return (
    <Box mx={5} my={5} mb={2} minWidth={200}>
      <Box sx={{ p: 5, textAlign: 'center', display:'flex' }}>
        <Grid container spacing={5} display={'flex'} justifyContent={'center'}>
          {dataGrid.map((item) => {
            return (
              <Grid key={item.id} className="grid-item" item>
                <GridItem item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
