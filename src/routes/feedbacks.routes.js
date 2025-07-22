import {Router} from "express"
import sendFeedbackEmail from "../controllers/feedback.controllers.js"

const router = Router()

router.route("/").post(sendFeedbackEmail)

export default router                                                                                                                                                                                   