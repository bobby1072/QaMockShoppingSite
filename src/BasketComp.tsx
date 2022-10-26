import { Iproduct } from "./Requests/ProductRequest";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
interface IBasketProps {
  Items: Iproduct[];
  removeItemFromBasket: (item: Iproduct) => void;
}
interface IBasketItemProps {
  SingleItem: Iproduct;
  removeItemFromBasket: (item: Iproduct) => void;
}
const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});
function BasketItem(props: IBasketItemProps): JSX.Element {
  const myItem = props.SingleItem;
  return (
    <div className="BasketItem">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>
            {`Price: £${myItem.Price}`}
          </Box>
          <Box
            sx={{ color: "text.primary", fontSize: 24, fontWeight: "medium" }}
          >
            {myItem.Title}
          </Box>
        </Box>
      </ThemeProvider>
      <DeleteIcon
        onClick={() => {
          props.removeItemFromBasket(myItem);
        }}
      />
    </div>
  );
}
function BasketDisplay(props: IBasketProps): JSX.Element {
  const item = props.Items;
  return (
    <div className="topLevelDiv">
      <div className="BasketBox">
        {item.map((element) => (
          <BasketItem
            SingleItem={element}
            removeItemFromBasket={props.removeItemFromBasket}
          />
        ))}
      </div>
    </div>
  );
}
export default BasketDisplay;
