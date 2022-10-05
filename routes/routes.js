import express from "express";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";

const router = express.Router();

router.get('/hello', catchAsyncErrors(async (req, res, next) => {
	const data = 'hello';
	res.send(data);
}))

export default router;
