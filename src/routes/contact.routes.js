import { Router } from "express";
import sendContactEmail from "../controllers/contactemail.controllers.js";

const router = Router();

router.route("/").post(sendContactEmail);

export default router;
