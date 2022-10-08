import express from "express";
import { getCommonStudents } from "../controllers/register.controller.js";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";

const router = express.Router();

router.get('/commonstudents', catchAsyncErrors(getCommonStudents))

export default router;
