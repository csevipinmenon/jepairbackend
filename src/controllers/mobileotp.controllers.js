import { asyncHandler } from "../utils/asyncHandler.js";
import twilio from "twilio";
import { bookEmail } from "../middlewares/emailMsg.js";
import 'dotenv/config';

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = twilio(accountSid, authToken);
const otpStore = {};

const normalizePhone = (phone) => {
  return phone.startsWith("+91") ? phone : `+91${phone}`;
};

const sendMobileOtp = asyncHandler(async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  const rawPhone = phone;
  const fullPhone = normalizePhone(phone);

  client.messages
    .create({
      body: `From Jepair Bazaar: Your OTP is ${otp}`,
      from: "+14433001755",
      to: fullPhone,
    })
    .then(() => {
      otpStore[fullPhone] = otp;
      console.log("Stored OTP for:", fullPhone, "OTP:", otp);
      res.status(200).json({ message: "OTP sent successfully", success: true });
    })

    .catch((error) => {
      console.error("Error sending OTP:", error);
      res.status(500).json({ message: "Error sending OTP", success: false });
    });
});

const verifyMobileOtp = asyncHandler(async (req, res) => {
  const { phone, otp, email, name, address, service, date } = req.body;
  if (!phone || !otp) {
    return res
      .status(400)
      .json({ message: "Phone number and OTP are required", success: false });
  }

  const fullPhone = normalizePhone(phone);
  const storedOtp = otpStore[fullPhone];
  console.log(
    "Looking up OTP for:",
    fullPhone,
    "Stored:",
    storedOtp,
    "Received:",
    otp
  );

  if (storedOtp?.toString() === otp?.toString()) {
    delete otpStore[fullPhone];

    await bookEmail(email, name, service, date, address);

    return res
      .status(200)
      .json({ message: "OTP verified successfully", success: true });
  } else {
    return res
      .status(400)
      .json({ message: "OTP not verified", success: false });
  }
});

export { sendMobileOtp, verifyMobileOtp };
