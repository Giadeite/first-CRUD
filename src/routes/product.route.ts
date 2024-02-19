import { Router } from 'express';

export const router = Router();

import {
    addProductHandler,
    deleteProductHandler,
    getProductById,
    getProduct,
    updateProductHandler,
} from "../controllers/product.controller";

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", addProductHandler);
router.delete("/:id", deleteProductHandler);
router.patch("/:id", updateProductHandler);