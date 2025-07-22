import Stripe from "stripe";
import { asyncHandler } from "../utils/asyncHandler.js";

const stripe = new Stripe(
  process.env.STRIPE
);

const payment = asyncHandler(async (req, res) => {
  try {
    const product = await stripe.products.create({
      name: "Jepair Bazaar",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 100 * 100,
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: price.id, quantity: 1 }],
      mode: "payment",
      success_url: "https://jepair-bazaar-v5at.vercel.app/success",
      cancel_url: "https://jepair-bazaar-v5at.vercel.app/cancel",
      customer_email: "repairbazaar@gmail.com",
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default payment;
