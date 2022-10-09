import express from "express";
import { getCommonStudents, suspendStudent } from "../controllers/register.controller.js";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";

const router = express.Router();

router.get('/commonstudents', catchAsyncErrors(getCommonStudents));
router.post('/suspend', catchAsyncErrors(suspendStudent));

export default router;
