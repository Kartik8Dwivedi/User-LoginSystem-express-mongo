import express from "express";
import { home,register,login } from "../controllers/userController.js";

const router = express.Router()

router.get('/', home)
router.post('/register', register)
router.post('/login', login)

export default router