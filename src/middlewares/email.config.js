import nodemailer from "nodemailer";
import 'dotenv/config';

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "vipinmemon7050@gmail.com",
    pass: process.env.PASS,
  },
});
