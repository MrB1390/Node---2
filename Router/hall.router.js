import express from "express";
import { createRoom, getRoomDetails } from "../Controller/hall.controller.js";

const router = express.Router();

router.get('/', getRoomDetails)
router.post('/room', createRoom)

export default router;
