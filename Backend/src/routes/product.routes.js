import express from "express"
import { getAllProducts } from "../controllers/product.controller.js";
import { getAllAccessories } from '../controllers/product.controller.js';


const router = express.Router();



router.get('/getAllProducts' , getAllProducts);
router.get('/getAllAccessories', getAllAccessories);



export default router;