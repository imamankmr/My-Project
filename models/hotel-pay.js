import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Add other fields as necessary
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);

export default Hotel;
