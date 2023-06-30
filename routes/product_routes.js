import express from "express";
import { create, filterbyPriceRange, filterby_category_price, filterbycategory, getTotalProducts, pagination } from "../controllers/product_controller.js";


const router = express.Router();

router.post("/create", create);
router.get("/getTotalProducts",getTotalProducts);
router.post("/filterbycategory",filterbycategory);
router.post("/filterbyPriceRange", filterbyPriceRange);
router.post("/filterby_category_price", filterby_category_price);
router.post("/pagination", pagination);


export default router;
