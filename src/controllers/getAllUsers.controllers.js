import User from "../models/user.models.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // You can use `.select("-password")` to hide passwords if they exist
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { getAllUsers };
