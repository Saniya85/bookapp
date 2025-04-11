import express from "express";
import { register, login } from "../controllers/userController";
import {userValidationSchema} from "../Validations/userValidation";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);

export default router;




