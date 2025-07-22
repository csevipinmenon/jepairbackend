import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/user.models.js";

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email, email_verified, name } = req.body;
    if (!email || !email_verified || !name) {
      return res.status(409).json({
        message: "All fields are required",
        success: false,
      });
    }
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(201)
        .json({ message: "You were logged in earlier", success: true });
    }

    const newUser = await User.create({
      email,
      email_verified,
      name,
    });
    if (!newUser) {
      return res.status(401).json({
        message: "Something went wrong while register the user",
        success: false,
      });
    }
    return res
      .status(200)
      .json({ message: "User Login Successfully", success: true });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong while regidter the user", success: false });
  }
});

export { registerUser };
