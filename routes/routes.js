import express from "express";
import { getCommonStudents, receiveNotification, registerStudents, suspendStudent } from "../controllers/register.controller.js";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";

const router = express.Router();

router.get('/commonstudents', catchAsyncErrors(getCommonStudents));
router.post('/suspend', catchAsyncErrors(suspendStudent));
router.post('/retrievefornotifications', catchAsyncErrors(receiveNotification));
router.post('/register', catchAsyncErrors(registerStudents));

export default router;
