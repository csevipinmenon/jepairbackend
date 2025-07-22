import { Router } from "express";
import {
  sendMobileOtp,
  verifyMobileOtp,
} from "../controllers/mobileotp.controllers.js";
const router = Router();

router.route("/").post(sendMobileOtp);
router.route("/verify").post(verifyMobileOtp);

export default router;
