import { enquiryEmail} from "../middlewares/emailMsg.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const sendContactEmail = asyncHandler(async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    if (!name ||!phone || !email || !message) {
      return res
        .status(401)
        .json({ message: "All fields are reqired", success: false });
    }

    await enquiryEmail(email, name);
    return res.status(200).json({
      message: "Your enquiry submitted successfully!",
      success: true,
    });
  } catch (error) {
    console.log("error in enquiry controller", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

export default sendContactEmail;
