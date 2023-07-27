import express from "express";
import { login, register } from "../cotrollers/userControllers.js";

const router = express.Router()

router.route('/').post(register)
router.route('/login').post(login)


export default router 