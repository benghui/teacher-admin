import express from "express";
import { getCommonStudents, receiveNotification, registerStudents, suspendStudent } from "../controllers/register.controller.js";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { registerValidation, suspendValidation, notificationValidation } from "../utils/validate.js";

const router = express.Router();

router.get('/commonstudents', catchAsyncErrors(getCommonStudents));
router.post('/suspend', validate(suspendValidation), catchAsyncErrors(suspendStudent));
router.post('/retrievefornotifications', validate(notificationValidation),catchAsyncErrors(receiveNotification));
router.post('/register', validate(registerValidation),catchAsyncErrors(registerStudents));

export default router;
