import express from "express"
import { getUser, createUser, deleteUser, updateUser } from "../controllers/UserController.js"

const router = express.Router()

router.get("/user", getUser)
router.get("/user/:id", getUser)
router.post("/user", createUser)
router.delete("/user/:id", deleteUser)
router.patch("/user/:id", updateUser)

export default router