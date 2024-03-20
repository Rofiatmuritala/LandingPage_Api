import { Router } from "express";
import { addUser } from "../controllers/user_controller.js";


export const router = Router()

router.post("/add-user", addUser)