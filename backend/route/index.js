import express from "express";
import { refreshToken } from "../controllers/refreshToken.js";
import { getUsers, register, login } from "../controllers/User.js";
import { verifyToken } from "../middleware/veriftToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/token', refreshToken);

export default router;
