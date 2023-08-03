import express from "express";
import { isAdmin, registerController, loginController, testController } from '../controllers/authController.js'
import { requireSignIn } from "../middlewares/authMiddleWare.js";
//router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);              // post req means.... that we are getting some information from the client, that they are posting us their info

// LOGIN || POST
router.post('/login', loginController);

// TEST
router.get('/test', requireSignIn, isAdmin, testController);


export default router;