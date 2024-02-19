import { Request, Response } from "express";

import { Product } from "../models/product.model";
import { products } from "../data/products";

export const getProductById = async (req: Request, res: Response) => {
	try {
		const id = +req.params.id;
		const product = products.find((product) => product.id === id);
		res.status(200).json(product);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export const addProductHandler = async (req: Request, res: Response) => {
	try {
		const product: Product = req.body;
		const newID =
			products.reduce((max, product) => Math.max(max, product.id), 0) + 1;
		products.push({ ...product, id: newID });
		res.status(200).json({ ...products, id: newID });
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export const updateProductHandler = async (req: Request, res: Response) => {
	try {
		const id = +req.params.id;
		const product = products.find((product) => product.id === id);
		if (product) {
			Object.assign(product, req.body);
			res.status(200).json(product);
		} else {
			res.status(404).json({ message: "User not found" });
		}
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export const deleteProductHandler = async (req: Request, res: Response) => {
	try {
		const id = +req.params.id;
		const index = products.findIndex((product) => product.id === id);
		if (index !== -1) {
			products.splice(index, 1);
			res.status(200).json({ message: "User deleted successfully" });
		} else {
			res.status(404).json({ message: "User not found" });
		}
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export const getProduct = async (req: Request, res: Response) => {
	try {
		const queryParams = req.query;

		let filteredProduct: Product[] = [];

		if (queryParams.name) {
			const searchTerm = queryParams.name.toString().toLowerCase();
			filteredProduct = products.filter((product) =>
				product.name.toLowerCase().includes(searchTerm)
			);
		}
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};
