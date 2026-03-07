const express = require('express');
const authController=require("../controllers/auth.controllers")

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @description Register new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description Login user,expects email and password in the request body
 * @access Public
 */

authRouter.post("/login",authController.loginUserController)

module.exports=authRouter