import express from "express";
import { getCommonStudents, receiveNotification, suspendStudent } from "../controllers/register.controller.js";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";

const router = express.Router();

router.get('/commonstudents', catchAsyncErrors(getCommonStudents));
router.post('/suspend', catchAsyncErrors(suspendStudent));
router.post('/retrievefornotifications', catchAsyncErrors(receiveNotification));

export default router;
