import * as functions from "firebase-functions";
import admin from "firebase-admin";
import { onRequest } from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import Stripe from "stripe";

config();

const stripe = new Stripe(process.env.STRIPE_KEY);

const app = express();

// FIXED — correct CORS usage
app.use(cors({ origin: true }));

// JSON parser
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "Total must be greater than 0 ",
    });
  }
});

// Export your API function
export const api = onRequest(app);
