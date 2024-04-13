import express from "express";
import morgan from "morgan";
import prodCat from "./routes/prodCat.js";
import product from "./routes/products.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

//Middleware functions
app.use(cors());
app.use(morgan("dev"));
app.use("/prodCat", prodCat);
app.use("/prods", product);

app.listen(port, () => {
  console.log(`The server is running on: http://localhost:${port}`);
});