import express, { Router } from "express";
import {
  bookService,
  getUserOrders,
  cancelOrder,
  updateOrder,
  updateOrderStatus,
} from "../controllers/order.controllers.js";
const router = Router();

router.route("/book").post(bookService);
router.route("/user/:email").get(getUserOrders);
router.route("/cancel/:id").delete(cancelOrder);
router.route("/update/:id").post(updateOrder);
router.route("/status/:id").put(updateOrderStatus);

export default router;
