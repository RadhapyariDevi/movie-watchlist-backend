import express from "express";
import {addToWatchlist, removeFromWatchlist, updateIttemInWatchlist} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/" , addToWatchlist);

router.delete("/:id", removeFromWatchlist);

router.put("/:id", updateIttemInWatchlist);


export default router;