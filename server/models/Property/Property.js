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
    },
    featuredProperties: { //Propiedades destacadas
      type: String,
      required: true,
      default: "",
    },
    sellerContact: {
      contact: {
        type: String,
        required: true,
      },
      other_info: {
        type: String,
        default: "", 
      },
      webpage: {
        type: String,
        default: "", 
      },
      area_code: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "", 
      },
      area_code2: {
        type: String,
        default: "", 
      },
      phone2: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "", 
      },
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
