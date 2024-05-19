// import connectDB from "@/db";
// import Razorpay from "razorpay";
// import shortid from "shortid";
// import Hotel from "@/models/hotel-model";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     connectDB();
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY,
//       key_secret: process.env.RAZORPAY_SECRET,
//     });

//     const hotel = await Hotel.findById(req.body.id);
//     if (hotel) {
//       const amount = hotel.price;
//       const options = {
//         amount: (amount * 100).toString(),
//         currency: "INR",
//         receipt: shortid.generate(),
//         payment_capture: 1,
//       };

//       try {
//         const result = await razorpay.orders.create(options);
//          return res.status(201).json({
//            id: result.id,
//            currency: result.currency,
//            amount: result.amount,
//          });
//       } catch (err) {
//          res.status(400).json(err);
//       }
//     }
//   }
// }
import connectDB from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel-pay";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Ensure database connection
      await connectDB();
      console.log("Connected to database");

      // Verify that the environment variables are correctly loaded
      const keyId = process.env.RAZORPAY_KEY;
      const keySecret = process.env.RAZORPAY_SECRET;

      console.log("RAZORPAY_KEY:", keyId);
      console.log("RAZORPAY_SECRET:", keySecret);

      if (!keyId || !keySecret) {
        console.error("Razorpay key or secret not set");
        return res.status(500).json({ error: "Razorpay key or secret not set" });
      }

      const razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
      });
      console.log("Razorpay instance created");

      const hotel = await Hotel.findById(req.body.id);
      if (!hotel) {
        console.log("Hotel not found");
        return res.status(404).json({ error: "Hotel not found" });
      }

      const amount = hotel.price;
      const options = {
        amount: (amount * 100).toString(), // Convert amount to paisa
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture: 1,
      };

      console.log("Creating Razorpay order with options:", options);

      const result = await razorpay.orders.create(options);
      console.log("Razorpay order created:", result);

      return res.status(201).json({
        id: result.id,
        currency: result.currency,
        amount: result.amount,
      });
    } catch (err) {
      console.error("Error creating Razorpay order:", err); // Log the error
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
