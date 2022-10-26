import httpClient from "../Utils/httpClient";

export interface Iproduct {
  Id: number;
  Title: string;
  Price: number;
  Description: string;
  Category: string;
  ImageUrl: string;
  Rating: number;
}
async function prodReq(randNum: number): Promise<Iproduct> {
  const productRequest = await httpClient.get(
    `https://fakestoreapi.com/products/${randNum}`
  );
  const productResp = await productRequest.data;
  const productObj: Iproduct = {
    Id: productResp.id,
    Title: productResp.title,
    Price: productResp.price,
    Description: productResp.description,
    Category: productResp.category,
    ImageUrl: productResp.image,
    Rating: productResp.rating.rate,
  };
  return productObj;
}
export default prodReq;
