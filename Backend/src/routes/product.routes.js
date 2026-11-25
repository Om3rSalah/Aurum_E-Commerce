import express from "express"
import { getAllProducts } from "../controllers/product.controller.js";
import { getAllAccessories } from '../controllers/product.controller.js';
import { getProductBySlug } from '../controllers/product.controller.js';
import { getSimilarProducts } from "../controllers/product.controller.js";


const router = express.Router();



router.get('/getAllProducts' , getAllProducts);
router.get('/getAllAccessories', getAllAccessories);
router.get('/getProductBySlug/:slug', getProductBySlug );
router.get('/getSimilarProducts/:slug', getSimilarProducts );



export default router;