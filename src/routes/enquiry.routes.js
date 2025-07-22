import { Router } from "express";
import { enquiry } from "../controllers/enquiry.controllers.js";
import { verifyEmail } from "../controllers/enquiry.controllers.js";

const router = Router();

router.route("/").post(enquiry);
router.route("/verify").post(verifyEmail);

export default router;
