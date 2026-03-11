const express = require('express');
const authMiddleware=require("../middlewares/auth.middleware")
const interviewController=require("../controllers/interview.controllers")
const upload=require("../middlewares/file.middleware")


const interviewRouter=express.Router()

/**
 * @route POST /api/interview
 * @description generate new interview report based on the user's self description,resume pdf and job description
 * @access Private
 */
interviewRouter.post("/",authMiddleware.authUser,upload.single("resume"),interviewController.generateInterviewReportController)

module.exports=interviewRouter