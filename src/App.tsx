import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import prodReq, { Iproduct } from "./Requests/ProductRequest";
function App(): JSX.Element {
  const [searchButtonLoading, setSearchButtonLoading] =
    React.useState<boolean>(false);
  const [products, setProducts] = React.useState<Iproduct[]>();
  React.useEffect(() => {
    products && console.log(products);
  }, [products]);
  return (
    <div className="projects">
      <div className="centerDiv--viewCatches">
        <LoadingButton
          sx={{ width: 100, mb: 2 }}
          onClick={async () => {
            setSearchButtonLoading(true);
            let uniqueNums: boolean = false;
            let randProdNum1: number = 0;
            let randProdNum2: number = 0;
            let randProdNum3: number = 0;
            while (!uniqueNums) {
              randProdNum1 = Math.floor(Math.random() * 20);
              randProdNum2 = Math.floor(Math.random() * 20);
              randProdNum3 = Math.floor(Math.random() * 20);
              if (
                !(
                  randProdNum3 === randProdNum2 ||
                  randProdNum1 === randProdNum2 ||
                  randProdNum1 === randProdNum3
                )
              ) {
                uniqueNums = true;
              }
            }
            const prod1 = randProdNum1 && (await prodReq(randProdNum1));
            const prod2 = randProdNum2 && (await prodReq(randProdNum2));
            const prod3 = randProdNum3 && (await prodReq(randProdNum3));
            prod1 && prod2 && prod3 && setProducts([prod1, prod2, prod3]);
            setSearchButtonLoading(false);
          }}
          loading={searchButtonLoading}
          variant="contained"
        >
          Search random products
        </LoadingButton>
      </div>
    </div>
  );
}

export default App;
