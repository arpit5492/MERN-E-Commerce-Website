import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    pName: "Jacket",
    price: 45,
    img: "https://m.media-amazon.com/images/I/81iOSL3bIfL._AC_SX679_.jpg"
  },
  {
    pName: "Shirt",
    price: 29,
    img: "https://m.media-amazon.com/images/I/61JELqH2RvL._AC_SX679_.jpg"
  },
  {
    pName: "Jeans",
    price: 38,
    img: "https://i.insider.com/64493a3790523900196ff87d?width=1005&format=jpeg&auto=webp"
  },
  {
    pName: "Boots",
    price: 70,
    img: "https://m.media-amazon.com/images/I/717LvSTNqQL._AC_SY695_.jpg"
  },
  {
    pName: "Top",
    price: 43.99,
    img: "https://m.media-amazon.com/images/I/51CFDAxtC3L._AC_SY879_.jpg"
  },
  {
    pName: "Jacket",
    price: 45,
    img: "https://m.media-amazon.com/images/I/81iOSL3bIfL._AC_SX679_.jpg"
  },
  {
    pName: "Baby Boy Jeans",
    price: 27.33,
    img: "https://i.etsystatic.com/7818429/r/il/577a78/1774992767/il_1588xN.1774992767_f507.jpg"
  },
  {
    pName: "Baby Girl Shorts",
    price: 25.23,
    img: "https://i.etsystatic.com/7818429/r/il/d797b1/2035296821/il_1588xN.2035296821_8v41.jpg"
  },
  {
    pName: "Baby Girl Dress",
    price: 5.19,
    img: "https://i.etsystatic.com/41903190/r/il/3cfbd1/4720065558/il_1588xN.4720065558_3xqw.jpg"
  }
];

const prodSlice = createSlice({
  name: "Product",
  initialState
});

export default prodSlice;