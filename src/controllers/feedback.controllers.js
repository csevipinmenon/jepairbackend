import { feedbackEmail } from "../middlewares/emailMsg.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const sendFeedbackEmail = asyncHandler(async (req, res) => {
  try {
    const { name, email, subject, feedback, message } = req.body;
    console.log(req.body)
    if (!name || !email || !subject || !feedback || !message) {
      return res
        .status(401)
        .json({ message: "All fields are reqired", success: false });
    }

    await feedbackEmail(email, name);
    return res.status(200).json({
      message: "Your feedback submitted successfully!",
      success: true,
    });
  } catch (error) {
    console.log("error in feedback controller", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
      
  }
});

export default sendFeedbackEmail;
