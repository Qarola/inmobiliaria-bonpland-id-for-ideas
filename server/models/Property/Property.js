const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    titlePost: {
      type: String,
      require: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
      rooms: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    coveredArea: {
      type: Number,
      required: true
  },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "reserved", "rented", "sold"],
      required: true,
      default: "available",
    },
    contractType: {
      type: String,
      enum: ["rent", "sale"],
      required: true,
    },
    reference: {
      type: String,
      required: true,
      unique: true,
    },
    images: {
        type: [String],
    },
    address: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
