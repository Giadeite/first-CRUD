import express from "express";
import { Product } from "./types/product.model";
import { products } from "./data/products";

const app = express();
app.use(express.json());

import { router as ProductApi } from "./routes/product.route";
app.use("/products", ProductApi);

app.get("/", (req, res) => {
	res.json({ message: "server is running" });
});

app.listen(3000, () => {
	console.log("server on port 3000");
});
