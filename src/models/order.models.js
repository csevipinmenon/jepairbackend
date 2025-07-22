import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    service: { type: String, required: true },

    location: {
      town: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      area: { type: String, required: true },
    },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String },
    status: {
      type: String,
      enum: ["Booked", "Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
