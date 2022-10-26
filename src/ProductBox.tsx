import { Iproduct } from "./Requests/ProductRequest";
import Button from "@mui/material/Button";
interface IproductBoxProps {
  ProductList: Iproduct[];
  addItemToBask: (product: Iproduct) => void;
}
interface IsingleProductBoxProps {
  Product: Iproduct;
  addItemToBask: (product: Iproduct) => void;
}
function ProductBox(props: IsingleProductBoxProps): JSX.Element {
  const productToDisplay: Iproduct = props.Product;
  return (
    <div className="productBoxDiv">
      <h5>{productToDisplay.Title}</h5>
      <img src={productToDisplay.ImageUrl} alt={productToDisplay.Title} />
      <p>{productToDisplay.Description}</p>
      <p>Category: {productToDisplay.Category}</p>
      <p>Stars: {productToDisplay.Rating}</p>
      <p>Price: £{productToDisplay.Price}</p>
      <Button
        variant="contained"
        sx={{ width: 100 }}
        color="error"
        onClick={() => {
          props.addItemToBask(productToDisplay);
        }}
      >
        Add item to basket
      </Button>
    </div>
  );
}
function ProductBoxMap(props: IproductBoxProps): JSX.Element {
  return (
    <div className="topLevelDiv">
      {props.ProductList.map((element) => {
        return (
          <div className="MainProdListDiv">
            <ProductBox Product={element} addItemToBask={props.addItemToBask} />
          </div>
        );
      })}
    </div>
  );
}
export default ProductBoxMap;
