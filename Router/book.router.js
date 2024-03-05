import express from "express";
import { bookCount, bookRoom, bookedRoom, customerData } from "../Controller/hall.controller.js";


const router = express.Router();

router.post('/book',bookRoom)
router.get('/booked-room',bookedRoom)
router.get('/booked-cust',customerData)
router.get('/booked-count/:customer_name',bookCount)


export default router;