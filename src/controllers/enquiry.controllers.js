import { asyncHandler } from "../utils/asyncHandler.js";
import {
  sendVerificationCode,
  WelcomeEmail,
  enquiryEmail,
} from "../middlewares/emailMsg.js";
import Email from "../models/emailsend.models.js";

const enquiry = asyncHandler(async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    if (!name || !phone || !email || !message) {
      return res
        .status(401)
        .json({ message: "All fields are reqired", success: false });
    }
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await Email.findOne({ email });
    if (user) {
      user.verificationCode = verificationCode;
      await user.save({ validateBeforeSave: false });
      await sendVerificationCode(user.email, verificationCode, user.name);
      return res
        .status(200)
        .json({ message: "verifiction code send on your email" ,success:true});
    }
    const newuser = await Email.create({
      email,
      name,
      isVerified: true,
      verificationCode,
    });

    await sendVerificationCode(newuser.email, verificationCode, newuser.name);
    await newuser.save();

    return res
      .status(200)
      .json({ message: "verifiction code send on your email" ,success:true});
  } catch (error) {
    console.log("error in enquiry controller", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

const verifyEmail = asyncHandler(async (req, res) => {
  try {
    const { otp } = req.body;
    if (!otp) {
      return res
        .status(501)
        .json({ message: "verification code is emtpy", success: false });
    }

    const user = await Email.findOne({ verificationCode: otp });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid verification code" });
    }
    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();
    await WelcomeEmail(user.email, user.name);
    setTimeout(async () => {
      await enquiryEmail(user.email, user.name);
    }, 10000);

    console.log(user);
    
    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

export { enquiry, verifyEmail };
