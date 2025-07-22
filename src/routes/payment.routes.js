import { Router } from "express";
import payment from "../controllers/payment.controllers.js";

const router = Router();

router.route("/").post(payment);

export default router;
