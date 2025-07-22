import express from "express";
import { getAllUsers } from "../controllers/getAllUsers.controllers.js";

const router = express.Router();

router.route("/all").get(getAllUsers); // Example: GET /jepairbazaar/users/all

export default router;
