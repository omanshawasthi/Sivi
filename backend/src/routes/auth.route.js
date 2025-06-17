import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
// router.post("/signup",(req,res)=>{
//     res.send("signup route");
// });

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);//only for authenticated people,so use protectRoute

router.get("/check", protectRoute, checkAuth);

export default router;