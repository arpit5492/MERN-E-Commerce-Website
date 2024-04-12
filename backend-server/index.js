import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

//Middleware functions
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  const prodData = [
    {
      pName: "Jackets",
      price: 32,
    },
    {
      pName: "Jeans",
      price: 21
    }
  ]
  res.json(prodData);
});

app.listen(port, () => {
  console.log(`The server is running on: http://localhost:${port}`);
});