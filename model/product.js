import mongoose from "mongoose";
import { Schema } from "mongoose";

const newproduct = new Schema({

    "name": String,
    "price": Number,
    "Quantity": Number,
    "instock": String,
    "description": String,
    "category": String
});

export default mongoose.model("products_data", newproduct);