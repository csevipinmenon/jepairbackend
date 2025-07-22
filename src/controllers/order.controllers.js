import Order from "../models/order.models.js";
import User from "../models/user.models.js";

const bookService = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      town,
      state,
      pincode,
      area,
      service,
      date,
      time,
      message,
    } = req.body;

    console.log(req.body);
    // Save user if not exists
    await User.findOneAndUpdate(
      { email },
      { name, phone },
      { upsert: true, new: true }
    );

    const order = await Order.create({
      userEmail: email,
      service,
      location: { town, state, pincode, area },
      date,
      time,
      message,
    });

    res.status(200).json({ message: "Order book successFully", order });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ userEmail: email }).sort({
      createdAt: -1,
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Order cancelled successfully", success: true });
  } catch (error) {
    res.status(500).json({ errror: "Internal Server Error" });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updated = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Status updated", order: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating status" });
  }
};

export {
  bookService,
  getUserOrders,
  cancelOrder,
  updateOrder,
  updateOrderStatus,
};
