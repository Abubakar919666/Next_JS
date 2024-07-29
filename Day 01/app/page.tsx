/*
React.FC
React.ReactNode
*/

import { useState } from "react";
import AllProducts from "./all-products";
import Categories from "./categories";
import MyInfo from "./myinfo";

export default function Home() {
  const [catalist, setCatalist] = useState(
    [
      "mobile Phones",
      "cars",
      "gadget",
      "computer"
    ]);
  return (
    <>
      <MyInfo />
      <Categories />
      <AllProducts />
    </>
  );
}
