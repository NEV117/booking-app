import express from "express";

import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* router.get("/checkautentication", verifyToken, (req, res, next)=>{
    res.send("user logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("user logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("admin logged in and you can delete all accounts")
})
 */

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getAllUsers)



export default router