import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./logger.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";

const app = express();

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use(
  cors({
    origin: "https://jepair-bazaar-v5at.vercel.app/",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());

//import routes

import emailRouter from "./routes/enquiry.routes.js";
import feedbackRouter from "./routes/feedbacks.routes.js";
import contactRouter from "./routes/contact.routes.js";
import mobileotpRouter from "./routes/mobileotp.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import orderRoutes from "./routes/order.routes.js";
import getAllUsersRoutes from "./routes/getAllUser.routes.js";

//use routes

app.use("/jepairbazaar/enquiry", emailRouter);
app.use("/jepairbazaar/feedback", feedbackRouter);
app.use("/jepairbazaar/contact", contactRouter);
app.use("/jepairbazaar/mobileotp", mobileotpRouter);
app.use("/jepairbazaar/payment", paymentRouter);
app.use("/jepairbazaar/order", orderRoutes);
app.use("/jepairbazaar/users", getAllUsersRoutes);

app.post("/vipin", (req, res) => {
  res.send("hello");
});

export default app;
