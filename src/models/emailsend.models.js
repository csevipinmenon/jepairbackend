import mongoose, { Schema } from "mongoose";

const emailschema = new Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  name: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: String,
});

const Email = mongoose.model("Email", emailschema);

export default Email;
