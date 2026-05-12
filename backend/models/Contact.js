// const mongoose = require('mongoose');
// const contactSchema = new mongoose.Schema({
//   firstName: { type: String, required: [true, "First name is required"] },
//   lastName: { type: String, required: [true, "Last name is required"] },
//   phoneNumber: {
//     type: String,
//     required: [true, "Phone number is required"],
//     validate: {
//       validator: function (v) {
//         return /^\d{10}$/.test(v);
//       },
//       message: "Phone number must be 10 digits.",
//     },
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     // validate: {
//     //   validator: function (v) {
//     //     return /.+@.+\..+/.test(v);
//     //   },
//     //   message: "Enter a valid email address",
//     // },
//     match: [/.+@.+\..+/, "Enter a valid email address"],
//     unique: true,
//   },

//   address: { type: String, required: [true, "Address is required"] },
// });
// module.exports = mongoose.model('Contact', contactSchema);
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
});

module.exports = mongoose.model("Contact", contactSchema);
