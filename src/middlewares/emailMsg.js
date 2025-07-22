import { transporter } from "./email.config.js";
import {
  Verification_Email_Template,
  Welcome_Email_Template,
  Enquiry_Email_Template,
  feedback_Email_Template,
  book_Email_Template,
} from "../middlewares/emailTemplates.js";
export const sendVerificationCode = async (email, verificationCode, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"Jepair Bazaar" <vipinmemon7050@gmail.com>',
      to: email,
      subject: "Welcome to Jepair Bazaar : India largest home service provider",
      text: "verify your email",
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      ).replace("{name}", name),
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};

export const WelcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"Jepair Bazaar" <vipinmemon7050@gmail.com>',
      to: email,
      subject: "Welcome to Jepair Bazaar : India largest home service provider",
      text: "Welcome to Jepair Bazaar",
      html: Welcome_Email_Template.replace("{name}", name),
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};

export const enquiryEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"Jepair Bazaar" <vipinmemon7050@gmail.com>',
      to: email,
      subject: "Welcome to Jepair Bazaar : India largest home service provider",
      text: "Welcome to Jepair Bazaar",
      html: Enquiry_Email_Template.replace("{name}", name),
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};

export const feedbackEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"Jepair Bazaar" <vipinmemon7050@gmail.com>',
      to: email,
      subject: "Welcome to Jepair Bazaar : India largest home service provider",
      text: "Welcome to Jepair Bazaar",
      html: feedback_Email_Template.replace("{name}", name),
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};

// after book

export const bookEmail = async (email, name, servicename, date, address) => {
  try {
    const response = await transporter.sendMail({
      from: '"Jepair Bazaar" <vipinmemon7050@gmail.com>',
      to: email,
      subject: "Service Booking Confirmed – Repair Bazaar",
      text: "Welcome to Jepair Bazaar",
      html: book_Email_Template
        .replace("{name}", name)
        .replace("{servicename}", servicename)
        .replace("{date}", date)
        .replace("{address}", address),
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};
